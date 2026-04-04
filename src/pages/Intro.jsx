import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.jpg';
import introVid from '../assets/intropagevid.MOV';
import { LoadingAnimation } from '../components/LoadingAnimation';

export const Intro = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        setIsLoading(true);
        // Set flag to show pixel loader on home
        sessionStorage.setItem('fromIntro', 'true');
        // Navigate after 2.5 seconds to let the animation play
        setTimeout(() => {
            navigate('/home');
        }, 2500);
    };

    return (
        <div className="intro-container">
            <video 
                autoPlay 
                muted 
                loop 
                className="intro-video-background"
            >
                <source src={introVid} type="video/mp4" />
            </video>
            {isLoading && <LoadingAnimation />}
            <button 
                onClick={handleLogoClick}
                className="logo-button"
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <img src={logo} alt="SO Interiors CO-Powered by Jangid Interior" className="pulsating-logo" />
            </button>
            <p className="intro-text">SO Interiors CO-Powered by Jangid Interior</p>
        </div>
    );
};