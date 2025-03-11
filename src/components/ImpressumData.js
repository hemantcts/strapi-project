import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export const ImpressumData = ({ data, color }) => {
    return (
        <div>
            {data?.map((innerData, index)=>(
                <div key={index} className='impresm_block'>
                    <h2 className='h3_large'>{innerData?.Titel}</h2>
                    {innerData?.Beschreibung && <BlocksRenderer content={innerData?.Beschreibung} />}
                    {/* <div dangerouslySetInnerHTML={{ __html: innerData?.description }} /> */}
                </div>
            ))}
        </div>
    )
}
