import React from "react";
import tickIcon from '../images/tick-icon.svg'

export const AngebotMobile = ({ blogs, color }) => {
    return (
        <div className='table-responsive'>
            <table className='table w-100'>
                <tr>
                    <th> &nbsp;</th>
                    <th>MedBasic</th>
                    <th>MedBasic plus</th>
                    <th>MedIntensiv</th>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Standortanalyse, Beratung und Verlaufsmessung</p></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Termine vor Ort</p></td>
                    <td>3</td>
                    <td>3</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Telefontermin</p></td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></td>
                    <td>-</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>BIA- und Kalipermessung</p></td>
                    <td>3</td>
                    <td>3</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Regenerations- und Bedürfnisfragebogen</p></td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Individuelle Ernährungspläne</p></td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Individuelle Bewegungs- und Trainingsempfehlungen</p></td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Standortanalyse</p></td>
                    <td>90 Min.</td>
                    <td>90 Min.</td>
                    <td>90 Min.</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Telefontermin</p></td>
                    <td>30 Min.</td>
                    <td>30 Min.</td>
                    <td>30 Min.</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Beratung und Verlaufsmessung</p></td>
                    <td>2 x 60 Min.</td>
                    <td>2 x 60 Min.</td>
                    <td>2 x 60 Min. + 4 x 45 Min.</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Spiroergometrie</p></td>
                    <td>-</td>
                    <td>60 Min.</td>
                    <td>60 Min.</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Abschlusstermin</p></td>
                    <td>-</td>
                    <td>-</td>
                    <td>60 Min.</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Preis Selbstzahler</p></td>
                    <td>650.–</td>
                    <td>870.–</td>
                    <td>1500.–</td>
                </tr>
                <tr>
                    <td><img src={tickIcon} alt='#' /> <p>Preis mit ärztlicher Verordnung</p></td>
                    <td>170.–</td>
                    <td>390.–</td>
                    <td>630.–</td>
                </tr>
            </table>
        </div>
    )
}