import Layout from "../components/Layout/Layout";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function Pricing() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="mb-10">Pricing</h2>
                                        <p className="font-lg color-text-paragraph-2">Pricing built to suits teams of all sizes.</p>
                                    </div>
                                    <div className="col-lg-6 text-lg-end">
                                        <ul className="breadcrumbs mt-40">
                                            <li>
                                                <a className="home-icon" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li>Pricing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-90">
                        <div className="container">
                            <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Pricing Table</h2>
                            <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">Choose The Best Plan That’s For You</div>
                            <div className="max-width-price">
                                <div className="block-pricing mt-70">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="box-pricing-item">
                                                <h3>trail</h3>
                                                <div className="box-info-price">
                                                    <span className="text-price color-brand-2">free</span>
                                                    <span className="text-month">/14 days</span>
                                                </div>
                                                <div className="border-bottom mb-30">
                                                    <p className="text-desc-package font-sm color-text-paragraph mb-30">For most businesses that want to optimize web queries</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li>10 job posting</li>
                                                    <li>Job displayed for 14 days</li>
                                                    <li>Premium Support 24/7</li>
                                                    
                                                </ul>
                                                <div>
                                                    <a className="btn btn-border" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                            <div className="box-pricing-item">
                                                <h3>Standard</h3>
                                                <div className="box-info-price">
                                                    <span className="text-price for-month display-month">Rs.750</span>
                                                    <span className="text-month">/month</span>
                                                </div>
                                                <div className="border-bottom mb-30">
                                                    <p className="text-desc-package mb-30">For most businesses that want to otpimize web queries</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                <li>50 job posting</li>
                                                    <li>Job displayed for 20 days</li>
                                                    <li>Premium Support 24/7</li>
                                                </ul>
                                                <div>
                                                    <a className="btn btn-border" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                            <div className="box-pricing-item">
                                                <h3>Enterprıse</h3>
                                                <div className="box-info-price">
                                                    <span className="text-price for-month display-month">Rs.900</span>
                                                    <span className="text-month">/month</span>
                                                </div>
                                                <div className="border-bottom mb-30">
                                                    <p className="text-desc-package mb-30">For most businesses that want to otpimize web queries</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                <li>100 job posting</li>
                                                    <li>Job displayed for 60 days</li>
                                                    <li>Premium Support 24/7</li>
                                                </ul>
                                                <div>
                                                    <a className="btn btn-border" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="box-newsletter">
                                <div className="row">
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-left.png" alt="joxBox" />
                                    </div>
                                    <div className="col-lg-12 col-xl-6 col-12">
                                        <h2 className="text-md-newsletter text-center">
                                            New Things Will Always
                                            <br /> Update Regularly
                                        </h2>
                                        <div className="box-form-newsletter mt-40">
                                            <form className="form-newsletter">
                                                <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-right.png" alt="joxBox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
