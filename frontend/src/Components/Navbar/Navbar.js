
import { useRef } from "react";
import Login from "../Login/Login";
import "./Navbar.css";
export default function Navbar() {
   const clickRef = useRef(null);

   function handleClick() {
    if (clickRef.current) {
        clickRef.current.style.display ="block";
    } 
}

    return (
        <div class="navs">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img class="ms-4 me-2" src="./Images/Logo.avif" alt="" width={"15%"} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
                        <form class=" w-75">


                            <div class="input-group w-100 ">
                                <input type="text" class="form-control bg-dark dark border border-2 border-info text-light" placeholder="Search" style={{"opacity":"0.5"}}/>
                                <span class="input-group-text btn border border-2 border-info btn-info"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </form>

                        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button onClick={handleClick} className="btn nav-link active "><i class="fa fa-user-o me-1" aria-hidden="true"></i>Login/Signup</button>
                                <div style={{"display":"none"}}  ref={clickRef}><Login /></div>
                                
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/cart"> <i class="fa fa-shopping-cart me-1" aria-hidden="true"></i>Cart</a>
                            </li>
                          
                        </ul>

                    </div>



                </div>
            </nav>
        </div>
    )
}