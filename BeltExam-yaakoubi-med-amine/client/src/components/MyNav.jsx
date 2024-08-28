import React from 'react';
import { Link } from 'react-router-dom';


const MyNav = () => {

    return (
        <div className="my_nav">
            <div id="carouselExample" className="carousel slide bg-dark">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/slide3.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style={{ height: "800px" }} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/slide_1.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style={{ height: "800px" }} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/slide3.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" style={{ height: "800px" }} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <nav className="navbar" style={{ backgroundColor: "#ebeef1" }}>
                <div className="container-fluid">
                    <p className="navbar-brand">Welcome To The Belt Exam of Yaakoubi Med Amine</p>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;
