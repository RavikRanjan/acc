import React from 'react'

export default function Footer() {
  return (
    <>
        <div className="container-fluid bg-dark text-light pt-3">
            <div className="row footer text-center row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-4">
                <div className="col">
                    <h5>ABOUT</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum at alias itaque consectetur delectus laborum tempore quas quisquam explicabo pariatur voluptate harum quaerat nostrum architecto doloremque, nesciunt omnis necessitatibus possimus sint soluta fuga blanditiis iure rem.</p>
                </div>
                <div className="col">
                    <h5>IMPORTANT LINK</h5>
                    <ul style={{paddingLeft:'80px'}}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">class</a></li>
                        <li><a href="#">notes</a></li>
                        <li><a href="#">our faculty</a></li>
                        <li><a href="#">gallery</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>NEWS & EVENT</h5>
                    <ul style={{paddingLeft:'80px'}}>
                        <li><a href="#">notice</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">event</a></li>
                        <li><a href="#">mission</a></li>
                        <li><a href="#">vision</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>CONTACT</h5>
                    
                    <p><i className="bi bi-telephone-fill"></i> : 9955182103</p>
                    <p><i className="bi bi-envelope-fill"></i> : acc@gmail.com</p>
                    <p><i className="bi bi-globe"></i> : Adarsh Coaching Center <br />Shadhu Tola, P.O - Bhatgama, P.S - Chousa <br />Pin Code - 852213, Madhepura Bihar  </p>
                </div>
            </div>
            <div className='text-center p-3'>
                <p >Copyright<span>&#169;</span>1960-2023 Adarsh Coaching Center. All Rights Reserved. By Nirvi</p>
            </div>
        </div>
    </>
  )
}
