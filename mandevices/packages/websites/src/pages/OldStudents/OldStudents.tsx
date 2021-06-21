import React from 'react';
import { useOldStudentsQuery } from 'generated/graphql';

import PersonnelListView from 'views/PersonnelList/PersonnelListView';

const OldStudents: React.FC = () => {
    const { loading, data } = useOldStudentsQuery();

    return (
        <PersonnelListView
            loading={loading}
            title="Cựu sinh viên"
            navigationLink="/nhan-su/0/cuu-sinh-vien"
            personals={data?.members?.map((member) => ({
                ...member,
                avatar: member?.avatar?.formats?.small?.url,
            }))}
        />
    );
};

export default OldStudents;
