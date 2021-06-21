/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateDutyInput = {
  times: Array<TimeIntervalInput>;
};


/** Device model */
export type Device = {
  __typename?: 'Device';
  _id: Scalars['ID'];
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: UserGraphQlContext;
  image?: Maybe<Image>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeviceCreateInput = {
  category: Scalars['String'];
  image?: Maybe<ImageInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeviceEditInput = {
  /** The id of device which will be editted */
  _id: Scalars['ID'];
  category?: Maybe<Scalars['String']>;
  image?: Maybe<ImageInput>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DeviceFilter = {
  category?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DeviceOptions = {
  filter?: Maybe<DeviceFilter>;
  numPage?: Maybe<Scalars['Float']>;
  perPage?: Maybe<Scalars['Float']>;
  sort?: Maybe<DeviceSort>;
};

export type DeviceSort = {
  category?: Maybe<Scalars['Float']>;
  model?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['Float']>;
};

/** The Duty model */
export type Duty = {
  __typename?: 'Duty';
  _id: Scalars['ID'];
  date: Scalars['DateTime'];
  subscriberAvatar?: Maybe<Scalars['String']>;
  subscriberId: Scalars['String'];
  subscriberName: Scalars['String'];
  times?: Maybe<Array<TimeInterval>>;
};

export type FileMedia = {
  __typename?: 'FileMedia';
  id: Scalars['String'];
  path: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['String'];
  path: Scalars['String'];
};

export type ImageInput = {
  id: Scalars['String'];
  path: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: User;
  createDevice: Device;
  createDevices: Array<Device>;
  createRole: Role;
  createTask: Task;
  createUser: User;
  deleteDevice: Device;
  deleteImage: Scalars['Boolean'];
  deleteRole: Role;
  deleteTask: Task;
  deleteUser: User;
  editDevice: Device;
  editRole: Role;
  editTask: Task;
  editUser: User;
  registerDuty: Duty;
  setUserRole: User;
  unsubcribeDuty: Duty;
  upload: FileMedia;
};


export type MutationCreateAdminArgs = {
  input: UserCreateInput;
};


export type MutationCreateDeviceArgs = {
  file?: Maybe<Scalars['Upload']>;
  input: DeviceCreateInput;
};


export type MutationCreateDevicesArgs = {
  input: Array<DeviceCreateInput>;
};


export type MutationCreateRoleArgs = {
  input: MutationRoleInput;
};


export type MutationCreateTaskArgs = {
  input: TaskCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteDeviceArgs = {
  input: Scalars['String'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoleArgs = {
  name: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  input: TaskWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  input: Scalars['String'];
};


export type MutationEditDeviceArgs = {
  file?: Maybe<Scalars['Upload']>;
  input: DeviceEditInput;
};


export type MutationEditRoleArgs = {
  input: MutationRoleInput;
};


export type MutationEditTaskArgs = {
  input: TaskEditInput;
};


export type MutationEditUserArgs = {
  input: UserEditInput;
};


export type MutationRegisterDutyArgs = {
  input: CreateDutyInput;
};


export type MutationSetUserRoleArgs = {
  input: SetUserRoleInput;
};


export type MutationUnsubcribeDutyArgs = {
  input: UnsubcribeDutyInput;
};


export type MutationUploadArgs = {
  file?: Maybe<Scalars['Upload']>;
};

export type MutationRoleInput = {
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type Permissions = {
  __typename?: 'Permissions';
  api: Scalars['String'];
  group: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  device: Device;
  devices: Array<Device>;
  /** Get all duties */
  duties: Array<Duty>;
  /** Get all duties by date */
  dutiesByDate: Array<Duty>;
  getAdmin: User;
  getPermissionsConfig: Array<Permissions>;
  getRole: Role;
  getRoles: Array<Role>;
  getUser: User;
  getUsers: Array<User>;
  system: System;
  tasks: Array<Task>;
  temporaryUploadFiles: Array<FileMedia>;
};


export type QueryDeviceArgs = {
  input: Scalars['String'];
};


export type QueryDevicesArgs = {
  options?: Maybe<DeviceOptions>;
};


export type QueryDutiesByDateArgs = {
  date: Scalars['DateTime'];
};


export type QueryGetRoleArgs = {
  name: Scalars['String'];
};


export type QueryGetUserArgs = {
  input: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  createdBy: UserGraphQlContext;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: UserGraphQlContext;
};

export type SetUserRoleInput = {
  _id: Scalars['String'];
  role: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newSubscriber: Duty;
  newUnsubscriber: Duty;
};

export type System = {
  __typename?: 'System';
  hasOwnerAccount: Scalars['Boolean'];
};

/** The Task model */
export type Task = {
  __typename?: 'Task';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  ownerId: Scalars['String'];
  title: Scalars['String'];
};

export type TaskCreateInput = {
  title: Scalars['String'];
};

export type TaskEditInput = {
  /** The id of task which will be editted */
  _id: Scalars['ID'];
  title: Scalars['String'];
};

export type TaskWhereUniqueInput = {
  /** The id of task */
  _id: Scalars['ID'];
};

export type TimeInterval = {
  __typename?: 'TimeInterval';
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type TimeIntervalInput = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type UnsubcribeDutyInput = {
  date: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  faculty?: Maybe<Scalars['String']>;
  googleId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
  specialty?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  class?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  specialty?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
};

export type UserEditInput = {
  _id: Scalars['ID'];
  class?: Maybe<Scalars['String']>;
  faculty?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  specialty?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
};

export type UserGraphQlContext = {
  __typename?: 'UserGraphQLContext';
  avatar: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GetAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminQuery = (
  { __typename?: 'Query' }
  & { getAdmin: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'createdAt' | 'name' | 'googleId'>
  ) }
);

export type CreateAdminMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type CreateAdminMutation = (
  { __typename?: 'Mutation' }
  & { createAdmin: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'createdAt' | 'name'>
  ) }
);

export type SystemCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type SystemCheckQuery = (
  { __typename?: 'Query' }
  & { system: (
    { __typename?: 'System' }
    & Pick<System, 'hasOwnerAccount'>
  ) }
);

export type GetPermissonsConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPermissonsConfigQuery = (
  { __typename?: 'Query' }
  & { getPermissionsConfig: Array<(
    { __typename?: 'Permissions' }
    & Pick<Permissions, 'api' | 'group' | 'permissions'>
  )> }
);

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = (
  { __typename?: 'Query' }
  & { getRoles: Array<(
    { __typename?: 'Role' }
    & Pick<Role, '_id' | 'name' | 'permissions'>
  )> }
);

export type EditRoleMutationVariables = Exact<{
  input: MutationRoleInput;
}>;


export type EditRoleMutation = (
  { __typename?: 'Mutation' }
  & { editRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'name'>
  ) }
);

export type CreateRoleMutationVariables = Exact<{
  input: MutationRoleInput;
}>;


export type CreateRoleMutation = (
  { __typename?: 'Mutation' }
  & { createRole: (
    { __typename?: 'Role' }
    & Pick<Role, '_id' | 'name'>
  ) }
);

export type DeleteRoleMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type DeleteRoleMutation = (
  { __typename?: 'Mutation' }
  & { deleteRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'name'>
  ) }
);

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: (
    { __typename?: 'Task' }
    & Pick<Task, '_id'>
  ) }
);

export type CreateDeviceMutationVariables = Exact<{
  image?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
  category: Scalars['String'];
  model?: Maybe<Scalars['String']>;
}>;


export type CreateDeviceMutation = (
  { __typename?: 'Mutation' }
  & { createDevice: (
    { __typename?: 'Device' }
    & Pick<Device, '_id' | 'name' | 'model' | 'category' | 'createdAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'path' | 'id'>
    )> }
  ) }
);

export type CreateDevicesMutationVariables = Exact<{
  devices: Array<DeviceCreateInput> | DeviceCreateInput;
}>;


export type CreateDevicesMutation = (
  { __typename?: 'Mutation' }
  & { createDevices: Array<(
    { __typename?: 'Device' }
    & Pick<Device, '_id' | 'name' | 'model' | 'category' | 'createdAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'path' | 'id'>
    )> }
  )> }
);

