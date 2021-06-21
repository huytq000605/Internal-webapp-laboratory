import React from 'react';
import { useMastersQuery } from 'generated/graphql';

import PersonnelListView from 'views/PersonnelList/PersonnelListView';

const MasterListController: React.FC = () => {
    const { loading, data } = useMastersQuery();

    return (
        <PersonnelListView
            loading={loading}
            title="Học viên cao học"
            personals={data?.members?.map((member) => ({
                ...member,
                avatar: member?.avatar?.url,
            }))}
        />
    );
};

export default MasterListController;
