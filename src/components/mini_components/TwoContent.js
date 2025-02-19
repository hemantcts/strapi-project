import React from 'react'

export const TwoContent = ({data, color}) => {
    return (
        <div className="sec_title text-black">
            <div className={`row ${color}`}>
                <div className="col-lg-6">
                    <h2>{data?.title}</h2>
                </div>
                <div className="col-lg-6">
                    <div>
                        <p>{data?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
