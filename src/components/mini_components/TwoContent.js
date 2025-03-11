import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export const TwoContent = ({data, color}) => {
    return (
        <div className="sec_title text-black">
            <div className={`row ${color}`}>
                <div className="col-lg-6">
                    <h2>{data?.Titel}</h2>
                </div>
                <div className="col-lg-6">
                    <div>
                        {data?.Beschreibung && <BlocksRenderer content={data?.Beschreibung} />}
                        {/* <p>{data?.Beschreibung}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
