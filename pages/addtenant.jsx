import React from 'react'

function addtenant() {
    const handleSubmit = (e) => {

    }
    const handleChange = (e) => {

    }
    return (
        <div className="mt-10 mb-5 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2 ">
                <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <h2 className="font-semibold text-2xl text-gray-600 border-b border-blue-500">Add Tenant Detail</h2>
                            <p className="text-gray-500 mb-6"></p>
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Personal Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label for="full_name">Full Name</label>
                                                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="email">Address</label>
                                                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label for="address">City</label>
                                                <input type="text" name="adhaar" id="adhaar" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="city">Zipcode</label>
                                                <input type="tel" name="contact" id="contact" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                            </div>
                                            <div className="md:col-span-3">
                                                <label for="address">Adhaar No.</label>
                                                <input type="text" name="adhaar" id="adhaar" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="city">Contact No.</label>
                                                <input type="tel" name="contact" id="contact" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                            </div>



                                            <div className="md:col-span-2">
                                                <label for="soda">Age</label>
                                                <div className="h-10  bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                    <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                                                    <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label for="soda">Room No.</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                    <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                                                    <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="md:col-span-1 items-center">
                                                <div className="my-6 ">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default addtenant