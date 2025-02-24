import React, { useEffect } from 'react';

const Iframe = () => {
    useEffect(() => {
        // Function to resolve offset
        window.medicosearchWidgetOffsetResolver = () => {
            return window.innerWidth > 991 ? 111 : 0;
        };

        // Load the script dynamically
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.medicosearch.ch/widget/api/js?key=cf6e81d5-aba8-4a96-a958-aa77691762b3&version=2.0.0&offsetYResolver=medicosearchWidgetOffsetResolver&container=%23medicosearchWidget';
        script.async = true;
        
        document.body.appendChild(script);
    }, []);

    return (
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                            <div className="wpb_wrapper">
                                <div id="medicosearchWidget"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Iframe;