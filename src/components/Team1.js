import React from 'react'
import { Link } from 'react-router-dom'

export const Team1 = ({ data }) => {
    return (
        <div className='row'>
            {data?.map((teamMember, index) => (
                <div className="col-3" key={index}>
                    <div class="card">
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${teamMember?.image?.url}`} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">{teamMember?.name}</h5>
                                <p class="card-text">{teamMember?.designation}</p>
                                <Link to="#" class="btn btn-primary">{teamMember?.skills}</Link>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
