import React from "react";
import tickIcon from '../images/tick-icon.svg'

export const AngebotMobile = ({ tableData, color }) => {

    const keys = Object.keys(tableData[0] || {}).filter(
        (key) => key !== "id" && key !== "offer"
    );

    return (
        <div className="angbot_moble_card">
            <div className="row">
                {keys?.map((key, index) => (
                    <div key={index} className="col-12 mob_margn">
                        <div className="card">
                            <div className="card-header">
                                <h2>{key?.replace(/[_-]/g, ' ')}</h2>
                            </div>
                            <div className="card-body">
                                {tableData?.map((data, i)=>(
                                    <ul key={i}>
                                        <li><span>{data?.offer}</span>{data[key]}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
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