import React from 'react';
import './style.css';

function index() {
    return (
        <div className='section' id="education">
            <h1 className='title'><span>Work Experience</span><br />AND INTERNSHIPS</h1>
            <div id="workbox">
                <div className="box">
                    <h5><span>Front-end web development</span><br />Internship in SSMTech, 2020</h5>
                    <p>Designed Web pages and Development dashboard for API managment + Developed fully static website in one month with dashboards.</p>
                </div>
                <div className="box">
                    <h5><span>UI / UX Designing.</span><br />Freelancing, 2020</h5>
                    <p>Worked on Web landing pages and Mobile responsive Web Designs + Redesigned some designs to take UI/UX skills to next level.</p>
                </div>
            </div>
        </div>
    )
}

export default index
