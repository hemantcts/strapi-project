import React from 'react'

export const Accordion = ({data}) => {
    return (
        <div className="accordion" id="accordionExample">
            {data?.map((item, index) => (
                <div className="accordion-item mb-3" key={item?.id}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item?.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse${item?.id}`}
                        >
                            {item?.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${item?.id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body pt-0">
                            <p>{item?.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
