import React, { useState, useEffect } from 'react';
import { useHomeSlideQuery } from '../../generated/graphql';
import './HomeSlide.scss';
import HomeSlideShowSlide from './HomeSlideShowSlide';
import HomeSlideShowControll from './HomeSlideShowControll';

const HomeSlideContainer: React.FC = () => {
    const { data } = useHomeSlideQuery();
    const [slidePosition, setSlidePosition] = useState<number>(0);
    const [foces, setFoces] = useState<number>(1);
    const lengthSlide = data?.homeSlide?.slides?.length
        ? data?.homeSlide?.slides?.length
        : 0;

    const nextSlide = (newSlidePosition: number): void => {
        if (newSlidePosition === lengthSlide) {
            setSlidePosition(0);
        } else {
            setSlidePosition(newSlidePosition);
        }
    };
    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            nextSlide(slidePosition + 1);
        }, 6000);
        return () => {
            clearTimeout(slideTimeout);
        };
    }, [slidePosition]);
    const prevSlide = (): void => {
        const newSlide = slidePosition - 1;
        if (newSlide === -1) {
            setSlidePosition(lengthSlide - 1);
        } else {
            setSlidePosition(newSlide);
        }
    };

    const foucesControll = (number: number): void => {
        setFoces(number);
    };

    const setSlidePositionProps = (postion: number): void => {
        setSlidePosition(postion);
    };

    return (
        <div className="homeSlide__wp">
            {data?.homeSlide?.slides?.map((slide) => {
                let numberSlide = -100 * slidePosition;
                if (lengthSlide === 1) {
                    numberSlide = 0;
                }
                return (
                    <HomeSlideShowSlide
                        key={slide?.id}
                        numberSlide={`${numberSlide}%`}
                        slide={slide}
                    />
                );
            })}
            {lengthSlide !== 0 && (
                <HomeSlideShowControll
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    foucesControll={foucesControll}
                    foces={foces}
                    slidePosition={slidePosition}
                    setSlidePositionProps={setSlidePositionProps}
                />
            )}
        </div>
    );
};

export default HomeSlideContainer;
