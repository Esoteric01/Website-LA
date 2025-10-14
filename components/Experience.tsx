import React, { useState } from 'react';
import { Experience as ExperienceType } from '../types';

const experienceData: ExperienceType[] = [
    {
        role: "Network Engineer / MSP Team Leader",
        company: "ABBE Technology Solutions, Inc. / BeQuik Information Solutions, Inc.",
        location: "Makati, Philippines",
        period: "June 2023 – Present",
        tasks: [
            "Lead and manage network engineers and support staff.",
            "Serve as primary client contact, addressing needs and ensuring satisfaction.",
            "Identify and implement process improvements for service delivery.",
            "Design, install, and configure network systems.",
            "Perform routine maintenance and troubleshooting of network hardware and software.",
            "Provide technical support and guidance on network issues."
        ],
        achievements: [
            "IT Infrastructure Relocation and Cisco Switch Reconfiguration",
            "Customer Service Excellence and Operational Efficiency"
        ]
    },
    {
        role: "Systems Engineer – Azure",
        company: "Phil-Data Business Systems, Inc.",
        location: "Makati, Philippines",
        period: "June 2022 – Present",
        tasks: [
            "Deploy public, private, and hybrid cloud solutions.",
            "Support, monitor, and maintain cloud environments.",
            "Optimize cloud resource costs.",
            "Prepare Scope of Work (SOW) and User Acceptance Test (UAT).",
            "Conduct Proof of Concept (POC) for new solutions.",
            "Analyze and provide monthly usage consumption reports."
        ],
        achievements: [
            "Hybrid Networking and Security Deployment",
            "Deploying Virtual Machines on Azure for Disaster Recovery",
            "Deploying Site-to-Site and Point-to-Site VPN for Hybrid setup",
            "Configuring Azure AD Connect for Hybrid Identity Synchronization"
        ]
    },
    {
        role: "Systems Engineer – Network",
        company: "Phil-Data Business Systems, Inc.",
        location: "Makati, Philippines",
        period: "September 2019 – March 2022",
        tasks: [
            "Installed and configured network devices (Aruba, Cisco, Fortinet, HP, Dell).",
            "Provided network support (Firewall, Routing & Switching, Wireless LAN, LAN).",
            "Performed hardware installation, troubleshooting, and technical support (Remote & On-site).",
            "Managed project documentation and delivery."
        ],
        achievements: [
            "Network Deployment and Redundancy Implementation for DELL Switches",
            "C9200 Access Switch Upgrade for three sites",
            "Deployment of Cisco Firepower 2110, Cisco Meraki MS250-24 L3 Switch, Cisco Meraki MS120-48 L2 Switch & Cisco Meraki MR36 Access Point"
        ]
    },
    {
        role: "Junior Network Engineer",
        company: "OracleSee Inc.",
        location: "Makati, Philippines",
        period: "June 2018 – December 2018",
        tasks: [
            "Provided network troubleshooting and support to end-users.",
            "Monitored network connections through PRTG and MRTG.",
            "Managed backups and remediated issues.",
            "Generated operational reports for daily business management."
        ],
        achievements: []
    }
];

const Experience: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 md:py-28">
            <h2 className="text-5xl sm:text-6xl font-black font-display text-center mb-16 text-primary">Work Experience</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
                {experienceData.map((job, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-border/80">
                            <button 
                                onClick={() => handleToggle(index)}
                                className="w-full p-6 text-left flex justify-between items-center bg-surface hover:bg-border/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-hover-target"
                                aria-expanded={isOpen}
                                aria-controls={`experience-content-${index}`}
                            >
                                <div className="flex-1 pr-4">
                                    <h3 className="text-2xl font-bold font-display text-text-main">{job.role}</h3>
                                    <p className="text-lg font-medium text-text-secondary">{job.company}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                   <span className="text-lg font-normal text-text-secondary hidden md:block flex-shrink-0">{job.period}</span>
                                   <div className="flex-shrink-0">
                                       <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-secondary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                       </svg>
                                   </div>
                                </div>
                            </button>
                            <div 
                                id={`experience-content-${index}`}
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px]' : 'max-h-0'}`}
                            >
                                <div className="p-6 border-t border-border bg-background">
                                    <time className="block mb-4 text-lg font-normal leading-none text-text-secondary md:hidden">{job.period}</time>
                                    <p className="block mb-4 text-lg font-normal text-text-secondary">{job.location}</p>
                                    <h4 className="font-semibold text-text-main text-lg mb-2">Tasks & Responsibilities:</h4>
                                    <ul className="list-disc pl-5 mb-6 space-y-1 text-text-secondary text-xl">
                                        {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                    </ul>
                                    {job.achievements.length > 0 && (
                                        <div className="bg-surface p-4 rounded-lg border border-border">
                                            <h4 className="font-semibold text-text-main text-lg mb-2">Projects / Accomplishments:</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-text-secondary text-lg">
                                                {job.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;