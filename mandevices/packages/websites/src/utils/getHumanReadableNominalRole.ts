import { Enum_Members_Nominalrole } from 'generated/graphql';

const getHumanReadableNominalRole = (
    nominalRole?: Enum_Members_Nominalrole | null
): string | undefined => {
    switch (nominalRole) {
        case Enum_Members_Nominalrole.Chairman:
            return 'Chủ nhiệm Lab';
        case Enum_Members_Nominalrole.DeputyLeader:
            return 'Phó trưởng Lab';
        case Enum_Members_Nominalrole.DocterStudent:
            return 'Nghiên cứu sinh';
        case Enum_Members_Nominalrole.Leader:
            return 'Trưởng Lab';
        case Enum_Members_Nominalrole.MasterStudent:
            return 'Học viên cao học';
        case Enum_Members_Nominalrole.Member:
            return 'Thành viên';
        case Enum_Members_Nominalrole.OldLeader:
            return 'Cựu trưởng Lab';
        case Enum_Members_Nominalrole.OldMember:
            return 'Cựu thành viên';
        case Enum_Members_Nominalrole.Starter:
            return 'Starter';
        case Enum_Members_Nominalrole.TeamLeader:
            return 'Trưởng nhóm';
        case Enum_Members_Nominalrole.DeputyTeamLeader:
            return 'Phó trưởng nhóm';
        default:
            break;
    }
};

export default getHumanReadableNominalRole;
