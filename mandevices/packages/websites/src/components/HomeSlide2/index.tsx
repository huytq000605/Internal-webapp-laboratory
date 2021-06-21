import React from 'react';
import { defaultSlide } from 'constants/images';
import Slider, { Settings } from 'react-slick';
import { isString } from 'lodash';
import Slide, { SlideImage, TitleWrapper, Dots } from './HomeSlide.styled';

interface ISlide {
    image?: string;
    title?: string | React.ReactElement;
}
interface IHomeSlide {
    defaultHeroImage: string;
    slides: ISlide[];
}

const HomeSlide: React.FC<Partial<IHomeSlide>> = ({
    defaultHeroImage,
    slides = [],
}) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: (dots) => {
            return <Dots>{dots}</Dots>;
        },
    };
    return (
        <Slide>
            <SlideImage src={defaultHeroImage || defaultSlide} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
                {slides.length &&
                    slides.map((slide, i) => {
                        if (isString(slide.title)) {
                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <TitleWrapper key={i}>
                                    {slide?.title}
                                </TitleWrapper>
                            );
                        }
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <TitleWrapper key={i}>{slide.title}</TitleWrapper>
                        );
                    })}
            </Slider>
        </Slide>
    );
};

export default HomeSlide;
