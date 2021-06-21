import React from 'react';
import { useStudentsQuery } from 'generated/graphql';
import PersonnelListView from 'views/PersonnelList/PersonnelListView';

const Students: React.FC = () => {
    const { loading, data } = useStudentsQuery();

    return (
        <PersonnelListView
            loading={loading}
            navigationLink="/nhan-su/0/sinh-vien"
            title="Sinh viên"
            personals={
                data?.members?.map((member) => ({
                    ...member,
                    avatar: member?.avatar?.formats?.small?.url,
                })) || undefined
            }
        />
    );
};

export default Students;
