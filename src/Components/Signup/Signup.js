import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";  
import {auth} from '../Firebase/firebase.init';
import {toast} from 'react-hot-toast';

const provider = new GoogleAuthProvider();



const Signup = () => {

    const navigate = useNavigate()


    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({ value:"",error: "", });



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
const handleEmail=(event)=>{
    const emailInput = event.target.value;
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Enter valid Email" });
    }
}
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

const handlePasswordConfirmation=(event)=>{
	const confirmationInput = event.target.value;

    if (confirmationInput !== password.value) {
      setPasswordConfirmation({ value: "", error: "Password is Mismatched" });
    } else {
      setPasswordConfirmation({ value: confirmationInput, error: "" });
    }
  };



const handleSignup = (event) => {
    event.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }
    if (passwordConfirmation.value === "") {
      setPasswordConfirmation({
        value: "",
        error: "Password confirmation is required",
      });
    }
    if (email.value && password.value === passwordConfirmation.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Account created", { id: "created" });
          navigate("/");
		  verifyEmail()
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("already-in-use")) {
            toast.error("Email is already in use", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
    }
  };
  const verifyEmail=()=>{
	sendEmailVerification(auth.currentUser)
	.then(() => {
	  // Email verification sent!
	  // ...
	});}



    return (
        <div>
           
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-extrabold  ">Sign up</h1>
                <form onSubmit={handleSignup}  >    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input onBlur={(event)=>handleEmail(event.target.value)}
                        type="text" id="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                        {email?.error&&<p className="text-red-500" >{email.error}</p>}

                    <input  onBlur={(event)=>handlePassword(event.target.value)}
                        type="password" id="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />  {password.error && <p className="text-red-600" >{password.error}</p>}
                    <input   onBlur={(event)=>handlePasswordConfirmation(event.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" /> {passwordConfirmation.error && <p className="text-red-600" >{passwordConfirmation.error}</p>}

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <p className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </p>  and 
                        <p className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </p>
                    </div>
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


                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?  
                    <a className="no-underline border-b border-blue text-blue-600" href="../login/">
                          Log in
                    </a>.
                </div>
            </div>
        </div>


        </div>
    );
};

export default Signup;