export type EditDeviceMutationVariables = Exact<{
  image?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}>;


export type EditDeviceMutation = (
  { __typename?: 'Mutation' }
  & { editDevice: (
    { __typename?: 'Device' }
    & Pick<Device, 'name' | 'model' | 'category' | 'createdAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'path' | 'id'>
    )> }
  ) }
);

export type GetDeviceQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetDeviceQuery = (
  { __typename?: 'Query' }
  & { device: (
    { __typename?: 'Device' }
    & Pick<Device, 'name' | 'category' | 'model'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'path' | 'id'>
    )> }
  ) }
);

export type DeleteDeviceMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDeviceMutation = (
  { __typename?: 'Mutation' }
  & { deleteDevice: (
    { __typename?: 'Device' }
    & Pick<Device, 'name' | 'model' | 'category' | 'createdAt'>
  ) }
);

export type GetDevicesQueryVariables = Exact<{
  options?: Maybe<DeviceOptions>;
}>;


export type GetDevicesQuery = (
  { __typename?: 'Query' }
  & { devices: Array<(
    { __typename?: 'Device' }
    & Pick<Device, '_id' | 'name' | 'category' | 'model' | 'createdAt'>
    & { image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'path'>
    )>, createdBy: (
      { __typename?: 'UserGraphQLContext' }
      & Pick<UserGraphQlContext, 'id' | 'avatar' | 'email' | 'name'>
    ) }
  )> }
);

