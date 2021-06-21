import React from 'react';

interface Props {
    nextSlide: {
        (newSlidePosition: number): void;
    };
    prevSlide: {
        (): void;
    };
    foucesControll: {
        (number: number): void;
    };
    slidePosition: number;
    foces: number;
    setSlidePositionProps: {
        (slidePosition: number): void;
    };
}

const HomeSlideShowControll: React.FC<Props> = ({
    nextSlide,
    prevSlide,
    foucesControll,
    foces,
    slidePosition,
    setSlidePositionProps,
}) => {
    const slideContinue = slidePosition + 1;
    return (
        <>
            <button className="btn__prev" onClick={prevSlide} type="button">
                <div className="bi bi-arrow-left-short arrow_icon" />
            </button>
            <button
                type="button"
                className="btn__next"
                onClick={() => {
                    nextSlide(slideContinue);
                }}
            >
                <div className="bi bi-arrow-right-short arrow_icon" />
            </button>
            {foces === 0 && (
                <div className="homeSlide__controll">
                    <button
                        type="button"
                        aria-label="Previous slide button"
                        className="homeSlide__controll--prev bg_foces"
                        onClick={prevSlide}
                    />
                    <button
                        type="button"
                        aria-label="First slide button"
                        className="homeSlide__controll--start"
                        onClick={() => {
                            setSlidePositionProps(0);
                            foucesControll(1);
                        }}
                    />
                    <button
                        type="button"
                        aria-label="Next slide button"
                        className="homeSlide__controll--next"
                        onClick={() => {
                            nextSlide(slideContinue);
                            foucesControll(2);
                        }}
                    />
                </div>
            )}
            {foces === 1 && (
                <div className="homeSlide__controll">
                    <button
                        type="button"
                        aria-label="Previous slide button"
                        className="homeSlide__controll--prev"
                        onClick={prevSlide}
                    />
                    <button
                        type="button"
                        aria-label="First slide button"
                        className="homeSlide__controll--start  bg_foces"
                        onClick={() => {
                            setSlidePositionProps(0);
                            foucesControll(1);
                        }}
                    />
                    <button
                        type="button"
                        aria-label="Next slide button"
                        className="homeSlide__controll--next"
                        onClick={() => {
                            nextSlide(slideContinue);
                            foucesControll(2);
                        }}
                    />
                </div>
            )}
            {foces === 2 && (
                <div className="homeSlide__controll">
                    <button
                        type="button"
                        aria-label="Previous slide button"
                        className="homeSlide__controll--prev"
                        onClick={prevSlide}
                    />
                    <button
                        type="button"
                        aria-label="First slide button"
                        className="homeSlide__controll--start bg_foces"
                        onClick={() => {
                            setSlidePositionProps(0);
                            foucesControll(1);
                        }}
                    />
                    <button
                        type="button"
                        aria-label="Next slide button"
                        className="homeSlide__controll--next  bg_foces"
                        onClick={() => {
                            nextSlide(slideContinue);
                            foucesControll(2);
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default HomeSlideShowControll;
