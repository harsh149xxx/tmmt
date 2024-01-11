"use client"
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { toast } from "react-toastify";


const ContactPage = () => {

    const handleSubmit = () => {
        toast.success("Thank You! ");
    }


    return (
        <section>
            <HeaderBox title="Contact Us" />

            <section className='bg-white px-7 py-12 md:px-16 lg:px-32' >
                <form className="mx-auto max-w-md rounded-3xl border border-gray-400 px-12 py-8 shadow-xl" action="https://api.web3forms.com/submit" method="POST"  >
                    <input type="hidden" name="access_key" value={`${process.env.NEXT_PUBLIC_EMAIL_ID}`}></input>
                    <div className="group relative z-0 mb-5 w-full">
                        <input type="text" name="Name" id="Name" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="" required />
                        <label htmlFor="Name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Enter Your Name</label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <input type="email" name="Emial" id="Emial" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                        <label htmlFor="Emial" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Email address</label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <input type="text" name="Subject" id="Subject" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="" required />
                        <label htmlFor="Subject" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Subject</label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <textarea rows={6} name="Message" id="Message" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="" required />
                        <label htmlFor="Message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Message</label>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="w-full rounded-lg bg-col5 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#b73c36] focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto">Submit</button>
                </form>
            </section>

        </section>
    )
}

export default ContactPage