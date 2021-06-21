import React from 'react';
import {
    Enum_Componentsocialsocials_Provider,
    Enum_Members_Gender,
    Enum_Members_Nominalrole,
    ComponentSocialSocials,
} from 'generated/graphql';
import getHumanReadableNominalRole from 'utils/getHumanReadableNominalRole';
import Loading from 'shared/loading/Loading';
import PersonCard from 'blocks/PersonCard';
import { Nav } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { groupBy } from 'lodash';
import { ListWrapper, Wrapper } from './PersonnelListView.styled';

interface IPersonnel {
    id?: string | null;
    fullName?: string | null;
    course?: number | null;
    gender?: Enum_Members_Gender | null;
    avatar?: string | null;
    nominalRole?: Enum_Members_Nominalrole | null;
    email: string | null;
    phone: string | null;
    Socials: (Partial<ComponentSocialSocials> | null)[] | null;
}

interface IPersonnelListView {
    title: string;
    loading: boolean;
    navigationLink: string;
    personals: (Partial<IPersonnel> | null)[];
}

const PersonnelListView: React.FC<Partial<IPersonnelListView>> = ({
    title,
    personals,
    loading,
    navigationLink,
}) => {
    const { course: currentCourse } = useParams<{ course: string }>();
    if (loading) return <Loading />;

    const personnelGroupedByCourse = groupBy(personals, 'course');

    const data =
        currentCourse === 'tat-ca'
            ? personals
            : personnelGroupedByCourse[currentCourse];
    return (
        <Wrapper>
            <h2>
                {title}
                <span>{data?.length}</span>
            </h2>
            <Nav
                variant="tabs"
                defaultActiveKey={window.location.pathname}
                activeKey={window.location.pathname}
            >
                <Nav.Item>
                    <Nav.Link
                        eventKey={`${navigationLink}/tat-ca`}
                        as={NavLink}
                        to={`${navigationLink}/tat-ca`}
                    >
                        Tất cả
                    </Nav.Link>
                </Nav.Item>
                {Object.keys(personnelGroupedByCourse)
                    .filter((course) => course !== 'null')
                    .map((course) => (
                        <Nav.Item key={course}>
                            <Nav.Link
                                as={NavLink}
                                to={`${navigationLink}/${course}`}
                                eventKey={`${navigationLink}/${course}`}
                            >
                                {`K${course}`}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
            </Nav>
            <ListWrapper>
                {data?.map((personal) => {
                    return (
                        <PersonCard
                            key={personal?.id}
                            fullName={personal?.fullName}
                            gender={personal?.gender}
                            avatar={personal?.avatar}
                            nominalRole={getHumanReadableNominalRole(
                                personal?.nominalRole
                            )}
                            email={personal?.email}
                            phone={personal?.phone}
                            socials={personal?.Socials?.map((social) => ({
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
                    );
                })}
            </ListWrapper>
        </Wrapper>
    );
};

export default PersonnelListView;
