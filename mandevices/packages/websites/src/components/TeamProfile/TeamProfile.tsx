import { useTeamProfileQuery } from 'generated/graphql';
import React from 'react';
import { useParams } from 'react-router-dom';
import MarkDown from 'shared/MarkDown';

const TeamProfile = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useTeamProfileQuery({ variables: { id } });
    return (
        <div>
            <MarkDown>{data?.team?.profiles}</MarkDown>
        </div>
    );
};

export default TeamProfile;
