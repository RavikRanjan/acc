import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
            

            {/* start slide bar */}
            <div className="carousel">
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="assets/images/banner1.jpg" height="600px"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="assets/images/banner2.jpg" height="600px"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="assets/images/banner3.jpg" height="600px"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="assets/images/pic11.jpg" height="600px"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="assets/images/banner1.jpg" height="600px"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* end slid bar */}

            {/* start about */}
            <div className="container mt-3 mb-3">
                <div className="row justify-content-evenly">
                    <div className="col-md-3 p-0">
                        <h5 className='text-center p-2 bg-primary text-light m-0 rounded mb-2'>Message Directors</h5>
                        <center><img src="assets/images/dirct.jpg" className='img-fluid rounded border' alt="no directors image" /></center>
                        <h4 className='text-center text-light p-2 bg-primary mx-4'>Akhilesh Kumar</h4>
                        <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sapiente quibusdam. Corrupti similique iste accusantium! Placeat quam recusandae animi accusantium.</p>
                        <button className='btn btn-success p-2 mb-3 mx-2' style={{ float: 'right' }}>Know More...</button>
                    </div>
                    <div className="col-md-3 p-0">
                        <h5 className='text-center p-2 bg-primary text-light m-0 rounded mb-2'>Message Principle</h5>
                        <center><img src="assets/images/principle.jpg" className='img-fluid rounded border' alt="no directors image" /></center>
                        <h4 className='text-center text-light p-2 bg-primary mx-4'>Mathilesh Kumar</h4>
                        <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sapiente quibusdam. Corrupti similique iste accusantium! Placeat quam recusandae animi accusantium.</p>
                        <button className='btn btn-success p-2 mb-3 mx-2' style={{ float: 'right' }}>Know More...</button>
                    </div>
                    <div className="col-md-5">
                        <h5 className='text-center'>Update Notice</h5>
                        <marquee behavior="scroll" direction="up" className="text-center" height="400px">
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" /> Lorem ipsum dolor sit amet.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur adipisicing.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" /> Lorem ipsum dolor sit.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem ipsum dolor sit amet consectetur.</p></a>
                            <a href="#" style={{ textDecoration: "none" }}><p><img src="assets/images/new.gif" alt="" />Lorem, ipsum dolor.</p></a>
                        </marquee>
                    </div>
                </div>
            </div>
            <div className='container p-3'>
                <h6 className='p-1 text-danger' style={{ fontWeight: 'bold', fontSize: '18px' }}>About us</h6>
                <h4 className='p-2' style={{ fontWeight: 'bold' }}>Ardash Coaching Center</h4>
                <p className='p-3 pt-1 pb-0' style={{ fontFamily: 'sans-serif', wordSpacing: '0.3rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum voluptate deserunt blanditiis corrupti odit eligendi commodi? Fuga in facilis nulla ut tempora. Consequatur libero odit amet nemo expedita natus temporibus dicta molestias facere ipsam pariatur repellendus quae consequuntur quo quas possimus voluptatum, molestiae esse nobis vitae doloribus suscipit quisquam nam! Totam voluptatibus placeat dicta possimus aperiam pariatur in ipsam quas, repudiandae illum soluta! Consequatur et dignissimos quo, magnam, quod aut, veniam tempora veritatis sunt nobis hic nostrum odio vero modi soluta quidem fuga possimus voluptate saepe! Accusantium, atque laboriosam! Enim magni consequuntur debitis blanditiis id nisi placeat itaque vitae molestiae, esse doloremque rem atque recusandae laudantium.</p>
                <button className='btn btn-success mx-3 p-2'>Read More...</button>
            </div>
            {/* end about us */}
            <hr />

            {/* start contact us */}
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h4 className='text-center bg-success text-light p-2 rounded'>Contact Us</h4>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='name' id="floatingInput" placeholder="Enter full Name" required/>
                                <label forhtml="floatingInput">Full Name*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" name="phone" className="form-control" minLength='10' maxLength='10' id="floatingInput" placeholder='Enter your mobile number' required/>
                                <label forhtml="floatingInput">Mobile Number*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" name="phone" className="form-control" id="floatingInput" placeholder='Enter your mobile number' required/>
                                <label forhtml="floatingInput">Email Address*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="phone" className="form-control" id="floatingInput" placeholder='Enter your mobile number' required/>
                                <label forhtml="floatingInput">Subject*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} required></textarea>
                                <label forhtml="floatingTextarea2">Message*</label>
                            </div>
                            <div className="w-100">
                                <input type="submit" className='btn btn-success w-100' value="Send Message" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <iframe style={{width:"100%"}} height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Adarsh%20Coaching%20Centre%20G369+MP7,%20Arajipur%20West,%20Bihar%20852213&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0"></iframe>
                    </div>

                </div>
            </div>
            {/* end contact us */}
        </>
    )
}
