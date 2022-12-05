
import React from 'react'
import wunalogo1 from '../images/wunalogo1.png'
import image1 from '../images/image1.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import Contact from './Contact'
import Footer from './Footer'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-5 fw-bold" href="#s"><img style={{height:"55px", width:"100px"}} src={wunalogo1} className="img-fluid" alt="img" />
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto me-5 fw-bold">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#s">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Votes">Vote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#s">News/Update</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#s" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departments
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#s">Engineering</a></li>
            <li><a className="dropdown-item" href="#s">Nursing</a></li>
            <li><a className="dropdown-item" href="#s">Business</a></li>
            <li><a className="dropdown-item" href="#s">Law</a></li>
            <li><a className="dropdown-item" href="#s">Medical Laboratory</a></li>
            <li><a className="dropdown-item" href="#s">Arts and Craft</a></li>
            <li><a className="dropdown-item" href="#s">Music</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#s">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#s">Contact Us</a>
        </li>
      </ul>
      <button className='btn btn-outline-success border border-2 rounded-pill ' >Sign Up</button>
      <button className='btn btn-outline-success mx-3 border border-2 rounded-pill ' >Log in</button>
      
    </div>
 
  </div>
</nav>
<div>


    <div className = 'home text-success'>
    <div>


    </div>
    <div className='ms-4 mt-5 gap-5 h-75 ps-5'>
  <section id="intro">
      <div className ="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-5">Faculty of Engineering and Technology election ongoing</div>
            </h1>
            <p className="lead my-4 text-muted">Please be fair with your vote. This candidates will be the future of this department so endeavour to vote who you think is fit for this position</p>
            <a href="#pricing" className="btn border border-2 rounded-pill btn-success btn-lg">Place Vote</a>
  
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <span className="dezy" data-bs-placement="bottom" title="Students enjoying the learning process" >
            <img src={image1} className="img-fluid" alt="img" />
            </span>
          </div>
        </div>
      </div>
    </section>
                {/* Different positions  */}
    <section id="pricing" class="bg-light mt-5 pt-5">
      <div class="container-lg">
        <div class="text-center">
          <h2>Electoral positions </h2>
          <p class="lead text-muted">Find below are the different positions available to vote for</p>
        </div>
  
        <div class="row my-5 g-0 align-items-center justify-content-center">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-body text-center py-4">
                <h4 class="card-title">President</h4>
                <p class="lead card-subtitle">Who do you want to vote for as president</p>
            <img src={image3} className="img-fluid" alt="img" />
                <p class="display-5 my-4 text-primary fw-bold"></p>
                <p class="card-text mx-5 text-muted d-none d-lg-block border rounded-pill">Please click the details button to see a list of cadidates for this position and place your vote</p>
                <a href="#s" class="btn btn-outline-success border border-2 rounded-pill  btn-lg mt-3">
                See details
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-9 col-lg-4">
            <div class="card border-primary border-2">
              <div class="card-body text-center py-5">
                <h4 class="card-title">Secretary</h4>
                <p class="lead card-subtitle">Who do you want to vote for as Secretary</p>
            <img src={image4} className="img-fluid" alt="img" />
                <p class="display-4 my-4 text-primary fw-bold"></p>
                <p class="card-text mx-5 text-muted d-none d-lg-block">Please click the details button to see a list of cadidates for this position and place your vote.</p>
                <a href="#s" class="btn btn-outline-success border border-2 rounded-pill btn-lg mt-3" >
                  See details
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-body text-center py-4">
                <h4 class="card-title"> Sport Cordinator</h4>
                <p class="lead card-subtitle">Who do you want to vote for as Sports Master</p>
                <p class="display-5 my-4 text-primary fw-bold">   <img src={image5} className="img-fluid" alt="img" /></p>
                <p class="card-text mx-5 text-muted d-none d-lg-block">Please click the details button to see a list of cadidates for this position and place your vote.</p>
                <a href="#s" class="btn btn-outline-success border border-2 rounded-pill btn-lg mt-3" >
                See details
                </a>
              </div>
            </div>
          </div>
   
        </div>
        {/* <Routes>
          <Route path="/Votes" element={<Votes />} />

        </Routes> */}
  
      </div>
    </section>
    
    <Contact />
    <Footer />
  </div>
    </div>




</div>
    </div>
  )
}

export default Navbar


