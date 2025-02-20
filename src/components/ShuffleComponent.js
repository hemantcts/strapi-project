import React, { useEffect, useState } from 'react';
import imgNote from '../images/notefall-2.png'
import imgNotefall from '../images/notefall-2.png'

export const ShuffleComponent = ({ data, color }) => {

    return (
        <div>
            {data?.map((services, index)=>(
                <div key={index} className='row shuffle_row'>
                    <div className='col-12 col-lg-6 img_col'>
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${services?.image?.url}`} alt='' />
                    </div>
                    <div className='col-12 col-lg-6 content_col'>
                        <div className='content_box text-black'>
                            <h2>{services?.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: services?.description }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
