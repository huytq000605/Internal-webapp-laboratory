import { Info } from 'components/ChairMan/ChairMan.styled';
import React from 'react';
import getImageURL from 'utils/getImageURL';

import { Contact, ContactItem, FooterBlock, Logo, Text } from './Footer.styled';

interface Props {
    logo?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    workTime?: {
        info?: string | null;
        note?: string | null;
    } | null;

    extraInfo?: ({ id: string; title?: string | null } | null)[] | null;
}

const Footer: React.FC<Props> = ({
    logo,
    email,
    phone,
    address,
    workTime,
    extraInfo,
}) => {
    return (
        <FooterBlock>
            {logo ? <Logo src={getImageURL(logo)} /> : <div />}
            <Contact>
                {email && (
                    <ContactItem>
                        <i className="bi bi-envelope-fill" />
                        <Text>{email}</Text>
                    </ContactItem>
                )}
                {phone && (
                    <ContactItem>
                        <i className="bi bi-phone-fill" />
                        <Text>{phone}</Text>
                    </ContactItem>
                )}
                {address && (
                    <ContactItem>
                        <i className="bi bi-geo-alt-fill" />
                        <Text>{address}</Text>
                    </ContactItem>
                )}
                {workTime && (
                    <ContactItem>
                        <i className="bi bi-calendar2-date-fill" />
                        <Text>{workTime.info}</Text>
                        <Text>{workTime.note}</Text>
                    </ContactItem>
                )}
            </Contact>
            <Info>
                {extraInfo?.map((info) => (
                    <Text key={info?.id}>{info?.title}</Text>
                ))}
            </Info>
        </FooterBlock>
    );
};

export default Footer;
