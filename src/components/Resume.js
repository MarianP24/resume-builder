import React from 'react';
import profileImage from '../images/poza.PNG';


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
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '30px'}}>
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
                                          style={{width: '20px', display: 'inline-block'}}>📞</span> Phone: 0763 793 054
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
                                    <p className="text-sm">Computers and Information Technology</p>
                                    <p className="text-sm">Ioan Slavici University</p>
                                </div>
                                <div>
                                    <p className="text-sm">Intensive mathematics-informatics</p>
                                    <p className="text-sm">“Tudor Vladimirescu” National College</p>
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
                            <ul className="list-disc pl-4 text-sm space-y-2">
                                <li>Course name</li>
                                <li>Date</li>
                                <li>Describe what the course has covered</li>
                                <li>Highlight the new skills you developed</li>
                            </ul>
                        </div>

                        {/* Projects Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3">PROJECTS</h2>
                            <ul className="list-disc pl-4 text-sm space-y-2">
                                <li>Describe your responsibilities and contributions</li>
                                <li>Include techniques you worked with</li>
                                <li>Start every bullet with an action verb</li>
                                <li>Count time range/hours worked with a certain technology</li>
                            </ul>
                        </div>

                        {/* Other Sections */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">OTHER SECTIONS</h2>
                            <ul className="list-disc pl-4 text-sm">
                                <li>This is your chance to add some personality to the CV</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;
