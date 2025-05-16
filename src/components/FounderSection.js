import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export const FounderSection = ({data, color}) => {
  return (
    <div className='row align-items-center'>
        <div className="col-lg-6 img_col">
            <img src={`https://backend.medzentrum.ch${data?.Bild?.url}`} alt="" className='w-100' />
        </div>
        <div className="col-lg-6 text-black">
            <div className={`content_col ${color}`}>
                <h2>{data?.Titel}</h2>
                {data?.Beschreibung && <BlocksRenderer content={data?.Beschreibung} /> }
                {/* <p>{data?.Beschreibung}</p> */}
            </div>
        </div>
    </div>
  )
}
