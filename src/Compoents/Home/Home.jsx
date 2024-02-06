
import React from "react";
import img from "../../Assets/hero.jpg"


export default function Home(){
    return<>
    
    <section id="home" className="vh-100 py-5">
        <div className="home-content text-center text-white mt-5">
            <img src={img} width={200} height={200} className="rounded-circle"/>
            <h2 className=" fw-bold mt-2">START FRAMEWORK</h2>
            <i className="fa-solid fa-star"></i>
            <p className="mt-2">Graphic Artist - Web Designer - Illustrator</p>
        </div>








    </section>
    
    
    
    
    </>
}