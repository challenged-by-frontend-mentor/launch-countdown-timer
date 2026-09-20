import { useState, useEffect } from "react";

const FlipCard = ({label, value}) => {

    const [current, setCurrent] = useState(value);
    const [previous, setPrevious] = useState(value);

    useEffect(() => {
        if(value !== current) {
            setPrevious(current);
            setCurrent(value);
        }
    }, [value, current]);

    const formatTime = (val) => String(val).padStart(2, "0");

    return (
        <div className="timer__item">
            <div className="timer__card" aria-hidden="true">
                <span className="timer__card-half timer__card-half--top">{formatTime(current)}</span>
                <span className="timer__card-half timer__card-half--bottom">{formatTime(previous)}</span>
                <span key={`top-${current}`} className="flip-card__top">{formatTime(previous)}</span>
                <span key={`bottom-${current}`} className="flip-card__bottom">{formatTime(current)}</span>
            </div>
            <span className="timer__label">{label.toUpperCase()}</span>
        </div>
    );
};

export default FlipCard;