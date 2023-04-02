/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function Contact() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mb-40">
                                    <span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span>
                                    <h2 className="mt-5 mb-10">Get in touch</h2>
                                    <p className="font-md color-text-paragraph-2">
                                        The right move at the right time saves your investment. live
                                        <br className="d-none d-lg-block" /> the dream of expanding your business.
                                    </p>
                                    <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                        <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="name" placeholder="Enter your name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="company" placeholder="Comapy (optioanl)" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="email" placeholder="Your email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Phone number" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Tell us about yourself" defaultValue={""} />
                                                </div>
                                                <button className="submit btn btn-send-message" type="submit">
                                                    Send message
                                                </button>
                                                <label className="ml-20">
                                                    <input className="float-start mr-5 mt-6" type="checkbox" /> By clicking contact us button, you agree our terms and policy,
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <img src="assets/imgs/page/contact/img.png" alt="joxBox" />
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
