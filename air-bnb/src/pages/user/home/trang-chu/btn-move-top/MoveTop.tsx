import React from 'react'
import './css/MoveTop.css'

export default function MoveTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {/* <button id="backToTopButton" className="back-to-top-button" title="Lên đầu trang">
                <svg className="back-to-top-icon" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                    <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm7.423 18.458c-.543.537-1.257.806-1.971.806-.714 0-1.428-.27-1.971-.806l-5.422-5.388-5.422 5.388c-.543.537-1.257.806-1.971.806-.714 0-1.428-.27-1.971-.806-.543-.537-.812-1.251-.812-1.965 0-.714.27-1.428.812-1.965l7.873-7.807c.543-.537 1.257-.806 1.971-.806.714 0 1.428.27 1.971.806l7.873 7.807c.543.537.812 1.251.812 1.965 0 .714-.27 1.428-.812 1.965z" />
                </svg>
            </button> */}
            {/* <button className="back-to-top-button">
                <span className='.back-to-top-icon'><i className="fas fa-arrow-to-top .back-to-top-icon"></i></span>
            </button> */}
            <button className="back-to-top-button" onClick={scrollToTop}>
                <span className="back-to-top-icon">
                    <i className="fas fa-arrow-up"></i> {/* FontAwesome icon for "arrow-up" */}
                </span>
            </button>
        </div>
    )
}
