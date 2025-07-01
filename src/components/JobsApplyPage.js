import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import { MyButton } from './mini_components/MyButton';
import Footer from './Footer';
import MyLink from './mini_components/MyLink';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

const JobsApplyPage = () => {
    const activeLink = { link1: false, link2: false, link3: false, link4: false, link5: true, link6: false };

    const navigate = useNavigate();

    const [selectedJob, setSelectedJob] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [customJob, setCustomJob] = useState('');
    const [contactOptions, setContactOptions] = useState({
        phone: false,
        sms: false,
        whatsapp: false,
        email: false
    });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [cvFile, setCvFile] = useState(null);

    const [loading, setLoading] = useState(false);

    // Simulate radio behavior using checkboxes
    const handleJobSelection = (jobId) => {
        const jobMap = {
            'job-title1': 'Apotheker/in',
            'job-title2': 'Arzt / Ärztin',
            'job-title3': 'Fachfrau/-mann Apotheke',
            'job-title4': 'med. Praxisassistent/in',
            'job-title10': 'job-title10'
        };

        const selectedTitle = jobMap[jobId];

        // Toggle selection
        setSelectedJob(prev => (prev === selectedTitle ? '' : selectedTitle));
        setJobTitle(prev => (prev === selectedTitle ? '' : selectedTitle)); // set actual job title

        // Uncheck all checkboxes manually
        Object.keys(jobMap).forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = (id === jobId);
        });
    };


    const handleContactChange = (e) => {
        const { id, checked } = e.target;
        setContactOptions(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert('Please verify the reCAPTCHA!');
            return;
        }

        if (!cvFile) {
            alert('Upload your CV');
            return;
        }

        const formData = new FormData();

        // Add all form fields
        formData.append('jobTitle', jobTitle);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phoneNumber', phoneNumber);
        formData.append('email', email);
        formData.append('message', message);

        let empty = true;

        // Append multiple contactBy values
        Object.entries(contactOptions).forEach(([key, value]) => {
            if (value) {
                formData.append('contactBy[]', key); // backend will receive contactBy as an array
                empty = false;
            }
        });

        if(empty){
            alert('please fill all required fields');
            return;
        }

        // Add CV file
        formData.append('cvFile', cvFile); // assuming fileInput is an <input type="file" />

        setLoading(true)
        
        navigate('/vielen-dank');

        // Send the request
        const res = await fetch('https://medzentrum.ch/apply_job', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();

        console.log('data', data)

        if(data.status){
            // navigate('/vielen-dank');
        }
        else{
            alert(data.message);
        }

        setLoading(false)
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== "application/pdf") {
                alert("Only PDF files are allowed.");
                e.target.value = null;  // reset input
                return;
            }
            if (file.size > 10 * 1024 * 1024) { // 10 MB in bytes
                alert("File size must be less than 10 MB.");
                e.target.value = null;  // reset input
                return;
            }

            console.log(file)
            setCvFile(file);
        }
    }

    return (
        <div className='jobs-apply-page'>
            <Navbar activeLink={activeLink} />

            <section className='wi_full banner_sec job_banner_sec p-0'></section>

            <section className='breadcrumb_sec wi_full mt_3'>
                <MyButton buttonText='Jetzt bewerben!' activePage='Jobs' />
            </section>

            <section className="wi_full py_3 job_sec">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div style={{ display: 'inline-block' }}>
                                <h3>Für welche Stelle möchten Sie sich bewerben?</h3>
                                {['job-title1', 'job-title2', 'job-title3', 'job-title4'].map((id, index) => (
                                    <div key={id} className="form-check ps-0">
                                        <input
                                            type="checkbox"
                                            id={id}
                                            onChange={() => handleJobSelection(id)}
                                        />
                                        <label className='job-title' htmlFor={id}>
                                            {
                                                ['Apotheker/in', 'Arzt / Ärztin', 'Fachfrau/-mann Apotheke', 'med. Praxisassistent/in'][index]
                                            }
                                        </label>
                                    </div>
                                ))}
                                <div className="form-check ps-0 mt-2">
                                    <input
                                        type="checkbox"
                                        id='job-title10'
                                        onChange={() => handleJobSelection('job-title10')}
                                    />
                                    <label className='custom-label' htmlFor='job-title10'>
                                        <input
                                            type="text"
                                            disabled={selectedJob !== 'job-title10'}
                                            placeholder='Ihre Wunschposition?'
                                            onChange={(e) => setCustomJob(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h3>Wie dürfen wir Sie kontaktieren?</h3>
                            {[
                                { id: 'Telefon', label: 'per Telefon' },
                                { id: 'SMS', label: 'per SMS' },
                                { id: 'WhatsApp', label: 'per WhatsApp' },
                                { id: 'Mail', label: 'per Mail' }
                            ].map(opt => (
                                <div key={opt.id} className="form-check ps-0">
                                    <input
                                        type="checkbox"
                                        id={opt.id}
                                        checked={contactOptions[opt.id]}
                                        onChange={handleContactChange}
                                    />
                                    <label htmlFor={opt.id}>{opt.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="job-apply-form mt-xl-5 mt-4 p_4">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 mb-4">
                                    <input type="text" required placeholder='Vorname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="text" required placeholder='Nachname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="number" required placeholder='Telefon' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <input type="email" required placeholder='E-Mail-Adresse' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-12 mb-3">
                                    <textarea className='message-box' required placeholder='Bemerkung' value={message} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="upload-files mb-3 mb-md-0 me-4 me-md-0">
                                            <input className='d-none' accept="application/pdf" type="file" id='uploadId' onChange={(e) => handleFileUpload(e)} />
                                            <div className='upload-box'>
                                                {!cvFile ? (
                                                    <label htmlFor="uploadId">
                                                        <h5>CV Upload</h5>
                                                        <small>PDF max. 10 MB</small>
                                                    </label>
                                                ) : (
                                                    <label>
                                                        <h5>File Uploaded</h5>
                                                        <small>{cvFile?.name}</small>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className="google-capcha">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey="6Ld2NW0rAAAAAKTRTqIVJWRm5CGqyD_UshSajKQr" // 🔁 Replace with your actual site key

                                                onChange={(token) => setRecaptchaToken(token)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="homepage-btn mb-3 mb-sm-0 me-4 me-md-0">
                                            <MyLink text={'Zur Startseite'} link={'/'} fullBtn={true} />
                                        </div>
                                        <button disabled={loading} className="submit-btn border-0 mb-3 mb-sm-0" type='submit'>
                                            <MyLink text={'JETZT BEWERBEN'} fullBtn={true} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JobsApplyPage;
