import React from 'react';

const Login = () => {
    return (
        <div>
          
<section class="py-26 bg-white">
  <div class="container px-4 mx-auto">
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-8">
        <a class="inline-block mx-auto mb-6" href="#">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>
        </a>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
          </div>
      <form action="">
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Email</label>
          <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"/>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-extrabold" for="">Password</label>
          <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********"/>
        </div>
        <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label for="">
              <input type="checkbox"/>
              <span class="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div class="w-full lg:w-auto px-4"><a class="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
        </div>
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
        <div className="mt-2 grid ">
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                       
                    </div>


        <p class="text-center my-2 font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="#">Sign up</a></p>
      </form>
    </div>
  </div>
</section>




        </div>
    );
};

export default Login;