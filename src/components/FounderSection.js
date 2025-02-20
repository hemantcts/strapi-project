import React from 'react'

export const FounderSection = ({data, color}) => {
  return (
    <div className='row align-items-center'>
        <div className="col-lg-6 img_col">
            <img src={`https://medzentrum.entwicklung-loewenmut.ch${data?.image?.url}`} alt="" />
        </div>
        <div className="col-lg-6 text-black">
            <div className={`content_col ${color}`}>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
            </div>
        </div>
    </div>
  )
}
