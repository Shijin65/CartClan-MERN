import React from "react";

function Login() {
  return (
    <div className="flex justify-center dark:text-white ">
      <div class="border-b border-gray-900/10 pb-12 bg-base-100 p-10 shadow-sm my-10 rounded-md dark:shadow-white md:w-1/2 w-screen ">
        <h2 class=" leading-7 font-extrabold  text-2xl">LOGIN</h2>

        <div class="mt-10 grid grid-cols-1 ">
        <div class="sm:col-span-4 text-start">
            <label
              for="email"
              class="block text-sm font-medium leading-6 light:text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 light:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Email . . . ."
              />
            </div></div>

            <div class="sm:col-span-4 mt-5 text-start">
              <label
                for="password"
                class="block text-sm font-medium leading-6 light:text-gray-900"
              >
                Password
              </label>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="password"
                  class="block w-full rounded-md border-0 py-1.5 light:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  placeholder="password . . . ."
                />
              </div>
            </div>
          
        </div>
        <button className="btn btn-info hover:text-white mt-10 ">Submite</button>
      </div>
    </div>
  );
}

export default Login;
