const title = document.getElementById("title");//
const login = document.getElementById("loginbtn")
const signup = document.getElementById("signupbtn")//
const input = document.getElementById("input")//



    signup.onmouseenter=()=>{
        title.innerHTML= "sign up";
    input.style.display="block";
    }
   
loginbtn.onclick=()=>{
    title.innerHTML= "login";
    input.style.display="none"
}