import React from 'react';
import { TitleSection } from 'components/Title';
import SectionBlock from 'elements/Section';
import { useChairManQuery } from 'generated/graphql';
import TitleBlock from 'blocks/Title';
import Slide from 'blocks/Slide2';
import { SlideCaption, SlideImage } from 'blocks/Slide2/Slide2.styled';
import Infos from 'components/Infos';
import {
    ChairName,
    Content,
    SubRole,
    MainRole,
    Info,
    ResearchTopicTitle,
    Loader,
} from './ChairMan.styled';

const ChairMan: React.FC = () => {
    const { loading, data } = useChairManQuery();

    return (
        <SectionBlock>
            {loading && (
                <Loader>
                    <TitleBlock />
                    <Content>
                        <Info>
                            <ChairName />
                            <MainRole />
                            <SubRole />
                            <ResearchTopicTitle />
                            {/* <ResearchTopic />
                            <ResearchTopic />
                            <ResearchTopic /> */}
                        </Info>
                        <Slide>
                            <SlideImage />
                            <SlideCaption />
                        </Slide>
                    </Content>
                </Loader>
            )}
            {data && data?.chairMan && (
                <>
                    <TitleSection>Chủ nhiệm Lab</TitleSection>
                    <Content>
                        <Info>
                            <ChairName>{data?.chairMan?.fullName}</ChairName>
                            <MainRole>{data?.chairMan?.mainRole}</MainRole>
                            {data?.chairMan?.subRoles?.map((subRole) => (
                                <SubRole key={subRole?.id}>
                                    {subRole?.title}
                                </SubRole>
                            ))}
                            {data?.chairMan?.researchTopics && (
                                <ResearchTopicTitle>
                                    Các hướng nghiên cứu chính
                                </ResearchTopicTitle>
                            )}
                            <Infos
                                infos={data.chairMan.researchTopics?.map(
                                    (researchTopic) => ({
                                        id: researchTopic?.id,
                                        value: researchTopic?.title,
                                    })
                                )}
                            />
                            {/* {data?.chairMan?.researchTopics?.map(
                                (reseachTopic) => (
                                    <ResearchTopic key={reseachTopic?.id}>
                                        <i className="bi bi-check-circle-fill" />
                                        <p>{reseachTopic?.title}</p>
                                    </ResearchTopic>
                                )
                            )} */}
                        </Info>
                        {data?.chairMan?.images && (
                            <Slide images={data.chairMan.images} />
                        )}
                    </Content>
                </>
            )}
        </SectionBlock>
    );
};

export default ChairMan;
