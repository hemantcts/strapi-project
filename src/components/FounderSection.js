import React from 'react'

export const FounderSection = ({data, color}) => {
  return (
    <div className='row'>
        <div className="col-lg-6">
            <img src={`https://medzentrum.entwicklung-loewenmut.ch${data?.founder_image?.url}`} alt="" />
        </div>
        <div className="col-lg-6">
            <div className={`content ${color}`}>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
            </div>
        </div>
    </div>
  )
}
