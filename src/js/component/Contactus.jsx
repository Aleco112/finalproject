import React from 'react'

function Contactus() {
  return (
    <>
    <div className="d-flex mx-auto  flex-column mb-3 w-50 p-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" className="form-control d-flex align-items-center " id="exampleFormControlInput1" placeholder="Name Last Name"/>
 			</div>
    <div className="d-flex mx-auto  flex-column mb-3 w-50 p-3">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="d-flex mx-auto  flex-column mb-3 w-50 p-3">
        <label for="exampleFormControlTextarea1" className="form-label">
Write us</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div> <input class="mb-1 border text-warning d-flex mx-auto btn btn-white p-3" type="submit" value="Submit"/>
      </>
     
      
  )
}

export default Contactus