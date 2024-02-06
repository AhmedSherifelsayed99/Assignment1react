import React from "react";
import poert1 from "../../Assets/poert1.png"
import poert2 from "../../Assets/port2.png"
import poert3 from "../../Assets/port3.png"




export default function Portfolio(){
  
        return<>
        
        <section id="portfolio" className=" container text-center py-5">
            <div className="portfolio-content">
                <h2 className="fw-bold">PORTFOLIO COMPONENT</h2>
                <i className="fa-solid fa-star"></i>
                <div className="photos d-flex flex-wrap p-3 justify-content-center">
                    <img src={poert1} width={300} /> 
                    <img src={poert2} width={300} className="ms-3"/>   
                    <img src={poert3} width={300} className="ms-3"/>  
                    <img src={poert1} width={300} className="mt-3"/> 
                    <img src={poert2} width={300} className="mt-3 ms-3"/>   
                    <img src={poert3} width={300} className="mt-3 ms-3"/>  
                </div>
               

            </div>

        </section>
        
        
        </>
    
}