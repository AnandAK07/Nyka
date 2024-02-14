import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const Register = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState('');
  const [form, setForm] = useState({
    name: '',
    avatar: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'post',
        url: `${apiUrl}/api/register`,
        data: form
      });
      setData(res.data)
      console.log(res.data)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }


  if (data ==='Register Successfull') {
    return navigate('/login')
  }

  return (
    < >
      <div style={{ background: '#FFFFFF', border: '1px solid black', width: '30%', textAlign: 'center', marginLeft: '35%', marginTop: '5%' }}>
        <div >
          <h2>
            Register your account
          </h2>
        </div>

        <div >
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  autoComplete="name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  autoComplete="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">
                Avatar
              </label>
              <div className="mt-2">
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  value={form.avatar}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{' '}
            <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// export default function Example() {
//     return (
//         <>
//             {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                     <img
//                         className="mx-auto h-10 w-auto"
//                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                         alt="Your Company"
//                     />
//                     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                         Sign in to your account
//                     </h2>
//                 </div>

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                     <form className="space-y-6" action="#" method="POST">
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Email address
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Password
//                                 </label>
//                                 <div className="text-sm">
//                                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                         Forgot password?
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="mt-2">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 Sign in
//                             </button>
//                         </div>
//                     </form>

//                     <p className="mt-10 text-center text-sm text-gray-500">
//                         Not a member?{' '}
//                         <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//                             Start a 14 day free trial
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// }