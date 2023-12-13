import React,{useState}from "react";
function Login(){
    const[user,setUser]=useState("");
    const [passward,setPassward]=useState("");
    const [useErr,setUserErr]=useState(false);
    const[passErr,setPassErr]=useState(false);
    function loginHandle(e){
        if(user.length<3 || passward.length<3)
       
        alert("Type correct value");
    else{
        alert("all good");
    }
    e.preventDefault();
}
  function  userHandler(e){
    let item=   e.target.value;
if(item.length<3){
    setUserErr(true)
}
else{
    setUserErr(false);
}
setUser(item);
    }
  function passwordHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setPassErr(true);

    }
    else{
        setPassErr(false);
    }
    setPassward(item);
  }

    return(
        <div>
        <h1>Login</h1>
       <form onSubmit={loginHandle}>
       <input type="text" placeholder="Enter User Id" onChange={userHandler} />{useErr?<span>User Not Valid</span>:""}
        <br /> <br />
        <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

        <br /> <br />
        <button type="submit"  >Login</button>
       </form>
    </div>
    )
}
export default Login;