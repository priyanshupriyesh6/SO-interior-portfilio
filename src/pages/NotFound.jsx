import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <main className="page-shell">
            <section className="page-section">
                <div className="section-inner">
                    <div className="surface-card p-8 text-center sm:p-12">
                        <p className="section-label">404</p>
                        <h1 className="section-title">This page does not exist.</h1>
                        <p className="section-subtitle mx-auto">
                            The route could not be found. Use the primary navigation or return to the homepage.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link to="/home" className="button-primary">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};
