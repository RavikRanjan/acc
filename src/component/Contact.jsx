import React from 'react'

export default function Contact() {
  return (
    <>

      <div className="container mb-3 mt-3">
      <h4 className='text-center bg-success text-light p-2 rounded mb-3'>Contact Us</h4>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name='name' id="floatingInput" placeholder="Enter full Name" required />
                <label forhtml="floatingInput">Full Name*</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" name="phone" className="form-control" minLength='10' maxLength='10' id="floatingInput" placeholder='Enter your mobile number' required />
                <label forhtml="floatingInput">Mobile Number*</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" name="phone" className="form-control" id="floatingInput" placeholder='Enter your mobile number' required />
                <label forhtml="floatingInput">Email Address*</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="phone" className="form-control" id="floatingInput" placeholder='Enter your mobile number' required />
                <label forhtml="floatingInput">Subject*</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} required></textarea>
                <label forhtml="floatingTextarea2">Message*</label>
              </div>
              <div className="w-100">
                <input type="submit" className='btn btn-success w-100' value="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-md-6 ">
            <div className='text-center'>
              <h4>Directors :- Akhilesh Kumar</h4>
            <p><i className="bi bi-telephone-fill"></i>Phone : 9955182103, <span><i className="bi bi-envelope-fill"></i>Email : acc@gmail.com</span></p>
                    <p><i className="bi bi-globe"></i> : Adarsh Coaching Center <br />Shadhu Tola, P.O - Bhatgama, P.S - Chousa <br />Pin Code - 852213, Madhepura Bihar  </p>
            </div>
            <iframe style={{ width: "100%" }} height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Adarsh%20Coaching%20Centre%20G369+MP7,%20Arajipur%20West,%20Bihar%20852213&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0"></iframe>
          </div>

        </div>
      </div>
      {/* end contact us */}
    </>
  )
}
