import React, { useRef } from "react";
import "./Signup.css";
export default function Signup() {
    const containerRef = useRef(null);
    const subRef = useRef(null);

    function handleClick() {
        console.log("Function is triggered");
        if (containerRef.current) {
            containerRef.current.style.display = "none";
        }
    }
    function handleClicked() {
        console.log("Function is triggered");
        if (subRef.current) {
            subRef.current.style.display = "none";
        }
    }

    return (
        
        <div ref={subRef}>
        <div className="sign w-75" ref={containerRef}  style={{ "position": "fixed", "zIndex": "20","display":"flex" }}>
            <img className="signimg"src="./Images/login.jpeg" alt="" width={"60%"} />
            
            <div>   
            <div className="btn rounded-pill btn-dark btnX mt-2" onClick={handleClick}>X</div>
                <form  className="container-fluid w-100 mt-5">
                
                    
                    <img className="signimg1" src="./Images/loginlogo.png" alt="" width={"80%"}  />

                    <div data-mdb-input-init className="form-outline mb-4 ">
                        <input type="text" id="form5Example1" className="form-control border border-1 border-dark bg-info" />
                        <label className="form-label" htmlFor="form5Example1">Name</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form5Example2" className="form-control border border-1 border-dark bg-info" />
                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <div className="d-flex">
                            <input type="phone" id="form5Example2" placeholder="+91" className="form-control border border-1 border-dark w-25 me-1  bg-info"/>
                            <input type="phone" id="form5Example2" className="form-control border border-1 border-dark bg-info" />
                        </div>
                        <label className="form-label" htmlFor="form5Example2">Phone</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                            className="form-check-input me-2 bg-info"
                            type="checkbox"
                            value=""
                            id="form5Example3"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="form5Example3">
                            I have read and agree to the terms
                        </label>
                    </div>

                    <button data-mdb-ripple-init type="button"onClick={handleClicked} className="btn btn-info w-75 btn-block mb-4 ms-5 ">Subscribe</button>
                </form>
            </div>
        </div>
        </div>
    );
}
