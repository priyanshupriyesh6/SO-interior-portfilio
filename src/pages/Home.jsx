import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { Footer } from "../components/Footer";

export const Home = () => {
    useEffect(() => {
        sessionStorage.removeItem('fromIntro');
    }, []);

    return (
    <main className="page-shell">
        <Hero />
        <AboutUs />
        <Services />
        <Statistics />
        <Footer />
    </main>
    )
};
