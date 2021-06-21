import React from 'react';
import getImageURL from 'utils/getImageURL';
import defaultMaleAvatar from 'assets/male.svg';
import defaultFemaleAvatar from 'assets/female.svg';
import {
    Avatar,
    Contact,
    Wrapper,
    Name,
    Profile,
    ContactItem,
    NominalRole,
} from './PersonCard.styled';

interface IPersonCard {
    fullName?: string | null;
    avatar?: string | null;
    email?: string | null;
    phone?: string | null;
    nominalRole?: string | null;
    course?: number | null;
    gender?: 'male' | 'female' | 'other' | null;
    socials?: { icon: React.ReactNode; address?: string | null }[];
}

const PersonCard: React.FC<IPersonCard> = ({
    avatar,
    email,
    fullName,
    phone,
    nominalRole,
    socials,
    gender,
    course,
}) => {
    const defaultAvatar =
        gender === 'male' ? defaultMaleAvatar : defaultFemaleAvatar;
    const avatarUrl = avatar ? getImageURL(avatar) : defaultAvatar;
    return (
        <Wrapper>
            <Avatar src={avatarUrl} />

            <Profile>
                <Name>{fullName}</Name>
                <NominalRole>{nominalRole}</NominalRole>
                {course && <b>{`K${course}`}</b>}
                <Contact>
                    {email && (
                        <ContactItem>
                            <a href={`mailto: ${email}`}>
                                <i className="bi bi-envelope-fill" />
                            </a>
                        </ContactItem>
                    )}
                    {phone && (
                        <ContactItem>
                            <a href={`tel: ${phone}`}>
                                <i className="bi bi-phone-fill" />
                            </a>
                        </ContactItem>
                    )}
                    {socials?.map((social) => (
                        <React.Fragment key={social.address}>
                            <ContactItem>
                                <a
                                    href={`${social.address}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon}
                                </a>
                            </ContactItem>
                        </React.Fragment>
                    ))}
                </Contact>
            </Profile>
        </Wrapper>
    );
};

export default PersonCard;
