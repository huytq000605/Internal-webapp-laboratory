import React from 'react';

import { Title } from 'components/Title';
import SectionBlock from 'elements/Section';
import Slider, { Settings } from 'react-slick';
import { useResearchTopicsQuery } from 'generated/graphql';
import CardBlock from 'blocks/Card';
import CardImage from 'blocks/Card/CardImage';
import CardTitle from 'blocks/Card/CardTitle';
import getImageURL from 'utils/getImageURL';
import { Link } from 'react-router-dom';
import { Dots, Wrapper } from './ResearchTopics.styled';

const ResearchTopics: React.FC = () => {
    const { data } = useResearchTopicsQuery();
    const totalTopics = data?.researchTopics?.length || 0;
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: totalTopics,
        centerPadding: '60px',
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: (dots) => {
            return <Dots>{dots}</Dots>;
        },
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (!totalTopics) return null;

    return (
        <SectionBlock>
            <Wrapper>
                <Title underline center>
                    Hướng nghiên cứu
                </Title>
                <h3>
                    Nghiên cứu - chế tạo cảm biến & Thiết bị thông minh <br />
                    <i>dựa trên</i>
                </h3>

                <Slider
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...settings}
                >
                    {data?.researchTopics?.map((researchTopic) => (
                        <CardBlock key={researchTopic?.id} center>
                            <CardImage
                                src={getImageURL(researchTopic?.image?.url)}
                            />
                            <CardTitle>
                                <Link
                                    to={`/huong-nghien-cuu/${researchTopic?.id}`}
                                >
                                    {researchTopic?.name}
                                </Link>
                            </CardTitle>
                        </CardBlock>
                    ))}
                </Slider>
            </Wrapper>
        </SectionBlock>
    );
};

export default ResearchTopics;
