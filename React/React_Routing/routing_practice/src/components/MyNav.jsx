import React from 'react';


const MyNav = () => {

    return (
        <div className="my_nav">
            <div id="carouselExample" className="carousel slide bg-dark">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/slide3.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100 i_height" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/slide_1.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100 i_height" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/slide3.jpeg" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100 i_height" alt="..."/>
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
                    <p className="navbar-brand">Welcome</p>
                    <div className="d-flex justify-content-around w-25">
                        <button className="btn btn-outline-secondary w-25" href="#" role="button">  Back  </button>
                        <button className="btn btn-outline-secondary w-25" href="#" role="button">  Logout  </button>            
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;
