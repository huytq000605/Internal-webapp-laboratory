import PersonCard from 'blocks/PersonCard';
import SEO from 'common/SEO';
import TeamNews from 'controllers/TeamNews';
import TeamProfile from 'components/TeamProfile';
import {
    Enum_Componentsocialsocials_Provider,
    useTeamIntroduceQuery,
} from 'generated/graphql';
import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams, NavLink, Route, useHistory } from 'react-router-dom';
import MarkDown from 'shared/MarkDown';
import getHumanReadableNominalRole from 'utils/getHumanReadableNominalRole';
import TeamPostsController from 'controllers/TeamPosts';
import { Body, MemberWrapper, Wrapper } from './TeamIntroduce.styled';

const DynamicContent = () => {
    const { id, index } = useParams<{ id: string; index?: string }>();
    const { data } = useTeamIntroduceQuery({ variables: { id } });

    switch (index) {
        case 'gioi-thieu':
            return <MarkDown>{data?.team?.descriptions}</MarkDown>;
        case 'hoat-dong':
            return <TeamProfile />;
        case 'tin-tuc':
            return <TeamNews />;
        case 'bai-viet':
            return <TeamPostsController />;
        default:
            return null;
    }
};

const TeamIntroduce = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    const { data } = useTeamIntroduceQuery({ variables: { id } });

    useEffect(() => {
        if (
            !window.location.pathname
                .split('/')
                .some((item) =>
                    ['gioi-thieu', 'hoat-dong', 'tin-tuc', 'bai-viet'].includes(
                        item
                    )
                )
        )
            history.push(`/nhom/${id}/gioi-thieu`);
    }, [data, window.location.pathname]);

    return (
        <Wrapper>
            {data?.team?.name && (
                <SEO
                    title={`Nhóm ${data?.team?.name}`}
                    description={data?.team?.descriptions}
                    imageUrl={data?.team?.avatar?.url}
                    imageAlt={data?.team?.avatar?.caption}
                />
            )}
            <Body>
                <Nav
                    variant="tabs"
                    defaultActiveKey={window.location.pathname}
                    activeKey={window.location.pathname}
                >
                    <Nav.Item>
                        <Nav.Link
                            eventKey={`/nhom/${id}/gioi-thieu`}
                            as={NavLink}
                            to={`/nhom/${id}/gioi-thieu`}
                        >
                            Giới thiệu
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            to={`/nhom/${id}/hoat-dong`}
                            eventKey={`/nhom/${id}/hoat-dong`}
                        >
                            Hoạt động
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            to={`/nhom/${id}/bai-viet`}
                            eventKey={`/nhom/${id}/bai-viet`}
                        >
                            Bài viết
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            to={`/nhom/${id}/tin-tuc`}
                            eventKey={`/nhom/${id}/tin-tuc`}
                        >
                            Tin tức
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Route path="/nhom/:id/:index">
                    <DynamicContent />
                </Route>
            </Body>

            <MemberWrapper>
                <Nav variant="tabs" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link href="#">
                            {`Thành viên (${
                                data?.team?.members?.length
                                    ? data?.team?.members?.length + 1
                                    : 1
                            })`}
                        </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="link-1">Starter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled">Cựu thành viên</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                {data?.team?.leader && (
                    <PersonCard
                        fullName={data?.team?.leader?.fullName}
                        gender={data?.team?.leader?.gender}
                        avatar={data?.team?.leader?.avatar?.url}
                        course={data?.team?.leader?.course}
                        nominalRole={getHumanReadableNominalRole(
                            data?.team?.leader?.nominalRole
                        )}
                        email={data?.team?.leader?.email}
                        phone={data?.team?.leader?.phone}
                        socials={data?.team?.leader?.Socials?.map((social) => ({
                            icon: (
                                <React.Fragment key={social?.id}>
                                    {social?.provider ===
                                        Enum_Componentsocialsocials_Provider.Facebook && (
                                        <i className="bi bi-facebook" />
                                    )}
                                </React.Fragment>
                            ),
                            address: social?.address,
                        }))}
                    />
                )}

                {data?.team?.members?.map((member) => (
                    <PersonCard
                        key={member?.id}
                        fullName={member?.fullName}
                        gender={member?.gender}
                        avatar={member?.avatar?.url}
                        nominalRole={getHumanReadableNominalRole(
                            member?.nominalRole
                        )}
                        course={member?.course}
                        email={member?.email}
                        phone={member?.phone}
                        socials={member?.Socials?.map((social) => ({
                            icon: (
                                <React.Fragment key={social?.id}>
                                    {social?.provider ===
                                        Enum_Componentsocialsocials_Provider.Facebook && (
                                        <i className="bi bi-facebook" />
                                    )}
                                </React.Fragment>
                            ),
                            address: social?.address,
                        }))}
                    />
                ))}
            </MemberWrapper>
        </Wrapper>
    );
};

export default TeamIntroduce;
