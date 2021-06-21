import { Title } from 'components/Title';
import SectionBlock from 'elements/Section';
import React from 'react';
import { useOldMemberNetworkQuery } from 'generated/graphql';
import getImageURL from 'utils/getImageURL';
import Dot from 'elements/Dots';
import {
    Brands,
    WorldMap,
    Countries,
    Country,
    University,
    CountryWrapper,
} from './OldMemberNetwork.styled';

const OldMemberNetwork: React.FC = () => {
    const { data } = useOldMemberNetworkQuery();
    if (!data) return null;
    return (
        <>
            <SectionBlock>
                <Title subTitle="Cơ hội việc làm - du học" center underline>
                    Mạng lưới cựu thành viên
                </Title>
                <Brands>
                    {data?.oldMemberNetwork?.companies?.map((company) => (
                        <div key={company?.id}>
                            <img
                                src={getImageURL(company?.logo?.url)}
                                alt="Company logo"
                            />
                        </div>
                    ))}
                </Brands>
            </SectionBlock>
            <WorldMap>
                <Countries>
                    {data.oldMemberNetwork?.countries?.map((country) => (
                        <CountryWrapper key={country?.id}>
                            <Country>
                                <img
                                    src={getImageURL(country?.flag?.url)}
                                    alt="Country flag"
                                />
                                <p>{country?.name}</p>
                            </Country>
                            {country?.universities?.map((university) => (
                                <University key={university?.id}>
                                    <Dot />
                                    <p>{`${university?.shortName} (${university?.students?.length})`}</p>
                                    <p>{university?.name}</p>
                                </University>
                            ))}
                        </CountryWrapper>
                    ))}
                </Countries>
            </WorldMap>
        </>
    );
};

export default OldMemberNetwork;
