/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import CategoryTab2 from "./../components/elements/CategoryTab2";
import BlogSlider from "./../components/sliders/Blog";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider2 from "./../components/sliders/Category2";
import TopRekruterSlider from "./../components/sliders/TopRekruter";

export default function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                        The #1 <span className="color-green">Job Board for</span>
                                        <br className="d-none d-lg-block" />
                                        Hiring or Find Your Next Job
                                    </h1>
                                    
                                    <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-industry">
                                                    <option value={0}>Industry</option>
                                                    <option value={1}>Software Development</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Recruting</option>
                                                    <option value={4}>Management</option>
                                                    <option value={5}>Advertising</option>
                                                    
                                                </select>
                                            </div>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-location">
                                                    <option value>Location</option>
                                                    <option value="AX">colombo</option>
                                                    <option value="AF">kurunegala</option>
                                                    <option value="AL">gampaha</option>
                                                    <option value="DZ">malabe</option>
                                                    <option value="AD">kandy</option>
                                                    <option value="AO">anuradhapura</option>

                                                </select>
                                            </div>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
                                    </div>
                                    <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                        <strong>Popular Searches:</strong>
                                        <Link legacyBehavior href="#">
                                            <a>Designer, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Web, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>IOS, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Developer, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>PHP, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Senior, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Engineer, </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                            </div>
                            <div className="mt-50">
                                <CategoryTab2 />
                            </div>
                        </div>
                    </section>
                    
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your favourite jobs and get the benefits of yourself</p>
                            </div>
                            <div className="container">
                                <div className="row mt-50">
                                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location1.png)" }}>
                                                        <span className="lbl-hot">Hot</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>Malabe</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">5 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">12 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location2.png)" }}>
                                                        <span className="lbl-hot">Trending</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>kurunegala</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">7 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">24 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location3.png)" }}>
                                                        <span className="lbl-hot">Hot</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>kandy</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">9 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">17 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location4.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>anuradhapura</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">16 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">35 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location5.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>gampaha</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">9 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">22 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location6.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>colombo</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">35 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">132 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Recruiters</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover your next career move or internship</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="box-swiper mt-50">
                                <TopRekruterSlider />
                            </div>
                        </div>
                    </section>
                    
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <BlogSlider />
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
                                        <img src="assets/imgs/template/newsletter-right.png" alt="jobscribes" />
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
