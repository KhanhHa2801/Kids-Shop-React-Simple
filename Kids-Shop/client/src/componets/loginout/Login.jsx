import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Login ({user, setUser}) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const req = "http://localhost:5500/api/user/login";

        try{
            const res = axios.post(req,  {
                password: password,
                email: email
            }).then((res) => {
                    localStorage.setItem( "userName", res.data.name.first + " " + res.data.name.last);
                    localStorage.setItem( "userImage", res.data.image);
                    localStorage.setItem( "isAdmin", res.data.isAdmin);
                    localStorage.setItem( "idUser", res.data._id);
                    window.location.reload()
                    window.scrollTo(0,0)
            })
            .catch( (err) => {
                    if(!email || !password){
                        alert('Bạn chưa điền đủ thông tin');
                    }
                    else if(err.response !== undefined){
                        alert('Email hoặc password sai');
                    }
                    window.location.href = "/login"
            } )
        }
        catch (err) {
            console.log(err);
        }
        window.scrollTo(0,0);
    }

    return (
        <div>
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">Login</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Login</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>

            <section id="wrapper">
                <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-12">
                    <section id="main">
                        <div className="login-page">                  
                        <div className="block-title">
                            <h2 className="title"><span>Login</span></h2>
                        </div>
                        <div className="card">
                            <div className="login-form">
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label required">Email</label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="email"
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
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                                </div>                            
                            </div>
                            <div className="form-group text-center">
                                <div className="link">
                                {/* <a href="#">Forgot your password?</a>  */}
                                <NavLink to="/register">Register?</NavLink>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <NavLink to="/">
                                <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
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