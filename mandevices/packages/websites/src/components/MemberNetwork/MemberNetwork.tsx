import React from 'react';
import { useMemberNetworkQuery } from 'generated/graphql';
import SectionBlock from 'elements/Section';
import { Title } from 'components/Title';
import Panel from 'elements/Panel';
import Slide from 'blocks/Slide2';
import InfoList from 'components/Infos';
import { Infos, Heading, Info, Body } from './MemberNetwork.styled';

const MemberNetwork: React.FC = () => {
    const { data } = useMemberNetworkQuery();

    if (!data || !data.sections?.length) return null;
    const section = data.sections ? data.sections[0] : null;
    return (
        <Panel>
            <SectionBlock>
                <Title subTitle={section?.subTitle}>{section?.title}</Title>
                <Body>
                    <Infos>
                        {section?.body?.map((info) => (
                            <Info key={info?.id}>
                                <Heading>{info?.heading}</Heading>
                                <InfoList
                                    infos={info?.contents?.map((content) => ({
                                        id: content?.id,
                                        value: content?.title,
                                    }))}
                                />
                            </Info>
                        ))}
                    </Infos>
                    <Slide images={section?.images} shadow />
                </Body>
            </SectionBlock>
        </Panel>
    );
};

export default MemberNetwork;
