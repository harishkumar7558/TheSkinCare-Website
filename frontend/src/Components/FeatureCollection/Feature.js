import { Link } from "react-router-dom";


export default function Feature(){

    return(
        <div class=" container-fluid mt-5">
            <h3 class="text-center">Feature Collection</h3>
        <div class="d-flex justify-content-evenly mt-3 mb-4">
       <Link to="/onfeature"><img class="feature" src="./Images/feature1.png" alt="" width={"30%"} /></Link> 
       <Link to="/onfeature"><img class="feature" src="/Images/feature2.jpg" alt="" width={"30%"}/></Link> 
       <Link to="/onfeature"><img class="feature" src="/Images/feature3.png" alt="" width={"30%"}/></Link> 
        </div>
        </div>
    )
}