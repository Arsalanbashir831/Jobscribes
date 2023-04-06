/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import { useEffect, useState } from "react";
import axios from "axios";


export default function CandidateGrid() {

    const [candidate,setCandidate]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/Applicant/allApplicants")
        .then((res)=>{
        console.log(res.data); 
        setCandidate(res.data)
        },(err)=>{console.log(err);})        
        },[]);
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="content-page">
                                <div className="box-filters-job">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-5">
                                            <span className="text-small text-showing">
                                                Showing <strong>41-60 </strong>of <strong>944 </strong>jobs
                                            </span>
                                        </div>
                                        <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                            <div className="display-flex2">
                                                <div className="box-border mr-10">
                                                    <span className="text-sortby">Show:</span>
                                                    <div className="dropdown dropdown-sort">
                                                        <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                            <span>12</span>
                                                            <i className="fi-rr-angle-small-down" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item active">10</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item">12</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item">20</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-border">
                                                    <span className="text-sortby">Sort by:</span>
                                                    <div className="dropdown dropdown-sort">
                                                        <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                            <span>Newest Post</span>
                                                            <i className="fi-rr-angle-small-down" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item active">Newest Post</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item">Oldest Post</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="dropdown-item">Rating Post</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-view-type">
                                                    <Link legacyBehavior href="/jobs-list">
                                                        <a className="view-type">
                                                            <img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" />
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href="/jobs-grid">
                                                        <a className="view-type">
                                                            <img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {candidate.map((data)=>{
                                        const {a_username,a_description}=data
                                        console.log(data);
                                        return(<>                                       
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user1.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>{a_username}</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">{a_description}</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                        </>)
                                    })}
                                   
                                    {/*  */}
                               
                                </div>
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
