import React from 'react';
import Image1 from '../../assets/p1.png';
import Image2 from '../../assets/p2.png';
import Image3 from '../../assets/p3.png';
import Image4 from '../../assets/p4.png';
import Image5 from '../../assets/p5.png';
import Image6 from '../../assets/p6.png';
import './style.css';

function index() {
    return (
        <div className='section' id="work">
           <div className="work section" >
               <h1 className="title"><span>Work Samples</span><br/>AND PROJECTS</h1>
                <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={Image1} alt="" />

                        <div class="portfolio__link">
                            <a href="https://netflix-cloneweb.web.app/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                    <div className="work__img">
                        <img src={Image2} alt="" />
                        <div class="portfolio__link">
                            <a href="https://chetan-pro.github.io/roadtrip/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                    <div className="work__img">
                        <img src={Image3} alt="" />
                        <div class="portfolio__link">
                            <a href="https://clone-1ffc6.web.app/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                    <div className="work__img">
                        <img src={Image4} alt="" />
                        <div class="portfolio__link">
                            <a href="https://video-chating.herokuapp.com/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                    <div className="work__img">
                        <img src={Image5} alt="" />
                        <div class="portfolio__link">
                            <a href="https://chetan-pro.github.io/gsap-web/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                    <div className="work__img">
                        <img src={Image6} alt="" />
                        <div class="portfolio__link">
                            <a href="https://gaming-web-app.web.app/" class="portfolio__link-name">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default index;
