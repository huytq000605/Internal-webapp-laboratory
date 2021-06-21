import Dot from 'elements/Dots';
import { UploadFile } from 'generated/graphql';
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import getImageURL from 'utils/getImageURL';

import {
    SlideBlock,
    SlideCaption,
    SlideImage,
    SlideIndicator,
    SlideImageWrapper,
    SlideCaptionWrapper,
    SlideCaptionList,
} from './Slide2.styled';

interface Props {
    images?:
        | (Pick<
              UploadFile,
              'id' | 'url' | 'caption' | 'alternativeText'
          > | null)[]
        | null;
    shadow?: boolean;
    caption?: React.ReactElement;
}

const Slide: React.FC<Props> = ({ images, shadow, caption }) => {
    const [totalSlide, setTotalSlide] = useState(0);
    const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const nextSlide = () => {
        if (visibleSlideIndex !== 0 && totalSlide === visibleSlideIndex + 1) {
            setVisibleSlideIndex(0);
            return;
        }
        setVisibleSlideIndex(visibleSlideIndex + 1);
    };
    const prevSlide = () => {
        if (visibleSlideIndex === 0) {
            setVisibleSlideIndex(totalSlide - 1);
            return;
        }
        setVisibleSlideIndex(visibleSlideIndex - 1);
    };

    const { ref, onMouseDown } = useSwipeable({
        onSwipedLeft: () => {
            nextSlide();
        },
        onSwipedRight: () => {
            prevSlide();
        },
    });

    const handleMouseEnter = () => {
        setPaused(true);
    };

    const handleMouseLeave = () => {
        setPaused(false);
    };

    const leftShift =
        totalSlide > 1 ? `translateX(${-visibleSlideIndex * 100}%)` : 'unset';

    useEffect(() => {
        if (images) {
            setTotalSlide(images.length);
        }
    }, [images]);

    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            nextSlide();
        }, 5000);

        if (paused) {
            clearTimeout(slideTimeout);
        }

        return () => {
            clearTimeout(slideTimeout);
        };
    }, [visibleSlideIndex, paused]);

    return (
        <SlideBlock
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            onMouseDown={onMouseDown}
        >
            <SlideImageWrapper>
                {images?.map((image) => {
                    return (
                        <SlideImage
                            debounce={500}
                            style={{
                                transform: leftShift,
                            }}
                            key={image?.id}
                            src={getImageURL(image?.url)}
                        />
                    );
                })}
            </SlideImageWrapper>

            {totalSlide > 1 && (
                <SlideIndicator>
                    {images?.map((image, i) => {
                        return (
                            <Dot
                                onClick={() => {
                                    setVisibleSlideIndex(i);
                                }}
                                active={i === visibleSlideIndex}
                                key={image?.id}
                            />
                        );
                    })}
                </SlideIndicator>
            )}

            <SlideCaptionWrapper shadow={shadow}>
                <SlideCaptionList
                    style={{
                        transform: leftShift,
                    }}
                >
                    {images?.map((image) => {
                        return (
                            <SlideCaption key={image?.id}>
                                {caption || image?.caption}
                            </SlideCaption>
                        );
                    })}
                </SlideCaptionList>
            </SlideCaptionWrapper>
        </SlideBlock>
    );
};

export default Slide;
