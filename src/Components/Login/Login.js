import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/firebase.init';
import {toast} from 'react-hot-toast';


const provider = new GoogleAuthProvider();


const Login = () => {

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });




  const navigate = useNavigate()

  const googleAuth=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


}
const handleEmail = (event) => {
  const emailInput = event.target.value;

  if (/\S+@\S+\.\S+/.test(emailInput)) {
    setEmail({ value: emailInput, error: "" });
  } else {
    setEmail({ value: "", error: "Please Provide a valid Email" });
  }
};
const handlePassword=(event)=>{
  const passwordInput = event.target.value;

  if (passwordInput.length < 7) {
    setPassword({ value: "", error: "Password is  too short" });
  } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
    setPassword({
      value: "",
      error: "Password must contain a capital letter",
    });
  } else {
    setPassword({ value: passwordInput, error: "" });
  }
}

const handleLogin = (event) => {
  event.preventDefault();

  if (email.value === "") {
    setEmail({ value: "", error: "Email is required" });
  }

  if (password.value === "") {
    setPassword({ value: "", error: "Password is required" });
  }
  if (email.value && password.value) {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (errorMessage.includes("wrong-password")) {
          toast.error("incorrect password", { id: "error" });
        } else {
          toast.error(errorMessage, { id: "error" });
        }
      });
  }
};

    return (

        <div>
          
<section className="py-26 bg-white">
  <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto"> 
      <div className="text-center mb-8">
        <a className="inline-block mx-auto mb-6" href="#">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>
        </a>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
          </div>
      <form  onSubmit={handleLogin} >
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
          <input onBlur={handleEmail}  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" id="email" name="email"   placeholder="email"/>   {email.error && (
              <p className='text-red-600'>
                {email.error}
              </p>)}
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
          <input onBlur={handlePassword}    className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" id="password" name="password" placeholder="**********"/>   {password.error && (
              <p className='text-red-600'>
                {password.error}
              </p>)}
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label htmlFor="">
              <input type="checkbox"/>
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div className="w-full lg:w-auto px-4"><Link  to="/signup" className="inline-block font-extrabold hover:underline" >Forgot your password?</Link></div>
        </div>
        <button  className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-blue-600 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
        </form>

        <div className="mt-2 grid ">
        <button onClick={googleAuth} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>    
                       
                    </div>


        <p className="text-center my-2 font-extrabold">Don&rsquo;t have an account? <Link to='/signup' className="text-red-500 hover:underline" >Sign up</Link></p>
      


     
    </div>
  </div>
</section>




        </div>
    );
};

export default Login;