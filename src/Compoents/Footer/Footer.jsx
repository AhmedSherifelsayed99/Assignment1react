 import React from "react";


 export default function Footer(){
    return<>
    
    <footer id="footer" className="w-100 text-white ">
<div className="footer-content text-white container d-flex justify-content-between text-center py-5">
    <div>
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>

    <div className="part text-center">
        <h3>AROUND THE WEB</h3>
        <div className="icons d-flex text-center justify-content-center mt-3">
            <i className="fa-brands fa-facebook-f mx-1 icon"></i>
            <i className="fa-brands  fa-twitter mx-1 icon border border-1 rounded-circle p-2"></i>
            <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
            <i className="fa-solid fa-globe mx-1 icon"></i>
        </div>
    </div>

    <div>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme<br/> created by Route</p>

    </div>

</div>
<p className="end d-flex align-items-center justify-content-center">Copyright © Your Website 2021</p>



        
    </footer>
    
    
    
    
    </>
 }