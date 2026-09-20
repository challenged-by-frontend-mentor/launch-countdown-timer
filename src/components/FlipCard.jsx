import { useState, useEffect } from "react";

const FlipCard = ({label, value}) => {

    const [current, setCurrent] = useState(value);
    const [previous, setPrevious] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if(value !== current) {
            setPrevious(current);
            setCurrent(value);
            setIsFlipping(true);

            const timer = setTimeout(() => setIsFlipping(false), 600);
            return () => clearTimeout(timer);
        }
    }, [value, current]);

    const formatTime = (val) => String(val).padStart(2, "0");

    return (
        <div className="timer__item">
            <div className={`timer__card ${isFlipping ? "flip": ""}`} aria-hidden="true">
                <span className="timer__card-half timer__card-half--top">{formatTime(current)}</span>
                <span className="timer__card-half timer__card-half--bottom">{formatTime(previous)}</span>
                <span className="flip-card__top">{formatTime(previous)}</span>
                <span className="flip-card__bottom">{formatTime(current)}</span>
            </div>
            <span className="timer__label">{label.toUpperCase()}</span>
        </div>
    );
};

export default FlipCard;