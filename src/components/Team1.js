import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Team1 = ({ data, color }) => {

    if (!Array.isArray(data)) {
        return null; 
    }

    const sortByNummer = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].Nummer > arr[j].Nummer) {
                    // Swap elements
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };

    // Creating a new sorted array (avoiding mutation of original data)
    const sortedData = sortByNummer([...data]);

    return (
        <div className={`row team_list ${color}`}>
            {sortedData?.map((teamMember, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 team_itm mt_col" key={index}>
                    <div class="item_inner">
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${teamMember?.Bild?.url}`} class="item_img" alt="" />
                        <div class="item_body text-black">
                            <h4 class={`font-volk`}>{teamMember?.Name}</h4>
                            <p className={`${!(teamMember?.Fahigkeiten) ? 'border-0' : ''} mini_height`}>{teamMember?.Bezeichnung}</p>
                            {/* <small>{teamMember?.Fahigkeiten}</small> */}

                            {teamMember?.Fahigkeiten && <BlocksRenderer content={teamMember?.Fahigkeiten} blocks={{
                                paragraph: ({ children }) => (
                                    <small>
                                        {children}
                                    </small>
                                ),
                            }} />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}