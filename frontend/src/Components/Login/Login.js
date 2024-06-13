import { useRef } from "react"


export default function Login(){
  const submitRef = useRef(null);

      function handleClick(){
        if(submitRef.current){
          submitRef.current.style.display="none";
        }
      }
    return(
        <>
        <div class="container w-50" ref={submitRef} style={{"position":"fixed","z-index":"6","left":"52rem","top":"3rem"}}>
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center">Login</h3>
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" required/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required/>
              </div>
              <div class="d-grid">
                <button type="submit" onClick={handleClick} class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}