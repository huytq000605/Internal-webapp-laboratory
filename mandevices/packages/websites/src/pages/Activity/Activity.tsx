import React, { useState, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { useActivitiesQuery } from 'generated/graphql';
import { NormalSemiBoldText } from 'common/typography';
import getImageURL from 'utils/getImageURL';
import Modal from 'shared/Modal';
import { motion } from 'framer-motion';
import SEO from 'common/SEO';
import Img from 'react-cool-img';
import { useMediaQuery } from 'react-responsive';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { HomeSlideWrapper } from 'pages/Home/HomePage.styled';
import HomeSlide from 'components/HomeSlide2';
import { activityDefaultImage } from 'constants/images';

import {
    ImageWrapper,
    ActivityWrapper,
    VideoTitleWrapper,
    VideoWrapper,
    Wrapper,
    ImageGrid,
    TitleWrapper,
} from './Activity.styled';

const ActivityPage = () => {
    const { data } = useActivitiesQuery();
    const [selectedImage, setSelectedImage] = useState<string>();
    const [selectedActivity, setSelectedActivity] = useState<string>();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1200px)',
    });

    const handleSelectImage = (url?: string | null) =>
        setSelectedImage(url || '');

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
    };

    const imageActivities = data?.activities?.filter(
        (activity) => activity?.images?.length
    );
    const myRef = useRef<HTMLDivElement>(null);

    const executeScroll = () =>
        myRef.current?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        if (imageActivities?.length) {
            setSelectedActivity(imageActivities?.[0]?.id);
        }
    }, [data]);

    return (
        <>
            <SEO
                title={
                    imageActivities?.filter(
                        (activity) => activity?.id === selectedActivity
                    )[0]?.eventName
                        ? `Hoạt động ${
                              imageActivities?.filter(
                                  (activity) =>
                                      activity?.id === selectedActivity
                              )[0]?.eventName
                          }`
                        : 'Hoạt động'
                }
                imageUrl={activityDefaultImage}
            />
            <Wrapper>
                <HomeSlideWrapper>
                    <HomeSlide defaultHeroImage={activityDefaultImage} />
                    <TitleWrapper>
                        <h1>
                            Khám phá văn hóa Mandevices qua Hình ảnh và Video
                        </h1>
                        <Button size="lg" onClick={executeScroll}>
                            Khám phá ngay
                        </Button>
                    </TitleWrapper>
                </HomeSlideWrapper>

                {isDesktopOrLaptop && data?.activities?.length && (
                    <div ref={myRef}>
                        <>
                            <h2>Video tiêu biểu</h2>
                            <VideoWrapper>
                                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                                <Slider {...settings}>
                                    {data?.activities
                                        ?.filter(
                                            (activity) =>
                                                activity?.videos?.length
                                        )
                                        .reduce((results, currentActivity) => {
                                            currentActivity?.videos?.forEach(
                                                (video) => {
                                                    results.push({
                                                        id: video?.id,
                                                        eventName:
                                                            currentActivity.eventName,
                                                        description:
                                                            video?.description,
                                                        youTubeVideoId:
                                                            video?.youTubeVideoId,
                                                    });
                                                }
                                            );
                                            return results;
                                        }, [] as Partial<{ id: string | null; eventName: string | null; description: string | null; youTubeVideoId: string | null }>[])
                                        .map((video) => (
                                            <React.Fragment key={video.id}>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    title="tieu de"
                                                    src={`https://www.youtube.com/embed/${video?.youTubeVideoId}`}
                                                />
                                                <VideoTitleWrapper>
                                                    <NormalSemiBoldText>
                                                        <h3>
                                                            {video?.eventName}
                                                        </h3>
                                                    </NormalSemiBoldText>
                                                    <h4>
                                                        {video?.description}
                                                    </h4>
                                                </VideoTitleWrapper>
                                            </React.Fragment>
                                        ))}
                                </Slider>
                            </VideoWrapper>
                        </>
                    </div>
                )}
                <h2>Hình ảnh nổi bật</h2>
                <ActivityWrapper>
                    <Dropdown
                        as={ButtonGroup}
                        size={isDesktopOrLaptop ? undefined : 'sm'}
                    >
                        <Dropdown.Toggle id="dropdown-basic">
                            Lựa chọn danh mục
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {imageActivities?.map((activity) => (
                                <Dropdown.Item
                                    key={activity?.id}
                                    eventKey={activity?.id}
                                    onSelect={(eventKey) => {
                                        if (eventKey) {
                                            setSelectedActivity(eventKey);
                                        }
                                    }}
                                >
                                    {activity?.eventName}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {imageActivities
                        ?.filter(
                            (activity) => activity?.id === selectedActivity
                        )
                        .map((activity) => (
                            <React.Fragment key={activity?.id}>
                                <h3>{activity?.eventName}</h3>
                                <ImageGrid>
                                    {activity?.images
                                        ?.reduce(
                                            (results, currentImageGroup) => {
                                                currentImageGroup?.images?.forEach(
                                                    (image) => {
                                                        results.push({
                                                            id: image?.id,

                                                            description:
                                                                currentImageGroup?.description,
                                                            imageUrl: getImageURL(
                                                                image?.formats
                                                                    ?.small.url
                                                            ),
                                                            fullImageUrl: getImageURL(
                                                                image?.url
                                                            ),
                                                        });
                                                    }
                                                );
                                                return results;
                                            },
                                            [] as Partial<{
                                                id: string | null;
                                                description: string | null;
                                                fullImageUrl: string | null;
                                                imageUrl: string | null;
                                            }>[]
                                        )
                                        .map((image) => {
                                            return (
                                                <ImageWrapper
                                                    layout
                                                    whileHover={{ opacity: 1 }}
                                                    key={image.id}
                                                    onClick={() =>
                                                        handleSelectImage(
                                                            image.fullImageUrl
                                                        )
                                                    }
                                                >
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                        }}
                                                        transition={{
                                                            delay: 1,
                                                        }}
                                                    >
                                                        <Img
                                                            debounce={1000}
                                                            src={
                                                                image.imageUrl ||
                                                                ''
                                                            }
                                                            alt="a"
                                                        />
                                                    </motion.div>
                                                    {/* <VideoTitleWrapper>
                                                            <i>
                                                                {
                                                                    video?.description
                                                                }
                                                            </i>
                                                        </VideoTitleWrapper> */}
                                                </ImageWrapper>
                                            );
                                        })}
                                </ImageGrid>
                            </React.Fragment>
                        ))}
                    {selectedImage && (
                        <Modal
                            src={selectedImage}
                            setImage={setSelectedImage}
                        />
                    )}
                </ActivityWrapper>
            </Wrapper>
        </>
    );
};

export default ActivityPage;
