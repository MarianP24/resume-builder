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
                        list-style-type: none; /* Remove bullets */
                        padding-left: 0; /* Remove left padding */
                        margin-left: -20px; /* Adjust margin to move items to the left */
                    }
                `}
            </style>
            <div className=" max-w-3xl mx-auto bg-[#FFFAF0] rounded-lg shadow-lg print:max-w-none print:w-full" style={{ margin: '0 auto', padding: '1rem 2rem' }}>
                {/* Header Section */}
                <div className="header-section">
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">Paraianu Marian</h1>
                            <p className="text-sm text-gray-600">Junior Java developer</p>
                        </div>
                    </div>
                    {/* Profile Image */}
                    <div className="image-container" style={{ width: '160px', height: '160px', marginTop: '70px', marginRight: '70px' }}>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="rounded-full"
                            style={{ width: '100%', height: '100%', borderRadius: '50%', boxShadow: '0 15px 16px rgba(0, 0, 0, 0.8)' }}
                        />
                    </div>
                </div>

                {/* Main Content Container */}
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingTop:'30px' }}>
                    {/* Left Column */}
                    <div style={{ width: '45%', padding: '1.5rem', position: 'relative' }}>
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
                                    <span className="mr-2" style={{ width: '20px', display: 'inline-block' }}>📞</span> Phone: 0763 793 054
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2" style={{ width: '20px', display: 'inline-block' }}>✉️</span> Email: p.marian24@yahoo.com
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2" style={{ width: '20px', display: 'inline-block' }}>🔗</span> LinkedIn: <a className="ml-1" href="https://linkedin.com/in/marian-paraianu" target="_blank" rel="noopener noreferrer">marian-paraianu</a>
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="mr-2" style={{ width: '20px', display: 'inline-block' }}>📍</span> Portfolio: <a className="ml-1" href="https://github.com/MarianP24" target="_blank" rel="noopener noreferrer">github.com/MarianP24</a>
                                </li>
                            </ul>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3" style={{ marginLeft: '-20px'}}>SKILLS</h2>
                            <ul className="space-y-1 list-disc">
                                <li className="text-sm">Technical Skill</li>
                                <li className="text-sm">Technical Skill</li>
                                <li className="text-sm">Technical Skill</li>
                                <li className="text-sm">Technical Skill</li>
                            </ul>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3" style={{ marginLeft: '-20px' }}>EXPERIENCE</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium">Role | period</p>
                                    <p className="text-sm">Your Great Company</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Role | period</p>
                                    <p className="text-sm">Your Great Company</p>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3" style={{ marginLeft: '-20px' }}>EDUCATION</h2>
                            <p className="text-sm">Degree | School</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ width: '55%', padding: '1.5rem' }}>
                        {/* Profile Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-3">PROFILE</h2>
                            <p className="text-sm">
                                A brief statement at the beginning of your CV that highlights your key skills, experience, and achievements. It serves as a work introduction to help you get an interview, and what professional profile is.
                            </p>
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
