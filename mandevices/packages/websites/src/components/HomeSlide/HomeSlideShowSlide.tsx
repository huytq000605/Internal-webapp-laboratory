import React from 'react';
import getImageURL from '../../utils/getImageURL';
import './HomeSlide.scss';

interface Props {
    slide?: {
        url?: string;
    } | null;
    numberSlide: string | null;
}

const HomeSlideShowSlide: React.FC<Props> = ({ slide, numberSlide }) => {
    const styleSlide = {
        transform: `translateX(${numberSlide})`,
    };

    return (
        <div className="homeSlide__slide" style={styleSlide}>
            <img src={`${getImageURL(slide?.url)}`} alt="slide" />
        </div>
    );
};

export default HomeSlideShowSlide;
