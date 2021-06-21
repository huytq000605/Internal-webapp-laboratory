import React, { useState, useEffect } from 'react';
import { TitleSection } from 'components/Title';
import Dot from 'elements/Dots';

import SectionBlock from 'elements/Section';
import { useLeaderQuery } from 'generated/graphql';
import TitleBlock from 'blocks/Title';
import getImageURL from 'utils/getImageURL';

import { useSwipeable } from 'react-swipeable';
import { Contact, ContactItem } from 'components/Footer/Footer.styled';
import Panel from 'elements/Panel';
import {
    ChairName,
    MainRole,
    Info,
    Slide,
    SlideCaption,
    SlideImage,
    SlideIndicator,
    Loader,
    SlideImageWrapper,
    SlideCaptionWrapper,
    SlideCaptionList,
    LeaderBlock,
    MainRoleWrapper,
} from './Leader.styled';

const Leader: React.FC = () => {
    const { loading, data } = useLeaderQuery();
    const [totalSlide, setTotalSlide] = useState(0);
    const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const nextSlide = () => {
        if (
            totalSlide === 1 ||
            (visibleSlideIndex !== 0 && totalSlide === visibleSlideIndex + 1)
        ) {
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
        if (data?.leader?.images) {
            setTotalSlide(data.leader.images.length);
        }
    }, [data]);

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
        <SectionBlock>
            {loading && (
                <Loader>
                    <LeaderBlock>
                        <TitleBlock />
                        <Slide>
                            <SlideImage />
                            <SlideCaption />
                        </Slide>
                        <Info>
                            <div>
                                <ChairName />
                                <MainRole />
                            </div>
                        </Info>
                    </LeaderBlock>
                </Loader>
            )}
            {data && data?.leader && (
                <LeaderBlock>
                    <TitleSection>Trưởng Lab</TitleSection>
                    {data?.leader?.images && (
                        <Slide
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            ref={ref}
                            onMouseDown={onMouseDown}
                        >
                            <SlideImageWrapper>
                                {data?.leader?.images?.map((image) => {
                                    return (
                                        <SlideImage
                                            style={{
                                                transform: leftShift,
                                            }}
                                            key={image?.id}
                                            src={getImageURL(image?.url)}
                                            debounce={1000}
                                        />
                                    );
                                })}
                            </SlideImageWrapper>

                            {totalSlide > 1 && (
                                <SlideIndicator>
                                    {data?.leader?.images?.map((image, i) => {
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

                            <SlideCaptionWrapper>
                                <SlideCaptionList
                                    style={{
                                        transform: leftShift,
                                    }}
                                >
                                    {data?.leader?.images?.map((image) => {
                                        return (
                                            <SlideCaption key={image?.id}>
                                                {image?.caption}
                                            </SlideCaption>
                                        );
                                    })}
                                </SlideCaptionList>
                            </SlideCaptionWrapper>
                        </Slide>
                    )}
                    <Info>
                        <div>
                            <ChairName>{data?.leader?.fullName}</ChairName>
                            <MainRole>{data?.leader?.mainInfo}</MainRole>
                        </div>

                        <Panel fit rounded>
                            <MainRoleWrapper>
                                <i className="bi bi-bullseye" />
                                <p>{data.leader.mainRole}</p>
                            </MainRoleWrapper>
                        </Panel>
                        <Contact>
                            {data.leader.email && (
                                <ContactItem>
                                    <i className="bi bi-envelope-fill" />
                                    <a href={`mailto:${data.leader.email}`}>
                                        {data.leader.email}
                                    </a>
                                </ContactItem>
                            )}
                            {data.leader.phone && (
                                <ContactItem>
                                    <i className="bi bi-phone-fill" />
                                    <a href={`tel: ${data.leader.phone}`}>
                                        {data.leader.phone}
                                    </a>
                                </ContactItem>
                            )}
                            {data.leader.socials && (
                                <ContactItem>
                                    <i className="bi bi-facebook" />
                                    <a
                                        href={
                                            `https://${data.leader.socials[0]?.address}` ||
                                            ''
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {data.leader.socials[0]?.address}
                                    </a>
                                </ContactItem>
                            )}
                        </Contact>
                    </Info>
                </LeaderBlock>
            )}
        </SectionBlock>
    );
};

export default Leader;
