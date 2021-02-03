import React, { useState } from 'react';

function Slides({slides}) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const restart = () => {
        setActiveSlide(0);
        setCurrentSlide(slides[0]);
    }
    const next = () => {
        let slideNo = activeSlide;
        if(slideNo < slides.length -1){
            slideNo++;
            setCurrentSlide(slides[slideNo]);
            setActiveSlide(slideNo);
        }
        else if(slideNo == slides.length -1){
            alert('You have reached the end of slides');
        }
    }
    const prev = () => {
        let slideNo = activeSlide;
        if(slideNo > 0){
            slideNo-- ;
            setCurrentSlide(slides[slideNo]);
            setActiveSlide(slideNo);
        }
        else if(slideNo == 0){
            alert('You have reached the first slide');
        }
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => restart()}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => prev()}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => next()}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
