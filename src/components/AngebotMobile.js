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
                                        <li><span>{data?.offer}</span>{data[key] ? data[key] : <img src="https://medzentrum.entwicklung-loewenmut.ch/uploads/check_1_e4073556d6.svg" alt="" />}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}