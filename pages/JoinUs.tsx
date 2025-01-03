import JoinCard from "@/components/JoinCard";
import HeaderBox from "@/components/HeaderBox";
import { Fragment } from "react";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

// Corrected image import paths
import Joinushero from "@/public/joinushero.png";
import Automation from '@/public/assets/home/automation.png';
import Antifraud from '@/public/assets/home/antifraud.png';
import Analytics from '@/public/assets/home/analytics.png';
import Migration from '@/public/assets/home/migration.png';
import Integration from '@/public/assets/home/integration.png';
import Support from '@/public/assets/home/support.png';

const JoinUs = () => {
    const services = [
        {
            title: "Social recognition",
            content: "Professional growth and social recognition for growth and development.",
            img: Antifraud, // Correct image import
        },
        {
            title: "Rewards",
            content: "We Offer rewards or incentives, such as discounts or gift cards as a token of appreciation.",
            img: Analytics, // Correct image import
        },
        {
            title: "An open vacation policy",
            content: "Flexible work arrangements, such as remote work or flexible hours.",
            img: Migration, // Correct image import
        },
        {
            title: "Exclusive Content",
            content: "Access to exclusive content and early access to our product or service.",
            img: Integration, // Correct image import
        },
        {
            title: "Perks",
            content: "Performance-Based Rewards",
            img: Support, // Correct image import
        },
        {
            title: "Co-creation opportunities",
            content: "It helps create a more motivated and engaged workforce, leading to a mutually beneficial relationship.",
            img: Automation, // Correct image import
        },
    ];

    return (
        <Fragment>
            {/* ------------------------ TOP SECTION HEADER START ------------------------ */}
            <header className="mx-2 my-5 flex h-fit flex-col gap-16 rounded-xl bg-[#4ABDAC] p-10 md:mx-16 lg:mx-32">
                <div className="flex w-full flex-col items-center gap-8 text-white md:justify-center">
                    <h1 className="text-white text-center font-serif text-6xl mb-12">
                        Be a part of our Team
                    </h1>
                    <div className="max-w-3xl px-4"> {/* Limiting the content box size */}
                        <p className="text-white text-center font-mono text-xl md:px-5">
                            Calling all go-getters and game-changers! We are always in search of exceptional and driven individuals who align with our dedication. Don't let this opportunity slip through your fingers. Drop us an email at team@themadmysteryteam.com to be a part of our team.
                        </p>
                    </div>
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
            </header>
            {/* ------------------------ TOP SECTION HEADER END ------------------------ */}

            <section className="mx-2 my-8 rounded-xl  bg-sectionBg p-5 border-2 border-[#4ABDAC] shadow:lg md:mx-16 md:p-10 lg:mx-32">
                <div className="sectionTitle">What's in it for You?</div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {services.map((item, idx) => (
                        <JoinCard title={item.title} content={item.content} img={item.img} key={idx} />
                    ))}
                </div>
            </section>
            <section className="mx-2 my-4 md:mx-16 md:my-6 lg:mx-32 lg:my-8">
                <div className="bg-sectionBg p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] shadow-lg">
                    <div className="flex flex-wrap mb-8 gap-8">
                        {/* First div (left side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>

                        {/* Second div (right side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>
                        
                        
                    </div>
                    <div className="flex flex-wrap mb-8 gap-8">
                        {/* First div (left side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>

                        {/* Second div (right side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>
                        
                        
                    </div>
                    <div className="flex flex-wrap gap-8">
                        {/* First div (left side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>

                        {/* Second div (right side) */}
                        <div className="bg-white p-5 md:p-10 rounded-xl border-2 border-[#4ABDAC] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
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
                                <strong>Job Description:</strong> u represent that you are at least the age of majority in your state or jurisdiction and have consented to allow your minor dependents to use this site.
                            </p>
                            <p className="text-lg leading-relaxed">
                                <strong>Don't forget to mention the job role in the subject line.</strong>
                            </p>
                        </div>
                        
                        
                    </div>

                </div>

            </section>
        </Fragment>
    );
};

export default JoinUs;
