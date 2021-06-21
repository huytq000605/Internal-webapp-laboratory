import getImageURL from 'utils/getImageURL';
import defaultMaleAvatar from 'assets/male.svg';
import defaultFemaleAvatar from 'assets/female.svg';

const getAvatarSrc = (
    gender?: 'male' | 'female' | 'other' | null,
    avatar?: string | null
): string => {
    const defaultAvatar =
        gender === 'male' ? defaultMaleAvatar : defaultFemaleAvatar;
    const avatarUrl = avatar ? getImageURL(avatar) : defaultAvatar;
    return avatarUrl;
};

export default getAvatarSrc;
