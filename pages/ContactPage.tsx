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
  {/* Header */}
  <HeaderBox title="Contact Us" />

  {/* Content Section */}
  <div className="flex flex-wrap px-7 py-12 md:px-16 lg:px-32">
    {/* Left: Contact Form */}
    <div className="w-full lg:w-1/2 px-4">
      <form
        className="mx-auto max-w-md rounded-3xl border border-gray-400 px-12 py-8 shadow-xl"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="22901e08-3565-482e-b481-436e37155667"
        />
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="Name"
            id="Name"
            className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=""
            required
          />
          <label
            htmlFor="Name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Enter Your Name
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="Email"
            id="Email"
            className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=""
            required
          />
          <label
            htmlFor="Email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Email address
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <textarea
            rows={6}
            name="Message"
            id="Message"
            className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=""
            required
          />
          <label
            htmlFor="Message"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Right: Contact Information */}
    <div className="w-full lg:w-1/2 px-4">
      <h1 className="text-3xl font-bold mb-8 mt-12">Don’t like filling out forms?</h1>
      <h2 className="text-xl font-semibold mb-4">Here are other ways to connect with us:</h2>
      <p className="flex items-center mb-2">
        <span className="mr-2">📞</span> support@themadmysteryteam.com
      </p>
      <p className="flex items-center mb-2">
        <span className="mr-2">📧</span> support@themadmysteryteam.com
      </p>
      <p className="flex flex-col items-start mb-2">
  <span className="flex items-center">
    <span className="mr-2">📍</span>The Mad Mystery Team LLC,
  </span>
  <span className="pl-8">30 N Gould ST STE R</span>
  <span className="pl-8 mb-4">Sheridan, WY 82801</span>
</p>

      <p className="mt-6 italic font-bold">
        TMMT is the website of The Mad Mystery Team LLC
      </p>
    </div>
  </div>
</section>

    )
}

export default ContactPage