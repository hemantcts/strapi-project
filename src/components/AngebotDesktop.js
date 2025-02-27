import React from "react";
import tickIcon from '../images/tick-icon.svg'

export const AngebotDesktop = ({ blogs, color }) => {
    return (
        <div className='row angebot_table_row'>
            <div className='table_col'>
                <div className='tble_col_heading'>
                    <ul>
                        <li>Angebot</li>
                        <li>MedBasic</li>
                        <li>MedBasic plus</li>
                        <li>MedIntensiv</li>
                    </ul>
                </div>
                <div className='tble_col_content'>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Standortanalyse, Beratung und Verlaufsmessung</p></li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Termine vor Ort</p></li>
                        <li>3</li>
                        <li>3</li>
                        <li>8</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Telefontermin</p></li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></li>
                        <li>-</li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>BIA- und Kalipermessung</p></li>
                        <li>3</li>
                        <li>3</li>
                        <li>8</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Regenerations- und Bedürfnisfragebogen</p></li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Individuelle Ernährungspläne</p></li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Individuelle Bewegungs- und Trainingsempfehlungen</p></li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                        <li>Inklusiv</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Standortanalyse</p></li>
                        <li>90 Min.</li>
                        <li>90 Min.</li>
                        <li>90 Min.</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Telefontermin</p></li>
                        <li>30 Min.</li>
                        <li>30 Min.</li>
                        <li>30 Min.</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Beratung und Verlaufsmessung</p></li>
                        <li>2 x 60 Min.</li>
                        <li>2 x 60 Min.</li>
                        <li>2 x 60 Min. + 4 x 45 Min.</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></li>
                        <li>-</li>
                        <li>60 Min.</li>
                        <li>60 Min.</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Abschlusstermin</p></li>
                        <li>-</li>
                        <li>-</li>
                        <li>60 Min.</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Preis Selbstzahler</p></li>
                        <li>650.–</li>
                        <li>870.–</li>
                        <li>1500.–</li>
                    </ul>
                    <ul>
                        <li><img src={tickIcon} alt='#' /> <p>Preis mit ärztlicher Verordnung</p></li>
                        <li>170.–</li>
                        <li>390.–</li>
                        <li>630.–</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}