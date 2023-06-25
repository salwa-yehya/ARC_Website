import React, { useState, useEffect } from 'react';
import './MiniCard.css';

const MiniCard = () => {

    const [activeVideoIndex, setActiveVideoIndex] = useState(null);

    const handleVideoClick = (index, url) => {
        setActiveVideoIndex(index);
        window.open(url, "_blank", "noreferrer");
    };


    return (

        <div>
            <div className="Heading">
                <h2>Our Projects</h2>
            </div>
            <div className="project-cards">
                <div className="project-card">
                    <img src="./images/meta.jpg" alt="project-image" className="project-card-image" />
                    <h2 className="project-card-title"><a href="#">Lorem</a></h2>

                    <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam commodi, quaerat libero suscipit quae?</p>
                    <button className='button-85' onClick={() => handleVideoClick(0, "file_example_MP4_480_1_5MG.mp4")}>show more</button>
                    {activeVideoIndex === 0 && (
                        <div className="video-container">
                        </div>
                    )}
                </div>
                <div className="project-card">
                    <img src="./images/hands.jpg" alt="project-image" className="project-card-image" />
                    <h2 className="project-card-title"><a href="#">Lorem</a></h2>
                    <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam commodi, quaerat libero suscipit quae?</p>
                    <button className='button-85' onClick={() => handleVideoClick(1, "file_example_MP4_480_1_5MG.mp4")}>show more</button>
                    {activeVideoIndex === 1 && (
                        <div className="video-container">
                        </div>
                    )}
                </div>
                <div className="project-card">
                    <img src="./images/deep.jpg" alt="project-image" className="project-card-image" />
                    <h2 className="project-card-title"><a href="#">Lorem</a></h2>
                    <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam commodi, quaerat libero suscipit quae?</p>
                    <button className='button-85' onClick={() => handleVideoClick(2, "file_example_MP4_480_1_5MG.mp4")}>show more</button>
                    {activeVideoIndex === 2 && (
                        <div className="video-container">
                        </div>
                    )}
                </div>
                <div className="project-card" >
                    <img src="./images/machine.jpg" alt="project-image" className="project-card-image" />
                    <h2 className="project-card-title"><a href="#">Lorem</a></h2>
                    <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam commodi, quaerat libero suscipit quae?</p>
                    <button className='button-85' onClick={() => handleVideoClick(3, "file_example_MP4_480_1_5MG.mp4")}>show more</button>
                    {activeVideoIndex === 3 && (
                        <div className="video-container">
                        </div>
                    )}
                </div>
                <div className="project-card" >
                    <img src="./images/ai.jpg" alt="project-image" className="project-card-image" />
                    <h2 className="project-card-title"><a href="#">Lorem</a></h2>
                    <p className="project-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam commodi, quaerat libero suscipit quae?</p>
                    <button className='button-85' onClick={() => handleVideoClick(4, "file_example_MP4_480_1_5MG.mp4")}>show more</button>
                    {activeVideoIndex === 4 && (
                        <div className="video-container">
                        </div>
                    )}
                </div>
                {/* Repeat the above card structure for other project-cards */}
            </div>
        </div>
    );
}

export default MiniCard;
