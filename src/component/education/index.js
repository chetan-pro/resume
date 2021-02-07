import React from 'react';
import './style.css';

function index() {
    return (
        <div className='section' id="education">
            <h1 className="title" ><span>Educational</span><br />QUALIFICATIONS</h1>
            <div id='edubox'>
                <div>
                    <h5><span>B.Tech in Computer Science.</span><br />July 2018 - Aug 2022</h5>
                    <p>Sagar Institute of Research and Technology Excellence <br />Ayodhya Bypass</p>
                </div>
                <div>
                    <h5><span>Higher Secondary.</span><br />July 2017 - June 2018</h5>
                    <p>School for Excellence, <br />Shivaji Nagar</p>
                </div>
                <div>
                    <h5><span>Secondary.</span><br />July 2015 - June 2016</h5>
                    <p>School for Excellence, <br />Shivaji Nagar</p>
                </div>
            </div>
        </div>
    )
}

export default index
