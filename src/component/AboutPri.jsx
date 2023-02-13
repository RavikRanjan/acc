import React from 'react'

export default function AboutPri() {
    return (
        <>
            <div className="container p-4 mb-5">
                <div className="row justify-content-evenly p-3">
                    <div className="col-lg-8 mb-3">
                        <h5 className='text-danger' style={{ fontWeight: 'bold' }}>About us</h5>
                        <h6 style={{ fontWeight: 'bold' }}>Principle Message</h6>
                        <h3 className='text-primary' style={{ fontWeight: 'bold' }}>Mathilesh Kumar</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio maiores quasi provident, iusto dignissimos. Expedita porro deleniti praesentium alias iusto et facere quisquam dignissimos. Animi, numquam! Fugit, obcaecati. Voluptatibus cum eaque, iure doloremque exercitationem error voluptas quasi ipsam rem sint blanditiis. Commodi neque voluptatem velit tempora, totam voluptate distinctio similique exercitationem veniam minima laborum quaerat beatae repellat provident. Cum molestiae nesciunt ad voluptatibus obcaecati consequuntur consectetur provident maiores ratione labore nam deserunt ipsam non, perferendis blanditiis ullam a sapiente. Natus asperiores suscipit enim voluptatibus quam, soluta eveniet optio at corporis error reiciendis sunt provident unde dicta libero, sit amet. Quae nemo reprehenderit totam optio deserunt laborum neque. Molestiae suscipit odit accusamus illum qui quae ipsa doloremque necessitatibus officiis optio magni aliquam quibusdam culpa blanditiis, nulla accusantium distinctio voluptates deserunt eos nisi vero eius.</p>
                        <button className='btn btn-success p-2'>Know More...</button>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <img src="assets/images/principle.jpg" className='img-fluid rounded' alt="" style={{ height: '400px', width: '100%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
