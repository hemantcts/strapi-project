import React from 'react';
import imgNote from '../images/notefall-2.png'
import imgNotefall from '../images/notefall-2.png'

export const ShuffleComponent = () => {
    return (
        <div>
            <div className='row shuffle_row'>
                <div className='col-12 col-lg-6 img_col'>
                    <img src={imgNote} alt='' />
                </div>
                <div className='col-12 col-lg-6 content_col'>
                    <div className='content_box text-black'>
                        <h2>Hilfe ausserhalb der Öffnungszeiten</h2>
                        <p>Ausserhalb unserer Öffnungszeiten erhalten Sie Beratung und Notfallmedikamente über folgende Telefonnummer:</p>
                        <p>Die Notdienst-Apotheken in Zürich und Winterthur liefern via Pharmataxi kostenlos im ganzen Kanton Zürich Medikamente auf ärztliche Verordnung rund um die Uhr direkt ans Krankenbett. Ohne ärztliche Verordnung wird für Privatpersonen ein Kostendeckungsbeitrag erhoben:</p>
                        <p>Städte Winterthur und Zürich: Fr. 30.– übriges Kantonsgebiet: Fr. 50.– 365 Tage für Sie geöffnet</p>
                    </div>
                </div>
            </div>
            <div className='row shuffle_row'>
                <div className='col-12 col-lg-6 img_col'>
                    <img src={imgNotefall} alt='' />
                </div>
                <div className='col-12 col-lg-6 content_col'>
                    <div className='content_box text-black'>
                        <h2>Notfall-Apotheken</h2>
                        <h3>In Winterthur sind folgende Apotheken an 365 Tagen für Sie geöffnet:</h3>
                        <p>Apotheke im Hauptbahnhof, Bahnhofplatz 5, 8400 Winterthur</p>
                        <p>für ärztliche Hilfe<br/>Land Permanence Henggart, Bahnstrasse 4, 8444 Henggart<br/>365 Tage geöffnet 7 – 22 Uhr<br/>in lebensbedrohlichen Situationen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
