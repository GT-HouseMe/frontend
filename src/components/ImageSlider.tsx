import { useState } from "react";
import "../styles/ImageSlider.css";
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        // our current index is 0, so this is the first slide
        const isFirstSlide = currentIndex === 0;
        // if first slide, go to last slide, else go to previous slide
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        // if last slide, go to first slide, else go to next slide
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="sliderStyles">
            <div className="sliderButton leftArrow" onClick={goToPrevious}>&#8656;</div>
            <div className="sliderButton rightArrow" onClick={goToNext}>&#8658;</div>
            <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex].img})`}}></div>
        </div>
    )
}
export default ImageSlider;
