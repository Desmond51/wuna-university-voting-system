import React from 'react'
import image1 from '../images/image1.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'

function Cards() {
  return (
    <div>
    <h3 className='text-center my-5'>Staff Members</h3>
    <div className=' row my-5 g-0 align-items-center justify-content-center lead'>
    <div className="card" style={{width: "18rem"}}>
  <img src= {image1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Prof JJ. Asongu. <span className='text-success'>Phd</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info">More details</a>
  </div>
</div>
 <div className="card" style={{width: "18rem"}}>
  <img src= {image1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Prof JJ. Asongu. <span className='text-success'>Phd</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info">More details</a>
  </div>
</div>
 <div className="card" style={{width: "18rem"}}>
  <img src= {image1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Prof JJ. Asongu. <span className='text-success'>Phd</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info">More details</a>
  </div>
</div>
 <div className="card" style={{width: "18rem"}}>
  <img src= {image1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Prof JJ. Asongu. <span className='text-success'>Phd</span> </h5>
    <p className="card-text">The president and founder of Wuna University.</p>
    <a href="#s" className="btn btn-info">More details</a>
  </div>
</div>
    </div>
   
    </div>
    
  )
}

export default Cards