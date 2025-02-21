import React from 'react'

export const ImpressumData = ({ data, color }) => {
    return (
        <div>
            {data?.map((innerData, index)=>(
                <div key={index} className='impresm_block'>
                    <h2 className='h3_large'>{innerData?.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: innerData?.description }} />
                </div>
            ))}
        </div>
    )
}
