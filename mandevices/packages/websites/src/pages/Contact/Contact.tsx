import React from 'react';
import getHumanReadableNominalRole from 'utils/getHumanReadableNominalRole';
import { useContactsQuery } from 'generated/graphql';
import { PageWrapper } from 'elements/Page';
import { NarrowTinyLargeMediumText } from 'common/typography';
import SEO from 'common/SEO';
import Loading from 'shared/loading/Loading';
import {
    Wrapper,
    Item,
    NominalRole,
    Name,
    ListItem,
    Target,
} from './Contact.styled';

const Contact: React.FC = () => {
    const { data, loading } = useContactsQuery();
    return (
        <PageWrapper>
            <SEO title="Liên hệ" />
            <Wrapper>
                {loading && <Loading />}
                {data?.contacts?.map((item) => (
                    <Item key={item?.id}>
                        <NominalRole>
                            {getHumanReadableNominalRole(
                                item?.member?.nominalRole
                            )}
                        </NominalRole>
                        <Name>{item?.member?.fullName} </Name>

                        {item?.member?.email && (
                            <ListItem>
                                <i className="bi bi-envelope" />
                                <NarrowTinyLargeMediumText>
                                    <a href={`mailto:${item?.member?.email}`}>
                                        {item?.member?.email}
                                    </a>
                                </NarrowTinyLargeMediumText>
                            </ListItem>
                        )}
                        {item?.member?.phone && (
                            <ListItem>
                                <i className="bi bi-telephone-fill" />
                                <NarrowTinyLargeMediumText>
                                    <a href={`tel:${item?.member?.phone}`}>
                                        {item?.member?.phone}
                                    </a>
                                </NarrowTinyLargeMediumText>
                            </ListItem>
                        )}
                        <Target>
                            {item?.targets?.map((target) => (
                                <ListItem key={target?.id}>
                                    <i className="bi bi-check-circle-fill" />
                                    <NarrowTinyLargeMediumText>
                                        {target?.title}
                                    </NarrowTinyLargeMediumText>
                                </ListItem>
                            ))}
                        </Target>
                    </Item>
                ))}
            </Wrapper>
        </PageWrapper>
    );
};

export default Contact;
