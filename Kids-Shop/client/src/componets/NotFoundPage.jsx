import { useEffect } from "react";

export default function NotFoundPage () {


    return (
        <section className="error_page">
            <h1 className="title"><span>!</span>404</h1>
            <p className="error-text">The page you requested does not exist.</p>
            <a className="btn btn-primary" href="#">
            <i className="material-icons">chevron_left</i>Continue shopping
            </a>
        </section>
    )
}