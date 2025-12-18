// VideoModal.jsx
import React from "react";
// import "./videoModal.css";

const VideoModal = ({ show, onClose, videoUrl }) => {
    if (!show) return null;

    return (
        <div className="vm-overlay" onClick={onClose}>
            <div className="vm-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="vm-close" onClick={onClose}>&times;</button> */}
                <button
                    className="vm-close"
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        background: 'rgba(231, 231, 231, 0.95)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: '0.3rem',
                        zIndex: 1
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m3.426 2.024.094.083L8 6.586l4.48-4.479a1 1 0 0 1 1.497 1.32l-.083.095L9.414 8l4.48 4.478a1 1 0 0 1-1.32 1.498l-.094-.083L8 9.413l-4.48 4.48a1 1 0 0 1-1.497-1.32l.083-.095L6.585 8 2.106 3.522a1 1 0 0 1 1.32-1.498Z"></path></svg>
                </button>

                <div className="vm-video-wrapper">
                    {/* <iframe
                        src={`${videoUrl}?autoplay=1`}
                        title="Video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    /> */}
                    <video
                        src={`${videoUrl}?autoplay=1&mute=1&playsinline=1`}
                        autoPlay
                        // muted
                        playsInline
                        style={{width: '100%'}}
                        controls
                    />
                    {/* <iframe
    src={`${videoUrl}?autoplay=1&mute=1&playsinline=1`}
    title="Video"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
></iframe> */}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
