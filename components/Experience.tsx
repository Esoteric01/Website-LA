import React from 'react';
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
            "C9200 Access Switch Upgrade Project for three sites",
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
    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Work Experience</h2>
            <div className="relative border-l-2 border-orange-200 ml-6 md:ml-0">
                {experienceData.map((job, index) => (
                    <div key={index} className="mb-12 ml-10">
                        <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-orange-200 rounded-full ring-8 ring-white">
                            <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 2a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1H8z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                        <p className="text-md font-medium text-gray-700">{job.company}</p>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{job.period} &bull; {job.location}</time>
                        <ul className="list-disc pl-5 my-4 space-y-1 text-gray-600">
                            {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                        </ul>
                        {job.achievements.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Projects / Accomplishments:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    {job.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;