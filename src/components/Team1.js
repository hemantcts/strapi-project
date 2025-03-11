import React from 'react'
import { Link } from 'react-router-dom'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Team1 = ({ data, color }) => {
    return (
        <div className={`row team_list ${color}`}>
            {data?.map((teamMember, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 team_itm mt_col" key={index}>
                    <div class="item_inner">
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${teamMember?.Bild?.url}`} class="item_img" alt="" />
                        <div class="item_body text-black">
                            <h4 class={`font-volk`}>{teamMember?.Name}</h4>
                            <p>{teamMember?.Bezeichnung}</p>
                            {/* <small>{teamMember?.Fahigkeiten}</small> */}

                            {teamMember?.Fahigkeiten && <BlocksRenderer content={teamMember?.Fahigkeiten} blocks={{
                                paragraph: ({ children }) => (
                                    <small>
                                        {children}
                                    </small>
                                ), }} />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