export type EditTaskMutationVariables = Exact<{
  title: Scalars['String'];
  _id: Scalars['ID'];
}>;


export type EditTaskMutation = (
  { __typename?: 'Mutation' }
  & { editTask: (
    { __typename?: 'Task' }
    & Pick<Task, '_id' | 'title'>
  ) }
);

export type TaskListQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskListQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & TaskListItemFragment
  )> }
);

export type TaskListItemFragment = (
  { __typename?: 'Task' }
  & Pick<Task, '_id' | 'title' | 'createdAt'>
);

export type CreateTaskMutationVariables = Exact<{
  input: TaskCreateInput;
}>;


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & TaskListItemFragment
  ) }
);

export type EditUserMutationVariables = Exact<{
  input: UserEditInput;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name'>
  ) }
);

export type GetUserQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'createdAt' | 'email' | 'avatar' | 'googleId' | 'studentId' | 'faculty' | 'specialty' | 'class' | 'roles'>
  ) }
);

export type SetUserRoleMutationVariables = Exact<{
  input: SetUserRoleInput;
}>;


export type SetUserRoleMutation = (
  { __typename?: 'Mutation' }
  & { setUserRole: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'createdAt' | 'email' | 'avatar' | 'googleId' | 'studentId' | 'faculty' | 'specialty' | 'class' | 'roles'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'createdAt' | 'name'>
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'email'>
  ) }
);

export type WorkDayListQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkDayListQuery = (
  { __typename?: 'Query' }
  & { duties: Array<(
    { __typename?: 'Duty' }
    & WorkDayListItemFragment
  )> }
);

export type DutyDayListQueryVariables = Exact<{
  date: Scalars['DateTime'];
}>;


export type DutyDayListQuery = (
  { __typename?: 'Query' }
  & { dutiesByDate: Array<(
    { __typename?: 'Duty' }
    & WorkDayListItemFragment
  )> }
);

export type RegisterDutyMutationVariables = Exact<{
  input: CreateDutyInput;
}>;


export type RegisterDutyMutation = (
  { __typename?: 'Mutation' }
  & { registerDuty: (
    { __typename?: 'Duty' }
    & WorkDayListItemFragment
  ) }
);

export type UnsubribeDutyMutationVariables = Exact<{
  date: Scalars['DateTime'];
}>;


export type UnsubribeDutyMutation = (
  { __typename?: 'Mutation' }
  & { unsubcribeDuty: (
    { __typename?: 'Duty' }
    & Pick<Duty, '_id' | 'subscriberId'>
  ) }
);

export type NewSubscriberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewSubscriberSubscription = (
  { __typename?: 'Subscription' }
  & { newSubscriber: (
    { __typename?: 'Duty' }
    & WorkDayListItemFragment
  ) }
);

export type NewUnsubscriberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewUnsubscriberSubscription = (
  { __typename?: 'Subscription' }
  & { newUnsubscriber: (
    { __typename?: 'Duty' }
    & Pick<Duty, '_id' | 'subscriberId'>
  ) }
);

export type WorkDayListItemFragment = (
  { __typename?: 'Duty' }
  & Pick<Duty, '_id' | 'subscriberId' | 'subscriberName' | 'subscriberAvatar' | 'date'>
  & { times?: Maybe<Array<(
    { __typename?: 'TimeInterval' }
    & Pick<TimeInterval, 'start' | 'end'>
  )>> }
);

export const TaskListItemFragmentDoc = gql`
    fragment TaskListItem on Task {
  _id
  title
  createdAt
}
    `;
export const WorkDayListItemFragmentDoc = gql`
    fragment WorkDayListItem on Duty {
  _id
  subscriberId
  subscriberName
  subscriberAvatar
  date
  times {
    start
    end
  }
}
    `;
