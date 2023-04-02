/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer mt-50">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        <Link legacyBehavior href="/"><a><img alt="jobscribers" src="assets/imgs/template/jobhub-logo.svg" /></a></Link>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">Jobscribes is the The #1 Job Board platform for Hiring or Find Your Next Job.</div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="#" />
                            <a className="icon-socials icon-twitter" href="#" />
                            <a className="icon-socials icon-linkedin" href="#" /></div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">About us</a></li>
                            <li>
                                <a href="#">Pricing</a></li>
                            <li>
                                <a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    
                    <div className="footer-col-5 col-md-2 col-xs-6">
                        <h6 className="mb-20">More</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Privacy</a></li>
                            <li>
                                <a href="#">Pricing</a></li>
                            <li>
                                <a href="#">Terms</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6"><span className="font-x color-text-paragraph">Copyright © 2023. Jobscribes all right reserved</span></div>
                        
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;