// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeSlide from 'components/HomeSlide2';
import defaultSlide from 'assets/default_slide.jpg';
import ChairMan from 'components/ChairMan';
import ResearchTopics from 'components/ResearchTopics';
import Leader from 'components/Leader';
import OldMemberNetwork from 'components/OldMemberNetwork';
import MemberNetwork from 'components/MemberNetwork';
import SEO from 'common/SEO';
import { useHotNewsQuery } from 'generated/graphql';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import {
    HomeSlideWrapper,
    ResearchTopicsWrapper,
    SeeMoreButton,
} from './HomePage.styled';

const HomePage: React.FC = () => {
    const { data } = useHotNewsQuery();

    return (
        <>
            <SEO
                title="Phòng thí nghiệm Mandevices"
                description="Thuộc bộ môn Kỹ thuật đo & Tin học Công nghiệp"
                keywords="iot, ai, cảm biến, thiết bị thông minh, thu hoạch năng lượng"
                imageUrl={defaultSlide}
            />
            <HomeSlideWrapper>
                <HomeSlide
                    slides={data?.newscasts?.map((news) => ({
                        title: (
                            <Link to={`tin-tuc-su-kien/${news?.id}`}>
                                {news?.title}
                            </Link>
                        ),
                    }))}
                />
            </HomeSlideWrapper>
            <ResearchTopicsWrapper>
                <ResearchTopics />
            </ResearchTopicsWrapper>
            <ChairMan />
            <Leader />
            <OldMemberNetwork />
            <MemberNetwork />

            <Link to="/hoat-dong">
                <SeeMoreButton block>Xem thêm</SeeMoreButton>
            </Link>
        </>
    );
};

export default HomePage;
