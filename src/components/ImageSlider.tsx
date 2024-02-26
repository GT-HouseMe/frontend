import { useState } from "react";
import "../styles/ImageSlider.css";
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentUser] = useState(0);


    return (
        <div className="sliderStyles">
            <div className="leftArrow">←</div>
            <div className="rightArrow">→</div>
            <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex].img})`}}>ImageSlider</div>
        </div>
    )
}
export default ImageSlider;
