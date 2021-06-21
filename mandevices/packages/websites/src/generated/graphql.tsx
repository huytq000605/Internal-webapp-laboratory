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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  eventName?: Maybe<Scalars['String']>;
  atTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<ComponentMediaVideo>>>;
  images?: Maybe<Array<Maybe<ComponentMediaImage>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  values?: Maybe<Array<Maybe<Activity>>>;
  groupBy?: Maybe<ActivityGroupBy>;
  aggregate?: Maybe<ActivityAggregator>;
};

export type ActivityAggregator = {
  __typename?: 'ActivityAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ActivityGroupBy = {
  __typename?: 'ActivityGroupBy';
  id?: Maybe<Array<Maybe<ActivityConnectionId>>>;
  _id?: Maybe<Array<Maybe<ActivityConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ActivityConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ActivityConnectionUpdatedAt>>>;
  eventName?: Maybe<Array<Maybe<ActivityConnectionEventName>>>;
  atTime?: Maybe<Array<Maybe<ActivityConnectionAtTime>>>;
  description?: Maybe<Array<Maybe<ActivityConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<ActivityConnectionPublished_At>>>;
};

export type ActivityConnectionId = {
  __typename?: 'ActivityConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnection_Id = {
  __typename?: 'ActivityConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionCreatedAt = {
  __typename?: 'ActivityConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionUpdatedAt = {
  __typename?: 'ActivityConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionEventName = {
  __typename?: 'ActivityConnectionEventName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionAtTime = {
  __typename?: 'ActivityConnectionAtTime';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionDescription = {
  __typename?: 'ActivityConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionPublished_At = {
  __typename?: 'ActivityConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityInput = {
  eventName?: Maybe<Scalars['String']>;
  atTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<ComponentMediaVideoInput>>>;
  images?: Maybe<Array<Maybe<ComponentMediaImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditActivityInput = {
  eventName?: Maybe<Scalars['String']>;
  atTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<EditComponentMediaVideoInput>>>;
  images?: Maybe<Array<Maybe<EditComponentMediaImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateActivityInput = {
  data?: Maybe<ActivityInput>;
};

export type CreateActivityPayload = {
  __typename?: 'createActivityPayload';
  activity?: Maybe<Activity>;
};

export type UpdateActivityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditActivityInput>;
};

export type UpdateActivityPayload = {
  __typename?: 'updateActivityPayload';
  activity?: Maybe<Activity>;
};

export type DeleteActivityInput = {
  where?: Maybe<InputId>;
};

export type DeleteActivityPayload = {
  __typename?: 'deleteActivityPayload';
  activity?: Maybe<Activity>;
};

export type ChairMan = {
  __typename?: 'ChairMan';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  mainRole?: Maybe<Scalars['String']>;
  subRoles?: Maybe<Array<Maybe<ComponentTextText>>>;
  researchTopics?: Maybe<Array<Maybe<ComponentTextLongText>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ChairManImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ChairManInput = {
  fullName?: Maybe<Scalars['String']>;
  mainRole?: Maybe<Scalars['String']>;
  subRoles?: Maybe<Array<Maybe<ComponentTextTextInput>>>;
  researchTopics?: Maybe<Array<Maybe<ComponentTextLongTextInput>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditChairManInput = {
  fullName?: Maybe<Scalars['String']>;
  mainRole?: Maybe<Scalars['String']>;
  subRoles?: Maybe<Array<Maybe<EditComponentTextTextInput>>>;
  researchTopics?: Maybe<Array<Maybe<EditComponentTextLongTextInput>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateChairManInput = {
  data?: Maybe<EditChairManInput>;
};

export type UpdateChairManPayload = {
  __typename?: 'updateChairManPayload';
  chairMan?: Maybe<ChairMan>;
};

export type DeleteChairManPayload = {
  __typename?: 'deleteChairManPayload';
  chairMan?: Maybe<ChairMan>;
};

export type Contacts = {
  __typename?: 'Contacts';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  member?: Maybe<Members>;
  targets?: Maybe<Array<Maybe<ComponentTextLongText>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  values?: Maybe<Array<Maybe<Contacts>>>;
  groupBy?: Maybe<ContactsGroupBy>;
  aggregate?: Maybe<ContactsAggregator>;
};

export type ContactsAggregator = {
  __typename?: 'ContactsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactsGroupBy = {
  __typename?: 'ContactsGroupBy';
  id?: Maybe<Array<Maybe<ContactsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ContactsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ContactsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ContactsConnectionUpdatedAt>>>;
  member?: Maybe<Array<Maybe<ContactsConnectionMember>>>;
  published_at?: Maybe<Array<Maybe<ContactsConnectionPublished_At>>>;
};

export type ContactsConnectionId = {
  __typename?: 'ContactsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactsConnection_Id = {
  __typename?: 'ContactsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactsConnectionCreatedAt = {
  __typename?: 'ContactsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactsConnectionUpdatedAt = {
  __typename?: 'ContactsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactsConnectionMember = {
  __typename?: 'ContactsConnectionMember';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactsConnectionPublished_At = {
  __typename?: 'ContactsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactsConnection>;
};

export type ContactInput = {
  member?: Maybe<Scalars['ID']>;
  targets?: Maybe<Array<ComponentTextLongTextInput>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditContactInput = {
  member?: Maybe<Scalars['ID']>;
  targets?: Maybe<Array<Maybe<EditComponentTextLongTextInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateContactInput = {
  data?: Maybe<ContactInput>;
};

export type CreateContactPayload = {
  __typename?: 'createContactPayload';
  contact?: Maybe<Contacts>;
};

export type UpdateContactInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContactInput>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contacts>;
};

export type DeleteContactInput = {
  where?: Maybe<InputId>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contacts>;
};

export type DeviceCategories = {
  __typename?: 'DeviceCategories';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  devices?: Maybe<Array<Maybe<Devices>>>;
};


export type DeviceCategoriesDevicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DeviceCategoriesConnection = {
  __typename?: 'DeviceCategoriesConnection';
  values?: Maybe<Array<Maybe<DeviceCategories>>>;
  groupBy?: Maybe<DeviceCategoriesGroupBy>;
  aggregate?: Maybe<DeviceCategoriesAggregator>;
};

export type DeviceCategoriesAggregator = {
  __typename?: 'DeviceCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeviceCategoriesGroupBy = {
  __typename?: 'DeviceCategoriesGroupBy';
  id?: Maybe<Array<Maybe<DeviceCategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<DeviceCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DeviceCategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DeviceCategoriesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<DeviceCategoriesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<DeviceCategoriesConnectionPublished_At>>>;
};

export type DeviceCategoriesConnectionId = {
  __typename?: 'DeviceCategoriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoriesConnection_Id = {
  __typename?: 'DeviceCategoriesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoriesConnectionCreatedAt = {
  __typename?: 'DeviceCategoriesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoriesConnectionUpdatedAt = {
  __typename?: 'DeviceCategoriesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoriesConnectionName = {
  __typename?: 'DeviceCategoriesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoriesConnectionPublished_At = {
  __typename?: 'DeviceCategoriesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceCategoriesConnection>;
};

export type DeviceCategoryInput = {
  name: Scalars['String'];
  devices?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDeviceCategoryInput = {
  name?: Maybe<Scalars['String']>;
  devices?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDeviceCategoryInput = {
  data?: Maybe<DeviceCategoryInput>;
};

export type CreateDeviceCategoryPayload = {
  __typename?: 'createDeviceCategoryPayload';
  deviceCategory?: Maybe<DeviceCategories>;
};

export type UpdateDeviceCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDeviceCategoryInput>;
};

export type UpdateDeviceCategoryPayload = {
  __typename?: 'updateDeviceCategoryPayload';
  deviceCategory?: Maybe<DeviceCategories>;
};

export type DeleteDeviceCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteDeviceCategoryPayload = {
  __typename?: 'deleteDeviceCategoryPayload';
  deviceCategory?: Maybe<DeviceCategories>;
};

export type Devices = {
  __typename?: 'Devices';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  category?: Maybe<DeviceCategories>;
  published_at?: Maybe<Scalars['DateTime']>;
  avatar?: Maybe<Array<Maybe<UploadFile>>>;
};


export type DevicesAvatarArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DevicesConnection = {
  __typename?: 'DevicesConnection';
  values?: Maybe<Array<Maybe<Devices>>>;
  groupBy?: Maybe<DevicesGroupBy>;
  aggregate?: Maybe<DevicesAggregator>;
};

export type DevicesAggregator = {
  __typename?: 'DevicesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DevicesGroupBy = {
  __typename?: 'DevicesGroupBy';
  id?: Maybe<Array<Maybe<DevicesConnectionId>>>;
  _id?: Maybe<Array<Maybe<DevicesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DevicesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DevicesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<DevicesConnectionName>>>;
  model?: Maybe<Array<Maybe<DevicesConnectionModel>>>;
  description?: Maybe<Array<Maybe<DevicesConnectionDescription>>>;
  manufacturer?: Maybe<Array<Maybe<DevicesConnectionManufacturer>>>;
  category?: Maybe<Array<Maybe<DevicesConnectionCategory>>>;
  published_at?: Maybe<Array<Maybe<DevicesConnectionPublished_At>>>;
};

export type DevicesConnectionId = {
  __typename?: 'DevicesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnection_Id = {
  __typename?: 'DevicesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionCreatedAt = {
  __typename?: 'DevicesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionUpdatedAt = {
  __typename?: 'DevicesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionName = {
  __typename?: 'DevicesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionModel = {
  __typename?: 'DevicesConnectionModel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionDescription = {
  __typename?: 'DevicesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionManufacturer = {
  __typename?: 'DevicesConnectionManufacturer';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionCategory = {
  __typename?: 'DevicesConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DevicesConnection>;
};

export type DevicesConnectionPublished_At = {
  __typename?: 'DevicesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevicesConnection>;
};

export type DeviceInput = {
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  avatar?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDeviceInput = {
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  avatar?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDeviceInput = {
  data?: Maybe<DeviceInput>;
};

export type CreateDevicePayload = {
  __typename?: 'createDevicePayload';
  device?: Maybe<Devices>;
};

export type UpdateDeviceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDeviceInput>;
};

export type UpdateDevicePayload = {
  __typename?: 'updateDevicePayload';
  device?: Maybe<Devices>;
};

export type DeleteDeviceInput = {
  where?: Maybe<InputId>;
};

export type DeleteDevicePayload = {
  __typename?: 'deleteDevicePayload';
  device?: Maybe<Devices>;
};

export type DocumentCategories = {
  __typename?: 'DocumentCategories';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<Array<Maybe<Documents>>>;
};


export type DocumentCategoriesDocumentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DocumentCategoriesConnection = {
  __typename?: 'DocumentCategoriesConnection';
  values?: Maybe<Array<Maybe<DocumentCategories>>>;
  groupBy?: Maybe<DocumentCategoriesGroupBy>;
  aggregate?: Maybe<DocumentCategoriesAggregator>;
};

export type DocumentCategoriesAggregator = {
  __typename?: 'DocumentCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DocumentCategoriesGroupBy = {
  __typename?: 'DocumentCategoriesGroupBy';
  id?: Maybe<Array<Maybe<DocumentCategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<DocumentCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DocumentCategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DocumentCategoriesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<DocumentCategoriesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<DocumentCategoriesConnectionPublished_At>>>;
};

export type DocumentCategoriesConnectionId = {
  __typename?: 'DocumentCategoriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoriesConnection_Id = {
  __typename?: 'DocumentCategoriesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoriesConnectionCreatedAt = {
  __typename?: 'DocumentCategoriesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoriesConnectionUpdatedAt = {
  __typename?: 'DocumentCategoriesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoriesConnectionName = {
  __typename?: 'DocumentCategoriesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoriesConnectionPublished_At = {
  __typename?: 'DocumentCategoriesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentCategoriesConnection>;
};

export type DocumentCategoryInput = {
  name: Scalars['String'];
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDocumentCategoryInput = {
  name?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDocumentCategoryInput = {
  data?: Maybe<DocumentCategoryInput>;
};

export type CreateDocumentCategoryPayload = {
  __typename?: 'createDocumentCategoryPayload';
  documentCategory?: Maybe<DocumentCategories>;
};

export type UpdateDocumentCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDocumentCategoryInput>;
};

export type UpdateDocumentCategoryPayload = {
  __typename?: 'updateDocumentCategoryPayload';
  documentCategory?: Maybe<DocumentCategories>;
};

export type DeleteDocumentCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteDocumentCategoryPayload = {
  __typename?: 'deleteDocumentCategoryPayload';
  documentCategory?: Maybe<DocumentCategories>;
};

export type Documents = {
  __typename?: 'Documents';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  file?: Maybe<UploadFile>;
  category?: Maybe<DocumentCategories>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  values?: Maybe<Array<Maybe<Documents>>>;
  groupBy?: Maybe<DocumentsGroupBy>;
  aggregate?: Maybe<DocumentsAggregator>;
};

export type DocumentsAggregator = {
  __typename?: 'DocumentsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DocumentsGroupBy = {
  __typename?: 'DocumentsGroupBy';
  id?: Maybe<Array<Maybe<DocumentsConnectionId>>>;
  _id?: Maybe<Array<Maybe<DocumentsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DocumentsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DocumentsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<DocumentsConnectionName>>>;
  file?: Maybe<Array<Maybe<DocumentsConnectionFile>>>;
  category?: Maybe<Array<Maybe<DocumentsConnectionCategory>>>;
  published_at?: Maybe<Array<Maybe<DocumentsConnectionPublished_At>>>;
};

export type DocumentsConnectionId = {
  __typename?: 'DocumentsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnection_Id = {
  __typename?: 'DocumentsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionCreatedAt = {
  __typename?: 'DocumentsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionUpdatedAt = {
  __typename?: 'DocumentsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionName = {
  __typename?: 'DocumentsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionFile = {
  __typename?: 'DocumentsConnectionFile';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionCategory = {
  __typename?: 'DocumentsConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentsConnectionPublished_At = {
  __typename?: 'DocumentsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DocumentsConnection>;
};

export type DocumentInput = {
  name: Scalars['String'];
  file?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDocumentInput = {
  name?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDocumentInput = {
  data?: Maybe<DocumentInput>;
};

export type CreateDocumentPayload = {
  __typename?: 'createDocumentPayload';
  document?: Maybe<Documents>;
};

export type UpdateDocumentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDocumentInput>;
};

export type UpdateDocumentPayload = {
  __typename?: 'updateDocumentPayload';
  document?: Maybe<Documents>;
};

export type DeleteDocumentInput = {
  where?: Maybe<InputId>;
};

export type DeleteDocumentPayload = {
  __typename?: 'deleteDocumentPayload';
  document?: Maybe<Documents>;
};

export type Events = {
  __typename?: 'Events';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  address?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  values?: Maybe<Array<Maybe<Events>>>;
  groupBy?: Maybe<EventsGroupBy>;
  aggregate?: Maybe<EventsAggregator>;
};

export type EventsAggregator = {
  __typename?: 'EventsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventsGroupBy = {
  __typename?: 'EventsGroupBy';
  id?: Maybe<Array<Maybe<EventsConnectionId>>>;
  _id?: Maybe<Array<Maybe<EventsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<EventsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<EventsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<EventsConnectionName>>>;
  content?: Maybe<Array<Maybe<EventsConnectionContent>>>;
  time?: Maybe<Array<Maybe<EventsConnectionTime>>>;
  address?: Maybe<Array<Maybe<EventsConnectionAddress>>>;
  published_at?: Maybe<Array<Maybe<EventsConnectionPublished_At>>>;
};

export type EventsConnectionId = {
  __typename?: 'EventsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnection_Id = {
  __typename?: 'EventsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionCreatedAt = {
  __typename?: 'EventsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionUpdatedAt = {
  __typename?: 'EventsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionName = {
  __typename?: 'EventsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionContent = {
  __typename?: 'EventsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionTime = {
  __typename?: 'EventsConnectionTime';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionAddress = {
  __typename?: 'EventsConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EventsConnection>;
};

export type EventsConnectionPublished_At = {
  __typename?: 'EventsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EventsConnection>;
};

export type EventInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  address?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEventInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  address?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateEventInput = {
  data?: Maybe<EventInput>;
};

export type CreateEventPayload = {
  __typename?: 'createEventPayload';
  event?: Maybe<Events>;
};

export type UpdateEventInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEventInput>;
};

export type UpdateEventPayload = {
  __typename?: 'updateEventPayload';
  event?: Maybe<Events>;
};

export type DeleteEventInput = {
  where?: Maybe<InputId>;
};

export type DeleteEventPayload = {
  __typename?: 'deleteEventPayload';
  event?: Maybe<Events>;
};

export type Footer = {
  __typename?: 'Footer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  organizationName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  workTime?: Maybe<ComponentTimeWorkTime>;
  extraInfo?: Maybe<Array<Maybe<ComponentTextText>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type FooterInput = {
  organizationName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  workTime?: Maybe<ComponentTimeWorkTimeInput>;
  extraInfo?: Maybe<Array<Maybe<ComponentTextTextInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
  organizationName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  workTime?: Maybe<EditComponentTimeWorkTimeInput>;
  extraInfo?: Maybe<Array<Maybe<EditComponentTextTextInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateFooterInput = {
  data?: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<Footer>;
};

export type DeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer?: Maybe<Footer>;
};

export type HomeSlide = {
  __typename?: 'HomeSlide';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published_at?: Maybe<Scalars['DateTime']>;
  slides?: Maybe<Array<Maybe<UploadFile>>>;
};


export type HomeSlideSlidesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomeSlideInput = {
  slides?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomeSlideInput = {
  slides?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomeSlideInput = {
  data?: Maybe<EditHomeSlideInput>;
};

export type UpdateHomeSlidePayload = {
  __typename?: 'updateHomeSlidePayload';
  homeSlide?: Maybe<HomeSlide>;
};

export type DeleteHomeSlidePayload = {
  __typename?: 'deleteHomeSlidePayload';
  homeSlide?: Maybe<HomeSlide>;
};

export type Introduce = {
  __typename?: 'Introduce';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type IntroduceInput = {
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditIntroduceInput = {
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateIntroduceInput = {
  data?: Maybe<EditIntroduceInput>;
};

export type UpdateIntroducePayload = {
  __typename?: 'updateIntroducePayload';
  introduce?: Maybe<Introduce>;
};

export type DeleteIntroducePayload = {
  __typename?: 'deleteIntroducePayload';
  introduce?: Maybe<Introduce>;
};

export type Leader = {
  __typename?: 'Leader';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  mainInfo?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentSocialSocials>>>;
  mainRole?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type LeaderImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type LeaderInput = {
  fullName?: Maybe<Scalars['String']>;
  mainInfo?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentSocialSocialInput>>>;
  mainRole?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLeaderInput = {
  fullName?: Maybe<Scalars['String']>;
  mainInfo?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<EditComponentSocialSocialInput>>>;
  mainRole?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLeaderInput = {
  data?: Maybe<EditLeaderInput>;
};

export type UpdateLeaderPayload = {
  __typename?: 'updateLeaderPayload';
  leader?: Maybe<Leader>;
};

export type DeleteLeaderPayload = {
  __typename?: 'deleteLeaderPayload';
  leader?: Maybe<Leader>;
};

export type Meetings = {
  __typename?: 'Meetings';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MeetingsConnection = {
  __typename?: 'MeetingsConnection';
  values?: Maybe<Array<Maybe<Meetings>>>;
  groupBy?: Maybe<MeetingsGroupBy>;
  aggregate?: Maybe<MeetingsAggregator>;
};

export type MeetingsAggregator = {
  __typename?: 'MeetingsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MeetingsGroupBy = {
  __typename?: 'MeetingsGroupBy';
  id?: Maybe<Array<Maybe<MeetingsConnectionId>>>;
  _id?: Maybe<Array<Maybe<MeetingsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MeetingsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MeetingsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<MeetingsConnectionTitle>>>;
  content?: Maybe<Array<Maybe<MeetingsConnectionContent>>>;
  address?: Maybe<Array<Maybe<MeetingsConnectionAddress>>>;
  time?: Maybe<Array<Maybe<MeetingsConnectionTime>>>;
  published_at?: Maybe<Array<Maybe<MeetingsConnectionPublished_At>>>;
};

export type MeetingsConnectionId = {
  __typename?: 'MeetingsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnection_Id = {
  __typename?: 'MeetingsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionCreatedAt = {
  __typename?: 'MeetingsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionUpdatedAt = {
  __typename?: 'MeetingsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionTitle = {
  __typename?: 'MeetingsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionContent = {
  __typename?: 'MeetingsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionAddress = {
  __typename?: 'MeetingsConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionTime = {
  __typename?: 'MeetingsConnectionTime';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingsConnectionPublished_At = {
  __typename?: 'MeetingsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MeetingsConnection>;
};

export type MeetingInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMeetingInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMeetingInput = {
  data?: Maybe<MeetingInput>;
};

export type CreateMeetingPayload = {
  __typename?: 'createMeetingPayload';
  meeting?: Maybe<Meetings>;
};

export type UpdateMeetingInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMeetingInput>;
};

export type UpdateMeetingPayload = {
  __typename?: 'updateMeetingPayload';
  meeting?: Maybe<Meetings>;
};

export type DeleteMeetingInput = {
  where?: Maybe<InputId>;
};

export type DeleteMeetingPayload = {
  __typename?: 'deleteMeetingPayload';
  meeting?: Maybe<Meetings>;
};

export enum Enum_Members_Nominalrole {
  Starter = 'starter',
  Member = 'member',
  OldMember = 'old_member',
  Leader = 'leader',
  DeputyLeader = 'deputy_leader',
  OldLeader = 'old_leader',
  MasterStudent = 'master_student',
  DocterStudent = 'docter_student',
  Chairman = 'chairman',
  TeamLeader = 'team_leader',
  DeputyTeamLeader = 'deputy_team_leader'
}

export enum Enum_Members_Degree {
  Bachelor = 'bachelor',
  Engineer = 'engineer',
  Master = 'master',
  Docter = 'docter'
}

export enum Enum_Members_Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type Members = {
  __typename?: 'Members';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['Int']>;
  isOldMember: Scalars['Boolean'];
  isMember: Scalars['Boolean'];
  isMaster: Scalars['Boolean'];
  isReasearcher: Scalars['Boolean'];
  nominalRole?: Maybe<Enum_Members_Nominalrole>;
  degree?: Maybe<Enum_Members_Degree>;
  current_cpa?: Maybe<Scalars['Float']>;
  province?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Members_Gender>;
  school?: Maybe<Scalars['String']>;
  specific?: Maybe<Scalars['String']>;
  introduce?: Maybe<Scalars['String']>;
  shortIntroduce?: Maybe<Scalars['String']>;
  skill?: Maybe<Scalars['String']>;
  Socials?: Maybe<Array<Maybe<ComponentSocialSocials>>>;
  leadTeam?: Maybe<Teams>;
  avatar?: Maybe<UploadFile>;
  phone?: Maybe<Scalars['String']>;
  contact?: Maybe<Contacts>;
  published_at?: Maybe<Scalars['DateTime']>;
  teams?: Maybe<Array<Maybe<Teams>>>;
  posts?: Maybe<Array<Maybe<Posts>>>;
};


export type MembersTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type MembersPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MembersConnection = {
  __typename?: 'MembersConnection';
  values?: Maybe<Array<Maybe<Members>>>;
  groupBy?: Maybe<MembersGroupBy>;
  aggregate?: Maybe<MembersAggregator>;
};

export type MembersAggregator = {
  __typename?: 'MembersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MembersAggregatorSum>;
  avg?: Maybe<MembersAggregatorAvg>;
  min?: Maybe<MembersAggregatorMin>;
  max?: Maybe<MembersAggregatorMax>;
};

export type MembersAggregatorSum = {
  __typename?: 'MembersAggregatorSum';
  course?: Maybe<Scalars['Float']>;
  current_cpa?: Maybe<Scalars['Float']>;
};

export type MembersAggregatorAvg = {
  __typename?: 'MembersAggregatorAvg';
  course?: Maybe<Scalars['Float']>;
  current_cpa?: Maybe<Scalars['Float']>;
};

export type MembersAggregatorMin = {
  __typename?: 'MembersAggregatorMin';
  course?: Maybe<Scalars['Float']>;
  current_cpa?: Maybe<Scalars['Float']>;
};

export type MembersAggregatorMax = {
  __typename?: 'MembersAggregatorMax';
  course?: Maybe<Scalars['Float']>;
  current_cpa?: Maybe<Scalars['Float']>;
};

export type MembersGroupBy = {
  __typename?: 'MembersGroupBy';
  id?: Maybe<Array<Maybe<MembersConnectionId>>>;
  _id?: Maybe<Array<Maybe<MembersConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MembersConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MembersConnectionUpdatedAt>>>;
  fullName?: Maybe<Array<Maybe<MembersConnectionFullName>>>;
  email?: Maybe<Array<Maybe<MembersConnectionEmail>>>;
  course?: Maybe<Array<Maybe<MembersConnectionCourse>>>;
  isOldMember?: Maybe<Array<Maybe<MembersConnectionIsOldMember>>>;
  isMember?: Maybe<Array<Maybe<MembersConnectionIsMember>>>;
  isMaster?: Maybe<Array<Maybe<MembersConnectionIsMaster>>>;
  isReasearcher?: Maybe<Array<Maybe<MembersConnectionIsReasearcher>>>;
  nominalRole?: Maybe<Array<Maybe<MembersConnectionNominalRole>>>;
  degree?: Maybe<Array<Maybe<MembersConnectionDegree>>>;
  current_cpa?: Maybe<Array<Maybe<MembersConnectionCurrent_Cpa>>>;
  province?: Maybe<Array<Maybe<MembersConnectionProvince>>>;
  district?: Maybe<Array<Maybe<MembersConnectionDistrict>>>;
  village?: Maybe<Array<Maybe<MembersConnectionVillage>>>;
  gender?: Maybe<Array<Maybe<MembersConnectionGender>>>;
  school?: Maybe<Array<Maybe<MembersConnectionSchool>>>;
  specific?: Maybe<Array<Maybe<MembersConnectionSpecific>>>;
  introduce?: Maybe<Array<Maybe<MembersConnectionIntroduce>>>;
  shortIntroduce?: Maybe<Array<Maybe<MembersConnectionShortIntroduce>>>;
  skill?: Maybe<Array<Maybe<MembersConnectionSkill>>>;
  leadTeam?: Maybe<Array<Maybe<MembersConnectionLeadTeam>>>;
  avatar?: Maybe<Array<Maybe<MembersConnectionAvatar>>>;
  phone?: Maybe<Array<Maybe<MembersConnectionPhone>>>;
  contact?: Maybe<Array<Maybe<MembersConnectionContact>>>;
  published_at?: Maybe<Array<Maybe<MembersConnectionPublished_At>>>;
};

export type MembersConnectionId = {
  __typename?: 'MembersConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnection_Id = {
  __typename?: 'MembersConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionCreatedAt = {
  __typename?: 'MembersConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionUpdatedAt = {
  __typename?: 'MembersConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionFullName = {
  __typename?: 'MembersConnectionFullName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionEmail = {
  __typename?: 'MembersConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionCourse = {
  __typename?: 'MembersConnectionCourse';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionIsOldMember = {
  __typename?: 'MembersConnectionIsOldMember';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionIsMember = {
  __typename?: 'MembersConnectionIsMember';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionIsMaster = {
  __typename?: 'MembersConnectionIsMaster';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionIsReasearcher = {
  __typename?: 'MembersConnectionIsReasearcher';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionNominalRole = {
  __typename?: 'MembersConnectionNominalRole';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionDegree = {
  __typename?: 'MembersConnectionDegree';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionCurrent_Cpa = {
  __typename?: 'MembersConnectionCurrent_cpa';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionProvince = {
  __typename?: 'MembersConnectionProvince';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionDistrict = {
  __typename?: 'MembersConnectionDistrict';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionVillage = {
  __typename?: 'MembersConnectionVillage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionGender = {
  __typename?: 'MembersConnectionGender';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionSchool = {
  __typename?: 'MembersConnectionSchool';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionSpecific = {
  __typename?: 'MembersConnectionSpecific';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionIntroduce = {
  __typename?: 'MembersConnectionIntroduce';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionShortIntroduce = {
  __typename?: 'MembersConnectionShortIntroduce';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionSkill = {
  __typename?: 'MembersConnectionSkill';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionLeadTeam = {
  __typename?: 'MembersConnectionLeadTeam';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionAvatar = {
  __typename?: 'MembersConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionPhone = {
  __typename?: 'MembersConnectionPhone';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionContact = {
  __typename?: 'MembersConnectionContact';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MembersConnection>;
};

export type MembersConnectionPublished_At = {
  __typename?: 'MembersConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MembersConnection>;
};

export type MemberInput = {
  fullName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['Int']>;
  isOldMember?: Maybe<Scalars['Boolean']>;
  isMember?: Maybe<Scalars['Boolean']>;
  isMaster?: Maybe<Scalars['Boolean']>;
  isReasearcher?: Maybe<Scalars['Boolean']>;
  nominalRole?: Maybe<Enum_Members_Nominalrole>;
  degree?: Maybe<Enum_Members_Degree>;
  current_cpa?: Maybe<Scalars['Float']>;
  province?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gender?: Maybe<Enum_Members_Gender>;
  school?: Maybe<Scalars['String']>;
  specific?: Maybe<Scalars['String']>;
  introduce?: Maybe<Scalars['String']>;
  shortIntroduce?: Maybe<Scalars['String']>;
  skill?: Maybe<Scalars['String']>;
  Socials?: Maybe<Array<Maybe<ComponentSocialSocialInput>>>;
  leadTeam?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMemberInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['Int']>;
  isOldMember?: Maybe<Scalars['Boolean']>;
  isMember?: Maybe<Scalars['Boolean']>;
  isMaster?: Maybe<Scalars['Boolean']>;
  isReasearcher?: Maybe<Scalars['Boolean']>;
  nominalRole?: Maybe<Enum_Members_Nominalrole>;
  degree?: Maybe<Enum_Members_Degree>;
  current_cpa?: Maybe<Scalars['Float']>;
  province?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gender?: Maybe<Enum_Members_Gender>;
  school?: Maybe<Scalars['String']>;
  specific?: Maybe<Scalars['String']>;
  introduce?: Maybe<Scalars['String']>;
  shortIntroduce?: Maybe<Scalars['String']>;
  skill?: Maybe<Scalars['String']>;
  Socials?: Maybe<Array<Maybe<EditComponentSocialSocialInput>>>;
  leadTeam?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMemberInput = {
  data?: Maybe<MemberInput>;
};

export type CreateMemberPayload = {
  __typename?: 'createMemberPayload';
  member?: Maybe<Members>;
};

export type UpdateMemberInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberInput>;
};

export type UpdateMemberPayload = {
  __typename?: 'updateMemberPayload';
  member?: Maybe<Members>;
};

export type DeleteMemberInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberPayload = {
  __typename?: 'deleteMemberPayload';
  member?: Maybe<Members>;
};

export type Newscast = {
  __typename?: 'Newscast';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<UploadFile>;
  hot: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  teams?: Maybe<Array<Maybe<Teams>>>;
};


export type NewscastTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type NewscastConnection = {
  __typename?: 'NewscastConnection';
  values?: Maybe<Array<Maybe<Newscast>>>;
  groupBy?: Maybe<NewscastGroupBy>;
  aggregate?: Maybe<NewscastAggregator>;
};

export type NewscastAggregator = {
  __typename?: 'NewscastAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewscastGroupBy = {
  __typename?: 'NewscastGroupBy';
  id?: Maybe<Array<Maybe<NewscastConnectionId>>>;
  _id?: Maybe<Array<Maybe<NewscastConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<NewscastConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<NewscastConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<NewscastConnectionTitle>>>;
  thumbnail?: Maybe<Array<Maybe<NewscastConnectionThumbnail>>>;
  hot?: Maybe<Array<Maybe<NewscastConnectionHot>>>;
  content?: Maybe<Array<Maybe<NewscastConnectionContent>>>;
  published_at?: Maybe<Array<Maybe<NewscastConnectionPublished_At>>>;
};

export type NewscastConnectionId = {
  __typename?: 'NewscastConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnection_Id = {
  __typename?: 'NewscastConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionCreatedAt = {
  __typename?: 'NewscastConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionUpdatedAt = {
  __typename?: 'NewscastConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionTitle = {
  __typename?: 'NewscastConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionThumbnail = {
  __typename?: 'NewscastConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionHot = {
  __typename?: 'NewscastConnectionHot';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionContent = {
  __typename?: 'NewscastConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastConnectionPublished_At = {
  __typename?: 'NewscastConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewscastConnection>;
};

export type NewscastInput = {
  title?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  hot?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditNewscastInput = {
  title?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  hot?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateNewscastInput = {
  data?: Maybe<NewscastInput>;
};

export type CreateNewscastPayload = {
  __typename?: 'createNewscastPayload';
  newscast?: Maybe<Newscast>;
};

export type UpdateNewscastInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditNewscastInput>;
};

export type UpdateNewscastPayload = {
  __typename?: 'updateNewscastPayload';
  newscast?: Maybe<Newscast>;
};

export type DeleteNewscastInput = {
  where?: Maybe<InputId>;
};

export type DeleteNewscastPayload = {
  __typename?: 'deleteNewscastPayload';
  newscast?: Maybe<Newscast>;
};

export type OldMemberNetwork = {
  __typename?: 'OldMemberNetwork';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  companies?: Maybe<Array<Maybe<ComponentBrandsCompanies>>>;
  countries?: Maybe<Array<Maybe<ComponentCountryCountries>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type OldMemberNetworkInput = {
  companies?: Maybe<Array<Maybe<ComponentBrandsCompanyInput>>>;
  countries?: Maybe<Array<Maybe<ComponentCountryCountryInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOldMemberNetworkInput = {
  companies?: Maybe<Array<Maybe<EditComponentBrandsCompanyInput>>>;
  countries?: Maybe<Array<Maybe<EditComponentCountryCountryInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateOldMemberNetworkInput = {
  data?: Maybe<EditOldMemberNetworkInput>;
};

export type UpdateOldMemberNetworkPayload = {
  __typename?: 'updateOldMemberNetworkPayload';
  oldMemberNetwork?: Maybe<OldMemberNetwork>;
};

export type DeleteOldMemberNetworkPayload = {
  __typename?: 'deleteOldMemberNetworkPayload';
  oldMemberNetwork?: Maybe<OldMemberNetwork>;
};

export type PostCategories = {
  __typename?: 'PostCategories';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parentCategory?: Maybe<PostCategories>;
  published_at?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  subCategories?: Maybe<Array<Maybe<PostCategories>>>;
};


export type PostCategoriesPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type PostCategoriesSubCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PostCategoriesConnection = {
  __typename?: 'PostCategoriesConnection';
  values?: Maybe<Array<Maybe<PostCategories>>>;
  groupBy?: Maybe<PostCategoriesGroupBy>;
  aggregate?: Maybe<PostCategoriesAggregator>;
};

export type PostCategoriesAggregator = {
  __typename?: 'PostCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostCategoriesGroupBy = {
  __typename?: 'PostCategoriesGroupBy';
  id?: Maybe<Array<Maybe<PostCategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<PostCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PostCategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PostCategoriesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<PostCategoriesConnectionName>>>;
  parentCategory?: Maybe<Array<Maybe<PostCategoriesConnectionParentCategory>>>;
  published_at?: Maybe<Array<Maybe<PostCategoriesConnectionPublished_At>>>;
};

export type PostCategoriesConnectionId = {
  __typename?: 'PostCategoriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnection_Id = {
  __typename?: 'PostCategoriesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnectionCreatedAt = {
  __typename?: 'PostCategoriesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnectionUpdatedAt = {
  __typename?: 'PostCategoriesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnectionName = {
  __typename?: 'PostCategoriesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnectionParentCategory = {
  __typename?: 'PostCategoriesConnectionParentCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoriesConnectionPublished_At = {
  __typename?: 'PostCategoriesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostCategoriesConnection>;
};

export type PostCategoryInput = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subCategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentCategory?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostCategoryInput = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subCategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentCategory?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePostCategoryInput = {
  data?: Maybe<PostCategoryInput>;
};

export type CreatePostCategoryPayload = {
  __typename?: 'createPostCategoryPayload';
  postCategory?: Maybe<PostCategories>;
};

export type UpdatePostCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostCategoryInput>;
};

export type UpdatePostCategoryPayload = {
  __typename?: 'updatePostCategoryPayload';
  postCategory?: Maybe<PostCategories>;
};

export type DeletePostCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeletePostCategoryPayload = {
  __typename?: 'deletePostCategoryPayload';
  postCategory?: Maybe<PostCategories>;
};

export type Posts = {
  __typename?: 'Posts';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  thumbnail?: Maybe<UploadFile>;
  content: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ComponentTextText>>>;
  author?: Maybe<Members>;
  published_at?: Maybe<Scalars['DateTime']>;
  categories?: Maybe<Array<Maybe<PostCategories>>>;
  teams?: Maybe<Array<Maybe<Teams>>>;
  createdBy: Author;
  updatedBy: Author;
};


export type PostsCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type PostsTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  values?: Maybe<Array<Maybe<Posts>>>;
  groupBy?: Maybe<PostsGroupBy>;
  aggregate?: Maybe<PostsAggregator>;
};

export type PostsAggregator = {
  __typename?: 'PostsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostsGroupBy = {
  __typename?: 'PostsGroupBy';
  id?: Maybe<Array<Maybe<PostsConnectionId>>>;
  _id?: Maybe<Array<Maybe<PostsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PostsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PostsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<PostsConnectionTitle>>>;
  thumbnail?: Maybe<Array<Maybe<PostsConnectionThumbnail>>>;
  content?: Maybe<Array<Maybe<PostsConnectionContent>>>;
  shortDescription?: Maybe<Array<Maybe<PostsConnectionShortDescription>>>;
  author?: Maybe<Array<Maybe<PostsConnectionAuthor>>>;
  published_at?: Maybe<Array<Maybe<PostsConnectionPublished_At>>>;
};

export type PostsConnectionId = {
  __typename?: 'PostsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnection_Id = {
  __typename?: 'PostsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionCreatedAt = {
  __typename?: 'PostsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionUpdatedAt = {
  __typename?: 'PostsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionTitle = {
  __typename?: 'PostsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionThumbnail = {
  __typename?: 'PostsConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionContent = {
  __typename?: 'PostsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionShortDescription = {
  __typename?: 'PostsConnectionShortDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionAuthor = {
  __typename?: 'PostsConnectionAuthor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionPublished_At = {
  __typename?: 'PostsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostInput = {
  title: Scalars['String'];
  thumbnail?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ComponentTextTextInput>>>;
  author?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  title?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<EditComponentTextTextInput>>>;
  author?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Posts>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Posts>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Posts>;
};

export enum Enum_Products_Type {
  Datn = 'DATN',
  Nckh = 'NCKH',
  Da = 'DA'
}

export type Products = {
  __typename?: 'Products';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  functions?: Maybe<Array<Maybe<ComponentTextLongText>>>;
  extraInfo?: Maybe<Array<Maybe<ComponentTextLongText>>>;
  type?: Maybe<Enum_Products_Type>;
  semester?: Maybe<Scalars['Int']>;
  descriptions?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  published_at?: Maybe<Scalars['DateTime']>;
  performers?: Maybe<Array<Maybe<Members>>>;
  instructors?: Maybe<Array<Maybe<Members>>>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ProductsPerformersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ProductsInstructorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ProductsImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  values?: Maybe<Array<Maybe<Products>>>;
  groupBy?: Maybe<ProductsGroupBy>;
  aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductsAggregatorSum>;
  avg?: Maybe<ProductsAggregatorAvg>;
  min?: Maybe<ProductsAggregatorMin>;
  max?: Maybe<ProductsAggregatorMax>;
};

export type ProductsAggregatorSum = {
  __typename?: 'ProductsAggregatorSum';
  semester?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorAvg = {
  __typename?: 'ProductsAggregatorAvg';
  semester?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorMin = {
  __typename?: 'ProductsAggregatorMin';
  semester?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorMax = {
  __typename?: 'ProductsAggregatorMax';
  semester?: Maybe<Scalars['Float']>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ProductsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProductsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ProductsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ProductsConnectionName>>>;
  type?: Maybe<Array<Maybe<ProductsConnectionType>>>;
  semester?: Maybe<Array<Maybe<ProductsConnectionSemester>>>;
  descriptions?: Maybe<Array<Maybe<ProductsConnectionDescriptions>>>;
  project?: Maybe<Array<Maybe<ProductsConnectionProject>>>;
  published_at?: Maybe<Array<Maybe<ProductsConnectionPublished_At>>>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnection_Id = {
  __typename?: 'ProductsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionCreatedAt = {
  __typename?: 'ProductsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdatedAt = {
  __typename?: 'ProductsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionName = {
  __typename?: 'ProductsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionType = {
  __typename?: 'ProductsConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionSemester = {
  __typename?: 'ProductsConnectionSemester';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionDescriptions = {
  __typename?: 'ProductsConnectionDescriptions';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionProject = {
  __typename?: 'ProductsConnectionProject';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPublished_At = {
  __typename?: 'ProductsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductInput = {
  name: Scalars['String'];
  functions?: Maybe<Array<Maybe<ComponentTextLongTextInput>>>;
  extraInfo?: Maybe<Array<Maybe<ComponentTextLongTextInput>>>;
  performers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  instructors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Enum_Products_Type>;
  semester?: Maybe<Scalars['Int']>;
  descriptions?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>;
  functions?: Maybe<Array<Maybe<EditComponentTextLongTextInput>>>;
  extraInfo?: Maybe<Array<Maybe<EditComponentTextLongTextInput>>>;
  performers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  instructors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Enum_Products_Type>;
  semester?: Maybe<Scalars['Int']>;
  descriptions?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
};

export enum Enum_Project_Level {
  National = 'national',
  Ministry = 'ministry',
  School = 'school'
}

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  startYear: Scalars['Int'];
  endYear?: Maybe<Scalars['Int']>;
  level: Enum_Project_Level;
  source?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  products?: Maybe<Array<Maybe<Products>>>;
};


export type ProjectProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  values?: Maybe<Array<Maybe<Project>>>;
  groupBy?: Maybe<ProjectGroupBy>;
  aggregate?: Maybe<ProjectAggregator>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProjectAggregatorSum>;
  avg?: Maybe<ProjectAggregatorAvg>;
  min?: Maybe<ProjectAggregatorMin>;
  max?: Maybe<ProjectAggregatorMax>;
};

export type ProjectAggregatorSum = {
  __typename?: 'ProjectAggregatorSum';
  startYear?: Maybe<Scalars['Float']>;
  endYear?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorAvg = {
  __typename?: 'ProjectAggregatorAvg';
  startYear?: Maybe<Scalars['Float']>;
  endYear?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMin = {
  __typename?: 'ProjectAggregatorMin';
  startYear?: Maybe<Scalars['Float']>;
  endYear?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMax = {
  __typename?: 'ProjectAggregatorMax';
  startYear?: Maybe<Scalars['Float']>;
  endYear?: Maybe<Scalars['Float']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
  _id?: Maybe<Array<Maybe<ProjectConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProjectConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ProjectConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ProjectConnectionName>>>;
  startYear?: Maybe<Array<Maybe<ProjectConnectionStartYear>>>;
  endYear?: Maybe<Array<Maybe<ProjectConnectionEndYear>>>;
  level?: Maybe<Array<Maybe<ProjectConnectionLevel>>>;
  source?: Maybe<Array<Maybe<ProjectConnectionSource>>>;
  published_at?: Maybe<Array<Maybe<ProjectConnectionPublished_At>>>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnection_Id = {
  __typename?: 'ProjectConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreatedAt = {
  __typename?: 'ProjectConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdatedAt = {
  __typename?: 'ProjectConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionName = {
  __typename?: 'ProjectConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionStartYear = {
  __typename?: 'ProjectConnectionStartYear';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionEndYear = {
  __typename?: 'ProjectConnectionEndYear';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionLevel = {
  __typename?: 'ProjectConnectionLevel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionSource = {
  __typename?: 'ProjectConnectionSource';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectInput = {
  name: Scalars['String'];
  startYear: Scalars['Int'];
  endYear?: Maybe<Scalars['Int']>;
  level: Enum_Project_Level;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  source?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  name?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  endYear?: Maybe<Scalars['Int']>;
  level?: Maybe<Enum_Project_Level>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  source?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProjectInput>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export enum Enum_Publications_Type {
  Domestic = 'domestic',
  International = 'international'
}

export type Publications = {
  __typename?: 'Publications';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  authors: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  journalConference?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  publishingTime?: Maybe<Scalars['Date']>;
  issn?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Publications_Type>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PublicationsConnection = {
  __typename?: 'PublicationsConnection';
  values?: Maybe<Array<Maybe<Publications>>>;
  groupBy?: Maybe<PublicationsGroupBy>;
  aggregate?: Maybe<PublicationsAggregator>;
};

export type PublicationsAggregator = {
  __typename?: 'PublicationsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PublicationsGroupBy = {
  __typename?: 'PublicationsGroupBy';
  id?: Maybe<Array<Maybe<PublicationsConnectionId>>>;
  _id?: Maybe<Array<Maybe<PublicationsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PublicationsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PublicationsConnectionUpdatedAt>>>;
  authors?: Maybe<Array<Maybe<PublicationsConnectionAuthors>>>;
  name?: Maybe<Array<Maybe<PublicationsConnectionName>>>;
  journalConference?: Maybe<Array<Maybe<PublicationsConnectionJournalConference>>>;
  edition?: Maybe<Array<Maybe<PublicationsConnectionEdition>>>;
  publishingTime?: Maybe<Array<Maybe<PublicationsConnectionPublishingTime>>>;
  issn?: Maybe<Array<Maybe<PublicationsConnectionIssn>>>;
  isbn?: Maybe<Array<Maybe<PublicationsConnectionIsbn>>>;
  type?: Maybe<Array<Maybe<PublicationsConnectionType>>>;
  published_at?: Maybe<Array<Maybe<PublicationsConnectionPublished_At>>>;
};

export type PublicationsConnectionId = {
  __typename?: 'PublicationsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnection_Id = {
  __typename?: 'PublicationsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionCreatedAt = {
  __typename?: 'PublicationsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionUpdatedAt = {
  __typename?: 'PublicationsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionAuthors = {
  __typename?: 'PublicationsConnectionAuthors';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionName = {
  __typename?: 'PublicationsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionJournalConference = {
  __typename?: 'PublicationsConnectionJournalConference';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionEdition = {
  __typename?: 'PublicationsConnectionEdition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionPublishingTime = {
  __typename?: 'PublicationsConnectionPublishingTime';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionIssn = {
  __typename?: 'PublicationsConnectionIssn';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionIsbn = {
  __typename?: 'PublicationsConnectionIsbn';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionType = {
  __typename?: 'PublicationsConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationsConnectionPublished_At = {
  __typename?: 'PublicationsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationsConnection>;
};

export type PublicationInput = {
  authors: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  journalConference?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  publishingTime?: Maybe<Scalars['Date']>;
  issn?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Publications_Type>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPublicationInput = {
  authors?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  journalConference?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  publishingTime?: Maybe<Scalars['Date']>;
  issn?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Publications_Type>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePublicationInput = {
  data?: Maybe<PublicationInput>;
};

export type CreatePublicationPayload = {
  __typename?: 'createPublicationPayload';
  publication?: Maybe<Publications>;
};

export type UpdatePublicationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPublicationInput>;
};

export type UpdatePublicationPayload = {
  __typename?: 'updatePublicationPayload';
  publication?: Maybe<Publications>;
};

export type DeletePublicationInput = {
  where?: Maybe<InputId>;
};

export type DeletePublicationPayload = {
  __typename?: 'deletePublicationPayload';
  publication?: Maybe<Publications>;
};

export type ResearchTopics = {
  __typename?: 'ResearchTopics';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  shortDescriptions?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ResearchTopicsConnection = {
  __typename?: 'ResearchTopicsConnection';
  values?: Maybe<Array<Maybe<ResearchTopics>>>;
  groupBy?: Maybe<ResearchTopicsGroupBy>;
  aggregate?: Maybe<ResearchTopicsAggregator>;
};

export type ResearchTopicsAggregator = {
  __typename?: 'ResearchTopicsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResearchTopicsGroupBy = {
  __typename?: 'ResearchTopicsGroupBy';
  id?: Maybe<Array<Maybe<ResearchTopicsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ResearchTopicsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ResearchTopicsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ResearchTopicsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ResearchTopicsConnectionName>>>;
  shortDescriptions?: Maybe<Array<Maybe<ResearchTopicsConnectionShortDescriptions>>>;
  descriptions?: Maybe<Array<Maybe<ResearchTopicsConnectionDescriptions>>>;
  image?: Maybe<Array<Maybe<ResearchTopicsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<ResearchTopicsConnectionPublished_At>>>;
};

export type ResearchTopicsConnectionId = {
  __typename?: 'ResearchTopicsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnection_Id = {
  __typename?: 'ResearchTopicsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionCreatedAt = {
  __typename?: 'ResearchTopicsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionUpdatedAt = {
  __typename?: 'ResearchTopicsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionName = {
  __typename?: 'ResearchTopicsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionShortDescriptions = {
  __typename?: 'ResearchTopicsConnectionShortDescriptions';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionDescriptions = {
  __typename?: 'ResearchTopicsConnectionDescriptions';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionImage = {
  __typename?: 'ResearchTopicsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicsConnectionPublished_At = {
  __typename?: 'ResearchTopicsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResearchTopicsConnection>;
};

export type ResearchTopicInput = {
  name: Scalars['String'];
  shortDescriptions?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditResearchTopicInput = {
  name?: Maybe<Scalars['String']>;
  shortDescriptions?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateResearchTopicInput = {
  data?: Maybe<ResearchTopicInput>;
};

export type CreateResearchTopicPayload = {
  __typename?: 'createResearchTopicPayload';
  researchTopic?: Maybe<ResearchTopics>;
};

export type UpdateResearchTopicInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditResearchTopicInput>;
};

export type UpdateResearchTopicPayload = {
  __typename?: 'updateResearchTopicPayload';
  researchTopic?: Maybe<ResearchTopics>;
};

export type DeleteResearchTopicInput = {
  where?: Maybe<InputId>;
};

export type DeleteResearchTopicPayload = {
  __typename?: 'deleteResearchTopicPayload';
  researchTopic?: Maybe<ResearchTopics>;
};

export type Rule = {
  __typename?: 'Rule';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type RuleInput = {
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRuleInput = {
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRuleInput = {
  data?: Maybe<EditRuleInput>;
};

export type UpdateRulePayload = {
  __typename?: 'updateRulePayload';
  rule?: Maybe<Rule>;
};

export type DeleteRulePayload = {
  __typename?: 'deleteRulePayload';
  rule?: Maybe<Rule>;
};

export enum Enum_Section_Type {
  Member = 'member'
}

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type?: Maybe<Enum_Section_Type>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ComponentInfoContents>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type SectionImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SectionConnection = {
  __typename?: 'SectionConnection';
  values?: Maybe<Array<Maybe<Section>>>;
  groupBy?: Maybe<SectionGroupBy>;
  aggregate?: Maybe<SectionAggregator>;
};

export type SectionAggregator = {
  __typename?: 'SectionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SectionGroupBy = {
  __typename?: 'SectionGroupBy';
  id?: Maybe<Array<Maybe<SectionConnectionId>>>;
  _id?: Maybe<Array<Maybe<SectionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SectionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SectionConnectionUpdatedAt>>>;
  type?: Maybe<Array<Maybe<SectionConnectionType>>>;
  title?: Maybe<Array<Maybe<SectionConnectionTitle>>>;
  subTitle?: Maybe<Array<Maybe<SectionConnectionSubTitle>>>;
  published_at?: Maybe<Array<Maybe<SectionConnectionPublished_At>>>;
};

export type SectionConnectionId = {
  __typename?: 'SectionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnection_Id = {
  __typename?: 'SectionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionCreatedAt = {
  __typename?: 'SectionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionUpdatedAt = {
  __typename?: 'SectionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionType = {
  __typename?: 'SectionConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionTitle = {
  __typename?: 'SectionConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionSubTitle = {
  __typename?: 'SectionConnectionSubTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionConnectionPublished_At = {
  __typename?: 'SectionConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SectionConnection>;
};

export type SectionInput = {
  type?: Maybe<Enum_Section_Type>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ComponentInfoContentInput>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSectionInput = {
  type?: Maybe<Enum_Section_Type>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<EditComponentInfoContentInput>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSectionInput = {
  data?: Maybe<SectionInput>;
};

export type CreateSectionPayload = {
  __typename?: 'createSectionPayload';
  section?: Maybe<Section>;
};

export type UpdateSectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSectionInput>;
};

export type UpdateSectionPayload = {
  __typename?: 'updateSectionPayload';
  section?: Maybe<Section>;
};

export type DeleteSectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteSectionPayload = {
  __typename?: 'deleteSectionPayload';
  section?: Maybe<Section>;
};

export type Teams = {
  __typename?: 'Teams';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<UploadFile>;
  descriptions?: Maybe<Scalars['String']>;
  leader?: Maybe<Members>;
  shortDescription?: Maybe<Scalars['String']>;
  profiles?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  members?: Maybe<Array<Maybe<Members>>>;
  news?: Maybe<Array<Maybe<Newscast>>>;
  posts?: Maybe<Array<Maybe<Posts>>>;
};


export type TeamsMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TeamsNewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TeamsPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TeamsConnection = {
  __typename?: 'TeamsConnection';
  values?: Maybe<Array<Maybe<Teams>>>;
  groupBy?: Maybe<TeamsGroupBy>;
  aggregate?: Maybe<TeamsAggregator>;
};

export type TeamsAggregator = {
  __typename?: 'TeamsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TeamsGroupBy = {
  __typename?: 'TeamsGroupBy';
  id?: Maybe<Array<Maybe<TeamsConnectionId>>>;
  _id?: Maybe<Array<Maybe<TeamsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TeamsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TeamsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<TeamsConnectionName>>>;
  avatar?: Maybe<Array<Maybe<TeamsConnectionAvatar>>>;
  descriptions?: Maybe<Array<Maybe<TeamsConnectionDescriptions>>>;
  leader?: Maybe<Array<Maybe<TeamsConnectionLeader>>>;
  shortDescription?: Maybe<Array<Maybe<TeamsConnectionShortDescription>>>;
  profiles?: Maybe<Array<Maybe<TeamsConnectionProfiles>>>;
  published_at?: Maybe<Array<Maybe<TeamsConnectionPublished_At>>>;
};

export type TeamsConnectionId = {
  __typename?: 'TeamsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnection_Id = {
  __typename?: 'TeamsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionCreatedAt = {
  __typename?: 'TeamsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionUpdatedAt = {
  __typename?: 'TeamsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionName = {
  __typename?: 'TeamsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionAvatar = {
  __typename?: 'TeamsConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionDescriptions = {
  __typename?: 'TeamsConnectionDescriptions';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionLeader = {
  __typename?: 'TeamsConnectionLeader';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionShortDescription = {
  __typename?: 'TeamsConnectionShortDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionProfiles = {
  __typename?: 'TeamsConnectionProfiles';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamsConnectionPublished_At = {
  __typename?: 'TeamsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamsConnection>;
};

export type TeamInput = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['ID']>;
  descriptions?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  leader?: Maybe<Scalars['ID']>;
  shortDescription?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<Scalars['ID']>>>;
  profiles?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['ID']>;
  descriptions?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  leader?: Maybe<Scalars['ID']>;
  shortDescription?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<Scalars['ID']>>>;
  profiles?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTeamInput = {
  data?: Maybe<TeamInput>;
};

export type CreateTeamPayload = {
  __typename?: 'createTeamPayload';
  team?: Maybe<Teams>;
};

export type UpdateTeamInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  __typename?: 'updateTeamPayload';
  team?: Maybe<Teams>;
};

export type DeleteTeamInput = {
  where?: Maybe<InputId>;
};

export type DeleteTeamPayload = {
  __typename?: 'deleteTeamPayload';
  team?: Maybe<Teams>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentBrandsCompanies = {
  __typename?: 'ComponentBrandsCompanies';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
};

export type ComponentBrandsCompanyInput = {
  logo?: Maybe<Scalars['ID']>;
};

export type EditComponentBrandsCompanyInput = {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
};

export type ComponentCountryCountries = {
  __typename?: 'ComponentCountryCountries';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  flag?: Maybe<UploadFile>;
  universities?: Maybe<Array<Maybe<ComponentUniversityUniversities>>>;
};

export type ComponentCountryCountryInput = {
  name?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['ID']>;
  universities?: Maybe<Array<Maybe<ComponentUniversityUniversityInput>>>;
};

export type EditComponentCountryCountryInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['ID']>;
  universities?: Maybe<Array<Maybe<EditComponentUniversityUniversityInput>>>;
};

export type ComponentInfoContents = {
  __typename?: 'ComponentInfoContents';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  heading?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<ComponentTextLongText>>>;
};

export type ComponentInfoContentInput = {
  heading?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<ComponentTextLongTextInput>>>;
};

export type EditComponentInfoContentInput = {
  id?: Maybe<Scalars['ID']>;
  heading?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<EditComponentTextLongTextInput>>>;
};

export type ComponentMediaImage = {
  __typename?: 'ComponentMediaImage';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentMediaImageImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentMediaImageInput = {
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentMediaImageInput = {
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentMediaVideo = {
  __typename?: 'ComponentMediaVideo';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  youTubeVideoId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentMediaVideoInput = {
  youTubeVideoId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentMediaVideoInput = {
  id?: Maybe<Scalars['ID']>;
  youTubeVideoId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum Enum_Componentsocialsocials_Provider {
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Tiktok = 'Tiktok'
}

export type ComponentSocialSocials = {
  __typename?: 'ComponentSocialSocials';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  provider?: Maybe<Enum_Componentsocialsocials_Provider>;
  address?: Maybe<Scalars['String']>;
};

export type ComponentSocialSocialInput = {
  provider?: Maybe<Enum_Componentsocialsocials_Provider>;
  address?: Maybe<Scalars['String']>;
};

export type EditComponentSocialSocialInput = {
  id?: Maybe<Scalars['ID']>;
  provider?: Maybe<Enum_Componentsocialsocials_Provider>;
  address?: Maybe<Scalars['String']>;
};

export type ComponentTextLongText = {
  __typename?: 'ComponentTextLongText';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentTextLongTextInput = {
  title?: Maybe<Scalars['String']>;
};

export type EditComponentTextLongTextInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentTextText = {
  __typename?: 'ComponentTextText';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentTextTextInput = {
  title?: Maybe<Scalars['String']>;
};

export type EditComponentTextTextInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentTimeWorkTime = {
  __typename?: 'ComponentTimeWorkTime';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ComponentTimeWorkTimeInput = {
  info?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type EditComponentTimeWorkTimeInput = {
  id?: Maybe<Scalars['ID']>;
  info?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ComponentUniversityUniversities = {
  __typename?: 'ComponentUniversityUniversities';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Maybe<Members>>>;
};


export type ComponentUniversityUniversitiesStudentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentUniversityUniversityInput = {
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentUniversityUniversityInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Morph = Author | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Activity | ActivityConnection | ActivityAggregator | ActivityGroupBy | ActivityConnectionId | ActivityConnection_Id | ActivityConnectionCreatedAt | ActivityConnectionUpdatedAt | ActivityConnectionEventName | ActivityConnectionAtTime | ActivityConnectionDescription | ActivityConnectionPublished_At | CreateActivityPayload | UpdateActivityPayload | DeleteActivityPayload | ChairMan | UpdateChairManPayload | DeleteChairManPayload | Contacts | ContactsConnection | ContactsAggregator | ContactsGroupBy | ContactsConnectionId | ContactsConnection_Id | ContactsConnectionCreatedAt | ContactsConnectionUpdatedAt | ContactsConnectionMember | ContactsConnectionPublished_At | CreateContactPayload | UpdateContactPayload | DeleteContactPayload | DeviceCategories | DeviceCategoriesConnection | DeviceCategoriesAggregator | DeviceCategoriesGroupBy | DeviceCategoriesConnectionId | DeviceCategoriesConnection_Id | DeviceCategoriesConnectionCreatedAt | DeviceCategoriesConnectionUpdatedAt | DeviceCategoriesConnectionName | DeviceCategoriesConnectionPublished_At | CreateDeviceCategoryPayload | UpdateDeviceCategoryPayload | DeleteDeviceCategoryPayload | Devices | DevicesConnection | DevicesAggregator | DevicesGroupBy | DevicesConnectionId | DevicesConnection_Id | DevicesConnectionCreatedAt | DevicesConnectionUpdatedAt | DevicesConnectionName | DevicesConnectionModel | DevicesConnectionDescription | DevicesConnectionManufacturer | DevicesConnectionCategory | DevicesConnectionPublished_At | CreateDevicePayload | UpdateDevicePayload | DeleteDevicePayload | DocumentCategories | DocumentCategoriesConnection | DocumentCategoriesAggregator | DocumentCategoriesGroupBy | DocumentCategoriesConnectionId | DocumentCategoriesConnection_Id | DocumentCategoriesConnectionCreatedAt | DocumentCategoriesConnectionUpdatedAt | DocumentCategoriesConnectionName | DocumentCategoriesConnectionPublished_At | CreateDocumentCategoryPayload | UpdateDocumentCategoryPayload | DeleteDocumentCategoryPayload | Documents | DocumentsConnection | DocumentsAggregator | DocumentsGroupBy | DocumentsConnectionId | DocumentsConnection_Id | DocumentsConnectionCreatedAt | DocumentsConnectionUpdatedAt | DocumentsConnectionName | DocumentsConnectionFile | DocumentsConnectionCategory | DocumentsConnectionPublished_At | CreateDocumentPayload | UpdateDocumentPayload | DeleteDocumentPayload | Events | EventsConnection | EventsAggregator | EventsGroupBy | EventsConnectionId | EventsConnection_Id | EventsConnectionCreatedAt | EventsConnectionUpdatedAt | EventsConnectionName | EventsConnectionContent | EventsConnectionTime | EventsConnectionAddress | EventsConnectionPublished_At | CreateEventPayload | UpdateEventPayload | DeleteEventPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | HomeSlide | UpdateHomeSlidePayload | DeleteHomeSlidePayload | Introduce | UpdateIntroducePayload | DeleteIntroducePayload | Leader | UpdateLeaderPayload | DeleteLeaderPayload | Meetings | MeetingsConnection | MeetingsAggregator | MeetingsGroupBy | MeetingsConnectionId | MeetingsConnection_Id | MeetingsConnectionCreatedAt | MeetingsConnectionUpdatedAt | MeetingsConnectionTitle | MeetingsConnectionContent | MeetingsConnectionAddress | MeetingsConnectionTime | MeetingsConnectionPublished_At | CreateMeetingPayload | UpdateMeetingPayload | DeleteMeetingPayload | Members | MembersConnection | MembersAggregator | MembersAggregatorSum | MembersAggregatorAvg | MembersAggregatorMin | MembersAggregatorMax | MembersGroupBy | MembersConnectionId | MembersConnection_Id | MembersConnectionCreatedAt | MembersConnectionUpdatedAt | MembersConnectionFullName | MembersConnectionEmail | MembersConnectionCourse | MembersConnectionIsOldMember | MembersConnectionIsMember | MembersConnectionIsMaster | MembersConnectionIsReasearcher | MembersConnectionNominalRole | MembersConnectionDegree | MembersConnectionCurrent_Cpa | MembersConnectionProvince | MembersConnectionDistrict | MembersConnectionVillage | MembersConnectionGender | MembersConnectionSchool | MembersConnectionSpecific | MembersConnectionIntroduce | MembersConnectionShortIntroduce | MembersConnectionSkill | MembersConnectionLeadTeam | MembersConnectionAvatar | MembersConnectionPhone | MembersConnectionContact | MembersConnectionPublished_At | CreateMemberPayload | UpdateMemberPayload | DeleteMemberPayload | Newscast | NewscastConnection | NewscastAggregator | NewscastGroupBy | NewscastConnectionId | NewscastConnection_Id | NewscastConnectionCreatedAt | NewscastConnectionUpdatedAt | NewscastConnectionTitle | NewscastConnectionThumbnail | NewscastConnectionHot | NewscastConnectionContent | NewscastConnectionPublished_At | CreateNewscastPayload | UpdateNewscastPayload | DeleteNewscastPayload | OldMemberNetwork | UpdateOldMemberNetworkPayload | DeleteOldMemberNetworkPayload | PostCategories | PostCategoriesConnection | PostCategoriesAggregator | PostCategoriesGroupBy | PostCategoriesConnectionId | PostCategoriesConnection_Id | PostCategoriesConnectionCreatedAt | PostCategoriesConnectionUpdatedAt | PostCategoriesConnectionName | PostCategoriesConnectionParentCategory | PostCategoriesConnectionPublished_At | CreatePostCategoryPayload | UpdatePostCategoryPayload | DeletePostCategoryPayload | Posts | PostsConnection | PostsAggregator | PostsGroupBy | PostsConnectionId | PostsConnection_Id | PostsConnectionCreatedAt | PostsConnectionUpdatedAt | PostsConnectionTitle | PostsConnectionThumbnail | PostsConnectionContent | PostsConnectionShortDescription | PostsConnectionAuthor | PostsConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Products | ProductsConnection | ProductsAggregator | ProductsAggregatorSum | ProductsAggregatorAvg | ProductsAggregatorMin | ProductsAggregatorMax | ProductsGroupBy | ProductsConnectionId | ProductsConnection_Id | ProductsConnectionCreatedAt | ProductsConnectionUpdatedAt | ProductsConnectionName | ProductsConnectionType | ProductsConnectionSemester | ProductsConnectionDescriptions | ProductsConnectionProject | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Project | ProjectConnection | ProjectAggregator | ProjectAggregatorSum | ProjectAggregatorAvg | ProjectAggregatorMin | ProjectAggregatorMax | ProjectGroupBy | ProjectConnectionId | ProjectConnection_Id | ProjectConnectionCreatedAt | ProjectConnectionUpdatedAt | ProjectConnectionName | ProjectConnectionStartYear | ProjectConnectionEndYear | ProjectConnectionLevel | ProjectConnectionSource | ProjectConnectionPublished_At | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | Publications | PublicationsConnection | PublicationsAggregator | PublicationsGroupBy | PublicationsConnectionId | PublicationsConnection_Id | PublicationsConnectionCreatedAt | PublicationsConnectionUpdatedAt | PublicationsConnectionAuthors | PublicationsConnectionName | PublicationsConnectionJournalConference | PublicationsConnectionEdition | PublicationsConnectionPublishingTime | PublicationsConnectionIssn | PublicationsConnectionIsbn | PublicationsConnectionType | PublicationsConnectionPublished_At | CreatePublicationPayload | UpdatePublicationPayload | DeletePublicationPayload | ResearchTopics | ResearchTopicsConnection | ResearchTopicsAggregator | ResearchTopicsGroupBy | ResearchTopicsConnectionId | ResearchTopicsConnection_Id | ResearchTopicsConnectionCreatedAt | ResearchTopicsConnectionUpdatedAt | ResearchTopicsConnectionName | ResearchTopicsConnectionShortDescriptions | ResearchTopicsConnectionDescriptions | ResearchTopicsConnectionImage | ResearchTopicsConnectionPublished_At | CreateResearchTopicPayload | UpdateResearchTopicPayload | DeleteResearchTopicPayload | Rule | UpdateRulePayload | DeleteRulePayload | Section | SectionConnection | SectionAggregator | SectionGroupBy | SectionConnectionId | SectionConnection_Id | SectionConnectionCreatedAt | SectionConnectionUpdatedAt | SectionConnectionType | SectionConnectionTitle | SectionConnectionSubTitle | SectionConnectionPublished_At | CreateSectionPayload | UpdateSectionPayload | DeleteSectionPayload | Teams | TeamsConnection | TeamsAggregator | TeamsGroupBy | TeamsConnectionId | TeamsConnection_Id | TeamsConnectionCreatedAt | TeamsConnectionUpdatedAt | TeamsConnectionName | TeamsConnectionAvatar | TeamsConnectionDescriptions | TeamsConnectionLeader | TeamsConnectionShortDescription | TeamsConnectionProfiles | TeamsConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentBrandsCompanies | ComponentCountryCountries | ComponentInfoContents | ComponentMediaImage | ComponentMediaVideo | ComponentSocialSocials | ComponentTextLongText | ComponentTextText | ComponentTimeWorkTime | ComponentUniversityUniversities;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  activity?: Maybe<Activity>;
  activities?: Maybe<Array<Maybe<Activity>>>;
  activitiesConnection?: Maybe<ActivityConnection>;
  chairMan?: Maybe<ChairMan>;
  contact?: Maybe<Contacts>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  contactsConnection?: Maybe<ContactsConnection>;
  deviceCategory?: Maybe<DeviceCategories>;
  deviceCategories?: Maybe<Array<Maybe<DeviceCategories>>>;
  deviceCategoriesConnection?: Maybe<DeviceCategoriesConnection>;
  device?: Maybe<Devices>;
  devices?: Maybe<Array<Maybe<Devices>>>;
  devicesConnection?: Maybe<DevicesConnection>;
  documentCategory?: Maybe<DocumentCategories>;
  documentCategories?: Maybe<Array<Maybe<DocumentCategories>>>;
  documentCategoriesConnection?: Maybe<DocumentCategoriesConnection>;
  document?: Maybe<Documents>;
  documents?: Maybe<Array<Maybe<Documents>>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  event?: Maybe<Events>;
  events?: Maybe<Array<Maybe<Events>>>;
  eventsConnection?: Maybe<EventsConnection>;
  footer?: Maybe<Footer>;
  homeSlide?: Maybe<HomeSlide>;
  introduce?: Maybe<Introduce>;
  leader?: Maybe<Leader>;
  meeting?: Maybe<Meetings>;
  meetings?: Maybe<Array<Maybe<Meetings>>>;
  meetingsConnection?: Maybe<MeetingsConnection>;
  member?: Maybe<Members>;
  members?: Maybe<Array<Maybe<Members>>>;
  membersConnection?: Maybe<MembersConnection>;
  newscast?: Maybe<Newscast>;
  newscasts?: Maybe<Array<Maybe<Newscast>>>;
  newscastsConnection?: Maybe<NewscastConnection>;
  oldMemberNetwork?: Maybe<OldMemberNetwork>;
  postCategory?: Maybe<PostCategories>;
  postCategories?: Maybe<Array<Maybe<PostCategories>>>;
  postCategoriesConnection?: Maybe<PostCategoriesConnection>;
  post?: Maybe<Posts>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  postsConnection?: Maybe<PostsConnection>;
  product?: Maybe<Products>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsConnection?: Maybe<ProductsConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projectsConnection?: Maybe<ProjectConnection>;
  publication?: Maybe<Publications>;
  publications?: Maybe<Array<Maybe<Publications>>>;
  publicationsConnection?: Maybe<PublicationsConnection>;
  researchTopic?: Maybe<ResearchTopics>;
  researchTopics?: Maybe<Array<Maybe<ResearchTopics>>>;
  researchTopicsConnection?: Maybe<ResearchTopicsConnection>;
  rule?: Maybe<Rule>;
  section?: Maybe<Section>;
  sections?: Maybe<Array<Maybe<Section>>>;
  sectionsConnection?: Maybe<SectionConnection>;
  team?: Maybe<Teams>;
  teams?: Maybe<Array<Maybe<Teams>>>;
  teamsConnection?: Maybe<TeamsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryActivityArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryActivitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryActivitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryChairManArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDeviceCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDeviceCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDeviceCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDeviceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDevicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDevicesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDocumentCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDocumentCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDocumentCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDocumentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDocumentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEventsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEventsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFooterArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomeSlideArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryIntroduceArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryLeaderArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryMeetingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMeetingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMeetingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMemberArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryNewscastArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryNewscastsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryNewscastsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOldMemberNetworkArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPublicationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryResearchTopicArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryResearchTopicsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryResearchTopicsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRuleArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QuerySectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity?: Maybe<CreateActivityPayload>;
  updateActivity?: Maybe<UpdateActivityPayload>;
  deleteActivity?: Maybe<DeleteActivityPayload>;
  updateChairMan?: Maybe<UpdateChairManPayload>;
  deleteChairMan?: Maybe<DeleteChairManPayload>;
  createContact?: Maybe<CreateContactPayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  createDeviceCategory?: Maybe<CreateDeviceCategoryPayload>;
  updateDeviceCategory?: Maybe<UpdateDeviceCategoryPayload>;
  deleteDeviceCategory?: Maybe<DeleteDeviceCategoryPayload>;
  createDevice?: Maybe<CreateDevicePayload>;
  updateDevice?: Maybe<UpdateDevicePayload>;
  deleteDevice?: Maybe<DeleteDevicePayload>;
  createDocumentCategory?: Maybe<CreateDocumentCategoryPayload>;
  updateDocumentCategory?: Maybe<UpdateDocumentCategoryPayload>;
  deleteDocumentCategory?: Maybe<DeleteDocumentCategoryPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  createEvent?: Maybe<CreateEventPayload>;
  updateEvent?: Maybe<UpdateEventPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  updateFooter?: Maybe<UpdateFooterPayload>;
  deleteFooter?: Maybe<DeleteFooterPayload>;
  updateHomeSlide?: Maybe<UpdateHomeSlidePayload>;
  deleteHomeSlide?: Maybe<DeleteHomeSlidePayload>;
  updateIntroduce?: Maybe<UpdateIntroducePayload>;
  deleteIntroduce?: Maybe<DeleteIntroducePayload>;
  updateLeader?: Maybe<UpdateLeaderPayload>;
  deleteLeader?: Maybe<DeleteLeaderPayload>;
  createMeeting?: Maybe<CreateMeetingPayload>;
  updateMeeting?: Maybe<UpdateMeetingPayload>;
  deleteMeeting?: Maybe<DeleteMeetingPayload>;
  createMember?: Maybe<CreateMemberPayload>;
  updateMember?: Maybe<UpdateMemberPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  createNewscast?: Maybe<CreateNewscastPayload>;
  updateNewscast?: Maybe<UpdateNewscastPayload>;
  deleteNewscast?: Maybe<DeleteNewscastPayload>;
  updateOldMemberNetwork?: Maybe<UpdateOldMemberNetworkPayload>;
  deleteOldMemberNetwork?: Maybe<DeleteOldMemberNetworkPayload>;
  createPostCategory?: Maybe<CreatePostCategoryPayload>;
  updatePostCategory?: Maybe<UpdatePostCategoryPayload>;
  deletePostCategory?: Maybe<DeletePostCategoryPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  createPublication?: Maybe<CreatePublicationPayload>;
  updatePublication?: Maybe<UpdatePublicationPayload>;
  deletePublication?: Maybe<DeletePublicationPayload>;
  createResearchTopic?: Maybe<CreateResearchTopicPayload>;
  updateResearchTopic?: Maybe<UpdateResearchTopicPayload>;
  deleteResearchTopic?: Maybe<DeleteResearchTopicPayload>;
  updateRule?: Maybe<UpdateRulePayload>;
  deleteRule?: Maybe<DeleteRulePayload>;
  createSection?: Maybe<CreateSectionPayload>;
  updateSection?: Maybe<UpdateSectionPayload>;
  deleteSection?: Maybe<DeleteSectionPayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  deleteTeam?: Maybe<DeleteTeamPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateActivityArgs = {
  input?: Maybe<CreateActivityInput>;
};


export type MutationUpdateActivityArgs = {
  input?: Maybe<UpdateActivityInput>;
};


export type MutationDeleteActivityArgs = {
  input?: Maybe<DeleteActivityInput>;
};


export type MutationUpdateChairManArgs = {
  input?: Maybe<UpdateChairManInput>;
};


export type MutationCreateContactArgs = {
  input?: Maybe<CreateContactInput>;
};


export type MutationUpdateContactArgs = {
  input?: Maybe<UpdateContactInput>;
};


export type MutationDeleteContactArgs = {
  input?: Maybe<DeleteContactInput>;
};


export type MutationCreateDeviceCategoryArgs = {
  input?: Maybe<CreateDeviceCategoryInput>;
};


export type MutationUpdateDeviceCategoryArgs = {
  input?: Maybe<UpdateDeviceCategoryInput>;
};


export type MutationDeleteDeviceCategoryArgs = {
  input?: Maybe<DeleteDeviceCategoryInput>;
};


export type MutationCreateDeviceArgs = {
  input?: Maybe<CreateDeviceInput>;
};


export type MutationUpdateDeviceArgs = {
  input?: Maybe<UpdateDeviceInput>;
};


export type MutationDeleteDeviceArgs = {
  input?: Maybe<DeleteDeviceInput>;
};


export type MutationCreateDocumentCategoryArgs = {
  input?: Maybe<CreateDocumentCategoryInput>;
};


export type MutationUpdateDocumentCategoryArgs = {
  input?: Maybe<UpdateDocumentCategoryInput>;
};


export type MutationDeleteDocumentCategoryArgs = {
  input?: Maybe<DeleteDocumentCategoryInput>;
};


export type MutationCreateDocumentArgs = {
  input?: Maybe<CreateDocumentInput>;
};


export type MutationUpdateDocumentArgs = {
  input?: Maybe<UpdateDocumentInput>;
};


export type MutationDeleteDocumentArgs = {
  input?: Maybe<DeleteDocumentInput>;
};


export type MutationCreateEventArgs = {
  input?: Maybe<CreateEventInput>;
};


export type MutationUpdateEventArgs = {
  input?: Maybe<UpdateEventInput>;
};


export type MutationDeleteEventArgs = {
  input?: Maybe<DeleteEventInput>;
};


export type MutationUpdateFooterArgs = {
  input?: Maybe<UpdateFooterInput>;
};


export type MutationUpdateHomeSlideArgs = {
  input?: Maybe<UpdateHomeSlideInput>;
};


export type MutationUpdateIntroduceArgs = {
  input?: Maybe<UpdateIntroduceInput>;
};


export type MutationUpdateLeaderArgs = {
  input?: Maybe<UpdateLeaderInput>;
};


export type MutationCreateMeetingArgs = {
  input?: Maybe<CreateMeetingInput>;
};


export type MutationUpdateMeetingArgs = {
  input?: Maybe<UpdateMeetingInput>;
};


export type MutationDeleteMeetingArgs = {
  input?: Maybe<DeleteMeetingInput>;
};


export type MutationCreateMemberArgs = {
  input?: Maybe<CreateMemberInput>;
};


export type MutationUpdateMemberArgs = {
  input?: Maybe<UpdateMemberInput>;
};


export type MutationDeleteMemberArgs = {
  input?: Maybe<DeleteMemberInput>;
};


export type MutationCreateNewscastArgs = {
  input?: Maybe<CreateNewscastInput>;
};


export type MutationUpdateNewscastArgs = {
  input?: Maybe<UpdateNewscastInput>;
};


export type MutationDeleteNewscastArgs = {
  input?: Maybe<DeleteNewscastInput>;
};


export type MutationUpdateOldMemberNetworkArgs = {
  input?: Maybe<UpdateOldMemberNetworkInput>;
};


export type MutationCreatePostCategoryArgs = {
  input?: Maybe<CreatePostCategoryInput>;
};


export type MutationUpdatePostCategoryArgs = {
  input?: Maybe<UpdatePostCategoryInput>;
};


export type MutationDeletePostCategoryArgs = {
  input?: Maybe<DeletePostCategoryInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationCreatePublicationArgs = {
  input?: Maybe<CreatePublicationInput>;
};


export type MutationUpdatePublicationArgs = {
  input?: Maybe<UpdatePublicationInput>;
};


export type MutationDeletePublicationArgs = {
  input?: Maybe<DeletePublicationInput>;
};


export type MutationCreateResearchTopicArgs = {
  input?: Maybe<CreateResearchTopicInput>;
};


export type MutationUpdateResearchTopicArgs = {
  input?: Maybe<UpdateResearchTopicInput>;
};


export type MutationDeleteResearchTopicArgs = {
  input?: Maybe<DeleteResearchTopicInput>;
};


export type MutationUpdateRuleArgs = {
  input?: Maybe<UpdateRuleInput>;
};


export type MutationCreateSectionArgs = {
  input?: Maybe<CreateSectionInput>;
};


export type MutationUpdateSectionArgs = {
  input?: Maybe<UpdateSectionInput>;
};


export type MutationDeleteSectionArgs = {
  input?: Maybe<DeleteSectionInput>;
};


export type MutationCreateTeamArgs = {
  input?: Maybe<CreateTeamInput>;
};


export type MutationUpdateTeamArgs = {
  input?: Maybe<UpdateTeamInput>;
};


export type MutationDeleteTeamArgs = {
  input?: Maybe<DeleteTeamInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export type AuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id'>
    & { author?: Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'gender' | 'fullName'>
      & { avatar?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )> }
  )>>> }
);

export type ChairManQueryVariables = Exact<{ [key: string]: never; }>;


export type ChairManQuery = (
  { __typename?: 'Query' }
  & { chairMan?: Maybe<(
    { __typename?: 'ChairMan' }
    & Pick<ChairMan, 'id' | 'fullName' | 'mainRole'>
    & { subRoles?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextText' }
      & Pick<ComponentTextText, 'id' | 'title'>
    )>>>, researchTopics?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextLongText' }
      & Pick<ComponentTextLongText, 'id' | 'title'>
    )>>>, images?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'caption'>
    )>>> }
  )> }
);

export type DocumentsQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type DocumentsQuery = (
  { __typename?: 'Query' }
  & { documents?: Maybe<Array<Maybe<(
    { __typename?: 'Documents' }
    & Pick<Documents, 'createdAt' | 'id' | 'name'>
    & { file?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'name' | 'ext' | 'url'>
    )>, category?: Maybe<(
      { __typename?: 'DocumentCategories' }
      & Pick<DocumentCategories, 'name'>
    )> }
  )>>> }
);

export type DocumentCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentCategoriesQuery = (
  { __typename?: 'Query' }
  & { documentCategories?: Maybe<Array<Maybe<(
    { __typename?: 'DocumentCategories' }
    & Pick<DocumentCategories, 'name'>
  )>>> }
);

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = (
  { __typename?: 'Query' }
  & { footer?: Maybe<(
    { __typename?: 'Footer' }
    & Pick<Footer, 'id' | 'email' | 'phone' | 'address'>
    & { workTime?: Maybe<(
      { __typename?: 'ComponentTimeWorkTime' }
      & Pick<ComponentTimeWorkTime, 'id' | 'info' | 'note'>
    )>, logo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'alternativeText' | 'caption' | 'url'>
    )>, extraInfo?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextText' }
      & Pick<ComponentTextText, 'id' | 'title'>
    )>>> }
  )> }
);

export type HomeSlideQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeSlideQuery = (
  { __typename?: 'Query' }
  & { homeSlide?: Maybe<(
    { __typename?: 'HomeSlide' }
    & { slides?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url'>
    )>>> }
  )> }
);

export type HotNewsCastQueryVariables = Exact<{ [key: string]: never; }>;


export type HotNewsCastQuery = (
  { __typename?: 'Query' }
  & { newscasts?: Maybe<Array<Maybe<(
    { __typename?: 'Newscast' }
    & Pick<Newscast, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'hot' | 'published_at'>
    & { thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type LeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type LeaderQuery = (
  { __typename?: 'Query' }
  & { leader?: Maybe<(
    { __typename?: 'Leader' }
    & Pick<Leader, 'id' | 'fullName' | 'mainInfo' | 'mainRole' | 'email' | 'phone'>
    & { images?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'caption'>
    )>>>, socials?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentSocialSocials' }
      & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
    )>>> }
  )> }
);

export type MemberNetworkQueryVariables = Exact<{ [key: string]: never; }>;


export type MemberNetworkQuery = (
  { __typename?: 'Query' }
  & { sections?: Maybe<Array<Maybe<(
    { __typename?: 'Section' }
    & Pick<Section, 'id' | 'title' | 'subTitle'>
    & { body?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentInfoContents' }
      & Pick<ComponentInfoContents, 'id' | 'heading'>
      & { contents?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentTextLongText' }
        & Pick<ComponentTextLongText, 'id' | 'title'>
      )>>> }
    )>>>, images?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'caption'>
    )>>> }
  )>>> }
);

export type OldMemberNetworkQueryVariables = Exact<{ [key: string]: never; }>;


export type OldMemberNetworkQuery = (
  { __typename?: 'Query' }
  & { oldMemberNetwork?: Maybe<(
    { __typename?: 'OldMemberNetwork' }
    & { companies?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentBrandsCompanies' }
      & Pick<ComponentBrandsCompanies, 'id'>
      & { logo?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>>>, countries?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentCountryCountries' }
      & Pick<ComponentCountryCountries, 'id' | 'name'>
      & { flag?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )>, universities?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentUniversityUniversities' }
        & Pick<ComponentUniversityUniversities, 'id' | 'name' | 'shortName'>
        & { students?: Maybe<Array<Maybe<(
          { __typename?: 'Members' }
          & Pick<Members, 'id'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'title' | 'published_at'>
    & { thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type ProjectQueryVariables = Exact<{
  level?: Maybe<Enum_Project_Level>;
}>;


export type ProjectQuery = (
  { __typename?: 'Query' }
  & { projects?: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'startYear' | 'endYear' | 'level' | 'source'>
  )>>> }
);

export type PublicationsQueryVariables = Exact<{
  type?: Maybe<Enum_Publications_Type>;
}>;


export type PublicationsQuery = (
  { __typename?: 'Query' }
  & { publications?: Maybe<Array<Maybe<(
    { __typename?: 'Publications' }
    & Pick<Publications, 'id' | 'name' | 'journalConference' | 'edition' | 'publishingTime' | 'issn' | 'published_at' | 'isbn' | 'authors' | 'type'>
  )>>> }
);

export type ResearchTopicDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ResearchTopicDetailQuery = (
  { __typename?: 'Query' }
  & { researchTopic?: Maybe<(
    { __typename?: 'ResearchTopics' }
    & Pick<ResearchTopics, 'id' | 'name' | 'descriptions'>
  )> }
);

export type ResearchTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type ResearchTopicsQuery = (
  { __typename?: 'Query' }
  & { researchTopics?: Maybe<Array<Maybe<(
    { __typename?: 'ResearchTopics' }
    & Pick<ResearchTopics, 'id' | 'name'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type TeamIntroduceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamIntroduceQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'id' | 'name' | 'descriptions'>
    & { avatar?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'caption'>
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'gender' | 'nominalRole' | 'fullName' | 'course' | 'email' | 'phone'>
      & { avatar?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )>, Socials?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentSocialSocials' }
        & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
      )>>> }
    )>>>, leader?: Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'gender' | 'course' | 'nominalRole' | 'fullName' | 'email' | 'phone'>
      & { avatar?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )>, Socials?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentSocialSocials' }
        & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
      )>>> }
    )> }
  )> }
);

export type TeamProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamProfileQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'id' | 'profiles'>
  )> }
);

export type MastersQueryVariables = Exact<{ [key: string]: never; }>;


export type MastersQuery = (
  { __typename?: 'Query' }
  & { members?: Maybe<Array<Maybe<(
    { __typename?: 'Members' }
    & Pick<Members, 'id' | 'fullName' | 'email' | 'course' | 'school' | 'gender' | 'phone' | 'nominalRole'>
    & { Socials?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentSocialSocials' }
      & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
    )>>>, avatar?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type TeamNewsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamNewsQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'id'>
    & { news?: Maybe<Array<Maybe<(
      { __typename?: 'Newscast' }
      & Pick<Newscast, 'id' | 'title' | 'published_at'>
      & { thumbnail?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'caption'>
      )> }
    )>>> }
  )> }
);

export type TeamPostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamPostsQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'id'>
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'title' | 'published_at'>
      & { thumbnail?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'caption'>
      )> }
    )>>> }
  )> }
);

export type ActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesQuery = (
  { __typename?: 'Query' }
  & { activities?: Maybe<Array<Maybe<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'eventName' | 'description' | 'atTime' | 'createdAt'>
    & { videos?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentMediaVideo' }
      & Pick<ComponentMediaVideo, 'id' | 'youTubeVideoId' | 'description'>
    )>>>, images?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentMediaImage' }
      & Pick<ComponentMediaImage, 'id' | 'description'>
      & { images?: Maybe<Array<Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'id' | 'url' | 'formats' | 'alternativeText' | 'caption'>
      )>>> }
    )>>> }
  )>>> }
);

export type ContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactsQuery = (
  { __typename?: 'Query' }
  & { contacts?: Maybe<Array<Maybe<(
    { __typename?: 'Contacts' }
    & Pick<Contacts, 'id'>
    & { targets?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextLongText' }
      & Pick<ComponentTextLongText, 'id' | 'title'>
    )>>>, member?: Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'nominalRole' | 'fullName' | 'email' | 'phone'>
    )> }
  )>>> }
);

export type DevicesMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type DevicesMenuQuery = (
  { __typename?: 'Query' }
  & { deviceCategories?: Maybe<Array<Maybe<(
    { __typename?: 'DeviceCategories' }
    & Pick<DeviceCategories, 'name' | 'id'>
  )>>> }
);

export type DevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type DevicesQuery = (
  { __typename?: 'Query' }
  & { deviceCategories?: Maybe<Array<Maybe<(
    { __typename?: 'DeviceCategories' }
    & { devices?: Maybe<Array<Maybe<(
      { __typename?: 'Devices' }
      & Pick<Devices, 'id' | 'model' | 'name'>
      & { category?: Maybe<(
        { __typename?: 'DeviceCategories' }
        & Pick<DeviceCategories, 'name'>
      )>, avatar?: Maybe<Array<Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'id' | 'url' | 'caption'>
      )>>> }
    )>>> }
  )>>> }
);

export type NewscastQueryVariables = Exact<{ [key: string]: never; }>;


export type NewscastQuery = (
  { __typename?: 'Query' }
  & { newscasts?: Maybe<Array<Maybe<(
    { __typename?: 'Newscast' }
    & Pick<Newscast, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'published_at' | 'hot'>
    & { thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type HotNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type HotNewsQuery = (
  { __typename?: 'Query' }
  & { newscasts?: Maybe<Array<Maybe<(
    { __typename?: 'Newscast' }
    & Pick<Newscast, 'id' | 'title'>
  )>>> }
);

export type NewsCastDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NewsCastDetailQuery = (
  { __typename?: 'Query' }
  & { newscast?: Maybe<(
    { __typename?: 'Newscast' }
    & Pick<Newscast, 'id' | 'title' | 'content'>
    & { thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'caption' | 'url'>
    )> }
  )> }
);

export type OldStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type OldStudentsQuery = (
  { __typename?: 'Query' }
  & { members?: Maybe<Array<Maybe<(
    { __typename?: 'Members' }
    & Pick<Members, 'id' | 'fullName' | 'email' | 'course' | 'school' | 'gender' | 'phone' | 'nominalRole'>
    & { Socials?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentSocialSocials' }
      & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
    )>>>, avatar?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'formats'>
    )> }
  )>>> }
);

export type StudentCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentCategoryQuery = (
  { __typename?: 'Query' }
  & { members?: Maybe<Array<Maybe<(
    { __typename?: 'Members' }
    & Pick<Members, 'isMember' | 'isOldMember' | 'course' | 'school'>
  )>>> }
);

export type PostCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type PostCategoriesQuery = (
  { __typename?: 'Query' }
  & { postCategories?: Maybe<Array<Maybe<(
    { __typename?: 'PostCategories' }
    & Pick<PostCategories, 'id' | 'name'>
    & { parentCategory?: Maybe<(
      { __typename?: 'PostCategories' }
      & Pick<PostCategories, 'id' | 'name'>
      & { subCategories?: Maybe<Array<Maybe<(
        { __typename?: 'PostCategories' }
        & Pick<PostCategories, 'id' | 'name'>
      )>>> }
    )>, posts?: Maybe<Array<Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id'>
    )>>> }
  )>>> }
);

export type PostsListsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsListsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & PostItemFragment
  )>>> }
);

export type PostItemFragment = (
  { __typename?: 'Posts' }
  & Pick<Posts, 'id' | 'title' | 'shortDescription' | 'content' | 'published_at'>
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'PostCategories' }
    & Pick<PostCategories, 'id' | 'name'>
  )>>>, thumbnail?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'id' | 'url' | 'formats'>
  )> }
);

export type PostDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostDetailQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'title' | 'content' | 'published_at'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextText' }
      & Pick<ComponentTextText, 'title'>
    )>>>, author?: Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'gender' | 'fullName'>
      & { avatar?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>, thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'caption'>
    )> }
  )> }
);

export type PostListByCategoryQueryVariables = Exact<{
  categoryId: Scalars['ID'];
}>;


export type PostListByCategoryQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'title' | 'shortDescription' | 'createdAt' | 'updatedAt' | 'published_at'>
    & { createdBy: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstname' | 'lastname' | 'email'>
    ), categories?: Maybe<Array<Maybe<(
      { __typename?: 'PostCategories' }
      & Pick<PostCategories, 'id' | 'name'>
    )>>>, thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'formats'>
    )> }
  )>>> }
);

export type ProductSideMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductSideMenuQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'type' | 'semester'>
  )>>> }
);

export type ProductsQueryVariables = Exact<{
  type: Enum_Products_Type;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'type' | 'name' | 'semester'>
    & { images?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'caption' | 'url'>
    )>>>, performers?: Maybe<Array<Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'fullName' | 'course' | 'nominalRole'>
    )>>>, functions?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextLongText' }
      & Pick<ComponentTextLongText, 'id' | 'title'>
    )>>>, extraInfo?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTextLongText' }
      & Pick<ComponentTextLongText, 'id' | 'title'>
    )>>>, instructors?: Maybe<Array<Maybe<(
      { __typename?: 'Members' }
      & Pick<Members, 'id' | 'fullName'>
    )>>> }
  )>>> }
);

export type RuleQueryVariables = Exact<{ [key: string]: never; }>;


export type RuleQuery = (
  { __typename?: 'Query' }
  & { rule?: Maybe<(
    { __typename?: 'Rule' }
    & Pick<Rule, 'id' | 'content'>
  )> }
);

export type StudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentsQuery = (
  { __typename?: 'Query' }
  & { members?: Maybe<Array<Maybe<(
    { __typename?: 'Members' }
    & Pick<Members, 'id' | 'fullName' | 'email' | 'course' | 'school' | 'gender' | 'phone' | 'isMember' | 'nominalRole'>
    & { Socials?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentSocialSocials' }
      & Pick<ComponentSocialSocials, 'id' | 'provider' | 'address'>
    )>>>, avatar?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'formats'>
    )> }
  )>>> }
);

export type TeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamsQuery = (
  { __typename?: 'Query' }
  & { teams?: Maybe<Array<Maybe<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'id' | 'name'>
  )>>> }
);

export const PostItemFragmentDoc = gql`
    fragment PostItem on Posts {
  id
  title
  shortDescription
  categories {
    id
    name
  }
  thumbnail {
    id
    url
    formats
  }
  content
  published_at
}
    `;
export const AuthorsDocument = gql`
    query Authors {
  posts {
    id
    author {
      id
      gender
      fullName
      avatar {
        url
      }
    }
  }
}
    `;

/**
 * __useAuthorsQuery__
 *
 * To run a query within a React component, call `useAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
        return Apollo.useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, baseOptions);
      }
export function useAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          return Apollo.useLazyQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, baseOptions);
        }
export type AuthorsQueryHookResult = ReturnType<typeof useAuthorsQuery>;
export type AuthorsLazyQueryHookResult = ReturnType<typeof useAuthorsLazyQuery>;
export type AuthorsQueryResult = Apollo.QueryResult<AuthorsQuery, AuthorsQueryVariables>;
export const ChairManDocument = gql`
    query ChairMan {
  chairMan {
    id
    fullName
    mainRole
    subRoles {
      id
      title
    }
    researchTopics {
      id
      title
    }
    images {
      id
      url
      caption
    }
  }
}
    `;

/**
 * __useChairManQuery__
 *
 * To run a query within a React component, call `useChairManQuery` and pass it any options that fit your needs.
 * When your component renders, `useChairManQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChairManQuery({
 *   variables: {
 *   },
 * });
 */
export function useChairManQuery(baseOptions?: Apollo.QueryHookOptions<ChairManQuery, ChairManQueryVariables>) {
        return Apollo.useQuery<ChairManQuery, ChairManQueryVariables>(ChairManDocument, baseOptions);
      }
export function useChairManLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChairManQuery, ChairManQueryVariables>) {
          return Apollo.useLazyQuery<ChairManQuery, ChairManQueryVariables>(ChairManDocument, baseOptions);
        }
export type ChairManQueryHookResult = ReturnType<typeof useChairManQuery>;
export type ChairManLazyQueryHookResult = ReturnType<typeof useChairManLazyQuery>;
export type ChairManQueryResult = Apollo.QueryResult<ChairManQuery, ChairManQueryVariables>;
export const DocumentsDocument = gql`
    query Documents($categoryName: String!) {
  documents(where: {category: {name: $categoryName}}) {
    createdAt
    id
    name
    file {
      id
      name
      ext
      url
    }
    category {
      name
    }
  }
}
    `;

/**
 * __useDocumentsQuery__
 *
 * To run a query within a React component, call `useDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentsQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useDocumentsQuery(baseOptions: Apollo.QueryHookOptions<DocumentsQuery, DocumentsQueryVariables>) {
        return Apollo.useQuery<DocumentsQuery, DocumentsQueryVariables>(DocumentsDocument, baseOptions);
      }
export function useDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DocumentsQuery, DocumentsQueryVariables>) {
          return Apollo.useLazyQuery<DocumentsQuery, DocumentsQueryVariables>(DocumentsDocument, baseOptions);
        }
export type DocumentsQueryHookResult = ReturnType<typeof useDocumentsQuery>;
export type DocumentsLazyQueryHookResult = ReturnType<typeof useDocumentsLazyQuery>;
export type DocumentsQueryResult = Apollo.QueryResult<DocumentsQuery, DocumentsQueryVariables>;
export const DocumentCategoriesDocument = gql`
    query DocumentCategories {
  documentCategories {
    name
  }
}
    `;

/**
 * __useDocumentCategoriesQuery__
 *
 * To run a query within a React component, call `useDocumentCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDocumentCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<DocumentCategoriesQuery, DocumentCategoriesQueryVariables>) {
        return Apollo.useQuery<DocumentCategoriesQuery, DocumentCategoriesQueryVariables>(DocumentCategoriesDocument, baseOptions);
      }
export function useDocumentCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DocumentCategoriesQuery, DocumentCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<DocumentCategoriesQuery, DocumentCategoriesQueryVariables>(DocumentCategoriesDocument, baseOptions);
        }
export type DocumentCategoriesQueryHookResult = ReturnType<typeof useDocumentCategoriesQuery>;
export type DocumentCategoriesLazyQueryHookResult = ReturnType<typeof useDocumentCategoriesLazyQuery>;
export type DocumentCategoriesQueryResult = Apollo.QueryResult<DocumentCategoriesQuery, DocumentCategoriesQueryVariables>;
export const FooterDocument = gql`
    query Footer {
  footer {
    id
    email
    phone
    address
    workTime {
      id
      info
      note
    }
    logo {
      id
      alternativeText
      caption
      url
    }
    extraInfo {
      id
      title
    }
  }
}
    `;

/**
 * __useFooterQuery__
 *
 * To run a query within a React component, call `useFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterQuery(baseOptions?: Apollo.QueryHookOptions<FooterQuery, FooterQueryVariables>) {
        return Apollo.useQuery<FooterQuery, FooterQueryVariables>(FooterDocument, baseOptions);
      }
export function useFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterQuery, FooterQueryVariables>) {
          return Apollo.useLazyQuery<FooterQuery, FooterQueryVariables>(FooterDocument, baseOptions);
        }
export type FooterQueryHookResult = ReturnType<typeof useFooterQuery>;
export type FooterLazyQueryHookResult = ReturnType<typeof useFooterLazyQuery>;
export type FooterQueryResult = Apollo.QueryResult<FooterQuery, FooterQueryVariables>;
export const HomeSlideDocument = gql`
    query homeSlide {
  homeSlide {
    slides {
      id
      url
    }
  }
}
    `;

/**
 * __useHomeSlideQuery__
 *
 * To run a query within a React component, call `useHomeSlideQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeSlideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeSlideQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeSlideQuery(baseOptions?: Apollo.QueryHookOptions<HomeSlideQuery, HomeSlideQueryVariables>) {
        return Apollo.useQuery<HomeSlideQuery, HomeSlideQueryVariables>(HomeSlideDocument, baseOptions);
      }
export function useHomeSlideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeSlideQuery, HomeSlideQueryVariables>) {
          return Apollo.useLazyQuery<HomeSlideQuery, HomeSlideQueryVariables>(HomeSlideDocument, baseOptions);
        }
export type HomeSlideQueryHookResult = ReturnType<typeof useHomeSlideQuery>;
export type HomeSlideLazyQueryHookResult = ReturnType<typeof useHomeSlideLazyQuery>;
export type HomeSlideQueryResult = Apollo.QueryResult<HomeSlideQuery, HomeSlideQueryVariables>;
export const HotNewsCastDocument = gql`
    query HotNewsCast {
  newscasts(where: {hot: true}) {
    id
    createdAt
    updatedAt
    title
    thumbnail {
      url
    }
    hot
    published_at
  }
}
    `;

/**
 * __useHotNewsCastQuery__
 *
 * To run a query within a React component, call `useHotNewsCastQuery` and pass it any options that fit your needs.
 * When your component renders, `useHotNewsCastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHotNewsCastQuery({
 *   variables: {
 *   },
 * });
 */
export function useHotNewsCastQuery(baseOptions?: Apollo.QueryHookOptions<HotNewsCastQuery, HotNewsCastQueryVariables>) {
        return Apollo.useQuery<HotNewsCastQuery, HotNewsCastQueryVariables>(HotNewsCastDocument, baseOptions);
      }
export function useHotNewsCastLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HotNewsCastQuery, HotNewsCastQueryVariables>) {
          return Apollo.useLazyQuery<HotNewsCastQuery, HotNewsCastQueryVariables>(HotNewsCastDocument, baseOptions);
        }
export type HotNewsCastQueryHookResult = ReturnType<typeof useHotNewsCastQuery>;
export type HotNewsCastLazyQueryHookResult = ReturnType<typeof useHotNewsCastLazyQuery>;
export type HotNewsCastQueryResult = Apollo.QueryResult<HotNewsCastQuery, HotNewsCastQueryVariables>;
export const LeaderDocument = gql`
    query Leader {
  leader {
    id
    fullName
    mainInfo
    mainRole
    email
    phone
    images {
      id
      url
      caption
    }
    socials {
      id
      provider
      address
    }
  }
}
    `;

/**
 * __useLeaderQuery__
 *
 * To run a query within a React component, call `useLeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useLeaderQuery(baseOptions?: Apollo.QueryHookOptions<LeaderQuery, LeaderQueryVariables>) {
        return Apollo.useQuery<LeaderQuery, LeaderQueryVariables>(LeaderDocument, baseOptions);
      }
export function useLeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaderQuery, LeaderQueryVariables>) {
          return Apollo.useLazyQuery<LeaderQuery, LeaderQueryVariables>(LeaderDocument, baseOptions);
        }
export type LeaderQueryHookResult = ReturnType<typeof useLeaderQuery>;
export type LeaderLazyQueryHookResult = ReturnType<typeof useLeaderLazyQuery>;
export type LeaderQueryResult = Apollo.QueryResult<LeaderQuery, LeaderQueryVariables>;
export const MemberNetworkDocument = gql`
    query MemberNetwork {
  sections(where: {type: "member"}) {
    id
    title
    subTitle
    body {
      id
      heading
      contents {
        id
        title
      }
    }
    images {
      id
      url
      caption
    }
  }
}
    `;

/**
 * __useMemberNetworkQuery__
 *
 * To run a query within a React component, call `useMemberNetworkQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberNetworkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberNetworkQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberNetworkQuery(baseOptions?: Apollo.QueryHookOptions<MemberNetworkQuery, MemberNetworkQueryVariables>) {
        return Apollo.useQuery<MemberNetworkQuery, MemberNetworkQueryVariables>(MemberNetworkDocument, baseOptions);
      }
export function useMemberNetworkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberNetworkQuery, MemberNetworkQueryVariables>) {
          return Apollo.useLazyQuery<MemberNetworkQuery, MemberNetworkQueryVariables>(MemberNetworkDocument, baseOptions);
        }
export type MemberNetworkQueryHookResult = ReturnType<typeof useMemberNetworkQuery>;
export type MemberNetworkLazyQueryHookResult = ReturnType<typeof useMemberNetworkLazyQuery>;
export type MemberNetworkQueryResult = Apollo.QueryResult<MemberNetworkQuery, MemberNetworkQueryVariables>;
export const OldMemberNetworkDocument = gql`
    query OldMemberNetwork {
  oldMemberNetwork {
    companies {
      id
      logo {
        url
      }
    }
    countries {
      id
      flag {
        url
      }
      name
      universities {
        id
        name
        shortName
        students {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useOldMemberNetworkQuery__
 *
 * To run a query within a React component, call `useOldMemberNetworkQuery` and pass it any options that fit your needs.
 * When your component renders, `useOldMemberNetworkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOldMemberNetworkQuery({
 *   variables: {
 *   },
 * });
 */
export function useOldMemberNetworkQuery(baseOptions?: Apollo.QueryHookOptions<OldMemberNetworkQuery, OldMemberNetworkQueryVariables>) {
        return Apollo.useQuery<OldMemberNetworkQuery, OldMemberNetworkQueryVariables>(OldMemberNetworkDocument, baseOptions);
      }
export function useOldMemberNetworkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OldMemberNetworkQuery, OldMemberNetworkQueryVariables>) {
          return Apollo.useLazyQuery<OldMemberNetworkQuery, OldMemberNetworkQueryVariables>(OldMemberNetworkDocument, baseOptions);
        }
export type OldMemberNetworkQueryHookResult = ReturnType<typeof useOldMemberNetworkQuery>;
export type OldMemberNetworkLazyQueryHookResult = ReturnType<typeof useOldMemberNetworkLazyQuery>;
export type OldMemberNetworkQueryResult = Apollo.QueryResult<OldMemberNetworkQuery, OldMemberNetworkQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    title
    thumbnail {
      id
      url
      alternativeText
    }
    published_at
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const ProjectDocument = gql`
    query Project($level: ENUM_PROJECT_LEVEL) {
  projects(where: {level: $level}) {
    id
    name
    startYear
    endYear
    level
    source
  }
}
    `;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      level: // value for 'level'
 *   },
 * });
 */
export function useProjectQuery(baseOptions?: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
        return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, baseOptions);
      }
export function useProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
          return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, baseOptions);
        }
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectQueryResult = Apollo.QueryResult<ProjectQuery, ProjectQueryVariables>;
export const PublicationsDocument = gql`
    query Publications($type: ENUM_PUBLICATIONS_TYPE) {
  publications(where: {type: $type}) {
    id
    name
    journalConference
    edition
    publishingTime
    issn
    published_at
    isbn
    authors
    type
  }
}
    `;

/**
 * __usePublicationsQuery__
 *
 * To run a query within a React component, call `usePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePublicationsQuery(baseOptions?: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
        return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, baseOptions);
      }
export function usePublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
          return Apollo.useLazyQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, baseOptions);
        }
export type PublicationsQueryHookResult = ReturnType<typeof usePublicationsQuery>;
export type PublicationsLazyQueryHookResult = ReturnType<typeof usePublicationsLazyQuery>;
export type PublicationsQueryResult = Apollo.QueryResult<PublicationsQuery, PublicationsQueryVariables>;
export const ResearchTopicDetailDocument = gql`
    query ResearchTopicDetail($id: ID!) {
  researchTopic(id: $id) {
    id
    name
    descriptions
  }
}
    `;

/**
 * __useResearchTopicDetailQuery__
 *
 * To run a query within a React component, call `useResearchTopicDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useResearchTopicDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResearchTopicDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResearchTopicDetailQuery(baseOptions: Apollo.QueryHookOptions<ResearchTopicDetailQuery, ResearchTopicDetailQueryVariables>) {
        return Apollo.useQuery<ResearchTopicDetailQuery, ResearchTopicDetailQueryVariables>(ResearchTopicDetailDocument, baseOptions);
      }
export function useResearchTopicDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResearchTopicDetailQuery, ResearchTopicDetailQueryVariables>) {
          return Apollo.useLazyQuery<ResearchTopicDetailQuery, ResearchTopicDetailQueryVariables>(ResearchTopicDetailDocument, baseOptions);
        }
export type ResearchTopicDetailQueryHookResult = ReturnType<typeof useResearchTopicDetailQuery>;
export type ResearchTopicDetailLazyQueryHookResult = ReturnType<typeof useResearchTopicDetailLazyQuery>;
export type ResearchTopicDetailQueryResult = Apollo.QueryResult<ResearchTopicDetailQuery, ResearchTopicDetailQueryVariables>;
export const ResearchTopicsDocument = gql`
    query ResearchTopics {
  researchTopics {
    id
    name
    image {
      url
    }
  }
}
    `;

/**
 * __useResearchTopicsQuery__
 *
 * To run a query within a React component, call `useResearchTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useResearchTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResearchTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useResearchTopicsQuery(baseOptions?: Apollo.QueryHookOptions<ResearchTopicsQuery, ResearchTopicsQueryVariables>) {
        return Apollo.useQuery<ResearchTopicsQuery, ResearchTopicsQueryVariables>(ResearchTopicsDocument, baseOptions);
      }
export function useResearchTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResearchTopicsQuery, ResearchTopicsQueryVariables>) {
          return Apollo.useLazyQuery<ResearchTopicsQuery, ResearchTopicsQueryVariables>(ResearchTopicsDocument, baseOptions);
        }
export type ResearchTopicsQueryHookResult = ReturnType<typeof useResearchTopicsQuery>;
export type ResearchTopicsLazyQueryHookResult = ReturnType<typeof useResearchTopicsLazyQuery>;
export type ResearchTopicsQueryResult = Apollo.QueryResult<ResearchTopicsQuery, ResearchTopicsQueryVariables>;
export const TeamIntroduceDocument = gql`
    query TeamIntroduce($id: ID!) {
  team(id: $id) {
    id
    name
    descriptions
    avatar {
      url
      caption
    }
    members {
      id
      avatar {
        url
      }
      gender
      nominalRole
      fullName
      course
      email
      phone
      Socials {
        id
        provider
        address
      }
    }
    leader {
      id
      avatar {
        url
      }
      gender
      course
      nominalRole
      fullName
      email
      phone
      Socials {
        id
        provider
        address
      }
    }
  }
}
    `;

/**
 * __useTeamIntroduceQuery__
 *
 * To run a query within a React component, call `useTeamIntroduceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamIntroduceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamIntroduceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamIntroduceQuery(baseOptions: Apollo.QueryHookOptions<TeamIntroduceQuery, TeamIntroduceQueryVariables>) {
        return Apollo.useQuery<TeamIntroduceQuery, TeamIntroduceQueryVariables>(TeamIntroduceDocument, baseOptions);
      }
export function useTeamIntroduceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamIntroduceQuery, TeamIntroduceQueryVariables>) {
          return Apollo.useLazyQuery<TeamIntroduceQuery, TeamIntroduceQueryVariables>(TeamIntroduceDocument, baseOptions);
        }
export type TeamIntroduceQueryHookResult = ReturnType<typeof useTeamIntroduceQuery>;
export type TeamIntroduceLazyQueryHookResult = ReturnType<typeof useTeamIntroduceLazyQuery>;
export type TeamIntroduceQueryResult = Apollo.QueryResult<TeamIntroduceQuery, TeamIntroduceQueryVariables>;
export const TeamProfileDocument = gql`
    query TeamProfile($id: ID!) {
  team(id: $id) {
    id
    profiles
  }
}
    `;

/**
 * __useTeamProfileQuery__
 *
 * To run a query within a React component, call `useTeamProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamProfileQuery(baseOptions: Apollo.QueryHookOptions<TeamProfileQuery, TeamProfileQueryVariables>) {
        return Apollo.useQuery<TeamProfileQuery, TeamProfileQueryVariables>(TeamProfileDocument, baseOptions);
      }
export function useTeamProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamProfileQuery, TeamProfileQueryVariables>) {
          return Apollo.useLazyQuery<TeamProfileQuery, TeamProfileQueryVariables>(TeamProfileDocument, baseOptions);
        }
export type TeamProfileQueryHookResult = ReturnType<typeof useTeamProfileQuery>;
export type TeamProfileLazyQueryHookResult = ReturnType<typeof useTeamProfileLazyQuery>;
export type TeamProfileQueryResult = Apollo.QueryResult<TeamProfileQuery, TeamProfileQueryVariables>;
export const MastersDocument = gql`
    query Masters {
  members(where: {isMaster: true}) {
    id
    fullName
    email
    course
    school
    gender
    phone
    nominalRole
    Socials {
      id
      provider
      address
    }
    avatar {
      url
    }
  }
}
    `;

/**
 * __useMastersQuery__
 *
 * To run a query within a React component, call `useMastersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMastersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMastersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMastersQuery(baseOptions?: Apollo.QueryHookOptions<MastersQuery, MastersQueryVariables>) {
        return Apollo.useQuery<MastersQuery, MastersQueryVariables>(MastersDocument, baseOptions);
      }
export function useMastersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MastersQuery, MastersQueryVariables>) {
          return Apollo.useLazyQuery<MastersQuery, MastersQueryVariables>(MastersDocument, baseOptions);
        }
export type MastersQueryHookResult = ReturnType<typeof useMastersQuery>;
export type MastersLazyQueryHookResult = ReturnType<typeof useMastersLazyQuery>;
export type MastersQueryResult = Apollo.QueryResult<MastersQuery, MastersQueryVariables>;
export const TeamNewsDocument = gql`
    query TeamNews($id: ID!) {
  team(id: $id) {
    id
    news {
      id
      title
      thumbnail {
        url
        caption
      }
      published_at
    }
  }
}
    `;

/**
 * __useTeamNewsQuery__
 *
 * To run a query within a React component, call `useTeamNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamNewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamNewsQuery(baseOptions: Apollo.QueryHookOptions<TeamNewsQuery, TeamNewsQueryVariables>) {
        return Apollo.useQuery<TeamNewsQuery, TeamNewsQueryVariables>(TeamNewsDocument, baseOptions);
      }
export function useTeamNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamNewsQuery, TeamNewsQueryVariables>) {
          return Apollo.useLazyQuery<TeamNewsQuery, TeamNewsQueryVariables>(TeamNewsDocument, baseOptions);
        }
export type TeamNewsQueryHookResult = ReturnType<typeof useTeamNewsQuery>;
export type TeamNewsLazyQueryHookResult = ReturnType<typeof useTeamNewsLazyQuery>;
export type TeamNewsQueryResult = Apollo.QueryResult<TeamNewsQuery, TeamNewsQueryVariables>;
export const TeamPostsDocument = gql`
    query TeamPosts($id: ID!) {
  team(id: $id) {
    id
    posts {
      id
      title
      thumbnail {
        url
        caption
      }
      published_at
    }
  }
}
    `;

/**
 * __useTeamPostsQuery__
 *
 * To run a query within a React component, call `useTeamPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamPostsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamPostsQuery(baseOptions: Apollo.QueryHookOptions<TeamPostsQuery, TeamPostsQueryVariables>) {
        return Apollo.useQuery<TeamPostsQuery, TeamPostsQueryVariables>(TeamPostsDocument, baseOptions);
      }
export function useTeamPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamPostsQuery, TeamPostsQueryVariables>) {
          return Apollo.useLazyQuery<TeamPostsQuery, TeamPostsQueryVariables>(TeamPostsDocument, baseOptions);
        }
export type TeamPostsQueryHookResult = ReturnType<typeof useTeamPostsQuery>;
export type TeamPostsLazyQueryHookResult = ReturnType<typeof useTeamPostsLazyQuery>;
export type TeamPostsQueryResult = Apollo.QueryResult<TeamPostsQuery, TeamPostsQueryVariables>;
export const ActivitiesDocument = gql`
    query Activities {
  activities {
    id
    eventName
    description
    atTime
    createdAt
    videos {
      id
      youTubeVideoId
      description
    }
    images {
      id
      images {
        id
        url
        formats
        alternativeText
        caption
      }
      description
    }
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const ContactsDocument = gql`
    query Contacts {
  contacts {
    id
    targets {
      id
      title
    }
    member {
      nominalRole
      fullName
      email
      phone
    }
  }
}
    `;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactsQuery(baseOptions?: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, baseOptions);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, baseOptions);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const DevicesMenuDocument = gql`
    query DevicesMenu {
  deviceCategories {
    name
    id
  }
}
    `;

/**
 * __useDevicesMenuQuery__
 *
 * To run a query within a React component, call `useDevicesMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevicesMenuQuery(baseOptions?: Apollo.QueryHookOptions<DevicesMenuQuery, DevicesMenuQueryVariables>) {
        return Apollo.useQuery<DevicesMenuQuery, DevicesMenuQueryVariables>(DevicesMenuDocument, baseOptions);
      }
export function useDevicesMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevicesMenuQuery, DevicesMenuQueryVariables>) {
          return Apollo.useLazyQuery<DevicesMenuQuery, DevicesMenuQueryVariables>(DevicesMenuDocument, baseOptions);
        }
export type DevicesMenuQueryHookResult = ReturnType<typeof useDevicesMenuQuery>;
export type DevicesMenuLazyQueryHookResult = ReturnType<typeof useDevicesMenuLazyQuery>;
export type DevicesMenuQueryResult = Apollo.QueryResult<DevicesMenuQuery, DevicesMenuQueryVariables>;
export const DevicesDocument = gql`
    query Devices {
  deviceCategories {
    devices {
      id
      category {
        name
      }
      model
      name
      avatar {
        id
        url
        caption
      }
    }
  }
}
    `;

/**
 * __useDevicesQuery__
 *
 * To run a query within a React component, call `useDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevicesQuery(baseOptions?: Apollo.QueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
        return Apollo.useQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, baseOptions);
      }
export function useDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
          return Apollo.useLazyQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, baseOptions);
        }
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>;
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>;
export type DevicesQueryResult = Apollo.QueryResult<DevicesQuery, DevicesQueryVariables>;
export const NewscastDocument = gql`
    query Newscast {
  newscasts {
    id
    createdAt
    updatedAt
    title
    thumbnail {
      url
    }
    published_at
    hot
  }
}
    `;

/**
 * __useNewscastQuery__
 *
 * To run a query within a React component, call `useNewscastQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewscastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewscastQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewscastQuery(baseOptions?: Apollo.QueryHookOptions<NewscastQuery, NewscastQueryVariables>) {
        return Apollo.useQuery<NewscastQuery, NewscastQueryVariables>(NewscastDocument, baseOptions);
      }
export function useNewscastLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewscastQuery, NewscastQueryVariables>) {
          return Apollo.useLazyQuery<NewscastQuery, NewscastQueryVariables>(NewscastDocument, baseOptions);
        }
export type NewscastQueryHookResult = ReturnType<typeof useNewscastQuery>;
export type NewscastLazyQueryHookResult = ReturnType<typeof useNewscastLazyQuery>;
export type NewscastQueryResult = Apollo.QueryResult<NewscastQuery, NewscastQueryVariables>;
export const HotNewsDocument = gql`
    query HotNews {
  newscasts(where: {hot: true}) {
    id
    title
  }
}
    `;

/**
 * __useHotNewsQuery__
 *
 * To run a query within a React component, call `useHotNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHotNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHotNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHotNewsQuery(baseOptions?: Apollo.QueryHookOptions<HotNewsQuery, HotNewsQueryVariables>) {
        return Apollo.useQuery<HotNewsQuery, HotNewsQueryVariables>(HotNewsDocument, baseOptions);
      }
export function useHotNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HotNewsQuery, HotNewsQueryVariables>) {
          return Apollo.useLazyQuery<HotNewsQuery, HotNewsQueryVariables>(HotNewsDocument, baseOptions);
        }
export type HotNewsQueryHookResult = ReturnType<typeof useHotNewsQuery>;
export type HotNewsLazyQueryHookResult = ReturnType<typeof useHotNewsLazyQuery>;
export type HotNewsQueryResult = Apollo.QueryResult<HotNewsQuery, HotNewsQueryVariables>;
export const NewsCastDetailDocument = gql`
    query NewsCastDetail($id: ID!) {
  newscast(id: $id) {
    id
    title
    content
    thumbnail {
      id
      caption
      url
    }
  }
}
    `;

/**
 * __useNewsCastDetailQuery__
 *
 * To run a query within a React component, call `useNewsCastDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsCastDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsCastDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsCastDetailQuery(baseOptions: Apollo.QueryHookOptions<NewsCastDetailQuery, NewsCastDetailQueryVariables>) {
        return Apollo.useQuery<NewsCastDetailQuery, NewsCastDetailQueryVariables>(NewsCastDetailDocument, baseOptions);
      }
export function useNewsCastDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsCastDetailQuery, NewsCastDetailQueryVariables>) {
          return Apollo.useLazyQuery<NewsCastDetailQuery, NewsCastDetailQueryVariables>(NewsCastDetailDocument, baseOptions);
        }
export type NewsCastDetailQueryHookResult = ReturnType<typeof useNewsCastDetailQuery>;
export type NewsCastDetailLazyQueryHookResult = ReturnType<typeof useNewsCastDetailLazyQuery>;
export type NewsCastDetailQueryResult = Apollo.QueryResult<NewsCastDetailQuery, NewsCastDetailQueryVariables>;
export const OldStudentsDocument = gql`
    query OldStudents {
  members(where: {isOldMember: true}) {
    id
    fullName
    email
    course
    school
    gender
    phone
    nominalRole
    Socials {
      id
      provider
      address
    }
    avatar {
      url
      formats
    }
  }
}
    `;

/**
 * __useOldStudentsQuery__
 *
 * To run a query within a React component, call `useOldStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOldStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOldStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOldStudentsQuery(baseOptions?: Apollo.QueryHookOptions<OldStudentsQuery, OldStudentsQueryVariables>) {
        return Apollo.useQuery<OldStudentsQuery, OldStudentsQueryVariables>(OldStudentsDocument, baseOptions);
      }
export function useOldStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OldStudentsQuery, OldStudentsQueryVariables>) {
          return Apollo.useLazyQuery<OldStudentsQuery, OldStudentsQueryVariables>(OldStudentsDocument, baseOptions);
        }
export type OldStudentsQueryHookResult = ReturnType<typeof useOldStudentsQuery>;
export type OldStudentsLazyQueryHookResult = ReturnType<typeof useOldStudentsLazyQuery>;
export type OldStudentsQueryResult = Apollo.QueryResult<OldStudentsQuery, OldStudentsQueryVariables>;
export const StudentCategoryDocument = gql`
    query StudentCategory {
  members {
    isMember
    isOldMember
    course
    school
  }
}
    `;

/**
 * __useStudentCategoryQuery__
 *
 * To run a query within a React component, call `useStudentCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentCategoryQuery(baseOptions?: Apollo.QueryHookOptions<StudentCategoryQuery, StudentCategoryQueryVariables>) {
        return Apollo.useQuery<StudentCategoryQuery, StudentCategoryQueryVariables>(StudentCategoryDocument, baseOptions);
      }
export function useStudentCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentCategoryQuery, StudentCategoryQueryVariables>) {
          return Apollo.useLazyQuery<StudentCategoryQuery, StudentCategoryQueryVariables>(StudentCategoryDocument, baseOptions);
        }
export type StudentCategoryQueryHookResult = ReturnType<typeof useStudentCategoryQuery>;
export type StudentCategoryLazyQueryHookResult = ReturnType<typeof useStudentCategoryLazyQuery>;
export type StudentCategoryQueryResult = Apollo.QueryResult<StudentCategoryQuery, StudentCategoryQueryVariables>;
export const PostCategoriesDocument = gql`
    query PostCategories {
  postCategories {
    id
    name
    parentCategory {
      id
      name
      subCategories {
        id
        name
      }
    }
    posts {
      id
    }
  }
}
    `;

/**
 * __usePostCategoriesQuery__
 *
 * To run a query within a React component, call `usePostCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<PostCategoriesQuery, PostCategoriesQueryVariables>) {
        return Apollo.useQuery<PostCategoriesQuery, PostCategoriesQueryVariables>(PostCategoriesDocument, baseOptions);
      }
export function usePostCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCategoriesQuery, PostCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<PostCategoriesQuery, PostCategoriesQueryVariables>(PostCategoriesDocument, baseOptions);
        }
export type PostCategoriesQueryHookResult = ReturnType<typeof usePostCategoriesQuery>;
export type PostCategoriesLazyQueryHookResult = ReturnType<typeof usePostCategoriesLazyQuery>;
export type PostCategoriesQueryResult = Apollo.QueryResult<PostCategoriesQuery, PostCategoriesQueryVariables>;
export const PostsListsDocument = gql`
    query PostsLists {
  posts {
    ...PostItem
  }
}
    ${PostItemFragmentDoc}`;

/**
 * __usePostsListsQuery__
 *
 * To run a query within a React component, call `usePostsListsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsListsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsListsQuery(baseOptions?: Apollo.QueryHookOptions<PostsListsQuery, PostsListsQueryVariables>) {
        return Apollo.useQuery<PostsListsQuery, PostsListsQueryVariables>(PostsListsDocument, baseOptions);
      }
export function usePostsListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsListsQuery, PostsListsQueryVariables>) {
          return Apollo.useLazyQuery<PostsListsQuery, PostsListsQueryVariables>(PostsListsDocument, baseOptions);
        }
export type PostsListsQueryHookResult = ReturnType<typeof usePostsListsQuery>;
export type PostsListsLazyQueryHookResult = ReturnType<typeof usePostsListsLazyQuery>;
export type PostsListsQueryResult = Apollo.QueryResult<PostsListsQuery, PostsListsQueryVariables>;
export const PostDetailDocument = gql`
    query PostDetail($id: ID!) {
  post(id: $id) {
    id
    title
    tags {
      title
    }
    author {
      id
      gender
      fullName
      avatar {
        url
      }
    }
    thumbnail {
      id
      url
      caption
    }
    content
    published_at
  }
}
    `;

/**
 * __usePostDetailQuery__
 *
 * To run a query within a React component, call `usePostDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostDetailQuery(baseOptions: Apollo.QueryHookOptions<PostDetailQuery, PostDetailQueryVariables>) {
        return Apollo.useQuery<PostDetailQuery, PostDetailQueryVariables>(PostDetailDocument, baseOptions);
      }
export function usePostDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostDetailQuery, PostDetailQueryVariables>) {
          return Apollo.useLazyQuery<PostDetailQuery, PostDetailQueryVariables>(PostDetailDocument, baseOptions);
        }
export type PostDetailQueryHookResult = ReturnType<typeof usePostDetailQuery>;
export type PostDetailLazyQueryHookResult = ReturnType<typeof usePostDetailLazyQuery>;
export type PostDetailQueryResult = Apollo.QueryResult<PostDetailQuery, PostDetailQueryVariables>;
export const PostListByCategoryDocument = gql`
    query PostListByCategory($categoryId: ID!) {
  posts(where: {categories: {id: $categoryId}}) {
    id
    title
    shortDescription
    createdBy {
      id
      firstname
      lastname
      email
    }
    categories {
      id
      name
    }
    thumbnail {
      id
      formats
    }
    createdAt
    updatedAt
    published_at
  }
}
    `;

/**
 * __usePostListByCategoryQuery__
 *
 * To run a query within a React component, call `usePostListByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostListByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostListByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePostListByCategoryQuery(baseOptions: Apollo.QueryHookOptions<PostListByCategoryQuery, PostListByCategoryQueryVariables>) {
        return Apollo.useQuery<PostListByCategoryQuery, PostListByCategoryQueryVariables>(PostListByCategoryDocument, baseOptions);
      }
export function usePostListByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostListByCategoryQuery, PostListByCategoryQueryVariables>) {
          return Apollo.useLazyQuery<PostListByCategoryQuery, PostListByCategoryQueryVariables>(PostListByCategoryDocument, baseOptions);
        }
export type PostListByCategoryQueryHookResult = ReturnType<typeof usePostListByCategoryQuery>;
export type PostListByCategoryLazyQueryHookResult = ReturnType<typeof usePostListByCategoryLazyQuery>;
export type PostListByCategoryQueryResult = Apollo.QueryResult<PostListByCategoryQuery, PostListByCategoryQueryVariables>;
export const ProductSideMenuDocument = gql`
    query ProductSideMenu {
  products {
    id
    type
    semester
  }
}
    `;

/**
 * __useProductSideMenuQuery__
 *
 * To run a query within a React component, call `useProductSideMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSideMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSideMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductSideMenuQuery(baseOptions?: Apollo.QueryHookOptions<ProductSideMenuQuery, ProductSideMenuQueryVariables>) {
        return Apollo.useQuery<ProductSideMenuQuery, ProductSideMenuQueryVariables>(ProductSideMenuDocument, baseOptions);
      }
export function useProductSideMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSideMenuQuery, ProductSideMenuQueryVariables>) {
          return Apollo.useLazyQuery<ProductSideMenuQuery, ProductSideMenuQueryVariables>(ProductSideMenuDocument, baseOptions);
        }
export type ProductSideMenuQueryHookResult = ReturnType<typeof useProductSideMenuQuery>;
export type ProductSideMenuLazyQueryHookResult = ReturnType<typeof useProductSideMenuLazyQuery>;
export type ProductSideMenuQueryResult = Apollo.QueryResult<ProductSideMenuQuery, ProductSideMenuQueryVariables>;
export const ProductsDocument = gql`
    query Products($type: ENUM_PRODUCTS_TYPE!) {
  products(where: {type: $type}) {
    id
    type
    name
    semester
    images {
      id
      caption
      url
    }
    performers {
      id
      fullName
      course
      nominalRole
    }
    functions {
      id
      title
    }
    extraInfo {
      id
      title
    }
    instructors {
      id
      fullName
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const RuleDocument = gql`
    query Rule {
  rule {
    id
    content
  }
}
    `;

/**
 * __useRuleQuery__
 *
 * To run a query within a React component, call `useRuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useRuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRuleQuery({
 *   variables: {
 *   },
 * });
 */
export function useRuleQuery(baseOptions?: Apollo.QueryHookOptions<RuleQuery, RuleQueryVariables>) {
        return Apollo.useQuery<RuleQuery, RuleQueryVariables>(RuleDocument, baseOptions);
      }
export function useRuleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RuleQuery, RuleQueryVariables>) {
          return Apollo.useLazyQuery<RuleQuery, RuleQueryVariables>(RuleDocument, baseOptions);
        }
export type RuleQueryHookResult = ReturnType<typeof useRuleQuery>;
export type RuleLazyQueryHookResult = ReturnType<typeof useRuleLazyQuery>;
export type RuleQueryResult = Apollo.QueryResult<RuleQuery, RuleQueryVariables>;
export const StudentsDocument = gql`
    query Students {
  members(where: {isMember: true, isOldMember: false}) {
    id
    fullName
    email
    course
    school
    gender
    phone
    isMember
    nominalRole
    Socials {
      id
      provider
      address
    }
    avatar {
      url
      formats
    }
  }
}
    `;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentsQuery(baseOptions?: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, baseOptions);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, baseOptions);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
export const TeamsDocument = gql`
    query Teams {
  teams {
    id
    name
  }
}
    `;

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: Apollo.QueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
        return Apollo.useQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
      }
export function useTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
          return Apollo.useLazyQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = Apollo.QueryResult<TeamsQuery, TeamsQueryVariables>;