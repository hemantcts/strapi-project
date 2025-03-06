import React from "react";
import tickIcon from '../images/tick-icon.svg'

export const AngebotMobile = ({ blogs, color }) => {
    return (
        // <div className='table-responsive'>
        //     <table className='table w-100'>
        //         <tr>
        //             <th> &nbsp;</th>
        //             <th>MedBasic</th>
        //             <th>MedBasic plus</th>
        //             <th>MedIntensiv</th>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Standortanalyse, Beratung und Verlaufsmessung</p></td>
        //             <td>-</td>
        //             <td>-</td>
        //             <td>-</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Termine vor Ort</p></td>
        //             <td>3</td>
        //             <td>3</td>
        //             <td>8</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Telefontermin</p></td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></td>
        //             <td>-</td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>BIA- und Kalipermessung</p></td>
        //             <td>3</td>
        //             <td>3</td>
        //             <td>8</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Regenerations- und Bedürfnisfragebogen</p></td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Individuelle Ernährungspläne</p></td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Individuelle Bewegungs- und Trainingsempfehlungen</p></td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //             <td>Inklusiv</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Standortanalyse</p></td>
        //             <td>90 Min.</td>
        //             <td>90 Min.</td>
        //             <td>90 Min.</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Telefontermin</p></td>
        //             <td>30 Min.</td>
        //             <td>30 Min.</td>
        //             <td>30 Min.</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Beratung und Verlaufsmessung</p></td>
        //             <td>2 x 60 Min.</td>
        //             <td>2 x 60 Min.</td>
        //             <td>2 x 60 Min. + 4 x 45 Min.</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></td>
        //             <td>-</td>
        //             <td>60 Min.</td>
        //             <td>60 Min.</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Abschlusstermin</p></td>
        //             <td>-</td>
        //             <td>-</td>
        //             <td>60 Min.</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Preis Selbstzahler</p></td>
        //             <td>650.–</td>
        //             <td>870.–</td>
        //             <td>1500.–</td>
        //         </tr>
        //         <tr>
        //             <td><img src={tickIcon} alt='#' /> <p>Preis mit ärztlicher Verordnung</p></td>
        //             <td>170.–</td>
        //             <td>390.–</td>
        //             <td>630.–</td>
        //         </tr>
        //     </table>
        // </div>
        <div className="angbot_moble_card">
            <div className="row">
                <div className="col-12 mob_margn">
                    <div className="card">
                        <div className="card-header">
                            <h2>MedBasic</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><span>Standortanalyse, Beratung und Verlaufsmessung</span>-</li>
                                <li><span>Termine vor Ort</span>3</li>
                                <li><span>Telefontermin</span>1</li>
                                <li><span>Spiroergometrie</span>-</li>
                                <li><span>BIA- und Kalipermessung</span>3</li>
                                <li><span>Regenerations- und Bedürfnisfragebogen</span>Inklusiv</li>
                                <li><span>Individuelle Ernährungspläne</span>Inklusiv</li>
                                <li><span>Individuelle Bewegungs- und Trainingsempfehlungen</span>Inklusiv</li>
                                <li><span>Standortanalyse</span>90 Min.</li>
                                <li><span>Telefontermin</span>30 Min.</li>
                                <li><span>Beratung und Verlaufsmessung</span>2 x 60 Min.</li>
                                <li><span>Spiroergometrie</span>-</li>
                                <li><span>Abschlusstermin</span>-</li>
                                <li><span>Preis Selbstzahler</span>650.–</li>
                                <li><span>Preis mit ärztlicher Verordnung</span>170.–</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 mob_margn">
                    <div className="card">
                        <div className="card-header">
                            <h2>MedBasic plus</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><span>Standortanalyse, Beratung und Verlaufsmessung</span>-</li>
                                <li><span>Termine vor Ort</span>3</li>
                                <li><span>Telefontermin</span>1</li>
                                <li><span>Spiroergometrie</span>Inklusiv</li>
                                <li><span>BIA- und Kalipermessung</span>3</li>
                                <li><span>Regenerations- und Bedürfnisfragebogen</span>Inklusiv</li>
                                <li><span>Individuelle Ernährungspläne</span>Inklusiv</li>
                                <li><span>Individuelle Bewegungs- und Trainingsempfehlungen</span>Inklusiv</li>
                                <li><span>Standortanalyse</span>90 Min.</li>
                                <li><span>Telefontermin</span>30 Min.</li>
                                <li><span>Beratung und Verlaufsmessung</span>2 x 60 Min.</li>
                                <li><span>Spiroergometrie</span>60 Min.</li>
                                <li><span>Abschlusstermin</span>-</li>
                                <li><span>Preis Selbstzahler</span>870.–</li>
                                <li><span>Preis mit ärztlicher Verordnung</span>390.–</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 mob_margn">
                    <div className="card">
                        <div className="card-header">
                            <h2>MedIntensiv</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><span>Standortanalyse, Beratung und Verlaufsmessung</span>-</li>
                                <li><span>Termine vor Ort</span>8</li>
                                <li><span>Telefontermin</span>1</li>
                                <li><span>Spiroergometrie</span>Inklusiv</li>
                                <li><span>BIA- und Kalipermessung</span>8</li>
                                <li><span>Regenerations- und Bedürfnisfragebogen</span>Inklusiv</li>
                                <li><span>Individuelle Ernährungspläne</span>Inklusiv</li>
                                <li><span>Individuelle Bewegungs- und Trainingsempfehlungen</span>Inklusiv</li>
                                <li><span>Standortanalyse</span>90 Min.</li>
                                <li><span>Telefontermin</span>30 Min.</li>
                                <li><span>Beratung und Verlaufsmessung</span>2 x 60 Min. + 4 x 45 Min.</li>
                                <li><span>Spiroergometrie</span>60 Min.</li>
                                <li><span>Abschlusstermin</span>60 Min.</li>
                                <li><span>Preis Selbstzahler</span>1500.–</li>
                                <li><span>Preis mit ärztlicher Verordnung</span>630.–</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}