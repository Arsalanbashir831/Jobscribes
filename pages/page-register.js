import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";

export default function Register() {
    const [ user, setUser ] = useState({
        a_email: "",
        a_username: "",
        a_password: "",
        a_desc:"Hi I am new user joined "
    });
    async function submitHandler(e) {
        e.preventDefault();
       await axios.post("http://localhost:8080/Applicant/addApplicant",user)
        console.log(user);
      }
    return (
        <>
            <Layout>
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Register </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                    <button className="btn social-login hover-up mb-20">
                                        <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                        <strong>Sign up with Google</strong>
                                    </button>
                                    <div className="divider-text-center">
                                        <span>Or continue with</span>
                                    </div>
                                </div>
                                <form className="login-register text-start mt-20" action="#">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">
                                            Full Name *
                                        </label>
                                        <input 
                                         className="form-control" id="input-1" type="text" required name="fullname" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">
                                            Email *
                                        </label>
                                        <input value={user.a_email} onChange={e=>{ e.preventDefault(); setUser({...user,a_email:e.target.value})}} className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-3">
                                            Username *
                                        </label>
                                        <input  value={user.a_username} onChange={e=>{ e.preventDefault(); setUser({...user,a_username:e.target.value})}} className="form-control" id="input-3" type="text" required name="username" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">
                                            Password *
                                        </label>
                                        <input  value={user.a_password} onChange={e=>{  e.preventDefault(); setUser({...user,a_password:e.target.value})}} className="form-control" id="input-4" type="password" required name="password" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-5">
                                            Re-Password *
                                        </label>
                                        <input className="form-control" id="input-5" type="password" required name="re-password" placeholder="" />
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox" />
                                            <span className="text-small">Agree our terms and policy</span>
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={submitHandler} className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                            Submit &amp; Register
                                        </button>
                                    </div>
                                    <div className="text-muted text-center">
                                        Already have an account?
                                        <Link legacyBehavior href="/page-signin">
                                            <a>Sign in</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="Jobscribes" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
