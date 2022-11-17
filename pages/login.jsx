import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { useCookies } from "react-cookie"

function Login({ login }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookie, setCookie] = useCookies(['usertkn'])

  const router = useRouter()
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
    if (e.target.name == "email") { setEmail(e.target.value) }
    if (e.target.name == "password") { setPassword(e.target.value) }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      identifier: email, password
    }
    try {
      let res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      let resData = await res.json()
      if (resData.data == null && resData.jwt == null) {
        toast.error('Invalid Credential!', {
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
      else if (resData.jwt) {
        toast.success('You are logged in!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem('user', JSON.stringify(resData.user))
        setCookie("userdata", resData.user);
        setCookie("usertkn", resData.jwt, {
          path: "/",
          maxAge: 3600,
          sameSite: true,
        })
        setTimeout(() => {
          router.push("/")
        }, [1000]);
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      toast.error('Internal Server Error!', {
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

  return (
    <>
      <Head><title>Login | FlashCard</title></Head>
      {!login && <section className=" min-h-screen ">
        <div className="flex flex-col justify-center px-2 mx-auto md:py-0">
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
                          <h1 className="text-2xl font-semibold">Login</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                              <input  onChange={handleChange} type="email" name="email" value={email} id="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative">
                              <input onChange={handleChange} type="password" name="password" value={password} id="password" placeholder="••••••••" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                              <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative">
                              <button type='submmit' className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

          </div>
        </div>
      </section>}
    </>
  )
}

export default Login