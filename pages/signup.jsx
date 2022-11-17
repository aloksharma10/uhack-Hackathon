import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

function Signup({ login }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const router = useRouter()
  let a = email.split('@')

  useEffect(() => {
    if (login) {
      toast.success('You are already logged in!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/')
      }, 1000);
    }
  }, [login])

  const handleChange = (e) => {
    if (e.target.name == "name") { setName(e.target.value) }
    if (e.target.name == "email") { setEmail(e.target.value) }
    if (e.target.name == "password") { setPassword(e.target.value) }
    if (e.target.name == "cpassword") { setCpassword(e.target.value) }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password != cpassword) {
      toast.error('Password and Confirm Password must be same!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if (password.length < 6) {
      toast.error('Password must be 6 characters', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      let data = {
        Name: name, username: a[0], email, password
      }
      try {
        let res = await fetch("http://localhost:1337/api/auth/local/register", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        let resData = await res.json()
        if (resData.jwt) {
          toast.success('Your account has been created successfully.', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        else {
          toast.error("Email is already taken!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
  
        }
        setName('')
        setEmail('')
        setPassword('')
        setCpassword('')
        
      } catch (error) {
        toast.error("Internal Server Error!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

  }
  return (
    <>
      <Head><title>Signup | FlashCard</title></Head>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      {!login && <section className="bg-gray-50 dark:bg-slate-800 min-h-screen">
      <div className="w-full mx-auto dark:bg-slate-900 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <form onSubmit={handleSubmit} method="post">
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 px-3">
                  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                      <div className="max-w-md mx-auto">
                        <div>
                          <h1 className="text-2xl font-semibold">Signup</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                              <input  onChange={handleChange} value={name} type="text" name="name" id="name" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                              <label for="Nmme" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                            </div>
                            <div className="relative">
                              <input  onChange={handleChange} type="email" name="email" value={email} id="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative">
                              <input onChange={handleChange} type="password" name="password" value={password} id="password" placeholder="••••••••" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                              <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative">
                              <input onChange={handleChange} value={cpassword} type="password" name="cpassword" id="cpassword" placeholder="••••••••" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                              <label for="cpassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                            </div>
                            <div className="relative">
                              <button type='submmit' className="bg-blue-500 text-white rounded-md px-2 py-1">Signup</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
          </div>
      </section>}
    </>

  )
}


export default Signup