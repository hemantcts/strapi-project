import React from "react";

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
                    <td>Standortanalyse, Beratung und Verlaufsmessung</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Termine vor Ort</td>
                    <td>3</td>
                    <td>3</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Telefontermin</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Spiroergometrie</td>
                    <td>-</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td>BIA- und Kalipermessung</td>
                    <td>3</td>
                    <td>3</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Regenerations- und Bedürfnisfragebogen	</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td>Individuelle Ernährungspläne</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td>Individuelle Bewegungs- und Trainingsempfehlungen</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                    <td>Inklusiv</td>
                </tr>
                <tr>
                    <td>Standortanalyse</td>
                    <td>90 Min.</td>
                    <td>90 Min.</td>
                    <td>90 Min.</td>
                </tr>
                <tr>
                    <td>Telefontermin</td>
                    <td>30 Min.</td>
                    <td>30 Min.</td>
                    <td>30 Min.</td>
                </tr>
                <tr>
                    <td>Beratung und Verlaufsmessung</td>
                    <td>2 x 60 Min.</td>
                    <td>2 x 60 Min.</td>
                    <td>2 x 60 Min. + 4 x 45 Min.</td>
                </tr>
                <tr>
                    <td>Spiroergometrie</td>
                    <td>-</td>
                    <td>60 Min.</td>
                    <td>60 Min.</td>
                </tr>
                <tr>
                    <td>Abschlusstermin</td>
                    <td>-</td>
                    <td>-</td>
                    <td>60 Min.</td>
                </tr>
                <tr>
                    <td>Preis Selbstzahler</td>
                    <td>650.–</td>
                    <td>870.–</td>
                    <td>1500.–</td>
                </tr>
                <tr>
                    <td>Preis mit ärztlicher Verordnung	</td>
                    <td>170.–</td>
                    <td>390.–</td>
                    <td>630.–</td>
                </tr>
            </table>
        </div>
    )
}