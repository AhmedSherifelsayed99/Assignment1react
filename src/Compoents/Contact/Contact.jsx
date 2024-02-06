import React from "react";




export default function Contact(){
    return<>



<section id="final" className="py-5 text-center container">
    <div className="final-content py-5">
        <h2>CONATCT SECTION</h2>
        <i className="fa-solid fa-star"></i>
    </div>
    
    <form>
        <input type="text" className="form-control mt-3" placeholder="userName" name="name" />
        <input type="number" className="form-control mt-3" placeholder="userAge" name="age" />
        <input type="email" className="form-control mt-3" placeholder="userEmail" name="email" />
        <input type="password" className="form-control mt-3" placeholder="userPassword" name="password" />
        <button className="btn  mt-3 d-flex justify-content-start" type="submit">Send Message</button>
         
    </form>

    </section>
    </>
}