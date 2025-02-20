import React from 'react';
import profileImage from '../images/poza.jpeg';


const CV = () => {

    return (

        <div className=" bg-[#FFFAF0]]">
            <style>
                {`
                    html, body {
                        margin: 0;
                        padding: 0;
                        background-color: #FFFAF0;
                        width: 100%;
                        min-height: 100vh;
                        height: 100%;
                    }
                    @media print {
                        @page {
                            size: 100%;
                            margin: 0;
                        }
                        body {
                            -webkit-print-color-adjust: exact; !important;
                            color-adjust: exact; !important;
                            background-color: #FFFAF0 !important;
                            width: 100%;
                            margin: 0;
                            padding: 0;
                        }
                        .bg-\\[\\#FFFAF0\\] {
                            background-color: #FFFAF0 !important;
                            width: 100%;
                            margin: 0;
                            padding: 20px;
                            box-shadow: none;
                        }
                    }
                    a {
                        color: inherit; 
                        text-decoration: underline;
                    }
                    .header-section {
                        background-color: #ffffff; /* White background */
                        padding: 4rem;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        display: flex;
                        justify-content: space-between; 
                        align-items: center;
                        position: relative; 
                    }
                    .image-container {
                        position: absolute; 
                        right: -60px; 
                        top: 50%; 
                        transform: translateY(-50%); 
                        width: 160px;
                        height: 160px;
                    }
                    .contact-icons li {
                        margin-bottom: 3px !important; 
                    }

                    .contact-icons {
                        margin-left: -20px;
                    }
                `}
            </style>
            <div className=" max-w-3xl mx-auto bg-[#FFFAF0] rounded-lg shadow-lg print:max-w-none print:w-full"
                 style={{margin: '0 auto', padding: '1rem 2rem'}}>
                {/* Header Section */}
                <div className="header-section">
                    <div style={{display: 'flex', alignItems: 'flex-start', width: '100%'}}>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">Paraianu Marian</h1>
                            <p className="text-sm text-gray-600">Junior Java developer</p>
                        </div>
                    </div>
                    {/* Profile Image */}
                    <div className="image-container"
                         style={{width: '160px', height: '160px', marginTop: '70px', marginRight: '70px'}}>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="rounded-full"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                boxShadow: '0 15px 16px rgba(0, 0, 0, 0.8)'
                            }}
                        />
                    </div>
                </div>

                {/* Main Content Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    paddingTop: '15px',
                    paddingBottom: '0px'
                }}>
                    {/* Left Column */}
                    <div style={{width: '47%', padding: '1.5rem', position: 'relative'}}>
                        <div style={{
                            position: 'absolute',
                            right: 0,
                            top: '2rem',
                            bottom: 0,
                            width: '1px',
                            backgroundColor: '#e5e7eb'
                        }}></div>

                        {/* Contact Icons */}
                        <div className="mb-8">
                            <ul className="contact-icons">
                                <li className="flex items-center text-sm">
                                    <span className="mr-2"
                                          style={{width: '20px', display: 'inline-block'}}>📞</span> Phone: +40 763 793
                                    054
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2"
                                          style={{width: '20px', display: 'inline-block'}}>✉️</span> Email:
                                    p.marian24@yahoo.com
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2"
                                          style={{width: '20px', display: 'inline-block'}}>🔗</span> LinkedIn: <a
                                    className="ml-1" href="https://linkedin.com/in/marian-paraianu" target="_blank"
                                    rel="noopener noreferrer">marian-paraianu</a>
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2"
                                          style={{width: '20px', display: 'inline-block'}}>📍</span> Portfolio: <a
                                    className="ml-1" href="https://github.com/MarianP24" target="_blank"
                                    rel="noopener noreferrer">github.com/MarianP24</a>
                                </li>
                            </ul>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3" style={{marginLeft: '-20px'}}>SKILLS</h2>
                            <ul className="space-y-1 list-disc">
                                <li className="text-sm">Java</li>
                                <li className="text-sm">Spring Framework (Spring Boot, Spring MVC)</li>
                                <li className="text-sm">Hibernate</li>
                                <li className="text-sm">PostgreSQL</li>
                                <li className="text-sm">Source code management with GitHub</li>
                                <li className="text-sm">Experience with IntelliJ IDEA</li>
                                <li className="text-sm">React</li>
                                <li className="text-sm">Tailwind</li>
                            </ul>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3" style={{marginLeft: '-20px'}}>EXPERIENCE</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium">Test engineer | 20.03.2023 - present</p>
                                    <p className="text-sm">Hella Romania SRL</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Test engineer | 06.06.2017 - 17.03.2023</p>
                                    <p className="text-sm">Flextronics Romania SRL</p>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3" style={{marginLeft: '-20px'}}>EDUCATION</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm">Ioan Slavici University</p>
                                    <p className="text-sm">Bachelor in Computer Science</p>
                                    <p className="text-sm">Oct 2018 - Jul 2022</p>
                                </div>
                                <div>
                                    <p className="text-sm">“Tudor Vladimirescu” National College</p>
                                    <p className="text-sm">Intensive mathematics-informatics</p>
                                    <p className="text-sm">Oct 2009 - Jul 2013</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{width: '53%', padding: '1.5rem'}}>
                        {/* Profile Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3">PROFILE</h2>
                            <div className="text-sm text-justify">
                                I am a passionate Junior Java Developer with a focus on backend development.
                                Interested in building scalable applications and always eager to learn and adapt to new
                                technologies.
                            </div>
                        </div>

                        {/* Professional Development */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3">PROFESSIONAL DEVELOPMENT</h2>
                            <div className="text-sm">
                                <p><span className="font-semibold">Java Programming Course</span></p>
                                <ul className="list-none pl-0 space-y-1">
                                    <li><span className="font-semibold">Organizer:</span> IT School SRL</li>
                                    <li><span className="font-semibold">Completion Date:</span> October 8, 2024</li>
                                    <li><span className="font-semibold">Duration:</span> 180 hours</li>
                                    <li><span className="font-semibold">Key Topics:</span> Spring Boot, Hibernate,
                                        PostgreSQL, REST APIs
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">PROJECTS</h2>

                            <div className="text-sm">
                                <p><span className="font-semibold">Test Operations API</span></p>
                                <p className="mt-1 text-justify">
                                    Developed a scalable API using <strong>Java</strong>, <strong>Spring Boot</strong>,
                                    and <strong>Hibernate</strong> to manage and streamline test operations in a
                                    manufacturing environment.
                                </p>

                                <ul className="list-disc pl-5 mt-2  text-justify">
                                    <li><strong>Designed</strong> a PostgreSQL database to efficiently store and
                                        retrieve test data.
                                    </li>
                                    <li><strong>Built</strong> a REST API using Spring Boot to enable seamless
                                        communication between systems.
                                    </li>
                                    <li><strong>Developed</strong> an HTML5-based web interface with Thymeleaf for user
                                        interaction.
                                    </li>
                                    <li><strong>Implemented</strong> a real-time shop floor map using Bootstrap to track
                                        equipment status.
                                    </li>
                                    <li><strong>Created</strong> automated scheduling features to store and reset files
                                        at predefined intervals.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* SOFT SKILLS */}
                        <div className="mb-0">
                            <h2 className="text-lg font-semibold">SOFT SKILLS</h2>
                            <p className="text-sm text-justify">
                                Critical Thinking, Adaptability, Creativity, Leadership
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;