export const GetAdminDocument = gql`
    query GetAdmin {
  getAdmin {
    _id
    createdAt
    name
    googleId
  }
}
    `;

/**
 * __useGetAdminQuery__
 *
 * To run a query within a React component, call `useGetAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
        return Apollo.useQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, baseOptions);
      }
export function useGetAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
          return Apollo.useLazyQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, baseOptions);
        }
export type GetAdminQueryHookResult = ReturnType<typeof useGetAdminQuery>;
export type GetAdminLazyQueryHookResult = ReturnType<typeof useGetAdminLazyQuery>;
export type GetAdminQueryResult = Apollo.QueryResult<GetAdminQuery, GetAdminQueryVariables>;
export const CreateAdminDocument = gql`
    mutation CreateAdmin($input: UserCreateInput!) {
  createAdmin(input: $input) {
    _id
    createdAt
    name
  }
}
    `;
export type CreateAdminMutationFn = Apollo.MutationFunction<CreateAdminMutation, CreateAdminMutationVariables>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdminMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdminMutation, CreateAdminMutationVariables>) {
        return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(CreateAdminDocument, baseOptions);
      }
export type CreateAdminMutationHookResult = ReturnType<typeof useCreateAdminMutation>;
export type CreateAdminMutationResult = Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<CreateAdminMutation, CreateAdminMutationVariables>;
export const SystemCheckDocument = gql`
    query SystemCheck {
  system {
    hasOwnerAccount
  }
}
    `;

/**
 * __useSystemCheckQuery__
 *
 * To run a query within a React component, call `useSystemCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useSystemCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSystemCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useSystemCheckQuery(baseOptions?: Apollo.QueryHookOptions<SystemCheckQuery, SystemCheckQueryVariables>) {
        return Apollo.useQuery<SystemCheckQuery, SystemCheckQueryVariables>(SystemCheckDocument, baseOptions);
      }
export function useSystemCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SystemCheckQuery, SystemCheckQueryVariables>) {
          return Apollo.useLazyQuery<SystemCheckQuery, SystemCheckQueryVariables>(SystemCheckDocument, baseOptions);
        }
export type SystemCheckQueryHookResult = ReturnType<typeof useSystemCheckQuery>;
export type SystemCheckLazyQueryHookResult = ReturnType<typeof useSystemCheckLazyQuery>;
export type SystemCheckQueryResult = Apollo.QueryResult<SystemCheckQuery, SystemCheckQueryVariables>;
export const GetPermissonsConfigDocument = gql`
    query GetPermissonsConfig {
  getPermissionsConfig {
    api
    group
    permissions
  }
}
    `;

/**
 * __useGetPermissonsConfigQuery__
 *
 * To run a query within a React component, call `useGetPermissonsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissonsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissonsConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPermissonsConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetPermissonsConfigQuery, GetPermissonsConfigQueryVariables>) {
        return Apollo.useQuery<GetPermissonsConfigQuery, GetPermissonsConfigQueryVariables>(GetPermissonsConfigDocument, baseOptions);
      }
export function useGetPermissonsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPermissonsConfigQuery, GetPermissonsConfigQueryVariables>) {
          return Apollo.useLazyQuery<GetPermissonsConfigQuery, GetPermissonsConfigQueryVariables>(GetPermissonsConfigDocument, baseOptions);
        }
export type GetPermissonsConfigQueryHookResult = ReturnType<typeof useGetPermissonsConfigQuery>;
export type GetPermissonsConfigLazyQueryHookResult = ReturnType<typeof useGetPermissonsConfigLazyQuery>;
export type GetPermissonsConfigQueryResult = Apollo.QueryResult<GetPermissonsConfigQuery, GetPermissonsConfigQueryVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  getRoles {
    _id
    name
    permissions
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, baseOptions);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, baseOptions);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const EditRoleDocument = gql`
    mutation EditRole($input: MutationRoleInput!) {
  editRole(input: $input) {
    name
  }
}
    `;
export type EditRoleMutationFn = Apollo.MutationFunction<EditRoleMutation, EditRoleMutationVariables>;

/**
 * __useEditRoleMutation__
 *
 * To run a mutation, you first call `useEditRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRoleMutation, { data, loading, error }] = useEditRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditRoleMutation(baseOptions?: Apollo.MutationHookOptions<EditRoleMutation, EditRoleMutationVariables>) {
        return Apollo.useMutation<EditRoleMutation, EditRoleMutationVariables>(EditRoleDocument, baseOptions);
      }
export type EditRoleMutationHookResult = ReturnType<typeof useEditRoleMutation>;
export type EditRoleMutationResult = Apollo.MutationResult<EditRoleMutation>;
export type EditRoleMutationOptions = Apollo.BaseMutationOptions<EditRoleMutation, EditRoleMutationVariables>;
export const CreateRoleDocument = gql`
    mutation CreateRole($input: MutationRoleInput!) {
  createRole(input: $input) {
    _id
    name
  }
}
    `;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, baseOptions);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation DeleteRole($input: String!) {
  deleteRole(name: $input) {
    name
  }
}
    `;
export type DeleteRoleMutationFn = Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        return Apollo.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, baseOptions);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: ID!) {
  deleteTask(input: {_id: $id}) {
    _id
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const CreateDeviceDocument = gql`
    mutation CreateDevice($image: Upload, $name: String!, $category: String!, $model: String) {
  createDevice(
    file: $image
    input: {name: $name, category: $category, model: $model}
  ) {
    _id
    name
    image {
      path
      id
    }
    model
    category
    createdAt
  }
}
    `;
export type CreateDeviceMutationFn = Apollo.MutationFunction<CreateDeviceMutation, CreateDeviceMutationVariables>;

/**
 * __useCreateDeviceMutation__
 *
 * To run a mutation, you first call `useCreateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeviceMutation, { data, loading, error }] = useCreateDeviceMutation({
 *   variables: {
 *      image: // value for 'image'
 *      name: // value for 'name'
 *      category: // value for 'category'
 *      model: // value for 'model'
 *   },
 * });
 */
