// app/page.tsx
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import React from "react";
import Header from "@/components/Header";

// app/page.tsx
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Added pt-20 for padding-top to account for header height */}
            <main className="flex-1 max-w-7xl mx-auto px-4 pt-20 pb-8 grid grid-cols-12 gap-8">
                {/* Left Column - Profile */}
                <div className="col-span-4">
                    {/* Removed sticky positioning to prevent overlap */}
                    <div>
                        <div className="relative w-full aspect-square mb-4">
                            <Image
                                src="/images/profile.jpeg"  // Add the repository name to the path
                                alt="Profile"
                                fill
                                className="rounded-lg object-cover shadow-lg"
                                style={{ objectPosition: '50% 30%' }}
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Felix Guerrero</h1>
                        <h2 className="text-xl text-gray-600 mb-4">Security Engineer</h2>
                        <p className="text-gray-600 mb-4">
                            Experienced Security Engineer specializing in Threat Hunting and Incident Response.
                            Strong background in offensive operations.
                        </p>

                        {/* Certifications */}
                        <div className="space-y-2">
                            <a
                                href="https://www.credly.com/badges/d175e8bb-c4bc-46a4-bd12-ab8bb4cefa67/linked_in_profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline"
                            >
                                AWS Certified Security – Specialty
                            </a>
                            <a
                                href="https://www.credly.com/badges/e522b3ee-03aa-48a5-afda-08cd44fd7253/linked_in_profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline"
                            >
                                AWS Certified Cloud Practitioner
                            </a>
                            <a
                                href="https://eu.badgr.com/public/assertions/BDEkLXliRn-_U6TLoH6fvw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline"
                            >
                                Certified Red Team Operator (CRTO)
                            </a>
                            <a
                                href="https://www.credly.com/badges/15b4a2eb-9dfe-490a-a4fe-2ff31b55b343"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline"
                            >
                                Offensive Security Certified Expert (OSCE)
                            </a>
                            <a
                                href="https://www.credly.com/badges/d7398910-b07d-43ae-8e93-a8c87c70d94d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline"
                            >
                                Offensive Security Certified Professional (OSCP)
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Projects */}
                <div className="col-span-8">
                    <section id="projects">
                        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <ProjectCard
                                title="HackerJobs"
                                description="Cybersecurity job board platform"
                                link="https://www.hackerjobs.com/"
                                tech={["Next.js", "Node.js", "AWS"]}
                            />
                            <ProjectCard
                                title="C2Sight"
                                description="C2 servers analytics dashboard"
                                link="https://c2sight.com/"
                                tech={["React", "D3.js", "Python"]}
                            />
                            <ProjectCard
                                title="Doble6 iOS App"
                                description="Mobile application"
                                link="https://apps.apple.com/us/app/doble6/id6499452092"
                                tech={["Swift", "iOS", "SwiftUI"]}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}