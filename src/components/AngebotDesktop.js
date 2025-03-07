import React from "react";
import tickIcon from '../images/tick-icon.svg'

export const AngebotDesktop = ({ tableData, color }) => {
    // const keys = Object.keys(tableData[0])?.filter(key => key !== "id" && key !== "offer");

    const keys = Object.keys(tableData[0] || {}).filter(
        (key) => key !== "id" && key !== "offer"
    );
    return (
        <div className='row angebot_table_row'>
            <div className='table_col'>
                <div className='tble_col_heading'>
                    {/* <ul>
                        <li>Angebot</li>
                        <li>MedBasic</li>
                        <li>MedBasic plus</li>
                        <li>MedIntensiv</li>
                    </ul> */}
                    <ul>
                        <li>Angebot</li>
                        {keys?.map((key) => (
                            <li key={key}>{key?.replace(/[_-]/g, ' ')}</li>
                        ))}
                    </ul>
                </div>
                <div className='tble_col_content'>
                    {tableData?.map((data, index)=>(
                        <ul key={index}>

                            <li>
                                <img src={tickIcon} alt="#" /> <p>{data.offer}</p>
                            </li>
                            {keys.map((key) => (
                                <li key={key}>{data[key] ? data[key] : "-"}</li>
                            ))} 
                            {/* <li><img src={tickIcon} alt='#' /> <p>{data.offer}</p></li>
                            <li>{data?.MedBasic ? data?.MedBasic : '-'}</li>
                            <li>{data?.MedBasic_plus ? data?.MedBasic_plus : '-'}</li>
                            <li>{data?.MedIntensiv ? data?.MedIntensiv : '-'}</li> */}
                        </ul>
                    ))}
                </div>
            </div>

        </div>
    )
}