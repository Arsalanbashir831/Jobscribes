import React, { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const CategoryTab2 = () => {

    const [candidate,setCandidate]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/Applicant/allApplicants")
        .then((res)=>{
        console.log(res.data); 
        setCandidate(res.data)
        },(err)=>{console.log(err);})        
        },[]);

    const [active, setActive] = useState(1);

    const handleOnClick = (index) => {
        setActive(index); // remove the curly braces
    };
    return (
        <>
            <div className="list-tabs mt-40  text-start">
                <ul className="nav nav-tabs" role="tablist">
                    <li>
                        <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1)}><img src="/assets/imgs/page/homepage1/management.svg" alt="JOBSCRIBES" /> Management</a>
                        </li>
                    <li>
                        <a className={active === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><img src="/assets/imgs/page/homepage1/marketing.svg" alt="JOBSCRIBES" /> Marketing &amp; Sale</a>
                        </li>
                    <li>
                        <a className={active === 3 ? "active" : ""} onClick={() => handleOnClick(3)} ><img src="/assets/imgs/page/homepage1/finance.svg" alt="JOBSCRIBES" /> Finance</a>
                        </li>
                    <li>
                        <a className={active === 4 ? "active" : ""} onClick={() => handleOnClick(4)} ><img src="/assets/imgs/page/homepage1/human.svg" alt="JOBSCRIBES" /> Software Development</a>
                        </li>
                    <li>
                        <a className={active === 5 ? "active" : ""} onClick={() => handleOnClick(5)} ><img src="/assets/imgs/page/homepage1/retail.svg" alt="JOBSCRIBES" /> Retail &amp; Products</a>
                        </li>
                    
                </ul>
            </div>
            <div className="tab-content mt-50" id="myTabContent-1">
                <div  className={`tab-pane fade ${active == 1 && "show active"}`}>
                    <div className="row">
                        {candidate.map((data)=>{

                        const {a_username,a_description}=data
                        return(<>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                                    <div className="image-box">
                                        <figure><img src="assets/imgs/page/homepage2/img1.png" alt="JOBSCRIBES
        S" /></figure>  
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h5>
                                        <Link legacyBehavior href="/job-details"><a>{a_username}</a></Link>
                                        </h5>
                                    <div className="mt-5"><span className="card-location mr-15">kandy</span><span className="card-time">3 mins ago</span></div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-xl-7 col-md-7 mb-2">
                                                <Link legacyBehavior href="/jobs-grid"><a className="btn btn-tags-sm mr-5">Figma</a></Link>

                                            <Link legacyBehavior href="/jobs-grid"><a className="btn btn-tags-sm mr-5">Adobe XD</a></Link>

                                            </div>
                                            <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">Rs.120,000</span><span className="text-muted"></span></div>
                                        </div>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-20">{a_description}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        </>)
                        })}
                      
                        {/*  */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryTab2;