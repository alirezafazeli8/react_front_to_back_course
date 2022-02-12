import React from 'react';
import {Link} from 'react-router-dom';
import {Navigate} from "react-router-dom";

function AboutPage() {
    return (<div className="card" style={{textAlign: 'center'}}>
        <h1>About us</h1>
        <p style={{padding: "20px"}}>We Are Team In This Iran ✒️
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quis.
        </p>
        <Link
            to={'/'}
            className="btn btn-primary"
            style={{textDecoration: 'none', padding: '5px'}}
        >
            Back To Home{' '}
        </Link>
    </div>);
}

export default AboutPage;
