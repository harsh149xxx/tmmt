import JoinCard from "@/components/JoinCard";
import HeaderBox from "@/components/HeaderBox";
import { Fragment } from "react";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

// Corrected image import paths
import Joinushero from "@/public/joinushero.png";
import Vacation from '@/public/assets/join/vacation.png';
import Exclusive from '@/public/assets/join/Exclusive content.png';
import Perks from '@/public/assets/join/Perks.png';
import Rewards from '@/public/assets/join/Rewards.png';
import Social from '@/public/assets/join/Social Recognitation.png';
import Opportunities from '@/public/assets/join/Co-creation opportunities.png';
import { preload } from "react-dom";

const JoinUs = () => {
    const services = [
        {
            title: "Social recognition",
            content: "Professional growth and social recognition for growth and development.",
            img: Social, // Correct image import
        },
        {
            title: "Rewards",
            content: "We Offer rewards or incentives, such as discounts or gift cards as a token of appreciation.",
            img: Rewards, // Correct image import
        },
        {
            title: "An open vacation policy",
            content: "Flexible work arrangements, such as remote work or flexible hours.",
            img: Vacation, // Correct image import
        },
        {
            title: "Exclusive Content",
            content: "Access to exclusive content and early access to our product or service.",
            img: Exclusive, // Correct image import
        },
        {
            title: "Perks",
            content: "Performance-Based Rewards",
            img: Perks, // Correct image import
        },
        {
            title: "Co-creation opportunities",
            content: "It helps create a more motivated and engaged workforce, leading to a mutually beneficial relationship.",
            img: Opportunities, // Correct image import
        },
    ];

    return (
        <Fragment>
            {/* ------------------------ TOP SECTION HEADER START ------------------------ */}
            <header className="mx-2 my-5 flex h-fit flex-col gap-16 rounded-xl bg-[#4ABDAC] p-10 md:mx-16 lg:mx-32">
                <div className="flex w-full flex-col items-center gap-8 text-white md:justify-center">
                    <h1 className="text-white text-center font-serif text-6xl md:mb-8">
                        Be a part of our Team
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="aspect-w-9 aspect-h-16 px-2 md:w-1/2 lg:px-16">
                        <Image
                            priority={false}
                            src={Joinushero}
                            alt="Header Mobile Image"
                            className="aspect-w-9 aspect-h-16 h-full"
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col items-center gap-8 mb-4 text-white md:justify-center">
                    <div className="max-w-3xl px-4"> {/* Limiting the content box size */}
                        <p className="text-white text-center font-mono text-xl md:px-5">
                            Calling all go-getters and game-changers! We are always in search of exceptional and driven individuals who align with our dedication. Don't let this opportunity slip through your fingers. Drop us an email at team@themadmysteryteam.com to be a part of our team.
                        </p>
                    </div>
                </div>
            </header>
            {/* ------------------------ TOP SECTION HEADER END ------------------------ */}

            <section className="mx-2 my-8 rounded-xl  bg-sectionBg p-5 border-2 border-[#4ABDAC] shadow:lg md:mx-16 md:p-10 lg:mx-32">
                <div className="flex w-full flex-col items-center gap-8 mb-1 md:justify-center">
                    <h1 className="text-center text-black font-serif text-3xl md:text-4xl">
                        <strong>What's in it for You?</strong>
                    </h1>
                    <div className="max-w-3xl px-4"> {/* Limiting the content box size */}
                        <p className="text-black text-center font-mono text-lg md:text-xl md:px-3 mb-12">
                            Other than the traditional arrangement in which we deposit money in your bank account, we provide:
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {services.map((item, idx) => (
                        <JoinCard title={item.title} content={item.content} img={item.img} key={idx} />
                    ))}
                </div>
            </section>
            <section className="mx-2 my-4 md:mx-16 md:my-6 lg:mx-32 lg:my-8">
                <div className="bg-sectionBg p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] shadow-lg">
                <div className="flex w-full flex-col items-center gap-8 mb-1 md:justify-center">
                    <h1 className="text-center text-black font-serif text-3xl md:text-4xl">
                        <strong>Find the Perfect Job for You</strong>
                    </h1>
                    <div className="max-w-3xl px-4"> {/* Limiting the content box size */}
                        <p className="text-black text-center font-mono text-lg md:text-xl md:px-3 mb-12">
                        Join a team that values creativity, innovation, and passion. Explore exciting opportunities, take the next step in your career and be a part of The Mad Mystery Team.
                        </p>
                    </div>
                </div>
                    {/* First Job Posting */}
                    <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c] mb-8">
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Role:</strong> Engineering
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Location:</strong> New York
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Type:</strong> Full-Time
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Email us your resume at: </strong>
                            <a href="mailto:support@themadmysteryteam.com" className="text-blue-500">
                                support@themadmysteryteam.com
                            </a>
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Job Description:</strong> You represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                        </p>
                        <p className="text-lg leading-relaxed">
                            <strong>Don't forget to mention the job role in the subject line.</strong>
                        </p>
                    </div>

                    {/* Second Job Posting */}
                    <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c] mb-8">
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Role:</strong> Engineering
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Location:</strong> New York
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Type:</strong> Full-Time
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Email us your resume at: </strong>
                            <a href="mailto:support@themadmysteryteam.com" className="text-blue-500">
                                support@themadmysteryteam.com
                            </a>
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Job Description:</strong> You represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                        </p>
                        <p className="text-lg leading-relaxed">
                            <strong>Don't forget to mention the job role in the subject line.</strong>
                        </p>
                    </div>

                    {/* Third Job Posting */}
                    <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Role:</strong> Engineering
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Location:</strong> New York
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Job Type:</strong> Full-Time
                        </p>
                        <p className="text-lg leading-relaxed mb-2">
                            <strong>Email us your resume at: </strong>
                            <a href="mailto:support@themadmysteryteam.com" className="text-blue-500">
                                support@themadmysteryteam.com
                            </a>
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Job Description:</strong> You represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                        </p>
                        <p className="text-lg leading-relaxed">
                            <strong>Don't forget to mention the job role in the subject line.</strong>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default JoinUs;