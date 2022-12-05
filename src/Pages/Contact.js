import React from 'react'

function Contact() {
  return (
    <div className='mt-5'>
      <section id="contact">
    <div className="container-lg">
      
      <div className="text-center">
        <h2>Get in Touch</h2>
        <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          
          <form>
            <label for="email" className="form-label">Email address:</label>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill text-secondary"></i>
              </span>
              <input type="text" id="email" className="form-control" placeholder="e.g. dessfirid34@gmail.com" />
              <span className="input-group-text">
                <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>
            <label for="name" className="form-label">Name:</label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <i className="bi bi-person-fill text-secondary"></i>
              </span>
              <input type="text" id="name" className="form-control" placeholder="e.g. Desmond" />
            </div>
            
            <div className="mb-4 input-group">

            </div>
            <div className="mb-4 mt-5 form-floating">
              <textarea className="form-control" id="query" style={{height: "140px"}} placeholder="query"></textarea>
              <label for="query">Your query...</label>
            </div>
            <div className="mb-4 text-center">
              <button type="submit" className="btn btn-info border border-2 rounded-pill ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact
