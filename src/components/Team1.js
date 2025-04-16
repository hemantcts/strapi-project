import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Team1 = ({ data, color, change }) => {

    const containerRef = useRef(null);
    const containerRefs = useRef([]);
    const [columns, setColumns] = useState(4);

    const getColumnCount = () => {
        const width = window.innerWidth;
        if (width >= 992) return 4; // lg and above (4 columns)
        if (width >= 768) return 3;  // md to lg (3 columns)
        if (width >= 576) return 2;  // sm to md (2 columns)
        return 1;                    // xs to sm (1 column)
    };

    useEffect(() => {
        const adjustMiniHeights = () => {
            if (!containerRef.current) return;

            const items = Array.from(containerRef.current.getElementsByClassName('team_itm'));
            const cols = getColumnCount();
            setColumns(cols);
            let rowIndex = 0;

            while (rowIndex < items.length) {
                let rowItems = items.slice(rowIndex, rowIndex + columns);
                let miniHeights = rowItems.map(item => item.querySelector('.mini_height'));

                // Reset height to auto to get natural height first
                miniHeights.forEach(el => (el.style.height = 'auto'));

                // Find max height
                let maxHeight = Math.max(...miniHeights.map(el => el.scrollHeight));

                // Apply max height
                miniHeights.forEach(el => (el.style.height = `${maxHeight}px`));

                rowIndex += columns;
            }
        };

        adjustMiniHeights();
        window.addEventListener('resize', adjustMiniHeights);
        return () => window.removeEventListener('resize', adjustMiniHeights);
    }, [data, columns, change]);
    
    useEffect(() => {
        const adjustMiniHeights = () => {
            if (!containerRef.current) return;

            const items = Array.from(containerRef.current.getElementsByClassName('team_itm'));
            const cols = getColumnCount();
            setColumns(cols);
            let rowIndex = 0;

            while (rowIndex < items.length) {
                let rowItems = items.slice(rowIndex, rowIndex + columns);
                let miniHeights = rowItems.map(item => item.querySelector('.font-volk'));

                // Reset height to auto to get natural height first
                miniHeights.forEach(el => (el.style.height = 'auto'));

                // Find max height
                let maxHeight = Math.max(...miniHeights.map(el => el.scrollHeight));

                // Apply max height
                miniHeights.forEach(el => (el.style.height = `${maxHeight}px`));

                rowIndex += columns;
            }
        };

        adjustMiniHeights();
        window.addEventListener('resize', adjustMiniHeights);
        return () => window.removeEventListener('resize', adjustMiniHeights);
    }, [data, columns, change]);
    
    // useEffect(() => {
    //     const setEqualHeight = () => {
    //         if (containerRefs.current.length) {
    //             let maxHeight = 0;

    //             // Find max height
    //             containerRefs.current.forEach((el) => {
    //                 if (el) {
    //                     el.style.height = 'auto'; // Reset before getting height
    //                     maxHeight = Math.max(maxHeight, el.offsetHeight);
    //                 }
    //             });

    //             // Apply max height to all
    //             containerRefs.current.forEach((el) => {
    //                 if (el) el.style.height = `${maxHeight}px`;
    //             });
    //         }
    //     };

    //     setEqualHeight();
    //     window.addEventListener('resize', setEqualHeight);
    //     return () => window.removeEventListener('resize', setEqualHeight);
    // }, [data, columns, change]);

    useEffect(() => {
        console.log('working', change, columns, data )
    }, [change])


    if (!Array.isArray(data)) {
        return null;
    }

    const hasValidText = (fahigkeiten) => {
        if (!Array.isArray(fahigkeiten)) return false;

        return fahigkeiten.some(block =>
            block.children?.some(child => child.text.trim() !== '')
        );
    };


    return (
        <div ref={containerRef} className={`row team_list ${color}`}>
            {data?.map((teamMember, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 team_itm mt_col" key={index}>
                    <div class="item_inner">
                        <img src={`https://medzentrum.entwicklung-loewenmut.ch${teamMember?.Bild?.url}`} class="item_img" alt="" />
                        <div class="item_body text-black">
                            <h4 class={`font-volk`}>{teamMember?.Name}</h4>
                            <p className={`${!hasValidText(teamMember?.Fahigkeiten) ? 'border-0' : ''} mini_height`}>{teamMember?.Bezeichnung}</p>

                            {hasValidText(teamMember?.Fahigkeiten) && <BlocksRenderer content={teamMember?.Fahigkeiten} blocks={{
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