import React from 'react'
import { FcHome } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import look1 from '../images/look1.jpg'
import look2 from '../images/look2.jpg'
import look3 from '../images/look3.jpg'
import look4 from '../images/look4.jpg'
import look5 from '../images/look5.jpg'
import look6 from '../images/look6.jpg'
import look7 from '../images/look7.jpg'
import look8 from '../images/look8.jpg'

function VotePage() {
	// let Upvote = require('react-upvote');
  return (
    <div className='row bg-light container-lg my-5'>

    {/* <div className='col-sm-1 col-2 col-lg-2 p-0 mx-0'>
    
    <div className=' bg-success' style={{display:"flex", flexDirection:"column",height:"238vh"}}>
    <div className='mx-5 mt-5 '>
    <p> Home</p>
    </div>
    <div className='mx-5'>
    <p><i className="fa-brands fa-cc-discover mt-5 m-3"></i>Discover</p>
    </div>
    <div className='mx-5'>
    <p><i className="fa-solid fa-arrow-up-right-dots mt-5 "></i>Popualar</p>
    </div>
       <div className='mx-5'>
    <p><i className="fa-brands fa-twitter mt-5 "></i>Following</p>
   
    </div>
    
    </div>
  


    </div> */}
    <div className=' col-sm-1 col-2 col-lg-12'>
   
			<div className="xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}">
				<div
					className="bg-light ps-5 ms-5"
					style={{ marginTop: "50px", marginBottom: "10px", justifyContent:"center"}}
				>
					<form className="form-inline" style={{width:"500px"}}>
						<input
							className="form-control mr-2 ms-3"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					
					</form>
				</div>
				{/* <Upvote>Example</Upvote> */}

				<div>
					<h3 className=" bg-white p-5 text-center" style={{ marginBottom:"1em"}}>
						<b className=''>President</b>
					</h3>
					<div className='bg-white '
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
					
						}}
					>
						<span>
						<img src={look5} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Desmond Teko </h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look3} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Akoneh Silas</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look2} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Namkat Cedric</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look1} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'>Estella Sheinbom</h6>
						<p className='text-center mb-3'> Graphic Design</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						
					</div>
					<h3 className=" bg-white p-5 text-center" style={{ marginBottom:"2em", marginTop:"7em"}}>
						<b>Secretary</b>
					</h3>
					<div className ='bg-white '
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
							// width: "700px",
						}}
					>
						<span>
						<img src={look6} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Miriam Kuheh</h6>
						<p className='text-center mb-3'> Graphic Design</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look7} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Evaristus Tambua</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look8} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Vanessiah Eyong</h6>
						<p className='text-center mb-3'> Graphic Design</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look1} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Gilbert Tima</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
					</div>
					<h3 className="bg-white p-5 text-center" style={{ marginBottom:"1em", marginTop:"5em"}}>
						<b> Sports Cordinator</b>
					</h3>
					<div  className='mt-5 bg-white '
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent:"center",
							height: "120px",
							// width: "700px",
						}}
					>
						<span>
						<img src={look2} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Chu Edwin</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look3} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Bassah Bernard</h6>
						<p className='text-center mb-3'> Petroleum Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look4} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Kimboh Lovette</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
						<span>
						<img src={look4} alt="tech" className="mx-3 h-100" style={{borderRadius:"10px", width:"12em"}} />
						<h6 className='my-2 text-center'> Rouclec Asonghanyi</h6>
						<p className='text-center mb-3'> Sofware Engineering</p>
						<p>
						<button className='btn btn-success ms-4 me-3 border rounded-pill btn-md'>Vote</button>
						<button  className='btn btn-primary border rounded-pill btn-md'>Details</button>
						</p>
						</span>
					</div>
				</div>
			</div>
	

    </div>
    {/* <div className='col-sm-5 col-5 col-lg-3'>
    <div>
    <Row>
    <div className='my-5' style={{display:"flex", flex:"row",height:"50px",alignItems:"center"}}>
  <img cla src={look4} alt="" style={{borderRadius:"150px", width:"52px",height:"50px"}} />
  <h2 style={{marginLeft:"10px",fontSize:"20px"}}>Desmond Tekum</h2>
 
    </div>

    </Row>
    </div>

    </div> */}
    </div>
  )
}

export default VotePage