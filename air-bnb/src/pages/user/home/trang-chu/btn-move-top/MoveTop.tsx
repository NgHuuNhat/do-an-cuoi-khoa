import React from 'react'
import './MoveTop.css'

export default function MoveTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id='move-top'>
            <button className="back-to-top-button" onClick={scrollToTop}>
                <span className="back-to-top-icon">
                    <i className="fas fa-arrow-up"></i>
                </span>
            </button>
        </div>
    )
}