export function useCreateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeviceMutation, CreateDeviceMutationVariables>) {
        return Apollo.useMutation<CreateDeviceMutation, CreateDeviceMutationVariables>(CreateDeviceDocument, baseOptions);
      }
export type CreateDeviceMutationHookResult = ReturnType<typeof useCreateDeviceMutation>;
export type CreateDeviceMutationResult = Apollo.MutationResult<CreateDeviceMutation>;
export type CreateDeviceMutationOptions = Apollo.BaseMutationOptions<CreateDeviceMutation, CreateDeviceMutationVariables>;
export const CreateDevicesDocument = gql`
    mutation CreateDevices($devices: [DeviceCreateInput!]!) {
  createDevices(input: $devices) {
    _id
    name
    image {
      path
      id
    }
    model
    category
    createdAt
  }
}
    `;
export type CreateDevicesMutationFn = Apollo.MutationFunction<CreateDevicesMutation, CreateDevicesMutationVariables>;

/**
 * __useCreateDevicesMutation__
 *
 * To run a mutation, you first call `useCreateDevicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDevicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDevicesMutation, { data, loading, error }] = useCreateDevicesMutation({
 *   variables: {
 *      devices: // value for 'devices'
 *   },
 * });
 */
export function useCreateDevicesMutation(baseOptions?: Apollo.MutationHookOptions<CreateDevicesMutation, CreateDevicesMutationVariables>) {
        return Apollo.useMutation<CreateDevicesMutation, CreateDevicesMutationVariables>(CreateDevicesDocument, baseOptions);
      }
export type CreateDevicesMutationHookResult = ReturnType<typeof useCreateDevicesMutation>;
export type CreateDevicesMutationResult = Apollo.MutationResult<CreateDevicesMutation>;
export type CreateDevicesMutationOptions = Apollo.BaseMutationOptions<CreateDevicesMutation, CreateDevicesMutationVariables>;
export const EditDeviceDocument = gql`
    mutation EditDevice($image: Upload, $name: String, $category: String, $model: String, $id: ID!) {
  editDevice(
    file: $image
    input: {name: $name, category: $category, _id: $id, model: $model}
  ) {
    name
    image {
      path
      id
    }
    model
    category
    createdAt
  }
}
    `;
export type EditDeviceMutationFn = Apollo.MutationFunction<EditDeviceMutation, EditDeviceMutationVariables>;

