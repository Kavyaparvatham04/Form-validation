import { useState } from "react"

function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [errors, seterrors] = useState({
    email: "",
    password: ""
  })

  const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handlesubmit(){
    
    if(email.trim()===""){
      seterrors((errors) => ({...errors, email:"Enter email address"}))
    }

    else if (!emailpattern.test(email)){
      seterrors((errors) => ({...errors, email:"Enter valid email address"}))
    }

    else {
      seterrors((errors) => ({...errors, email:""}))
    }

    if(password.trim()===""){
      seterrors((errors) => ({...errors, password:"Enter Password"}))
    }

    else if (password.trim().length<8){
      seterrors((errors) => ({...errors, password:"Password should be of minimum 8 characters"}))
    }

    else {
      seterrors((errors) => ({...errors, password:""}))
    }

  }
  return(
    <>
    <div className="border w-25 m-5 m-auto p-3">
      <h2 className="text-primary text center">Login Form</h2>

      <div>
        <label>Email</label>
        <input type="email" className="form-control" value={email}
        onChange={(e) => {setemail(e.target.value)}}/>
        {errors.email&&<span className="text-danger">{errors.email}</span>}
      </div>

      <div>
        <label>password</label>
        <input type="email" className="form-control" value={password}
        onChange={(e) => {setpassword(e.target.value)}}/>
        {errors.password&&<span className="text-danger">{errors.password}</span>}
      </div>

      <div className="mt-3">
        <button className="btn btn-primary w-100" onClick={handlesubmit}>Login</button>
      </div>

    </div>
    </>
  )
}

export default App