import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Register({userName, setUserName, user, setUser}) {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const req = "http://localhost:5500/api/user/register";

        try{
            const res = axios.post(req,  {
                name: {
                    first: firstName,
                    last: lastName
                },
                password: password,
                email: email
            }).then((res) => {
                    setUser(res.data);
                    setUserName(res.data.user.name.first + " " + res.data.user.name.last);
                })
                .catch( (err) => {
                        if(!firstName || !lastName || !email || !password){
                            window.location.href = "/404"
                            alert('Bạn chưa điền đủ thông tin');
                        }
                        else if(err.response !== undefined){
                            window.location.href = "/404"
                            alert('Tên tài khoản hoặc email đã tồn tại');
                        }
                } )
        }
        catch (err) {
            console.log(err);
            window.location.href = "/404"
        }
        window.scrollTo(0, 0);

    }

    return (
        <div>
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">Create Account</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Create Account</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            {/* <!-- -----------Cart page----------- --> */}
            <section id="wrapper">
                <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-12">
                    <section id="main">
                        <div className="login-page">                  
                        <div className="block-title">
                            <h2 className="title"><span>Create Account</span></h2>
                        </div>
                        <div className="card">
                            <div className="login-form">
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label required">First name</label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
                                </div>                            
                            </div>
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label required">Last name</label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}/>
                                </div>                            
                            </div>
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                                </div>                            
                            </div>
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Password
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                                </div>                            
                            </div>
                            <div className="form-group text-center">
                                <NavLink to="/">
                                    <button className="btn btn-primary" onClick={handleSubmit}>Create Account</button>
                                </NavLink>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}