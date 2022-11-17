import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Cookies from 'cookies'
import { useCookies } from "react-cookie"
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';

export default function Home({ NotesData }) {
    //move all token into file .env

    let router = useRouter()
    const [modal, setModal] = useState(true)
    const [tenantDetail, setTenantDetail] = useState({
        name: "", address: "", pgLoc: "", contact: "", adhaar: "", city: "", zipcode: ""
        , roomsPerfloor: 0, totalRoom: "", floor: 0
    })
    const [cookie, setCookie] = useCookies(['usertkn'])

    const handleClose = () => {
        setModal(false)
        // setNoteModal(false)
    }
    useEffect(() => {
        // if (!cookie.usertkn) {
        //     router.push('/login')
        // }
        // localStorage.setItem('notes', JSON.stringify(fetchData))
    }, [router.query])


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setTenantDetail({ ...tenantDetail, [e.target.name]: e.target.value })
    }
    console.log(tenantDetail)

    return (
        <>
            <Head><title>Welcome to Tenant Bill Generator || Easy to use</title></Head>
            <div className='mx-auto'>
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

                <div className="md:mt-0 md:col-span-2 ">
                    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                        <div className="container max-w-screen-lg mx-auto">
                            <div>
                                <div className='border-b border-blue-500 relative mb-5'>
                                    <h2 className="font-semibold text-2xl text-gray-600 ">Welcome to Tenant Bill Generator</h2>
                                    <Link href={'/addtenant'}><button className="absolute right-0 -top-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">Add Tenant</button></Link>
                                </div>
                                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                        <div className="text-gray-600">
                                            <p className="font-medium text-lg">Enter PG Details</p>
                                            <p>Please fill out all the fields.</p>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <form action="/">
                                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                    <div className="md:col-span-5">
                                                        <label for="name">Full Name</label>
                                                        <input onChange={handleChange} type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.name} />
                                                    </div>

                                                    <div className="md:col-span-5">
                                                        <label for="email">Address</label>
                                                        <input onChange={handleChange} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.address} placeholder="" />
                                                    </div>

                                                    <div className="md:col-span-3">
                                                        <label for="address">PG Location</label>
                                                        <input onChange={handleChange} type="text" name="pgLoc" id="pgLoc" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.pgLoc} placeholder="" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label for="city">Zipcode</label>
                                                        <input onChange={handleChange} type="tel" name="zipcode" id="zipcode" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.zipcode} placeholder="" />
                                                    </div>
                                                    <div className="md:col-span-3">
                                                        <label for="address">Adhaar No.</label>
                                                        <input onChange={handleChange} type="text" name="adhaar" id="adhaar" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.adhaar} placeholder="" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label for="city">Contact No.</label>
                                                        <input onChange={handleChange} type="tel" name="contact" id="contact" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={tenantDetail.contact} placeholder="" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label for="soda">No. of floors?</label>
                                                        <div className="h-10  bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                            <IoMdArrowDropup className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600" />
                                                            <input onChange={handleChange} name="floor" id="floor" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value={tenantDetail.floor} />
                                                            <IoMdArrowDropdown className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600" />
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label for="room">No. of Rooms/floor</label>
                                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                            <IoMdArrowDropup className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600" />
                                                            <input onChange={handleChange} name="roomsPerfloor" id="roomsPerfloor" type='number' placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value={tenantDetail.roomsPerfloor} />
                                                            <IoMdArrowDropdown className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600" />
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 items-center">
                                                        <div className="my-6 ">
                                                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