/**
 * __useEditDeviceMutation__
 *
 * To run a mutation, you first call `useEditDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDeviceMutation, { data, loading, error }] = useEditDeviceMutation({
 *   variables: {
 *      image: // value for 'image'
 *      name: // value for 'name'
 *      category: // value for 'category'
 *      model: // value for 'model'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditDeviceMutation(baseOptions?: Apollo.MutationHookOptions<EditDeviceMutation, EditDeviceMutationVariables>) {
        return Apollo.useMutation<EditDeviceMutation, EditDeviceMutationVariables>(EditDeviceDocument, baseOptions);
      }
export type EditDeviceMutationHookResult = ReturnType<typeof useEditDeviceMutation>;
export type EditDeviceMutationResult = Apollo.MutationResult<EditDeviceMutation>;
export type EditDeviceMutationOptions = Apollo.BaseMutationOptions<EditDeviceMutation, EditDeviceMutationVariables>;
export const GetDeviceDocument = gql`
    query GetDevice($input: String!) {
  device(input: $input) {
    name
    category
    image {
      path
      id
    }
    model
  }
}
    `;

/**
 * __useGetDeviceQuery__
 *
 * To run a query within a React component, call `useGetDeviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDeviceQuery(baseOptions: Apollo.QueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
        return Apollo.useQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, baseOptions);
      }
export function useGetDeviceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
          return Apollo.useLazyQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, baseOptions);
        }
export type GetDeviceQueryHookResult = ReturnType<typeof useGetDeviceQuery>;
export type GetDeviceLazyQueryHookResult = ReturnType<typeof useGetDeviceLazyQuery>;
export type GetDeviceQueryResult = Apollo.QueryResult<GetDeviceQuery, GetDeviceQueryVariables>;
export const DeleteDeviceDocument = gql`
    mutation DeleteDevice($id: String!) {
  deleteDevice(input: $id) {
    name
    model
    category
    createdAt
  }
}
    `;
export type DeleteDeviceMutationFn = Apollo.MutationFunction<DeleteDeviceMutation, DeleteDeviceMutationVariables>;

/**
 * __useDeleteDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceMutation, { data, loading, error }] = useDeleteDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDeviceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>) {
        return Apollo.useMutation<DeleteDeviceMutation, DeleteDeviceMutationVariables>(DeleteDeviceDocument, baseOptions);
      }
export type DeleteDeviceMutationHookResult = ReturnType<typeof useDeleteDeviceMutation>;
export type DeleteDeviceMutationResult = Apollo.MutationResult<DeleteDeviceMutation>;
export type DeleteDeviceMutationOptions = Apollo.BaseMutationOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>;
export const GetDevicesDocument = gql`
    query GetDevices($options: DeviceOptions) {
  devices(options: $options) {
    _id
    name
    category
    image {
      id
      path
    }
    model
    createdAt
    createdBy {
      id
      avatar
      email
      name
    }
  }
}
    `;

/**
 * __useGetDevicesQuery__
 *
 * To run a query within a React component, call `useGetDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDevicesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetDevicesQuery(baseOptions?: Apollo.QueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
        return Apollo.useQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, baseOptions);
      }
export function useGetDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
          return Apollo.useLazyQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, baseOptions);
        }
export type GetDevicesQueryHookResult = ReturnType<typeof useGetDevicesQuery>;
export type GetDevicesLazyQueryHookResult = ReturnType<typeof useGetDevicesLazyQuery>;
export type GetDevicesQueryResult = Apollo.QueryResult<GetDevicesQuery, GetDevicesQueryVariables>;
export const EditTaskDocument = gql`
    mutation EditTask($title: String!, $_id: ID!) {
  editTask(input: {title: $title, _id: $_id}) {
    _id
    title
  }
}
    `;
export type EditTaskMutationFn = Apollo.MutationFunction<EditTaskMutation, EditTaskMutationVariables>;

/**
 * __useEditTaskMutation__
 *
 * To run a mutation, you first call `useEditTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTaskMutation, { data, loading, error }] = useEditTaskMutation({
 *   variables: {
 *      title: // value for 'title'
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useEditTaskMutation(baseOptions?: Apollo.MutationHookOptions<EditTaskMutation, EditTaskMutationVariables>) {
        return Apollo.useMutation<EditTaskMutation, EditTaskMutationVariables>(EditTaskDocument, baseOptions);
      }
export type EditTaskMutationHookResult = ReturnType<typeof useEditTaskMutation>;
export type EditTaskMutationResult = Apollo.MutationResult<EditTaskMutation>;
export type EditTaskMutationOptions = Apollo.BaseMutationOptions<EditTaskMutation, EditTaskMutationVariables>;
export const TaskListDocument = gql`
    query TaskList {
  tasks {
    ...TaskListItem
  }
}
    ${TaskListItemFragmentDoc}`;

/**
 * __useTaskListQuery__
 *
 * To run a query within a React component, call `useTaskListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTaskListQuery(baseOptions?: Apollo.QueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
        return Apollo.useQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, baseOptions);
      }
export function useTaskListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
          return Apollo.useLazyQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, baseOptions);
        }
export type TaskListQueryHookResult = ReturnType<typeof useTaskListQuery>;
export type TaskListLazyQueryHookResult = ReturnType<typeof useTaskListLazyQuery>;
export type TaskListQueryResult = Apollo.QueryResult<TaskListQuery, TaskListQueryVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: TaskCreateInput!) {
  createTask(input: $input) {
    ...TaskListItem
  }
}
    ${TaskListItemFragmentDoc}`;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const EditUserDocument = gql`
    mutation EditUser($input: UserEditInput!) {
  editUser(input: $input) {
    _id
    name
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, baseOptions);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($input: String!) {
  getUser(input: $input) {
    _id
    name
    createdAt
    email
    avatar
    googleId
    studentId
    faculty
    specialty
    class
    roles
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SetUserRoleDocument = gql`
    mutation SetUserRole($input: SetUserRoleInput!) {
  setUserRole(input: $input) {
    name
  }
}
    `;
export type SetUserRoleMutationFn = Apollo.MutationFunction<SetUserRoleMutation, SetUserRoleMutationVariables>;

/**
 * __useSetUserRoleMutation__
 *
 * To run a mutation, you first call `useSetUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setUserRoleMutation, { data, loading, error }] = useSetUserRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetUserRoleMutation(baseOptions?: Apollo.MutationHookOptions<SetUserRoleMutation, SetUserRoleMutationVariables>) {
        return Apollo.useMutation<SetUserRoleMutation, SetUserRoleMutationVariables>(SetUserRoleDocument, baseOptions);
      }
export type SetUserRoleMutationHookResult = ReturnType<typeof useSetUserRoleMutation>;
export type SetUserRoleMutationResult = Apollo.MutationResult<SetUserRoleMutation>;
export type SetUserRoleMutationOptions = Apollo.BaseMutationOptions<SetUserRoleMutation, SetUserRoleMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    _id
    name
    createdAt
    email
    avatar
    googleId
    studentId
    faculty
    specialty
    class
    roles
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserCreateInput!) {
  createUser(input: $input) {
    _id
    createdAt
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($input: String!) {
  deleteUser(input: $input) {
    _id
    name
    email
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const WorkDayListDocument = gql`
    query WorkDayList {
  duties {
    ...WorkDayListItem
  }
}
    ${WorkDayListItemFragmentDoc}`;

/**
 * __useWorkDayListQuery__
 *
 * To run a query within a React component, call `useWorkDayListQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkDayListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkDayListQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkDayListQuery(baseOptions?: Apollo.QueryHookOptions<WorkDayListQuery, WorkDayListQueryVariables>) {
        return Apollo.useQuery<WorkDayListQuery, WorkDayListQueryVariables>(WorkDayListDocument, baseOptions);
      }
export function useWorkDayListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkDayListQuery, WorkDayListQueryVariables>) {
          return Apollo.useLazyQuery<WorkDayListQuery, WorkDayListQueryVariables>(WorkDayListDocument, baseOptions);
        }
export type WorkDayListQueryHookResult = ReturnType<typeof useWorkDayListQuery>;
export type WorkDayListLazyQueryHookResult = ReturnType<typeof useWorkDayListLazyQuery>;
export type WorkDayListQueryResult = Apollo.QueryResult<WorkDayListQuery, WorkDayListQueryVariables>;
export const DutyDayListDocument = gql`
    query DutyDayList($date: DateTime!) {
  dutiesByDate(date: $date) {
    ...WorkDayListItem
  }
}
    ${WorkDayListItemFragmentDoc}`;

/**
 * __useDutyDayListQuery__
 *
 * To run a query within a React component, call `useDutyDayListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDutyDayListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDutyDayListQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useDutyDayListQuery(baseOptions: Apollo.QueryHookOptions<DutyDayListQuery, DutyDayListQueryVariables>) {
        return Apollo.useQuery<DutyDayListQuery, DutyDayListQueryVariables>(DutyDayListDocument, baseOptions);
      }
export function useDutyDayListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DutyDayListQuery, DutyDayListQueryVariables>) {
          return Apollo.useLazyQuery<DutyDayListQuery, DutyDayListQueryVariables>(DutyDayListDocument, baseOptions);
        }
export type DutyDayListQueryHookResult = ReturnType<typeof useDutyDayListQuery>;
export type DutyDayListLazyQueryHookResult = ReturnType<typeof useDutyDayListLazyQuery>;
export type DutyDayListQueryResult = Apollo.QueryResult<DutyDayListQuery, DutyDayListQueryVariables>;
export const RegisterDutyDocument = gql`
    mutation RegisterDuty($input: CreateDutyInput!) {
  registerDuty(input: $input) {
    ...WorkDayListItem
  }
}
    ${WorkDayListItemFragmentDoc}`;
export type RegisterDutyMutationFn = Apollo.MutationFunction<RegisterDutyMutation, RegisterDutyMutationVariables>;

/**
 * __useRegisterDutyMutation__
 *
 * To run a mutation, you first call `useRegisterDutyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterDutyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerDutyMutation, { data, loading, error }] = useRegisterDutyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterDutyMutation(baseOptions?: Apollo.MutationHookOptions<RegisterDutyMutation, RegisterDutyMutationVariables>) {
        return Apollo.useMutation<RegisterDutyMutation, RegisterDutyMutationVariables>(RegisterDutyDocument, baseOptions);
      }
export type RegisterDutyMutationHookResult = ReturnType<typeof useRegisterDutyMutation>;
export type RegisterDutyMutationResult = Apollo.MutationResult<RegisterDutyMutation>;
export type RegisterDutyMutationOptions = Apollo.BaseMutationOptions<RegisterDutyMutation, RegisterDutyMutationVariables>;
export const UnsubribeDutyDocument = gql`
    mutation UnsubribeDuty($date: DateTime!) {
  unsubcribeDuty(input: {date: $date}) {
    _id
    subscriberId
  }
}
    `;
export type UnsubribeDutyMutationFn = Apollo.MutationFunction<UnsubribeDutyMutation, UnsubribeDutyMutationVariables>;

/**
 * __useUnsubribeDutyMutation__
 *
 * To run a mutation, you first call `useUnsubribeDutyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubribeDutyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubribeDutyMutation, { data, loading, error }] = useUnsubribeDutyMutation({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useUnsubribeDutyMutation(baseOptions?: Apollo.MutationHookOptions<UnsubribeDutyMutation, UnsubribeDutyMutationVariables>) {
        return Apollo.useMutation<UnsubribeDutyMutation, UnsubribeDutyMutationVariables>(UnsubribeDutyDocument, baseOptions);
      }
export type UnsubribeDutyMutationHookResult = ReturnType<typeof useUnsubribeDutyMutation>;
export type UnsubribeDutyMutationResult = Apollo.MutationResult<UnsubribeDutyMutation>;
export type UnsubribeDutyMutationOptions = Apollo.BaseMutationOptions<UnsubribeDutyMutation, UnsubribeDutyMutationVariables>;
export const NewSubscriberDocument = gql`
    subscription NewSubscriber {
  newSubscriber {
    ...WorkDayListItem
  }
}
    ${WorkDayListItemFragmentDoc}`;

/**
 * __useNewSubscriberSubscription__
 *
 * To run a query within a React component, call `useNewSubscriberSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewSubscriberSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewSubscriberSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewSubscriberSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewSubscriberSubscription, NewSubscriberSubscriptionVariables>) {
        return Apollo.useSubscription<NewSubscriberSubscription, NewSubscriberSubscriptionVariables>(NewSubscriberDocument, baseOptions);
      }
export type NewSubscriberSubscriptionHookResult = ReturnType<typeof useNewSubscriberSubscription>;
export type NewSubscriberSubscriptionResult = Apollo.SubscriptionResult<NewSubscriberSubscription>;
export const NewUnsubscriberDocument = gql`
    subscription NewUnsubscriber {
  newUnsubscriber {
    _id
    subscriberId
  }
}
    `;

/**
 * __useNewUnsubscriberSubscription__
 *
 * To run a query within a React component, call `useNewUnsubscriberSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUnsubscriberSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUnsubscriberSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewUnsubscriberSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUnsubscriberSubscription, NewUnsubscriberSubscriptionVariables>) {
        return Apollo.useSubscription<NewUnsubscriberSubscription, NewUnsubscriberSubscriptionVariables>(NewUnsubscriberDocument, baseOptions);
      }
export type NewUnsubscriberSubscriptionHookResult = ReturnType<typeof useNewUnsubscriberSubscription>;
export type NewUnsubscriberSubscriptionResult = Apollo.SubscriptionResult<NewUnsubscriberSubscription>;