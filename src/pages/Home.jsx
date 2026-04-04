import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { Footer } from "../components/Footer";
import { SmoothLoader } from "../components/SmoothLoader";
import Homeback from '../assets/homeback.jpg';

export const Home = () => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Check if this is the first load from intro
        const isFromIntro = sessionStorage.getItem('fromIntro');
        if (isFromIntro) {
            setIsFirstLoad(true);
            sessionStorage.removeItem('fromIntro');
        } else {
            setIsFirstLoad(false);
        }
    }, []);

    return (
    <div 
        className="min-h-screen"
        style={{
            backgroundImage: `url(${Homeback})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        {isFirstLoad && <SmoothLoader />}
        <Hero />
        <AboutUs />
        <Services />
        <Statistics />
        <Footer />
    </div>
    )
};