import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** A DateTime representation in ISO format */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AccountType = {
  __typename?: 'AccountType';
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['DateTime']['output']>;
  is_editable?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type AccuralDetailLogs = {
  __typename?: 'AccuralDetailLogs';
  leave?: Maybe<LeaveType>;
  logs?: Maybe<AccuralLogs>;
  time_off?: Maybe<TimeOffType>;
};

export type AccuralHistory = {
  __typename?: 'AccuralHistory';
  accural_status?: Maybe<Scalars['String']['output']>;
  from_date?: Maybe<Scalars['Date']['output']>;
  leave_packeg_id?: Maybe<Scalars['ID']['output']>;
  packeg_name?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['Date']['output']>;
  users?: Maybe<Array<Maybe<UserAccural>>>;
};

export type AccuralHistoryHeader = {
  __typename?: 'AccuralHistoryHeader';
  employee_name?: Maybe<Scalars['String']['output']>;
  leavetypes?: Maybe<Array<Maybe<LeaveType>>>;
};

export type AccuralHistoryLogs = {
  __typename?: 'AccuralHistoryLogs';
  accural_status?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<UserDetailAccural>>>;
  from_date?: Maybe<Scalars['Date']['output']>;
  header?: Maybe<AccuralHistoryHeader>;
  leave_packeg_id?: Maybe<Scalars['ID']['output']>;
  packeg_name?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['Date']['output']>;
  total_employees?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type AccuralLogs = {
  __typename?: 'AccuralLogs';
  action_date?: Maybe<Scalars['Date']['output']>;
  carry_forword?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  pay_off?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<LeaveType>;
};

export type AirTicket = {
  __typename?: 'AirTicket';
  air_ticket_class?: Maybe<Scalars['String']['output']>;
  air_tickets_frequency?: Maybe<Scalars['String']['output']>;
  destination_city?: Maybe<Scalars['String']['output']>;
  destination_country?: Maybe<Country>;
  no_of_air_tickets?: Maybe<Scalars['Int']['output']>;
  orignal_city?: Maybe<Scalars['String']['output']>;
  orignal_country?: Maybe<Country>;
};

export type Alert = {
  __typename?: 'Alert';
  _id?: Maybe<Scalars['ID']['output']>;
  alertType?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<Asset>;
  availStatus?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  maintenance?: Maybe<Maintenance>;
};

export type AlertConfiguration = {
  __typename?: 'AlertConfiguration';
  afterDueDate?: Maybe<Scalars['Boolean']['output']>;
  before3Days?: Maybe<Scalars['Boolean']['output']>;
  before7Days?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  leadTime?: Maybe<Scalars['Int']['output']>;
  onTheDay?: Maybe<Scalars['Boolean']['output']>;
  sendEmail?: Maybe<Scalars['Boolean']['output']>;
};

export type AlertConfigurationInput = {
  afterDueDate?: InputMaybe<Scalars['Boolean']['input']>;
  before3Days?: InputMaybe<Scalars['Boolean']['input']>;
  before7Days?: InputMaybe<Scalars['Boolean']['input']>;
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  onTheDay?: InputMaybe<Scalars['Boolean']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AllowBusinessStatus {
  Active = 'active',
  All = 'all',
  Archive = 'archive',
  Inactive = 'inactive',
  Inprogress = 'inprogress',
  Rejected = 'rejected'
}

export enum AllowBusinessType {
  Franchiser = 'franchiser',
  FranchiserOem = 'franchiser_OEM',
  IndependentBusiness = 'independent_business'
}

export enum AllowMethodPhoneVerify {
  Call = 'call',
  Email = 'email',
  Sms = 'sms'
}

export type AllowPermissions = {
  __typename?: 'AllowPermissions';
  loggedInUserPermissions?: Maybe<Array<Maybe<Permission>>>;
  role?: Maybe<Role>;
};

export type Allowance = {
  __typename?: 'Allowance';
  _id: Scalars['ID']['output'];
  allowance_type: AllowanceType;
  amount: Scalars['Float']['output'];
  business_location?: Maybe<BusinessLocation>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_fixed: Scalars['Boolean']['output'];
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  is_taxable?: Maybe<Scalars['Boolean']['output']>;
  pay_slip_name: Scalars['String']['output'];
};

export type AllowanceData = {
  __typename?: 'AllowanceData';
  allowance?: Maybe<Allowance>;
  amount: Scalars['Float']['output'];
  is_percentage: Scalars['Boolean']['output'];
  taxable: Scalars['Boolean']['output'];
};

export type AllowanceList = {
  allowance: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  is_percentage: Scalars['Boolean']['input'];
};

export enum AllowanceType {
  Bonus = 'bonus',
  Expense = 'expense',
  HolidayOvertime = 'holiday_overtime',
  MobileAllowance = 'mobile_allowance',
  Other = 'other',
  OverTimeAllowance = 'over_time_allowance',
  SiteAccomodation = 'site_accomodation',
  TransportAllowance = 'transport_allowance',
  UnusedLeaveEncashment = 'unused_leave_encashment'
}

export enum AllowanceTypeFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive',
  Bonus = 'bonus',
  Expense = 'expense',
  HolidayOvertime = 'holiday_overtime',
  MobileAllowance = 'mobile_allowance',
  Other = 'other',
  OverTimeAllowance = 'over_time_allowance',
  SiteAccomodation = 'site_accomodation',
  TransportAllowance = 'transport_allowance',
  UnusedLeaveEncashment = 'unused_leave_encashment'
}

export type AllowancesType = {
  __typename?: 'AllowancesType';
  allowance?: Maybe<Allowance>;
  amount?: Maybe<Scalars['Float']['output']>;
  is_taxable?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export enum AllowedSubscriptionStatus {
  Active = 'active',
  All = 'all',
  Archive = 'archive',
  Canceled = 'canceled',
  Inprogress = 'inprogress',
  Rejected = 'rejected'
}

export enum AnimationTypeEnum {
  AutoScroll = 'auto_scroll',
  None = 'none'
}

export type AppraisalObjecive = {
  __typename?: 'AppraisalObjecive';
  AppraisalType?: Maybe<AppraisalType>;
  _id?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  weight_percent?: Maybe<Scalars['Int']['output']>;
};

export type AppraisalType = {
  __typename?: 'AppraisalType';
  _id: Scalars['ID']['output'];
  clockHistoryCount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_punctuality?: Maybe<Scalars['Boolean']['output']>;
  is_task?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target_type?: Maybe<TargetEnum>;
  totalHours?: Maybe<Scalars['Float']['output']>;
  total_hours_logged?: Maybe<Scalars['Float']['output']>;
};

export type ApprovalWorkFlow = {
  __typename?: 'ApprovalWorkFlow';
  _id?: Maybe<Scalars['ID']['output']>;
  action_performed?: Maybe<Scalars['Boolean']['output']>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  total_level?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  work_flow_levels?: Maybe<Array<Maybe<WorkFlowLevels>>>;
  work_flow_type?: Maybe<Scalars['String']['output']>;
};

export type ApprovalWorkFlowResult = {
  __typename?: 'ApprovalWorkFlowResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ApprovalWorkFlow>>>;
};

export type Asset = {
  __typename?: 'Asset';
  AssetBrand?: Maybe<AssetBrand>;
  AssetModel?: Maybe<AssetModel>;
  Vendor?: Maybe<Vendor>;
  _id?: Maybe<Scalars['ID']['output']>;
  actualQuantity?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  assetImage?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<User>;
  assignedSite?: Maybe<BusinessLocation>;
  assignedType?: Maybe<Scalars['String']['output']>;
  availStatus?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<AssetCategory>;
  checkIn_checkOut_date?: Maybe<Scalars['Date']['output']>;
  contractsAndLicenses?: Maybe<Array<Maybe<ContractLicense>>>;
  cost?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  currentCost?: Maybe<Scalars['Float']['output']>;
  department?: Maybe<Department>;
  depreciatedCost?: Maybe<Scalars['Float']['output']>;
  depreciation?: Maybe<Array<Maybe<Depreciation>>>;
  depreciationSalvageValue?: Maybe<Scalars['Int']['output']>;
  depreciationTenure?: Maybe<Scalars['Int']['output']>;
  depreciationType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detail?: Maybe<DisposeDetail>;
  disposeAsset?: Maybe<DisposeObj>;
  documents?: Maybe<Array<Maybe<Documents>>>;
  employee?: Maybe<User>;
  fields?: Maybe<Array<Maybe<FieldData>>>;
  id?: Maybe<Scalars['ID']['output']>;
  initialCost?: Maybe<Scalars['Float']['output']>;
  insuranceLinks?: Maybe<Array<Maybe<InsuranceLinks>>>;
  invoice?: Maybe<InvoicesList>;
  invoice_price?: Maybe<Scalars['String']['output']>;
  isAutoAssetId?: Maybe<Scalars['Boolean']['output']>;
  isDepreciation?: Maybe<Scalars['Boolean']['output']>;
  isLinkedRelation?: Maybe<Scalars['String']['output']>;
  isMoved?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  leaseBegin?: Maybe<Scalars['Date']['output']>;
  leaseEnd?: Maybe<Scalars['Date']['output']>;
  linkingAssets?: Maybe<Array<Maybe<LinkingAssets>>>;
  linkingTransactWhole?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Array<Maybe<LogsAsset>>>;
  maintenance?: Maybe<Maintenance>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notificationEmail?: Maybe<Scalars['String']['output']>;
  other_assignee?: Maybe<Scalars['String']['output']>;
  other_detail?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Scalars['String']['output']>;
  paymentDetails?: Maybe<Scalars['Int']['output']>;
  purchasedDate?: Maybe<Scalars['Date']['output']>;
  purchasedFrom?: Maybe<LeasingCustomer>;
  purchasedType?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  reserveAsset?: Maybe<ReserveAssets>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  site?: Maybe<BusinessLocation>;
  status?: Maybe<Scalars['String']['output']>;
  subCategory?: Maybe<AssetSubCategory>;
  type?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  uploadReceipt?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  warranty?: Maybe<Scalars['String']['output']>;
  warrantyExpiry?: Maybe<Scalars['Date']['output']>;
};

export type AssetBrand = {
  __typename?: 'AssetBrand';
  Business?: Maybe<Business>;
  _id: Scalars['ID']['output'];
  brand_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_linked?: Maybe<Scalars['Boolean']['output']>;
  updated_by?: Maybe<User>;
};

export type AssetBrandWithModel = {
  __typename?: 'AssetBrandWithModel';
  AssetModel?: Maybe<Array<Maybe<AssetModel>>>;
  Business?: Maybe<Business>;
  _id: Scalars['ID']['output'];
  brand_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  updated_by?: Maybe<User>;
};

export type AssetByBusinessResult = {
  __typename?: 'AssetByBusinessResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Asset>>>;
};

export type AssetByEmployeeResult = {
  __typename?: 'AssetByEmployeeResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Asset>>>;
};

export type AssetCategories = {
  __typename?: 'AssetCategories';
  created_at?: Maybe<Scalars['Date']['output']>;
  detail?: Maybe<SubCategoryType>;
  id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  linkedSubCategories?: Maybe<Scalars['Int']['output']>;
  linked_subCategories?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  subCategoryCount?: Maybe<Scalars['Int']['output']>;
  unlinkedSubCategories?: Maybe<Scalars['Int']['output']>;
  unlinked_sub_categories?: Maybe<Scalars['Int']['output']>;
};

export type AssetCategory = {
  __typename?: 'AssetCategory';
  _id?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_linked?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type AssetCountAndAlerts = {
  __typename?: 'AssetCountAndAlerts';
  assetAlert?: Maybe<AssetAlert>;
  assetCount?: Maybe<AssetCount>;
};

export type AssetCountResult = {
  __typename?: 'AssetCountResult';
  assigned: Scalars['Int']['output'];
  disposed: Scalars['Int']['output'];
  maintenance: Scalars['Int']['output'];
  reserved: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  unassigned: Scalars['Int']['output'];
};

export type AssetInput = {
  AssetBrand?: InputMaybe<Scalars['ID']['input']>;
  AssetModel?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetImage?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  assignedEmployee?: InputMaybe<Scalars['ID']['input']>;
  assignedType?: InputMaybe<Scalars['String']['input']>;
  availStatus?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  checkIn_checkOut_date?: InputMaybe<Scalars['Date']['input']>;
  contractsAndLicenses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  depreciation?: InputMaybe<Array<InputMaybe<DepreciationInput>>>;
  depreciationSalvageValue?: InputMaybe<Scalars['Int']['input']>;
  depreciationTenure?: InputMaybe<Scalars['Int']['input']>;
  depreciationType?: InputMaybe<DepreciationEnum>;
  description?: InputMaybe<Scalars['String']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Field>>>;
  initialCost?: InputMaybe<Scalars['Float']['input']>;
  insuranceLinks?: InputMaybe<Array<InputMaybe<InsuranceLinking>>>;
  isAutoAssetId?: InputMaybe<Scalars['Boolean']['input']>;
  isDepreciation?: InputMaybe<Scalars['Boolean']['input']>;
  isSeriallized?: InputMaybe<Scalars['Boolean']['input']>;
  leaseBegin?: InputMaybe<Scalars['Date']['input']>;
  leaseEnd?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manualAssetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  model?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notificationEmail?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Payment>;
  paymentDetails?: InputMaybe<Scalars['Int']['input']>;
  purchasedDate?: InputMaybe<Scalars['Date']['input']>;
  purchasedFrom?: InputMaybe<Scalars['ID']['input']>;
  purchasedType?: InputMaybe<PurchaseType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serialNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subCategory?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<TypeAsset>;
  uploadReceipt?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  warranty?: InputMaybe<Scalars['String']['input']>;
  warrantyExpiry?: InputMaybe<Scalars['Date']['input']>;
};

export type AssetModel = {
  __typename?: 'AssetModel';
  AssetBrand?: Maybe<AssetBrand>;
  Business?: Maybe<Business>;
  _id: Scalars['ID']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_linked?: Maybe<Scalars['Boolean']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<User>;
};

export type AssetSubCategory = {
  __typename?: 'AssetSubCategory';
  AssetCategory?: Maybe<AssetCategory>;
  actualCost?: Maybe<Scalars['Float']['output']>;
  assetCount?: Maybe<Scalars['Int']['output']>;
  currentValue?: Maybe<Scalars['Float']['output']>;
  depreciationValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_linked?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subCategoryUrl?: Maybe<Scalars['String']['output']>;
};

export type AssetUpdateInput = {
  AssetBrand?: InputMaybe<Scalars['ID']['input']>;
  AssetModel?: InputMaybe<Scalars['ID']['input']>;
  actualQuantity?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  assetIds?: InputMaybe<Scalars['String']['input']>;
  assetImage?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  assetImageUrl?: InputMaybe<Scalars['String']['input']>;
  assignedEmployee?: InputMaybe<Scalars['ID']['input']>;
  assignedType?: InputMaybe<Scalars['String']['input']>;
  availStatus?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  checkIn_checkOut_date?: InputMaybe<Scalars['Date']['input']>;
  contractsAndLicenses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  depreciation?: InputMaybe<Array<InputMaybe<DepreciationInput>>>;
  depreciationSalvageValue?: InputMaybe<Scalars['Int']['input']>;
  depreciationTenure?: InputMaybe<Scalars['Int']['input']>;
  depreciationType?: InputMaybe<DepreciationEnum>;
  description?: InputMaybe<Scalars['String']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Field>>>;
  initialCost?: InputMaybe<Scalars['Float']['input']>;
  insuranceLinks?: InputMaybe<Array<InputMaybe<InsuranceLinking>>>;
  isAutoAssetId?: InputMaybe<Scalars['Boolean']['input']>;
  isDepreciation?: InputMaybe<Scalars['Boolean']['input']>;
  leaseBegin?: InputMaybe<Scalars['Date']['input']>;
  leaseEnd?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manualAssetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  model?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notificationEmail?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Payment>;
  paymentDetails?: InputMaybe<Scalars['Int']['input']>;
  purchasedDate?: InputMaybe<Scalars['Date']['input']>;
  purchasedFrom?: InputMaybe<Scalars['ID']['input']>;
  purchasedType?: InputMaybe<PurchaseType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serialNumbers?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subCategory?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<TypeAsset>;
  uploadReceipt?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  warranty?: InputMaybe<Scalars['String']['input']>;
  warrantyExpiry?: InputMaybe<Scalars['Date']['input']>;
};

export type AssetUpdateInputS = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetImage?: InputMaybe<Array<Scalars['Upload']['input']>>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  manual?: InputMaybe<Scalars['Boolean']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serialNumber?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seriallized?: InputMaybe<Scalars['Boolean']['input']>;
  site?: InputMaybe<Scalars['ID']['input']>;
  subCategory?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignCategorySectionTypeReport = {
  __typename?: 'AssignCategorySectionTypeReport';
  QuizCategory?: Maybe<QuizCategory>;
  section_questions: Array<AssignQuestionSectionTypeReport>;
};

export type AssignQuestionSectionType = {
  __typename?: 'AssignQuestionSectionType';
  QuizCategorySection?: Maybe<QuizCategorySection>;
  question_answer?: Maybe<Array<Maybe<Question_AnswerType>>>;
};

export type AssignQuestionSectionTypeReport = {
  __typename?: 'AssignQuestionSectionTypeReport';
  QuizCategorySection?: Maybe<QuizCategorySection>;
  question_answer?: Maybe<Array<Maybe<Question_AnswerTypeReport>>>;
};

export enum Assign_To {
  All = 'all',
  EmployeeTenure = 'employee_tenure'
}

export type AssignedQuestion = {
  __typename?: 'AssignedQuestion';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_required?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  points?: Maybe<Scalars['Float']['output']>;
  question_text?: Maybe<Scalars['String']['output']>;
  question_type?: Maybe<Scalars['String']['output']>;
};

export type AssignedQuiz = {
  __typename?: 'AssignedQuiz';
  Department?: Maybe<Array<Maybe<Department>>>;
  Quiz?: Maybe<Quiz>;
  Role?: Maybe<Array<Maybe<Role>>>;
  User?: Maybe<User>;
  category_sections?: Maybe<Array<Maybe<AssignCategorySectionType>>>;
  created_by?: Maybe<User>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Date']['output']>;
  evaluate_by?: Maybe<Array<Maybe<User>>>;
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_graded?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  question_count?: Maybe<Scalars['Int']['output']>;
  quiz_end_time?: Maybe<Scalars['Date']['output']>;
  quiz_start_time?: Maybe<Scalars['Date']['output']>;
  start_time?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_score?: Maybe<Scalars['Float']['output']>;
};

export type AssignedQuizReport = {
  __typename?: 'AssignedQuizReport';
  Quiz?: Maybe<Quiz>;
  User?: Maybe<User>;
  category_sections?: Maybe<Array<Maybe<AssignCategorySectionTypeReport>>>;
  correct_questions?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<User>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Date']['output']>;
  evaluate_by?: Maybe<Array<Maybe<User>>>;
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_graded?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total_questions?: Maybe<Scalars['Int']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_score?: Maybe<Scalars['Float']['output']>;
};

export type AssignedUserQuiz = {
  __typename?: 'AssignedUserQuiz';
  Department?: Maybe<Array<Maybe<Department>>>;
  Quiz?: Maybe<Quiz>;
  Role?: Maybe<Array<Maybe<Role>>>;
  User?: Maybe<User>;
  category_sections?: Maybe<Array<Maybe<AssignCategorySectionType>>>;
  created_by?: Maybe<User>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Date']['output']>;
  evaluate_by?: Maybe<Array<Maybe<User>>>;
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_graded?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  question_count?: Maybe<Scalars['Int']['output']>;
  quiz_end_time?: Maybe<Scalars['Date']['output']>;
  quiz_start_time?: Maybe<Scalars['Date']['output']>;
  start_time?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_score?: Maybe<Scalars['Float']['output']>;
};

export type AssigneeFilteredByStatus = {
  __typename?: 'AssigneeFilteredByStatus';
  end_time?: Maybe<Scalars['Date']['output']>;
  start_time?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AssigneeUserData>;
};

export type AssigneeUserData = {
  __typename?: 'AssigneeUserData';
  completed_date?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  _id?: Maybe<Scalars['ID']['output']>;
  children?: Maybe<Array<Maybe<Attachment>>>;
  file?: Maybe<Scalars['String']['output']>;
  isFile?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Attachment>;
  subscription?: Maybe<Subscription>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type AttemptInput = {
  question_answer?: InputMaybe<Array<InputMaybe<QuestionAttemptInput>>>;
};

export type Attendance = {
  __typename?: 'Attendance';
  BusinessLocation?: Maybe<BusinessLocation>;
  User?: Maybe<User>;
  _id: Scalars['ID']['output'];
  attendanceStatus?: Maybe<Scalars['String']['output']>;
  attendance_adjusted_by?: Maybe<User>;
  attendance_date: Scalars['DateTime']['output'];
  attendance_log_detail?: Maybe<Array<Maybe<AttendanceLogDetail>>>;
  clock_in_time?: Maybe<Scalars['DateTime']['output']>;
  clock_out_time?: Maybe<Scalars['DateTime']['output']>;
  epoch_time?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_attendance_maually_adjusted?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_hours_logged?: Maybe<Scalars['String']['output']>;
  total_minutes_logged?: Maybe<Scalars['String']['output']>;
};

export type AttendanceByGroup = {
  __typename?: 'AttendanceByGroup';
  EmployeesList?: Maybe<AttendanceGroupEmployee>;
  absent?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Int']['output']>;
  break?: Maybe<Scalars['Int']['output']>;
  clockedOut?: Maybe<Scalars['Int']['output']>;
  exceedBreak?: Maybe<Scalars['Int']['output']>;
  holiday?: Maybe<Scalars['Int']['output']>;
  leave?: Maybe<Scalars['Int']['output']>;
  miss_punch_out?: Maybe<Scalars['Int']['output']>;
  shortBreak?: Maybe<Scalars['Int']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  upcoming_clock_in?: Maybe<Scalars['Int']['output']>;
  upcoming_clock_out?: Maybe<Scalars['Int']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
};

export type AttendanceData = {
  __typename?: 'AttendanceData';
  CategoryColor?: Maybe<Scalars['String']['output']>;
  EmployeeId?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  EndTime?: Maybe<Scalars['DateTime']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  ImageType?: Maybe<Scalars['String']['output']>;
  IsAllDay?: Maybe<Scalars['Boolean']['output']>;
  IsBlock?: Maybe<Scalars['Boolean']['output']>;
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  RemainingLeaves?: Maybe<Scalars['String']['output']>;
  StartTime?: Maybe<Scalars['DateTime']['output']>;
  Subject?: Maybe<Scalars['String']['output']>;
  TotalLeave?: Maybe<Scalars['Float']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  TypeOfAbsence?: Maybe<Scalars['String']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
};

export type AttendanceDataWithEmployees = {
  __typename?: 'AttendanceDataWithEmployees';
  data?: Maybe<Array<Maybe<AttendanceData>>>;
  employees?: Maybe<Array<Maybe<User>>>;
};

export type AttendanceEmployeeCount = {
  __typename?: 'AttendanceEmployeeCount';
  absent?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  leave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['String']['output']>;
};

export type AttendanceGroupEmployee = {
  __typename?: 'AttendanceGroupEmployee';
  absents?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  active?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  break?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  holiday?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  leaves?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  miss_punch_out?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  upcoming_clock_in?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  upcoming_clock_out?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
  weekend?: Maybe<Array<Maybe<EmployeeListAttendance>>>;
};

export type AttendanceInput = {
  employee: Scalars['ID']['input'];
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum AttendancePolicyFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export enum AttendancePolicyStatusFilter {
  Current = 'current',
  Previous = 'previous',
  Upcoming = 'upcoming'
}

export type AttendanceRegulation = {
  __typename?: 'AttendanceRegulation';
  _id?: Maybe<Scalars['ID']['output']>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approval_status?: Maybe<Scalars['String']['output']>;
  attendance_date?: Maybe<Scalars['DateTime']['output']>;
  behalf_of?: Maybe<Array<Maybe<User>>>;
  business?: Maybe<Business>;
  business_manager?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  logs?: Maybe<Array<Maybe<LogsAttendanceRegulation>>>;
  reason_type?: Maybe<Scalars['String']['output']>;
  roster?: Maybe<Roster>;
  status?: Maybe<Scalars['String']['output']>;
  time_in?: Maybe<Scalars['String']['output']>;
  time_out?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  work_flow?: Maybe<Array<Maybe<WorkFlow>>>;
};

export enum AttendancestatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

export enum Attrition {
  NonRegrettable = 'non_regrettable',
  Regrettable = 'regrettable'
}

export type AuthTokens = {
  __typename?: 'AuthTokens';
  businesses?: Maybe<Array<Maybe<Business>>>;
  rocketChat?: Maybe<RocketChat>;
  tokens?: Maybe<Tokens>;
  user?: Maybe<UserAuthDetail>;
};

export type Authenticator = {
  __typename?: 'Authenticator';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['String']['output']>;
  app_info?: Maybe<AuthenticatorAppInfo>;
  app_name?: Maybe<Scalars['String']['output']>;
  app_type?: Maybe<Scalars['String']['output']>;
  app_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_totp?: Maybe<Scalars['Boolean']['output']>;
  password_manager?: Maybe<PasswordManagerType>;
  share_with?: Maybe<Array<Maybe<ShareAuthenticatorApp>>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type AuthenticatorListWithPagination = {
  __typename?: 'AuthenticatorListWithPagination';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Authenticator>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AuthenticatorResult = {
  __typename?: 'AuthenticatorResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Authenticator>>>;
};

export type BlackOutWindow = {
  __typename?: 'BlackOutWindow';
  date?: Maybe<Scalars['DateTime']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export type BlackOutWindowInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Manufacturer?: Maybe<Manufacturer>;
  _id?: Maybe<Scalars['ID']['output']>;
  brand_type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Brand>;
  prefix?: Maybe<Scalars['String']['output']>;
};

export type BreakClockedHistory = {
  __typename?: 'BreakClockedHistory';
  User: User;
  _id: Scalars['ID']['output'];
  breakId?: Maybe<Scalars['ID']['output']>;
  breakInstatus?: Maybe<Scalars['String']['output']>;
  breakType?: Maybe<Scalars['String']['output']>;
  breakTypeId?: Maybe<Scalars['String']['output']>;
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_in_time?: Maybe<Scalars['String']['output']>;
  break_out_time?: Maybe<Scalars['String']['output']>;
  break_type?: Maybe<MasterDataValue>;
  message?: Maybe<Scalars['String']['output']>;
  minimum_break_percentage?: Maybe<Scalars['Int']['output']>;
  newWriteUp?: Maybe<NewWriteUp>;
  pending_writeups?: Maybe<Array<Maybe<WriteUp>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Break_ = {
  __typename?: 'Break_';
  duration: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Business = {
  __typename?: 'Business';
  Country?: Maybe<Country>;
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  business_email?: Maybe<Scalars['String']['output']>;
  business_identification_number?: Maybe<Scalars['String']['output']>;
  business_identification_type?: Maybe<Scalars['String']['output']>;
  business_keeping_unit?: Maybe<Scalars['String']['output']>;
  business_legal_name?: Maybe<Scalars['String']['output']>;
  business_package?: Maybe<BusinessPackage>;
  business_system_name?: Maybe<Scalars['String']['output']>;
  business_type?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  currency_format?: Maybe<Scalars['String']['output']>;
  currency_name?: Maybe<Scalars['String']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  date_format?: Maybe<Scalars['String']['output']>;
  is_24_hour_format?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  number_of_stores?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<User>;
  package?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<State>;
  status?: Maybe<Scalars['String']['output']>;
  time_zone?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type BusinessLocation = {
  __typename?: 'BusinessLocation';
  Country: Country;
  State?: Maybe<Scalars['ID']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  address_1?: Maybe<Scalars['String']['output']>;
  address_2?: Maybe<Scalars['String']['output']>;
  business_id: Business;
  city?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  duty_roaster?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  franchiser_business?: Maybe<Business>;
  identification_number?: Maybe<Scalars['String']['output']>;
  identification_type?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_store_configure?: Maybe<Scalars['Boolean']['output']>;
  location_keeping_unit?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Package>;
  phone?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Region>;
  sales_tax?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  store_legal_name?: Maybe<Scalars['String']['output']>;
  store_logo?: Maybe<Scalars['String']['output']>;
  store_name?: Maybe<Scalars['String']['output']>;
  store_nick_name?: Maybe<Scalars['String']['output']>;
  store_type?: Maybe<Scalars['String']['output']>;
  time_zone?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type BusinessLocationInput = {
  Country: Scalars['ID']['input'];
  State: Scalars['ID']['input'];
  address_1: Scalars['String']['input'];
  address_2?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['ID']['input']>;
  city: Scalars['ID']['input'];
  duty_roaster?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  franchisee_business?: InputMaybe<Scalars['ID']['input']>;
  identification_number: Scalars['String']['input'];
  identification_type?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  region?: InputMaybe<Scalars['ID']['input']>;
  sales_tax: Scalars['String']['input'];
  status: BusinessLocationStatus;
  store_legal_name: Scalars['String']['input'];
  store_logo?: InputMaybe<Scalars['Upload']['input']>;
  store_name: Scalars['String']['input'];
  store_nick_name: Scalars['String']['input'];
  store_type: StoreTypeEnum;
  time_zone?: InputMaybe<Scalars['String']['input']>;
  zip_code: Scalars['String']['input'];
};

export enum BusinessLocationStatus {
  Active = 'active',
  All = 'all',
  Approved = 'approved',
  Archive = 'archive',
  Inactive = 'inactive',
  Inprogress = 'inprogress',
  Rejected = 'rejected'
}

export type BusinessNavigation = {
  __typename?: 'BusinessNavigation';
  _id?: Maybe<Scalars['String']['output']>;
  accepted_by_user?: Maybe<User>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  navigation_users?: Maybe<Array<Maybe<BusinessNavigationUserList>>>;
  requested_by?: Maybe<Business>;
  requested_by_user?: Maybe<User>;
  requested_to?: Maybe<Business>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<User>;
};

export type BusinessNavigationUserList = {
  __typename?: 'BusinessNavigationUserList';
  employee?: Maybe<User>;
  role?: Maybe<Array<Maybe<Role>>>;
};

export type BusinessPackage = {
  __typename?: 'BusinessPackage';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  hr_module_only?: Maybe<Scalars['Boolean']['output']>;
  is_pakage_free: Scalars['Boolean']['output'];
  no_of_employee?: Maybe<Scalars['Int']['output']>;
  no_of_store?: Maybe<Scalars['Int']['output']>;
  no_of_transcation?: Maybe<Scalars['Int']['output']>;
  number_of_cashregisters?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Package>;
  package_name: Scalars['String']['output'];
  package_price: Scalars['Float']['output'];
  package_type: Scalars['String']['output'];
  permissions: Array<Maybe<Permission>>;
  recurring: PackageRecurrignType;
  status?: Maybe<Scalars['String']['output']>;
  subscribe_at?: Maybe<Scalars['DateTime']['output']>;
  transcation_fee?: Maybe<Scalars['Float']['output']>;
  transcation_fee_calculation_type?: Maybe<PackageTranscationFeeType>;
  transcation_fee_ending_limit?: Maybe<Scalars['Float']['output']>;
  transcation_fee_starting_limit?: Maybe<Scalars['Float']['output']>;
};

export type BusinessUpdate = {
  __typename?: 'BusinessUpdate';
  is_country_change?: Maybe<Scalars['Boolean']['output']>;
  is_date_format_change?: Maybe<Scalars['Boolean']['output']>;
  is_time_format_change?: Maybe<Scalars['Boolean']['output']>;
  is_time_zone_change?: Maybe<Scalars['Boolean']['output']>;
};

export type BusinessWithOtp = {
  __typename?: 'BusinessWithOtp';
  Country?: Maybe<Country>;
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  business_email?: Maybe<Scalars['String']['output']>;
  business_identification_number?: Maybe<Scalars['String']['output']>;
  business_identification_type?: Maybe<Scalars['String']['output']>;
  business_keeping_unit?: Maybe<Scalars['String']['output']>;
  business_legal_name?: Maybe<Scalars['String']['output']>;
  business_package?: Maybe<BusinessPackage>;
  business_system_name?: Maybe<Scalars['String']['output']>;
  business_type?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date_format?: Maybe<Scalars['String']['output']>;
  is_24_hour_format?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  number_of_stores?: Maybe<Scalars['String']['output']>;
  otp_code?: Maybe<Scalars['Int']['output']>;
  owner_id?: Maybe<User>;
  package?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<State>;
  status?: Maybe<Scalars['String']['output']>;
  time_zone?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Discount?: Maybe<Array<Maybe<Discount>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  statistics?: Maybe<Scalars['Float']['output']>;
  stores?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export enum CanReAttempts {
  Auto = 'auto',
  Manual = 'manual',
  NoReattampt = 'no_reattampt'
}

export type Capacity = {
  __typename?: 'Capacity';
  _id?: Maybe<Scalars['ID']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  storage_prefix?: Maybe<Scalars['String']['output']>;
  storage_size?: Maybe<Scalars['String']['output']>;
};

export type Carrier = {
  __typename?: 'Carrier';
  _id?: Maybe<Scalars['ID']['output']>;
  carrier_name?: Maybe<Scalars['String']['output']>;
  carrier_prefix?: Maybe<Scalars['String']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
};

export type CashDemonination = {
  __typename?: 'CashDemonination';
  CashRegisters?: Maybe<CashRegisters>;
  TillCountLogs?: Maybe<TillCount>;
  User?: Maybe<User>;
  qty?: Maybe<Scalars['Int']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['Float']['output']>;
};

export type CashRegisters = {
  __typename?: 'CashRegisters';
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  closing_amount?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  opening_amount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<CashRegisterStatus>;
  total_cash?: Maybe<Scalars['Float']['output']>;
};

export type CashRegistersHistory = {
  __typename?: 'CashRegistersHistory';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  CashRegisters?: Maybe<CashRegisters>;
  Transaction?: Maybe<Transaction>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  previous_amount?: Maybe<Scalars['Float']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  transaction_amount?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  type_of_payment?: Maybe<Scalars['String']['output']>;
  updated_amount?: Maybe<Scalars['Float']['output']>;
};

export type CashRegistersHistoryListing = {
  __typename?: 'CashRegistersHistoryListing';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<CashRegistersHistory>>>;
};

export type Category = {
  __typename?: 'Category';
  _id?: Maybe<Scalars['ID']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
};

export type CategorySectionInput = {
  QuizCategory: Scalars['ID']['input'];
  section_questions: Array<QuestionSectionInput>;
};

export type CategorySectionType = {
  __typename?: 'CategorySectionType';
  QuizCategory?: Maybe<QuizCategory>;
  section_questions: Array<QuestionSectionType>;
};

export type ChartOfAccount = {
  __typename?: 'ChartOfAccount';
  _id?: Maybe<Scalars['ID']['output']>;
  account_balance?: Maybe<Scalars['Int']['output']>;
  account_code?: Maybe<Scalars['String']['output']>;
  account_name?: Maybe<Scalars['String']['output']>;
  account_type?: Maybe<AccountType>;
  as_of?: Maybe<Scalars['DateTime']['output']>;
  business?: Maybe<Business>;
  businessLocation?: Maybe<BusinessLocation>;
  description?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_editable?: Maybe<Scalars['Boolean']['output']>;
  is_sub_account?: Maybe<Scalars['Boolean']['output']>;
  is_system_generated?: Maybe<Scalars['Boolean']['output']>;
  opening_balance?: Maybe<Scalars['Int']['output']>;
  parent_account?: Maybe<ChartOfAccount>;
};

export type CheckInAssetInput = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  assetId?: InputMaybe<Scalars['ID']['input']>;
  checkInDate?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CheckerInput = {
  question_answer?: InputMaybe<Array<InputMaybe<CheckerMarkerInput>>>;
};

export type CheckerMarkerInput = {
  is_correct?: InputMaybe<Scalars['Boolean']['input']>;
  points_earned?: InputMaybe<Scalars['Float']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
};

export type CheckoutAssetInput = {
  asset?: InputMaybe<Array<InputMaybe<AssetIds>>>;
  assignedType?: InputMaybe<AssignedType>;
  checkoutDate?: InputMaybe<Scalars['String']['input']>;
  other_detail?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type ChildTax = {
  __typename?: 'ChildTax';
  _id: Scalars['ID']['output'];
  child_tax_amount?: Maybe<Scalars['String']['output']>;
  child_tax_is_percentage?: Maybe<Scalars['Boolean']['output']>;
  child_tax_name?: Maybe<Scalars['String']['output']>;
};

export type City = {
  __typename?: 'City';
  Country?: Maybe<Country>;
  State?: Maybe<State>;
  _id?: Maybe<Scalars['ID']['output']>;
  city_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  short_name?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type ClockedHistory = {
  __typename?: 'ClockedHistory';
  BusinessLocation?: Maybe<Scalars['ID']['output']>;
  Payroll?: Maybe<Payroll>;
  PreviousUserHistory?: Maybe<UserHistory>;
  Schedule?: Maybe<Schedule>;
  User: User;
  UserHistory?: Maybe<UserHistory>;
  _id: Scalars['ID']['output'];
  attendanceDate?: Maybe<Scalars['String']['output']>;
  attendanceStatus?: Maybe<Scalars['String']['output']>;
  attendance_adjusted_by?: Maybe<User>;
  attendance_date?: Maybe<Scalars['Date']['output']>;
  attendance_log_detail?: Maybe<Array<Maybe<AttendanceLogDetail>>>;
  breaks?: Maybe<Array<Maybe<BreakClockedHistory>>>;
  clock_in_time?: Maybe<Scalars['String']['output']>;
  clock_out_time?: Maybe<Scalars['String']['output']>;
  clockedInStatus?: Maybe<Scalars['String']['output']>;
  clockedOutStatus?: Maybe<Scalars['String']['output']>;
  is_attendance_maually_adjusted?: Maybe<Scalars['Boolean']['output']>;
  is_back_pay?: Maybe<Scalars['Boolean']['output']>;
  is_over_time_public_holiday?: Maybe<Scalars['Boolean']['output']>;
  is_over_time_weekend?: Maybe<Scalars['Boolean']['output']>;
  is_paid_public_holiday?: Maybe<Scalars['Boolean']['output']>;
  is_paid_weekend?: Maybe<Scalars['Boolean']['output']>;
  is_payroll_processed?: Maybe<Scalars['Boolean']['output']>;
  is_public_holiday?: Maybe<Scalars['Boolean']['output']>;
  is_public_holiday_off?: Maybe<Scalars['Boolean']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  is_update_pending?: Maybe<Scalars['Boolean']['output']>;
  is_weekend?: Maybe<Scalars['Boolean']['output']>;
  logged_seconds?: Maybe<Scalars['Int']['output']>;
  logs?: Maybe<Array<Maybe<LogType>>>;
  manually_logs?: Maybe<Array<Maybe<ManuallyLogs>>>;
  message?: Maybe<Scalars['String']['output']>;
  newWriteUp?: Maybe<NewWriteUp>;
  normal_time_minutes_logged?: Maybe<Scalars['Int']['output']>;
  over_time_minutes_logged?: Maybe<Scalars['Int']['output']>;
  pay_period?: Maybe<Scalars['String']['output']>;
  pending_writeups?: Maybe<Array<Maybe<WriteUp>>>;
  remarks?: Maybe<Scalars['String']['output']>;
  salary_type?: Maybe<Scalars['String']['output']>;
  short_break_count?: Maybe<Scalars['Int']['output']>;
  short_break_detail?: Maybe<Array<Maybe<Short_Break_Detail>>>;
  short_breaks?: Maybe<ShortBreak>;
  short_leave?: Maybe<Array<Maybe<ShortLeave>>>;
  status?: Maybe<Scalars['String']['output']>;
  total_hours_logged?: Maybe<Scalars['String']['output']>;
  total_minutes_logged?: Maybe<Scalars['String']['output']>;
  total_wages?: Maybe<Scalars['String']['output']>;
  total_working_hours_logged?: Maybe<Scalars['String']['output']>;
  total_working_minutes_logged?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  weekOverTime?: Maybe<Scalars['Int']['output']>;
  weeklyTotalLogTime?: Maybe<Scalars['Int']['output']>;
  write_up_type?: Maybe<Scalars['String']['output']>;
  writup_id?: Maybe<Scalars['ID']['output']>;
};

export type ClockedInStatus = {
  __typename?: 'ClockedInStatus';
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  attendanceStatus?: Maybe<Scalars['String']['output']>;
  clock_in_date?: Maybe<Scalars['DateTime']['output']>;
  clock_in_time?: Maybe<Scalars['String']['output']>;
  is_clockedIn: Scalars['Boolean']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type Color = {
  __typename?: 'Color';
  _id?: Maybe<Scalars['ID']['output']>;
  color_name?: Maybe<Scalars['String']['output']>;
  color_prefix?: Maybe<Scalars['String']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
};

export type CommisionCampaignInput = {
  Business: Scalars['ID']['input'];
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Commission = {
  __typename?: 'Commission';
  Brand?: Maybe<Array<Maybe<SystemBrand>>>;
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Category?: Maybe<Array<Maybe<ServiceCategory>>>;
  CommissionCampaign?: Maybe<CommissionCampaign>;
  Department?: Maybe<Array<Maybe<Department>>>;
  DeviceModel?: Maybe<Array<Maybe<DeviceModel>>>;
  DeviceType?: Maybe<Array<Maybe<DeviceType>>>;
  Employee?: Maybe<Array<Maybe<User>>>;
  Product?: Maybe<Array<Maybe<Product>>>;
  ProductType?: Maybe<Array<Maybe<ProductCategoryType>>>;
  Role?: Maybe<Array<Maybe<Role>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  business_type?: Maybe<Scalars['String']['output']>;
  commission_amount: Scalars['Float']['output'];
  commission_duration?: Maybe<_Commission_Duration>;
  commission_name?: Maybe<Scalars['String']['output']>;
  commission_on?: Maybe<CommissionOn>;
  commission_store?: Maybe<_Commission_Store>;
  commission_type?: Maybe<_Commission_Type>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<Array<Maybe<User>>>;
  description?: Maybe<Scalars['String']['output']>;
  highest_sale_duration?: Maybe<_Sale_Duration>;
  is_active?: Maybe<Is_Active>;
  is_all_brands?: Maybe<Scalars['Boolean']['output']>;
  is_all_categories?: Maybe<Scalars['Boolean']['output']>;
  is_all_departments?: Maybe<Scalars['Boolean']['output']>;
  is_all_deviceModels?: Maybe<Scalars['Boolean']['output']>;
  is_all_deviceTypes?: Maybe<Scalars['Boolean']['output']>;
  is_all_employee?: Maybe<Scalars['Boolean']['output']>;
  is_all_productTypes?: Maybe<Scalars['Boolean']['output']>;
  is_all_products?: Maybe<Scalars['Boolean']['output']>;
  is_all_roles?: Maybe<Scalars['Boolean']['output']>;
  is_commission_on_sale?: Maybe<Scalars['Boolean']['output']>;
  is_commission_type_percentage?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['DateTime']['output']>;
  is_greater_then?: Maybe<Scalars['Boolean']['output']>;
  is_on_highest_sales?: Maybe<Scalars['Boolean']['output']>;
  on_gt_eq_sale_duration?: Maybe<_Sale_Duration>;
  on_gt_eq_sale_number?: Maybe<Scalars['Float']['output']>;
  pay_Type?: Maybe<Scalars['String']['output']>;
  pay_schedule?: Maybe<Scalars['String']['output']>;
  reach?: Maybe<Scalars['Float']['output']>;
  redeem_by?: Maybe<Array<Maybe<Customer>>>;
  salary_type?: Maybe<Scalars['String']['output']>;
  schedule_from?: Maybe<Scalars['DateTime']['output']>;
  schedule_to?: Maybe<Scalars['DateTime']['output']>;
  statistics?: Maybe<Scalars['Float']['output']>;
  status: _Status;
  stores?: Maybe<Array<Maybe<BusinessLocation>>>;
  till_date?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Array<Maybe<User>>>;
};

export type CommissionCampaign = {
  __typename?: 'CommissionCampaign';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Commission?: Maybe<Array<Maybe<Commission>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  statistics?: Maybe<Scalars['Float']['output']>;
  stores?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CommissionDetails = {
  __typename?: 'CommissionDetails';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<Commission>>>;
};

export type CommissionInput = {
  Brand?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Business: Scalars['ID']['input'];
  BusinessLocation: Scalars['ID']['input'];
  Category?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  CommissionCampaign: Scalars['ID']['input'];
  Department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  DeviceModel?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  DeviceType?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Employee?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Product?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ProductType?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  business_type?: InputMaybe<AllowBusinessType>;
  commission_amount: Scalars['Float']['input'];
  commission_duration?: InputMaybe<_Commission_Duration>;
  commission_name: Scalars['String']['input'];
  commission_on: CommissionOn;
  commission_store?: InputMaybe<_Commission_Store>;
  commission_type?: InputMaybe<_Commission_Type>;
  description?: InputMaybe<Scalars['String']['input']>;
  highest_sale_duration?: InputMaybe<_Sale_Duration>;
  is_active?: InputMaybe<IsActive>;
  is_all_brands?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_categories?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_departments: Scalars['Boolean']['input'];
  is_all_deviceModels?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_deviceTypes?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_employee?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_productTypes?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_products?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_roles?: InputMaybe<Scalars['Boolean']['input']>;
  is_commission_on_sale?: InputMaybe<Scalars['Boolean']['input']>;
  is_commission_type_percentage?: InputMaybe<Scalars['Boolean']['input']>;
  is_greater_then?: InputMaybe<Scalars['Boolean']['input']>;
  is_on_highest_sales?: InputMaybe<Scalars['Boolean']['input']>;
  life_time?: InputMaybe<Scalars['Boolean']['input']>;
  on_gt_eq_sale_duration?: InputMaybe<_Sale_Duration>;
  on_gt_eq_sale_number?: InputMaybe<Scalars['Float']['input']>;
  pay_schedule?: InputMaybe<Scalars['String']['input']>;
  pay_type?: InputMaybe<Scalars['String']['input']>;
  salary_type?: InputMaybe<Scalars['String']['input']>;
  schedule_from?: InputMaybe<Scalars['DateTime']['input']>;
  schedule_to?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<_Status>;
  stores?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  till_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum CommissionOn {
  Repairs = 'repairs',
  Sales = 'sales'
}

export type ConfigListing = {
  __typename?: 'ConfigListing';
  _id?: Maybe<Scalars['ID']['output']>;
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  filters?: Maybe<Array<Maybe<ListingFiltersType>>>;
  no_of_records?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ConfigListingEnum {
  AccessoriesListing = 'AccessoriesListing',
  AlertListing = 'AlertListing',
  AllInvoiceListing = 'AllInvoiceListing',
  AllowanceListing = 'AllowanceListing',
  AppraisalReportsExtendedListing = 'AppraisalReportsExtendedListing',
  AppraisalReportsListing = 'AppraisalReportsListing',
  ApprovalWorkFlowListing = 'ApprovalWorkFlowListing',
  ApraisalEvaluationListing = 'ApraisalEvaluationListing',
  ApraisalReviewcyclereport = 'ApraisalReviewcyclereport',
  AssetCategoryListing = 'AssetCategoryListing',
  AssetListing = 'AssetListing',
  AssetReportListing = 'AssetReportListing',
  AssetsAccessoryByBusinessListing = 'AssetsAccessoryByBusinessListing',
  AssetsByBusinessListing = 'AssetsByBusinessListing',
  AssetsByEmployeeListing = 'AssetsByEmployeeListing',
  AttendanceApprovalsListing = 'AttendanceApprovalsListing',
  AttendancePolicyExtendedView = 'AttendancePolicyExtendedView',
  AttendancePolicyListing = 'AttendancePolicyListing',
  AttendancePolicyPreviousListing = 'AttendancePolicyPreviousListing',
  AttendancePolicyUpcomingListing = 'AttendancePolicyUpcomingListing',
  AttendanceRequestListing = 'AttendanceRequestListing',
  BusinessExpenseListing = 'BusinessExpenseListing',
  BusinessFranchiserListing = 'BusinessFranchiserListing',
  BusinessListing = 'BusinessListing',
  BusinessLocationListing = 'BusinessLocationListing',
  BusinessLocationThirdPartyListing = 'BusinessLocationThirdPartyListing',
  BusinessfranchiserOemListing = 'BusinessfranchiserOEMListing',
  CashRegisterListing = 'CashRegisterListing',
  CashRegistersHistoryListing = 'CashRegistersHistoryListing',
  CategoryDetailsListings = 'CategoryDetailsListings',
  ChartOfAccountListing = 'ChartOfAccountListing',
  ComissionListing = 'ComissionListing',
  CommentListing = 'CommentListing',
  CommissionCampaignListing = 'CommissionCampaignListing',
  CommissionListing = 'CommissionListing',
  ContractLicenseListing = 'ContractLicenseListing',
  ContributionsListing = 'ContributionsListing',
  DeductionListing = 'DeductionListing',
  DepartmentListing = 'DepartmentListing',
  DesignationListing = 'DesignationListing',
  DiscountItemListings = 'DiscountItemListings',
  DiscountListing = 'DiscountListing',
  DisposeAssetListing = 'DisposeAssetListing',
  DocumentUplaodListing = 'DocumentUplaodListing',
  DocumentsControlListing = 'DocumentsControlListing',
  EmailSmtpConfigListing = 'EmailSMTPConfigListing',
  EmailTemplateListing = 'EmailTemplateListing',
  EmployeeDocumentsListing = 'EmployeeDocumentsListing',
  EmployeeGarnishmentListing = 'EmployeeGarnishmentListing',
  EmployeeSeparationListing = 'EmployeeSeparationListing',
  EmployeeTimeLineHistoryListing = 'EmployeeTimeLineHistoryListing',
  EmployeesListing = 'EmployeesListing',
  ExpenseApprovalListing = 'ExpenseApprovalListing',
  ExpenseInvoiceCategoryListing = 'ExpenseInvoiceCategoryListing',
  ExpenseInvoiceDetailsListing = 'ExpenseInvoiceDetailsListing',
  ExpenseInvoiceListing = 'ExpenseInvoiceListing',
  ExpenseListing = 'ExpenseListing',
  ExpenseRequestListing = 'ExpenseRequestListing',
  GiftCardCategoryListing = 'GiftCardCategoryListing',
  GiftCardListing = 'GiftCardListing',
  GoalsListing = 'GoalsListing',
  InsuranceListing = 'InsuranceListing',
  InvoiceItemListings = 'InvoiceItemListings',
  LeaveTypeListing = 'LeaveTypeListing',
  LoanListing = 'LoanListing',
  LoanRequestListing = 'LoanRequestListing',
  LoanTransictionListing = 'LoanTransictionListing',
  MaintenanceListing = 'MaintenanceListing',
  MedicalInsuranceListing = 'MedicalInsuranceListing',
  MedicalInsurancePackageEmployee = 'MedicalInsurancePackageEmployee',
  MedicalInsurancePackageListing = 'MedicalInsurancePackageListing',
  MyApraisalEvaluationListing = 'MyApraisalEvaluationListing',
  MyQuizTrainingListing = 'MyQuizTrainingListing',
  ObjectiveAssignmentsListing = 'ObjectiveAssignmentsListing',
  PackageListing = 'PackageListing',
  PayrollScheduleListing = 'PayrollScheduleListing',
  PayrollStructureListing = 'PayrollStructureListing',
  PerformanceCycleListing = 'PerformanceCycleListing',
  PerformanceGoalsListing = 'PerformanceGoalsListing',
  PlaidTransactionListing = 'PlaidTransactionListing',
  PublicHolidayListing = 'PublicHolidayListing',
  QuickAccessoriesListing = 'QuickAccessoriesListing',
  QuickAssetListing = 'QuickAssetListing',
  QuickAssetReportListing = 'QuickAssetReportListing',
  QuizAssignedListing = 'QuizAssignedListing',
  QuizCatgoryListing = 'QuizCatgoryListing',
  QuizEvaluationListing = 'QuizEvaluationListing',
  QuizListing = 'QuizListing',
  QuizTrainingAssignmentListing = 'QuizTrainingAssignmentListing',
  QuizTrainingListing = 'QuizTrainingListing',
  QuizTrainingReplicaListing = 'QuizTrainingReplicaListing',
  RegionsListing = 'RegionsListing',
  ReserveAssetListing = 'ReserveAssetListing',
  RolesListing = 'RolesListing',
  ShiftsListing = 'ShiftsListing',
  SubCategoryItemListings = 'SubCategoryItemListings',
  SubscriptionListing = 'SubscriptionListing',
  SubscriptionLogListing = 'SubscriptionLogListing',
  TaskListing = 'TaskListing',
  TimeLineHistoryByEmployeeId = 'TimeLineHistoryByEmployeeId',
  TimeOffEmployeeListing = 'TimeOffEmployeeListing',
  TimeOffListing = 'TimeOffListing',
  TimeOffRequestListing = 'TimeOffRequestListing',
  UserQuizAssignedListing = 'UserQuizAssignedListing',
  WriteUpApprovalListing = 'WriteUpApprovalListing',
  WriteUpListing = 'WriteUpListing',
  WriteUpListingByEmployeeId = 'WriteUpListingByEmployeeId',
  AppraisalListing = 'appraisalListing',
  AppraisalObjectiveListing = 'appraisalObjectiveListing',
  AppraisalScaleListing = 'appraisalScaleListing',
  AssetModelListing = 'assetModelListing',
  AssteBrandListing = 'assteBrandListing',
  AssteLinkedBrandListing = 'assteLinkedBrandListing',
  AuthenticatorAppListing = 'authenticatorAppListing',
  FinalSettlementListing = 'finalSettlementListing',
  GetConnectedAppDeviceList = 'getConnectedAppDeviceList',
  PayrollBiWeeklyListing = 'payrollBiWeeklyListing',
  PayrollPerMonthListing = 'payrollPerMonthListing',
  PayrollTwiceMonthListing = 'payrollTwiceMonthListing',
  PayrollWeeklyListing = 'payrollWeeklyListing',
  RecruitmentListing = 'recruitmentListing',
  ShareWithMeAppListing = 'shareWithMeAppListing',
  TerminalAppDeviceListing = 'terminalAppDeviceListing',
  TerminalAppHistoryListing = 'terminalAppHistoryListing',
  UserAppDeviceExtendListing = 'userAppDeviceExtendListing',
  UserAppDeviceListing = 'userAppDeviceListing'
}

export type ConfigListingInput = {
  columns?: InputMaybe<Array<InputMaybe<ListingColumnsInput>>>;
  filters?: InputMaybe<Array<InputMaybe<ListingFiltersInput>>>;
  no_of_records?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ConfigListingEnum>;
};

export type ConflictSchedule = {
  __typename?: 'ConflictSchedule';
  Business?: Maybe<Business>;
  conflicted_schedule?: Maybe<Schedule>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  employee_action?: Maybe<Scalars['String']['output']>;
  employee_id?: Maybe<User>;
  employee_name?: Maybe<Scalars['String']['output']>;
  is_attendance_exist?: Maybe<Scalars['Boolean']['output']>;
  is_conflict?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_leave?: Maybe<Scalars['Boolean']['output']>;
  is_overlap?: Maybe<Scalars['Boolean']['output']>;
  is_salary_detail_not_exist?: Maybe<Scalars['Boolean']['output']>;
  new_schedule?: Maybe<Schedule>;
};

export type ContractLicense = {
  __typename?: 'ContractLicense';
  contactPerson?: Maybe<Scalars['String']['output']>;
  contractLicenseTitle?: Maybe<Scalars['String']['output']>;
  contractNo?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isForSoftware?: Maybe<Scalars['Boolean']['output']>;
  isNoEndDate?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  logs?: Maybe<Array<Maybe<ContractLogs>>>;
  noOfLicenses?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type ContractLicenseFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ContractLicenseResult = {
  __typename?: 'ContractLicenseResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ContractLicense>>>;
};

export type Contribution = {
  __typename?: 'Contribution';
  _id?: Maybe<Scalars['ID']['output']>;
  business: Business;
  contribution_amount: Scalars['Float']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  is_calculate_amount_fixed: Scalars['Boolean']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name_pay_slip: Scalars['String']['output'];
};

export type ContributionData = {
  __typename?: 'ContributionData';
  amount: Scalars['Float']['output'];
  contribution?: Maybe<Contribution>;
  is_percentage: Scalars['Boolean']['output'];
};

export type ContributionInput = {
  business: Scalars['String']['input'];
  contribution_amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_calculate_amount_fixed: Scalars['Boolean']['input'];
  name_pay_slip: Scalars['String']['input'];
};

export type ContributionList = {
  amount: Scalars['Float']['input'];
  contribution: Scalars['ID']['input'];
  is_percentage: Scalars['Boolean']['input'];
};

export type ContributionsType = {
  __typename?: 'ContributionsType';
  amount?: Maybe<Scalars['Float']['output']>;
  contribution?: Maybe<Contribution>;
  is_taxable?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export type Country = {
  __typename?: 'Country';
  _id?: Maybe<Scalars['ID']['output']>;
  identification_types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
};

export type CreateAssetCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateAssetCategoryOrSubCategoryInput = {
  AssetCategoryId?: InputMaybe<Scalars['ID']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  subCategoryName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subCategoryUrl?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreateAssetInput = {
  AssetBrand?: InputMaybe<Scalars['ID']['input']>;
  AssetModel?: InputMaybe<Scalars['ID']['input']>;
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetImage?: InputMaybe<Array<Scalars['Upload']['input']>>;
  assignedEmployee?: InputMaybe<Scalars['ID']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['ID']['input'];
  cost?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  depreciation?: InputMaybe<Array<InputMaybe<DepreciationInput>>>;
  depreciationSalvageValue?: InputMaybe<Scalars['Int']['input']>;
  depreciationTenure?: InputMaybe<Scalars['Int']['input']>;
  depreciationType?: InputMaybe<DepreciationEnum>;
  description?: InputMaybe<Scalars['String']['input']>;
  initialCost?: InputMaybe<Scalars['Float']['input']>;
  isAutoAssetId?: InputMaybe<Scalars['Boolean']['input']>;
  isDepreciation?: InputMaybe<Scalars['Boolean']['input']>;
  isSeriallized?: InputMaybe<Scalars['Boolean']['input']>;
  manualAssetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purchasedDate?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  serialNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site?: InputMaybe<Scalars['ID']['input']>;
  subCategory: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssetSubCategoryInput = {
  AssetCategoryId: Scalars['ID']['input'];
  categoryUrl?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCategoriesInput = {
  name: Scalars['String']['input'];
  sections?: InputMaybe<Array<CreateCategorySectionInput>>;
};

export type CreateCategorySectionInput = {
  name: Scalars['String']['input'];
  score: Scalars['Int']['input'];
};

export type CreateEmployeeDashboardViewInput = {
  card_size?: InputMaybe<Scalars['String']['input']>;
  card_width?: InputMaybe<Scalars['Float']['input']>;
  is_bold_emp_name?: InputMaybe<Scalars['Boolean']['input']>;
  is_bold_status_time?: InputMaybe<Scalars['Boolean']['input']>;
  is_system_default_screen?: InputMaybe<Scalars['Boolean']['input']>;
  name_format?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  profile_picture_size?: InputMaybe<Scalars['String']['input']>;
  status_display?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  view_type: EmployeeDashboardViewEnum;
  views: Array<EmployeeDashboardViewSectionInput>;
};

export type CreateQuestionInput = {
  QuizCategory: Scalars['ID']['input'];
  QuizCategorySection: Scalars['ID']['input'];
  questions?: InputMaybe<Array<InputMaybe<MultiQuestion>>>;
};

export type CreateQuizInput = {
  Department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  assignTo?: InputMaybe<Array<Scalars['ID']['input']>>;
  can_assign_traning?: InputMaybe<Scalars['Boolean']['input']>;
  can_re_attempts?: InputMaybe<CanReAttempts>;
  category_sections: Array<CategorySectionInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['String']['input'];
  end_date?: InputMaybe<Scalars['Date']['input']>;
  end_time?: InputMaybe<Scalars['Date']['input']>;
  evaluate_by?: InputMaybe<Array<Scalars['ID']['input']>>;
  evaluator_department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  evaluator_role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  grade?: InputMaybe<Array<GradeInput>>;
  is_attempt_one_by_one?: InputMaybe<Scalars['Boolean']['input']>;
  is_random?: InputMaybe<Scalars['Boolean']['input']>;
  is_shuffling?: InputMaybe<Scalars['Boolean']['input']>;
  max_attempts?: InputMaybe<Scalars['Int']['input']>;
  passing_marks?: InputMaybe<Scalars['Float']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  start_time?: InputMaybe<Scalars['Date']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTrainingInput = {
  Quiz?: InputMaybe<Scalars['ID']['input']>;
  attachments: Array<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUpdateEmployeeInput = {
  employeeAccount?: InputMaybe<EmployeeAccountInput>;
  employeeDocumentsList?: InputMaybe<EmployeeDocumentsInput>;
  employeeEmployeeTimeLine?: InputMaybe<EmployeeEmployeeTimeLineInput>;
  employeeInfo?: InputMaybe<EmployeeInfoInput>;
  employeeSalaryTaxDetails?: InputMaybe<EmployeeSalaryTaxDetails>;
  employeeSalaryTransferMethod?: InputMaybe<EmployeeSalaryTransferMethodInput>;
  employeeTimeOff?: InputMaybe<EmployeeTimeOffInput>;
  employeeTimeRuleAttendance?: InputMaybe<EmployeeTimeRuleAttendanceInput>;
  employmentContract?: InputMaybe<EmploymentContractInput>;
  joiningLatter?: InputMaybe<JoiningLatterInput>;
  section: EmployeeSections;
};

export type CurrendClockedInSchedule = {
  __typename?: 'CurrendClockedInSchedule';
  Schedule?: Maybe<Schedule>;
  short_break?: Maybe<ShortBreak>;
  taken_breaks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  taken_short_breaks?: Maybe<Scalars['Int']['output']>;
  total_allowed_short_breaks?: Maybe<Scalars['Int']['output']>;
};

export enum CustomFieldTypeEnum {
  Customer = 'customer'
}

export type CustomFieldTypeInput = {
  controlType?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<CustomFieldTypeOptionInput>>>;
  order?: InputMaybe<Scalars['Float']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldTypeOptionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldTypeOptionType = {
  __typename?: 'CustomFieldTypeOptionType';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type Deduction = {
  __typename?: 'Deduction';
  _id?: Maybe<Scalars['ID']['output']>;
  business: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deduction_amount: Scalars['Float']['output'];
  deduction_tax_plan: Scalars['Boolean']['output'];
  is_calculate_amount_fixed: Scalars['Boolean']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  name_pay_slip: Scalars['String']['output'];
};

export type DeductionData = {
  __typename?: 'DeductionData';
  amount: Scalars['Float']['output'];
  deduction?: Maybe<Deduction>;
  is_percentage: Scalars['Boolean']['output'];
  taxable: Scalars['Boolean']['output'];
};

export type DeductionInput = {
  business: Scalars['String']['input'];
  deduction_amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_calculate_amount_fixed: Scalars['Boolean']['input'];
  name_pay_slip: Scalars['String']['input'];
};

export type DeductionList = {
  amount: Scalars['Float']['input'];
  deduction: Scalars['ID']['input'];
  is_percentage: Scalars['Boolean']['input'];
};

export type DeductionsType = {
  __typename?: 'DeductionsType';
  amount?: Maybe<Scalars['Float']['output']>;
  deduction?: Maybe<Deduction>;
  is_taxable?: Maybe<Scalars['Boolean']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export type DelegantApproval = {
  __typename?: 'DelegantApproval';
  Business?: Maybe<Business>;
  approval_type?: Maybe<WorkFlowTypeEnum>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  delegate_approvers?: Maybe<Array<Maybe<User>>>;
  original_approver?: Maybe<User>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Scalars['DateTime']['output']>;
};

export enum DeletedType {
  Node = 'node',
  Tree = 'tree'
}

export type Department = {
  __typename?: 'Department';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  businessLocation?: Maybe<BusinessLocation>;
  department_name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employee_count?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
};

export type DepartmentOvertime = {
  __typename?: 'DepartmentOvertime';
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['ID']['output']>;
  totalOvertimeMinutes?: Maybe<Scalars['Int']['output']>;
  totalOvertimeWages?: Maybe<Scalars['Float']['output']>;
};

export type DepartmentOvertimeResult = {
  __typename?: 'DepartmentOvertimeResult';
  perDepartment?: Maybe<Array<Maybe<DepartmentOvertime>>>;
  totalSummary?: Maybe<OvertimeTotalSummary>;
};

export type DepartmentRosterData = {
  __typename?: 'DepartmentRosterData';
  CategoryColor?: Maybe<Scalars['String']['output']>;
  EndTime?: Maybe<Scalars['DateTime']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  IsAllDay?: Maybe<Scalars['Boolean']['output']>;
  IsBlock?: Maybe<Scalars['Boolean']['output']>;
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  StartTime?: Maybe<Scalars['DateTime']['output']>;
  Subject?: Maybe<Scalars['String']['output']>;
  TaskId?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type Designation = {
  __typename?: 'Designation';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessLocation?: Maybe<BusinessLocation>;
  designation_name?: Maybe<Scalars['String']['output']>;
  employee_count?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  brand?: Maybe<SystemBrand>;
  device_prefix?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DeviceStatusEnum {
  Linked = 'linked',
  Unlinked = 'unlinked'
}

export type DeviceType = {
  __typename?: 'DeviceType';
  _id?: Maybe<Scalars['ID']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
  type_prefix?: Maybe<Scalars['String']['output']>;
};

export type Discount = {
  __typename?: 'Discount';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Campaign?: Maybe<Campaign>;
  Product?: Maybe<Array<Maybe<Product>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  business_type?: Maybe<Scalars['String']['output']>;
  can_schedule: Scalars['Boolean']['output'];
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  customerTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  customer_since?: Maybe<Scalars['DateTime']['output']>;
  discount_amount?: Maybe<Scalars['Float']['output']>;
  engagement?: Maybe<Scalars['Float']['output']>;
  isSendEmail?: Maybe<Scalars['Boolean']['output']>;
  is_active: Is_Active;
  is_customer_can_use_only_once?: Maybe<Scalars['Boolean']['output']>;
  is_customer_more_then_said_amount?: Maybe<Scalars['Boolean']['output']>;
  is_customer_since?: Maybe<Scalars['Boolean']['output']>;
  is_customer_spent_amount: Scalars['Boolean']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_discount_percentage?: Maybe<Scalars['Boolean']['output']>;
  is_entire_order?: Maybe<Scalars['Boolean']['output']>;
  /** it will depend */
  is_minimum_purchase?: Maybe<Scalars['Boolean']['output']>;
  is_minimum_purchase_amount?: Maybe<Scalars['Boolean']['output']>;
  is_new_customer_only?: Maybe<Scalars['Boolean']['output']>;
  is_single_store?: Maybe<Scalars['Boolean']['output']>;
  multi_stores?: Maybe<Array<Maybe<BusinessLocation>>>;
  new_customer_register_after_date?: Maybe<Scalars['DateTime']['output']>;
  number_of_usage_per_customer?: Maybe<Scalars['Float']['output']>;
  purchaseAmountQuantity?: Maybe<Scalars['Float']['output']>;
  reach?: Maybe<Scalars['Float']['output']>;
  redeem_by?: Maybe<Array<Maybe<Customer>>>;
  schedule_from?: Maybe<Scalars['DateTime']['output']>;
  schedule_to?: Maybe<Scalars['DateTime']['output']>;
  single_store?: Maybe<BusinessLocation>;
  spent_amount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type DiscountDetail = {
  __typename?: 'DiscountDetail';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<Discount>>>;
};

export type DiscountInput = {
  Business: Scalars['ID']['input'];
  BusinessLocation: Scalars['ID']['input'];
  Campaign: Scalars['ID']['input'];
  Product?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  business_type: Scalars['String']['input'];
  can_schedule: Scalars['Boolean']['input'];
  code: Scalars['String']['input'];
  customerTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customer_since?: InputMaybe<Scalars['String']['input']>;
  discount_amount: Scalars['Float']['input'];
  isSendEmail: Scalars['Boolean']['input'];
  is_active: Is_Active;
  is_customer_can_use_only_once: Scalars['Boolean']['input'];
  is_customer_more_then_said_amount: Scalars['Boolean']['input'];
  is_customer_since: Scalars['Boolean']['input'];
  is_customer_spent_amount: Scalars['Boolean']['input'];
  is_discount_percentage: Scalars['Boolean']['input'];
  is_entire_order: Scalars['Boolean']['input'];
  is_minimum_purchase: Scalars['Boolean']['input'];
  is_minimum_purchase_amount: Scalars['Boolean']['input'];
  is_new_customer_only: Scalars['Boolean']['input'];
  is_single_store: Scalars['Boolean']['input'];
  multi_stores?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  number_of_usage_per_customer?: InputMaybe<Scalars['Float']['input']>;
  purchaseAmountQuantity?: InputMaybe<Scalars['Float']['input']>;
  reach?: InputMaybe<Scalars['Int']['input']>;
  schedule_from?: InputMaybe<Scalars['String']['input']>;
  schedule_to?: InputMaybe<Scalars['String']['input']>;
  single_store?: InputMaybe<Scalars['ID']['input']>;
  spent_amount?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DividePermission = {
  __typename?: 'DividePermission';
  POSPermissionResult?: Maybe<Array<Maybe<Permission>>>;
  adminPermissionResult?: Maybe<Array<Maybe<Permission>>>;
};

export type DocumentControlAttachment = {
  __typename?: 'DocumentControlAttachment';
  _id?: Maybe<Scalars['ID']['output']>;
  activity_name?: Maybe<Scalars['String']['output']>;
  activity_type?: Maybe<Activity_Type>;
  assign_to?: Maybe<AssignToType>;
  attachment?: Maybe<Scalars['String']['output']>;
  bread_crum?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  business?: Maybe<Business>;
  businessLocation?: Maybe<BusinessLocation>;
  children?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  clock_in_time?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  details?: Maybe<DocumentControlAttachmentDetail>;
  document_type?: Maybe<Scalars['String']['output']>;
  employeeDocumentUpload?: Maybe<Array<Maybe<EmployeeDocumentUpload>>>;
  extension?: Maybe<Scalars['String']['output']>;
  google_drive_attachment?: Maybe<Scalars['String']['output']>;
  google_drive_id?: Maybe<Scalars['String']['output']>;
  group?: Maybe<DocumentControlAttachment>;
  grouped_activities?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  isEmployeeUpload?: Maybe<Scalars['Boolean']['output']>;
  isFile?: Maybe<Scalars['Boolean']['output']>;
  is_activity_folder?: Maybe<Scalars['Boolean']['output']>;
  is_asset_main_folder?: Maybe<Scalars['Boolean']['output']>;
  is_default_document?: Maybe<Scalars['Boolean']['output']>;
  is_employee_folder?: Maybe<Scalars['Boolean']['output']>;
  is_employee_main_folder?: Maybe<Scalars['Boolean']['output']>;
  is_group?: Maybe<Scalars['Boolean']['output']>;
  is_hide_after_review?: Maybe<Scalars['Boolean']['output']>;
  is_owner?: Maybe<Scalars['Boolean']['output']>;
  is_sign_required?: Maybe<Scalars['Boolean']['output']>;
  is_submission_required?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  not_responded?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<DocumentControlAttachment>;
  receivedDocumentInMultipleAction?: Maybe<Scalars['String']['output']>;
  responded?: Maybe<Scalars['Int']['output']>;
  share_as?: Maybe<Scalars['String']['output']>;
  share_by?: Maybe<Scalars['String']['output']>;
  share_with?: Maybe<Array<Maybe<Share_With>>>;
  signatureDeliveryOption?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  uploadfileref?: Maybe<Scalars['String']['output']>;
  validity?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentControlAttachmentDetail = {
  __typename?: 'DocumentControlAttachmentDetail';
  files?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['Int']['output']>;
};

export type DocumentControlAttachmenttWithData = {
  __typename?: 'DocumentControlAttachmenttWithData';
  Doucuments?: Maybe<DocumentControlAttachment>;
  detail?: Maybe<DocumentDetail>;
};

export type DocumentListType = {
  __typename?: 'DocumentListType';
  Role?: Maybe<Role>;
  _id?: Maybe<Scalars['String']['output']>;
  assinged_to?: Maybe<User>;
  documents_description?: Maybe<Scalars['String']['output']>;
  documents_expiry_date?: Maybe<Scalars['Date']['output']>;
  documents_name?: Maybe<Scalars['String']['output']>;
  documents_type?: Maybe<Scalars['String']['output']>;
  google_drive_id?: Maybe<Scalars['String']['output']>;
  is_documents_hide?: Maybe<Scalars['Boolean']['output']>;
  is_email_notify?: Maybe<Scalars['Boolean']['output']>;
  upload_documents?: Maybe<Scalars['String']['output']>;
};

export enum DocumentTypeEnums {
  Owner = 'owner',
  Shared = 'shared'
}

export type EmailSmtpConfigration = {
  __typename?: 'EmailSMTPConfigration';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  configuration_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  from_email?: Maybe<Scalars['String']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  used_for?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export type EmailSmtpConfigrationResult = {
  __typename?: 'EmailSMTPConfigrationResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<EmailSmtpConfigration>>>;
};

export type EmailScheduleInput = {
  body: Scalars['String']['input'];
  email_to_me?: InputMaybe<Scalars['Boolean']['input']>;
  employees: Array<InputMaybe<Scalars['ID']['input']>>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  include_comment?: InputMaybe<Scalars['Boolean']['input']>;
  include_total_hours?: InputMaybe<Scalars['Boolean']['input']>;
  is_html_format?: InputMaybe<Scalars['Boolean']['input']>;
  is_include_schedule?: InputMaybe<Scalars['Boolean']['input']>;
  send_option?: InputMaybe<SendEmailOption>;
  subject: Scalars['String']['input'];
  view?: InputMaybe<ViewSchedule>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  business_address?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_phone?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  email_subject?: Maybe<Scalars['String']['output']>;
  footer_logo?: Maybe<Scalars['String']['output']>;
  header_logo?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  support_email?: Maybe<Scalars['String']['output']>;
  template_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type EmailTemplateResult = {
  __typename?: 'EmailTemplateResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<EmailTemplate>>>;
};

export type EmployeeAdpResponse = {
  __typename?: 'EmployeeADPResponse';
  adpId?: Maybe<Scalars['ID']['output']>;
  employee_id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type EmployeeAccountInput = {
  account_representive_code?: InputMaybe<Scalars['String']['input']>;
  account_status: Scalars['String']['input'];
  associated_customer?: InputMaybe<Scalars['String']['input']>;
  auth_pin: Scalars['String']['input'];
  badge_code?: InputMaybe<Scalars['String']['input']>;
  custom_user?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  send_order_email_to_parent?: InputMaybe<Scalars['String']['input']>;
  send_sales_order_email?: InputMaybe<Scalars['String']['input']>;
  users_password_manager?: InputMaybe<EmployeeEncryptionKeyInput>;
};

export type EmployeeAirTicketInput = {
  air_ticket_class: Scalars['String']['input'];
  air_tickets_frequency: Scalars['String']['input'];
  destination_city: Scalars['String']['input'];
  destination_country: Scalars['ID']['input'];
  no_of_air_tickets: Scalars['Int']['input'];
  orignal_city: Scalars['String']['input'];
  orignal_country: Scalars['ID']['input'];
};

export type EmployeeAllowances = {
  allowance: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  percentage?: InputMaybe<Scalars['Float']['input']>;
};

export type EmployeeContributions = {
  amount: Scalars['Float']['input'];
  contribution: Scalars['ID']['input'];
  percentage?: InputMaybe<Scalars['Float']['input']>;
};

export type EmployeeDashboardView = {
  __typename?: 'EmployeeDashboardView';
  Business?: Maybe<Business>;
  card_size?: Maybe<Scalars['String']['output']>;
  card_width?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['ID']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  deleted_by?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  is_bold_emp_name?: Maybe<Scalars['Boolean']['output']>;
  is_bold_status_time?: Maybe<Scalars['Boolean']['output']>;
  is_default_screen?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_system_default_screen?: Maybe<Scalars['Boolean']['output']>;
  name_format?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  profile_picture_size?: Maybe<Scalars['String']['output']>;
  status_display?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['ID']['output']>;
  view_type: EmployeeDashboardViewEnum;
  views: Array<EmployeeDashboardViewSection>;
};

export type EmployeeDashboardViewConfig = {
  __typename?: 'EmployeeDashboardViewConfig';
  array_list?: Maybe<Scalars['String']['output']>;
  classes?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
};

export type EmployeeDashboardViewConfigInput = {
  array_list?: InputMaybe<Scalars['String']['input']>;
  classes?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
};

export enum EmployeeDashboardViewEnum {
  Custom = 'custom',
  Default = 'default'
}

export type EmployeeDashboardViewSection = {
  __typename?: 'EmployeeDashboardViewSection';
  animation: AnimationTypeEnum;
  animation_speed?: Maybe<Scalars['Float']['output']>;
  arrays?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns: Scalars['Int']['output'];
  configs?: Maybe<Array<Maybe<EmployeeDashboardViewConfig>>>;
  options?: Maybe<Scalars['JSON']['output']>;
  section_title: EmployeeDashboardViewSectionEnum;
  sort_order?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  upcoming_clock_reminder_time?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export enum EmployeeDashboardViewSectionEnum {
  Active = 'active',
  BreakAndShortBreak = 'break_and_short_break',
  Default = 'default',
  LeaveAndAbsentees = 'leave_and_absentees',
  PublicHolidaysAndWeekend = 'public_holidays_and_weekend',
  UpcomingClockIn = 'upcoming_clock_in',
  UpcomingClockOut = 'upcoming_clock_out'
}

export type EmployeeDashboardViewSectionInput = {
  animation: AnimationTypeEnum;
  animation_speed?: InputMaybe<Scalars['Float']['input']>;
  arrays?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columns: Scalars['Int']['input'];
  configs?: InputMaybe<Array<InputMaybe<EmployeeDashboardViewConfigInput>>>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  section_title: EmployeeDashboardViewSectionEnum;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  upcoming_clock_reminder_time?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type EmployeeDeductions = {
  amount: Scalars['Float']['input'];
  deduction: Scalars['ID']['input'];
  percentage?: InputMaybe<Scalars['Float']['input']>;
};

export type EmployeeDocument = {
  __typename?: 'EmployeeDocument';
  document_description?: Maybe<Scalars['String']['output']>;
  document_file_path?: Maybe<Scalars['String']['output']>;
};

export type EmployeeDocumentInput = {
  document?: InputMaybe<Scalars['Upload']['input']>;
  document_description?: InputMaybe<Scalars['String']['input']>;
  document_file_path?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeDocumentsInput = {
  Role?: InputMaybe<Scalars['ID']['input']>;
  assinged_to?: InputMaybe<Scalars['ID']['input']>;
  documents_description?: InputMaybe<Scalars['String']['input']>;
  documents_expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  documents_name?: InputMaybe<Scalars['String']['input']>;
  documents_type: Scalars['String']['input'];
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  is_documents_hide?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_notify?: InputMaybe<Scalars['Boolean']['input']>;
  upload_documents: Scalars['Upload']['input'];
};

export type EmployeeEmployeeTimeLineInput = {
  account_status?: InputMaybe<Scalars['String']['input']>;
  action_type: ActionTypeEnum;
  adjustment_start_from?: InputMaybe<Scalars['DateTime']['input']>;
  attendance_policy: Scalars['ID']['input'];
  basic_salary?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  employee_type: Scalars['String']['input'];
  is_email_notify?: InputMaybe<Scalars['Boolean']['input']>;
  is_excluding_pay_roll: Scalars['Boolean']['input'];
  is_use_new_salary?: InputMaybe<Scalars['Boolean']['input']>;
  line_manager?: InputMaybe<Scalars['ID']['input']>;
  new_salary_effect_from: Scalars['DateTime']['input'];
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  pay_schedule: Scalars['ID']['input'];
  pay_type?: InputMaybe<Scalars['String']['input']>;
  public_day_hourly_salary?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Array<Scalars['ID']['input']>>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
  salary_type: Scalars['String']['input'];
  shift?: InputMaybe<Scalars['ID']['input']>;
  storeAccess?: InputMaybe<Array<InputMaybe<EmployeeStoreAccessInput>>>;
  total_week_hours?: InputMaybe<Scalars['Int']['input']>;
  weekend_day_salary?: InputMaybe<Scalars['String']['input']>;
  weekly_hourly_salary?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeGarnishment = {
  __typename?: 'EmployeeGarnishment';
  _id?: Maybe<Scalars['ID']['output']>;
  assignTo?: Maybe<User>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  document?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  fix_amount?: Maybe<Scalars['Float']['output']>;
  garnishment?: Maybe<Scalars['String']['output']>;
  garnishment_account?: Maybe<Scalars['String']['output']>;
  garnishment_creator?: Maybe<Scalars['String']['output']>;
  garnishment_type?: Maybe<Scalars['String']['output']>;
  google_drive_id?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type EmployeeInfoInput = {
  Country: Scalars['ID']['input'];
  address_1: Scalars['String']['input'];
  address_2?: InputMaybe<Scalars['String']['input']>;
  birth_date: Scalars['DateTime']['input'];
  city: Scalars['ID']['input'];
  default_image?: InputMaybe<Scalars['String']['input']>;
  employee_id?: InputMaybe<Scalars['String']['input']>;
  extra_no?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  home_no?: InputMaybe<Scalars['String']['input']>;
  is_phone_no_verified?: InputMaybe<Scalars['Boolean']['input']>;
  last_name: Scalars['String']['input'];
  license_no?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  marital_status?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  mobile_no_to_send_sms?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  passport_number?: InputMaybe<Scalars['String']['input']>;
  personal_email?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  preffered_name?: InputMaybe<Scalars['String']['input']>;
  ssn_no?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['ID']['input'];
  support_name?: InputMaybe<Scalars['String']['input']>;
  vehicle_no?: InputMaybe<Scalars['String']['input']>;
  vehicle_type?: InputMaybe<Scalars['String']['input']>;
  work_no?: InputMaybe<Scalars['String']['input']>;
  zipcode: Scalars['String']['input'];
};

export type EmployeeList = {
  __typename?: 'EmployeeList';
  employeeList?: Maybe<Array<Maybe<User>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EmployeeListAttendance = {
  __typename?: 'EmployeeListAttendance';
  BreakExceedTime?: Maybe<Scalars['Int']['output']>;
  activeTime?: Maybe<Scalars['Int']['output']>;
  breakTime?: Maybe<Scalars['Int']['output']>;
  clockHistoryId?: Maybe<Scalars['String']['output']>;
  clock_in_time?: Maybe<Scalars['DateTime']['output']>;
  clockedInStatus?: Maybe<Scalars['String']['output']>;
  isClockedOut?: Maybe<Scalars['Boolean']['output']>;
  schedule_end_time?: Maybe<Scalars['DateTime']['output']>;
  schedule_start_time?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type EmployeeListWithAssets = {
  __typename?: 'EmployeeListWithAssets';
  assetCount?: Maybe<Scalars['Int']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  joining_date?: Maybe<Scalars['String']['output']>;
  profile_pictures?: Maybe<Array<Maybe<Image>>>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type EmployeeMedicalInsuranceInput = {
  expiry_date_of_policy?: InputMaybe<Scalars['DateTime']['input']>;
  insurance_card: Scalars['String']['input'];
  insurance_class: Scalars['String']['input'];
  total_policy_amount_monthly?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeSalaryTaxDetails = {
  EmployeeGarnishment?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  additional_tax_override?: InputMaybe<Scalars['String']['input']>;
  additional_withholding_amount?: InputMaybe<Scalars['String']['input']>;
  adp?: InputMaybe<Scalars['String']['input']>;
  allowances?: InputMaybe<Array<InputMaybe<EmployeeAllowances>>>;
  basic_salary?: InputMaybe<Scalars['Float']['input']>;
  contributions?: InputMaybe<Array<InputMaybe<EmployeeContributions>>>;
  deductions?: InputMaybe<Array<InputMaybe<EmployeeDeductions>>>;
  employee_group: Scalars['ID']['input'];
  employee_home_address?: InputMaybe<Scalars['String']['input']>;
  employee_work_address?: InputMaybe<Scalars['String']['input']>;
  is_customzied_overtime?: InputMaybe<Scalars['Boolean']['input']>;
  is_excluding_pay_roll?: InputMaybe<Scalars['Boolean']['input']>;
  is_exempt_federal_tax?: InputMaybe<Scalars['Boolean']['input']>;
  is_exempt_from_withholding?: InputMaybe<Scalars['Boolean']['input']>;
  is_exempt_income_tax?: InputMaybe<Scalars['Boolean']['input']>;
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  pay_schedule: Scalars['ID']['input'];
  pay_type?: InputMaybe<Scalars['String']['input']>;
  public_day_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
  salary_template?: InputMaybe<Scalars['String']['input']>;
  salary_type: Scalars['String']['input'];
  sales_tax_allowances?: InputMaybe<Scalars['String']['input']>;
  starting_date?: InputMaybe<Scalars['DateTime']['input']>;
  tax_override?: InputMaybe<Scalars['String']['input']>;
  tax_override_amount?: InputMaybe<Scalars['String']['input']>;
  total_allowances?: InputMaybe<Scalars['String']['input']>;
  total_week_hours?: InputMaybe<Scalars['Int']['input']>;
  w4_form?: InputMaybe<Scalars['String']['input']>;
  weekend_day_salary?: InputMaybe<Scalars['Float']['input']>;
  weekly_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
  withholding_status?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeSalaryTransferMethodInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  account_title?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  branch_code?: InputMaybe<Scalars['String']['input']>;
  local_code?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  routing_number?: InputMaybe<Scalars['String']['input']>;
  salary_payment_method?: InputMaybe<Scalars['String']['input']>;
  swift_code?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeStoreAccessInput = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  cashRegister?: InputMaybe<Array<Scalars['ID']['input']>>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type EmployeeTimeOffInput = {
  time_off?: InputMaybe<Array<InputMaybe<TimeOffEmployeeInput>>>;
};

export type EmployeeTimeRuleAttendanceInput = {
  is_attendance_rule_applied?: InputMaybe<Scalars['Boolean']['input']>;
  is_breaktime_exception?: InputMaybe<Scalars['Boolean']['input']>;
  is_earlyout?: InputMaybe<Scalars['Boolean']['input']>;
  is_enable_checkin_checkout_access?: InputMaybe<Scalars['Boolean']['input']>;
  is_hours_in_a_day?: InputMaybe<Scalars['Boolean']['input']>;
  is_late_arrival?: InputMaybe<Scalars['Boolean']['input']>;
  is_leave_restriction?: InputMaybe<Scalars['Boolean']['input']>;
  is_missing_attendance?: InputMaybe<Scalars['Boolean']['input']>;
  is_over_time_policy?: InputMaybe<Scalars['Boolean']['input']>;
  is_self_service_access?: InputMaybe<Scalars['Boolean']['input']>;
  is_send_email_notification?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeesAssetInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeesByDepWithoutLimits = {
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  designation?: InputMaybe<Array<Scalars['ID']['input']>>;
  employee_type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pay_schedule?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type EmployeesDepartments = {
  __typename?: 'EmployeesDepartments';
  department?: Maybe<Department>;
  employees?: Maybe<Scalars['Int']['output']>;
};

export type EmployeesDepartmentsList = {
  __typename?: 'EmployeesDepartmentsList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<EmployeesDepartments>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmployeesSitesInput = {
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SearchUserTypeenum>;
};

export type EmployeesWithClockedHistoryInput = {
  department?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  status?: InputMaybe<AttendanceWithStatus>;
};

export type EmployessByDepartment = {
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  designation?: InputMaybe<Array<Scalars['ID']['input']>>;
  employee_type?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type EmploymentContractInput = {
  air_ticket?: InputMaybe<EmployeeAirTicketInput>;
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  designation?: InputMaybe<Scalars['ID']['input']>;
  eligibility_date?: InputMaybe<Scalars['DateTime']['input']>;
  employee_type: Scalars['String']['input'];
  hire_date: Scalars['DateTime']['input'];
  is_air_ticket?: InputMaybe<Scalars['Boolean']['input']>;
  is_gratuity?: InputMaybe<Scalars['Boolean']['input']>;
  is_medical_insurance?: InputMaybe<Scalars['Boolean']['input']>;
  is_payroll_run_on_business?: InputMaybe<Scalars['Boolean']['input']>;
  is_store_wise: Scalars['Boolean']['input'];
  joining_date: Scalars['DateTime']['input'];
  leave_policy_id?: InputMaybe<Scalars['DateTime']['input']>;
  line_manager?: InputMaybe<Scalars['ID']['input']>;
  medical_insurance?: InputMaybe<EmployeeMedicalInsuranceInput>;
  probation_period?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Array<Scalars['ID']['input']>>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
  shift?: InputMaybe<Scalars['ID']['input']>;
  storeAccess?: InputMaybe<Array<InputMaybe<EmployeeStoreAccessInput>>>;
};

export type EmpoyeesAssetAssignedResult = {
  __typename?: 'EmpoyeesAssetAssignedResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<User>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmpoyeesAssetAssignedResults = {
  __typename?: 'EmpoyeesAssetAssignedResults';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<User>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmpoyeesPermissions = {
  __typename?: 'EmpoyeesPermissions';
  employees?: Maybe<Array<Maybe<User>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmpoyeesSitesAssetAssignedResult = {
  __typename?: 'EmpoyeesSitesAssetAssignedResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<BusinessLocation>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type Encryption = {
  __typename?: 'Encryption';
  encrypted_private_key?: Maybe<Scalars['String']['output']>;
  iv?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
};

export type EncryptionData = {
  encryption?: InputMaybe<EncryptionInput>;
  from_user?: InputMaybe<Scalars['ID']['input']>;
};

export type EncryptionInput = {
  encrypted_private_key?: InputMaybe<Scalars['String']['input']>;
  iv?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
};

export type Expense = {
  __typename?: 'Expense';
  _id?: Maybe<Scalars['ID']['output']>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approval_status?: Maybe<Scalars['String']['output']>;
  behalf_of?: Maybe<Array<Maybe<User>>>;
  business?: Maybe<Business>;
  business_manager?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  document_url?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  expense_date?: Maybe<Scalars['DateTime']['output']>;
  expense_total_amount?: Maybe<Scalars['Float']['output']>;
  expense_type?: Maybe<Scalars['String']['output']>;
  google_drive_id?: Maybe<Scalars['String']['output']>;
  is_business_expense?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_received?: Maybe<Scalars['Boolean']['output']>;
  logs?: Maybe<Array<Maybe<LogsExpense>>>;
  status?: Maybe<Scalars['String']['output']>;
  upload_document_info?: Maybe<UpdloadDocumentInf>;
  upload_files_workflow?: Maybe<Array<Maybe<UpoadFileWorkFlow>>>;
  work_flow?: Maybe<Array<Maybe<WorkFlow>>>;
};

export type ExpenseInvFilter = {
  expenseInvoice?: InputMaybe<Scalars['ID']['input']>;
};

export type ExpenseInvoiceCategoryInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ExpenseInvoiceInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum ExpenseType {
  Asset = 'asset',
  General = 'general',
  Transport = 'transport'
}

export type File = {
  __typename?: 'File';
  encoding: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
};

export type Filter = {
  __typename?: 'Filter';
  _id: Scalars['ID']['output'];
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  filter: Scalars['String']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export enum FilterEnum {
  Day = 'day',
  Month = 'month',
  Week = 'week'
}

export enum FilterTypeEnum {
  EmployeeList = 'employee_list',
  Scheduler = 'scheduler',
  Timesheet = 'timesheet'
}

export type FinalSettlement = {
  __typename?: 'FinalSettlement';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  expense_amount?: Maybe<Scalars['Float']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  last_working_date?: Maybe<Scalars['DateTime']['output']>;
  leave_amount?: Maybe<Scalars['Float']['output']>;
  loan_amount?: Maybe<Scalars['Float']['output']>;
  separation_type?: Maybe<Scalars['String']['output']>;
  settlement_completed?: Maybe<Scalars['Boolean']['output']>;
};

export type FranchiseRequest = {
  __typename?: 'FranchiseRequest';
  Franchise?: Maybe<BusinessLocation>;
  FranchiseeBusiness?: Maybe<Business>;
  FranchiserBusiness?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  franchise_fee?: Maybe<Scalars['Float']['output']>;
  payment_pending?: Maybe<Scalars['Boolean']['output']>;
};

export type GiftCard = {
  __typename?: 'GiftCard';
  BusinessLocation: BusinessLocation;
  Customer: Customer;
  _id: Scalars['ID']['output'];
  amount?: Maybe<Scalars['Float']['output']>;
  card_no: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gift_card_keeping_unit: Scalars['String']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_email_send?: Maybe<Scalars['Boolean']['output']>;
  is_used?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  qr_code?: Maybe<Scalars['String']['output']>;
  send_gift_card: Scalars['DateTime']['output'];
  subject: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type GiftCardCategory = {
  __typename?: 'GiftCardCategory';
  _id: Scalars['ID']['output'];
  business?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type GradeInput = {
  grade?: InputMaybe<Scalars['String']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
};

export type GradeType = {
  __typename?: 'GradeType';
  grade?: Maybe<Scalars['String']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
};

export type Gratuity = {
  __typename?: 'Gratuity';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  business_location?: Maybe<BusinessLocation>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  month_days?: Maybe<Scalars['String']['output']>;
  total_working_days?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type GratuityInput = {
  business: Scalars['ID']['input'];
  business_location?: InputMaybe<Scalars['ID']['input']>;
  month_days?: InputMaybe<Scalars['String']['input']>;
  total_working_days?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<GratuityType>;
};

export enum GratuityType {
  Automatic = 'automatic',
  Manuall = 'manuall'
}

export type HierarchicalDetail = {
  __typename?: 'HierarchicalDetail';
  Country?: Maybe<Country>;
  States?: Maybe<Array<Maybe<StateHierarchicy>>>;
};

export type ImportEmployeeInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  is_update_password: Scalars['Boolean']['input'];
  last_name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type ImportEmployeeType = {
  __typename?: 'ImportEmployeeType';
  InvalidDataUsers?: Maybe<Array<Maybe<User>>>;
  alreadyExistUsers?: Maybe<Array<Maybe<User>>>;
  newlyAddedUsers?: Maybe<Array<Maybe<User>>>;
};

export type ImportSchedule = {
  __typename?: 'ImportSchedule';
  conflicted_schedule?: Maybe<Schedule>;
  error?: Maybe<Scalars['Boolean']['output']>;
  insert_schedule?: Maybe<Array<Maybe<Schedule>>>;
  invalid_schedule?: Maybe<Array<Maybe<ClockedHistory>>>;
};

export type ImportTimesheetType = {
  __typename?: 'ImportTimesheetType';
  already_exists_timesheet?: Maybe<Array<Maybe<ClockedHistory>>>;
  insert_timesheet?: Maybe<Array<Maybe<ClockedHistory>>>;
  invalid_timesheet?: Maybe<Array<Maybe<ClockedHistory>>>;
  updated_timesheet?: Maybe<Array<Maybe<ClockedHistory>>>;
};

export type InputAdjustment = {
  adjustment_amount: Scalars['Float']['input'];
  adjustment_comment: Scalars['String']['input'];
  adjustment_date: Scalars['DateTime']['input'];
  adjustment_type?: InputMaybe<Scalars['String']['input']>;
  bank_account_number?: InputMaybe<Scalars['String']['input']>;
  bank_amount?: InputMaybe<Scalars['String']['input']>;
  check_number?: InputMaybe<Scalars['String']['input']>;
  employee_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_credit: Scalars['Boolean']['input'];
  transaction_reference?: InputMaybe<Scalars['String']['input']>;
};

export type InputAllowances = {
  allowance_type: AllowanceType;
  amount: Scalars['Float']['input'];
  business_location?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_fixed: Scalars['Boolean']['input'];
  pay_slip_name: Scalars['String']['input'];
};

export type InputAppraisalType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumActive>;
  target_type: TargetEnum;
};

export type InputAttachment = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  subscription: Scalars['ID']['input'];
};

export type InputAttendance = {
  attendanceStatus?: InputMaybe<AttendanceWithStatus>;
  attendance_date: Scalars['DateTime']['input'];
  attendance_log_detail?: InputMaybe<Array<AttendanceLogDetailInput>>;
  breaks?: InputMaybe<Array<Breaks>>;
  clock_in_time?: InputMaybe<Scalars['DateTime']['input']>;
  clock_out_time?: InputMaybe<Scalars['DateTime']['input']>;
  clockedInStatus?: InputMaybe<AttendanceWithStatus>;
  clockedOutStatus?: InputMaybe<AttendanceWithStatus>;
  employee: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isAbsent?: InputMaybe<Scalars['Boolean']['input']>;
  is_break_adjustment: Scalars['Boolean']['input'];
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  short_break?: InputMaybe<Scalars['Boolean']['input']>;
  write_up_reason?: InputMaybe<WriteUpReason>;
  writup_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputAttendanceList = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type InputAttendanceRequest = {
  attendance_date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  remarks: Scalars['String']['input'];
  time_in: Scalars['String']['input'];
  time_out: Scalars['String']['input'];
};

export type InputCreateAttachment = {
  file_upload?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  isFile?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  subscription: Scalars['ID']['input'];
};

export type InputCreateAttendance = {
  attendance_date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  reason_type: EnumReasonType;
  time_in?: InputMaybe<Scalars['String']['input']>;
  time_out?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateExpenseRequest = {
  description: Scalars['String']['input'];
  document?: InputMaybe<Scalars['Upload']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  expense_date: Scalars['DateTime']['input'];
  expense_total_amount: Scalars['Float']['input'];
  expense_type: Scalars['String']['input'];
};

export type InputCreateLogActivity = {
  activity_date: Scalars['DateTime']['input'];
  attachment_file?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  subscription: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: TypeEnum;
};

export type InputCreateSetupAlert = {
  asset_email_details?: InputMaybe<SetupEmailInput>;
  is_asset_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_asset_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_lease_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_lease_expiration_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_maintenance_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_maintenance_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_warranty_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_warranty_expiration_alert?: InputMaybe<Scalars['Boolean']['input']>;
  lease_email_details?: InputMaybe<SetupEmailInput>;
  lease_lead_time?: InputMaybe<Scalars['Int']['input']>;
  maintenance_email_details?: InputMaybe<SetupEmailInput>;
  maintenance_lead_time?: InputMaybe<Scalars['Int']['input']>;
  maintenance_overdue_time?: InputMaybe<Scalars['Int']['input']>;
  warranty_email_details?: InputMaybe<SetupEmailInput>;
  warranty_lead_time?: InputMaybe<Scalars['Int']['input']>;
};

export type InputExpense = {
  business: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  document?: InputMaybe<Scalars['Upload']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  expense_date: Scalars['DateTime']['input'];
  expense_total_amount: Scalars['Float']['input'];
  expense_type: Scalars['String']['input'];
  follow_workflow: Scalars['Boolean']['input'];
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_business_expense: Scalars['Boolean']['input'];
  is_received: Scalars['Boolean']['input'];
  remove_image?: InputMaybe<Scalars['Boolean']['input']>;
  status: ExpenseStatus;
};

export type InputFinalSettlement = {
  business: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  employee: Scalars['ID']['input'];
  expense_amount?: InputMaybe<Scalars['Float']['input']>;
  last_working_date: Scalars['DateTime']['input'];
  leave_amount?: InputMaybe<Scalars['Float']['input']>;
  loan_amount?: InputMaybe<Scalars['Float']['input']>;
};

export type InputLeaveType = {
  accrual_no_of_hours?: InputMaybe<Scalars['Float']['input']>;
  accrual_on_day?: InputMaybe<Scalars['String']['input']>;
  accrual_on_month?: InputMaybe<MonthEnum>;
  accrual_one_time_day?: InputMaybe<Scalars['String']['input']>;
  accrual_one_time_month?: InputMaybe<MonthEnum>;
  accrual_type?: InputMaybe<YearlyMonthlyEnum>;
  assign_to?: InputMaybe<Assign_To>;
  blackOutWindow?: InputMaybe<Array<InputMaybe<BlackOutWindowInput>>>;
  business: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  consecutive_leaves?: InputMaybe<Scalars['String']['input']>;
  count_after_days?: InputMaybe<Scalars['Int']['input']>;
  description: Scalars['String']['input'];
  effective_after?: InputMaybe<Scalars['Float']['input']>;
  effective_after_type?: InputMaybe<EffectiveAfterTypeEnum>;
  fixed_pto_ratio?: InputMaybe<Scalars['Float']['input']>;
  from_date: Scalars['DateTime']['input'];
  half_day_Consideration?: InputMaybe<HalfDayConsideration>;
  half_leave_in_ful_leave?: InputMaybe<Scalars['Boolean']['input']>;
  is_accrual?: InputMaybe<Scalars['Boolean']['input']>;
  is_count_after?: InputMaybe<Scalars['Boolean']['input']>;
  is_pto: Scalars['Boolean']['input'];
  is_pto_against_overtime?: InputMaybe<Scalars['Boolean']['input']>;
  is_pto_against_public_holiday?: InputMaybe<Scalars['Boolean']['input']>;
  is_pto_against_weekend?: InputMaybe<Scalars['Boolean']['input']>;
  is_reset?: InputMaybe<Scalars['Boolean']['input']>;
  is_unit_hours: Scalars['Boolean']['input'];
  leave_duration?: InputMaybe<LeaveDuration>;
  maximum_duration?: InputMaybe<MaximumDurationEnum>;
  minimum_duration?: InputMaybe<Scalars['String']['input']>;
  month_selection?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  per_day_hours?: InputMaybe<Scalars['String']['input']>;
  policy_type?: InputMaybe<PolicyTypeEnum>;
  pto_advance_notice_days?: InputMaybe<Scalars['Float']['input']>;
  pto_earning_threshold_hours?: InputMaybe<Scalars['Float']['input']>;
  pto_hours_against_threshold?: InputMaybe<Scalars['Float']['input']>;
  pto_minimum_consumable_hours?: InputMaybe<Scalars['Float']['input']>;
  pto_type?: InputMaybe<Scalars['String']['input']>;
  pto_value_in?: InputMaybe<PtoValueIn>;
  ranges?: InputMaybe<Array<InputMaybe<Range>>>;
  reset_carry_forward?: InputMaybe<CarryForwardEnum>;
  reset_carry_forward_count?: InputMaybe<Scalars['Float']['input']>;
  reset_carry_forward_type?: InputMaybe<CarryForwardTypeEnum>;
  reset_max_limit?: InputMaybe<Scalars['Float']['input']>;
  reset_on_day?: InputMaybe<Scalars['String']['input']>;
  reset_on_month?: InputMaybe<MonthEnum>;
  reset_one_time_day?: InputMaybe<Scalars['String']['input']>;
  reset_one_time_month?: InputMaybe<MonthEnum>;
  reset_type?: InputMaybe<YearlyMonthlyEnum>;
  to_date: Scalars['DateTime']['input'];
  type: LeaveTypesEnum;
  un_paid?: InputMaybe<Scalars['Boolean']['input']>;
  un_paid_days?: InputMaybe<Scalars['String']['input']>;
  working_days?: InputMaybe<Scalars['String']['input']>;
};

export type InputLoan = {
  business: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  employee: Scalars['ID']['input'];
  follow_workflow: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  installment_amount: Scalars['Float']['input'];
  is_fixed: Scalars['Boolean']['input'];
  loan_amount: Scalars['Float']['input'];
  loan_recovery_method: RecoveryMethod;
  loan_taken_date: Scalars['DateTime']['input'];
  loan_type: LoanType;
  no_of_installment?: InputMaybe<Scalars['Float']['input']>;
  payment_received_date?: InputMaybe<Scalars['DateTime']['input']>;
  payment_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status: LoanPaymentStatus;
};

export type InputLoanRequest = {
  business: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  installment_amount: Scalars['Float']['input'];
  is_fixed: Scalars['Boolean']['input'];
  loan_amount: Scalars['Float']['input'];
  loan_recovery_method: RecoveryMethod;
  loan_taken_date: Scalars['DateTime']['input'];
  loan_type: LoanType;
  no_of_installment?: InputMaybe<Scalars['Float']['input']>;
  payment_received_date?: InputMaybe<Scalars['DateTime']['input']>;
  payment_start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InputPublicHolidays = {
  business: Scalars['ID']['input'];
  from_date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_recursive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  to_date: Scalars['DateTime']['input'];
};

export type InputScheduleGraph = {
  department?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['ID']['input']>;
  start_date: Scalars['String']['input'];
};

export type InputTransaction = {
  business: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  loan: Scalars['ID']['input'];
  loan_transaction_amount: Scalars['Float']['input'];
  loan_transaction_date: Scalars['DateTime']['input'];
};

export type InputUpdateAttachment = {
  _id: Scalars['ID']['input'];
  parent: Scalars['ID']['input'];
};

export type InputUpdateAttendance = {
  _id: Scalars['ID']['input'];
  attendance_date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  reason_type: Scalars['String']['input'];
  time_in?: InputMaybe<Scalars['String']['input']>;
  time_out?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateExpenseApproval = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  approval_description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  employee_id: Scalars['ID']['input'];
  expense_id: Scalars['ID']['input'];
  status: ExpenseStatus;
};

export type InputUpdateExpenseRequest = {
  description: Scalars['String']['input'];
  document?: InputMaybe<Scalars['Upload']['input']>;
  document_url?: InputMaybe<Scalars['String']['input']>;
  expense_date: Scalars['DateTime']['input'];
  expense_total_amount: Scalars['Float']['input'];
  expense_type: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  remove_image?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputUpdateLogActivity = {
  _id: Scalars['ID']['input'];
  activity_date: Scalars['DateTime']['input'];
  attachment_file?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  subscription: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: TypeEnum;
};

export type InputUpdateSetupAlert = {
  _id: Scalars['ID']['input'];
  asset_email_details?: InputMaybe<SetupEmailInput>;
  is_asset_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_asset_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_lease_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_lease_expiration_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_maintenance_alert?: InputMaybe<Scalars['Boolean']['input']>;
  is_maintenance_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_warranty_email?: InputMaybe<Scalars['Boolean']['input']>;
  is_warranty_expiration_alert?: InputMaybe<Scalars['Boolean']['input']>;
  lease_email_details?: InputMaybe<SetupEmailInput>;
  lease_lead_time?: InputMaybe<Scalars['Int']['input']>;
  maintenance_email_details?: InputMaybe<SetupEmailInput>;
  maintenance_lead_time?: InputMaybe<Scalars['Int']['input']>;
  maintenance_overdue_time?: InputMaybe<Scalars['Int']['input']>;
  warranty_email_details?: InputMaybe<SetupEmailInput>;
  warranty_lead_time?: InputMaybe<Scalars['Int']['input']>;
};

export type InputUpdateWriteUpApproval = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  approval_description?: InputMaybe<Scalars['String']['input']>;
  status: WriteUpStatus;
  write_up_id: Scalars['ID']['input'];
};

export type InputemployeeGarnishmentList = {
  Page?: InputMaybe<Scalars['Int']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
};

export type Insurance = {
  __typename?: 'Insurance';
  active?: Maybe<Scalars['Boolean']['output']>;
  asset?: Maybe<Asset>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  coverage?: Maybe<Scalars['Float']['output']>;
  deductible?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  insuranceCo?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  limits?: Maybe<Scalars['Float']['output']>;
  logs?: Maybe<Array<Maybe<InsuranceLogs>>>;
  phone?: Maybe<Scalars['String']['output']>;
  policyNo?: Maybe<Scalars['String']['output']>;
  premium?: Maybe<Scalars['Float']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type InsuranceInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  asset?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  coverage?: InputMaybe<Scalars['Float']['input']>;
  deductible?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  insuranceCo?: InputMaybe<Scalars['String']['input']>;
  limits?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  policyNo?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Float']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type InvalidRecord = {
  __typename?: 'InvalidRecord';
  DAY?: Maybe<Scalars['String']['output']>;
  employee_id?: Maybe<Scalars['String']['output']>;
  employee_name?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  short_break_count?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
};

export type InvoiceData = {
  __typename?: 'InvoiceData';
  assignToAsset?: Maybe<Scalars['Float']['output']>;
  billTo?: Maybe<GetShipToType>;
  company?: Maybe<Scalars['String']['output']>;
  courtesyCredit?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  detail?: Maybe<InvoiceDetail>;
  grandTotal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoiceItems?: Maybe<Array<Maybe<InvoiceItemsType>>>;
  invoiceNumber?: Maybe<Scalars['Int']['output']>;
  invoice_image?: Maybe<Scalars['String']['output']>;
  invoice_image_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['Date']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  shipTo?: Maybe<GetShipToType>;
  shippingMethod?: Maybe<ShippingMethods>;
  subTotal?: Maybe<Scalars['Float']['output']>;
  taxes?: Maybe<Scalars['Float']['output']>;
  toPayOff?: Maybe<Scalars['Float']['output']>;
  totalInvoiceItems?: Maybe<Scalars['Float']['output']>;
  totalPaid?: Maybe<Scalars['Float']['output']>;
  totalProducts?: Maybe<Scalars['Float']['output']>;
  totalQty?: Maybe<Scalars['Int']['output']>;
  totalSerialNumber?: Maybe<Scalars['Float']['output']>;
  totalShippingCharges?: Maybe<Scalars['Float']['output']>;
  totalSku?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  vendor?: Maybe<Vendors>;
};

export type InvoiceInput = {
  billTo?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  courtesyCredit?: InputMaybe<Scalars['Float']['input']>;
  grandTotal?: InputMaybe<Scalars['Float']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  invoiceItems?: InputMaybe<Array<InputMaybe<InvoiceItems>>>;
  invoiceNumber?: InputMaybe<Scalars['Int']['input']>;
  invoice_image?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderDate?: InputMaybe<Scalars['Date']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  shipTo?: InputMaybe<Scalars['String']['input']>;
  shippingMethod?: InputMaybe<Scalars['String']['input']>;
  subTotal?: InputMaybe<Scalars['Float']['input']>;
  taxes?: InputMaybe<Scalars['Float']['input']>;
  toPayOff?: InputMaybe<Scalars['Float']['input']>;
  totalPaid?: InputMaybe<Scalars['Float']['input']>;
  totalProducts?: InputMaybe<Scalars['Float']['input']>;
  totalQty?: InputMaybe<Scalars['Int']['input']>;
  totalSerialNumber?: InputMaybe<Scalars['Float']['input']>;
  totalShippingCharges?: InputMaybe<Scalars['Float']['input']>;
  totalSku?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendor: Scalars['ID']['input'];
};

export type InvoiceItemInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serial_number?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type Lease = {
  __typename?: 'Lease';
  asset?: Maybe<Asset>;
  id?: Maybe<Scalars['ID']['output']>;
  leaseBegin: Scalars['String']['output'];
  leaseEnd: Scalars['String']['output'];
  leasingCustomer?: Maybe<LeasingCustomer>;
};

export type LeaseInput = {
  assetId: Scalars['ID']['input'];
  leaseBegin: Scalars['String']['input'];
  leaseEnd: Scalars['String']['input'];
  leasingCustomerId: Scalars['ID']['input'];
};

export type LeaseListingResult = {
  __typename?: 'LeaseListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Lease>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type LeasingCustomer = {
  __typename?: 'LeasingCustomer';
  address?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type LeasingCustomerInput = {
  address: Scalars['String']['input'];
  company: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export enum LeaveCountTypeEnum {
  Days = 'days',
  Hours = 'hours'
}

export type LeavePolicy = {
  __typename?: 'LeavePolicy';
  _id?: Maybe<Scalars['ID']['output']>;
  accrual_no_of_hours?: Maybe<Scalars['Float']['output']>;
  accrual_on_day?: Maybe<Scalars['String']['output']>;
  accrual_on_month?: Maybe<MonthEnum>;
  accrual_one_time_day?: Maybe<Scalars['String']['output']>;
  accrual_one_time_month?: Maybe<MonthEnum>;
  accrual_type?: Maybe<YearlyMonthlyEnum>;
  assign_to?: Maybe<Array<Maybe<User>>>;
  business?: Maybe<Business>;
  businessLocation?: Maybe<BusinessLocation>;
  carry_forward_limit?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_accrual?: Maybe<Scalars['Boolean']['output']>;
  is_carry_forward_percentage?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_hourly_employee_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_manual_deduction?: Maybe<Scalars['Boolean']['output']>;
  is_reset?: Maybe<Scalars['Boolean']['output']>;
  is_salary_employee_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  is_short_leave_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_user_input_value?: Maybe<Scalars['Boolean']['output']>;
  is_week_hour_limit?: Maybe<Scalars['Boolean']['output']>;
  leaves?: Maybe<Array<Maybe<LeavesType>>>;
  manual_deduction_value?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  policy_type?: Maybe<PolicyTypeEnum>;
  reset_carry_forward?: Maybe<CarryForwardEnum>;
  reset_carry_forward_count?: Maybe<Scalars['Float']['output']>;
  reset_carry_forward_type?: Maybe<CarryForwardTypeEnum>;
  reset_max_limit?: Maybe<Scalars['Float']['output']>;
  reset_on_day?: Maybe<Scalars['String']['output']>;
  reset_on_month?: Maybe<MonthEnum>;
  reset_one_time_day?: Maybe<Scalars['String']['output']>;
  reset_one_time_month?: Maybe<MonthEnum>;
  reset_type?: Maybe<YearlyMonthlyEnum>;
  sandwich?: Maybe<Scalars['Boolean']['output']>;
  sandwich_on_public_holiday?: Maybe<Scalars['Boolean']['output']>;
};

export type LeaveType = {
  __typename?: 'LeaveType';
  _id?: Maybe<Scalars['ID']['output']>;
  accrual_no_of_hours?: Maybe<Scalars['Float']['output']>;
  accrual_on_day?: Maybe<Scalars['String']['output']>;
  accrual_on_month?: Maybe<Scalars['String']['output']>;
  accrual_one_time_day?: Maybe<Scalars['String']['output']>;
  accrual_one_time_month?: Maybe<Scalars['String']['output']>;
  accrual_type?: Maybe<Scalars['String']['output']>;
  assign_to?: Maybe<Assign_To>;
  blackOutWindow?: Maybe<Array<Maybe<BlackOutWindow>>>;
  business?: Maybe<Business>;
  code?: Maybe<Scalars['String']['output']>;
  consecutive_leaves?: Maybe<Scalars['String']['output']>;
  count_after_days?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  effective_after?: Maybe<Scalars['Float']['output']>;
  effective_after_type?: Maybe<Scalars['String']['output']>;
  fixed_pto_ratio?: Maybe<Scalars['Float']['output']>;
  from_date?: Maybe<Scalars['DateTime']['output']>;
  half_day_Consideration?: Maybe<HalfDayConsideration>;
  half_leave_in_ful_leave?: Maybe<Scalars['Boolean']['output']>;
  is_accrual?: Maybe<Scalars['Boolean']['output']>;
  is_count_after?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_not_count_as_leave?: Maybe<Scalars['Boolean']['output']>;
  is_pto?: Maybe<Scalars['Boolean']['output']>;
  is_pto_against_overtime?: Maybe<Scalars['Boolean']['output']>;
  is_pto_against_public_holiday?: Maybe<Scalars['Boolean']['output']>;
  is_pto_against_weekend?: Maybe<Scalars['Boolean']['output']>;
  is_reset?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  is_unit_hours?: Maybe<Scalars['Boolean']['output']>;
  leave_duration?: Maybe<LeaveDuration>;
  maximum_duration?: Maybe<Scalars['String']['output']>;
  minimum_duration?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  per_day_hours?: Maybe<Scalars['String']['output']>;
  policy_type?: Maybe<Scalars['String']['output']>;
  pto_advance_notice_days?: Maybe<Scalars['Int']['output']>;
  pto_earning_threshold_hours?: Maybe<Scalars['Float']['output']>;
  pto_hours_against_threshold?: Maybe<Scalars['Float']['output']>;
  pto_minimum_consumable_hours?: Maybe<Scalars['Int']['output']>;
  pto_type?: Maybe<Scalars['String']['output']>;
  pto_value_in?: Maybe<PtoValueIn>;
  ranges?: Maybe<Array<Maybe<RangeType>>>;
  reset_carry_forward?: Maybe<Scalars['String']['output']>;
  reset_carry_forward_count?: Maybe<Scalars['Float']['output']>;
  reset_carry_forward_type?: Maybe<Scalars['String']['output']>;
  reset_max_limit?: Maybe<Scalars['Float']['output']>;
  reset_on_day?: Maybe<Scalars['String']['output']>;
  reset_on_month?: Maybe<Scalars['String']['output']>;
  reset_one_time_day?: Maybe<Scalars['String']['output']>;
  reset_one_time_month?: Maybe<Scalars['String']['output']>;
  reset_type?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  un_paid?: Maybe<Scalars['Boolean']['output']>;
  un_paid_days?: Maybe<Scalars['String']['output']>;
  working_days?: Maybe<Scalars['String']['output']>;
};

export type LinkToken = {
  __typename?: 'LinkToken';
  expiration?: Maybe<Scalars['Date']['output']>;
  link_token?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['String']['output']>;
};

export type ListFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type LoanDetail = {
  __typename?: 'LoanDetail';
  balance?: Maybe<Scalars['Int']['output']>;
  total_loan?: Maybe<Scalars['Int']['output']>;
};

export type LoanPayment = {
  __typename?: 'LoanPayment';
  _id?: Maybe<Scalars['ID']['output']>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approval_status?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  behalf_of?: Maybe<Array<Maybe<User>>>;
  business?: Maybe<Business>;
  business_manager?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  installment_amount?: Maybe<Scalars['Float']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_fixed?: Maybe<Scalars['Boolean']['output']>;
  loan_amount?: Maybe<Scalars['Float']['output']>;
  loan_recovery_method?: Maybe<Scalars['String']['output']>;
  loan_taken_date?: Maybe<Scalars['DateTime']['output']>;
  loan_type?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Array<Maybe<LogsLoanPayments>>>;
  no_of_installment?: Maybe<Scalars['Float']['output']>;
  payment?: Maybe<Scalars['Float']['output']>;
  payment_received_date?: Maybe<Scalars['DateTime']['output']>;
  payment_start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  work_flow?: Maybe<Array<Maybe<WorkFlow>>>;
};

export enum LoanPaymentStatus {
  Accepted = 'accepted',
  All = 'all',
  Archive = 'archive',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type LoanTransaction = {
  __typename?: 'LoanTransaction';
  _id?: Maybe<Scalars['ID']['output']>;
  adjustment_amount?: Maybe<Scalars['Float']['output']>;
  adjustment_comment?: Maybe<Scalars['String']['output']>;
  adjustment_date?: Maybe<Scalars['DateTime']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  business?: Maybe<Business>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  is_adjustable?: Maybe<Scalars['Boolean']['output']>;
  is_cash?: Maybe<Scalars['Boolean']['output']>;
  is_credit?: Maybe<Scalars['Boolean']['output']>;
  loan?: Maybe<LoanPayment>;
  loan_amount?: Maybe<Scalars['Float']['output']>;
  loan_transaction_amount?: Maybe<Scalars['Float']['output']>;
  loan_transaction_date?: Maybe<Scalars['DateTime']['output']>;
  logs?: Maybe<Array<Maybe<TransactionLogs>>>;
  transaction?: Maybe<Scalars['String']['output']>;
};

export enum LoanType {
  Advanced = 'advanced',
  Loan = 'loan'
}

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  store_number?: Maybe<Scalars['String']['output']>;
};

export enum LoginAs {
  TerminalApp = 'terminalApp',
  UserApp = 'userApp'
}

export type Maintenance = {
  __typename?: 'Maintenance';
  asset?: Maybe<Asset>;
  cost?: Maybe<Scalars['Float']['output']>;
  dateCompleted?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isRecurring?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  maintenanceBy?: Maybe<Scalars['String']['output']>;
  recurring?: Maybe<Scalars['Int']['output']>;
  recurringBy?: Maybe<RecurringBy>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MaintenanceInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateCompleted?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  maintenanceBy?: InputMaybe<Scalars['String']['input']>;
  recurring?: InputMaybe<Scalars['Int']['input']>;
  recurringBy?: InputMaybe<RecurringBy>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type MappedPlaidCategories = {
  __typename?: 'MappedPlaidCategories';
  _id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  mapped_category?: Maybe<Scalars['String']['output']>;
  plaid_categorie?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MarginTiers = {
  __typename?: 'MarginTiers';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  from_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  markup?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  to_price?: Maybe<Scalars['Float']['output']>;
  updated_by?: Maybe<User>;
};

export type MasterDataType = {
  __typename?: 'MasterDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  data_type_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
};

export type MasterDataValue = {
  __typename?: 'MasterDataValue';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  data_type?: Maybe<MasterDataType>;
  data_value_name?: Maybe<Scalars['String']['output']>;
  data_value_type?: Maybe<MasterDataValue>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_system_generated?: Maybe<Scalars['Boolean']['output']>;
};

export type MedicalInsurance = {
  __typename?: 'MedicalInsurance';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  medical_facilities_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type MedicalInsuranceConfig = {
  __typename?: 'MedicalInsuranceConfig';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<MedicalInsurance>>>;
};

export type MedicalInsurancePackage = {
  __typename?: 'MedicalInsurancePackage';
  MasterDataValue?: Maybe<Array<Maybe<MasterDataValue>>>;
  Medical_facilities_name?: Maybe<Array<Maybe<MedicalInsurance>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  assigned_to?: Maybe<Array<Maybe<User>>>;
  company?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  enrollment_end_date?: Maybe<Scalars['DateTime']['output']>;
  enrollment_end_days?: Maybe<Scalars['Int']['output']>;
  enrollment_start_date?: Maybe<Scalars['DateTime']['output']>;
  enrollment_start_days?: Maybe<Scalars['Int']['output']>;
  expire_days?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_open_enrollment_period?: Maybe<Scalars['Boolean']['output']>;
  is_post_hire_eligibility?: Maybe<Scalars['Boolean']['output']>;
  monthly_cost_to_employe?: Maybe<Scalars['Int']['output']>;
  monthly_cost_to_employer?: Maybe<Scalars['Int']['output']>;
  notifications?: Maybe<Scalars['Boolean']['output']>;
  notify_before_days?: Maybe<Scalars['Int']['output']>;
  package_name?: Maybe<Scalars['String']['output']>;
  package_price?: Maybe<Scalars['Float']['output']>;
  package_type?: Maybe<Scalars['String']['output']>;
  upload_document?: Maybe<Scalars['String']['output']>;
};

export type MedicalInsurancePackageConfig = {
  __typename?: 'MedicalInsurancePackageConfig';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<MedicalInsurancePackage>>>;
};

export type MedicalInsuranceType = {
  __typename?: 'MedicalInsuranceType';
  expiry_date_of_policy?: Maybe<Scalars['DateTime']['output']>;
  insurance_card?: Maybe<Scalars['String']['output']>;
  insurance_class?: Maybe<Scalars['String']['output']>;
  total_policy_amount_monthly?: Maybe<Scalars['String']['output']>;
};

export type MissPaunchOut = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MissPaunchOutListingResult = {
  __typename?: 'MissPaunchOutListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<ClockedHistory>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type ModuleFeature = {
  __typename?: 'ModuleFeature';
  feature_hierarchy?: Maybe<Array<Maybe<FeatureHierarchy>>>;
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};

export type ModulePermissions = {
  __typename?: 'ModulePermissions';
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export type ModulesFeatures = {
  __typename?: 'ModulesFeatures';
  feature?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<PermissionObj>>>;
};

export type ModulesFeaturesPermissions = {
  __typename?: 'ModulesFeaturesPermissions';
  features?: Maybe<Array<Maybe<ModulesFeatures>>>;
  module?: Maybe<Scalars['String']['output']>;
};

export type MultiCustomFieldTypeInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  controlType?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<CustomFieldTypeOptionInput>>>;
  order?: InputMaybe<Scalars['Float']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MultiInvoiceItemInput = {
  items?: InputMaybe<Array<InputMaybe<InvoiceItemInput>>>;
};

export type MultiQuestion = {
  attachment?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  correct_answer?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  options: Array<InputMaybe<OptionInput>>;
  question_text: Scalars['String']['input'];
  question_type: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  MarkNotificationsAsCleared?: Maybe<Scalars['Boolean']['output']>;
  UpdateAllRoleAndPermissionOfUser?: Maybe<Scalars['Boolean']['output']>;
  UpdateNameOfEmployeesFolder?: Maybe<Scalars['Boolean']['output']>;
  acceptRejectBusinessRequest?: Maybe<Scalars['Boolean']['output']>;
  addContractLicense: ContractLicense;
  addCustomLocation?: Maybe<Scalars['Boolean']['output']>;
  addDelegantEmployee?: Maybe<DelegantApproval>;
  addDocumentToSign?: Maybe<Scalars['Boolean']['output']>;
  addEmployeeIntoBusinesses?: Maybe<BusinessNavigation>;
  addEmployeeToAattendancePolicy?: Maybe<Scalars['Boolean']['output']>;
  addGuarantorForPassword?: Maybe<Scalars['Boolean']['output']>;
  addInsurance: Insurance;
  addLease: Lease;
  addLeasingCustomer: LeasingCustomer;
  addMaintenance: Maintenance;
  addManualShortBreaks?: Maybe<Scalars['Boolean']['output']>;
  addMarginTiers?: Maybe<MarginTiers>;
  addNewFolderDocumentControl?: Maybe<DocumentControlAttachment>;
  addNewPaymentMethodCustomer?: Maybe<Scalars['Boolean']['output']>;
  addOrRemoveEmployeeInRole?: Maybe<Scalars['Boolean']['output']>;
  addPasswordManagerAdmin?: Maybe<Scalars['Boolean']['output']>;
  addProfitCategory?: Maybe<ProfitCategory>;
  addReason?: Maybe<Reason>;
  addRepairPrice?: Maybe<RepairPrice>;
  addRosterComment?: Maybe<Scalars['Boolean']['output']>;
  addShippingMethods?: Maybe<ShippingMethods>;
  addShortBreak?: Maybe<ShortBreakClockedHistory>;
  addStoreToDutyRoster?: Maybe<RosterStores>;
  addUpdateTerminalDevice?: Maybe<AddTerminalAppType>;
  addUserRadius?: Maybe<BusinessRadius>;
  addVendor?: Maybe<Vendor>;
  addWeekendAndPublicHolidayOnTimeSheet?: Maybe<Scalars['Boolean']['output']>;
  allowAttendance?: Maybe<Scalars['Boolean']['output']>;
  archiveAccountType?: Maybe<Scalars['Boolean']['output']>;
  archiveAdvanceFilter?: Maybe<Scalars['Boolean']['output']>;
  archiveAllowance?: Maybe<Scalars['Boolean']['output']>;
  archiveAppraisalObjective?: Maybe<Scalars['Boolean']['output']>;
  archiveAppraisalScale?: Maybe<Scalars['Boolean']['output']>;
  archiveApprovalWorkFlow?: Maybe<Scalars['Boolean']['output']>;
  archiveAsset?: Maybe<Scalars['Boolean']['output']>;
  archiveAssetBrand?: Maybe<Scalars['Boolean']['output']>;
  archiveAssetCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveAssetModel?: Maybe<Scalars['Boolean']['output']>;
  archiveAssetSubCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveAttandencePolicy?: Maybe<Scalars['Boolean']['output']>;
  archiveAttendance?: Maybe<Scalars['Boolean']['output']>;
  archiveAttendanceRegulation?: Maybe<Scalars['Boolean']['output']>;
  archiveBusiness?: Maybe<Scalars['Boolean']['output']>;
  archiveBusinessLocation?: Maybe<Scalars['Boolean']['output']>;
  archiveCashRegister?: Maybe<Scalars['Boolean']['output']>;
  archiveContractLicense?: Maybe<Scalars['Boolean']['output']>;
  archiveDocumentControl?: Maybe<ArchivedIds>;
  archiveEmailSMTPConfigration?: Maybe<Scalars['Boolean']['output']>;
  archiveEmailTemplate?: Maybe<Scalars['Boolean']['output']>;
  archiveEmployee?: Maybe<ArchivedEmployees>;
  archiveEmployeeDashboardView?: Maybe<Scalars['Boolean']['output']>;
  archiveEmployeeDocument?: Maybe<Scalars['Boolean']['output']>;
  archiveEmployeeGarnishment?: Maybe<Scalars['Boolean']['output']>;
  archiveEmployeeHistory?: Maybe<Scalars['Boolean']['output']>;
  archiveExpense?: Maybe<Scalars['Boolean']['output']>;
  archiveExpenseInvoice?: Maybe<Scalars['Boolean']['output']>;
  archiveExpenseInvoiceCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveFilter?: Maybe<Scalars['Boolean']['output']>;
  archiveFinalSettlement?: Maybe<Scalars['Boolean']['output']>;
  archiveGiftCardCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveGiftCardCategoryTemplate?: Maybe<Scalars['Boolean']['output']>;
  archiveGratuity?: Maybe<Scalars['Boolean']['output']>;
  archiveInsurance?: Maybe<Scalars['Boolean']['output']>;
  archiveInvoice?: Maybe<Scalars['Boolean']['output']>;
  archiveLeavePolicyById?: Maybe<Scalars['Boolean']['output']>;
  archiveLeaveTypeById?: Maybe<Scalars['Boolean']['output']>;
  archiveLoan?: Maybe<Scalars['Boolean']['output']>;
  archiveLoanTransaction?: Maybe<Scalars['Boolean']['output']>;
  archiveMaintenance?: Maybe<Scalars['Boolean']['output']>;
  archiveMedicalInsurance?: Maybe<Scalars['Boolean']['output']>;
  archiveMedicalInsurancePackage?: Maybe<Scalars['Boolean']['output']>;
  archiveObjectiveAssignment?: Maybe<Scalars['Boolean']['output']>;
  archivePackage?: Maybe<Scalars['Boolean']['output']>;
  archivePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  archivePayrollSchedule?: Maybe<Scalars['Boolean']['output']>;
  archivePayrollStructure?: Maybe<Scalars['Boolean']['output']>;
  archivePlaidCategories?: Maybe<Scalars['Boolean']['output']>;
  archivePublicHolidays?: Maybe<Scalars['Boolean']['output']>;
  archiveRole?: Maybe<Scalars['Boolean']['output']>;
  archiveRoster?: Maybe<Scalars['Boolean']['output']>;
  archiveRosterComment?: Maybe<Scalars['Boolean']['output']>;
  archiveShift?: Maybe<Scalars['Boolean']['output']>;
  archiveStoreFromDutyRoster?: Maybe<Scalars['Boolean']['output']>;
  archiveSubscriptionAttachment?: Maybe<Scalars['Boolean']['output']>;
  archiveSubscriptionLogActivity?: Maybe<Scalars['Boolean']['output']>;
  archiveTask?: Maybe<Scalars['Boolean']['output']>;
  archiveTemplate?: Maybe<Scalars['Boolean']['output']>;
  archiveUnArchiveCashRegistersHistory?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuiz?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuizCategory?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuizCategorySection?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuizQuestion?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuizTraning?: Maybe<Scalars['Boolean']['output']>;
  archiveUnarchiveQuizTraningReplica?: Maybe<Scalars['Boolean']['output']>;
  archiveUserAppDevice?: Maybe<Scalars['Boolean']['output']>;
  archivedTax?: Maybe<Scalars['Boolean']['output']>;
  assetAlertConfiguration: AlertConfiguration;
  assignAattendancePolicyToEmployee?: Maybe<Scalars['Boolean']['output']>;
  assignLeavePolicyToEmployee?: Maybe<LeavePolicy>;
  assignPackageToSubscription?: Maybe<Scalars['Boolean']['output']>;
  assignQuiz?: Maybe<Scalars['Boolean']['output']>;
  assignRoleToEmployee?: Maybe<Scalars['Boolean']['output']>;
  assignScheduleToEmployees?: Maybe<ConflictRoster>;
  assignUsersToQuizAndTraining?: Maybe<TraningRepecaCreateInputResult>;
  assigneeFilterByStatus: Array<Maybe<AssigneeFilteredByStatus>>;
  attemptQuizAssignment?: Maybe<Scalars['Boolean']['output']>;
  attendancePolicy?: Maybe<Scalars['Boolean']['output']>;
  backPayToEmployee?: Maybe<Scalars['Boolean']['output']>;
  campaignStatusChanged?: Maybe<Scalars['Boolean']['output']>;
  cancelBusinessPackage?: Maybe<Scalars['Boolean']['output']>;
  cancelScheduleConflicts?: Maybe<Scalars['Boolean']['output']>;
  changeBusinessOwnerPassword?: Maybe<Scalars['Boolean']['output']>;
  changeConfigColumnVisibility?: Maybe<Scalars['Boolean']['output']>;
  changeDocumentControlAttachmentFolder?: Maybe<Scalars['Boolean']['output']>;
  changeEmployeeAttendancePolicy?: Maybe<Scalars['Boolean']['output']>;
  changeEmployeeLeavePolicy?: Maybe<LeavePolicy>;
  changeLocationOfDocumentDeletedParent?: Maybe<Scalars['Boolean']['output']>;
  changeOldDocuments?: Maybe<Scalars['Boolean']['output']>;
  changeRecruitmentStatus?: Maybe<Recruitment>;
  changeRoleParent?: Maybe<Role>;
  changeSharingStatusOrRemoveShare?: Maybe<Scalars['Boolean']['output']>;
  changeSubscriptionAttachmentFolder?: Maybe<Scalars['Boolean']['output']>;
  changeSubsriptionStatus?: Maybe<Scalars['Boolean']['output']>;
  changeTaskAction: TimeLogResponse;
  checkAuthenticatedUser?: Maybe<User>;
  checkInAssets?: Maybe<Scalars['Boolean']['output']>;
  checkerQuizAssignment?: Maybe<Scalars['Boolean']['output']>;
  checkoutAssets?: Maybe<Scalars['Boolean']['output']>;
  clearAllFilter?: Maybe<Scalars['Boolean']['output']>;
  clearDutyRoster?: Maybe<Scalars['Boolean']['output']>;
  cloneRole?: Maybe<Scalars['Boolean']['output']>;
  commission_compaingStatusChanged?: Maybe<Scalars['Boolean']['output']>;
  commission_statusChanged?: Maybe<Scalars['Boolean']['output']>;
  copyDocumentControlAttachmentFolder?: Maybe<Scalars['Boolean']['output']>;
  copyRolePermissions?: Maybe<Scalars['Boolean']['output']>;
  copySchedule?: Maybe<Scalars['Boolean']['output']>;
  copyScheduleByDate?: Maybe<Array<Maybe<ConflictedSchedules>>>;
  copyScheduleDifferentDate?: Maybe<Array<Maybe<ConflictedSchedules>>>;
  copyScheduleEmployeeToEmployees?: Maybe<Array<Maybe<ConflictedSchedules>>>;
  copyScheduletoNextWeek?: Maybe<Scalars['Boolean']['output']>;
  copyScheduletoSelectDate?: Maybe<ConflictRoster>;
  createAccountType?: Maybe<AccountType>;
  createActivityGroup?: Maybe<Scalars['Boolean']['output']>;
  createAdminDefaultPermissions?: Maybe<Array<Maybe<Permission>>>;
  createAdvanceFilter?: Maybe<Scalars['Boolean']['output']>;
  createAndMapPlaidCategories?: Maybe<MappedPlaidCategories>;
  createAppraisalObjective?: Maybe<AppraisalObjecive>;
  createAppraisalScale?: Maybe<AppraisalScale>;
  createAppraisalType?: Maybe<AppraisalType>;
  createApprovalWorkFlow?: Maybe<ApprovalWorkFlow>;
  createAsset?: Maybe<Scalars['Boolean']['output']>;
  createAssetBrand?: Maybe<AssetBrand>;
  createAssetCategory: AssetCategory;
  createAssetCategoryOrSubCategory?: Maybe<AssetCategory>;
  createAssetModel?: Maybe<Scalars['Boolean']['output']>;
  createAssetSubCategory: AssetSubCategory;
  createAttendanceRegulation?: Maybe<AttendanceRegulation>;
  createAuthenticatorAppThroughQR?: Maybe<Authenticator>;
  createAuthenticatorAppWithoutOTP?: Maybe<Authenticator>;
  createBusiness?: Maybe<Business>;
  createBusinessLocation?: Maybe<BusinessLocation>;
  createBusinessSampleData?: Maybe<Scalars['Boolean']['output']>;
  createCampaign?: Maybe<Campaign>;
  createCashRegister?: Maybe<CashRegisters>;
  createCashRegistersHistory?: Maybe<CashRegistersHistory>;
  createCategory?: Maybe<Scalars['Boolean']['output']>;
  createChartOfAccount?: Maybe<ChartOfAccount>;
  createCity?: Maybe<City>;
  createComment?: Maybe<TaskComment>;
  createCommisionCampaign?: Maybe<CommissionCampaign>;
  createCommission?: Maybe<Commission>;
  createCommonNotificationPermissions?: Maybe<Scalars['Boolean']['output']>;
  createCompensationTimeOff?: Maybe<TimeOff>;
  createDeduction?: Maybe<Deduction>;
  createDefaultConfigListing?: Maybe<Scalars['Boolean']['output']>;
  createDefaultEmployeeAction?: Maybe<Scalars['Boolean']['output']>;
  createDefualtMasterDataTypeAndValues?: Maybe<Scalars['Boolean']['output']>;
  createDepartment?: Maybe<Department>;
  createDesignation?: Maybe<Designation>;
  createDetailType?: Maybe<DetailType>;
  createDiscount?: Maybe<Discount>;
  createDocumentControlAttachment?: Maybe<DocumentControlAttachment>;
  createDutyRoster?: Maybe<ConflictRoster>;
  createDutyRosterForcefully?: Maybe<Scalars['Boolean']['output']>;
  createEmailOTP?: Maybe<EmailOtp>;
  createEmailSMTPConfigration?: Maybe<Scalars['Boolean']['output']>;
  createEmailTemplate?: Maybe<Scalars['Boolean']['output']>;
  createEmployeeDashboardView: EmployeeDashboardView;
  createEmployeeGarnishment?: Maybe<EmployeeGarnishment>;
  createEmployeeSeparation?: Maybe<EmployeeSeparation>;
  createEncryptionCopies?: Maybe<Scalars['Boolean']['output']>;
  createEvaluation?: Maybe<AppraisalEvaluation>;
  createExpenseInvoice?: Maybe<Scalars['Boolean']['output']>;
  createExpenseInvoiceAndCategory?: Maybe<CreatedExpenseInvoice>;
  createExpenseInvoiceCategory?: Maybe<Scalars['Boolean']['output']>;
  createExpenseRequest?: Maybe<Expense>;
  createFilter?: Maybe<Filter>;
  createFinalSettlement?: Maybe<FinalSettlement>;
  createGiftCard?: Maybe<GiftCard>;
  createGoal?: Maybe<Goals>;
  createInvoice?: Maybe<Scalars['Boolean']['output']>;
  createInvoiceItem?: Maybe<Scalars['Boolean']['output']>;
  createLoanAdjustment?: Maybe<Scalars['Boolean']['output']>;
  createLoanRequest?: Maybe<LoanPayment>;
  createLoanTransaction?: Maybe<LoanTransaction>;
  createMasterDataType?: Maybe<MasterDataType>;
  createMasterDataTypeValue?: Maybe<MasterDataValue>;
  createMedicalInsurance?: Maybe<MasterDataValue>;
  createMultiInvoiceItem?: Maybe<Scalars['Boolean']['output']>;
  createNotificationPermissionForBusiness?: Maybe<Scalars['Boolean']['output']>;
  createObjectiveAssignment?: Maybe<ObjectiveAssignment>;
  createPOSDefaultPermissions?: Maybe<Array<Maybe<Permission>>>;
  createPackage?: Maybe<Package>;
  createPackageForSuperAdmin?: Maybe<Package>;
  createPerformanceCycle?: Maybe<Scalars['Boolean']['output']>;
  createPhoneOTP?: Maybe<PhoneOtp>;
  createQuickAsset?: Maybe<Array<Maybe<Asset>>>;
  createQuiz?: Maybe<Scalars['Boolean']['output']>;
  createQuizCategories?: Maybe<Scalars['Boolean']['output']>;
  createQuizQuestion?: Maybe<Array<Maybe<QuestionCreated>>>;
  createQuizTraining?: Maybe<CreateResponseQuizTraining>;
  createReason?: Maybe<Reason>;
  createRegion?: Maybe<Region>;
  createReminderForNotification?: Maybe<Scalars['Boolean']['output']>;
  createRepliesinCommmentTask?: Maybe<Scalars['Boolean']['output']>;
  createReport?: Maybe<Scalars['Boolean']['output']>;
  createRocketChatUserFromChat?: Maybe<Scalars['Boolean']['output']>;
  createRole?: Maybe<Role>;
  createRosterByScheduleTemplate?: Maybe<Array<Maybe<Roster>>>;
  createSampleData?: Maybe<Array<Maybe<SampleData>>>;
  createSampleDataModules?: Maybe<Scalars['Boolean']['output']>;
  createSchedule?: Maybe<Array<Maybe<ConflictedSchedules>>>;
  createSchedulesFromTimeSheet?: Maybe<Scalars['Int']['output']>;
  createServiceCategory?: Maybe<ServiceCategoryType>;
  createSetupAlert?: Maybe<SetupAlert>;
  createShipTo?: Maybe<Scalars['Boolean']['output']>;
  createState?: Maybe<State>;
  createStation?: Maybe<Station>;
  createSubscriptionAttachment?: Maybe<Array<Maybe<Attachment>>>;
  createSubscriptionLogActivity?: Maybe<SubscriptionLogActivity>;
  createTask?: Maybe<TaskManagement>;
  createTax?: Maybe<Tax>;
  createTimeOff?: Maybe<TimeOff>;
  createTimeZone?: Maybe<Array<Maybe<TimeZone>>>;
  createUpdateAllowance?: Maybe<Allowance>;
  createUpdateAttendance?: Maybe<Attendance>;
  createUpdateAttendanceRequest?: Maybe<Attendance>;
  createUpdateConfigListing?: Maybe<ConfigListing>;
  createUpdateContribution?: Maybe<Contribution>;
  createUpdateEmployee?: Maybe<User>;
  createUpdateExpense?: Maybe<Expense>;
  createUpdateGratuity?: Maybe<Gratuity>;
  createUpdateLeavePolicy?: Maybe<LeavePolicy>;
  createUpdateLeaveType?: Maybe<LeaveType>;
  createUpdateLoan?: Maybe<LoanPayment>;
  createUpdateMedicalInsurancePackage?: Maybe<MedicalInsurancePackage>;
  createUpdateMultiStoreCustomField?: Maybe<Scalars['Boolean']['output']>;
  createUpdateMultipleActionActivity?: Maybe<DocumentControlAttachment>;
  createUpdatePayrollSchedule?: Maybe<PayrollSchedule>;
  createUpdatePayrollStructure?: Maybe<PayrollStructure>;
  createUpdateProductattributes?: Maybe<Scalars['Boolean']['output']>;
  createUpdatePublicHolidays?: Maybe<PublicHoliday>;
  createUpdateRecruitmentEmployee?: Maybe<Recruitment>;
  createUpdateReserveAssetColor?: Maybe<Scalars['Boolean']['output']>;
  createUpdateSchedulerConfig?: Maybe<SchedulerConfig>;
  createUpdateShift?: Maybe<Shift>;
  createUpdateShortLeave?: Maybe<ClockedHistory>;
  createUpdateStoreCustomField?: Maybe<StoreCustomField>;
  createUpdateTimeOffRequest?: Maybe<TimeOff>;
  createUpdatepaidUnPaid?: Maybe<PaidUnPaids>;
  createUserAppDevice?: Maybe<Scalars['Boolean']['output']>;
  createWriteUp?: Maybe<WriteUp>;
  createcommentOnTask?: Maybe<Scalars['Boolean']['output']>;
  customGrade?: Maybe<Scalars['Boolean']['output']>;
  defaultServicesConfiguration: Scalars['Boolean']['output'];
  deleteAppraisalType?: Maybe<Scalars['Boolean']['output']>;
  deleteAuthenticatorApp?: Maybe<Scalars['Boolean']['output']>;
  deleteChartOfAccount?: Maybe<Scalars['Boolean']['output']>;
  deleteCommentInTask?: Maybe<Scalars['Boolean']['output']>;
  deleteCommission?: Maybe<Scalars['Boolean']['output']>;
  deleteCommonNotification?: Maybe<Scalars['Boolean']['output']>;
  deleteConfigListing?: Maybe<Scalars['Boolean']['output']>;
  deleteDepartment?: Maybe<Scalars['Boolean']['output']>;
  deleteDesignation?: Maybe<Scalars['Boolean']['output']>;
  deleteDiscount?: Maybe<Scalars['Boolean']['output']>;
  deleteDocFromAsset?: Maybe<Scalars['Boolean']['output']>;
  deleteEmployeeSeparation?: Maybe<Scalars['Boolean']['output']>;
  deleteGoal?: Maybe<Scalars['Boolean']['output']>;
  deleteLoanAdjustment?: Maybe<Scalars['Boolean']['output']>;
  deleteMarginTiers?: Maybe<MarginTiers>;
  deleteMasterDataTypeValue?: Maybe<Scalars['Boolean']['output']>;
  deleteMultiSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteNewScheduleAndPreviewOldSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteNotification?: Maybe<Scalars['Boolean']['output']>;
  deleteNotificationsForBusinessAndUser?: Maybe<Scalars['Boolean']['output']>;
  deleteObjectiveAssignmentNestedData?: Maybe<Scalars['Boolean']['output']>;
  deletePerformanceCycle?: Maybe<Scalars['Boolean']['output']>;
  deletePermissions?: Maybe<Scalars['Boolean']['output']>;
  deleteProductattributes?: Maybe<Scalars['Boolean']['output']>;
  deleteProfitCategory?: Maybe<ProfitCategory>;
  deleteReason?: Maybe<Reason>;
  deleteRecruitment?: Maybe<Recruitment>;
  deleteRegion?: Maybe<Scalars['Boolean']['output']>;
  deleteRepairPrice?: Maybe<RepairPrice>;
  deleteRepliesinCommmentTask?: Maybe<Scalars['Boolean']['output']>;
  deleteRole?: Maybe<Scalars['Boolean']['output']>;
  deleteRosters?: Maybe<Scalars['Boolean']['output']>;
  deleteSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteShipTo?: Maybe<Scalars['Boolean']['output']>;
  deleteShippingMethods?: Maybe<ShippingMethods>;
  deleteShortLeave?: Maybe<Scalars['Boolean']['output']>;
  deleteStation?: Maybe<Scalars['Boolean']['output']>;
  deleteStoreCustomField?: Maybe<Scalars['Boolean']['output']>;
  deleteSubscriptionRequest?: Maybe<Scalars['Boolean']['output']>;
  deleteTimeOff?: Maybe<Scalars['Boolean']['output']>;
  deleteVendor?: Maybe<Vendor>;
  deleteWriteUp?: Maybe<Scalars['Boolean']['output']>;
  deletecontribution?: Maybe<Scalars['Boolean']['output']>;
  deletededuction?: Maybe<Scalars['Boolean']['output']>;
  deletepaidUnPaid?: Maybe<Scalars['Boolean']['output']>;
  detectContractFromAsset?: Maybe<Scalars['Boolean']['output']>;
  detectInsuranceFromAsset?: Maybe<Scalars['Boolean']['output']>;
  discountStatusChanged?: Maybe<Scalars['Boolean']['output']>;
  disposedAsset?: Maybe<Scalars['Boolean']['output']>;
  editBusinessEmployee?: Maybe<BusinessNavigation>;
  editMedicalInsurance?: Maybe<MedicalInsurance>;
  emailScheduleToEmployee?: Maybe<Scalars['Boolean']['output']>;
  employeeClockedInStatus?: Maybe<ClockedInStatus>;
  employeeRecentFileView?: Maybe<Scalars['Boolean']['output']>;
  generateFolderAndSubfolderForBusiness?: Maybe<Scalars['Boolean']['output']>;
  generateUniqueAssetId?: Maybe<Scalars['String']['output']>;
  getBusinessOwnerData?: Maybe<User>;
  getEmployeesAttendanceList?: Maybe<Array<Maybe<AttendanceData>>>;
  goalStatusChanged?: Maybe<Scalars['Boolean']['output']>;
  importCityStateData?: Maybe<Scalars['Boolean']['output']>;
  importEmployeesScheduleforMSFromClockingTime?: Maybe<Scalars['Boolean']['output']>;
  importEmployeesforMS?: Maybe<Array<Maybe<User>>>;
  importProductAttributeMasterDataTypeValue?: Maybe<Scalars['Boolean']['output']>;
  importRepairPrice?: Maybe<Array<Maybe<RepairPrice>>>;
  importScheduleCsv?: Maybe<SchdualCsvResponse>;
  importSchedules?: Maybe<Scalars['Boolean']['output']>;
  importTimeSheet?: Maybe<ImportTimesheetType>;
  integrateRosterIntoSchedule?: Maybe<Scalars['Boolean']['output']>;
  linkBusinesses?: Maybe<BusinessNavigation>;
  linkContractsWithAsset?: Maybe<Scalars['Boolean']['output']>;
  linkInsuranceWithAsset?: Maybe<Scalars['Boolean']['output']>;
  linkParentOrChildAssetWithAsset?: Maybe<Scalars['Boolean']['output']>;
  loginToOtherBusiness?: Maybe<AuthTokens>;
  loginWithEmail?: Maybe<AuthTokens>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  makeScreenAsDefault?: Maybe<EmployeeDashboardView>;
  markAllAsRead?: Maybe<Scalars['Boolean']['output']>;
  markAllViewed?: Maybe<Scalars['Boolean']['output']>;
  moveAccessoriesToAsset?: Maybe<Scalars['Boolean']['output']>;
  moveAssetFromLocationToLocation?: Maybe<Scalars['Boolean']['output']>;
  payForPackageSubsctipiton?: Maybe<Scalars['Boolean']['output']>;
  payFranchiseSubscription?: Maybe<Scalars['Boolean']['output']>;
  payrollDetailManuallyAdjust?: Maybe<Scalars['Boolean']['output']>;
  permanentlyDeleteDocument?: Maybe<Scalars['Boolean']['output']>;
  quizTraningAssignTo?: Maybe<Scalars['Boolean']['output']>;
  reJoinEmployee?: Maybe<User>;
  refreshToken?: Maybe<AuthTokens>;
  regionStatusChanged?: Maybe<Scalars['Boolean']['output']>;
  registerBusiness?: Maybe<BusniessId>;
  removeCommisionCampaign?: Maybe<Scalars['Boolean']['output']>;
  removeDelegantEmployee?: Maybe<DelegantApproval>;
  removeEmployeeFromAattendancePolicy?: Maybe<Scalars['Boolean']['output']>;
  removeEmployeeFromBusiness?: Maybe<BusinessNavigation>;
  removeEmployeeFromLeavePolicy?: Maybe<Scalars['Boolean']['output']>;
  removeEmployeeRole?: Maybe<Scalars['Boolean']['output']>;
  removeGuarantors?: Maybe<Scalars['Boolean']['output']>;
  removeShareOfAuthenticatorApp?: Maybe<Scalars['Boolean']['output']>;
  removeTerminalDevice?: Maybe<Scalars['Boolean']['output']>;
  renameDocumentControlAttachment?: Maybe<DocumentControlAttachment>;
  renameSubscriptionAttachment?: Maybe<Attachment>;
  reserveAsset: Scalars['Boolean']['output'];
  resolveConflicts?: Maybe<Scalars['Boolean']['output']>;
  revertCancelSubscription?: Maybe<Scalars['Boolean']['output']>;
  s3UploadFile?: Maybe<Scalars['Boolean']['output']>;
  saveScheduleTemplate?: Maybe<Scalars['Boolean']['output']>;
  saveTillCount?: Maybe<TillCount>;
  scrapAsset?: Maybe<Scalars['Boolean']['output']>;
  scriptForAssetBrand?: Maybe<Scalars['Boolean']['output']>;
  scriptForAssetCategoryCounts?: Maybe<Scalars['Boolean']['output']>;
  scriptForAssignVendorsToQuickAsset?: Maybe<Scalars['Boolean']['output']>;
  sendForgotPasswordEmail?: Maybe<Scalars['Boolean']['output']>;
  sendSchedulesByEmail?: Maybe<Scalars['Boolean']['output']>;
  setDefaultCard?: Maybe<Scalars['Boolean']['output']>;
  setDoNotDisturbInNotifications?: Maybe<Scalars['Boolean']['output']>;
  setEmployeeAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  setEmployeeUnAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  setNumberOfRecord?: Maybe<Scalars['Boolean']['output']>;
  setProfilePictures?: Maybe<Scalars['Boolean']['output']>;
  setSelfFeatureHierarchy?: Maybe<Scalars['Boolean']['output']>;
  shareAuthenticatorApp?: Maybe<Authenticator>;
  shareDocumentControlAttachment?: Maybe<Scalars['Boolean']['output']>;
  singleUpload?: Maybe<Scalars['String']['output']>;
  skipQuizQuestion?: Maybe<Scalars['Boolean']['output']>;
  startedQuiz?: Maybe<Scalars['Boolean']['output']>;
  submitDocumentByEmployee?: Maybe<DocumentControlAttachment>;
  subscribeMedicalInsurance?: Maybe<Scalars['Boolean']['output']>;
  subscribePackgeForSuperAdmin?: Maybe<BusinessPackage>;
  swapeEmployees?: Maybe<Scalars['Boolean']['output']>;
  swapeRole?: Maybe<Scalars['Boolean']['output']>;
  syncPayroll?: Maybe<Payroll>;
  syncWithChatServer?: Maybe<Scalars['Boolean']['output']>;
  trashAsset?: Maybe<Scalars['Boolean']['output']>;
  unAssignAsset?: Maybe<Scalars['Boolean']['output']>;
  unAssignQuiz?: Maybe<Scalars['Boolean']['output']>;
  unBlockEmployees?: Maybe<Scalars['Boolean']['output']>;
  unLinkAssetRelationFromAsset?: Maybe<Scalars['Boolean']['output']>;
  undoDisposedAsset?: Maybe<Scalars['Boolean']['output']>;
  undoReserveAsset?: Maybe<Scalars['Boolean']['output']>;
  unlinkBusiness?: Maybe<BusinessNavigation>;
  unlinkUserAppDevice?: Maybe<Scalars['Boolean']['output']>;
  updateAccountType?: Maybe<AccountType>;
  updateAlertConfiguration?: Maybe<AlertConfiguration>;
  updateAllRolesFeatureHierarchyBulk?: Maybe<Scalars['Boolean']['output']>;
  updateAppPasswordAndShares?: Maybe<Scalars['Boolean']['output']>;
  updateAppraisalObjective?: Maybe<AppraisalObjecive>;
  updateAppraisalScale?: Maybe<AppraisalScale>;
  updateAppraisalType?: Maybe<AppraisalType>;
  updateApprovalWorkFlow?: Maybe<ApprovalWorkFlow>;
  updateAsset?: Maybe<Asset>;
  updateAssetBrand?: Maybe<AssetBrand>;
  updateAssetCategory?: Maybe<AssetCategory>;
  updateAssetModel?: Maybe<AssetModel>;
  updateAssetSubCategory?: Maybe<AssetSubCategory>;
  updateAttendancePermission?: Maybe<Scalars['Boolean']['output']>;
  updateAttendancePolicy?: Maybe<Scalars['Boolean']['output']>;
  updateAttendancePolicyInPreviousData?: Maybe<Scalars['Boolean']['output']>;
  updateAttendanceRegulation?: Maybe<AttendanceRegulation>;
  updateAttendanceRegulationApproval?: Maybe<Scalars['Boolean']['output']>;
  updateAuthenticatorApp?: Maybe<Authenticator>;
  updateBusiness?: Maybe<Business>;
  updateBusinessLocation?: Maybe<BusinessLocation>;
  updateBusinessPackage?: Maybe<Scalars['Boolean']['output']>;
  updateCashDrawer?: Maybe<CashRegisters>;
  updateCashRegister?: Maybe<CashRegisters>;
  updateChartOfAccount?: Maybe<ChartOfAccount>;
  updateCommentInTask?: Maybe<Scalars['Boolean']['output']>;
  updateCommisionCampaign?: Maybe<Scalars['Boolean']['output']>;
  updateCommission?: Maybe<Commission>;
  updateContractLicense?: Maybe<ContractLicense>;
  updateDepartment?: Maybe<Department>;
  updateDesignation?: Maybe<Designation>;
  updateDiscount?: Maybe<Scalars['Boolean']['output']>;
  updateDocumentControlAttachmentAssigning?: Maybe<DocumentControlAttachment>;
  updateDocumentToSign?: Maybe<Scalars['Boolean']['output']>;
  updateDutyRoster?: Maybe<Scalars['Boolean']['output']>;
  updateEmailSMTPConfigration?: Maybe<Scalars['Boolean']['output']>;
  updateEmailTemplate?: Maybe<Scalars['Boolean']['output']>;
  updateEmployeeADPId?: Maybe<Array<Maybe<EmployeeAdpResponse>>>;
  updateEmployeeDashboardView: EmployeeDashboardView;
  updateEmployeeDocument?: Maybe<User>;
  updateEmployeeGarnishment?: Maybe<EmployeeGarnishment>;
  updateEmployeeSeparation?: Maybe<EmployeeSeparation>;
  updateEmployeeVeiwCount?: Maybe<Scalars['Boolean']['output']>;
  updateEmployeesPictures?: Maybe<Scalars['Boolean']['output']>;
  updateEvaluation?: Maybe<AppraisalEvaluation>;
  updateExistingZipCode?: Maybe<Scalars['Boolean']['output']>;
  updateExpenseApproval?: Maybe<Scalars['Boolean']['output']>;
  updateExpenseInvoice?: Maybe<Scalars['Boolean']['output']>;
  updateExpenseInvoiceCategory?: Maybe<ExpenseCategory>;
  updateExpenseRequest?: Maybe<Expense>;
  updateFilter?: Maybe<Filter>;
  updateFinalSettlement?: Maybe<FinalSettlement>;
  updateGiftCard?: Maybe<Scalars['Boolean']['output']>;
  updateGiftCardCategory?: Maybe<Scalars['Boolean']['output']>;
  updateGoal?: Maybe<Scalars['Boolean']['output']>;
  updateInsurance?: Maybe<Insurance>;
  updateInvoice?: Maybe<Scalars['Boolean']['output']>;
  updateInvoiceItem?: Maybe<Scalars['Boolean']['output']>;
  updateLease?: Maybe<Lease>;
  updateLeasingCustomer: LeasingCustomer;
  updateLiveLocation?: Maybe<Scalars['Boolean']['output']>;
  updateLoanApproval?: Maybe<Scalars['Boolean']['output']>;
  updateMaintenance?: Maybe<Maintenance>;
  updateMarginTiers?: Maybe<MarginTiers>;
  updateMasterDataTypeValue?: Maybe<MasterDataValue>;
  updateMultiSchedules?: Maybe<UpdateMultipleScheduleRes>;
  updateMultipleAssetSubCategory?: Maybe<Scalars['Boolean']['output']>;
  updateMultipleWritupApproval?: Maybe<Scalars['Boolean']['output']>;
  updateNotification?: Maybe<Scalars['Boolean']['output']>;
  updateNotificationPermissions?: Maybe<Scalars['Boolean']['output']>;
  updateObjectiveAssignment?: Maybe<Scalars['Boolean']['output']>;
  updatePackage?: Maybe<Package>;
  updatePayrollDetailStatus?: Maybe<PayrollDetail>;
  updatePayrollStatus?: Maybe<Payroll>;
  updatePerformanceCycle?: Maybe<Scalars['Boolean']['output']>;
  updatePerformanceCycleStatus?: Maybe<Scalars['Boolean']['output']>;
  updatePopupStatus?: Maybe<Scalars['Boolean']['output']>;
  updatePreviousAttendancePolicyAndImplementWeekends?: Maybe<Scalars['Boolean']['output']>;
  updateProfilePictureForModels?: Maybe<Scalars['Boolean']['output']>;
  updateProfit_category?: Maybe<ProfitCategory>;
  updateQuickAsset?: Maybe<Scalars['Boolean']['output']>;
  updateQuiz?: Maybe<Scalars['Boolean']['output']>;
  updateQuizCategories?: Maybe<Scalars['Boolean']['output']>;
  updateQuizQuestion?: Maybe<Scalars['Boolean']['output']>;
  updateQuizTraining?: Maybe<Scalars['Boolean']['output']>;
  updateQuizTrainingAssignmentStatus?: Maybe<Scalars['Boolean']['output']>;
  updateQuizTrainingReplica?: Maybe<Scalars['Boolean']['output']>;
  updateReason?: Maybe<Reason>;
  updateRecordsZipCodeWise?: Maybe<Scalars['Boolean']['output']>;
  updateRegion?: Maybe<Region>;
  updateRegisterBusiness?: Maybe<Business>;
  updateRepairPrice?: Maybe<RepairPrice>;
  updateRepliesinCommmentTask?: Maybe<Scalars['Boolean']['output']>;
  updateReserveAsset: Scalars['Boolean']['output'];
  updateRole?: Maybe<Role>;
  updateSampleData?: Maybe<Scalars['Boolean']['output']>;
  updateSchedule?: Maybe<Scalars['Boolean']['output']>;
  updateSchedulesBreaksByDateRange?: Maybe<Scalars['Boolean']['output']>;
  updateServiceCategory?: Maybe<ServiceCategoryType>;
  updateSetupAlert?: Maybe<SetupAlert>;
  updateShareOfAuthenticatorApp?: Maybe<Authenticator>;
  updateShipTo?: Maybe<Scalars['Boolean']['output']>;
  updateShippingMethods?: Maybe<ShippingMethods>;
  updateStation?: Maybe<Station>;
  updateStoreToDutyRoster?: Maybe<RosterStores>;
  updateSubscriptionLogActivity?: Maybe<SubscriptionLogActivity>;
  updateTask?: Maybe<TaskManagement>;
  updateTaskAssignTo?: Maybe<TaskManagement>;
  updateTaskSectionWise?: Maybe<TaskManagement>;
  updateTaskStatus?: Maybe<TaskManagement>;
  updateTax?: Maybe<Tax>;
  updateTimeOff?: Maybe<TimeOff>;
  updateTimeOffApproval?: Maybe<Scalars['Boolean']['output']>;
  updateTraineStatus?: Maybe<Scalars['Boolean']['output']>;
  updateTrainingAssigneeAttachmentStatus?: Maybe<QuizTrainingAssignementListResult>;
  updateTransactWholeFieldInAsset?: Maybe<Scalars['Boolean']['output']>;
  updateUserAppDevice?: Maybe<Scalars['Boolean']['output']>;
  updateUserAssignedRoles?: Maybe<Scalars['Boolean']['output']>;
  updateUserAttachmentStatus?: Maybe<MyQuizTrainingLists>;
  updateUserEmailStatus?: Maybe<Scalars['Boolean']['output']>;
  updateUserPassword?: Maybe<Scalars['Boolean']['output']>;
  updateUserPhoneStatus?: Maybe<Scalars['Boolean']['output']>;
  updateUserProfile?: Maybe<User>;
  updateUserSystemToken?: Maybe<User>;
  updateUsersEncryptionKeys?: Maybe<Scalars['Boolean']['output']>;
  updateVendor?: Maybe<Vendor>;
  updateWriteUp?: Maybe<WriteUp>;
  updateWriteUpApproval?: Maybe<Scalars['Boolean']['output']>;
  uploadAssetDocs?: Maybe<Scalars['Boolean']['output']>;
  uploadDocumentControlAttachment?: Maybe<DocumentControlAttachment>;
  uploadFileDocumentControlAttachment?: Maybe<DocumentControlAttachment>;
  uploadLocationImage: Scalars['Boolean']['output'];
  upsertOrgChartSettings?: Maybe<OrgChartSettings>;
  userBreakedIn?: Maybe<BreakClockedHistory>;
  userClockedIn?: Maybe<ClockedHistory>;
  userForgetPassword?: Maybe<Scalars['Boolean']['output']>;
  userPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  userPinCodeVerify?: Maybe<UserCLocked>;
  verifyEmailOTP?: Maybe<EmailOtp>;
  verifyPhoneOTP?: Maybe<PhoneOtp>;
  verifySSNAndSendOTP?: Maybe<Scalars['Boolean']['output']>;
  workingTimeWagesCalculate?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationMarkNotificationsAsClearedArgs = {
  _ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdateAllRoleAndPermissionOfUserArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateNameOfEmployeesFolderArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAcceptRejectBusinessRequestArgs = {
  input?: InputMaybe<ChangeRequestStatusInput>;
};


export type MutationAddContractLicenseArgs = {
  input: ContractLicenseInput;
};


export type MutationAddCustomLocationArgs = {
  input: CustomLocationInput;
};


export type MutationAddDelegantEmployeeArgs = {
  input: DelegantApprovalMutationInput;
};


export type MutationAddDocumentToSignArgs = {
  input?: InputMaybe<AddDocument>;
};


export type MutationAddEmployeeIntoBusinessesArgs = {
  input?: InputMaybe<AddEmployeeIntoBusinessInput>;
};


export type MutationAddEmployeeToAattendancePolicyArgs = {
  employee_id: Scalars['ID']['input'];
  policy_id: Scalars['ID']['input'];
};


export type MutationAddGuarantorForPasswordArgs = {
  employees: Array<Scalars['ID']['input']>;
};


export type MutationAddInsuranceArgs = {
  input: InsuranceInput;
};


export type MutationAddLeaseArgs = {
  input?: InputMaybe<LeaseInput>;
};


export type MutationAddLeasingCustomerArgs = {
  input: LeasingCustomerInput;
};


export type MutationAddMaintenanceArgs = {
  input?: InputMaybe<MaintenanceInput>;
};


export type MutationAddManualShortBreaksArgs = {
  input: AddManualShortBreaksInput;
};


export type MutationAddMarginTiersArgs = {
  input?: InputMaybe<InputTypeMarginTiers>;
};


export type MutationAddNewFolderDocumentControlArgs = {
  input: AddNewFolderDocumentControl;
};


export type MutationAddNewPaymentMethodCustomerArgs = {
  input?: InputMaybe<PaymentMethod>;
};


export type MutationAddOrRemoveEmployeeInRoleArgs = {
  input: AddEmployee;
};


export type MutationAddPasswordManagerAdminArgs = {
  employee: Scalars['ID']['input'];
};


export type MutationAddProfitCategoryArgs = {
  input?: InputMaybe<InputProfitCategory>;
};


export type MutationAddReasonArgs = {
  input?: InputMaybe<InputReason>;
};


export type MutationAddRepairPriceArgs = {
  input?: InputMaybe<InputRepairPrice>;
};


export type MutationAddRosterCommentArgs = {
  input?: InputMaybe<RosterCommentInput>;
};


export type MutationAddShippingMethodsArgs = {
  input?: InputMaybe<InputBagShipping>;
};


export type MutationAddShortBreakArgs = {
  input?: InputMaybe<UserShortBreak>;
};


export type MutationAddStoreToDutyRosterArgs = {
  business: Scalars['ID']['input'];
  business_location: Scalars['ID']['input'];
  time_zone: Scalars['String']['input'];
};


export type MutationAddUpdateTerminalDeviceArgs = {
  input: AddTerminalAppInput;
};


export type MutationAddUserRadiusArgs = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  time_interval?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationAddVendorArgs = {
  input?: InputMaybe<InputBagVendor>;
};


export type MutationAddWeekendAndPublicHolidayOnTimeSheetArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationAllowAttendanceArgs = {
  _id: Scalars['ID']['input'];
  is_allow: Scalars['Boolean']['input'];
};


export type MutationArchiveAccountTypeArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationArchiveAdvanceFilterArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationArchiveAllowanceArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArchiveAppraisalObjectiveArgs = {
  _id: Array<Scalars['ID']['input']>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAppraisalScaleArgs = {
  _id: Array<Scalars['ID']['input']>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveApprovalWorkFlowArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveAssetArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAssetBrandArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAssetCategoryArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAssetModelArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAssetSubCategoryArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveAttandencePolicyArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveAttendanceArgs = {
  input: ArchiveInput;
};


export type MutationArchiveAttendanceRegulationArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveBusinessArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationArchiveBusinessLocationArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArchiveCashRegisterArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationArchiveContractLicenseArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveDocumentControlArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id: Array<Scalars['ID']['input']>;
};


export type MutationArchiveEmailSmtpConfigrationArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveEmailTemplateArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveEmployeeArgs = {
  archive: Scalars['Boolean']['input'];
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  proceed: Scalars['Boolean']['input'];
};


export type MutationArchiveEmployeeDashboardViewArgs = {
  archive: Scalars['Boolean']['input'];
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationArchiveEmployeeDocumentArgs = {
  document_id: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
};


export type MutationArchiveEmployeeGarnishmentArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveEmployeeHistoryArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveExpenseArgs = {
  archive: Scalars['Boolean']['input'];
  archiveExpenseId?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationArchiveExpenseInvoiceArgs = {
  input?: InputMaybe<ArchiveInvoiceInput>;
};


export type MutationArchiveExpenseInvoiceCategoryArgs = {
  input?: InputMaybe<ArchiveInvoiceInput>;
};


export type MutationArchiveFilterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationArchiveFinalSettlementArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveGiftCardCategoryArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationArchiveGiftCardCategoryTemplateArgs = {
  id: Scalars['ID']['input'];
  templateUrl: Scalars['String']['input'];
};


export type MutationArchiveGratuityArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationArchiveInsuranceArgs = {
  _id?: InputMaybe<Array<Scalars['ID']['input']>>;
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveInvoiceArgs = {
  input?: InputMaybe<ArchiveInvoiceInput>;
};


export type MutationArchiveLeavePolicyByIdArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveLeaveTypeByIdArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveLoanArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationArchiveLoanTransactionArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveMaintenanceArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveMedicalInsuranceArgs = {
  input?: InputMaybe<ArchiveMedicalInsuranceInput>;
};


export type MutationArchiveMedicalInsurancePackageArgs = {
  input?: InputMaybe<ArchiveMedicalInsurancepackageInput>;
};


export type MutationArchiveObjectiveAssignmentArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchivePackageArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationArchivePaymentMethodArgs = {
  card_id: Scalars['ID']['input'];
  customer_id: Scalars['ID']['input'];
};


export type MutationArchivePayrollScheduleArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationArchivePayrollStructureArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationArchivePlaidCategoriesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationArchivePublicHolidaysArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArchiveRoleArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationArchiveRosterArgs = {
  input?: InputMaybe<ArchiveRosterByTypeInput>;
};


export type MutationArchiveRosterCommentArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationArchiveShiftArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationArchiveStoreFromDutyRosterArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArchiveSubscriptionAttachmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArchiveSubscriptionLogActivityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationArchiveTaskArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationArchiveTemplateArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationArchiveUnArchiveCashRegistersHistoryArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizCategoryArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizCategorySectionArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizQuestionArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizTraningArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUnarchiveQuizTraningReplicaArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchiveUserAppDeviceArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationArchivedTaxArgs = {
  _id: Scalars['ID']['input'];
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAssetAlertConfigurationArgs = {
  input: AlertConfigurationInput;
};


export type MutationAssignAattendancePolicyToEmployeeArgs = {
  employee_id: Array<InputMaybe<Scalars['ID']['input']>>;
  policy_id: Scalars['ID']['input'];
};


export type MutationAssignLeavePolicyToEmployeeArgs = {
  input: AssignLeavePolicyInput;
};


export type MutationAssignPackageToSubscriptionArgs = {
  package: Scalars['ID']['input'];
  subscription: Scalars['ID']['input'];
};


export type MutationAssignQuizArgs = {
  assignTo: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAssignRoleToEmployeeArgs = {
  input?: InputMaybe<AssignRoleInput>;
};


export type MutationAssignScheduleToEmployeesArgs = {
  input: AssignInput;
};


export type MutationAssignUsersToQuizAndTrainingArgs = {
  input: AssignUsersToQuizAndTrainingInput;
  trainingId: Scalars['ID']['input'];
};


export type MutationAssigneeFilterByStatusArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TrainingAssignStatus>;
};


export type MutationAttemptQuizAssignmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<AttemptInput>;
};


export type MutationAttendancePolicyArgs = {
  input?: InputMaybe<HrPolicyInput>;
};


export type MutationBackPayToEmployeeArgs = {
  input: BackPayInput;
};


export type MutationCampaignStatusChangedArgs = {
  campaign_id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCancelBusinessPackageArgs = {
  business: Scalars['ID']['input'];
};


export type MutationChangeBusinessOwnerPasswordArgs = {
  input?: InputMaybe<UpdateBusinessOwnerPasswordInput>;
};


export type MutationChangeConfigColumnVisibilityArgs = {
  column_id: Array<InputMaybe<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};


export type MutationChangeDocumentControlAttachmentFolderArgs = {
  id: Scalars['ID']['input'];
  newParentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationChangeEmployeeAttendancePolicyArgs = {
  input: ChangePolicyInput_;
};


export type MutationChangeEmployeeLeavePolicyArgs = {
  input: ChangePolicyInput;
};


export type MutationChangeLocationOfDocumentDeletedParentArgs = {
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  newParentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationChangeRecruitmentStatusArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<RecruitmentStatusEnum>;
};


export type MutationChangeRoleParentArgs = {
  _id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationChangeSharingStatusOrRemoveShareArgs = {
  input?: InputMaybe<ChangeshareStatusInput>;
};


export type MutationChangeSubscriptionAttachmentFolderArgs = {
  id: Scalars['ID']['input'];
  newParentId: Scalars['ID']['input'];
};


export type MutationChangeSubsriptionStatusArgs = {
  id: Scalars['ID']['input'];
  status: AllowedSubscriptionStatus;
};


export type MutationChangeTaskActionArgs = {
  input: TimeLogInput;
};


export type MutationCheckAuthenticatedUserArgs = {
  business_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCheckInAssetsArgs = {
  input: CheckInAssetInput;
};


export type MutationCheckerQuizAssignmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<CheckerInput>;
};


export type MutationCheckoutAssetsArgs = {
  input: CheckoutAssetInput;
};


export type MutationClearDutyRosterArgs = {
  input: Array<InputMaybe<ArchiveRosterInput>>;
};


export type MutationCloneRoleArgs = {
  input: CloneRoleInput;
};


export type MutationCommission_CompaingStatusChangedArgs = {
  campaign_id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCommission_StatusChangedArgs = {
  campaign_id: Scalars['ID']['input'];
  commission_id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCopyDocumentControlAttachmentFolderArgs = {
  id: Scalars['ID']['input'];
  newParentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCopyRolePermissionsArgs = {
  input?: InputMaybe<CopyPermissionInput>;
};


export type MutationCopyScheduleArgs = {
  input: CopyScheduleInput;
};


export type MutationCopyScheduleByDateArgs = {
  input: CopyScheduleByDateInput;
};


export type MutationCopyScheduleDifferentDateArgs = {
  input: CopyScheduleDifferentDateInput;
};


export type MutationCopyScheduleEmployeeToEmployeesArgs = {
  input: CopyScheduleEmpInput;
};


export type MutationCopyScheduletoNextWeekArgs = {
  input: NextWeekInput;
};


export type MutationCopyScheduletoSelectDateArgs = {
  input?: InputMaybe<CopyScheduleSelectedDate>;
};


export type MutationCreateAccountTypeArgs = {
  input: AccountTypeInput;
};


export type MutationCreateActivityGroupArgs = {
  input?: InputMaybe<CreateGroupInput>;
};


export type MutationCreateAdvanceFilterArgs = {
  input: InputCreateAdvanceFilter;
};


export type MutationCreateAndMapPlaidCategoriesArgs = {
  input?: InputMaybe<PlaidCategoriesInput>;
};


export type MutationCreateAppraisalObjectiveArgs = {
  input: CreateAppraisalObjecive;
};


export type MutationCreateAppraisalScaleArgs = {
  input: AddAppraisalScale;
};


export type MutationCreateAppraisalTypeArgs = {
  input: InputAppraisalType;
};


export type MutationCreateApprovalWorkFlowArgs = {
  input: WorkFlowInput;
};


export type MutationCreateAssetArgs = {
  input: AssetInput;
};


export type MutationCreateAssetBrandArgs = {
  brand_name: Scalars['String']['input'];
};


export type MutationCreateAssetCategoryArgs = {
  input: CreateAssetCategoryInput;
};


export type MutationCreateAssetCategoryOrSubCategoryArgs = {
  input?: InputMaybe<CreateAssetCategoryOrSubCategoryInput>;
};


export type MutationCreateAssetModelArgs = {
  AssetBrand: Scalars['ID']['input'];
  models?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateAssetSubCategoryArgs = {
  input: CreateAssetSubCategoryInput;
};


export type MutationCreateAttendanceRegulationArgs = {
  input: InputCreateAttendance;
};


export type MutationCreateAuthenticatorAppThroughQrArgs = {
  input?: InputMaybe<CreateAppInputOtp>;
};


export type MutationCreateAuthenticatorAppWithoutOtpArgs = {
  input?: InputMaybe<CreateAppInputWithoutOtp>;
};


export type MutationCreateBusinessArgs = {
  input?: InputMaybe<CreateBusinessInput>;
};


export type MutationCreateBusinessLocationArgs = {
  input: BusinessLocationInput;
};


export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};


export type MutationCreateCashRegisterArgs = {
  input?: InputMaybe<CashRegisterInput>;
};


export type MutationCreateCashRegistersHistoryArgs = {
  input: CashRegistersHistoryInput;
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateChartOfAccountArgs = {
  input: ChartOfAccountsInput;
};


export type MutationCreateCityArgs = {
  input: CityInput;
};


export type MutationCreateCommentArgs = {
  input: CommentInput;
};


export type MutationCreateCommisionCampaignArgs = {
  input?: InputMaybe<CommisionCampaignInput>;
};


export type MutationCreateCommissionArgs = {
  input?: InputMaybe<CommissionInput>;
};


export type MutationCreateCompensationTimeOffArgs = {
  input?: InputMaybe<CreateCompasationLeaveInput>;
};


export type MutationCreateDeductionArgs = {
  input?: InputMaybe<DeductionInput>;
};


export type MutationCreateDefaultEmployeeActionArgs = {
  business: Scalars['ID']['input'];
};


export type MutationCreateDepartmentArgs = {
  input: DepartmentInput;
};


export type MutationCreateDesignationArgs = {
  input: DesignationsInput;
};


export type MutationCreateDetailTypeArgs = {
  input?: InputMaybe<DetailTypeInput>;
};


export type MutationCreateDiscountArgs = {
  input: DiscountInput;
};


export type MutationCreateDocumentControlAttachmentArgs = {
  input: AddDocumentInput;
};


export type MutationCreateDutyRosterArgs = {
  input: RosterInput;
};


export type MutationCreateDutyRosterForcefullyArgs = {
  input?: InputMaybe<Array<InputMaybe<CreateRosterForcefully>>>;
};


export type MutationCreateEmailOtpArgs = {
  input?: InputMaybe<EmailOtpInput>;
};


export type MutationCreateEmailSmtpConfigrationArgs = {
  input?: InputMaybe<EmailSmtpConfigrationInput>;
};


export type MutationCreateEmailTemplateArgs = {
  input?: InputMaybe<EmailTemplateInput>;
};


export type MutationCreateEmployeeDashboardViewArgs = {
  input: CreateEmployeeDashboardViewInput;
};


export type MutationCreateEmployeeGarnishmentArgs = {
  input?: InputMaybe<EmployeeGarnishmentInput>;
};


export type MutationCreateEmployeeSeparationArgs = {
  input?: InputMaybe<EmployeeSeparationInput>;
};


export type MutationCreateEncryptionCopiesArgs = {
  input?: InputMaybe<UserEncryptionCopiesInput>;
};


export type MutationCreateEvaluationArgs = {
  input?: InputMaybe<CreateEvaluationInput>;
};


export type MutationCreateExpenseInvoiceArgs = {
  input: CreateExpenseInvoice;
};


export type MutationCreateExpenseInvoiceAndCategoryArgs = {
  input: CreateExpenseInvoice;
};


export type MutationCreateExpenseInvoiceCategoryArgs = {
  input: CreateExpenseInvoiceCategory;
};


export type MutationCreateExpenseRequestArgs = {
  input: InputCreateExpenseRequest;
};


export type MutationCreateFilterArgs = {
  input: SaveFilterInput;
};


export type MutationCreateFinalSettlementArgs = {
  input: InputFinalSettlement;
};


export type MutationCreateGiftCardArgs = {
  input: GiftCardInput;
};


export type MutationCreateGoalArgs = {
  input?: InputMaybe<GoalsInput>;
};


export type MutationCreateInvoiceArgs = {
  input: InvoiceInput;
};


export type MutationCreateInvoiceItemArgs = {
  input: InvoiceItemInput;
};


export type MutationCreateLoanAdjustmentArgs = {
  input: InputAdjustment;
};


export type MutationCreateLoanRequestArgs = {
  input: InputLoanRequest;
};


export type MutationCreateLoanTransactionArgs = {
  input: InputTransaction;
};


export type MutationCreateMasterDataTypeArgs = {
  input: DataTypeInput;
};


export type MutationCreateMasterDataTypeValueArgs = {
  input: DataTypeValueInput;
};


export type MutationCreateMedicalInsuranceArgs = {
  medical_insurance_name: Scalars['String']['input'];
};


export type MutationCreateMultiInvoiceItemArgs = {
  input?: InputMaybe<MultiInvoiceItemInput>;
};


export type MutationCreateNotificationPermissionForBusinessArgs = {
  business_id: Scalars['ID']['input'];
};


export type MutationCreateObjectiveAssignmentArgs = {
  input?: InputMaybe<CreateInputObjectiveAssignment>;
};


export type MutationCreatePackageArgs = {
  input: PackageInput;
};


export type MutationCreatePerformanceCycleArgs = {
  input?: InputMaybe<PerformanceCycleInput>;
};


export type MutationCreatePhoneOtpArgs = {
  input?: InputMaybe<PhoneOtpInput>;
};


export type MutationCreateQuickAssetArgs = {
  input?: InputMaybe<CreateAssetInput>;
};


export type MutationCreateQuizArgs = {
  input: CreateQuizInput;
};


export type MutationCreateQuizCategoriesArgs = {
  input: CreateCategoriesInput;
};


export type MutationCreateQuizQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationCreateQuizTrainingArgs = {
  input: CreateTrainingInput;
};


export type MutationCreateReasonArgs = {
  input?: InputMaybe<ReasonInput>;
};


export type MutationCreateRegionArgs = {
  input: CreateRegionInput;
};


export type MutationCreateReminderForNotificationArgs = {
  notificationId: Scalars['ID']['input'];
};


export type MutationCreateRepliesinCommmentTaskArgs = {
  input: CreateRepliesCommentInput;
};


export type MutationCreateRocketChatUserFromChatArgs = {
  input?: InputMaybe<CreateRocketChatUserInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<RoleInput>;
};


export type MutationCreateRosterByScheduleTemplateArgs = {
  input: CreateRosterByTemplate;
};


export type MutationCreateSampleDataArgs = {
  business_id: Scalars['ID']['input'];
  input: Array<CreateSampleDataInput>;
};


export type MutationCreateScheduleArgs = {
  input: SchduleInput;
};


export type MutationCreateSchedulesFromTimeSheetArgs = {
  break_type?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
};


export type MutationCreateServiceCategoryArgs = {
  category_name: Scalars['String']['input'];
};


export type MutationCreateSetupAlertArgs = {
  input?: InputMaybe<InputCreateSetupAlert>;
};


export type MutationCreateShipToArgs = {
  input: CreateShipTo;
};


export type MutationCreateStateArgs = {
  input: StateInput;
};


export type MutationCreateStationArgs = {
  input: StationInput;
};


export type MutationCreateSubscriptionAttachmentArgs = {
  input: InputCreateAttachment;
};


export type MutationCreateSubscriptionLogActivityArgs = {
  input: InputCreateLogActivity;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateTaxArgs = {
  input: TaxInput;
};


export type MutationCreateTimeOffArgs = {
  input?: InputMaybe<CreateTimeOffInput>;
};


export type MutationCreateUpdateAllowanceArgs = {
  input?: InputMaybe<InputAllowances>;
};


export type MutationCreateUpdateAttendanceArgs = {
  input: InputAttendance;
};


export type MutationCreateUpdateAttendanceRequestArgs = {
  input: AttendanceInput;
};


export type MutationCreateUpdateConfigListingArgs = {
  input?: InputMaybe<ConfigListingInput>;
};


export type MutationCreateUpdateContributionArgs = {
  input?: InputMaybe<ContributionInput>;
};


export type MutationCreateUpdateEmployeeArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  business_id: Scalars['ID']['input'];
  input: CreateUpdateEmployeeInput;
};


export type MutationCreateUpdateExpenseArgs = {
  input: InputExpense;
};


export type MutationCreateUpdateGratuityArgs = {
  input?: InputMaybe<GratuityInput>;
};


export type MutationCreateUpdateLeavePolicyArgs = {
  input: LeavePolicyInput;
};


export type MutationCreateUpdateLeaveTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: InputLeaveType;
};


export type MutationCreateUpdateLoanArgs = {
  input: InputLoan;
};


export type MutationCreateUpdateMedicalInsurancePackageArgs = {
  input?: InputMaybe<MedicalInsurancePackageInput>;
};


export type MutationCreateUpdateMultiStoreCustomFieldArgs = {
  customFieldType: CustomFieldTypeEnum;
  input?: InputMaybe<Array<InputMaybe<MultiCustomFieldTypeInput>>>;
  location_id: Scalars['ID']['input'];
};


export type MutationCreateUpdateMultipleActionActivityArgs = {
  input: AddDocumentInput;
};


export type MutationCreateUpdatePayrollScheduleArgs = {
  input?: InputMaybe<PayrollScheduleInput>;
};


export type MutationCreateUpdatePayrollStructureArgs = {
  input?: InputMaybe<PayrollStructureInput>;
};


export type MutationCreateUpdateProductattributesArgs = {
  input?: InputMaybe<ProductAttributeInput>;
};


export type MutationCreateUpdatePublicHolidaysArgs = {
  input?: InputMaybe<InputPublicHolidays>;
};


export type MutationCreateUpdateRecruitmentEmployeeArgs = {
  input?: InputMaybe<RecruitmentInput>;
};


export type MutationCreateUpdateReserveAssetColorArgs = {
  input: InputReserveAssetColor;
};


export type MutationCreateUpdateSchedulerConfigArgs = {
  input: SchedulerConfigInput;
};


export type MutationCreateUpdateShiftArgs = {
  input?: InputMaybe<ShiftInput>;
};


export type MutationCreateUpdateShortLeaveArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ShortLeaveInput;
};


export type MutationCreateUpdateStoreCustomFieldArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  customFieldType: CustomFieldTypeEnum;
  input?: InputMaybe<CustomFieldTypeInput>;
  location_id: Scalars['ID']['input'];
};


export type MutationCreateUpdateTimeOffRequestArgs = {
  input: CreateUpdateTimeOffRequestInput;
};


export type MutationCreateUpdatepaidUnPaidArgs = {
  input?: InputMaybe<PaidUnPaidInput>;
};


export type MutationCreateUserAppDeviceArgs = {
  input: InputUserAppDevice;
};


export type MutationCreateWriteUpArgs = {
  input?: InputMaybe<WriteUpInput>;
};


export type MutationCreatecommentOnTaskArgs = {
  input: CreateCommentInput;
};


export type MutationCustomGradeArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDefaultServicesConfigurationArgs = {
  input: ServiceConfigInput;
};


export type MutationDeleteAppraisalTypeArgs = {
  archive: Scalars['Boolean']['input'];
  id: Array<Scalars['ID']['input']>;
};


export type MutationDeleteAuthenticatorAppArgs = {
  Ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeleteChartOfAccountArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteCommentInTaskArgs = {
  comment_id: Scalars['ID']['input'];
  task_id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionArgs = {
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteConfigListingArgs = {
  listName: Scalars['String']['input'];
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteDepartmentArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteDesignationArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteDiscountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDocFromAssetArgs = {
  assetId: Scalars['ID']['input'];
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteEmployeeSeparationArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteGoalArgs = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteLoanAdjustmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMarginTiersArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteMasterDataTypeValueArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteMultiScheduleArgs = {
  input?: InputMaybe<MultiScheduleDeleteInput>;
};


export type MutationDeleteNewScheduleAndPreviewOldScheduleArgs = {
  input?: InputMaybe<PreviewOldScheduleInput>;
};


export type MutationDeleteNotificationArgs = {
  _ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeleteNotificationsForBusinessAndUserArgs = {
  business_id: Scalars['ID']['input'];
  employeeId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDeleteObjectiveAssignmentNestedDataArgs = {
  _id: Scalars['ID']['input'];
  objectiveId: Scalars['ID']['input'];
};


export type MutationDeletePerformanceCycleArgs = {
  archive: Scalars['Boolean']['input'];
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeletePermissionsArgs = {
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteProductattributesArgs = {
  id: Scalars['ID']['input'];
  type: ProductAttributeTypes;
};


export type MutationDeleteProfitCategoryArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteReasonArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecruitmentArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteRegionArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteRepairPriceArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteRepliesinCommmentTaskArgs = {
  comment_id: Scalars['ID']['input'];
  reply_id: Scalars['ID']['input'];
  task_id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  input: ArchiveRoleData;
};


export type MutationDeleteRostersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteScheduleArgs = {
  ids: Array<Scalars['ID']['input']>;
  notify_by_email: Scalars['Boolean']['input'];
};


export type MutationDeleteShipToArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShippingMethodsArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteShortLeaveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStationArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteStoreCustomFieldArgs = {
  customFieldId: Scalars['ID']['input'];
  customFieldType: CustomFieldTypeEnum;
  location_id: Scalars['ID']['input'];
};


export type MutationDeleteSubscriptionRequestArgs = {
  archive: Scalars['Boolean']['input'];
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteTimeOffArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteVendorArgs = {
  _id: Scalars['ID']['input'];
  archive: Scalars['Boolean']['input'];
};


export type MutationDeleteWriteUpArgs = {
  archive: Scalars['Boolean']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeletecontributionArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletedeductionArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletepaidUnPaidArgs = {
  _id: Scalars['ID']['input'];
  archive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDetectContractFromAssetArgs = {
  assetId: Scalars['ID']['input'];
  contractId: Scalars['ID']['input'];
  contractName: Scalars['String']['input'];
};


export type MutationDetectInsuranceFromAssetArgs = {
  assetId: Scalars['ID']['input'];
  insuranceId: Scalars['ID']['input'];
  insuranceName: Scalars['String']['input'];
};


export type MutationDiscountStatusChangedArgs = {
  campaign_id: Scalars['ID']['input'];
  discount_id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDisposedAssetArgs = {
  input?: InputMaybe<DisposedInput>;
};


export type MutationEditBusinessEmployeeArgs = {
  input?: InputMaybe<EditBusinessEmployeeInput>;
};


export type MutationEditMedicalInsuranceArgs = {
  input?: InputMaybe<MedicalInsuranceInput>;
};


export type MutationEmailScheduleToEmployeeArgs = {
  input: EmailScheduleInput;
};


export type MutationEmployeeClockedInStatusArgs = {
  employeeId: Scalars['ID']['input'];
};


export type MutationEmployeeRecentFileViewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGenerateFolderAndSubfolderForBusinessArgs = {
  business: Scalars['ID']['input'];
};


export type MutationGenerateUniqueAssetIdArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGetBusinessOwnerDataArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGetEmployeesAttendanceListArgs = {
  input: InputAttendanceList;
};


export type MutationGoalStatusChangedArgs = {
  goal_id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImportCityStateDataArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportEmployeesScheduleforMsFromClockingTimeArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportEmployeesforMsArgs = {
  ceoRoleId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
  policy: Scalars['ID']['input'];
};


export type MutationImportProductAttributeMasterDataTypeValueArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportRepairPriceArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportScheduleCsvArgs = {
  file: Scalars['Upload']['input'];
  minimum_break_percentage?: InputMaybe<Scalars['Int']['input']>;
  schedule_From: Scalars['String']['input'];
  schedule_To: Scalars['String']['input'];
};


export type MutationImportSchedulesArgs = {
  break_type: Scalars['ID']['input'];
  create_timesheet: Scalars['Boolean']['input'];
  file: Scalars['Upload']['input'];
};


export type MutationImportTimeSheetArgs = {
  break_type?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
  is_create_schedule: Scalars['Boolean']['input'];
};


export type MutationIntegrateRosterIntoScheduleArgs = {
  end_date: Scalars['DateTime']['input'];
  start_date: Scalars['DateTime']['input'];
};


export type MutationLinkBusinessesArgs = {
  input?: InputMaybe<LinkBusinessesInput>;
};


export type MutationLinkContractsWithAssetArgs = {
  assetId: Scalars['ID']['input'];
  contractId: Scalars['ID']['input'];
  contractName: Scalars['String']['input'];
};


export type MutationLinkInsuranceWithAssetArgs = {
  assetId: Scalars['ID']['input'];
  insuranceId: Scalars['ID']['input'];
  insuranceName: Scalars['String']['input'];
};


export type MutationLinkParentOrChildAssetWithAssetArgs = {
  input: Array<InputMaybe<LinkingRelationAsset>>;
};


export type MutationLoginToOtherBusinessArgs = {
  input?: InputMaybe<LoginToOtherBusinessInput>;
};


export type MutationLoginWithEmailArgs = {
  app_type?: InputMaybe<Application_Type>;
  device_id?: InputMaybe<Scalars['String']['input']>;
  device_token?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationMakeScreenAsDefaultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkAllAsReadArgs = {
  input?: InputMaybe<MarkAsReadInput>;
};


export type MutationMoveAccessoriesToAssetArgs = {
  accessoryId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMoveAssetFromLocationToLocationArgs = {
  assetId: Scalars['ID']['input'];
  site?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPayForPackageSubsctipitonArgs = {
  subscription: Scalars['ID']['input'];
};


export type MutationPayFranchiseSubscriptionArgs = {
  requestID: Scalars['ID']['input'];
};


export type MutationPayrollDetailManuallyAdjustArgs = {
  input: ManuallyAdjustmentInput;
};


export type MutationPermanentlyDeleteDocumentArgs = {
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationQuizTraningAssignToArgs = {
  id: Scalars['ID']['input'];
  input: QuizTrainingAssignToInput;
};


export type MutationReJoinEmployeeArgs = {
  input?: InputMaybe<ReJoinEmployeeInput>;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegionStatusChangedArgs = {
  _id: Scalars['ID']['input'];
  status: RegionStatusChange;
};


export type MutationRegisterBusinessArgs = {
  input?: InputMaybe<BusinessRegistration>;
};


export type MutationRemoveCommisionCampaignArgs = {
  archive: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveDelegantEmployeeArgs = {
  input: DelegantApprovalMutationInput;
};


export type MutationRemoveEmployeeFromAattendancePolicyArgs = {
  employee_id: Scalars['ID']['input'];
  policy_id: Scalars['ID']['input'];
};


export type MutationRemoveEmployeeFromBusinessArgs = {
  input?: InputMaybe<RemoveBusinessEmployeeInput>;
};


export type MutationRemoveEmployeeFromLeavePolicyArgs = {
  _id: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
};


export type MutationRemoveEmployeeRoleArgs = {
  input: RemoveEmployee;
};


export type MutationRemoveGuarantorsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationRemoveShareOfAuthenticatorAppArgs = {
  input?: InputMaybe<RemoveShareInput>;
};


export type MutationRemoveTerminalDeviceArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationRenameDocumentControlAttachmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameSubscriptionAttachmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationReserveAssetArgs = {
  input: ReserveAssetInput;
};


export type MutationResolveConflictsArgs = {
  input: Array<ResolveConflictsInput>;
};


export type MutationRevertCancelSubscriptionArgs = {
  business: Scalars['ID']['input'];
};


export type MutationS3UploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationSaveScheduleTemplateArgs = {
  input: ScheduleTemplateInput;
};


export type MutationSaveTillCountArgs = {
  input: TillCountInput;
};


export type MutationScrapAssetArgs = {
  input?: InputMaybe<ScrapInput>;
};


export type MutationScriptForAssetBrandArgs = {
  business_id: Scalars['ID']['input'];
};


export type MutationScriptForAssetCategoryCountsArgs = {
  business_id: Scalars['ID']['input'];
};


export type MutationScriptForAssignVendorsToQuickAssetArgs = {
  business_id: Scalars['ID']['input'];
};


export type MutationSendForgotPasswordEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendSchedulesByEmailArgs = {
  input: EmailScheduleInput;
};


export type MutationSetDefaultCardArgs = {
  card_id: Scalars['ID']['input'];
  customer_id: Scalars['ID']['input'];
};


export type MutationSetDoNotDisturbInNotificationsArgs = {
  DoNotDisturb?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSetEmployeeAuthenticatedArgs = {
  allow_email?: InputMaybe<Scalars['Boolean']['input']>;
  allow_qr_code?: InputMaybe<Scalars['Boolean']['input']>;
  allow_sms?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationSetEmployeeUnAuthenticatedArgs = {
  emp_id: Scalars['ID']['input'];
};


export type MutationSetNumberOfRecordArgs = {
  input: SetNumberOfRecordInput;
};


export type MutationShareAuthenticatorAppArgs = {
  input?: InputMaybe<ShareAppInput>;
};


export type MutationShareDocumentControlAttachmentArgs = {
  input: EmailDocumentControlAttachment;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationSkipQuizQuestionArgs = {
  id: Scalars['ID']['input'];
  question: Scalars['ID']['input'];
};


export type MutationStartedQuizArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSubmitDocumentByEmployeeArgs = {
  input?: InputMaybe<SubmitDocumentEmployeeInput>;
};


export type MutationSubscribeMedicalInsuranceArgs = {
  input: SubscribeMedicalInsuranceInput;
};


export type MutationSwapeEmployeesArgs = {
  input: SwapeEmployeesData;
};


export type MutationSwapeRoleArgs = {
  input: RoleDataForSwap;
};


export type MutationSyncPayrollArgs = {
  input: SyncPayrollInput;
};


export type MutationSyncWithChatServerArgs = {
  input?: InputMaybe<CreateSyncWithChatServerInput>;
};


export type MutationTrashAssetArgs = {
  input?: InputMaybe<TrashInput>;
};


export type MutationUnAssignAssetArgs = {
  input?: InputMaybe<UnAssignAssetInput>;
};


export type MutationUnAssignQuizArgs = {
  id: Scalars['ID']['input'];
  unAssignTo: Array<Scalars['ID']['input']>;
};


export type MutationUnBlockEmployeesArgs = {
  input: UnBlockInput;
};


export type MutationUnLinkAssetRelationFromAssetArgs = {
  input?: InputMaybe<UnLinkingRelationAsset>;
};


export type MutationUndoDisposedAssetArgs = {
  assetId: Scalars['ID']['input'];
};


export type MutationUndoReserveAssetArgs = {
  assetId: Scalars['ID']['input'];
};


export type MutationUnlinkBusinessArgs = {
  input?: InputMaybe<UnlinkBusinessInput>;
};


export type MutationUnlinkUserAppDeviceArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationUpdateAccountTypeArgs = {
  input: UpdateAccountTypeInput;
};


export type MutationUpdateAlertConfigurationArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AlertConfigurationInput>;
};


export type MutationUpdateAppPasswordAndSharesArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdateAppraisalObjectiveArgs = {
  input: UpdateAppraisalObjecive;
};


export type MutationUpdateAppraisalScaleArgs = {
  input?: InputMaybe<UpdateInputAppraisaleScale>;
};


export type MutationUpdateAppraisalTypeArgs = {
  input: UpdateAppraisalType;
};


export type MutationUpdateApprovalWorkFlowArgs = {
  input: UpdateWorkFlowInput;
};


export type MutationUpdateAssetArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AssetUpdateInput>;
};


export type MutationUpdateAssetBrandArgs = {
  input?: InputMaybe<InputUpdateBrand>;
};


export type MutationUpdateAssetCategoryArgs = {
  input?: InputMaybe<UpdateAssetCategoryInput>;
};


export type MutationUpdateAssetModelArgs = {
  input?: InputMaybe<InputUpdateModel>;
};


export type MutationUpdateAssetSubCategoryArgs = {
  input?: InputMaybe<UpdateAssetSubCategoryInput>;
};


export type MutationUpdateAttendancePermissionArgs = {
  appType: Application_Type;
  deviceId: Scalars['String']['input'];
  isClockedInFromApp: Scalars['Boolean']['input'];
};


export type MutationUpdateAttendancePolicyArgs = {
  input?: InputMaybe<AttandencePolicyUpdate>;
};


export type MutationUpdateAttendancePolicyInPreviousDataArgs = {
  from_date: Scalars['String']['input'];
};


export type MutationUpdateAttendanceRegulationArgs = {
  input: InputUpdateAttendance;
};


export type MutationUpdateAttendanceRegulationApprovalArgs = {
  input: UpdateRequestLevel;
};


export type MutationUpdateAuthenticatorAppArgs = {
  input?: InputMaybe<UpdateAppInput>;
};


export type MutationUpdateBusinessArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateBusinessInput>;
};


export type MutationUpdateBusinessLocationArgs = {
  id: Scalars['ID']['input'];
  input: BusinessLocationInput;
};


export type MutationUpdateBusinessPackageArgs = {
  inActiveEmployees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inActiveStore?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  package: Scalars['ID']['input'];
  subscription: Scalars['ID']['input'];
};


export type MutationUpdateCashDrawerArgs = {
  input?: InputMaybe<CashDrawerInput>;
};


export type MutationUpdateCashRegisterArgs = {
  _id: Scalars['ID']['input'];
  input: CashRegisterInput;
};


export type MutationUpdateChartOfAccountArgs = {
  _id: Scalars['ID']['input'];
  input: ChartOfAccountsInput;
};


export type MutationUpdateCommentInTaskArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateCommisionCampaignArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<CommisionCampaignInput>;
};


export type MutationUpdateCommissionArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<CommissionInput>;
};


export type MutationUpdateContractLicenseArgs = {
  id: Scalars['ID']['input'];
  input: ContractLicenseInput;
};


export type MutationUpdateDepartmentArgs = {
  _id: Scalars['ID']['input'];
  input: DepartmentInput;
};


export type MutationUpdateDesignationArgs = {
  _id: Scalars['ID']['input'];
  input: DesignationsInput;
};


export type MutationUpdateDiscountArgs = {
  input: UpdateDiscountInput;
};


export type MutationUpdateDocumentControlAttachmentAssigningArgs = {
  input?: InputMaybe<UpdateDocumentInput>;
};


export type MutationUpdateDocumentToSignArgs = {
  input?: InputMaybe<UpdateDoucment>;
};


export type MutationUpdateDutyRosterArgs = {
  input?: InputMaybe<RosterInput>;
};


export type MutationUpdateEmailSmtpConfigrationArgs = {
  _id: Scalars['ID']['input'];
  input?: InputMaybe<EmailSmtpConfigrationInput>;
};


export type MutationUpdateEmailTemplateArgs = {
  _id: Scalars['ID']['input'];
  input?: InputMaybe<EmailTemplateInput>;
};


export type MutationUpdateEmployeeAdpIdArgs = {
  input?: InputMaybe<Array<EmployeeAdpId>>;
};


export type MutationUpdateEmployeeDashboardViewArgs = {
  id: Scalars['ID']['input'];
  input: CreateEmployeeDashboardViewInput;
};


export type MutationUpdateEmployeeDocumentArgs = {
  input?: InputMaybe<EmployeeDocumentUpdateInput>;
};


export type MutationUpdateEmployeeGarnishmentArgs = {
  input?: InputMaybe<EmployeeGarnishmentUpdate>;
};


export type MutationUpdateEmployeeSeparationArgs = {
  id: Scalars['ID']['input'];
  input: EmployeeSeparationInput;
};


export type MutationUpdateEmployeeVeiwCountArgs = {
  employeeID?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEmployeesPicturesArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpdateEvaluationArgs = {
  input?: InputMaybe<UpdateEvaluationInput>;
};


export type MutationUpdateExpenseApprovalArgs = {
  input: InputUpdateExpenseApproval;
};


export type MutationUpdateExpenseInvoiceArgs = {
  input: UpdateExpenseInvoice;
};


export type MutationUpdateExpenseInvoiceCategoryArgs = {
  input: UpdateExpenseInvoiceCategory;
};


export type MutationUpdateExpenseRequestArgs = {
  input: InputUpdateExpenseRequest;
};


export type MutationUpdateFilterArgs = {
  id: Scalars['ID']['input'];
  input: SaveFilterInput;
};


export type MutationUpdateFinalSettlementArgs = {
  _id: Scalars['ID']['input'];
  input: InputFinalSettlement;
};


export type MutationUpdateGiftCardArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardInput;
};


export type MutationUpdateGiftCardCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateGoalArgs = {
  _id: Scalars['ID']['input'];
  input?: InputMaybe<GoalsInput>;
};


export type MutationUpdateInsuranceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<InsuranceInput>;
};


export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput;
};


export type MutationUpdateInvoiceItemArgs = {
  input: UpdateInvoiceItemInput;
};


export type MutationUpdateLeaseArgs = {
  input: UpdateLeaseInput;
};


export type MutationUpdateLeasingCustomerArgs = {
  input: LeasingCustomerInput;
};


export type MutationUpdateLiveLocationArgs = {
  app_type: Application_Type;
  device_id: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateLoanApprovalArgs = {
  input: UpdateLoanRequest;
};


export type MutationUpdateMaintenanceArgs = {
  input: UpdateMaintenanceInput;
};


export type MutationUpdateMarginTiersArgs = {
  input?: InputMaybe<InputUpdateMarginTiers>;
};


export type MutationUpdateMasterDataTypeValueArgs = {
  input: UpdateDataTypeValueInput;
};


export type MutationUpdateMultiSchedulesArgs = {
  input: UpdateMultiSchduleInput;
};


export type MutationUpdateMultipleAssetSubCategoryArgs = {
  input?: InputMaybe<InputUpdateMultipleSubCateg>;
};


export type MutationUpdateMultipleWritupApprovalArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  status: WritupStatusEnumMult;
};


export type MutationUpdateNotificationArgs = {
  _id: Scalars['ID']['input'];
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateNotificationPermissionsArgs = {
  input?: InputMaybe<UpdatePermissions>;
};


export type MutationUpdateObjectiveAssignmentArgs = {
  input: UpdateInputObjectiveAssignment;
};


export type MutationUpdatePackageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PackageInput;
};


export type MutationUpdatePayrollDetailStatusArgs = {
  input: UpdatePayrollStatusInput;
};


export type MutationUpdatePayrollStatusArgs = {
  input: UpdatePayrollStatusInput;
};


export type MutationUpdatePerformanceCycleArgs = {
  input?: InputMaybe<UpdatePerformanceCycleInput>;
};


export type MutationUpdatePerformanceCycleStatusArgs = {
  input?: InputMaybe<UpdatePerformanceCycleStatusInput>;
};


export type MutationUpdatePreviousAttendancePolicyAndImplementWeekendsArgs = {
  input?: InputMaybe<UpdatePreviousInput>;
};


export type MutationUpdateProfilePictureForModelsArgs = {
  input?: InputMaybe<UpdateProfilePictureInput>;
};


export type MutationUpdateProfit_CategoryArgs = {
  input?: InputMaybe<InputUpdateProfitCategory>;
};


export type MutationUpdateQuickAssetArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateAssetInput>;
};


export type MutationUpdateQuizArgs = {
  id: Scalars['ID']['input'];
  input: UpdateQuizInput;
};


export type MutationUpdateQuizCategoriesArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCategoriesInput;
};


export type MutationUpdateQuizQuestionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: UpdateQuestionInput;
};


export type MutationUpdateQuizTrainingArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTrainingInput;
};


export type MutationUpdateQuizTrainingAssignmentStatusArgs = {
  input: UpdateQuizTrainingAssignmentStatusInput;
};


export type MutationUpdateQuizTrainingReplicaArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTraininReplicagInput;
};


export type MutationUpdateReasonArgs = {
  input?: InputMaybe<InputUpdateReason>;
};


export type MutationUpdateRegionArgs = {
  input: UpdateRegionInput;
};


export type MutationUpdateRegisterBusinessArgs = {
  input?: InputMaybe<UpdateRegisterBusinessInput>;
};


export type MutationUpdateRepairPriceArgs = {
  input?: InputMaybe<InputUpdateRepairPrice>;
};


export type MutationUpdateRepliesinCommmentTaskArgs = {
  input?: InputMaybe<UpdateRepliesCommentInput>;
};


export type MutationUpdateReserveAssetArgs = {
  input: ReserveUpdateAssetInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<RoleInput>;
};


export type MutationUpdateSampleDataArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  input: Array<UpdateSampleDataInput>;
};


export type MutationUpdateScheduleArgs = {
  input: UpdateSchduleInput;
};


export type MutationUpdateSchedulesBreaksByDateRangeArgs = {
  input?: InputMaybe<InputBreakUpdate>;
};


export type MutationUpdateServiceCategoryArgs = {
  _id: Scalars['ID']['input'];
  category_name: Scalars['String']['input'];
};


export type MutationUpdateSetupAlertArgs = {
  input?: InputMaybe<InputUpdateSetupAlert>;
};


export type MutationUpdateShareOfAuthenticatorAppArgs = {
  input?: InputMaybe<UpdateShareAppInput>;
};


export type MutationUpdateShipToArgs = {
  input: UpdateShipTo;
};


export type MutationUpdateShippingMethodsArgs = {
  input?: InputMaybe<InputUpdateShipping>;
};


export type MutationUpdateStationArgs = {
  _id: Scalars['ID']['input'];
  input: StationInput;
};


export type MutationUpdateStoreToDutyRosterArgs = {
  input: RosterStoreInput;
};


export type MutationUpdateSubscriptionLogActivityArgs = {
  input: InputUpdateLogActivity;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationUpdateTaskAssignToArgs = {
  input: UpdateAssignToInput;
};


export type MutationUpdateTaskSectionWiseArgs = {
  input: UpdateTaskSectionWise;
};


export type MutationUpdateTaskStatusArgs = {
  _id: Scalars['ID']['input'];
  status: TaskStatusUpdateEmums;
};


export type MutationUpdateTaxArgs = {
  _id: Scalars['ID']['input'];
  input: TaxInput;
};


export type MutationUpdateTimeOffArgs = {
  input?: InputMaybe<TimeOffInput>;
};


export type MutationUpdateTimeOffApprovalArgs = {
  input: UpdateLeaveRequest;
};


export type MutationUpdateTraineStatusArgs = {
  id: Scalars['ID']['input'];
  input: QuizTrainingUpdateStatus;
};


export type MutationUpdateTrainingAssigneeAttachmentStatusArgs = {
  input: UpdateTrainingAttachementStatus;
  trainingAssignmentId: Scalars['ID']['input'];
};


export type MutationUpdateTransactWholeFieldInAssetArgs = {
  assetId: Scalars['ID']['input'];
  transactionValue: Scalars['Boolean']['input'];
};


export type MutationUpdateUserAppDeviceArgs = {
  input?: InputMaybe<UpdateInputUserAppDevice>;
};


export type MutationUpdateUserAttachmentStatusArgs = {
  input: UpdateTrainingAttachementStatus;
  trainingId: Scalars['ID']['input'];
};


export type MutationUpdateUserEmailStatusArgs = {
  input?: InputMaybe<EmailVerifyOtpInput>;
};


export type MutationUpdateUserPasswordArgs = {
  input?: InputMaybe<UpdateUserPasswordInput>;
};


export type MutationUpdateUserPhoneStatusArgs = {
  employeeId: Scalars['ID']['input'];
  otp_code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationUpdateUserProfileArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateUserSystemTokenArgs = {
  _id: Scalars['ID']['input'];
  system_token: Scalars['String']['input'];
};


export type MutationUpdateUsersEncryptionKeysArgs = {
  input?: InputMaybe<UserEncryptionKeyInput>;
};


export type MutationUpdateVendorArgs = {
  input?: InputMaybe<InputUpdateVendor>;
};


export type MutationUpdateWriteUpArgs = {
  input?: InputMaybe<UpdateWriteUpInput>;
};


export type MutationUpdateWriteUpApprovalArgs = {
  input: InputUpdateWriteUpApproval;
};


export type MutationUploadAssetDocsArgs = {
  input?: InputMaybe<UploadAssetDocInput>;
};


export type MutationUploadDocumentControlAttachmentArgs = {
  input: FileUploadDocumentControl;
};


export type MutationUploadFileDocumentControlAttachmentArgs = {
  input: UploadFileDocumentControlAttachment;
};


export type MutationUploadLocationImageArgs = {
  file: Scalars['Upload']['input'];
  location_id: Scalars['String']['input'];
};


export type MutationUpsertOrgChartSettingsArgs = {
  input: OrgChartSettingsInput;
};


export type MutationUserBreakedInArgs = {
  breakClockedTime: Scalars['String']['input'];
  input?: InputMaybe<UserBreakIn>;
  oldBreakHistoryId?: InputMaybe<Scalars['ID']['input']>;
  writeups?: InputMaybe<Array<WriteUpInput>>;
};


export type MutationUserClockedInArgs = {
  app_type?: InputMaybe<Application_Type>;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  clockedTime: Scalars['String']['input'];
  device_id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  oldClockHistoryId?: InputMaybe<Scalars['ID']['input']>;
  userClockInPin: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  writeups?: InputMaybe<Array<WriteUpInput>>;
  zoneName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserForgetPasswordArgs = {
  email: Scalars['String']['input'];
  method?: InputMaybe<AllowMethodPhoneVerify>;
};


export type MutationUserPasswordResetArgs = {
  input?: InputMaybe<PasswordResetInput>;
};


export type MutationUserPinCodeVerifyArgs = {
  business_id: Scalars['ID']['input'];
  clockedTime: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
  time_zone: Scalars['String']['input'];
};


export type MutationVerifyEmailOtpArgs = {
  input?: InputMaybe<EmailVerifyOtpInput>;
};


export type MutationVerifyPhoneOtpArgs = {
  input?: InputMaybe<PhoneVerifyOtpInput>;
};


export type MutationVerifySsnAndSendOtpArgs = {
  input?: InputMaybe<VerifySsnAndSendOtpInput>;
};


export type MutationWorkingTimeWagesCalculateArgs = {
  employees?: InputMaybe<Array<Scalars['ID']['input']>>;
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type MyQuizTrainingLists = {
  __typename?: 'MyQuizTrainingLists';
  Quiz?: Maybe<Quiz>;
  all_assignee?: Maybe<Array<Maybe<QuizTrainingUser>>>;
  assign_to_department?: Maybe<Array<Maybe<QuizTrainingDepartment>>>;
  assign_to_role?: Maybe<Array<Maybe<QuizTrainingRole>>>;
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  global_status?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type MyQuizTraningListingResult = {
  __typename?: 'MyQuizTraningListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<MyQuizTrainingLists>>>;
};

export type NewWriteUp = {
  __typename?: 'NewWriteUp';
  write_up_type?: Maybe<Scalars['String']['output']>;
  writeup_category?: Maybe<Scalars['String']['output']>;
  writeup_date?: Maybe<Scalars['DateTime']['output']>;
  writeup_message?: Maybe<Scalars['String']['output']>;
};

export type NotificationModuleAndPermission = {
  __typename?: 'NotificationModuleAndPermission';
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  feature?: Maybe<Scalars['String']['output']>;
  is_checked?: Maybe<Scalars['Boolean']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  permission_at?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Array<Maybe<Role>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sub_feature?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type NotificationPath = {
  __typename?: 'NotificationPath';
  feature?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  navigationUrl?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type OfferLetter = {
  __typename?: 'OfferLetter';
  offer_letter_description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  offer_letter_details?: Maybe<Scalars['String']['output']>;
  offer_letter_footer?: Maybe<Scalars['String']['output']>;
  professional_tax?: Maybe<Scalars['String']['output']>;
};

export type OfferLetterInput = {
  offer_letter_description?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offer_letter_details?: InputMaybe<Scalars['String']['input']>;
  offer_letter_footer?: InputMaybe<Scalars['String']['input']>;
  professional_tax?: InputMaybe<Scalars['String']['input']>;
};

export type OldInvoiceInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  invoiceItems?: InputMaybe<Array<InputMaybe<InvoiceItems>>>;
  invoiceNumber?: InputMaybe<Scalars['Int']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Int']['input']>;
  subTotal?: InputMaybe<Scalars['Int']['input']>;
  taxes?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type OptionImageAddInput = {
  files: Array<Scalars['Upload']['input']>;
  optionId: Scalars['ID']['input'];
};

export type OptionImageRemoveInput = {
  fileUrl: Scalars['String']['input'];
  optionId: Scalars['ID']['input'];
};

export type OptionInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type OptionObject = {
  __typename?: 'OptionObject';
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export type OptionTextUpdateInput = {
  optionId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type OrgChartSettings = {
  __typename?: 'OrgChartSettings';
  child_color?: Maybe<Scalars['String']['output']>;
  color_scheme?: Maybe<ColorSchemeEnum>;
  custom_destence?: Maybe<Scalars['Int']['output']>;
  defult_expand?: Maybe<Scalars['Int']['output']>;
  group_siblings?: Maybe<Scalars['Int']['output']>;
  hybrid_color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_allow_drag_drop?: Maybe<Scalars['Boolean']['output']>;
  is_enable_wheel?: Maybe<Scalars['Boolean']['output']>;
  is_expand_on_click?: Maybe<Scalars['Boolean']['output']>;
  is_multi_highlight?: Maybe<Scalars['Boolean']['output']>;
  is_searcheble?: Maybe<Scalars['Boolean']['output']>;
  is_show_avatars?: Maybe<Scalars['Boolean']['output']>;
  layer_color_count?: Maybe<Scalars['Int']['output']>;
  layer_colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  node_color_mode?: Maybe<NodeColorModeEnum>;
  parent_color?: Maybe<Scalars['String']['output']>;
};

export type OrgChartSettingsInput = {
  child_color?: InputMaybe<Scalars['String']['input']>;
  color_scheme?: InputMaybe<ColorSchemeEnum>;
  custom_destence?: InputMaybe<Scalars['Int']['input']>;
  defult_expand?: InputMaybe<Scalars['Int']['input']>;
  group_siblings?: InputMaybe<Scalars['Int']['input']>;
  hybrid_color?: InputMaybe<Scalars['String']['input']>;
  is_allow_drag_drop?: InputMaybe<Scalars['Boolean']['input']>;
  is_enable_wheel?: InputMaybe<Scalars['Boolean']['input']>;
  is_expand_on_click?: InputMaybe<Scalars['Boolean']['input']>;
  is_multi_highlight?: InputMaybe<Scalars['Boolean']['input']>;
  is_searcheble?: InputMaybe<Scalars['Boolean']['input']>;
  is_show_avatars?: InputMaybe<Scalars['Boolean']['input']>;
  layer_color_count?: InputMaybe<Scalars['Int']['input']>;
  layer_colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  node_color_mode?: InputMaybe<NodeColorModeEnum>;
  parent_color?: InputMaybe<Scalars['String']['input']>;
};

export type OvertimeTotalSummary = {
  __typename?: 'OvertimeTotalSummary';
  totalOvertimeMinutes?: Maybe<Scalars['Int']['output']>;
  totalOvertimeWages?: Maybe<Scalars['Float']['output']>;
};

export type PacakgeAndBusinessPermission = {
  __typename?: 'PacakgeAndBusinessPermission';
  businessPermission?: Maybe<Array<Maybe<Permission>>>;
  package?: Maybe<Package>;
};

export type Package = {
  __typename?: 'Package';
  _id?: Maybe<Scalars['ID']['output']>;
  auto_renewal?: Maybe<Scalars['Boolean']['output']>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  hr_module_only?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_pakage_free?: Maybe<Scalars['Boolean']['output']>;
  is_public_package?: Maybe<Scalars['Boolean']['output']>;
  no_of_employee?: Maybe<Scalars['Int']['output']>;
  no_of_store?: Maybe<Scalars['Int']['output']>;
  no_of_transcation?: Maybe<Scalars['Int']['output']>;
  number_of_cashregisters?: Maybe<Scalars['Int']['output']>;
  package_name?: Maybe<Scalars['String']['output']>;
  package_price?: Maybe<Scalars['Float']['output']>;
  package_type?: Maybe<Scalars['String']['output']>;
  per_employee_fee?: Maybe<Scalars['Float']['output']>;
  per_store_fee?: Maybe<Scalars['Float']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  policy?: Maybe<Policy>;
  purchase_from_ms?: Maybe<Scalars['Boolean']['output']>;
  recurring?: Maybe<PackageRecurrignType>;
  transcation_fee?: Maybe<Scalars['Float']['output']>;
  transcation_fee_calculation_type?: Maybe<PackageTranscationFeeType>;
  transcation_fee_ending_limit?: Maybe<Scalars['Float']['output']>;
  transcation_fee_starting_limit?: Maybe<Scalars['Float']['output']>;
};

export type PackageListingResult = {
  __typename?: 'PackageListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Package>>>;
};

export type PackagePaymentLogs = {
  __typename?: 'PackagePaymentLogs';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Subscription>;
};

export enum PackageRecurrignType {
  Monthly = 'monthly',
  Quarter = 'quarter',
  Yearly = 'yearly'
}

export enum PackageTranscationFeeType {
  Fixed = 'fixed',
  Percentage = 'percentage'
}

export enum PackageType {
  Archive = 'archive',
  Corporate = 'corporate',
  Franchise = 'franchise',
  Franchiser = 'franchiser',
  FranchiserOem = 'franchiser_OEM',
  IndependentBusiness = 'independent_business'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextPageCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginateAssetEmployees = {
  __typename?: 'PaginateAssetEmployees';
  EmployeeListWithAssets?: Maybe<Array<Maybe<EmployeeListWithAssets>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaidTransactionFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordManagerAdmins = {
  __typename?: 'PasswordManagerAdmins';
  encryptionCopy?: Maybe<UserEncryptionCopies>;
  is_encryption_copy_exist?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type PasswordResetInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum PayHolidayPolicy {
  RunPayrollEarlier = 'run_payroll_earlier',
  RunPayrollLater = 'run_payroll_later'
}

export enum PayPeriod {
  BiWeekly = 'BiWeekly',
  PerMonth = 'per_month'
}

export type Payroll = {
  __typename?: 'Payroll';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  despersed_date?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_dispersed?: Maybe<Scalars['Boolean']['output']>;
  no_of_days?: Maybe<Scalars['Int']['output']>;
  no_of_employee?: Maybe<Scalars['Int']['output']>;
  pay_period?: Maybe<Scalars['String']['output']>;
  payroll_detail?: Maybe<Array<Maybe<Payroll_Detail>>>;
  payroll_name?: Maybe<Scalars['String']['output']>;
  payroll_run_date?: Maybe<Scalars['DateTime']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type PayrollDetail = {
  __typename?: 'PayrollDetail';
  Payroll?: Maybe<Payroll>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  absents?: Maybe<Scalars['Int']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  adjusted_amount?: Maybe<Scalars['Float']['output']>;
  adjusted_at?: Maybe<Scalars['DateTime']['output']>;
  adjusted_by?: Maybe<User>;
  adjustment_detail?: Maybe<Array<Maybe<Adjustment_Detail>>>;
  allowances?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  back_pay_wages?: Maybe<Scalars['Float']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  basic_salary?: Maybe<Scalars['Float']['output']>;
  commissions?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  contributions?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  deductions?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  description?: Maybe<Scalars['String']['output']>;
  employee_actions?: Maybe<Array<Maybe<Employee_Actions>>>;
  employee_garnishment?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  expenses?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  gross_salary?: Maybe<Scalars['Float']['output']>;
  is_credit?: Maybe<Scalars['Boolean']['output']>;
  is_dispersed?: Maybe<Scalars['Boolean']['output']>;
  is_manually_adjust?: Maybe<Scalars['Boolean']['output']>;
  is_processed?: Maybe<Scalars['Boolean']['output']>;
  leaves?: Maybe<Scalars['Int']['output']>;
  loan_payments?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  medical_insurance?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  net_salary?: Maybe<Scalars['Float']['output']>;
  no_of_days?: Maybe<Scalars['Int']['output']>;
  over_time_paid_public_holidays?: Maybe<Scalars['Int']['output']>;
  over_time_public_holidays?: Maybe<Scalars['Int']['output']>;
  over_time_public_holidays_minutes_logged?: Maybe<Scalars['Int']['output']>;
  over_time_public_holidays_wages?: Maybe<Scalars['Float']['output']>;
  over_time_weekend_days?: Maybe<Scalars['Int']['output']>;
  over_time_weekend_minutes_logged?: Maybe<Scalars['Int']['output']>;
  over_time_weekend_wages?: Maybe<Scalars['Float']['output']>;
  paid_public_holidays?: Maybe<Scalars['Int']['output']>;
  paid_public_holidays_wages?: Maybe<Scalars['Float']['output']>;
  paid_short_leaves?: Maybe<Scalars['Int']['output']>;
  paid_short_leaves_wages?: Maybe<Scalars['Float']['output']>;
  paid_weekend_days?: Maybe<Scalars['Int']['output']>;
  paid_weekend_days_wages?: Maybe<Scalars['Float']['output']>;
  pay_date?: Maybe<Scalars['DateTime']['output']>;
  pto_wages?: Maybe<Scalars['Float']['output']>;
  sale_goals?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  short_leaves?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taxes?: Maybe<Array<Maybe<Allowances_Deductions>>>;
  total_adjusted_amount?: Maybe<Scalars['Float']['output']>;
  un_paid_short_leaves?: Maybe<Scalars['Int']['output']>;
};

export enum PayrollPayPeriodEnum {
  BiWeekly = 'BiWeekly',
  PerMonth = 'PerMonth',
  TwiceMonth = 'TwiceMonth',
  Weekly = 'Weekly'
}

export type PayrollSchedule = {
  __typename?: 'PayrollSchedule';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  business_location?: Maybe<BusinessLocation>;
  day_of_month?: Maybe<Scalars['Int']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  first_day_of_payroll_run_date?: Maybe<Scalars['Int']['output']>;
  hourly_pay?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  last_payroll_run_date?: Maybe<Scalars['DateTime']['output']>;
  no_of_days?: Maybe<Scalars['String']['output']>;
  pay_day?: Maybe<Scalars['DateTime']['output']>;
  pay_holiday_policy?: Maybe<Scalars['String']['output']>;
  pay_period?: Maybe<Scalars['String']['output']>;
  schedule_name?: Maybe<Scalars['String']['output']>;
  secound_day_of_payroll_run_date?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
};

export type PayrollScheduleInput = {
  business: Scalars['ID']['input'];
  business_location?: InputMaybe<Scalars['ID']['input']>;
  day_of_month?: InputMaybe<Scalars['Int']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first_day_of_payroll_run_date?: InputMaybe<Scalars['Int']['input']>;
  hourly_pay: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  no_of_days?: InputMaybe<Scalars['String']['input']>;
  pay_day: Scalars['String']['input'];
  pay_holiday_policy: Scalars['String']['input'];
  pay_period: Scalars['String']['input'];
  schedule_name: Scalars['String']['input'];
  secound_day_of_payroll_run_date?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayrollScheduleListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<SortEnum>;
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PayrollScheduleListingResult = {
  __typename?: 'PayrollScheduleListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<PayrollSchedule>>>;
};

export type PayrollStructure = {
  __typename?: 'PayrollStructure';
  _id?: Maybe<Scalars['ID']['output']>;
  allowances?: Maybe<Array<Maybe<AllowanceData>>>;
  contributions?: Maybe<Array<Maybe<ContributionData>>>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deductions?: Maybe<Array<Maybe<DeductionData>>>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  structure_name?: Maybe<Scalars['String']['output']>;
};

export type PayrollStructureInput = {
  allowance_list?: InputMaybe<Array<InputMaybe<AllowanceList>>>;
  business_location?: InputMaybe<Scalars['ID']['input']>;
  contribution_list?: InputMaybe<Array<InputMaybe<ContributionList>>>;
  deduction_list?: InputMaybe<Array<InputMaybe<DeductionList>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  structure_name: Scalars['String']['input'];
};

export type PayrollStructureListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PayrollStructureListingResult = {
  __typename?: 'PayrollStructureListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<PayrollStructure>>>;
};

export type Permission = {
  __typename?: 'Permission';
  feature?: Maybe<Scalars['String']['output']>;
  is_admin_essential_permission?: Maybe<Scalars['Boolean']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  permission?: Maybe<Scalars['String']['output']>;
  permission_at?: Maybe<Scalars['String']['output']>;
};

export type PermissionRole = {
  __typename?: 'PermissionRole';
  _id?: Maybe<Scalars['ID']['output']>;
  feature?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  permission?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type PersonalDetails = {
  __typename?: 'PersonalDetails';
  Country?: Maybe<Country>;
  address_1?: Maybe<Scalars['String']['output']>;
  address_2?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['DateTime']['output']>;
  city?: Maybe<City>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  home_no?: Maybe<Scalars['String']['output']>;
  is_email_verify?: Maybe<Scalars['Boolean']['output']>;
  is_phone_verify?: Maybe<Scalars['Boolean']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  marital_status?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  mobile_no_to_send_sms?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type PersonalDetailsInput = {
  Country?: InputMaybe<Scalars['ID']['input']>;
  address_1?: InputMaybe<Scalars['String']['input']>;
  address_2?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  first_name?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  home_no?: InputMaybe<Scalars['String']['input']>;
  is_email_verify?: InputMaybe<Scalars['Boolean']['input']>;
  is_phone_verify?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  marital_status?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  mobile_no_to_send_sms?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['ID']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type PlaidSyncTransactions = {
  __typename?: 'PlaidSyncTransactions';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PlaidTransactionType = {
  __typename?: 'PlaidTransactionType';
  _id: Scalars['ID']['output'];
  account_id?: Maybe<Scalars['String']['output']>;
  account_owner?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  authorized_datetime?: Maybe<Scalars['Date']['output']>;
  category?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  date?: Maybe<Scalars['Date']['output']>;
  datetime?: Maybe<Scalars['Date']['output']>;
  iso_currency_code?: Maybe<Scalars['String']['output']>;
  location?: Maybe<LocationData>;
  logo_url?: Maybe<Scalars['String']['output']>;
  mapped_category?: Maybe<Scalars['String']['output']>;
  merchant_entity_id?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pending?: Maybe<Scalars['Boolean']['output']>;
  transaction_code?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type PlaidTransactionsResult = {
  __typename?: 'PlaidTransactionsResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<PlaidTransactionType>>>;
};

export type Policy = {
  __typename?: 'Policy';
  customer_max_storecredit?: Maybe<Scalars['Int']['output']>;
  customer_max_storecredit_transfer?: Maybe<Scalars['Int']['output']>;
  device_type?: Maybe<Scalars['String']['output']>;
  pay_later_invoice_max_limit?: Maybe<Scalars['Int']['output']>;
  payment_gateways?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sale_cash_max_limit?: Maybe<Scalars['Int']['output']>;
  sale_max_invoice_discount_fixed?: Maybe<Scalars['Int']['output']>;
  sale_max_invoice_discount_percentage?: Maybe<Scalars['Int']['output']>;
  sale_max_item_discount?: Maybe<Scalars['Int']['output']>;
  sale_max_tabs?: Maybe<Scalars['Int']['output']>;
  sale_paypal_invoice_min_limit?: Maybe<Scalars['Int']['output']>;
  sale_paypal_invoice_no_transaction?: Maybe<Scalars['Int']['output']>;
  sale_paypal_min_limit?: Maybe<Scalars['Int']['output']>;
  sale_paypal_no_transaction?: Maybe<Scalars['Int']['output']>;
  ticket_invoice_refund_max_percentage_discount?: Maybe<Scalars['Int']['output']>;
};

export enum PolicyTypeEnum {
  CarryForward = 'CarryForward',
  None = 'None',
  PayOff = 'PayOff'
}

export type Previous = {
  __typename?: 'Previous';
  account_status?: Maybe<Scalars['String']['output']>;
  action_create_date?: Maybe<Scalars['DateTime']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  basic_salary?: Maybe<Scalars['Float']['output']>;
  department?: Maybe<Array<Maybe<Department>>>;
  employee_type?: Maybe<Scalars['String']['output']>;
  hire_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_exclude_pay_roll?: Maybe<Scalars['String']['output']>;
  is_excluding_pay_roll?: Maybe<Scalars['Boolean']['output']>;
  is_use_new_salary?: Maybe<Scalars['Boolean']['output']>;
  joining_date?: Maybe<Scalars['DateTime']['output']>;
  line_manager?: Maybe<User>;
  new_salary_effect_from?: Maybe<Scalars['DateTime']['output']>;
  over_time_hours?: Maybe<Scalars['Int']['output']>;
  over_time_rate?: Maybe<Scalars['Float']['output']>;
  pay_schedule?: Maybe<PayrollSchedule>;
  pay_type?: Maybe<Scalars['String']['output']>;
  public_day_hourly_salary?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Array<Maybe<Region>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  salary_type?: Maybe<Scalars['String']['output']>;
  shift?: Maybe<Shift>;
  starting_date?: Maybe<Scalars['DateTime']['output']>;
  storeAccess?: Maybe<Array<Maybe<StoreAccessType>>>;
  total_week_hours?: Maybe<Scalars['Int']['output']>;
  weekend_day_salary?: Maybe<Scalars['String']['output']>;
  weekly_hourly_salary?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export enum ProductAttributeTypes {
  Brand = 'brand',
  Capacity = 'capacity',
  Carrier = 'carrier',
  Category = 'category',
  Color = 'color'
}

export type ProductAttributes = {
  __typename?: 'ProductAttributes';
  brand?: Maybe<Array<Maybe<SystemBrand>>>;
  capacity?: Maybe<Array<Maybe<Capacity>>>;
  carrier?: Maybe<Array<Maybe<Carrier>>>;
  category?: Maybe<Array<Maybe<Category>>>;
  color?: Maybe<Array<Maybe<Color>>>;
};

export type ProductCategoryType = {
  __typename?: 'ProductCategoryType';
  _id?: Maybe<Scalars['ID']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  category_tax?: Maybe<Scalars['Float']['output']>;
  category_tax_key?: Maybe<Scalars['String']['output']>;
  category_type?: Maybe<Scalars['String']['output']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  ProductCategory?: Maybe<ProductCategoryType>;
  approve_by?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  is_sub_type?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ProfitCategory = {
  __typename?: 'ProfitCategory';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Category?: Maybe<ProductType>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  markup?: Maybe<Scalars['Float']['output']>;
  updated_by?: Maybe<User>;
};

export type PtoMinutesType = {
  __typename?: 'PtoMinutesType';
  pto_availed_minutes?: Maybe<Scalars['Float']['output']>;
  pto_count_in?: Maybe<Scalars['String']['output']>;
  pto_earned_minutes?: Maybe<Scalars['Float']['output']>;
  pto_fixed_days?: Maybe<Scalars['Float']['output']>;
  pto_fixed_minutes?: Maybe<Scalars['Float']['output']>;
  pto_fixed_total_days?: Maybe<Scalars['Float']['output']>;
  pto_fixed_total_minutes?: Maybe<Scalars['Float']['output']>;
  pto_type?: Maybe<Scalars['String']['output']>;
};

export enum PtoValueIn {
  FixedHours = 'fixed_hours',
  WeekRatio = 'week_ratio'
}

export type PublicHoliday = {
  __typename?: 'PublicHoliday';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  from_date?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_recursive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['DateTime']['output']>;
};

export type PublicHolidayInput = {
  business_id: Scalars['ID']['input'];
  date: Array<InputMaybe<Scalars['DateTime']['input']>>;
  employee_id: Scalars['ID']['input'];
};

export type PurchasesReport = {
  __typename?: 'PurchasesReport';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type QrLogs = {
  __typename?: 'QRLogs';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  employee?: Maybe<User>;
  scanned_by?: Maybe<User>;
};

export type QrLogsInput = {
  employeeId: Scalars['ID']['input'];
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type QrLogsList = {
  __typename?: 'QRLogsList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<QrLogs>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  CommissionById?: Maybe<Commission>;
  Commissions?: Maybe<Array<Maybe<Commission>>>;
  addBusinessInDocumentShare?: Maybe<Scalars['Boolean']['output']>;
  businessLocationById?: Maybe<BusinessLocation>;
  businessPackageByBusinessId?: Maybe<BusinessPackage>;
  businessPermissions?: Maybe<Array<Maybe<Permission>>>;
  calculateUpdatePackageFee?: Maybe<Scalars['Float']['output']>;
  checkAbsentUsers?: Maybe<Scalars['Boolean']['output']>;
  checkAssetByAssetIdAndNumber?: Maybe<Scalars['Boolean']['output']>;
  checkEmployeeIsClockedIn?: Maybe<Scalars['Boolean']['output']>;
  checkQuizTrainingAssignmentStatusByIds?: Maybe<QuizTrainingAssignementListResult>;
  checkUnRestrictedPolicy?: Maybe<Scalars['Boolean']['output']>;
  commisionCampaignById?: Maybe<CommissionCampaign>;
  confirmEmployeeClockedHistory?: Maybe<ClockedHistory>;
  countries?: Maybe<Array<Maybe<Country>>>;
  customersByBusinessId?: Maybe<Array<Maybe<Customer>>>;
  customersByLocationId?: Maybe<Array<Maybe<Customer>>>;
  deleteInvoice?: Maybe<Scalars['Boolean']['output']>;
  deleteInvoiceItem?: Maybe<Scalars['Boolean']['output']>;
  employeeLoanAmount?: Maybe<EmployeeLoanAmountResult>;
  employeeSeparationList?: Maybe<EmployeeListingresult>;
  fetchQuizAssignmentById?: Maybe<AssignedQuiz>;
  filterQuizTrainingAssignement?: Maybe<Array<Maybe<FilterTrainingAssignementResult>>>;
  forgetBusinessUrl?: Maybe<Scalars['Boolean']['output']>;
  generateAssetId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  generateInvoiceId?: Maybe<Scalars['String']['output']>;
  getAccountTypeById?: Maybe<AccountType>;
  getActiveShifts?: Maybe<Array<Maybe<Shift>>>;
  getAdminDashboardData?: Maybe<GetAdminDashboardData>;
  getAdvanceFilterById?: Maybe<AdvanceFilter>;
  getAllAccessoriesWithSearch?: Maybe<AssetListingResult>;
  getAllAccountTypes?: Maybe<Array<Maybe<AccountType>>>;
  getAllActiveAndInActiveEmployees?: Maybe<Array<Maybe<User>>>;
  getAllActiveAppraisalType?: Maybe<Array<Maybe<AppraisalType>>>;
  getAllActiveBusiness?: Maybe<Array<Maybe<Business>>>;
  getAllActiveBusinessesLocationsByBusinessId?: Maybe<Array<Maybe<BusinessLocation>>>;
  getAllActiveEmployees?: Maybe<Array<Maybe<User>>>;
  getAllActiveEmployeesWithSearch?: Maybe<Array<Maybe<User>>>;
  getAllActiveInActiveEmployeesByDepartment?: Maybe<Array<Maybe<User>>>;
  getAllActivityDocuments?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  getAllAdvanceFilters?: Maybe<Array<Maybe<AdvanceFilter>>>;
  getAllAlerts?: Maybe<AlertListingResult>;
  getAllAllowances?: Maybe<Array<Maybe<Allowance>>>;
  getAllAppraisalObjective?: Maybe<AppraisalObjectiveResult>;
  getAllAppraisalScales?: Maybe<AppraisalScaleResult>;
  getAllAppraisalType?: Maybe<AppraisalResult>;
  getAllAssetBrand?: Maybe<Array<Maybe<AssetBrand>>>;
  getAllAssetBrandList?: Maybe<BrandList>;
  getAllAssetByCategoryId?: Maybe<Array<Maybe<Asset>>>;
  getAllAssetCategories: Array<AssetCategory>;
  getAllAssetCategoryAndSubCategory?: Maybe<CategoryListingResult>;
  getAllAssetModel?: Maybe<Array<Maybe<AssetModel>>>;
  getAllAssetSubCategories: Array<AssetSubCategory>;
  getAllAssetSubCategoryById?: Maybe<Array<Maybe<AssetSubCategory>>>;
  getAllAssetTypes?: Maybe<Array<Maybe<MasterDataValue>>>;
  getAllAssets?: Maybe<Array<Maybe<Asset>>>;
  getAllAssetsDispose?: Maybe<Array<Maybe<Asset>>>;
  getAllAssetsMaintenance?: Maybe<Array<Maybe<Asset>>>;
  getAllAssetsWithSearch?: Maybe<AssetsListingResult>;
  getAllAssigneeTasksWithSearch?: Maybe<Array<Maybe<TaskManagement>>>;
  getAllAttendance?: Maybe<AttendanceListingResult>;
  getAllBrands?: Maybe<BrandResult>;
  getAllBusinesseForFranchise?: Maybe<Array<Maybe<Business>>>;
  getAllCampaignsSearch?: Maybe<Array<Maybe<Campaign>>>;
  getAllCashRegistersHistory?: Maybe<CashRegistersHistoryListing>;
  getAllCategoryAndSubcategoryList?: Maybe<GetCategoriesList>;
  getAllCity?: Maybe<Array<Maybe<City>>>;
  getAllContractAndLicenseeWithSearch?: Maybe<ContractLicenseResult>;
  getAllContractsAndLicenses?: Maybe<Array<Maybe<ContractLicense>>>;
  getAllContractsAndLicensesLinkWithAssets?: Maybe<Asset>;
  getAllDepartments?: Maybe<Array<Maybe<Department>>>;
  getAllDesignationList?: Maybe<AllDesignationListingresult>;
  getAllDeviceIssues?: Maybe<Array<Maybe<ProductType>>>;
  getAllDeviceModel?: Maybe<DeviceModelResult>;
  getAllDeviceModelByBrand?: Maybe<Array<Maybe<DeviceModel>>>;
  getAllDeviceType?: Maybe<Array<Maybe<DeviceType>>>;
  getAllDiscountTags?: Maybe<Array<Maybe<Tags>>>;
  getAllDiscounts?: Maybe<DiscountListingResult>;
  getAllDiscountsWithSearch?: Maybe<CampaignsListingResultNew>;
  getAllDisposeWithSearch?: Maybe<GetDisposeList>;
  getAllDocumentsLinkWithAssets?: Maybe<Asset>;
  getAllEmployeeActions?: Maybe<Array<Maybe<UserHistory>>>;
  getAllEmployeeTypes?: Maybe<Array<Maybe<MasterDataValue>>>;
  getAllEmployeeswithjoingDate?: Maybe<Array<Maybe<User>>>;
  getAllEvaluation?: Maybe<AppraisalEvaluationResult>;
  getAllExpenseInvoice?: Maybe<Array<Maybe<GetExpenseInvoice>>>;
  getAllExpenseInvoiceCategory?: Maybe<Array<Maybe<ExpenseCategory>>>;
  getAllFinalSettlement?: Maybe<Array<Maybe<FinalSettlement>>>;
  getAllGoalsList?: Maybe<AppraisalEvaluationResult>;
  getAllGratuityList?: Maybe<Array<Maybe<Gratuity>>>;
  getAllGuarantor?: Maybe<Array<Maybe<User>>>;
  getAllInsurance?: Maybe<Array<Maybe<Insurance>>>;
  getAllInsuranceLinkWithAssets?: Maybe<Asset>;
  getAllInsuranceWithSearch?: Maybe<InsuranceListingResult>;
  getAllInvoiceItem?: Maybe<GetInvoiceItemType>;
  getAllInvoices?: Maybe<GetInvoiceList>;
  getAllLeaseWithSearch?: Maybe<LeaseListingResult>;
  getAllLeasingCustomer?: Maybe<Array<Maybe<LeasingCustomer>>>;
  getAllLeavePoliciesWithSearch?: Maybe<ResultOfLeavePolicy>;
  getAllLeavesType?: Maybe<Array<Maybe<LeaveType>>>;
  getAllLinkRelationalAsset?: Maybe<Asset>;
  getAllLinkedAssetBrandList?: Maybe<BrandList>;
  getAllMYAuthenticatorApps?: Maybe<AuthenticatorResult>;
  getAllMaintenanceLinkWithAssets?: Maybe<Array<Maybe<Maintenance>>>;
  getAllMaintenanceWithSearch?: Maybe<MaintenanceListingResult>;
  getAllMasterDataTypeValueById?: Maybe<MasterDataValue>;
  getAllMasterDataTypeValueByTypeId?: Maybe<Array<Maybe<MasterDataValue>>>;
  getAllMasterDataTypeValueWithSearch?: Maybe<DataTypeResult>;
  getAllMasterDataTypeWithSearch?: Maybe<Array<Maybe<MasterDataType>>>;
  getAllMedicalInsurance?: Maybe<Array<Maybe<MasterDataValue>>>;
  getAllMedicalInsurancePackageList?: Maybe<Array<Maybe<MedicalInsurancePackage>>>;
  getAllMoveLeavePolicy?: Maybe<Array<Maybe<LeavePolicy>>>;
  getAllMyRequestDocuments?: Maybe<AllDocumentListingResult>;
  getAllMyTasksWithSearch?: Maybe<AssigneeTaskListingResult>;
  getAllNavigationBusinessList?: Maybe<Array<Maybe<Business>>>;
  getAllNotifications?: Maybe<Array<Maybe<Notification>>>;
  getAllNotificationsWithFilters?: Maybe<NotificationListingResult>;
  getAllNotificationsWithPagination?: Maybe<NotificationListingResult>;
  getAllObjective?: Maybe<Array<Maybe<AppraisalObjecive>>>;
  getAllObjectiveAssignment?: Maybe<ObjectiveAssignmentResult>;
  getAllPackages?: Maybe<PackageListingResult>;
  getAllPayrollDetailList?: Maybe<Array<Maybe<PayrollDetail>>>;
  getAllPayrollSchedule?: Maybe<Array<Maybe<PayrollSchedule>>>;
  getAllPayrollScheduleList?: Maybe<PayrollScheduleListingResult>;
  getAllPayrollStructureList?: Maybe<Array<Maybe<PayrollStructure>>>;
  getAllPayrollStructureListWithSearch?: Maybe<PayrollStructureListingResult>;
  getAllPayrolleList?: Maybe<Array<Maybe<Payroll>>>;
  getAllPermissionOfNotifications?: Maybe<Array<Maybe<NotificationModuleAndPermission>>>;
  getAllPlaidCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getAllProductCategories?: Maybe<Array<Maybe<ProductCategoryType>>>;
  getAllQuickAssets?: Maybe<GetQuickAsset>;
  getAllQuizCategory?: Maybe<AllCategoriesList>;
  getAllRegions?: Maybe<Array<Maybe<Region>>>;
  getAllRepairPriceWithSearch?: Maybe<Array<Maybe<RepairPrice>>>;
  getAllRequestedDocuments?: Maybe<AllDocumentListingResult>;
  getAllReserve?: Maybe<ReserveAssetResult>;
  getAllReserveWithSearch?: Maybe<AssetListingResult>;
  getAllRostersByRosterStoreId?: Maybe<Array<Maybe<Roster>>>;
  getAllSendRequestDocuments?: Maybe<AllDocumentListingResult>;
  getAllServiceCategory?: Maybe<Array<Maybe<ServiceCategoryType>>>;
  getAllSetupAlertList?: Maybe<SetupAlert>;
  getAllShareOfApp?: Maybe<Array<Maybe<ShareAuthenticatorApp>>>;
  getAllShareOfDocument?: Maybe<AllShareDocumentResults>;
  getAllShareWithMeApps?: Maybe<ShareMeListDataTable>;
  getAllShiftsList?: Maybe<ShiftListingResult>;
  getAllShipTo?: Maybe<Array<Maybe<GetShipToType>>>;
  getAllState?: Maybe<Array<Maybe<State>>>;
  getAllStations?: Maybe<Array<Maybe<Station>>>;
  getAllSubscriptionLogActivity?: Maybe<LogActivityListingResult>;
  getAllSystemBrands?: Maybe<SystembrandResult>;
  getAllTasksWithSearch?: Maybe<AllTasksListingResult>;
  getAllTax?: Maybe<Array<Maybe<Tax>>>;
  getAllTerminalDevices?: Maybe<Array<Maybe<AddTerminalAppType>>>;
  getAllTimeOffByBusiness?: Maybe<Array<Maybe<TimeOff>>>;
  getAllUsersForSharedRecords?: Maybe<Array<Maybe<User>>>;
  getAllowanceById?: Maybe<Allowance>;
  getAllowanceWithFilters?: Maybe<AllowanceResult>;
  getAppVersion?: Maybe<Scalars['Boolean']['output']>;
  getAppVersions?: Maybe<Scalars['Boolean']['output']>;
  getAppraisalObejctiveByPerformanceCycle?: Maybe<Array<Maybe<AppraisalObjecive>>>;
  getAppraisalObjectiveByAppraisalType?: Maybe<Array<Maybe<AppraisalObjecive>>>;
  getAppraisalObjectiveById?: Maybe<AppraisalObjecive>;
  getAppraisalObjectiveByType?: Maybe<Array<Maybe<AppraisalObjecive>>>;
  getAppraisalScaleById?: Maybe<AppraisalScale>;
  getAppraisalTypeById?: Maybe<AppraisalType>;
  getApprovalWorkFlowById?: Maybe<ApprovalWorkFlow>;
  getApprovalWorkFlowWithSearch?: Maybe<ApprovalWorkFlowResult>;
  getArchivedDocuments?: Maybe<AllDocumentsResult>;
  getAssetAlertConfigurationByBusiness?: Maybe<AlertConfiguration>;
  getAssetBrandById?: Maybe<AssetBrandWithModel>;
  getAssetCategoryById?: Maybe<AssetCategory>;
  getAssetCount?: Maybe<AssetCountResult>;
  getAssetModelByBrand?: Maybe<Array<Maybe<AssetModel>>>;
  getAssetModelById?: Maybe<AssetModel>;
  getAssetSubCategoryById?: Maybe<AssetSubCategory>;
  getAssets?: Maybe<Array<Maybe<Asset>>>;
  getAssetsByBussinessId?: Maybe<AssetByBusinessResult>;
  getAssetsByDepartmentId?: Maybe<Array<Maybe<Asset>>>;
  getAssetsByEmployeeId?: Maybe<AssetByEmployeeResult>;
  getAssetsById?: Maybe<Asset>;
  getAssetsOfUser?: Maybe<AsssignAssetResult>;
  getAssetsStatusesCount?: Maybe<AssetCountAndAlerts>;
  getAssetsWithEmployeeHerierchy?: Maybe<PaginateAssetEmployees>;
  getAssignByMeTaskWithSearch?: Maybe<TaskListingResult>;
  getAssignToMeTaskWithSearch?: Maybe<TaskListingResult>;
  getAttemptQuizById?: Maybe<AssignedQuiz>;
  getAttendanceById?: Maybe<ClockedHistory>;
  getAttendanceList?: Maybe<AttendanceListExtendedresult>;
  getAttendanceListByEmployeeId?: Maybe<EmployeeClockHistory>;
  getAttendanceListWithStatus?: Maybe<AttendanceDataWithEmployees>;
  getAttendancePolicyByPayType?: Maybe<Array<Maybe<AttandencePolicy>>>;
  getAttendancePolicyGroups?: Maybe<Array<Maybe<AttandencePolicy>>>;
  getAttendanceRegulationApprovalsWithSearch?: Maybe<AttendanceResult>;
  getAttendanceRegulationById?: Maybe<AttendanceRegulation>;
  getAttendanceRegulationOfUser?: Maybe<Array<Maybe<AttendanceRegulation>>>;
  getAttendanceRegulationWithSearch?: Maybe<AttendanceResult>;
  getAuthenticatorAppById?: Maybe<Authenticator>;
  getAuthentictorsEmployees?: Maybe<AuthenticorResult>;
  getBrandById?: Maybe<Brand>;
  getBusinessByID?: Maybe<Business>;
  getBusinessByIdentificationNumber?: Maybe<Business>;
  getBusinessBySystemName?: Maybe<Business>;
  getBusinessBySystemNameWithValidation?: Maybe<BusinessWithOtp>;
  getBusinessByUserID?: Maybe<Business>;
  getBusinessLocationsByBusinessId?: Maybe<Array<Maybe<BusinessLocation>>>;
  getBusinessPackageDetail?: Maybe<BusinessPackage>;
  getBusinessPackages?: Maybe<Array<Maybe<Package>>>;
  getBusinessSubscriptions?: Maybe<SubscriptionDataTableList>;
  getBusinessedByType?: Maybe<Array<Maybe<Business>>>;
  getBusinesses?: Maybe<Array<Maybe<Business>>>;
  getBusinessesByType?: Maybe<Array<Maybe<Business>>>;
  getBusinessesLocations?: Maybe<Array<Maybe<BusinessLocation>>>;
  getBusinessesLocationsByRegionId?: Maybe<Array<Maybe<BusinessLocation>>>;
  getBusinessesWithFilter?: Maybe<BuinsesslistingResult>;
  getCampaignsAndSearch?: Maybe<CampaignsListingResult>;
  getCashRegisterById?: Maybe<CashRegisters>;
  getCashRegisterByLocation?: Maybe<Array<Maybe<CashRegisters>>>;
  getCashRegisterWithFilters?: Maybe<CashRegisterlistingResult>;
  getCategoryGiftCardList?: Maybe<GiftCardCategoryList>;
  getChartOfAccountById?: Maybe<ChartOfAccount>;
  getChartOfAccountList?: Maybe<ChartOfAccountsListingresult>;
  getChartOfAccountsByAccountType?: Maybe<Array<Maybe<ChartOfAccount>>>;
  getCityByStateId?: Maybe<Array<Maybe<City>>>;
  getCommisionCampaigns?: Maybe<Array<Maybe<CommissionCampaign>>>;
  getCommisionCampaignswithCommissions?: Maybe<CommisionCampaignList>;
  getCommissionAndSearch?: Maybe<Array<Maybe<Commission>>>;
  getCompansationLeaveType?: Maybe<LeaveType>;
  getConflictSchedule?: Maybe<Array<Maybe<ConflictSchedule>>>;
  getContractAndLicenseById?: Maybe<ContractLicense>;
  getContribution?: Maybe<Array<Maybe<Contribution>>>;
  getCookie?: Maybe<Scalars['String']['output']>;
  getCountAlerts?: Maybe<CountAlert>;
  getCouponCode?: Maybe<CouponCode>;
  getCreateCategroyGiftCardById?: Maybe<GiftCardCategory>;
  getCurrentDayRosterByEmployee?: Maybe<Schedule>;
  getCurrentDayScheduleByEmployee?: Maybe<Schedule>;
  getCurrentEmployeeAction?: Maybe<UserHistory>;
  getCurrentScheduleByEmployeeId?: Maybe<CurrendClockedInSchedule>;
  getCurretUserAllPermissions?: Maybe<Array<Maybe<Permission>>>;
  getCurretUserAllowedModules?: Maybe<Array<Maybe<Permission>>>;
  getCustomGradeScale?: Maybe<Array<Maybe<AppraisalScale>>>;
  getCustomersBysearch?: Maybe<Array<Maybe<Customer>>>;
  getCustomersTrasactions?: Maybe<Array<Maybe<Transaction>>>;
  getDataByFolder?: Maybe<Scalars['Boolean']['output']>;
  getDataWithZipcode?: Maybe<Array<Maybe<HierarchicalDetail>>>;
  getDeduction?: Maybe<Array<Maybe<Deduction>>>;
  getDelegantApproval?: Maybe<DelegantApproval>;
  getDepartmentById?: Maybe<Department>;
  getDepartmentsByLocationID?: Maybe<Array<Maybe<Department>>>;
  getDepartmentsByRoleId?: Maybe<Array<Maybe<Department>>>;
  getDepartmentsList?: Maybe<DepartmentListingresult>;
  getDesignationById?: Maybe<Designation>;
  getDesignationList?: Maybe<DesignationListingresult>;
  getDetailTypeByAccountId?: Maybe<DetailType>;
  getDeviceInfoById?: Maybe<TerminalAppHistoryResult>;
  getDeviceModel?: Maybe<Array<Maybe<DeviceModel>>>;
  getDeviceModelById?: Maybe<DeviceModel>;
  getDiscountByCode?: Maybe<Discount>;
  getDiscountById?: Maybe<Discount>;
  getDocumentById?: Maybe<DocumentControlAttachment>;
  getDocumentControlAttachmentsById?: Maybe<DocumentControlAttachment>;
  getDocumentControlAttachmentsFolder?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  getDocumentControlGroups?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  getDocumentListBySenderId?: Maybe<Array<Maybe<UnSignedList>>>;
  getDocumentListBySubscriptionId?: Maybe<Array<Maybe<UnSignedList>>>;
  getDocumentTypes?: Maybe<Array<Maybe<MasterDataValue>>>;
  getDocumentsByEmployeeId?: Maybe<AllDocumentsDataTableResult>;
  getDocumentsWithFilter?: Maybe<AllDocumentsResult>;
  getEffectDiscountToCustomer?: Maybe<ProgressBarData>;
  getEmailTemplateListWithSearch?: Maybe<EmailTemplateResult>;
  getEmailTemplete?: Maybe<EmailTemplate>;
  getEmployeeAttendance?: Maybe<AttendanceListingResult>;
  getEmployeeAttendanceByGroup?: Maybe<AttendanceByGroup>;
  getEmployeeByAssignRole?: Maybe<Array<Maybe<User>>>;
  getEmployeeByEmail?: Maybe<User>;
  getEmployeeByEmailLogin?: Maybe<User>;
  getEmployeeByID?: Maybe<User>;
  getEmployeeByRoleId?: Maybe<Array<Maybe<User>>>;
  getEmployeeByRoleIds?: Maybe<Array<Maybe<User>>>;
  getEmployeeCount?: Maybe<Array<Maybe<AttendanceEmployeeCount>>>;
  getEmployeeCustomPermissions?: Maybe<UserCustomPermissions>;
  getEmployeeDashboardViewById?: Maybe<EmployeeDashboardView>;
  getEmployeeEncryptionKeys?: Maybe<UserEncryptionKeys>;
  getEmployeeFirstSchedule?: Maybe<Schedule>;
  getEmployeeForMention?: Maybe<Array<Maybe<User>>>;
  getEmployeeGarnishmentById?: Maybe<EmployeeGarnishment>;
  getEmployeeGarnishmentList?: Maybe<EmployeeGarnishmentResult>;
  getEmployeeLastClockedInOrSeparation?: Maybe<ClockedInOrSepration>;
  getEmployeeLeaveByDateRange?: Maybe<Array<Maybe<EmployeeLeavebyDateRange>>>;
  getEmployeeListForSeparation?: Maybe<Array<Maybe<User>>>;
  getEmployeePaidUnpaidLeaves?: Maybe<EmployeePaidUnpaidLeaves>;
  getEmployeePendingRequests?: Maybe<PendingRequests>;
  getEmployeePermissionsByEmployeeId?: Maybe<Array<Maybe<PermissionRole>>>;
  getEmployeeReportingTeam?: Maybe<Array<Maybe<User>>>;
  getEmployeeRolePermissions?: Maybe<AllowPermissions>;
  getEmployeeSchedules?: Maybe<ScheduleListingResult>;
  getEmployeeSeparationById?: Maybe<EmployeeSeparation>;
  getEmployeeTimeLineHistory?: Maybe<HistoryListingResult>;
  getEmployeeTimeSheetList?: Maybe<Array<Maybe<EmployeesMonthlyTimeSheet>>>;
  getEmployeeTwoFAData?: Maybe<TwoFaOutput>;
  getEmployeeUnpaidWeekend?: Maybe<Array<Maybe<Weekend>>>;
  getEmployeeWeekend?: Maybe<Array<Maybe<Weekend>>>;
  getEmployeesAssetAssigned?: Maybe<EmpoyeesAssetAssignedResults>;
  getEmployeesAssetAssignedWithSearch?: Maybe<EmpoyeesAssetAssignedResult>;
  getEmployeesByDepartment?: Maybe<EmployeeListingResult>;
  getEmployeesByDepartmentWithoutLimits?: Maybe<Array<Maybe<User>>>;
  getEmployeesByDepartments?: Maybe<Array<Maybe<User>>>;
  getEmployeesByIdDutyRoster?: Maybe<RosterStores>;
  getEmployeesByLocationID?: Maybe<Array<Maybe<User>>>;
  getEmployeesByPayroleFilters?: Maybe<Array<Maybe<User>>>;
  getEmployeesByRole?: Maybe<Array<Maybe<User>>>;
  getEmployeesByRosterStore?: Maybe<RosterStores>;
  getEmployeesChatWithSearch?: Maybe<EmployeeListingResultNew>;
  getEmployeesDepartmentsByStore?: Maybe<EmployeesDepartmentsList>;
  getEmployeesForAssigningRole?: Maybe<Array<Maybe<User>>>;
  getEmployeesForAttendacePolicy?: Maybe<Array<Maybe<User>>>;
  getEmployeesForAttendancePolicy?: Maybe<Array<Maybe<User>>>;
  getEmployeesForFinalSettlement?: Maybe<Array<Maybe<EmployeeSeparation>>>;
  getEmployeesForLeavePolicy?: Maybe<Array<Maybe<User>>>;
  getEmployeesForLineManager?: Maybe<Array<Maybe<User>>>;
  getEmployeesScheduleExists?: Maybe<Array<Maybe<User>>>;
  getEmployeesUnderRole?: Maybe<Array<Maybe<User>>>;
  getEmployeesWithBirthday?: Maybe<Array<Maybe<User>>>;
  getEmployeesWithClockedHistory?: Maybe<EmployeeshClockedHistoryList>;
  getEmployeesWithPermisstionsByBusinessId?: Maybe<EmpoyeesPermissions>;
  getEmployeesWithRosters?: Maybe<EmployeesWithRostersList>;
  getEmployeesWithSchedule?: Maybe<ScheduleListingResultApp>;
  getEmployeesWithSearch?: Maybe<EmployeeListingResultNew>;
  getEncryptionCopyByUserId?: Maybe<Array<Maybe<UserEncryptionCopies>>>;
  getEvaluationById?: Maybe<AppraisalEvaluation>;
  getEvaluatorQuizAssignmentListWIthSearch?: Maybe<QuizEvaluatorResult>;
  getEvaluators?: Maybe<Array<Maybe<QuizEvaluatorList>>>;
  getExpenseApprovalsWithFilters?: Maybe<ExpnseResult>;
  getExpenseById?: Maybe<Expense>;
  getExpenseDetail?: Maybe<Scalars['Int']['output']>;
  getExpenseInvoiceAndCategoryListWithSearch?: Maybe<GetInvoiceExpenseAndCategoryList>;
  getExpenseInvoiceById?: Maybe<GetExpenseInvoice>;
  getExpenseInvoiceCategoryById?: Maybe<GetExpenseInvoiceCategory>;
  getExpenseInvoiceCategoryWithSearch?: Maybe<GetExpenseInvoiceCategoryList>;
  getExpenseInvoiceWithSearch?: Maybe<GetInvoiceExpenseList>;
  getExpenseRequestOfUser?: Maybe<Array<Maybe<Expense>>>;
  getExpenseRequestWithFilters?: Maybe<ExpnseResult>;
  getExpenseWithFilters?: Maybe<ExpnseResult>;
  getFilterByID?: Maybe<Filter>;
  getFinalSettlementById?: Maybe<FinalSettlement>;
  getFinalSettlementByUserId?: Maybe<FinalSettlement>;
  getFinalSettlementWithFilters?: Maybe<FinalSettlementResult>;
  getFoldersWithSearch?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  getFranchiseRequests?: Maybe<Array<Maybe<FranchiseRequest>>>;
  getGiftCardById?: Maybe<GiftCard>;
  getGiftCardBycardNo?: Maybe<GiftCard>;
  getGiftCardsWithSearch?: Maybe<GiftCardListingResult>;
  getGoalById?: Maybe<GetGoals>;
  getGoalList?: Maybe<GoalsListingresult>;
  getGoalsForExtendedView?: Maybe<Array<Maybe<AppraisalEvaluation>>>;
  getGratuityByID?: Maybe<Gratuity>;
  getGratuityPolicy?: Maybe<Gratuity>;
  getGroupedWagesDataForGraph?: Maybe<GrandTotalWagesGraph>;
  getHistoryById?: Maybe<UserHistory>;
  getInsuranceById?: Maybe<Insurance>;
  getInsurancewithemployeejoiningDate?: Maybe<Array<Maybe<MedicalInsurancePackage>>>;
  getInvoiceById?: Maybe<InvoicesList>;
  getInvoiceByItemId?: Maybe<InvoicesList>;
  getInvoiceItemById?: Maybe<InvoiceItemDetails>;
  getItemAsset?: Maybe<Array<Maybe<Asset>>>;
  getLeaseById?: Maybe<Lease>;
  getLeaveAfterLastWorkingDay?: Maybe<Array<Maybe<Schedule>>>;
  getLeavePolicyById?: Maybe<LeavePolicy>;
  getLeaveTypeById?: Maybe<LeaveType>;
  getLeaveTypeEmployeeById?: Maybe<ResultWrapper>;
  getLeavesTypeWithSearch?: Maybe<LeaveTypeListingResult>;
  getLinkToken?: Maybe<LinkToken>;
  getLinkedBusinesses?: Maybe<Array<Maybe<BusinessNavigation>>>;
  getLinkedBusinessesById?: Maybe<BusinessNavigation>;
  getLoanApprovalsWithFilters?: Maybe<LoanResult>;
  getLoanById?: Maybe<LoanPayment>;
  getLoanDetail?: Maybe<LoanDetail>;
  getLoanRequestOfUser?: Maybe<Array<Maybe<LoanPayment>>>;
  getLoanRequestWithFilters?: Maybe<LoanResult>;
  getLoanTransactionById?: Maybe<LoanTransaction>;
  getLoanTransactionsByLoanId?: Maybe<LoanTransactionResult>;
  getLoanWithFilters?: Maybe<LoanResult>;
  getLoggedInBusinessAllowedModule?: Maybe<Array<Maybe<Permission>>>;
  getLoggedInBusinessModulePermissions?: Maybe<ModulePermissions>;
  getLoggedInUserAllowModules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getLoggedInUserAllowModulesAndFeature?: Maybe<ModuleFeature>;
  getLoggedInUserAllowModulesAndFeatureWithName?: Maybe<ModuleFeature>;
  getLoggedInUserModulePermissions?: Maybe<ModulePermissions>;
  getLoginUserTasks?: Maybe<Array<Maybe<TaskManagement>>>;
  getLogsByTaskId?: Maybe<TaskTimeLogsById>;
  getMaapedPlaidCcategories?: Maybe<Array<Maybe<MappedPlaidCategories>>>;
  getMaintenanceById?: Maybe<Maintenance>;
  getMarginTiers?: Maybe<Array<Maybe<MarginTiers>>>;
  getMarkInvoiceItem?: Maybe<GetInvoiceItemList>;
  getMarkReason?: Maybe<Array<Maybe<Reason>>>;
  getMarkedAttendanceByDate?: Maybe<ClockedHistory>;
  getMasterDataValuesByDataValueName?: Maybe<Array<Maybe<MasterDataValue>>>;
  getMedicalInsuranceList?: Maybe<MedicalInsuranceConfig>;
  getMedicalInsurancePackageList?: Maybe<MedicalInsurancePackageConfig>;
  getMedicalInsurancePackageNewList?: Maybe<MedicalInsurancePackageConfig>;
  getMisPaunchOutEmployeeList?: Maybe<MissPaunchOutListingResult>;
  getModelsByBrandIds?: Maybe<Array<Maybe<SystemModel>>>;
  getModulesFeaturesAndPermissions?: Maybe<Modulefeatureandpermission>;
  getMostSoldProducts?: Maybe<Array<Maybe<Product>>>;
  getMyEvaluation?: Maybe<AppraisalEvaluationResult>;
  getMyQuizTraningListWithSearch?: Maybe<MyQuizTraningListingResult>;
  getMyTaskWithSearch?: Maybe<TaskListingResult>;
  getNotificationById?: Maybe<Notification>;
  getObjectiveAssignmentById?: Maybe<ObjectiveAssignments>;
  getOrgChartSettings?: Maybe<OrgChartSettings>;
  getOrganizationRoleHierarchy?: Maybe<Array<Maybe<RoleWithUser>>>;
  getOrganizationRolesHierarchy?: Maybe<Array<Maybe<Role>>>;
  getOrganizationUsersWithRoleHierarchy?: Maybe<Array<Maybe<RolesData>>>;
  getPacakgesForCustomSubscriptionRequest?: Maybe<Array<Maybe<Package>>>;
  getPackageAndBusinessPermission?: Maybe<PacakgeAndBusinessPermission>;
  getPackageById?: Maybe<PackageById>;
  getPaidUnPaidByID?: Maybe<PaidUnPaids>;
  getPasswordManagerAdmin?: Maybe<User>;
  getPasswordManagerAdmins?: Maybe<Array<Maybe<PasswordManagerAdmins>>>;
  getPaymentMethod?: Maybe<CardsDetail>;
  getPayrollByID?: Maybe<Payroll>;
  getPayrollDetail?: Maybe<PayrollDetail>;
  getPayrollDetailByID?: Maybe<PayrollDetail>;
  getPayrollDetailByUserID?: Maybe<PayrollDetail>;
  getPayrollScheduleByID?: Maybe<PayrollSchedule>;
  getPayrollStructureByID?: Maybe<PayrollStructure>;
  getPerformanceCycleById?: Maybe<PerformanceCycleType>;
  getPerformanceCycleList?: Maybe<PerformanceCycleResult>;
  getPlaidSyncTransactions?: Maybe<PlaidSyncTransactions>;
  getPlaidTransactions?: Maybe<PlaidTransactionsResult>;
  getPreviuseAccuralHistoryLogs?: Maybe<AccuralHistoryLogs>;
  getProdcutsByFilteration?: Maybe<Array<Maybe<Product>>>;
  getProductAttributes?: Maybe<ProductAttributes>;
  getProductTypes?: Maybe<Array<Maybe<ProductType>>>;
  getProductsByLocation?: Maybe<Array<Maybe<Product>>>;
  getProfitCategory?: Maybe<Array<Maybe<ProfitCategory>>>;
  getPublicHolidayOrWeekend?: Maybe<Array<Maybe<Schedule>>>;
  getPublicHolidaysByID?: Maybe<PublicHoliday>;
  getPublicHolidaysWithFilters?: Maybe<PublicHolidaysResult>;
  getPublicPackagesForFranchisee?: Maybe<Array<Maybe<Package>>>;
  getQRLogs?: Maybe<QrLogsList>;
  getQuizAssignmentById?: Maybe<AssignedQuiz>;
  getQuizAssignmentListWIthSearch?: Maybe<QuizAssignedListResult>;
  getQuizById?: Maybe<Quiz>;
  getQuizByIdForManualReAttemped?: Maybe<Quiz>;
  getQuizCategoryById?: Maybe<QuizCategoryDetails>;
  getQuizCategoryListWIthSearch?: Maybe<QuizCategoryListResult>;
  getQuizCategorySectionById?: Maybe<QuizCategorySectionType>;
  getQuizListWIthSearch?: Maybe<QuizListResult>;
  getQuizQuestionById?: Maybe<Question>;
  getQuizQuestionListWIthSearch?: Maybe<QuestionList>;
  getQuizReportById?: Maybe<AssignedQuizReport>;
  getQuizTrainingAssignementById?: Maybe<QuizTrainingAssignementListResult>;
  getQuizTrainingAssignmentListWIthSearch?: Maybe<QuizTrainingAssignmentListResult>;
  getQuizTrainingById?: Maybe<MyQuizTrainingLists>;
  getQuizTrainingReplicaById?: Maybe<QuizTrainingReplica>;
  getQuizTrainingReplicaListWIthSearch?: Maybe<QuizTrainingReplicaListResult>;
  getQuizTraningListWithSearch?: Maybe<QuizTraningListingResult>;
  getQuizesForTraining?: Maybe<QuizListResult>;
  getReasons?: Maybe<Array<Maybe<Reason>>>;
  getRecruitmentById?: Maybe<Recruitment>;
  getRecruitmentEmployeeByConfig?: Maybe<RecruitmentResult>;
  getRegionById?: Maybe<Region>;
  getRegionWithSearch?: Maybe<RegionListingResult>;
  getRemainingLeavesRequest?: Maybe<RemainingLeaves>;
  getRepairCategory?: Maybe<Array<Maybe<RepairCategory>>>;
  getRepairsServicesFilteration?: Maybe<Array<Maybe<ServicesPrice>>>;
  getReportObjectiveAssigment?: Maybe<ReportObjectiveAssignment1>;
  getReserveAssetColor?: Maybe<GetReserveAssetColor>;
  getReviewReportForUser?: Maybe<Array<Maybe<GetReviewReport>>>;
  getReviewcyclereport?: Maybe<AppraisalEvaluationResult>;
  getRoasterMinutes?: Maybe<RosterMinutesAndDate>;
  getRoasterWithScheduledDahboard?: Maybe<DashboardRostersWithAttendance>;
  getRole?: Maybe<RolePermission>;
  getRoleByBusinessId?: Maybe<Array<Maybe<Role>>>;
  getRoleDetail?: Maybe<Role>;
  getRoles?: Maybe<Array<Maybe<Role>>>;
  getRolesByBusinessId?: Maybe<Array<Maybe<Role>>>;
  getRolesByDepartmentId?: Maybe<Array<Maybe<Role>>>;
  getRolesByEmployees?: Maybe<Array<Maybe<Role>>>;
  getRolesByStore?: Maybe<Array<Maybe<Role>>>;
  getRolesOrganizationHierarchy?: Maybe<Array<Maybe<UserWithRolesHierarchy>>>;
  getRolesWithFilter?: Maybe<RolelistingResult>;
  getRosterByEmployeeID?: Maybe<Array<Maybe<Roster>>>;
  getRosterByID?: Maybe<Roster>;
  getRosterByUserId?: Maybe<Array<Maybe<UserRoster>>>;
  getRosterData?: Maybe<Array<Maybe<RosterData>>>;
  getRosterDepartmentData?: Maybe<Array<Maybe<DepartmentRosterData>>>;
  getRosterStores?: Maybe<Array<Maybe<RosterStores>>>;
  getRosterTemplates?: Maybe<Array<Maybe<RosterTemplate>>>;
  getRosterTimeOff?: Maybe<TimeOffListingRosterResult>;
  getRosterWithSearch?: Maybe<RosterListingResult>;
  getRosters?: Maybe<EmployeesRosters>;
  getRostersByEmployeeId?: Maybe<Array<Maybe<Roster>>>;
  getSaleGoalWithAdvanceFilter?: Maybe<Array<Maybe<Goals>>>;
  getSampleData?: Maybe<Array<Maybe<SampleData>>>;
  getSavedFilters?: Maybe<Array<Maybe<Filter>>>;
  getScheduleAlertData?: Maybe<Array<Maybe<AlertData>>>;
  getScheduleById?: Maybe<Schedule>;
  getScheduleGraph?: Maybe<ScheduleGraphData>;
  getScheduleLogs?: Maybe<Array<Maybe<ScheduleLogs>>>;
  getScheduleMinutes?: Maybe<ScheduleMinutesAndDate>;
  getScheduleTotalCounts?: Maybe<ScheduleCountsType>;
  getScheduleWithSearch?: Maybe<ScheduleListingResult>;
  getSchedulerConfig?: Maybe<SchedulerConfig>;
  getSchedulesBreaksByDateRange?: Maybe<Array<Maybe<ScheduleBreaks>>>;
  getSearchContribution?: Maybe<ContributionlistingResult>;
  getSearchDeduction?: Maybe<DeductionlistingResult>;
  getSearchedDiscountTags?: Maybe<Array<Maybe<Tags>>>;
  getSearchpaidUnPaid?: Maybe<PaidUnPaidlistingResult>;
  getSectionsByCategory?: Maybe<Array<Maybe<QuizCategorySection>>>;
  getServices?: Maybe<Array<Maybe<Service>>>;
  getSharedAuthenticatorAppById?: Maybe<ShareAuthenticatorApp>;
  getShifBreaks?: Maybe<Array<Maybe<MasterDataValue>>>;
  getShiftByID?: Maybe<Shift>;
  getShipToById?: Maybe<GetShipToType>;
  getShippingMethods?: Maybe<Array<Maybe<ShippingMethods>>>;
  getShippingMethodsById?: Maybe<ShippingMethods>;
  getSitesAssetAssigned?: Maybe<SitesAssetAssignedResults>;
  getSitesAssetAssignedWithSearch?: Maybe<SitesAssetAssignedResult>;
  getStateByCountryId?: Maybe<Array<Maybe<State>>>;
  getStationByDepartmentId?: Maybe<Array<Maybe<Station>>>;
  getStationtById?: Maybe<Station>;
  getStoreCustomFields?: Maybe<Array<Maybe<StoreCustomField>>>;
  getStoreDutyRoster?: Maybe<RosterStores>;
  getSubordinateEvaluation?: Maybe<AppraisalEvaluationResult>;
  getSubscriptionAttachments?: Maybe<AttachmentListingResult>;
  getSubscriptionAttachmentsFolder?: Maybe<Array<Maybe<Attachment>>>;
  getSubscriptionById?: Maybe<Subscription>;
  getSubscriptionByRequestedBusinessId?: Maybe<Subscription>;
  getSubscriptionLogActivityById?: Maybe<SubscriptionLogActivity>;
  getSubscriptionPaymentLogs?: Maybe<Array<Maybe<PackagePaymentLogs>>>;
  getSystemBrandById?: Maybe<SystemBrand>;
  getTaskById?: Maybe<TaskManagement_>;
  getTaskByTaskName?: Maybe<TaskManagement>;
  getTasksCount?: Maybe<TasksCountResult>;
  getTaxById?: Maybe<Tax>;
  getTaxWithSearch?: Maybe<TaxListingResult>;
  getTeamMembers?: Maybe<Array<Maybe<User>>>;
  getTechbarPublicPackagesForBusiness?: Maybe<Array<Maybe<Package>>>;
  getTerminalAppHistory?: Maybe<TerminalAppHistoryResult>;
  getTillCountLogsWithSearch?: Maybe<TillCountListing>;
  getTimeOffApprovalsWithSearch?: Maybe<TimeOffListingresult>;
  getTimeOffById?: Maybe<TimeOff>;
  getTimeOffList?: Maybe<TimeOffListingresult>;
  getTimeOffRequestList?: Maybe<TimeOffListingresult>;
  getTimeOffRequestUser?: Maybe<Array<Maybe<TimeOff>>>;
  getTimeSheetAttendanceGrandTotal?: Maybe<GrandTotalResult>;
  getTimeSheetAttendanceList?: Maybe<EmployeesClockHistory>;
  getTimeSheetAttendanceListByEmployee?: Maybe<EmployeeClockHistory>;
  getTimeSheetGrandTotal?: Maybe<GrandTotalResult>;
  getTimeSheetGraph?: Maybe<TimesheetGraph>;
  getTimeZone?: Maybe<Array<Maybe<TimeZone>>>;
  getTimesheetAnalytics?: Maybe<TimesheetAnalyticsResult>;
  getTimesheetStatusByDates?: Maybe<TimesheetStatus>;
  getTotalBusinessLocations?: Maybe<Scalars['Int']['output']>;
  getTotalCustomers?: Maybe<Scalars['Int']['output']>;
  getTotalEmployees?: Maybe<Scalars['Int']['output']>;
  getTotalEmployeesRostersWages?: Maybe<TotalEmployeesRostersWages>;
  getTotalPurchasesReport?: Maybe<Array<Maybe<PurchasesReport>>>;
  getTotalRevenue?: Maybe<Scalars['Float']['output']>;
  getTotalSalesByBusinessId?: Maybe<Array<Maybe<SalesReport1>>>;
  getTotalSalesReport?: Maybe<Array<Maybe<SalesReport>>>;
  getTotalSchedulers?: Maybe<Scalars['Int']['output']>;
  getUserActivities?: Maybe<UserActivityListingResult>;
  getUserAppDeviceById?: Maybe<UserAppDevice>;
  getUserAppDeviceCount?: Maybe<UserAppDeviceCount>;
  getUserAppDeviceList?: Maybe<UserAppDeviceList>;
  getUserAppDevices?: Maybe<Array<Maybe<UserAppDevice>>>;
  getUserByRolePermissions?: Maybe<Array<Maybe<User>>>;
  getUserConnectedAppList?: Maybe<UserAppDeviceList>;
  getUserDashboardView?: Maybe<Array<Maybe<EmployeeDashboardView>>>;
  getUserMonthlyTimeSheetStatus?: Maybe<Array<Maybe<UserMonthlyAttendaceStatus>>>;
  getUserRolesByFeature?: Maybe<Array<Maybe<Role>>>;
  getUserTimeSheetStatus?: Maybe<CountStatusCount>;
  getUserWithSummary?: Maybe<UserData>;
  getUserdashboard?: Maybe<UserDashbaord>;
  getUsersQuizAssignmentListWIthSearch?: Maybe<QuizUserListResult>;
  getUsersWithPasswordPermission?: Maybe<Array<Maybe<User>>>;
  getValidateDiscountByCode?: Maybe<ValidDiscount>;
  getVendor?: Maybe<Array<Maybe<Vendor>>>;
  getVendorByID?: Maybe<Vendor>;
  getWriteUpApprovalsWithFilters?: Maybe<WriteUpResult>;
  getWriteUpById?: Maybe<WriteUp>;
  getWriteups?: Maybe<WriteUpListDataTable>;
  getWriteupsByEmployeeId?: Maybe<WriteUpList>;
  getallActiveRoles?: Maybe<Array<Maybe<Role>>>;
  getattendancePolicyByID?: Maybe<AttandencePolicy>;
  getattendancePolicyWithFilter?: Maybe<Array<Maybe<AttandencePolicy>>>;
  getbusinessPermissionsbyBusinessID?: Maybe<BusinessPermissionsbytype>;
  getemailSMTPConfigrationById?: Maybe<EmailSmtpConfigration>;
  getemailSMTPConfigrationLisWIthSearch?: Maybe<EmailSmtpConfigrationResult>;
  getemployeeRecentFileView?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  previouseAccuralHistory?: Maybe<Array<Maybe<AccuralHistory>>>;
  publicHoliday?: Maybe<SandwichLeaveType>;
  resetAccural?: Maybe<Scalars['Boolean']['output']>;
  searchBusinessLocation?: Maybe<BuinsessLocationlistingResult>;
  searchCommisionCampaigns?: Maybe<Array<Maybe<CommissionCampaign>>>;
  searchInCommission?: Maybe<Array<Maybe<Commission>>>;
  sendEmailGiftCard?: Maybe<Scalars['Boolean']['output']>;
  setAccessToken?: Maybe<Scalars['Boolean']['output']>;
  startCronjob?: Maybe<Scalars['Boolean']['output']>;
  subTest?: Maybe<Scalars['Int']['output']>;
  totalRepairDevices?: Maybe<RepairDevices>;
  userBusinessLocations?: Maybe<Array<Maybe<BusinessLocation>>>;
  validateBusinessAddEmployeeRequest?: Maybe<Scalars['Float']['output']>;
  validateBusinessAddStoreRequest?: Maybe<Scalars['Float']['output']>;
  validateComissionCampaignName?: Maybe<Scalars['Boolean']['output']>;
  validateComissionName?: Maybe<Scalars['Boolean']['output']>;
  validateStoreAddEmployeeRequest?: Maybe<Scalars['Float']['output']>;
  verifyBusinessSystemName?: Maybe<Scalars['Boolean']['output']>;
  verifyEmployeeSchedule?: Maybe<Array<Maybe<User>>>;
};


export type QueryCommissionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommissionsArgs = {
  limit: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
};


export type QueryBusinessLocationByIdArgs = {
  businessLocationId: Scalars['ID']['input'];
};


export type QueryBusinessPackageByBusinessIdArgs = {
  businessId: Scalars['ID']['input'];
};


export type QueryCalculateUpdatePackageFeeArgs = {
  package: Scalars['ID']['input'];
  subscription: Scalars['ID']['input'];
};


export type QueryCheckAbsentUsersArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCheckAssetByAssetIdAndNumberArgs = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  serialNumber?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckEmployeeIsClockedInArgs = {
  employee_id: Scalars['ID']['input'];
};


export type QueryCheckQuizTrainingAssignmentStatusByIdsArgs = {
  quizId: Scalars['ID']['input'];
  quizTrainingReplicaId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryCheckUnRestrictedPolicyArgs = {
  attendance_date: Scalars['DateTime']['input'];
  employee_id: Scalars['ID']['input'];
};


export type QueryCommisionCampaignByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConfirmEmployeeClockedHistoryArgs = {
  input: ConfirmClockedHistory;
};


export type QueryCustomersByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryCustomersByLocationIdArgs = {
  business: Scalars['ID']['input'];
  businessLocation: Scalars['ID']['input'];
};


export type QueryDeleteInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDeleteInvoiceItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmployeeLoanAmountArgs = {
  employee: Scalars['ID']['input'];
};


export type QueryEmployeeSeparationListArgs = {
  input?: InputMaybe<EmployeeSeparationFilter>;
};


export type QueryFetchQuizAssignmentByIdArgs = {
  quizId: Scalars['ID']['input'];
  quizTrainingReplicaId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryFilterQuizTrainingAssignementArgs = {
  input?: InputMaybe<QuizTrainingAssignmentFilterInput>;
  trainingReplicaId: Scalars['ID']['input'];
};


export type QueryForgetBusinessUrlArgs = {
  input?: InputMaybe<ForgetBusinessInput>;
};


export type QueryGenerateAssetIdArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccountTypeByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAdminDashboardDataArgs = {
  input?: InputMaybe<InputadminDashboard>;
};


export type QueryGetAdvanceFilterByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAllAccessoriesWithSearchArgs = {
  input?: InputMaybe<AccessoriesListFilter>;
};


export type QueryGetAllActiveAndInActiveEmployeesArgs = {
  business_id: Scalars['ID']['input'];
  feature?: InputMaybe<FeatureEnum>;
};


export type QueryGetAllActiveAppraisalTypeArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllActiveBusinessesLocationsByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllActiveEmployeesArgs = {
  business_id: Scalars['ID']['input'];
  feature?: InputMaybe<FeatureEnum>;
};


export type QueryGetAllActiveEmployeesWithSearchArgs = {
  business_id: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllActiveInActiveEmployeesByDepartmentArgs = {
  filter?: InputMaybe<EmployeesByDepWithoutLimits>;
};


export type QueryGetAllAdvanceFiltersArgs = {
  type: Scalars['String']['input'];
};


export type QueryGetAllAlertsArgs = {
  input?: InputMaybe<AlertListFilter>;
};


export type QueryGetAllAppraisalObjectiveArgs = {
  input?: InputMaybe<InputAppraisalObjective>;
};


export type QueryGetAllAppraisalScalesArgs = {
  input?: InputMaybe<InputAppraisalScales>;
};


export type QueryGetAllAppraisalTypeArgs = {
  input?: InputMaybe<InputAllAppraisalType>;
};


export type QueryGetAllAssetBrandListArgs = {
  input?: InputMaybe<InputfilterAssetBrand>;
};


export type QueryGetAllAssetByCategoryIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAllAssetCategoryAndSubCategoryArgs = {
  input?: InputMaybe<CategoryListFilter>;
};


export type QueryGetAllAssetSubCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAllAssetTypesArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetAllAssetsWithSearchArgs = {
  input?: InputMaybe<AssetListFilter>;
};


export type QueryGetAllAssigneeTasksWithSearchArgs = {
  input: AllAssigneeTasksInput;
};


export type QueryGetAllAttendanceArgs = {
  input?: InputMaybe<AttendanceListFilters>;
};


export type QueryGetAllBrandsArgs = {
  input?: InputMaybe<ListFilter>;
};


export type QueryGetAllCampaignsSearchArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllCashRegistersHistoryArgs = {
  input: GetCashRegistersHistoryInput;
};


export type QueryGetAllCategoryAndSubcategoryListArgs = {
  input?: InputMaybe<CategoryListFilter>;
};


export type QueryGetAllCityArgs = {
  state_ids: Array<Scalars['ID']['input']>;
};


export type QueryGetAllContractAndLicenseeWithSearchArgs = {
  input?: InputMaybe<ContractLicenseFilter>;
};


export type QueryGetAllContractsAndLicensesLinkWithAssetsArgs = {
  assetId: Scalars['ID']['input'];
};


export type QueryGetAllDepartmentsArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllDesignationListArgs = {
  input?: InputMaybe<DesignationtListFilter>;
};


export type QueryGetAllDeviceModelArgs = {
  input?: InputMaybe<InputFilter>;
};


export type QueryGetAllDeviceModelByBrandArgs = {
  brandId?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetAllDiscountsArgs = {
  input?: InputMaybe<SearchDiscountInput>;
};


export type QueryGetAllDiscountsWithSearchArgs = {
  input?: InputMaybe<SearchDiscountNewInput>;
};


export type QueryGetAllDisposeWithSearchArgs = {
  input?: InputMaybe<DisposeListFilter>;
};


export type QueryGetAllDocumentsLinkWithAssetsArgs = {
  assetId: Scalars['ID']['input'];
};


export type QueryGetAllEmployeeActionsArgs = {
  input: EmployeeActionInput;
};


export type QueryGetAllEmployeeTypesArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetAllEmployeeswithjoingDateArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllEvaluationArgs = {
  input?: InputMaybe<InputAllEvaluation>;
};


export type QueryGetAllExpenseInvoiceArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllExpenseInvoiceCategoryArgs = {
  filter?: InputMaybe<ExpenseInvFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllFinalSettlementArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetAllGoalsListArgs = {
  input?: InputMaybe<InputAllEvaluation>;
};


export type QueryGetAllInsuranceLinkWithAssetsArgs = {
  assetId: Scalars['ID']['input'];
};


export type QueryGetAllInsuranceWithSearchArgs = {
  input?: InputMaybe<InsuranceListFilter>;
};


export type QueryGetAllInvoiceItemArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllInvoicesArgs = {
  input?: InputMaybe<InvoicesInput>;
};


export type QueryGetAllLeaseWithSearchArgs = {
  input?: InputMaybe<LeaseListFilter>;
};


export type QueryGetAllLeavePoliciesWithSearchArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllLinkRelationalAssetArgs = {
  assetId: Scalars['ID']['input'];
};


export type QueryGetAllLinkedAssetBrandListArgs = {
  input?: InputMaybe<InputfilterAssetBrand>;
};


export type QueryGetAllMyAuthenticatorAppsArgs = {
  input?: InputMaybe<GetAuthenticatorAppDataTableInput>;
};


export type QueryGetAllMaintenanceLinkWithAssetsArgs = {
  assetId: Scalars['ID']['input'];
};


export type QueryGetAllMaintenanceWithSearchArgs = {
  input?: InputMaybe<MaintenanceListFilter>;
};


export type QueryGetAllMasterDataTypeValueByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAllMasterDataTypeValueByTypeIdArgs = {
  input: DataValueInput;
};


export type QueryGetAllMasterDataTypeValueWithSearchArgs = {
  input: SearchDataTypeValueInput;
};


export type QueryGetAllMasterDataTypeWithSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMoveLeavePolicyArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMyRequestDocumentsArgs = {
  input: InputDocumentsWithFilter;
};


export type QueryGetAllMyTasksWithSearchArgs = {
  input: AllMyTasksInput;
};


export type QueryGetAllNotificationsArgs = {
  input?: InputMaybe<NotificationsInput>;
};


export type QueryGetAllNotificationsWithFiltersArgs = {
  input?: InputMaybe<NotificationFilterInput>;
};


export type QueryGetAllNotificationsWithPaginationArgs = {
  input?: InputMaybe<NotificationsInput>;
};


export type QueryGetAllObjectiveAssignmentArgs = {
  input?: InputMaybe<InputAllobjectiveAssignment>;
};


export type QueryGetAllPackagesArgs = {
  input?: InputMaybe<PackageListFilter>;
};


export type QueryGetAllPayrollScheduleListArgs = {
  input?: InputMaybe<PayrollScheduleListInput>;
};


export type QueryGetAllPayrollStructureListWithSearchArgs = {
  input?: InputMaybe<PayrollStructureListInput>;
};


export type QueryGetAllPayrolleListArgs = {
  is_dispersed?: InputMaybe<Scalars['Boolean']['input']>;
  pay_period: PayrollPayPeriodEnum;
};


export type QueryGetAllQuickAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllQuizCategoryArgs = {
  input?: InputMaybe<AllCategories>;
};


export type QueryGetAllRegionsArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllRepairPriceWithSearchArgs = {
  input?: InputMaybe<InputRepairPriceWithSearch>;
};


export type QueryGetAllRequestedDocumentsArgs = {
  input: InputDocumentsWithFilter;
};


export type QueryGetAllReserveArgs = {
  input?: InputMaybe<ReserveAssetFilter>;
};


export type QueryGetAllReserveWithSearchArgs = {
  input?: InputMaybe<ReserveListFilter>;
};


export type QueryGetAllRostersByRosterStoreIdArgs = {
  roster_store_id: Scalars['ID']['input'];
};


export type QueryGetAllSendRequestDocumentsArgs = {
  input: InputDocumentsWithFilter;
};


export type QueryGetAllShareOfAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAllShareOfDocumentArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryGetAllShareWithMeAppsArgs = {
  input?: InputMaybe<GetAuthenticatorAppInput>;
};


export type QueryGetAllShiftsListArgs = {
  input?: InputMaybe<ShiftListInput>;
};


export type QueryGetAllShipToArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllStationsArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllSubscriptionLogActivityArgs = {
  input?: InputMaybe<LogActivity>;
};


export type QueryGetAllSystemBrandsArgs = {
  Business: Scalars['ID']['input'];
  BusinessLocation: Scalars['ID']['input'];
  input?: InputMaybe<ListFilter>;
};


export type QueryGetAllTasksWithSearchArgs = {
  input: AllTasksInput;
};


export type QueryGetAllTaxArgs = {
  input?: InputMaybe<InputGetAllTaxes>;
};


export type QueryGetAllTimeOffByBusinessArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAllUsersForSharedRecordsArgs = {
  appId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetAllowanceByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetAllowanceWithFiltersArgs = {
  input?: InputMaybe<AllowanceFilter>;
};


export type QueryGetAppVersionArgs = {
  input: AppVersionInput;
};


export type QueryGetAppVersionsArgs = {
  input: AppVersionInput;
};


export type QueryGetAppraisalObejctiveByPerformanceCycleArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAppraisalObjectiveByAppraisalTypeArgs = {
  apprailsaTypeId: Scalars['ID']['input'];
};


export type QueryGetAppraisalObjectiveByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAppraisalObjectiveByTypeArgs = {
  PerformanceCycleId: Scalars['ID']['input'];
};


export type QueryGetAppraisalScaleByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAppraisalTypeByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetApprovalWorkFlowByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetApprovalWorkFlowWithSearchArgs = {
  input?: InputMaybe<WorkFlowListFilter>;
};


export type QueryGetArchivedDocumentsArgs = {
  input?: InputMaybe<ArchivedDocumentInput>;
};


export type QueryGetAssetBrandByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAssetCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAssetCountArgs = {
  input?: InputMaybe<DashboardAssetCount>;
};


export type QueryGetAssetModelByBrandArgs = {
  assetBrand: Scalars['ID']['input'];
};


export type QueryGetAssetModelByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAssetSubCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAssetsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetAssetsByBussinessIdArgs = {
  input?: InputMaybe<InputAssetByBusiness>;
};


export type QueryGetAssetsByDepartmentIdArgs = {
  department_id: Scalars['ID']['input'];
  type: AssetTypeEnum;
};


export type QueryGetAssetsByEmployeeIdArgs = {
  input?: InputMaybe<InputAssetByEmployee>;
};


export type QueryGetAssetsByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAssetsWithEmployeeHerierchyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAssignByMeTaskWithSearchArgs = {
  input?: InputMaybe<TaskWithSearchInput>;
};


export type QueryGetAssignToMeTaskWithSearchArgs = {
  input?: InputMaybe<TaskWithSearchInput>;
};


export type QueryGetAttemptQuizByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAttendanceByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAttendanceListArgs = {
  input?: InputMaybe<AttendanceListFilter>;
};


export type QueryGetAttendanceListByEmployeeIdArgs = {
  input: InputTimeSheetEmployeeId;
};


export type QueryGetAttendanceListWithStatusArgs = {
  input?: InputMaybe<AttendanceListWithStatus>;
};


export type QueryGetAttendancePolicyByPayTypeArgs = {
  pay_type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAttendancePolicyGroupsArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetAttendanceRegulationApprovalsWithSearchArgs = {
  input?: InputMaybe<AttendanceFilter>;
};


export type QueryGetAttendanceRegulationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAttendanceRegulationOfUserArgs = {
  input?: InputMaybe<InputAttendceRequest>;
};


export type QueryGetAttendanceRegulationWithSearchArgs = {
  input?: InputMaybe<AttendanceFilter>;
};


export type QueryGetAuthenticatorAppByIdArgs = {
  Id: Scalars['ID']['input'];
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetBusinessByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetBusinessByIdentificationNumberArgs = {
  identificationNumber?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBusinessBySystemNameArgs = {
  systemName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBusinessBySystemNameWithValidationArgs = {
  systemName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBusinessByUserIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetBusinessLocationsByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetBusinessPackageDetailArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBusinessPackagesArgs = {
  business: Scalars['ID']['input'];
  package_type?: InputMaybe<PackageType>;
};


export type QueryGetBusinessSubscriptionsArgs = {
  input?: InputMaybe<SubscriptionListFilter>;
};


export type QueryGetBusinessedByTypeArgs = {
  type?: InputMaybe<AllowBusinessType>;
};


export type QueryGetBusinessesByTypeArgs = {
  business_types: Array<Scalars['String']['input']>;
};


export type QueryGetBusinessesLocationsArgs = {
  business_ids: Array<Scalars['ID']['input']>;
};


export type QueryGetBusinessesLocationsByRegionIdArgs = {
  region_id: Scalars['ID']['input'];
};


export type QueryGetBusinessesWithFilterArgs = {
  input?: InputMaybe<BusinessListFilter>;
};


export type QueryGetCampaignsAndSearchArgs = {
  input?: InputMaybe<SearchCampaignInput>;
};


export type QueryGetCashRegisterByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCashRegisterByLocationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetCashRegisterWithFiltersArgs = {
  input?: InputMaybe<CashRegisterListFilter>;
};


export type QueryGetCategoryGiftCardListArgs = {
  input?: InputMaybe<GiftCardCategoryListFilter>;
};


export type QueryGetChartOfAccountByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetChartOfAccountListArgs = {
  input: ChartOfAccountsListFilter;
};


export type QueryGetChartOfAccountsByAccountTypeArgs = {
  account_type: Scalars['ID']['input'];
};


export type QueryGetCityByStateIdArgs = {
  state_id: Scalars['ID']['input'];
};


export type QueryGetCommisionCampaignsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCommisionCampaignswithCommissionsArgs = {
  input?: InputMaybe<CommissioinCampaignSearchInput>;
};


export type QueryGetCommissionAndSearchArgs = {
  input?: InputMaybe<SearchCommissionInput>;
};


export type QueryGetCompansationLeaveTypeArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetConflictScheduleArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetContractAndLicenseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetContributionArgs = {
  input?: InputMaybe<GetContributionFilter>;
};


export type QueryGetCreateCategroyGiftCardByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCurrentDayRosterByEmployeeArgs = {
  date: Scalars['Date']['input'];
  employeeId: Scalars['ID']['input'];
};


export type QueryGetCurrentDayScheduleByEmployeeArgs = {
  date: Scalars['Date']['input'];
  employeeId: Scalars['ID']['input'];
};


export type QueryGetCurrentEmployeeActionArgs = {
  employee_id: Scalars['ID']['input'];
};


export type QueryGetCurrentScheduleByEmployeeIdArgs = {
  badge_code: Scalars['String']['input'];
};


export type QueryGetCustomersBysearchArgs = {
  input?: InputMaybe<CustomerInput>;
};


export type QueryGetCustomersTrasactionsArgs = {
  input?: InputMaybe<CustomerTransactionInput>;
};


export type QueryGetDataByFolderArgs = {
  folderName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetDataWithZipcodeArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
  zipcode: Scalars['String']['input'];
};


export type QueryGetDeductionArgs = {
  input?: InputMaybe<GetDeductionFilter>;
};


export type QueryGetDelegantApprovalArgs = {
  approval_type: Scalars['String']['input'];
};


export type QueryGetDepartmentByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetDepartmentsByLocationIdArgs = {
  business_id: Scalars['ID']['input'];
  location_id: Scalars['ID']['input'];
};


export type QueryGetDepartmentsByRoleIdArgs = {
  role_id: Scalars['ID']['input'];
};


export type QueryGetDepartmentsListArgs = {
  input?: InputMaybe<DepartmentListFilter>;
};


export type QueryGetDesignationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetDesignationListArgs = {
  input?: InputMaybe<DesignationtListFilter>;
};


export type QueryGetDetailTypeByAccountIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetDeviceInfoByIdArgs = {
  input?: InputMaybe<InputDeviceInfoById>;
};


export type QueryGetDeviceModelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetDiscountByCodeArgs = {
  code: Scalars['ID']['input'];
};


export type QueryGetDiscountByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDocumentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDocumentControlAttachmentsByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDocumentListBySenderIdArgs = {
  singerId: Scalars['ID']['input'];
  subId: Scalars['ID']['input'];
};


export type QueryGetDocumentListBySubscriptionIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDocumentsByEmployeeIdArgs = {
  input?: InputMaybe<InputEmployeeDocuments>;
};


export type QueryGetDocumentsWithFilterArgs = {
  input: InputWithFilter;
};


export type QueryGetEffectDiscountToCustomerArgs = {
  input?: InputMaybe<ProgressBarInput>;
};


export type QueryGetEmailTemplateListWithSearchArgs = {
  input?: InputMaybe<InputEmailTemplateList>;
};


export type QueryGetEmailTempleteArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetEmployeeAttendanceArgs = {
  input?: InputMaybe<AttendanceInput>;
};


export type QueryGetEmployeeAttendanceByGroupArgs = {
  input?: InputMaybe<GroupEmployeeInput>;
};


export type QueryGetEmployeeByAssignRoleArgs = {
  role: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeeByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetEmployeeByEmailLoginArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetEmployeeByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetEmployeeByRoleIdArgs = {
  roles_id: Scalars['ID']['input'];
};


export type QueryGetEmployeeByRoleIdsArgs = {
  roles_ids: Array<Scalars['ID']['input']>;
};


export type QueryGetEmployeeCountArgs = {
  department_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  roles_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeeCustomPermissionsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEmployeeDashboardViewByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEmployeeEncryptionKeysArgs = {
  employeeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEmployeeFirstScheduleArgs = {
  employeeId: Scalars['ID']['input'];
};


export type QueryGetEmployeeForMentionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEmployeeGarnishmentByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetEmployeeGarnishmentListArgs = {
  input?: InputMaybe<InputemployeeGarnishmentList>;
};


export type QueryGetEmployeeLastClockedInOrSeparationArgs = {
  clockedHistory?: InputMaybe<Scalars['Boolean']['input']>;
  user_id: Scalars['ID']['input'];
};


export type QueryGetEmployeeLeaveByDateRangeArgs = {
  input?: InputMaybe<EmployeeLeaveInput>;
};


export type QueryGetEmployeeListForSeparationArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeePaidUnpaidLeavesArgs = {
  employeeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEmployeePendingRequestsArgs = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  employeeID: Scalars['ID']['input'];
};


export type QueryGetEmployeePermissionsByEmployeeIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEmployeeReportingTeamArgs = {
  business_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};


export type QueryGetEmployeeRolePermissionsArgs = {
  role?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEmployeeSchedulesArgs = {
  input: GetScheduleByEmployeeIdInput;
};


export type QueryGetEmployeeSeparationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetEmployeeTimeLineHistoryArgs = {
  input?: InputMaybe<HistoryListFilter>;
};


export type QueryGetEmployeeTimeSheetListArgs = {
  input?: InputMaybe<EmployeeTimeSheetInput>;
};


export type QueryGetEmployeeTwoFaDataArgs = {
  input: TwoFaInput;
};


export type QueryGetEmployeeUnpaidWeekendArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetEmployeeWeekendArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetEmployeesAssetAssignedArgs = {
  input: EmployeesSitesInput;
};


export type QueryGetEmployeesAssetAssignedWithSearchArgs = {
  input: EmployeesAssetInput;
};


export type QueryGetEmployeesByDepartmentArgs = {
  filter?: InputMaybe<EmployessByDepartment>;
};


export type QueryGetEmployeesByDepartmentWithoutLimitsArgs = {
  filter?: InputMaybe<EmployeesByDepWithoutLimits>;
};


export type QueryGetEmployeesByDepartmentsArgs = {
  input?: InputMaybe<EmployeeFilterInput>;
};


export type QueryGetEmployeesByIdDutyRosterArgs = {
  input?: InputMaybe<SearchRosterInput>;
};


export type QueryGetEmployeesByLocationIdArgs = {
  business_id: Scalars['ID']['input'];
  location_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEmployeesByPayroleFiltersArgs = {
  BusinessLocation: Array<InputMaybe<Scalars['ID']['input']>>;
  RoleIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  departmentsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  payType?: InputMaybe<Scalars['String']['input']>;
  payschedule?: InputMaybe<Scalars['String']['input']>;
  salarytype?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeesByRoleArgs = {
  roles_id: Scalars['ID']['input'];
};


export type QueryGetEmployeesByRosterStoreArgs = {
  _id: Scalars['ID']['input'];
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEmployeesChatWithSearchArgs = {
  input?: InputMaybe<EmployeeListFilter>;
};


export type QueryGetEmployeesDepartmentsByStoreArgs = {
  input: EmployeesDepartmentsFilter;
};


export type QueryGetEmployeesForAssigningRoleArgs = {
  roleId: Scalars['ID']['input'];
};


export type QueryGetEmployeesForAttendacePolicyArgs = {
  input?: InputMaybe<EmployeesForPolicy>;
};


export type QueryGetEmployeesForLeavePolicyArgs = {
  args?: InputMaybe<GetLeavePolicyArguments>;
};


export type QueryGetEmployeesScheduleExistsArgs = {
  input: EmployeesScheduleExists;
};


export type QueryGetEmployeesWithBirthdayArgs = {
  type: FilterEnum;
};


export type QueryGetEmployeesWithClockedHistoryArgs = {
  input?: InputMaybe<EmployeesWithClockedHistoryInput>;
};


export type QueryGetEmployeesWithPermisstionsByBusinessIdArgs = {
  input: EmployeesByBusiness;
};


export type QueryGetEmployeesWithRostersArgs = {
  input: GetRosterWithFilter;
};


export type QueryGetEmployeesWithScheduleArgs = {
  input?: InputMaybe<ScheduleListFilterApp>;
};


export type QueryGetEmployeesWithSearchArgs = {
  input?: InputMaybe<EmployeeListFilter>;
};


export type QueryGetEncryptionCopyByUserIdArgs = {
  input: GetEncryptionCopyInput;
};


export type QueryGetEvaluationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetEvaluatorQuizAssignmentListWIthSearchArgs = {
  input?: InputMaybe<QuizAssignedListInput>;
};


export type QueryGetEvaluatorsArgs = {
  input?: InputMaybe<EvaluatorInputs>;
};


export type QueryGetExpenseApprovalsWithFiltersArgs = {
  input?: InputMaybe<ExpenseRequestFilter>;
};


export type QueryGetExpenseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExpenseDetailArgs = {
  employee: Scalars['ID']['input'];
};


export type QueryGetExpenseInvoiceAndCategoryListWithSearchArgs = {
  input?: InputMaybe<ExpenseInvoiceCategoryInput>;
};


export type QueryGetExpenseInvoiceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExpenseInvoiceCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExpenseInvoiceCategoryWithSearchArgs = {
  input?: InputMaybe<ExpenseInvoiceCategoryInput>;
};


export type QueryGetExpenseInvoiceWithSearchArgs = {
  input?: InputMaybe<ExpenseInvoiceInput>;
};


export type QueryGetExpenseRequestOfUserArgs = {
  input?: InputMaybe<InputExpenseRequestUser>;
};


export type QueryGetExpenseRequestWithFiltersArgs = {
  input?: InputMaybe<ExpenseFilter>;
};


export type QueryGetExpenseWithFiltersArgs = {
  input?: InputMaybe<ExpenseFilter>;
};


export type QueryGetFilterByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFinalSettlementByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetFinalSettlementByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetFinalSettlementWithFiltersArgs = {
  input: FinalSettlementFilter;
};


export type QueryGetFoldersWithSearchArgs = {
  parent?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DocumentTypeEnums>;
};


export type QueryGetFranchiseRequestsArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetGiftCardByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetGiftCardBycardNoArgs = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  card_no: Scalars['String']['input'];
};


export type QueryGetGiftCardsWithSearchArgs = {
  input: GiftCardListFilter;
};


export type QueryGetGoalByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetGoalListArgs = {
  input?: InputMaybe<GoalsListFilter>;
};


export type QueryGetGoalsForExtendedViewArgs = {
  performanceCycleId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetGratuityByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetGratuityPolicyArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetGroupedWagesDataForGraphArgs = {
  input: InputTimeSheet;
};


export type QueryGetHistoryByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetInsuranceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetInsurancewithemployeejoiningDateArgs = {
  input?: InputMaybe<Joiningdateinput>;
};


export type QueryGetInvoiceByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetInvoiceByItemIdArgs = {
  itemId: Scalars['ID']['input'];
};


export type QueryGetInvoiceItemByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetItemAssetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetLeaseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLeaveAfterLastWorkingDayArgs = {
  input?: InputMaybe<GetLeaveAfterLastWorkingDayInput>;
};


export type QueryGetLeavePolicyByIdArgs = {
  _id: Scalars['ID']['input'];
  employee?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLeaveTypeByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLeaveTypeEmployeeByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLeavesTypeWithSearchArgs = {
  input?: InputMaybe<LeaveTypeListFilter>;
};


export type QueryGetLinkedBusinessesArgs = {
  input?: InputMaybe<GetLinkedBusinessInput>;
};


export type QueryGetLinkedBusinessesByIdArgs = {
  business_navigation_id: Scalars['ID']['input'];
};


export type QueryGetLoanApprovalsWithFiltersArgs = {
  input?: InputMaybe<LoanRequestFilter>;
};


export type QueryGetLoanByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLoanDetailArgs = {
  employee: Scalars['ID']['input'];
};


export type QueryGetLoanRequestOfUserArgs = {
  input?: InputMaybe<InputLoanRequestUser>;
};


export type QueryGetLoanRequestWithFiltersArgs = {
  input?: InputMaybe<LoanFilter>;
};


export type QueryGetLoanTransactionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLoanTransactionsByLoanIdArgs = {
  input?: InputMaybe<LoanTransactionFilter>;
};


export type QueryGetLoanWithFiltersArgs = {
  input?: InputMaybe<LoanFilter>;
};


export type QueryGetLoggedInBusinessModulePermissionsArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetLoggedInUserAllowModulesAndFeatureWithNameArgs = {
  module?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryGetLoggedInUserModulePermissionsArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetLoginUserTasksArgs = {
  input?: InputMaybe<UserFilterTasks>;
};


export type QueryGetLogsByTaskIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMaintenanceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMarginTiersArgs = {
  input?: InputMaybe<InputMarginTiersSearch>;
};


export type QueryGetMarkInvoiceItemArgs = {
  input?: InputMaybe<GetMarkInvoiceItems>;
};


export type QueryGetMarkReasonArgs = {
  input?: InputMaybe<InputSearchMarkReason>;
};


export type QueryGetMarkedAttendanceByDateArgs = {
  attandance_data: Scalars['String']['input'];
  employee_id: Scalars['ID']['input'];
};


export type QueryGetMasterDataValuesByDataValueNameArgs = {
  data_type_name: Scalars['String']['input'];
};


export type QueryGetMedicalInsuranceListArgs = {
  input?: InputMaybe<MedicalInsuranceListFilter>;
};


export type QueryGetMedicalInsurancePackageListArgs = {
  input?: InputMaybe<MedicalInsuranceListFilter>;
};


export type QueryGetMedicalInsurancePackageNewListArgs = {
  input?: InputMaybe<MedicalInsuranceListFilter>;
};


export type QueryGetMisPaunchOutEmployeeListArgs = {
  input?: InputMaybe<MissPaunchOut>;
};


export type QueryGetModelsByBrandIdsArgs = {
  brandIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryGetMostSoldProductsArgs = {
  filter: SoldInput;
};


export type QueryGetMyEvaluationArgs = {
  input?: InputMaybe<InputAllEvaluation>;
};


export type QueryGetMyQuizTraningListWithSearchArgs = {
  input?: InputMaybe<QuizTraningListInput>;
};


export type QueryGetMyTaskWithSearchArgs = {
  input?: InputMaybe<TaskWithSearchInput>;
};


export type QueryGetNotificationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetObjectiveAssignmentByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetOrgChartSettingsArgs = {
  businessId: Scalars['ID']['input'];
};


export type QueryGetOrganizationRoleHierarchyArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetOrganizationRolesHierarchyArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetOrganizationUsersWithRoleHierarchyArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetPacakgesForCustomSubscriptionRequestArgs = {
  subscription: Scalars['ID']['input'];
};


export type QueryGetPackageAndBusinessPermissionArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPackageByIdArgs = {
  package_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPaidUnPaidByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPasswordManagerAdminsArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPaymentMethodArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetPayrollByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetPayrollDetailArgs = {
  payroll_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};


export type QueryGetPayrollDetailByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPayrollDetailByUserIdArgs = {
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPayrollScheduleByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetPayrollStructureByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetPerformanceCycleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPerformanceCycleListArgs = {
  input?: InputMaybe<InputPerformanceCycleType>;
};


export type QueryGetPlaidTransactionsArgs = {
  input?: InputMaybe<PaidTransactionFilter>;
};


export type QueryGetPreviuseAccuralHistoryLogsArgs = {
  leave_Packeg_id?: InputMaybe<Scalars['ID']['input']>;
  searchYear?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProdcutsByFilterationArgs = {
  BusinessLocation: Scalars['ID']['input'];
  brandIds: Array<InputMaybe<Scalars['ID']['input']>>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deviceTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  modelIds: Array<InputMaybe<Scalars['ID']['input']>>;
  productTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetProductTypesArgs = {
  input?: InputMaybe<InputOfTypes>;
};


export type QueryGetProductsByLocationArgs = {
  locationId: Scalars['ID']['input'];
};


export type QueryGetProfitCategoryArgs = {
  input?: InputMaybe<InputProfitCategoryWithSearch>;
};


export type QueryGetPublicHolidayOrWeekendArgs = {
  input?: InputMaybe<PublicHolidayOrWeekendSchedule>;
};


export type QueryGetPublicHolidaysByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPublicHolidaysWithFiltersArgs = {
  input?: InputMaybe<PublicHolidaysFilter>;
};


export type QueryGetPublicPackagesForFranchiseeArgs = {
  business_id: Scalars['ID']['input'];
  store_type?: InputMaybe<StoreTypeEnum>;
};


export type QueryGetQrLogsArgs = {
  input: QrLogsInput;
};


export type QueryGetQuizAssignmentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizAssignmentListWIthSearchArgs = {
  input?: InputMaybe<QuizAssignedListInput>;
};


export type QueryGetQuizByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizByIdForManualReAttempedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizCategoryListWIthSearchArgs = {
  input?: InputMaybe<QuizCategoryListInput>;
};


export type QueryGetQuizCategorySectionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizListWIthSearchArgs = {
  input?: InputMaybe<QuizListInput>;
};


export type QueryGetQuizQuestionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizQuestionListWIthSearchArgs = {
  input?: InputMaybe<QuizQuestionListInput>;
};


export type QueryGetQuizReportByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizTrainingAssignementByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizTrainingAssignmentListWIthSearchArgs = {
  input?: InputMaybe<QuizTraningAssignementUserListInput>;
};


export type QueryGetQuizTrainingByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizTrainingReplicaByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetQuizTrainingReplicaListWIthSearchArgs = {
  input?: InputMaybe<QuizTrainingReplicaListInput>;
};


export type QueryGetQuizTraningListWithSearchArgs = {
  input?: InputMaybe<QuizTraningListInput>;
};


export type QueryGetQuizesForTrainingArgs = {
  input?: InputMaybe<QuizListInput>;
};


export type QueryGetReasonsArgs = {
  reason_type?: InputMaybe<ReasonType>;
};


export type QueryGetRecruitmentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetRecruitmentEmployeeByConfigArgs = {
  input?: InputMaybe<InputRecruitment>;
};


export type QueryGetRegionByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetRegionWithSearchArgs = {
  input?: InputMaybe<RegionInput>;
};


export type QueryGetRepairsServicesFilterationArgs = {
  BusinessLocation: Scalars['ID']['input'];
  brandIds: Array<InputMaybe<Scalars['ID']['input']>>;
  modelIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryGetReportObjectiveAssigmentArgs = {
  input?: InputMaybe<InputGetReportObjective>;
};


export type QueryGetReviewcyclereportArgs = {
  input?: InputMaybe<InputReviewcyclereport>;
};


export type QueryGetRoasterMinutesArgs = {
  input?: InputMaybe<RoasterMinutesInput>;
};


export type QueryGetRoasterWithScheduledDahboardArgs = {
  input: DashboardEmplyeCountToday;
};


export type QueryGetRoleArgs = {
  roleID: Scalars['ID']['input'];
};


export type QueryGetRoleByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetRoleDetailArgs = {
  roleID: Scalars['ID']['input'];
};


export type QueryGetRolesArgs = {
  roleFilter: RoleFilter;
};


export type QueryGetRolesByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetRolesByDepartmentIdArgs = {
  department_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetRolesByEmployeesArgs = {
  search: Scalars['String']['input'];
};


export type QueryGetRolesByStoreArgs = {
  location_id: Scalars['ID']['input'];
};


export type QueryGetRolesOrganizationHierarchyArgs = {
  busniss: Scalars['ID']['input'];
};


export type QueryGetRolesWithFilterArgs = {
  input: RoleListingFilter;
};


export type QueryGetRosterByEmployeeIdArgs = {
  employeeId: Scalars['ID']['input'];
};


export type QueryGetRosterByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetRosterByUserIdArgs = {
  employeeId: Scalars['ID']['input'];
};


export type QueryGetRosterDataArgs = {
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  rosterStore: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRosterDepartmentDataArgs = {
  rosterStore: Scalars['ID']['input'];
};


export type QueryGetRosterStoresArgs = {
  businessId: Scalars['ID']['input'];
};


export type QueryGetRosterTemplatesArgs = {
  roster_store_id: Scalars['ID']['input'];
};


export type QueryGetRosterTimeOffArgs = {
  input: TimeOffListInput;
};


export type QueryGetRosterWithSearchArgs = {
  input?: InputMaybe<RosterListFilter>;
};


export type QueryGetRostersArgs = {
  input: RostersInput;
};


export type QueryGetRostersByEmployeeIdArgs = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};


export type QueryGetSaleGoalWithAdvanceFilterArgs = {
  input?: InputMaybe<SaleGoalAdvanceSearchInput>;
};


export type QueryGetSavedFiltersArgs = {
  type: FilterTypeEnum;
};


export type QueryGetScheduleAlertDataArgs = {
  input?: InputMaybe<RoasterMinutesInput>;
};


export type QueryGetScheduleByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetScheduleGraphArgs = {
  input?: InputMaybe<InputScheduleGraph>;
};


export type QueryGetScheduleLogsArgs = {
  scheduleId: Scalars['ID']['input'];
};


export type QueryGetScheduleMinutesArgs = {
  input: ScheduleMinutesInput;
};


export type QueryGetScheduleTotalCountsArgs = {
  input?: InputMaybe<ScheduleCountFilter>;
};


export type QueryGetScheduleWithSearchArgs = {
  input?: InputMaybe<ScheduleListFilter>;
};


export type QueryGetSchedulerConfigArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetSchedulesBreaksByDateRangeArgs = {
  end_date?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
};


export type QueryGetSearchContributionArgs = {
  input?: InputMaybe<ContributionListFilter>;
};


export type QueryGetSearchDeductionArgs = {
  input?: InputMaybe<DeductionListFilter>;
};


export type QueryGetSearchedDiscountTagsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSearchpaidUnPaidArgs = {
  input?: InputMaybe<PaidUnPaidListFilter>;
};


export type QueryGetSectionsByCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSharedAuthenticatorAppByIdArgs = {
  Id: Scalars['ID']['input'];
};


export type QueryGetShifBreaksArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetShiftByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetShipToByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShippingMethodsArgs = {
  input?: InputMaybe<InputGetShippingWithSearch>;
};


export type QueryGetShippingMethodsByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetSitesAssetAssignedArgs = {
  input: EmployeesSitesInput;
};


export type QueryGetSitesAssetAssignedWithSearchArgs = {
  input: SearchSitesInput;
};


export type QueryGetStateByCountryIdArgs = {
  country_id: Scalars['ID']['input'];
};


export type QueryGetStationByDepartmentIdArgs = {
  department: Scalars['ID']['input'];
};


export type QueryGetStationtByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetStoreCustomFieldsArgs = {
  customFieldType: CustomFieldTypeEnum;
  location_id: Scalars['ID']['input'];
};


export type QueryGetStoreDutyRosterArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetSubordinateEvaluationArgs = {
  input?: InputMaybe<InputAllEvaluation>;
};


export type QueryGetSubscriptionAttachmentsArgs = {
  input?: InputMaybe<InputAttachment>;
};


export type QueryGetSubscriptionAttachmentsFolderArgs = {
  subscription: Scalars['ID']['input'];
};


export type QueryGetSubscriptionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSubscriptionByRequestedBusinessIdArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSubscriptionLogActivityByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSubscriptionPaymentLogsArgs = {
  subscription: Scalars['ID']['input'];
};


export type QueryGetSystemBrandByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTaskByTaskNameArgs = {
  task_name: Scalars['String']['input'];
};


export type QueryGetTasksCountArgs = {
  input?: InputMaybe<TaskCountInput>;
};


export type QueryGetTaxByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTaxWithSearchArgs = {
  filter: TaxFilterInput;
};


export type QueryGetTeamMembersArgs = {
  businessLocaion?: InputMaybe<Scalars['ID']['input']>;
  employee_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetTechbarPublicPackagesForBusinessArgs = {
  business_type?: InputMaybe<AllowBusinessType>;
};


export type QueryGetTerminalAppHistoryArgs = {
  input?: InputMaybe<InputTerminalAppHistory>;
};


export type QueryGetTillCountLogsWithSearchArgs = {
  input: GetTillCountInput;
};


export type QueryGetTimeOffApprovalsWithSearchArgs = {
  input?: InputMaybe<TimeOffListFilter>;
};


export type QueryGetTimeOffByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetTimeOffListArgs = {
  input?: InputMaybe<TimeOffListFilter>;
};


export type QueryGetTimeOffRequestListArgs = {
  input?: InputMaybe<TimeOffListFilter>;
};


export type QueryGetTimeOffRequestUserArgs = {
  input?: InputMaybe<InputTimeOffRequestUser>;
};


export type QueryGetTimeSheetAttendanceGrandTotalArgs = {
  input: InputTimeSheet;
};


export type QueryGetTimeSheetAttendanceListArgs = {
  input?: InputMaybe<InputTimeSheet>;
};


export type QueryGetTimeSheetAttendanceListByEmployeeArgs = {
  input?: InputMaybe<InputTimeSheetEmployee>;
};


export type QueryGetTimeSheetGrandTotalArgs = {
  input: InputGrandTotal;
};


export type QueryGetTimeSheetGraphArgs = {
  input?: InputMaybe<GetTimeSheetGraph>;
};


export type QueryGetTimesheetAnalyticsArgs = {
  input: TimesheetStatusInput;
};


export type QueryGetTimesheetStatusByDatesArgs = {
  input: TimesheetStatusInput;
};


export type QueryGetTotalBusinessLocationsArgs = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetTotalCustomersArgs = {
  input?: InputMaybe<BusinessStoreInput>;
};


export type QueryGetTotalEmployeesArgs = {
  input?: InputMaybe<BusinessStoreInput>;
};


export type QueryGetTotalEmployeesRostersWagesArgs = {
  input: EmployeesRostertsInput;
};


export type QueryGetTotalPurchasesReportArgs = {
  filter: FilterInput;
  from_date?: InputMaybe<Scalars['Date']['input']>;
  to_date?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetTotalRevenueArgs = {
  input?: InputMaybe<BusinessStoreInput>;
};


export type QueryGetTotalSalesByBusinessIdArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetTotalSalesReportArgs = {
  filter: FilterInput;
  from_date?: InputMaybe<Scalars['Date']['input']>;
  to_date?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetTotalSchedulersArgs = {
  business: Scalars['ID']['input'];
};


export type QueryGetUserActivitiesArgs = {
  input: EmployeeActivityFilter;
};


export type QueryGetUserAppDeviceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserAppDeviceListArgs = {
  input: QueryInputUserAppDevice;
};


export type QueryGetUserAppDevicesArgs = {
  app_type: AppTypes;
};


export type QueryGetUserByRolePermissionsArgs = {
  featureName: Scalars['String']['input'];
};


export type QueryGetUserConnectedAppListArgs = {
  input: QueryInputTerminalAppDevice;
};


export type QueryGetUserMonthlyTimeSheetStatusArgs = {
  input?: InputMaybe<InputUserMonthly>;
};


export type QueryGetUserRolesByFeatureArgs = {
  feature: FeatureEnum;
};


export type QueryGetUserTimeSheetStatusArgs = {
  input?: InputMaybe<InpuUserTimeSheetStatus>;
};


export type QueryGetUserWithSummaryArgs = {
  LoginAs?: InputMaybe<LoginAs>;
  appType?: InputMaybe<Application_Type>;
  clocked_time: Scalars['DateTime']['input'];
  deviceId?: InputMaybe<Scalars['String']['input']>;
  time_zone: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type QueryGetUserdashboardArgs = {
  input?: InputMaybe<UserDashboardInput>;
};


export type QueryGetUsersQuizAssignmentListWIthSearchArgs = {
  input?: InputMaybe<QuizUserListInput>;
};


export type QueryGetUsersWithPasswordPermissionArgs = {
  business_id: Scalars['ID']['input'];
};


export type QueryGetValidateDiscountByCodeArgs = {
  input: ValidateDiscountInput;
};


export type QueryGetVendorArgs = {
  input?: InputMaybe<InputGetVendorWithSearch>;
};


export type QueryGetVendorByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetWriteUpApprovalsWithFiltersArgs = {
  input?: InputMaybe<WriteUpRequestFilter>;
};


export type QueryGetWriteUpByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetWriteupsArgs = {
  input?: InputMaybe<WriteUpListFilter>;
};


export type QueryGetWriteupsByEmployeeIdArgs = {
  input?: InputMaybe<WriteUpByEmployee>;
};


export type QueryGetattendancePolicyByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetattendancePolicyWithFilterArgs = {
  input?: InputMaybe<AttandencePolicyListFilter>;
};


export type QueryGetbusinessPermissionsbyBusinessIdArgs = {
  business?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetemailSmtpConfigrationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetemailSmtpConfigrationLisWIthSearchArgs = {
  input?: InputMaybe<EmailSmtpConfigrationList>;
};


export type QueryPreviouseAccuralHistoryArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPublicHolidayArgs = {
  input: PublicHolidayInput;
};


export type QuerySearchBusinessLocationArgs = {
  input?: InputMaybe<BusinessLocationListFilter>;
};


export type QuerySearchCommisionCampaignsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchInCommissionArgs = {
  limit: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Int']['input'];
  status?: InputMaybe<_Status>;
};


export type QuerySendEmailGiftCardArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySetAccessTokenArgs = {
  public_token: Array<Scalars['String']['input']>;
};


export type QueryTotalRepairDevicesArgs = {
  location_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryValidateBusinessAddEmployeeRequestArgs = {
  business: Scalars['ID']['input'];
  employeeID?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryValidateBusinessAddStoreRequestArgs = {
  business: Scalars['ID']['input'];
  locationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryValidateComissionCampaignNameArgs = {
  business_id: Scalars['ID']['input'];
  campaignName: Scalars['String']['input'];
};


export type QueryValidateComissionNameArgs = {
  BusinessLocation: Scalars['ID']['input'];
  commissionCampaignId: Scalars['ID']['input'];
  commission_name: Scalars['String']['input'];
};


export type QueryValidateStoreAddEmployeeRequestArgs = {
  business: Scalars['ID']['input'];
  businessLocation: Scalars['ID']['input'];
};


export type QueryVerifyBusinessSystemNameArgs = {
  business_system_name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVerifyEmployeeScheduleArgs = {
  input: EmployeeScheduleInput;
};

export type Question = {
  __typename?: 'Question';
  QuizCategory?: Maybe<QuizCategory>;
  QuizCategorySection?: Maybe<QuizCategorySection>;
  attachment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  correct_answer?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_required?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<OptionObject>>>;
  question_text?: Maybe<Scalars['String']['output']>;
  question_type?: Maybe<Scalars['String']['output']>;
  quiz_count?: Maybe<Scalars['Int']['output']>;
};

export type QuestionAnswer = {
  __typename?: 'QuestionAnswer';
  QuizQuestion?: Maybe<AssignedQuestion>;
  isCorrect?: Maybe<Scalars['Boolean']['output']>;
  pointsEarned?: Maybe<Scalars['Float']['output']>;
  selectedAnswer?: Maybe<Scalars['String']['output']>;
};

export type QuestionAttemptInput = {
  question?: InputMaybe<Scalars['ID']['input']>;
  selected_answer?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreated = {
  __typename?: 'QuestionCreated';
  QuizCategory?: Maybe<Scalars['ID']['output']>;
  QuizCategorySection?: Maybe<Scalars['ID']['output']>;
  attachment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  correct_answer?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_required?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<OptionObject>>>;
  question_text?: Maybe<Scalars['String']['output']>;
  question_type?: Maybe<Scalars['String']['output']>;
  quiz_count?: Maybe<Scalars['Int']['output']>;
};

export type QuestionList = {
  __typename?: 'QuestionList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Question>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type QuestionListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QuestionListResult = {
  __typename?: 'QuestionListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Quiz>>>;
};

export type QuestionSection = {
  limit: Scalars['Int']['input'];
  question_section: Scalars['ID']['input'];
};

export type QuestionSectionInput = {
  QuizCategorySection: Scalars['ID']['input'];
  QuizQuestion?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_random: Scalars['Boolean']['input'];
  limit: Scalars['Int']['input'];
};

export type QuestionSectionType = {
  __typename?: 'QuestionSectionType';
  QuizCategorySection?: Maybe<QuizCategorySection>;
  QuizQuestion?: Maybe<Array<Maybe<Question>>>;
  is_random?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
};

export type QuestionWithOutCorrectAnswer = {
  __typename?: 'QuestionWithOutCorrectAnswer';
  QuizCategory?: Maybe<QuizCategory>;
  QuizCategorySection?: Maybe<QuizCategorySection>;
  attachment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_required?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<OptionObject>>>;
  question_text?: Maybe<Scalars['String']['output']>;
  question_type?: Maybe<Scalars['String']['output']>;
  quiz_count?: Maybe<Scalars['Int']['output']>;
};

export type Question_AnswerTypeReport = {
  __typename?: 'Question_answerTypeReport';
  QuizQuestion?: Maybe<Question>;
  is_correct?: Maybe<Scalars['Boolean']['output']>;
  points_earned?: Maybe<Scalars['Float']['output']>;
  selected_answer?: Maybe<Scalars['String']['output']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  Department?: Maybe<Array<Maybe<Department>>>;
  Role?: Maybe<Array<Maybe<Role>>>;
  assignTo?: Maybe<Array<Maybe<User>>>;
  can_assign_traning?: Maybe<Scalars['Boolean']['output']>;
  can_re_attempts?: Maybe<Scalars['String']['output']>;
  candidates?: Maybe<Scalars['Int']['output']>;
  category_sections?: Maybe<Array<Maybe<CategorySectionType>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Date']['output']>;
  evaluate_by?: Maybe<Array<Maybe<User>>>;
  evaluator_department?: Maybe<Array<Maybe<Department>>>;
  evaluator_role?: Maybe<Array<Maybe<Role>>>;
  grade?: Maybe<Array<Maybe<GradeType>>>;
  id?: Maybe<Scalars['ID']['output']>;
  is_attempt_one_by_one?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_random?: Maybe<Scalars['Boolean']['output']>;
  is_shuffling?: Maybe<Scalars['Boolean']['output']>;
  max_attempts?: Maybe<Scalars['Int']['output']>;
  passing_marks?: Maybe<Scalars['Float']['output']>;
  question_count?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type QuizCategory = {
  __typename?: 'QuizCategory';
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Scalars['Int']['output']>;
};

export type QuizCategoryDetails = {
  __typename?: 'QuizCategoryDetails';
  created_at?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Scalars['Int']['output']>;
  sections?: Maybe<Array<Maybe<QuizCategorySection>>>;
};

export type QuizCategorySection = {
  __typename?: 'QuizCategorySection';
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  question_count?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

export type QuizCategorySectionType = {
  __typename?: 'QuizCategorySectionType';
  QuizCategory?: Maybe<QuizCategory>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

export type QuizEvaluatorList = {
  __typename?: 'QuizEvaluatorList';
  Business?: Maybe<Scalars['ID']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
};

export type QuizQuestionListInput = {
  Category?: InputMaybe<Scalars['ID']['input']>;
  Section?: InputMaybe<Scalars['ID']['input']>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QuizTrainingAssignementListResult = {
  __typename?: 'QuizTrainingAssignementListResult';
  Department?: Maybe<Array<Maybe<Department>>>;
  Quiz?: Maybe<Quiz>;
  QuizTrainingReplica?: Maybe<QuizTrainingReplica>;
  Role?: Maybe<Array<Maybe<Role>>>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  created_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  training_end_time?: Maybe<Scalars['DateTime']['output']>;
  training_start_time?: Maybe<Scalars['DateTime']['output']>;
};

export type QuizTrainingAssignmentFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TrainingAssignStatus>;
};

export type QuizTrainingAttachment = {
  __typename?: 'QuizTrainingAttachment';
  _id?: Maybe<Scalars['ID']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type QuizTrainingDepartment = {
  __typename?: 'QuizTrainingDepartment';
  Department: Department;
  assigned_to_user?: Maybe<Array<QuizTrainingUserStatus>>;
  ended_at?: Maybe<Scalars['Date']['output']>;
  started_at?: Maybe<Scalars['Date']['output']>;
};

export type QuizTrainingReplica = {
  __typename?: 'QuizTrainingReplica';
  Department?: Maybe<Array<Maybe<Department>>>;
  Quiz?: Maybe<Quiz>;
  Role?: Maybe<Array<Maybe<Role>>>;
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  candidates?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  evaluate_by?: Maybe<Array<Maybe<User>>>;
  global_status?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  started_date?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type QuizTrainingRole = {
  __typename?: 'QuizTrainingRole';
  Role: Role;
  assigned_to_user?: Maybe<Array<QuizTrainingUserStatus>>;
  ended_at?: Maybe<Scalars['Date']['output']>;
  started_at?: Maybe<Scalars['Date']['output']>;
};

export type QuizTrainingUser = {
  __typename?: 'QuizTrainingUser';
  assigned_to_user?: Maybe<Array<Maybe<QuizTrainingUserStatus>>>;
  ended_at?: Maybe<Scalars['Date']['output']>;
  started_at?: Maybe<Scalars['Date']['output']>;
};

export type QuizTrainingUserStatus = {
  __typename?: 'QuizTrainingUserStatus';
  User: User;
  completed_date?: Maybe<Scalars['Date']['output']>;
  status: Scalars['String']['output'];
};

export type QuizTraningAssignementUserListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QuizTraningListingResult = {
  __typename?: 'QuizTraningListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<QuizTrainingListing>>>;
};

export type QuizUserListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QuizUserListResult = {
  __typename?: 'QuizUserListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AssignedUserQuiz>>>;
};

export type Range = {
  end?: InputMaybe<Scalars['Float']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type RangeType = {
  __typename?: 'RangeType';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Reason = {
  __typename?: 'Reason';
  _id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  reason_name?: Maybe<Scalars['String']['output']>;
  reason_type?: Maybe<Scalars['String']['output']>;
};

export enum RecoveryMethod {
  Cash = 'cash',
  LumpSum = 'lump_sum',
  Salary = 'salary'
}

export type Recruitment = {
  __typename?: 'Recruitment';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  offer_letter?: Maybe<OfferLetter>;
  personal_details?: Maybe<PersonalDetails>;
  status?: Maybe<Scalars['String']['output']>;
  term_and_salary?: Maybe<TermAndSalary>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type RecruitmentInput = {
  Business: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  offer_letter?: InputMaybe<OfferLetterInput>;
  personal_details?: InputMaybe<PersonalDetailsInput>;
  section: RecruitmentInputSections;
  status?: InputMaybe<RecruitmentStatusEnum>;
  term_and_salary?: InputMaybe<TermAndSalaryInput>;
};

export enum RecruitmentInputSections {
  OfferLetter = 'offer_letter',
  PersonalDetails = 'personal_details',
  TermAndSalary = 'term_and_salary'
}

export type Region = {
  __typename?: 'Region';
  BusinessLocation?: Maybe<Array<Maybe<BusinessLocation>>>;
  City?: Maybe<Array<Maybe<City>>>;
  Country?: Maybe<Country>;
  State?: Maybe<Array<Maybe<State>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  region_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type RemainingLeaves = {
  __typename?: 'RemainingLeaves';
  remainingLeaves?: Maybe<Scalars['String']['output']>;
};

export type RepairCategory = {
  __typename?: 'RepairCategory';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type RepairDevices = {
  __typename?: 'RepairDevices';
  devices?: Maybe<Scalars['Int']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type RepairPrice = {
  __typename?: 'RepairPrice';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  DeviceIssue?: Maybe<Array<Maybe<ProductType>>>;
  DeviceModel?: Maybe<DeviceModel>;
  Service?: Maybe<Service>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  minimum_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  repair_label?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<User>;
};

export type ResultWrapper = {
  __typename?: 'ResultWrapper';
  UserLeave?: Maybe<Array<Maybe<LeaveTypeEmployeeById>>>;
  is_hourly_employee_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_manual_deduction?: Maybe<Scalars['Boolean']['output']>;
  is_salary_employee_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_short_leave_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_week_hour_limit?: Maybe<Scalars['Boolean']['output']>;
  leaveTypeEmployee?: Maybe<Array<Maybe<LeaveTypeEmployeeById>>>;
  manual_deduction_value?: Maybe<Scalars['Float']['output']>;
  ptoMinutes?: Maybe<Pto_MinutesType>;
  publicHolidaySandwich?: Maybe<Scalars['Boolean']['output']>;
  salary_type?: Maybe<Scalars['String']['output']>;
  sandwich?: Maybe<Scalars['Boolean']['output']>;
  total_week_hours?: Maybe<Scalars['Float']['output']>;
  working_days?: Maybe<Scalars['Float']['output']>;
};

export type RoasterMinutesInput = {
  employee_id: Scalars['ID']['input'];
  leave_dates?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  leave_type?: InputMaybe<Scalars['ID']['input']>;
};

export type Role = {
  __typename?: 'Role';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  assigned_users?: Maybe<Array<Maybe<User>>>;
  children?: Maybe<Array<Maybe<Role>>>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  employeeCount?: Maybe<Scalars['Int']['output']>;
  feature_hierarchy?: Maybe<Array<Maybe<FeatureHierarchy>>>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Role>;
  path?: Maybe<Array<Maybe<Role>>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  roleName?: Maybe<Scalars['String']['output']>;
  rolePolicy?: Maybe<RolePolicy>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RoleModule = {
  __typename?: 'RoleModule';
  modules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  role?: Maybe<Role>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  permissions?: Maybe<DividePermission>;
  role?: Maybe<Role>;
};

export type RolePolicy = {
  __typename?: 'RolePolicy';
  sale_max_invoice_discount_fixed?: Maybe<Scalars['Float']['output']>;
  sale_max_invoice_discount_percentage?: Maybe<Scalars['Float']['output']>;
  sale_max_item_discount?: Maybe<Scalars['Float']['output']>;
  ticket_invoice_refund_max_percentage_discount?: Maybe<Scalars['Float']['output']>;
};

export type RolelistingResult = {
  __typename?: 'RolelistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Role>>>;
};

export type Roster = {
  __typename?: 'Roster';
  EmployeeId?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  EndTime?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  IsAllDay?: Maybe<Scalars['Boolean']['output']>;
  IsBlock?: Maybe<Scalars['Boolean']['output']>;
  RecurrenceException?: Maybe<Scalars['String']['output']>;
  RecurrenceID?: Maybe<Scalars['String']['output']>;
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  StartTime?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  break_detail?: Maybe<Array<Maybe<BreakDetailType>>>;
  color?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  designations?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  employees?: Maybe<Array<Maybe<User>>>;
  end_date?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  is_published?: Maybe<Scalars['Boolean']['output']>;
  meal_break?: Maybe<Scalars['Float']['output']>;
  onRepeat?: Maybe<Scalars['String']['output']>;
  overTime?: Maybe<Array<Maybe<OverTime>>>;
  recursion_date?: Maybe<Scalars['DateTime']['output']>;
  repeat?: Maybe<Repeat>;
  rest_break?: Maybe<Scalars['Float']['output']>;
  rosterStore?: Maybe<RosterStores>;
  short_break?: Maybe<Array<Maybe<ShortBreakType>>>;
  short_break_count?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  timeOff?: Maybe<_TimeOff>;
  totalMinuts?: Maybe<Scalars['Int']['output']>;
  total_overtime?: Maybe<Scalars['Int']['output']>;
  totalhours?: Maybe<Scalars['Int']['output']>;
};

export type RosterCommentInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  rosterStore?: InputMaybe<Scalars['ID']['input']>;
};

export type RosterData = {
  __typename?: 'RosterData';
  CategoryColor?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  EmployeeId?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  EndTime?: Maybe<Scalars['DateTime']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  IsAllDay?: Maybe<Scalars['Boolean']['output']>;
  IsBlock?: Maybe<Scalars['Boolean']['output']>;
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  RemainingLeaves?: Maybe<Scalars['Float']['output']>;
  StartTime?: Maybe<Scalars['DateTime']['output']>;
  Subject?: Maybe<Scalars['String']['output']>;
  TotalLeave?: Maybe<Scalars['Float']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  TypeOfAbsence?: Maybe<Scalars['String']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
};

export type RosterInput = {
  break_detail?: InputMaybe<Array<BreakDetail>>;
  color?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  designations?: InputMaybe<Scalars['ID']['input']>;
  editType?: InputMaybe<Scalars['String']['input']>;
  employees: Array<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_time: Scalars['String']['input'];
  full_year?: InputMaybe<Scalars['Boolean']['input']>;
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  meal_break?: InputMaybe<Scalars['Float']['input']>;
  recurrence_rule?: InputMaybe<Scalars['String']['input']>;
  repeat: Repeat;
  rest_break?: InputMaybe<Scalars['Float']['input']>;
  rosterStore: Scalars['ID']['input'];
  short_break_count?: InputMaybe<Scalars['Int']['input']>;
  start_date: Scalars['DateTime']['input'];
  start_time: Scalars['String']['input'];
  updateScheduleId?: InputMaybe<Scalars['ID']['input']>;
  week_number?: InputMaybe<Scalars['Int']['input']>;
};

export type RosterMinutesAndDate = {
  __typename?: 'RosterMinutesAndDate';
  alertData?: Maybe<Array<Maybe<AlertData>>>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  out_of_accural_leave_days?: Maybe<Scalars['Int']['output']>;
  out_of_accural_leave_hours?: Maybe<Scalars['Int']['output']>;
  sandwichDate?: Maybe<Array<Maybe<SandWichDays>>>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  totalMinuts?: Maybe<Scalars['Int']['output']>;
  weekEndDays?: Maybe<Array<Maybe<Weekend>>>;
};

export type RosterStoreInput = {
  _id: Scalars['ID']['input'];
  backgroundComment?: InputMaybe<Scalars['String']['input']>;
  backgroundLeave?: InputMaybe<Scalars['String']['input']>;
  backgroundScheduler?: InputMaybe<Scalars['String']['input']>;
  default_schedular_view?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  number_of_record_employees?: InputMaybe<Scalars['Int']['input']>;
  start_day_of_week?: InputMaybe<Scalars['String']['input']>;
  time_zone?: InputMaybe<Scalars['String']['input']>;
};

export type RosterStores = {
  __typename?: 'RosterStores';
  _id?: Maybe<Scalars['ID']['output']>;
  backgroundComment?: Maybe<Scalars['String']['output']>;
  backgroundLeave?: Maybe<Scalars['String']['output']>;
  backgroundScheduler?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  business_location?: Maybe<BusinessLocation>;
  default_schedular_view?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Array<Maybe<User>>>;
  number_of_record_employees?: Maybe<Scalars['Int']['output']>;
  overtimeColor?: Maybe<Scalars['String']['output']>;
  paidTomeOffColor?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  ptoColor?: Maybe<Scalars['String']['output']>;
  publicHolidayColor?: Maybe<Scalars['String']['output']>;
  sandwichLeaveColor?: Maybe<Scalars['String']['output']>;
  shortLeavePaid?: Maybe<Scalars['String']['output']>;
  shortLeaveUnpaid?: Maybe<Scalars['String']['output']>;
  start_day_of_week?: Maybe<Scalars['String']['output']>;
  time_zone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpaidTomeOffColor?: Maybe<Scalars['String']['output']>;
  weekendColor?: Maybe<Scalars['String']['output']>;
};

export type RosterSubscription = {
  __typename?: 'RosterSubscription';
  action: Scalars['String']['output'];
  roster_data?: Maybe<Roster>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type RosterTemplate = {
  __typename?: 'RosterTemplate';
  _id?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rosters?: Maybe<Array<Maybe<Roster>>>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
};

export type SalesReport = {
  __typename?: 'SalesReport';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type SalesReport1 = {
  __typename?: 'SalesReport1';
  end_date?: Maybe<Scalars['DateTime']['output']>;
  from_date?: Maybe<Scalars['DateTime']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type SampleData = {
  __typename?: 'SampleData';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  is_selected?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SandwichLeaveType = {
  __typename?: 'SandwichLeaveType';
  sandwichDate?: Maybe<Array<Maybe<SandWichDays>>>;
};

export type Schedule = {
  __typename?: 'Schedule';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Payroll?: Maybe<Payroll>;
  PublicHoliday?: Maybe<PublicHoliday>;
  RosterStore?: Maybe<RosterStores>;
  TimeOff?: Maybe<TimeOff>;
  User?: Maybe<User>;
  UserHistory?: Maybe<UserHistory>;
  _id?: Maybe<Scalars['ID']['output']>;
  break_detail?: Maybe<Array<Maybe<ScheduleBreaks>>>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<ScheduleEvents>>>;
  is_attendance_exist?: Maybe<Scalars['Boolean']['output']>;
  is_clocked_in?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_imported?: Maybe<Scalars['Boolean']['output']>;
  is_paid_leave?: Maybe<Scalars['Boolean']['output']>;
  is_payroll_processed?: Maybe<Scalars['Boolean']['output']>;
  is_pto?: Maybe<Scalars['Boolean']['output']>;
  is_public_holiday?: Maybe<Scalars['Boolean']['output']>;
  is_public_holiday_off?: Maybe<Scalars['Boolean']['output']>;
  is_sand_wich?: Maybe<Scalars['Boolean']['output']>;
  is_weekend?: Maybe<Scalars['Boolean']['output']>;
  is_weekend_off?: Maybe<Scalars['Boolean']['output']>;
  normal_time_minuts?: Maybe<Scalars['Int']['output']>;
  normal_time_percentage?: Maybe<Scalars['Float']['output']>;
  normal_time_wage?: Maybe<Scalars['Float']['output']>;
  over_time_percentage?: Maybe<Scalars['Float']['output']>;
  over_time_wage?: Maybe<Scalars['Float']['output']>;
  overtime_minuts?: Maybe<Scalars['Int']['output']>;
  paid_leave_percentage?: Maybe<Scalars['Int']['output']>;
  previous_schedule?: Maybe<Schedule>;
  previous_schedule_type?: Maybe<Scalars['String']['output']>;
  schedule_date?: Maybe<Scalars['String']['output']>;
  schedule_minuts?: Maybe<Scalars['Int']['output']>;
  short_break?: Maybe<MasterDataValue>;
  short_break_count?: Maybe<Scalars['Int']['output']>;
  short_leave_time_percentage?: Maybe<Scalars['Float']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  total_hours?: Maybe<Scalars['Int']['output']>;
  total_minuts?: Maybe<Scalars['Int']['output']>;
  total_wage?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type ScheduleMinutesAndDate = {
  __typename?: 'ScheduleMinutesAndDate';
  end_date?: Maybe<Scalars['DateTime']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  sandwichDate?: Maybe<Array<Maybe<SandWichDays>>>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  totalMinuts?: Maybe<Scalars['Int']['output']>;
  weekEndDays?: Maybe<Array<Maybe<Weekend>>>;
};

export type ScheduleMinutesInput = {
  employee_id: Scalars['ID']['input'];
  leave_dates?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  leave_type?: InputMaybe<Scalars['ID']['input']>;
};

export type SchedulerConfig = {
  __typename?: 'SchedulerConfig';
  backgroundScheduler?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  number_of_record_employees?: Maybe<Scalars['Int']['output']>;
  overtimeColor?: Maybe<Scalars['String']['output']>;
  paidTomeOffColor?: Maybe<Scalars['String']['output']>;
  ptoColor?: Maybe<Scalars['String']['output']>;
  publicHolidayColor?: Maybe<Scalars['String']['output']>;
  sandwichLeaveColor?: Maybe<Scalars['String']['output']>;
  shortLeavePaid?: Maybe<Scalars['String']['output']>;
  shortLeaveUnpaid?: Maybe<Scalars['String']['output']>;
  short_breaks?: Maybe<ShortBreaks>;
  unpaidTomeOffColor?: Maybe<Scalars['String']['output']>;
  weekendColor?: Maybe<Scalars['String']['output']>;
};

export enum SendEmailOption {
  SendEmployeeTheFullSchedule = 'send_employee_the_full_schedule',
  SendEmployeeTheirOwnSchedule = 'send_employee_their_own_schedule'
}

export type Separation = {
  __typename?: 'Separation';
  AdminID: Scalars['ID']['output'];
  EmployeeId: Scalars['ID']['output'];
  Message: Scalars['String']['output'];
};

export enum SeparationFilter {
  Resignation = 'Resignation',
  Retirement = 'Retirement',
  Termination = 'Termination',
  All = 'all',
  Archive = 'archive'
}

export enum Separation_Types {
  Resignation = 'Resignation',
  Retirement = 'Retirement',
  Termination = 'Termination'
}

export type Service = {
  __typename?: 'Service';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  RepairCategory?: Maybe<RepairCategory>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  _id?: Maybe<Scalars['ID']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  category_prefix?: Maybe<Scalars['String']['output']>;
};

export type ServiceCategoryType = {
  __typename?: 'ServiceCategoryType';
  _id?: Maybe<Scalars['ID']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
};

export type ServiceConfigInput = {
  business: Scalars['ID']['input'];
  config: Scalars['Boolean']['input'];
  location: Scalars['ID']['input'];
};

export type ServicesPrice = {
  __typename?: 'ServicesPrice';
  Service?: Maybe<Product>;
  ServiceBrand?: Maybe<SystemBrand>;
  ServiceDeviceModel?: Maybe<DeviceModel>;
  ServiceItem?: Maybe<Product>;
  _id?: Maybe<Scalars['ID']['output']>;
  defaultServiceID?: Maybe<Scalars['ID']['output']>;
  service_max_price?: Maybe<Scalars['Float']['output']>;
  service_min_price?: Maybe<Scalars['Float']['output']>;
};

export type SetupAlert = {
  __typename?: 'SetupAlert';
  _id: Scalars['ID']['output'];
  asset_email_details?: Maybe<SetupEmail>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_asset_alert?: Maybe<Scalars['Boolean']['output']>;
  is_asset_email?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_lease_email?: Maybe<Scalars['Boolean']['output']>;
  is_lease_expiration_alert?: Maybe<Scalars['Boolean']['output']>;
  is_maintenance_alert?: Maybe<Scalars['Boolean']['output']>;
  is_maintenance_email?: Maybe<Scalars['Boolean']['output']>;
  is_warranty_email?: Maybe<Scalars['Boolean']['output']>;
  is_warranty_expiration_alert?: Maybe<Scalars['Boolean']['output']>;
  lease_email_details?: Maybe<SetupEmail>;
  lease_lead_time?: Maybe<Scalars['Int']['output']>;
  maintenance_email_details?: Maybe<SetupEmail>;
  maintenance_lead_time?: Maybe<Scalars['Int']['output']>;
  maintenance_overdue_time?: Maybe<Scalars['Int']['output']>;
  updated_by?: Maybe<User>;
  warranty_email_details?: Maybe<SetupEmail>;
  warranty_lead_time?: Maybe<Scalars['Int']['output']>;
};

export type SetupEmail = {
  __typename?: 'SetupEmail';
  email_body?: Maybe<Scalars['String']['output']>;
  email_frequency?: Maybe<Scalars['String']['output']>;
  email_subject?: Maybe<Scalars['String']['output']>;
  email_time?: Maybe<Scalars['String']['output']>;
  email_to?: Maybe<Scalars['String']['output']>;
  stop_email_after_days?: Maybe<Scalars['Int']['output']>;
};

export type SetupEmailInput = {
  email_body?: InputMaybe<Scalars['String']['input']>;
  email_frequency?: InputMaybe<Scalars['String']['input']>;
  email_subject?: InputMaybe<Scalars['String']['input']>;
  email_time?: InputMaybe<Scalars['String']['input']>;
  email_to?: InputMaybe<Scalars['String']['input']>;
  stop_email_after_days?: InputMaybe<Scalars['Int']['input']>;
};

export type ShareAppPermissions = {
  can_delete?: InputMaybe<Scalars['Boolean']['input']>;
  can_edit?: InputMaybe<Scalars['Boolean']['input']>;
  can_share_otp?: InputMaybe<Scalars['Boolean']['input']>;
  can_share_password?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShareAuthenticatorApp = {
  __typename?: 'ShareAuthenticatorApp';
  AuthenticatorApp?: Maybe<Authenticator>;
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['String']['output']>;
  app_info?: Maybe<AuthenticatorAppInfo>;
  app_name?: Maybe<Scalars['String']['output']>;
  app_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  employee?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_scheduled?: Maybe<Scalars['Boolean']['output']>;
  password_manager?: Maybe<PasswordManagerType>;
  scheduled_for?: Maybe<Scalars['String']['output']>;
  share_as?: Maybe<Scalars['String']['output']>;
  share_permissions?: Maybe<Share_Permissions>;
  share_type?: Maybe<Scalars['String']['output']>;
  share_with?: Maybe<Array<Maybe<ShareAuthenticatorApp>>>;
  shared_by?: Maybe<User>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export enum ShareDocumentroles {
  Editor = 'Editor',
  Owner = 'Owner',
  Remove = 'Remove',
  Viewer = 'Viewer'
}

export type ShareMeListDataTable = {
  __typename?: 'ShareMeListDataTable';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ShareAuthenticatorApp>>>;
};

export type ShareWithMeListWithPagination = {
  __typename?: 'ShareWithMeListWithPagination';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<ShareAuthenticatorApp>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type Shift = {
  __typename?: 'Shift';
  _id?: Maybe<Scalars['ID']['output']>;
  break_detail?: Maybe<Array<Maybe<BreakDetailType>>>;
  break_hours?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  business_location?: Maybe<BusinessLocation>;
  employee?: Maybe<User>;
  employees?: Maybe<Array<Maybe<User>>>;
  employeesCount?: Maybe<Scalars['Int']['output']>;
  end_time: Scalars['String']['output'];
  is_custom?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  meal_break?: Maybe<Scalars['Int']['output']>;
  rest_break?: Maybe<Scalars['Int']['output']>;
  shift_name: Scalars['String']['output'];
  start_time: Scalars['String']['output'];
  working_hours?: Maybe<Scalars['String']['output']>;
};

export type ShiftInput = {
  break_detail?: InputMaybe<Array<InputMaybe<BreakDetail>>>;
  break_hours?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['ID']['input'];
  business_location?: InputMaybe<Scalars['ID']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  end_time: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_custom: Scalars['Boolean']['input'];
  meal_break?: InputMaybe<Scalars['Int']['input']>;
  rest_break?: InputMaybe<Scalars['Int']['input']>;
  shift_name: Scalars['String']['input'];
  start_time: Scalars['String']['input'];
  working_hours?: InputMaybe<Scalars['String']['input']>;
};

export type ShiftListInput = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_sample_data?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ShiftsList = {
  __typename?: 'ShiftsList';
  cursor?: Maybe<Scalars['ID']['output']>;
  list?: Maybe<Array<Maybe<Shift>>>;
};

export type ShippingMethods = {
  __typename?: 'ShippingMethods';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<User>;
};

export type SitesAssetAssignedResult = {
  __typename?: 'SitesAssetAssignedResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<BusinessLocation>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type SitesAssetAssignedResults = {
  __typename?: 'SitesAssetAssignedResults';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<BusinessLocation>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type State = {
  __typename?: 'State';
  Country?: Maybe<Country>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  short_name?: Maybe<Scalars['String']['output']>;
  state_name?: Maybe<Scalars['String']['output']>;
};

export type StateHierarchicy = {
  __typename?: 'StateHierarchicy';
  State?: Maybe<State>;
  cities?: Maybe<Array<Maybe<City>>>;
};

export type Station = {
  __typename?: 'Station';
  Business?: Maybe<Business>;
  Department?: Maybe<Department>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  station_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export enum Status {
  Active = 'Active',
  All = 'All',
  Disabled = 'Disabled',
  Scheduled = 'Scheduled'
}

export enum StatusEnum {
  Accepted = 'accepted',
  All = 'all',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type StoreAccessType = {
  __typename?: 'StoreAccessType';
  businessLocation?: Maybe<BusinessLocation>;
  cashRegister?: Maybe<Array<Maybe<CashRegisters>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type StoreCustomField = {
  __typename?: 'StoreCustomField';
  _id?: Maybe<Scalars['ID']['output']>;
  controlType?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<CustomFieldTypeOptionType>>>;
  order?: Maybe<Scalars['Float']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum StoreTypeEnum {
  Corporate = 'corporate',
  ThirdPartyFranchisee = 'third_party_franchisee'
}

export type Subscription = {
  __typename?: 'Subscription';
  ClockedHistory?: Maybe<Scalars['Boolean']['output']>;
  TimeOff: Separation;
  _id?: Maybe<Scalars['ID']['output']>;
  attendanceRegulationRequestOrApproved?: Maybe<AttendanceRegulation>;
  attendanceRequestDeleted?: Maybe<AttendanceRegulation>;
  businessTimeZoneChange?: Maybe<BusinessUpdate>;
  businessUpdate?: Maybe<Business>;
  canUserClockInViaApp?: Maybe<Scalars['Boolean']['output']>;
  clockHistryPdfDownload?: Maybe<ClockHistryPdfDownloadType>;
  commentInTaskListen?: Maybe<TaskManagement>;
  createSubTaskListen?: Maybe<TaskManagement>;
  createTaskListen?: Maybe<TaskManagement>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleteDocument?: Maybe<DeleteDocumentSubscribe>;
  deleteRequest?: Maybe<DeletedRequestResponse>;
  downloadZip?: Maybe<DownloadZip>;
  email?: Maybe<Scalars['String']['output']>;
  employeeDashBoardUpdate?: Maybe<DashBoardChange>;
  employeesRosters?: Maybe<EmployeesWithRostersList>;
  expenseRequestOrApproved?: Maybe<Expense>;
  fileUploadProgress: UploadProgress;
  generatedNotification?: Maybe<Notification>;
  import_timesheets?: Maybe<Scalars['Float']['output']>;
  is_custom_package?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  leavePackage?: Maybe<Scalars['Boolean']['output']>;
  loanPaymentRequestOrApproved?: Maybe<LoanPayment>;
  numberIncremented?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Package>;
  phone?: Maybe<Scalars['String']['output']>;
  request_from?: Maybe<Business>;
  request_to?: Maybe<Business>;
  roster: Scalars['Boolean']['output'];
  scheduleCsvProgress?: Maybe<ImportCsvSubsciption>;
  scheduleProgress?: Maybe<ScheduleProgressType>;
  sendDocumentToSharedEmployees?: Maybe<DocumentControlAttachment>;
  sendNotificationCount?: Maybe<NotificationCount>;
  sendRequestToAssignees?: Maybe<DocumentControlAttachment>;
  show_paynow?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<AllowedSubscriptionStatus>;
  subTaskStatusUpdated?: Maybe<TaskManagement>;
  taskStatusUpdated?: Maybe<TaskManagement>;
  timeOffRequestOrApproved?: Maybe<TimeOff>;
  unlinkedDevice?: Maybe<Scalars['Boolean']['output']>;
  updateAssignee?: Maybe<TaskManagement>;
  updateAttendance?: Maybe<UpdateAttendanceSocket>;
  updateTasksListen?: Maybe<TaskManagement>;
  uploadFile?: Maybe<Fileuploadsize>;
  userInactiveNotification?: Maybe<UserAccountStatus>;
  userInfoUpdate?: Maybe<EmailChanged>;
  user_request_from?: Maybe<User>;
  usersPermissionsChangedNotify?: Maybe<RoleChanged>;
};


export type SubscriptionClockedHistoryArgs = {
  businessId: Scalars['ID']['input'];
};


export type SubscriptionAttendanceRegulationRequestOrApprovedArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionAttendanceRequestDeletedArgs = {
  businessId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionBusinessTimeZoneChangeArgs = {
  businessId: Scalars['ID']['input'];
};


export type SubscriptionBusinessUpdateArgs = {
  businessId: Scalars['ID']['input'];
};


export type SubscriptionCanUserClockInViaAppArgs = {
  employee_id: Scalars['ID']['input'];
};


export type SubscriptionClockHistryPdfDownloadArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionDeleteRequestArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionDownloadZipArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionEmployeeDashBoardUpdateArgs = {
  businessId: Scalars['ID']['input'];
};


export type SubscriptionEmployeesRostersArgs = {
  user_id: Scalars['ID']['input'];
};


export type SubscriptionExpenseRequestOrApprovedArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionFileUploadProgressArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionGeneratedNotificationArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionLeavePackageArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionLoanPaymentRequestOrApprovedArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionNumberIncrementedArgs = {
  businessId: Scalars['ID']['input'];
};


export type SubscriptionScheduleCsvProgressArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionScheduleProgressArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionSendDocumentToSharedEmployeesArgs = {
  employeeId: Scalars['ID']['input'];
};


export type SubscriptionSendNotificationCountArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionSendRequestToAssigneesArgs = {
  employeeId: Scalars['ID']['input'];
};


export type SubscriptionTimeOffRequestOrApprovedArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionUnlinkedDeviceArgs = {
  _id: Scalars['ID']['input'];
};


export type SubscriptionUpdateAttendanceArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionUploadFileArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionUserInactiveNotificationArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionUserInfoUpdateArgs = {
  businessId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUsersPermissionsChangedNotifyArgs = {
  userId: Scalars['ID']['input'];
};

export type SubscriptionDataTableList = {
  __typename?: 'SubscriptionDataTableList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Subscription>>>;
};

export type SubscriptionList = {
  __typename?: 'SubscriptionList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Subscription>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type SubscriptionLogActivity = {
  __typename?: 'SubscriptionLogActivity';
  _id?: Maybe<Scalars['ID']['output']>;
  activity_date?: Maybe<Scalars['DateTime']['output']>;
  attachment?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type SystemBrand = {
  __typename?: 'SystemBrand';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  brand_prefix?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
};

export type SystemModel = {
  __typename?: 'SystemModel';
  Brand?: Maybe<Brand>;
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Capacity?: Maybe<Array<Maybe<Capacity>>>;
  Carrier?: Maybe<Array<Maybe<Carrier>>>;
  Color?: Maybe<Array<Maybe<Color>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_global?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TableConfig = {
  bodyTextFontsSize?: InputMaybe<Scalars['Int']['input']>;
  fontFaimly?: InputMaybe<Scalars['String']['input']>;
  globalSearch?: InputMaybe<Scalars['String']['input']>;
  headerTextFontsSize?: InputMaybe<Scalars['Int']['input']>;
  selectedTableLayout?: InputMaybe<Scalars['String']['input']>;
  showVerticalBorder?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableConfigListing = {
  __typename?: 'TableConfigListing';
  bodyTextFontsSize?: Maybe<Scalars['Int']['output']>;
  fontFaimly?: Maybe<Scalars['String']['output']>;
  globalSearch?: Maybe<Scalars['String']['output']>;
  headerTextFontsSize?: Maybe<Scalars['Int']['output']>;
  selectedTableLayout?: Maybe<Scalars['String']['output']>;
  showVerticalBorder?: Maybe<Scalars['Boolean']['output']>;
};

export type Tags = {
  __typename?: 'Tags';
  _id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum TargetEnum {
  Scale = 'scale',
  Score = 'score'
}

export type TaskComment = {
  __typename?: 'TaskComment';
  Business?: Maybe<Business>;
  TaskManagement?: Maybe<TaskManagement>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  comment_date?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<TaskComment>;
  path?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type TaskForUserDashbaord = {
  __typename?: 'TaskForUserDashbaord';
  data?: Maybe<StatusOfTasks>;
  date?: Maybe<Scalars['String']['output']>;
};

export type TaskManagement = {
  __typename?: 'TaskManagement';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<Business>;
  Department?: Maybe<Department>;
  ParentTask?: Maybe<TaskManagement>;
  Role?: Maybe<Role>;
  _id?: Maybe<Scalars['ID']['output']>;
  assignee?: Maybe<Array<Maybe<User>>>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  attachments_count?: Maybe<Scalars['Int']['output']>;
  attachments_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bread_cram?: Maybe<Array<Maybe<TaskManagement>>>;
  check_list?: Maybe<Array<Maybe<CheckListStep>>>;
  comment_count?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Array<Maybe<CommenType>>>;
  completed_date?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['DateTime']['output']>;
  editor_description?: Maybe<Scalars['String']['output']>;
  formatted_time: Scalars['String']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_owner?: Maybe<Scalars['Boolean']['output']>;
  is_timing_active: Scalars['Boolean']['output'];
  is_timing_ended: Scalars['Boolean']['output'];
  no_sub_task?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priority?: Maybe<Scalars['String']['output']>;
  reporter?: Maybe<User>;
  status?: Maybe<Scalars['String']['output']>;
  sub_task?: Maybe<Array<Maybe<TaskManagement>>>;
  summary?: Maybe<Scalars['String']['output']>;
  task_name?: Maybe<Scalars['String']['output']>;
  time_logs: Array<TimeLog>;
  total_time_spent: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type TaskManagementWithData = {
  __typename?: 'TaskManagementWithData';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<Business>;
  Department?: Maybe<Department>;
  _id?: Maybe<Scalars['ID']['output']>;
  assignee?: Maybe<Array<Maybe<User>>>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  attachments_count?: Maybe<Scalars['Int']['output']>;
  attachments_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  check_list?: Maybe<Array<Maybe<CheckListStep>>>;
  comment_count?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Array<Maybe<CommenType>>>;
  completed_date?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  detail?: Maybe<CommentDetail>;
  due_date?: Maybe<Scalars['DateTime']['output']>;
  editor_description?: Maybe<Scalars['String']['output']>;
  formatted_time: Scalars['String']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_owner?: Maybe<Scalars['Boolean']['output']>;
  is_timing_active: Scalars['Boolean']['output'];
  is_timing_ended: Scalars['Boolean']['output'];
  no_sub_task?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priority?: Maybe<Scalars['String']['output']>;
  reporter?: Maybe<User>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  task_name?: Maybe<Scalars['String']['output']>;
  time_logs: Array<TimeLog>;
  total_time_spent: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type TaskManagement_ = {
  __typename?: 'TaskManagement_';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<Business>;
  Department?: Maybe<Department>;
  ParentTask?: Maybe<TaskManagement>;
  Role?: Maybe<Role>;
  _id?: Maybe<Scalars['ID']['output']>;
  assignee?: Maybe<Array<Maybe<User>>>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  attachments_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bread_cram?: Maybe<Array<Maybe<TaskManagement>>>;
  check_list?: Maybe<Array<Maybe<CheckListStep>>>;
  comments?: Maybe<Array<Maybe<CommenType>>>;
  completed_date?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['DateTime']['output']>;
  editor_description?: Maybe<Scalars['String']['output']>;
  formatted_time: Scalars['String']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_timing_active: Scalars['Boolean']['output'];
  is_timing_ended: Scalars['Boolean']['output'];
  logs?: Maybe<Array<Maybe<LogsTask>>>;
  no_sub_task?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priority?: Maybe<Scalars['String']['output']>;
  reporter?: Maybe<User>;
  status?: Maybe<Scalars['String']['output']>;
  sub_task?: Maybe<DataColumnResults>;
  summary?: Maybe<Scalars['String']['output']>;
  task_name?: Maybe<Scalars['String']['output']>;
  time_logs: Array<TimeLog>;
  total_time_spent: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type TaskResponse = {
  __typename?: 'TaskResponse';
  description?: Maybe<Scalars['String']['output']>;
  formatted_time: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_timing_active: Scalars['Boolean']['output'];
  is_timing_ended: Scalars['Boolean']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  time_logs: Array<TimeLog>;
  title: Scalars['String']['output'];
  total_time_spent: Scalars['Float']['output'];
};

export type TaskTimeLogsById = {
  __typename?: 'TaskTimeLogsById';
  _id?: Maybe<Scalars['ID']['output']>;
  formatted_time: Scalars['String']['output'];
  is_timing_active: Scalars['Boolean']['output'];
  is_timing_ended: Scalars['Boolean']['output'];
  onhold_formatted_time: Scalars['String']['output'];
  timeLogs?: Maybe<Array<Maybe<TimeLogResult>>>;
  time_logs: Array<TimeLog>;
  todo_formatted_time: Scalars['String']['output'];
  total_time_spent: Scalars['Float']['output'];
};

export type Tax = {
  __typename?: 'Tax';
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  applicable_on?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_tax_exemptible?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentage_amount?: Maybe<Scalars['Int']['output']>;
};

export enum TaxTypeEnum {
  PurchaseTax = 'purchase_tax',
  SaleTax = 'sale_tax'
}

export type TermAndSalary = {
  __typename?: 'TermAndSalary';
  Designation?: Maybe<Designation>;
  employee_type?: Maybe<Scalars['String']['output']>;
  joining_date?: Maybe<Scalars['DateTime']['output']>;
  probation_period?: Maybe<Scalars['String']['output']>;
  public_day_hourly_salary?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  salary_offered?: Maybe<Scalars['Int']['output']>;
  salary_type?: Maybe<Scalars['String']['output']>;
  weekend_day_salary?: Maybe<Scalars['Int']['output']>;
  weekly_hourly_salary?: Maybe<Scalars['Int']['output']>;
};

export type TermAndSalaryInput = {
  Designation?: InputMaybe<Scalars['ID']['input']>;
  employee_type?: InputMaybe<Scalars['String']['input']>;
  joining_date?: InputMaybe<Scalars['DateTime']['input']>;
  probation_period?: InputMaybe<Scalars['String']['input']>;
  public_day_hourly_salary?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  salary_offered?: InputMaybe<Scalars['Int']['input']>;
  salary_type?: InputMaybe<Scalars['String']['input']>;
  weekend_day_salary?: InputMaybe<Scalars['Int']['input']>;
  weekly_hourly_salary?: InputMaybe<Scalars['Int']['input']>;
};

export type TerminalAppHistory = {
  __typename?: 'TerminalAppHistory';
  User?: Maybe<User>;
  UserAppDevice?: Maybe<UserAppDevice>;
  _id?: Maybe<Scalars['ID']['output']>;
  action?: Maybe<Scalars['String']['output']>;
  action_date?: Maybe<Scalars['Date']['output']>;
  app_type?: Maybe<Scalars['String']['output']>;
  device_id?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export type TerminalAppHistoryResult = {
  __typename?: 'TerminalAppHistoryResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<TerminalAppHistory>>>;
};

export type TillCount = {
  __typename?: 'TillCount';
  CashDemonination?: Maybe<Array<Maybe<CashDemonination>>>;
  CashRegisters?: Maybe<CashRegisters>;
  User?: Maybe<User>;
  closing_amount?: Maybe<Scalars['Float']['output']>;
  counted_amount?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['DateTime']['output']>;
  deposited?: Maybe<Scalars['Float']['output']>;
  discrepancy?: Maybe<Scalars['Float']['output']>;
  expected_amount?: Maybe<Scalars['Float']['output']>;
  opening_amount?: Maybe<Scalars['Float']['output']>;
  remaining_amount?: Maybe<Scalars['Float']['output']>;
};

export type TillCountListing = {
  __typename?: 'TillCountListing';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<TillCount>>>;
};

export type TimeLog = {
  __typename?: 'TimeLog';
  id: Scalars['ID']['output'];
  status: TimeLogAction;
  timestamp: Scalars['Date']['output'];
};

export enum TimeLogAction {
  Completed = 'completed',
  InProgress = 'inProgress',
  OnHold = 'onHold',
  Todo = 'todo'
}

export type TimeLogInput = {
  status: TimeLogAction;
  task_id: Scalars['ID']['input'];
};

export type TimeLogResponse = {
  __typename?: 'TimeLogResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type TimeLogResult = {
  __typename?: 'TimeLogResult';
  duration: Scalars['String']['output'];
  from: Scalars['String']['output'];
  fromTime?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
  toTime?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type TimeOffListInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rosterStoreId: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TimeOffStatusFilter>;
};

export type TimeOffListingRosterResult = {
  __typename?: 'TimeOffListingRosterResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<TimeOff>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type TimeOffType = {
  __typename?: 'TimeOffType';
  countIn?: Maybe<Scalars['String']['output']>;
  time_off_category?: Maybe<Scalars['String']['output']>;
  time_off_days?: Maybe<Scalars['String']['output']>;
  time_off_total_days?: Maybe<Scalars['String']['output']>;
  time_off_type?: Maybe<LeaveType>;
};

export type TimeZone = {
  __typename?: 'TimeZone';
  offset?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TradeInDevice = {
  __typename?: 'TradeInDevice';
  Brand?: Maybe<Brand>;
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Capacity?: Maybe<Capacity>;
  Carrier?: Maybe<Carrier>;
  Color?: Maybe<Color>;
  Customer?: Maybe<Customer>;
  SystemModel?: Maybe<SystemModel>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deviceCheckIn?: Maybe<Scalars['ID']['output']>;
  device_color?: Maybe<Color>;
  imei_ssn?: Maybe<Scalars['String']['output']>;
  is_ID_verified?: Maybe<Scalars['Boolean']['output']>;
  is_account_removed?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_password_removed?: Maybe<Scalars['Boolean']['output']>;
  is_water_damage?: Maybe<Scalars['Boolean']['output']>;
  model_number?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  other_issue?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export enum TrainingAssignStatus {
  Assigned = 'assigned',
  Completed = 'completed',
  InProgress = 'in_progress',
  Overdue = 'overdue'
}

export enum TrainingGlobalStatus {
  Active = 'active',
  Completed = 'completed',
  Delivered = 'delivered',
  Overdue = 'overdue'
}

export type TraningRepecaCreateInputResult = {
  __typename?: 'TraningRepecaCreateInputResult';
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  started_date?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  Brand?: Maybe<Brand>;
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Customer?: Maybe<Customer>;
  RepairTransaction?: Maybe<Transaction>;
  Tax?: Maybe<Tax>;
  TradeInDevice?: Maybe<TradeInDevice>;
  _id?: Maybe<Scalars['ID']['output']>;
  additional_notes?: Maybe<Scalars['String']['output']>;
  arrival_date?: Maybe<Scalars['DateTime']['output']>;
  balance_not_paid_amount?: Maybe<Scalars['Float']['output']>;
  btnCaption?: Maybe<Scalars['String']['output']>;
  calculated_price?: Maybe<Scalars['Float']['output']>;
  cancel_at?: Maybe<Scalars['DateTime']['output']>;
  cancel_by?: Maybe<User>;
  cost?: Maybe<Scalars['Float']['output']>;
  coupon_code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  custom_purchase_part?: Maybe<Scalars['String']['output']>;
  deadline_status?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  delivered_percentage?: Maybe<Scalars['Float']['output']>;
  delivery_address?: Maybe<Scalars['String']['output']>;
  desired_margin?: Maybe<Scalars['Float']['output']>;
  discount_amount?: Maybe<Scalars['Float']['output']>;
  discount_value?: Maybe<Scalars['Float']['output']>;
  filterJson?: Maybe<Scalars['String']['output']>;
  filter_type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  invoice_for_repair_room?: Maybe<Scalars['Boolean']['output']>;
  is_additional_cost?: Maybe<Scalars['Boolean']['output']>;
  is_amount_refund?: Maybe<Scalars['Boolean']['output']>;
  is_apply_sale_tax?: Maybe<Scalars['Boolean']['output']>;
  is_checkout?: Maybe<Scalars['Boolean']['output']>;
  is_coupon_apply?: Maybe<Scalars['Boolean']['output']>;
  is_devices_for_checkout?: Maybe<Scalars['Boolean']['output']>;
  is_discount_percentage?: Maybe<Scalars['Boolean']['output']>;
  is_extra_items?: Maybe<Scalars['Boolean']['output']>;
  is_missing_items?: Maybe<Scalars['Boolean']['output']>;
  is_overide_price?: Maybe<Scalars['Boolean']['output']>;
  is_partial_checkout?: Maybe<Scalars['Boolean']['output']>;
  is_partial_repair_done?: Maybe<Scalars['Boolean']['output']>;
  is_pay_to_customer?: Maybe<Scalars['Boolean']['output']>;
  is_private?: Maybe<Scalars['Boolean']['output']>;
  is_repair_done?: Maybe<Scalars['Boolean']['output']>;
  is_service_update?: Maybe<Scalars['Boolean']['output']>;
  is_tax_percentage?: Maybe<Scalars['Boolean']['output']>;
  is_tax_refund?: Maybe<Scalars['Boolean']['output']>;
  is_trade_in_issue?: Maybe<Scalars['Boolean']['output']>;
  net_term_amount?: Maybe<Scalars['Float']['output']>;
  order_actual_amount?: Maybe<Scalars['Float']['output']>;
  order_estimate_amount?: Maybe<Scalars['Float']['output']>;
  order_status?: Maybe<Scalars['String']['output']>;
  pay_to_customer?: Maybe<Scalars['Float']['output']>;
  received_additional_cost?: Maybe<Scalars['Float']['output']>;
  received_by?: Maybe<Scalars['String']['output']>;
  received_date?: Maybe<Scalars['DateTime']['output']>;
  received_note?: Maybe<Scalars['String']['output']>;
  ref_no?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['Float']['output']>;
  refund_amount_to_customer?: Maybe<Scalars['Float']['output']>;
  remaining_Customer_credit?: Maybe<Scalars['Float']['output']>;
  remaining_amount?: Maybe<Scalars['Float']['output']>;
  repair_completion_date?: Maybe<Scalars['DateTime']['output']>;
  repair_room_color_pallet?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  route_url?: Maybe<Scalars['String']['output']>;
  schedule_pickup?: Maybe<Scalars['DateTime']['output']>;
  shipping_amount?: Maybe<Scalars['Float']['output']>;
  shipping_company_name?: Maybe<Scalars['String']['output']>;
  shipping_estimated_days?: Maybe<Scalars['String']['output']>;
  shipping_tracking_no?: Maybe<Scalars['String']['output']>;
  sub_total_amount?: Maybe<Scalars['Float']['output']>;
  supplier_order_number?: Maybe<Scalars['String']['output']>;
  supplier_rma_number?: Maybe<Scalars['String']['output']>;
  tax_amount?: Maybe<Scalars['Float']['output']>;
  tax_value?: Maybe<Scalars['Float']['output']>;
  technician?: Maybe<User>;
  ticket_type?: Maybe<Scalars['String']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  total_part_count?: Maybe<Scalars['Int']['output']>;
  total_refund_amount?: Maybe<Scalars['Float']['output']>;
  total_tax_amount?: Maybe<Scalars['Float']['output']>;
  tradin_initial_value?: Maybe<Scalars['Int']['output']>;
  transaction_am_pm?: Maybe<Scalars['String']['output']>;
  transaction_date?: Maybe<Scalars['DateTime']['output']>;
  transaction_hours?: Maybe<Scalars['String']['output']>;
  transaction_keeping_unit?: Maybe<Scalars['String']['output']>;
  transaction_minutes?: Maybe<Scalars['String']['output']>;
  transaction_payment_status?: Maybe<Scalars['String']['output']>;
  transaction_status?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type TwoFaInput = {
  employee_id?: InputMaybe<Scalars['ID']['input']>;
};

export type TwoFaOutput = {
  __typename?: 'TwoFAOutput';
  uri?: Maybe<Scalars['String']['output']>;
};

export type UpdateAssetCategoryInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetInput = {
  AssetBrand?: InputMaybe<Scalars['ID']['input']>;
  AssetModel?: InputMaybe<Scalars['ID']['input']>;
  actualQuantity?: InputMaybe<Scalars['Int']['input']>;
  assetIds?: InputMaybe<Scalars['String']['input']>;
  assetImage?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  assetImageUrl?: InputMaybe<Scalars['String']['input']>;
  assignedEmployee?: InputMaybe<Scalars['ID']['input']>;
  assignedType?: InputMaybe<AssignedType>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  depreciation?: InputMaybe<Array<InputMaybe<DepreciationInput>>>;
  depreciationSalvageValue?: InputMaybe<Scalars['Int']['input']>;
  depreciationTenure?: InputMaybe<Scalars['Int']['input']>;
  depreciationType?: InputMaybe<DepreciationEnum>;
  description?: InputMaybe<Scalars['String']['input']>;
  initialCost?: InputMaybe<Scalars['Float']['input']>;
  isAutoAssetId?: InputMaybe<Scalars['Boolean']['input']>;
  isDepreciation?: InputMaybe<Scalars['Boolean']['input']>;
  isSeriallized?: InputMaybe<Scalars['Boolean']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purchasedDate?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serialNumbers?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['ID']['input']>;
  subCategory?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetSubCategoryInput = {
  AssetCategoryId?: InputMaybe<Scalars['ID']['input']>;
  categoryUrl?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoriesInput = {
  name: Scalars['String']['input'];
  sections?: InputMaybe<Array<UpdateCategoriesSectionInput>>;
};

export type UpdateCategoriesSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  score: Scalars['Int']['input'];
};

export type UpdateDiscountInput = {
  Business: Scalars['ID']['input'];
  BusinessLocation: Scalars['ID']['input'];
  Campaign: Scalars['ID']['input'];
  Product?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  business_type: Scalars['String']['input'];
  can_schedule: Scalars['Boolean']['input'];
  code: Scalars['String']['input'];
  customerTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customer_since?: InputMaybe<Scalars['String']['input']>;
  discount_amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  isSendEmail: Scalars['Boolean']['input'];
  is_active: Is_Active;
  is_customer_can_use_only_once: Scalars['Boolean']['input'];
  is_customer_more_then_said_amount: Scalars['Boolean']['input'];
  is_customer_since: Scalars['Boolean']['input'];
  is_customer_spent_amount: Scalars['Boolean']['input'];
  is_discount_percentage: Scalars['Boolean']['input'];
  is_entire_order: Scalars['Boolean']['input'];
  is_minimum_purchase: Scalars['Boolean']['input'];
  is_minimum_purchase_amount: Scalars['Boolean']['input'];
  is_new_customer_only: Scalars['Boolean']['input'];
  is_single_store: Scalars['Boolean']['input'];
  multi_stores?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  number_of_usage_per_customer?: InputMaybe<Scalars['Float']['input']>;
  purchaseAmountQuantity?: InputMaybe<Scalars['Float']['input']>;
  reach?: InputMaybe<Scalars['Int']['input']>;
  schedule_from?: InputMaybe<Scalars['String']['input']>;
  schedule_to?: InputMaybe<Scalars['String']['input']>;
  single_store?: InputMaybe<Scalars['ID']['input']>;
  spent_amount?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateInvoiceInput = {
  billTo?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  courtesyCredit?: InputMaybe<Scalars['Float']['input']>;
  grandTotal?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  invoiceImageUrl?: InputMaybe<Scalars['String']['input']>;
  invoiceItems?: InputMaybe<Array<InputMaybe<UpdateInvoiceItemsInput>>>;
  invoiceNumber?: InputMaybe<Scalars['Int']['input']>;
  invoice_image?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderDate?: InputMaybe<Scalars['Date']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  shipTo?: InputMaybe<Scalars['String']['input']>;
  shippingMethod?: InputMaybe<Scalars['String']['input']>;
  subTotal?: InputMaybe<Scalars['Float']['input']>;
  taxes?: InputMaybe<Scalars['Float']['input']>;
  toPayOff?: InputMaybe<Scalars['Float']['input']>;
  totalPaid?: InputMaybe<Scalars['Float']['input']>;
  totalProducts?: InputMaybe<Scalars['Float']['input']>;
  totalQty?: InputMaybe<Scalars['Int']['input']>;
  totalSerialNumber?: InputMaybe<Scalars['Float']['input']>;
  totalShippingCharges?: InputMaybe<Scalars['Float']['input']>;
  totalSku?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvoiceInputs = {
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  invoiceItems?: InputMaybe<Array<InputMaybe<UpdateInvoiceItemsInput>>>;
  invoiceNumber?: InputMaybe<Scalars['Int']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['Int']['input']>;
  subTotal?: InputMaybe<Scalars['Int']['input']>;
  taxes?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvoiceItemInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serial_number?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMaintenanceInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateCompleted?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  maintenanceBy?: InputMaybe<Scalars['String']['input']>;
  recurring?: InputMaybe<Scalars['Int']['input']>;
  recurringBy?: InputMaybe<RecurringBy>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  appId: Scalars['ID']['input'];
  appShares?: InputMaybe<Array<InputMaybe<UsersSharedPasswordInput>>>;
};

export type UpdateQuestionInput = {
  QuizCategory: Scalars['ID']['input'];
  QuizCategorySection: Scalars['ID']['input'];
  add_attachments?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  add_option_images?: InputMaybe<Array<InputMaybe<OptionImageAddInput>>>;
  add_options?: InputMaybe<Array<InputMaybe<OptionInput>>>;
  correct_answer?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  question_text: Scalars['String']['input'];
  question_type: Scalars['String']['input'];
  remove_attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove_option_images?: InputMaybe<Array<InputMaybe<OptionImageRemoveInput>>>;
  remove_options?: InputMaybe<Array<Scalars['ID']['input']>>;
  update_option_text?: InputMaybe<Array<InputMaybe<OptionTextUpdateInput>>>;
};

export type UpdateQuizInput = {
  Department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  assignTo?: InputMaybe<Array<Scalars['ID']['input']>>;
  can_re_attempts?: InputMaybe<CanReAttempts>;
  category_sections: Array<CategorySectionInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['String']['input'];
  end_date?: InputMaybe<Scalars['Date']['input']>;
  end_time?: InputMaybe<Scalars['Date']['input']>;
  evaluate_by?: InputMaybe<Array<Scalars['ID']['input']>>;
  evaluator_department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  evaluator_role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  grade?: InputMaybe<Array<GradeInput>>;
  is_attempt_one_by_one?: InputMaybe<Scalars['Boolean']['input']>;
  is_random?: InputMaybe<Scalars['Boolean']['input']>;
  is_shuffling?: InputMaybe<Scalars['Boolean']['input']>;
  max_attempts?: InputMaybe<Scalars['Int']['input']>;
  passing_marks?: InputMaybe<Scalars['Float']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  start_time?: InputMaybe<Scalars['Date']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateQuizTrainingAssignmentStatusInput = {
  quizTrainingAssignmentId: Scalars['ID']['input'];
  status: TrainingAssignStatus;
};

export type UpdateShareAppInput = {
  authenticatorAppId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_opt_share: Scalars['Boolean']['input'];
  is_password_share: Scalars['Boolean']['input'];
  is_scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<EncryptedPasswordInput>;
  scheduled_for?: InputMaybe<Scalars['String']['input']>;
  share_as: ShareAsEnum;
  share_permissions: ShareAppPermissions;
};

export type UpdateWorkFlowInput = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  business: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  work_flow_levels: Array<WorkFlowLevelInput>;
  work_flow_type: WorkFlowTypeEnum;
};

export type UploadProgress = {
  __typename?: 'UploadProgress';
  fileName: Scalars['String']['output'];
  module: Scalars['String']['output'];
  percentage: Scalars['Int']['output'];
  status: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  Country?: Maybe<Country>;
  EmployeeGarnishment?: Maybe<Array<Maybe<EmployeeGarnishment>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  account_representive_code?: Maybe<Scalars['String']['output']>;
  account_status?: Maybe<Scalars['String']['output']>;
  account_title?: Maybe<Scalars['String']['output']>;
  action_create_date?: Maybe<Scalars['DateTime']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  additional_tax_override?: Maybe<Scalars['String']['output']>;
  additional_withholding_amount?: Maybe<Scalars['String']['output']>;
  address_1?: Maybe<Scalars['String']['output']>;
  address_2?: Maybe<Scalars['String']['output']>;
  adp?: Maybe<Scalars['String']['output']>;
  air_ticket?: Maybe<AirTicket>;
  allow_email?: Maybe<Scalars['Boolean']['output']>;
  allow_qr_code?: Maybe<Scalars['Boolean']['output']>;
  allow_sms?: Maybe<Scalars['Boolean']['output']>;
  allowances?: Maybe<Array<Maybe<AllowancesType>>>;
  altername?: Maybe<Scalars['String']['output']>;
  associated_customer?: Maybe<Scalars['String']['output']>;
  auth_pin?: Maybe<Scalars['String']['output']>;
  avatar_location?: Maybe<Scalars['String']['output']>;
  badge_code?: Maybe<Scalars['String']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  basic_salary?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['DateTime']['output']>;
  branch_code?: Maybe<Scalars['String']['output']>;
  business_id?: Maybe<Business>;
  city?: Maybe<City>;
  commision?: Maybe<Scalars['Float']['output']>;
  contributions?: Maybe<Array<Maybe<ContributionsType>>>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  custom_user?: Maybe<Scalars['String']['output']>;
  deductions?: Maybe<Array<Maybe<DeductionsType>>>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  department?: Maybe<Array<Maybe<Department>>>;
  designation?: Maybe<Designation>;
  documents_list?: Maybe<Array<Maybe<DocumentListType>>>;
  eligibility_date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employee_action_date?: Maybe<Scalars['DateTime']['output']>;
  employee_group?: Maybe<AttandencePolicy>;
  employee_home_address?: Maybe<Scalars['String']['output']>;
  employee_id?: Maybe<Scalars['String']['output']>;
  employee_status?: Maybe<Scalars['String']['output']>;
  employee_type?: Maybe<Scalars['String']['output']>;
  employee_work_address?: Maybe<Scalars['String']['output']>;
  exempt_any_state_tax?: Maybe<Scalars['Boolean']['output']>;
  extra_no?: Maybe<Scalars['String']['output']>;
  final_settlement_completed?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  hire_date?: Maybe<Scalars['DateTime']['output']>;
  history?: Maybe<Array<Maybe<UserHistory>>>;
  home_no?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  is_air_ticket?: Maybe<Scalars['Boolean']['output']>;
  is_allow_attendance?: Maybe<Scalars['Boolean']['output']>;
  is_app_authenticator?: Maybe<Scalars['Boolean']['output']>;
  is_attendance_rule_applied?: Maybe<Scalars['Boolean']['output']>;
  is_breaked_in?: Maybe<Scalars['Boolean']['output']>;
  is_breaktime_exception?: Maybe<Scalars['Boolean']['output']>;
  is_business_owner_requested_new_password?: Maybe<Scalars['Boolean']['output']>;
  is_clocked_in?: Maybe<Scalars['Boolean']['output']>;
  is_company?: Maybe<Scalars['Boolean']['output']>;
  is_customzied_overtime?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_earlyout?: Maybe<Scalars['Boolean']['output']>;
  is_email_verify?: Maybe<Scalars['Boolean']['output']>;
  is_enable_checkin_checkout_access?: Maybe<Scalars['Boolean']['output']>;
  is_excluding_pay_roll?: Maybe<Scalars['Boolean']['output']>;
  is_exempt_federal_tax?: Maybe<Scalars['Boolean']['output']>;
  is_exempt_from_withholding?: Maybe<Scalars['Boolean']['output']>;
  is_exempt_income_tax?: Maybe<Scalars['Boolean']['output']>;
  is_generate_joining_letter?: Maybe<Scalars['Boolean']['output']>;
  is_gratuity?: Maybe<Scalars['Boolean']['output']>;
  is_hours_in_a_day?: Maybe<Scalars['Boolean']['output']>;
  is_late_arrival?: Maybe<Scalars['Boolean']['output']>;
  is_leave_restriction?: Maybe<Scalars['Boolean']['output']>;
  is_medical_insurance?: Maybe<Scalars['Boolean']['output']>;
  is_missing_attendance?: Maybe<Scalars['Boolean']['output']>;
  is_navigated_user?: Maybe<Scalars['Boolean']['output']>;
  is_over_time_policy?: Maybe<Scalars['Boolean']['output']>;
  is_password_set?: Maybe<Scalars['Boolean']['output']>;
  is_payroll_run_on_business?: Maybe<Scalars['Boolean']['output']>;
  is_phone_verify?: Maybe<Scalars['Boolean']['output']>;
  is_profile_completed?: Maybe<Scalars['Boolean']['output']>;
  is_profile_updated?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  is_self_service_access?: Maybe<Scalars['Boolean']['output']>;
  is_send_email_notification?: Maybe<Scalars['Boolean']['output']>;
  is_store_wise?: Maybe<Scalars['Boolean']['output']>;
  is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  is_writeup_pending?: Maybe<Scalars['Boolean']['output']>;
  joining_date?: Maybe<Scalars['DateTime']['output']>;
  joining_latter?: Maybe<Joining_Latter>;
  landline?: Maybe<Scalars['String']['output']>;
  last_day_worked?: Maybe<Scalars['String']['output']>;
  last_login_at?: Maybe<Scalars['String']['output']>;
  last_login_ip?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_working_date?: Maybe<Scalars['DateTime']['output']>;
  leave_policy?: Maybe<LeavePolicy>;
  length_of_service?: Maybe<Scalars['String']['output']>;
  license_no?: Maybe<Scalars['String']['output']>;
  line_manager?: Maybe<User>;
  local_code?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  marital_status?: Maybe<Scalars['String']['output']>;
  medical_insurance?: Maybe<MedicalInsuranceType>;
  middle_name?: Maybe<Scalars['String']['output']>;
  mobile_no?: Maybe<Scalars['String']['output']>;
  mobile_no_to_send_sms?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  new_salary_effect_from?: Maybe<Scalars['DateTime']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  numberOfdays?: Maybe<Scalars['Int']['output']>;
  over_time_rate?: Maybe<Scalars['Float']['output']>;
  passport_number?: Maybe<Scalars['String']['output']>;
  password_changed_at?: Maybe<Scalars['String']['output']>;
  pay_schedule?: Maybe<PayrollSchedule>;
  pay_type?: Maybe<Scalars['String']['output']>;
  payout_frequency?: Maybe<Scalars['String']['output']>;
  payout_rate?: Maybe<Scalars['Float']['output']>;
  personal_email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_country_code?: Maybe<Scalars['String']['output']>;
  preffered_name?: Maybe<Scalars['String']['output']>;
  previous_leave_policy?: Maybe<LeavePolicy>;
  probation_period?: Maybe<Scalars['String']['output']>;
  profile_pictures?: Maybe<Array<Maybe<ProfilePictures>>>;
  profile_score?: Maybe<Scalars['Float']['output']>;
  pto_minutes?: Maybe<PtoMinutesType>;
  public_day_hourly_salary?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Array<Maybe<Region>>>;
  rocket_chat_id?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  routing_number?: Maybe<Scalars['String']['output']>;
  salaryHour?: Maybe<Scalars['Float']['output']>;
  salary_payment_method?: Maybe<Scalars['String']['output']>;
  salary_template?: Maybe<Scalars['String']['output']>;
  salary_type?: Maybe<Scalars['String']['output']>;
  sales_tax_allowances?: Maybe<Scalars['String']['output']>;
  seasonal_employee?: Maybe<Scalars['String']['output']>;
  send_order_email_to_parent?: Maybe<Scalars['String']['output']>;
  send_sales_order_email?: Maybe<Scalars['String']['output']>;
  shift?: Maybe<Shift>;
  ssn?: Maybe<Scalars['String']['output']>;
  ssn_last_four_digit?: Maybe<Scalars['String']['output']>;
  starting_date?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<State>;
  status?: Maybe<Scalars['String']['output']>;
  storeAccess?: Maybe<Array<Maybe<StoreAccessType>>>;
  subscribed_insurances?: Maybe<Array<Maybe<MedicalInsurancePackage>>>;
  support_name?: Maybe<Scalars['String']['output']>;
  swift_code?: Maybe<Scalars['String']['output']>;
  tax_override?: Maybe<Scalars['String']['output']>;
  tax_override_amount?: Maybe<Scalars['String']['output']>;
  termination_date?: Maybe<Scalars['DateTime']['output']>;
  termination_reason?: Maybe<Scalars['String']['output']>;
  time_off?: Maybe<Array<Maybe<TimeOffType>>>;
  total_allowances?: Maybe<Scalars['String']['output']>;
  total_week_hours?: Maybe<Scalars['Int']['output']>;
  two_fa_secret?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
  user_keeping_unit?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  users_password_manager?: Maybe<UserEncryptionKeys>;
  vehicle_no?: Maybe<Scalars['String']['output']>;
  vehicle_type?: Maybe<Scalars['String']['output']>;
  w4_form?: Maybe<Scalars['String']['output']>;
  weekend_day_salary?: Maybe<Scalars['String']['output']>;
  weekly_hourly_salary?: Maybe<Scalars['String']['output']>;
  withholding_status?: Maybe<Scalars['String']['output']>;
  work_email?: Maybe<Scalars['String']['output']>;
  work_no?: Maybe<Scalars['String']['output']>;
  writeup_date?: Maybe<Scalars['String']['output']>;
  writeup_message?: Maybe<Scalars['String']['output']>;
  writeup_type?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type UserAccural = {
  __typename?: 'UserAccural';
  User?: Maybe<User>;
  logs?: Maybe<Array<Maybe<AccuralLogs>>>;
  pto_minutes?: Maybe<PtoMinutesType>;
  time_off?: Maybe<Array<Maybe<TimeOffType>>>;
};

export type UserActivity = {
  __typename?: 'UserActivity';
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  access_type?: Maybe<Scalars['String']['output']>;
  application?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type UserDetailAccural = {
  __typename?: 'UserDetailAccural';
  User?: Maybe<User>;
  leave_type_details?: Maybe<Array<Maybe<AccuralDetailLogs>>>;
  logs?: Maybe<Array<Maybe<AccuralLogs>>>;
  pto_minutes?: Maybe<PtoMinutesType>;
  time_off?: Maybe<Array<Maybe<TimeOffType>>>;
};

export type UserEncryptionCopies = {
  __typename?: 'UserEncryptionCopies';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  encryption?: Maybe<Encryption>;
  from_user?: Maybe<User>;
  is_owner?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserEncryptionCopiesInput = {
  encryptionKeys?: InputMaybe<Array<EncryptionData>>;
  user: Scalars['ID']['input'];
};

export type UserEncryptionKeys = {
  __typename?: 'UserEncryptionKeys';
  encryptedPrivateKey?: Maybe<Scalars['String']['output']>;
  iv?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
};

export type UserHistory = {
  __typename?: 'UserHistory';
  account_status?: Maybe<Scalars['String']['output']>;
  action_create_date?: Maybe<Scalars['DateTime']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  back_pay_effected?: Maybe<Array<Maybe<UserHistory>>>;
  basic_salary?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Array<Maybe<Department>>>;
  employee?: Maybe<User>;
  employee_group?: Maybe<AttandencePolicy>;
  employee_type?: Maybe<Scalars['String']['output']>;
  hire_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_exclude_pay_roll?: Maybe<Scalars['String']['output']>;
  is_excluding_pay_roll?: Maybe<Scalars['Boolean']['output']>;
  is_salary_update?: Maybe<Scalars['Boolean']['output']>;
  is_under_back_pay?: Maybe<Scalars['Boolean']['output']>;
  is_use_new_salary?: Maybe<Scalars['Boolean']['output']>;
  joining_date?: Maybe<Scalars['DateTime']['output']>;
  line_manager?: Maybe<User>;
  new_salary_effect_from?: Maybe<Scalars['DateTime']['output']>;
  new_salary_effect_to?: Maybe<Scalars['DateTime']['output']>;
  over_time_hours?: Maybe<Scalars['Int']['output']>;
  over_time_rate?: Maybe<Scalars['Float']['output']>;
  pay_schedule?: Maybe<PayrollSchedule>;
  pay_type?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Previous>;
  public_day_hourly_salary?: Maybe<Scalars['Float']['output']>;
  region?: Maybe<Array<Maybe<Region>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  salary_type?: Maybe<Scalars['String']['output']>;
  shift?: Maybe<Shift>;
  starting_date?: Maybe<Scalars['DateTime']['output']>;
  storeAccess?: Maybe<Array<Maybe<StoreAccessType>>>;
  total_week_hours?: Maybe<Scalars['Int']['output']>;
  weekend_day_salary?: Maybe<Scalars['Float']['output']>;
  weekly_hourly_salary?: Maybe<Scalars['Float']['output']>;
};

export type UserRoster = {
  __typename?: 'UserRoster';
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  break_detail?: Maybe<Array<Maybe<BreakDetailType>>>;
  color?: Maybe<Scalars['String']['output']>;
  designations?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  employees?: Maybe<Array<Maybe<User>>>;
  end_date?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  is_published?: Maybe<Scalars['Boolean']['output']>;
  meal_break?: Maybe<Scalars['Float']['output']>;
  repeat?: Maybe<Repeat>;
  rest_break?: Maybe<Scalars['Float']['output']>;
  rosterStore?: Maybe<RosterStores>;
  start_date?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
};

export type UserWorkFlow = {
  __typename?: 'UserWorkFlow';
  _id?: Maybe<Scalars['ID']['output']>;
  logs?: Maybe<Array<Maybe<WorkFlows>>>;
  total_level?: Maybe<Scalars['Int']['output']>;
  work_flow_levels?: Maybe<Array<Maybe<Level>>>;
  work_flow_type?: Maybe<Scalars['String']['output']>;
};

export type ValidDiscount = {
  __typename?: 'ValidDiscount';
  coupon_amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Discount>;
  is_eligible: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
};

export type Vendor = {
  __typename?: 'Vendor';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<User>;
};

export enum ViewSchedule {
  Monthly = 'monthly',
  Weekly = 'weekly'
}

export type WorkFlowInput = {
  business: Scalars['ID']['input'];
  work_flow_levels: Array<WorkFlowLevelInput>;
  work_flow_type: WorkFlowTypeEnum;
};

export type WorkFlowLevelInput = {
  approval_level?: InputMaybe<Scalars['Int']['input']>;
  approval_to: ApprovalTo;
  employee?: InputMaybe<Scalars['ID']['input']>;
  level: Scalars['Int']['input'];
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type WriteUp = {
  __typename?: 'WriteUp';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  accept_assign_schedule?: Maybe<Scalars['Boolean']['output']>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approval_status?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  behalf_of?: Maybe<Array<Maybe<User>>>;
  business_manager?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  informed_hr?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_pending?: Maybe<Scalars['Boolean']['output']>;
  logs?: Maybe<Array<Maybe<LogsWriteUp>>>;
  status?: Maybe<Scalars['String']['output']>;
  work_flow?: Maybe<Array<Maybe<WorkFlow>>>;
  write_up_reason?: Maybe<Scalars['String']['output']>;
  write_up_source?: Maybe<Scalars['String']['output']>;
  write_up_type?: Maybe<Scalars['String']['output']>;
  writeup_date?: Maybe<Scalars['DateTime']['output']>;
  writeup_message?: Maybe<Scalars['String']['output']>;
};

export type WriteUpList = {
  __typename?: 'WriteUpList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<WriteUp>>>;
};

export enum WriteUpReason {
  AssistingTeam = 'ASSISTING_TEAM',
  BreakExtension = 'BREAK_EXTENSION',
  CoveringColleague = 'COVERING_COLLEAGUE',
  ExtendedLunch = 'EXTENDED_LUNCH',
  FamilyEmergency = 'FAMILY_EMERGENCY',
  FamilyIssue = 'FAMILY_ISSUE',
  LostTrackOfTime = 'LOST_TRACK_OF_TIME',
  MedicalIssues = 'MEDICAL_ISSUES',
  Miscommunication = 'MISCOMMUNICATION',
  MissedClockout = 'MISSED_CLOCKOUT',
  Other = 'OTHER',
  Overslept = 'OVERSLEPT',
  PersonalAppointment = 'PERSONAL_APPOINTMENT',
  PersonalCall = 'PERSONAL_CALL',
  PreArrangedWork = 'PRE_ARRANGED_WORK',
  ReligiousObservance = 'RELIGIOUS_OBSERVANCE',
  SickLeave = 'SICK_LEAVE',
  SupervisorApproved = 'SUPERVISOR_APPROVED',
  SupervisorRequest = 'SUPERVISOR_REQUEST',
  TasksCompleted = 'TASKS_COMPLETED',
  TaskCompletion = 'TASK_COMPLETION',
  Transportation = 'TRANSPORTATION',
  TravelIssue = 'TRAVEL_ISSUE',
  Unplanned = 'UNPLANNED',
  UnplannedAbsence = 'UNPLANNED_ABSENCE'
}

export type ZipCodeData = {
  __typename?: 'ZipCodeData';
  City?: Maybe<City>;
  Detail?: Maybe<HierarchicalDetail>;
  State?: Maybe<State>;
  _id?: Maybe<Scalars['ID']['output']>;
  city_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export enum _Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Scheduled = 'Scheduled'
}

export type _TimeOff = {
  __typename?: '_TimeOff';
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  category_color?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  from_date?: Maybe<Scalars['DateTime']['output']>;
  is_paid?: Maybe<Scalars['Boolean']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<TimeOff>;
};

export enum _Commission_Duration {
  LifeTime = 'life_time',
  ScheduleToFrom = 'schedule_to_from',
  TillDate = 'till_date'
}

export enum _Commission_Store {
  MultiStore = 'multi_store',
  SelectedStore = 'selected_store',
  SingleStore = 'single_store'
}

export enum _Commission_Type {
  ComissionOnGreaterThanOrEqualTo = 'comission_on_greater_than_or_equal_to',
  CommissionOnHighestSales = 'commission_on_highest_sales',
  CommissionOnMinimumDiscount = 'commission_on_minimum_discount',
  CommissionOnSaleExceedingMinimumPriceOfProduct = 'commission_on_sale_exceeding_minimum_price_of_product',
  CommissionPerSale = 'commission_per_sale'
}

export enum _Sale_Duration {
  Day = 'day',
  Month = 'month',
  Week = 'week'
}

export enum _Schedule {
  Absent = 'Absent',
  OverTime = 'OverTime',
  Paid = 'Paid',
  UnPaid = 'UnPaid'
}

export enum _SearchStatus {
  Active = 'Active',
  All = 'All',
  Disabled = 'Disabled',
  Expired = 'Expired',
  Scheduled = 'Scheduled'
}

export enum _TaskStatusEmums {
  Closed = 'closed',
  DueDate = 'due_date',
  InProgress = 'inProgress'
}

export type AccessoriesListFilter = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccessoriesTypeEnum>;
};

export enum AccessoriesTypeEnum {
  Accessory = 'accessory',
  QuickAccessory = 'quickAccessory'
}

export type AccountTypeInput = {
  is_editable: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export enum ActionTypeEnum {
  Decrement = 'Decrement',
  Increment = 'Increment',
  Other = 'Other',
  Promotion = 'Promotion',
  ReJoin = 'ReJoin',
  Transfer = 'Transfer',
  Adjustment = 'adjustment'
}

export enum ActivityFor {
  EmployeeAction = 'EmployeeAction',
  NewEmployee = 'NewEmployee'
}

export enum Activity_Type {
  Multiple = 'multiple',
  RequestDocument = 'request_document',
  ViewDocument = 'view_document'
}

export type AddAppraisalScale = {
  name?: InputMaybe<Scalars['String']['input']>;
  scale_group?: InputMaybe<Array<InputMaybe<ScaleGroupInput>>>;
  total_score?: InputMaybe<Scalars['Int']['input']>;
};

export type AddAttachmentInput = {
  _id: Scalars['ID']['input'];
  attachments: Array<Scalars['Upload']['input']>;
};

export type AddDocument = {
  docRef?: InputMaybe<Scalars['Upload']['input']>;
  subject_to?: InputMaybe<Scalars['String']['input']>;
  subscription_id?: InputMaybe<Scalars['String']['input']>;
};

export type AddDocumentInput = {
  activity_type?: InputMaybe<Activity_Type>;
  assign_to?: InputMaybe<AssignToInput>;
  attachment?: InputMaybe<Scalars['Upload']['input']>;
  business?: InputMaybe<Scalars['ID']['input']>;
  documentId?: InputMaybe<Scalars['ID']['input']>;
  document_type?: InputMaybe<DocumentType>;
  google_drive_attachment?: InputMaybe<Scalars['String']['input']>;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  is_choose_folder_allow?: InputMaybe<Scalars['Boolean']['input']>;
  is_document_submission_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_group?: InputMaybe<Scalars['Boolean']['input']>;
  is_hide_after_review?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_submission_required?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  validity?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddEmployee = {
  addEmployee?: InputMaybe<Scalars['Boolean']['input']>;
  employeeIds: Array<Scalars['ID']['input']>;
  roleId: Scalars['ID']['input'];
};

export type AddEmployeeIntoBusinessInput = {
  business_navigation_id: Scalars['ID']['input'];
  user_list: Array<InputMaybe<User_List_Input>>;
};

export type AddManualShortBreaksInput = {
  clockedHistoryId: Scalars['ID']['input'];
  short_break_detail?: InputMaybe<Array<InputMaybe<ShortBreakDetail>>>;
};

export type AddNewFolderDocumentControl = {
  bread_crum?: InputMaybe<Array<Scalars['ID']['input']>>;
  department?: InputMaybe<Scalars['ID']['input']>;
  employee?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  share_as?: InputMaybe<ShareDocumentroles>;
  type?: InputMaybe<AssignToEnums>;
};

export type AddSubTaskInput = {
  _id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type AddTerminalAppInput = {
  Business: Scalars['ID']['input'];
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  User?: InputMaybe<Scalars['ID']['input']>;
  authentication_type?: InputMaybe<Scalars['String']['input']>;
  device_name: Scalars['String']['input'];
  device_version?: InputMaybe<Scalars['String']['input']>;
  ip_address: Scalars['String']['input'];
  is_authenticated?: InputMaybe<Scalars['Boolean']['input']>;
  linked_at?: InputMaybe<Scalars['String']['input']>;
  mac_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DeviceStatusEnum>;
};

export type AddTerminalAppType = {
  __typename?: 'addTerminalAppType';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  User?: Maybe<User>;
  authentication_type?: Maybe<Scalars['String']['output']>;
  device_name?: Maybe<Scalars['String']['output']>;
  device_version?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  is_authenticated?: Maybe<Scalars['Boolean']['output']>;
  linked_at?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Adjustment_Detail = {
  __typename?: 'adjustment_detail';
  adjusted_amount?: Maybe<Scalars['Float']['output']>;
  adjusted_at?: Maybe<Scalars['DateTime']['output']>;
  adjusted_by?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  is_credit?: Maybe<Scalars['Boolean']['output']>;
};

export type AdvanceFilter = {
  __typename?: 'advanceFilter';
  Business?: Maybe<Business>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  filter_name?: Maybe<Scalars['String']['output']>;
  filters?: Maybe<Array<Maybe<ListingFiltersType>>>;
  list_type?: Maybe<Scalars['String']['output']>;
};

export type AlertData = {
  __typename?: 'alertData';
  date?: Maybe<Scalars['String']['output']>;
  isLeaveApplied?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  schedule_not_found?: Maybe<Scalars['Boolean']['output']>;
};

export type AlertListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AlertListingResult = {
  __typename?: 'alertListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Alert>>>;
};

export type AllAssigneeTasksInput = {
  assign: AssignEnum;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  priority?: InputMaybe<PriorityEmums>;
  search?: InputMaybe<Scalars['String']['input']>;
  status: TaskStatus;
  team_member?: InputMaybe<Scalars['ID']['input']>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllCategories = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type AllCategoriesList = {
  __typename?: 'allCategoriesList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<QuizCategory>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AllDesignationListingresult = {
  __typename?: 'allDesignationListingresult';
  result?: Maybe<Array<Maybe<Designation>>>;
};

export type AllDiscountInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AllDocumentListingResult = {
  __typename?: 'allDocumentListingResult';
  config?: Maybe<DataTableConfig>;
  countpendingRequest?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<DocumentControlAttachmenttWithData>>>;
};

export type AllDocumentsDataTableResult = {
  __typename?: 'allDocumentsDataTableResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
};

export type AllDocumentsResult = {
  __typename?: 'allDocumentsResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AllMyTasksInput = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterTask>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<PriorityEmums>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TaskStatusUpdateEmums>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllShareDocumentResults = {
  __typename?: 'allShareDocumentResults';
  departments?: Maybe<Array<Maybe<ShareFilteredResults>>>;
  employees?: Maybe<Array<Maybe<ShareFilteredResults>>>;
  roles?: Maybe<Array<Maybe<ShareFilteredResults>>>;
};

export type AllTasksInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  team_member?: InputMaybe<Scalars['ID']['input']>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllTasksListingResult = {
  __typename?: 'allTasksListingResult';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<TaskManagementWithData>>>;
};

export type AllowanceFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type AllowanceResult = {
  __typename?: 'allowanceResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Allowance>>>;
};

export type Allowances_Deductions = {
  __typename?: 'allowances_deductions';
  amount?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export enum AnimationSpeedEnum {
  Fast = 'fast',
  Medium = 'medium',
  Slow = 'slow'
}

export enum AppName {
  Terminal = 'terminal',
  User = 'user'
}

export enum AppType {
  Android = 'android',
  Ios = 'ios'
}

export enum AppTypes {
  TerminalApp = 'terminal_app',
  UserApp = 'user_app'
}

export type AppVersionInput = {
  app_name: AppName;
  app_type: AppType;
  app_version: Scalars['String']['input'];
};

export enum ApplicableEnum {
  Accessories = 'Accessories',
  Devices = 'Devices',
  Parts = 'Parts',
  Services = 'Services'
}

export enum Application_Type {
  TerminalApp = 'terminal_app',
  UserApp = 'user_app'
}

export type AppraisalEvaluation = {
  __typename?: 'appraisalEvaluation';
  ApraisalObjectiveAssignmnet?: Maybe<ObjectiveAssignment>;
  Business?: Maybe<Business>;
  PerformanceCycle?: Maybe<PerformanceCycleType>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  assignTo?: Maybe<User>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  designation?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  listProjects?: Maybe<Scalars['String']['output']>;
  milestone?: Maybe<Scalars['String']['output']>;
  objectiveAssigned?: Maybe<Array<Maybe<Objective_Assigned>>>;
  performanceGoals?: Maybe<Scalars['String']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  road_map?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  trainingRequired?: Maybe<Scalars['Boolean']['output']>;
  updated_by?: Maybe<User>;
  weight_percent?: Maybe<Scalars['Float']['output']>;
};

export type AppraisalEvaluationResult = {
  __typename?: 'appraisalEvaluationResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AppraisalEvaluation>>>;
};

export type AppraisalObjectiveResult = {
  __typename?: 'appraisalObjectiveResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AppraisalObjecive>>>;
};

export type AppraisalResult = {
  __typename?: 'appraisalResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AppraisalType>>>;
};

export type AppraisalScale = {
  __typename?: 'appraisalScale';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  is_custom_grade?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scale_group?: Maybe<Array<Maybe<ScaleGroup>>>;
  total_score?: Maybe<Scalars['Int']['output']>;
  updated_by?: Maybe<User>;
};

export type AppraisalScaleResult = {
  __typename?: 'appraisalScaleResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AppraisalScale>>>;
};

export type AppraisalSettingInput = {
  AppraisalScale?: InputMaybe<Scalars['ID']['input']>;
  AppraisalType?: InputMaybe<Scalars['ID']['input']>;
  assign_by?: InputMaybe<Scalars['ID']['input']>;
  objective?: InputMaybe<Scalars['Int']['input']>;
  weight_percent?: InputMaybe<Scalars['Int']['input']>;
};

export type AppraisalSettingType = {
  __typename?: 'appraisalSettingType';
  AppraisalScale?: Maybe<AppraisalScale>;
  AppraisalType?: Maybe<AppraisalType>;
  assign_by?: Maybe<User>;
  attendanceStatus?: Maybe<Array<Maybe<AttendanceStatusType>>>;
  objective?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Array<Maybe<TaskType>>>;
  weight_percent?: Maybe<Scalars['Int']['output']>;
};

export type AppraiserSettingInput = {
  AppraisalType?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  User?: InputMaybe<Scalars['ID']['input']>;
  appraiser_type?: InputMaybe<Scalars['String']['input']>;
  weight_percent?: InputMaybe<Scalars['Int']['input']>;
};

export type AppraiserSettingType = {
  __typename?: 'appraiserSettingType';
  AppraisalType?: Maybe<Array<Maybe<AppraisalType>>>;
  User?: Maybe<User>;
  appraiser_type?: Maybe<Scalars['String']['output']>;
  weight_percent?: Maybe<Scalars['Int']['output']>;
};

export type Approval = {
  __typename?: 'approval';
  approvalAttendance?: Maybe<Scalars['Int']['output']>;
  approvalExpense?: Maybe<Scalars['Int']['output']>;
  approvalLeave?: Maybe<Scalars['Int']['output']>;
  approvalLoan?: Maybe<Scalars['Int']['output']>;
  approvalWriteUp?: Maybe<Scalars['Int']['output']>;
};

export enum ApprovalTo {
  ApprovalFromLineManager = 'approval_from_lineManager',
  ApprovalToEmployee = 'approval_to_employee'
}

export enum ArchiveEnum {
  Active = 'active',
  Inactive = 'inactive'
}

export type ArchiveInput = {
  archive: Scalars['Boolean']['input'];
  attendance_date: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
};

export type ArchiveInvoiceInput = {
  archive: Scalars['Boolean']['input'];
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ArchiveMedicalInsuranceInput = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  medical_insurance_id?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ArchiveMedicalInsurancepackageInput = {
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  medical_insurance_package_id?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ArchiveRoleData = {
  deleteType: DeletedType;
  id: Scalars['ID']['input'];
};

export type ArchiveRosterByTypeInput = {
  _id: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type ArchiveRosterInput = {
  deleteType?: InputMaybe<Scalars['String']['input']>;
  empid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
};

export type ArchivedDocumentInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ArchivedEmployees = {
  __typename?: 'archivedEmployees';
  archived?: Maybe<Array<Maybe<User>>>;
  clockedIn?: Maybe<Array<Maybe<User>>>;
};

export type ArchivedIds = {
  __typename?: 'archivedIds';
  DeletedParentDocument?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  archived?: Maybe<Scalars['Boolean']['output']>;
};

export type AssetAlert = {
  __typename?: 'assetAlert';
  completed?: Maybe<Scalars['Int']['output']>;
  contract?: Maybe<Scalars['Int']['output']>;
  disposed?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  insurance?: Maybe<Scalars['Int']['output']>;
  leased?: Maybe<Scalars['Int']['output']>;
  maintenance?: Maybe<Scalars['Int']['output']>;
  onHold?: Maybe<Scalars['Int']['output']>;
  pastDue?: Maybe<Scalars['Int']['output']>;
  reserved?: Maybe<Scalars['Int']['output']>;
  scheduled?: Maybe<Scalars['Int']['output']>;
  scrap?: Maybe<Scalars['Int']['output']>;
  trashed?: Maybe<Scalars['Int']['output']>;
  warranty?: Maybe<Scalars['Int']['output']>;
};

export type AssetBranAndModel = {
  __typename?: 'assetBranAndModel';
  Business?: Maybe<Business>;
  _id?: Maybe<Scalars['ID']['output']>;
  asset_count?: Maybe<Scalars['Int']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<User>;
  deleted_by?: Maybe<User>;
  detail?: Maybe<AssetModelExtendView>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  model_counts?: Maybe<Scalars['Int']['output']>;
  updated_by?: Maybe<User>;
};

export type AssetCount = {
  __typename?: 'assetCount';
  allAssets?: Maybe<Scalars['Int']['output']>;
  assigned?: Maybe<Scalars['Int']['output']>;
  disposed?: Maybe<Scalars['Int']['output']>;
  maintenance?: Maybe<Scalars['Int']['output']>;
  reserved?: Maybe<Scalars['Int']['output']>;
  unAssigned?: Maybe<Scalars['Int']['output']>;
};

export type AssetIds = {
  id?: InputMaybe<Scalars['ID']['input']>;
  serialNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AssetListFilter = {
  assetColumns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  filterAsset?: InputMaybe<FilterAsset>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  is_report?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AssetTypeInputEnum>;
};

export type AssetListingResult = {
  __typename?: 'assetListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Asset>>>;
};

export type AssetModelExtendView = {
  __typename?: 'assetModelExtendView';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<AssetModel>>>;
};

export enum AssetTypeEnum {
  Accessory = 'accessory',
  Asset = 'asset'
}

export enum AssetTypeInputEnum {
  Asset = 'asset',
  QuickAsset = 'quickAsset'
}

export type Assets = {
  __typename?: 'assets';
  allAssets?: Maybe<Scalars['Int']['output']>;
  assigned?: Maybe<Scalars['Int']['output']>;
  disposed?: Maybe<Scalars['Int']['output']>;
  maintenance?: Maybe<Scalars['Int']['output']>;
  reserved?: Maybe<Scalars['Int']['output']>;
  unAssigned?: Maybe<Scalars['Int']['output']>;
};

export type AssetsListingResult = {
  __typename?: 'assetsListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Asset>>>;
};

export type AssignCategorySectionType = {
  __typename?: 'assignCategorySectionType';
  QuizCategory?: Maybe<QuizCategory>;
  section_questions: Array<AssignQuestionSectionType>;
};

export enum AssignEnum {
  AssignToMe = 'assign_to_me',
  AssignedByMe = 'assigned_by_me',
  MyTasks = 'my_tasks'
}

export type AssignInput = {
  employee_id: Scalars['ID']['input'];
  employees: Array<Scalars['ID']['input']>;
  end_date: Scalars['DateTime']['input'];
  start_date: Scalars['DateTime']['input'];
};

export type AssignLeavePolicyInput = {
  _id: Scalars['ID']['input'];
  assign_to: Array<AssignToPolicyInput>;
};

export type AssignRoleInput = {
  employees: Array<Scalars['ID']['input']>;
  role: Scalars['ID']['input'];
};

export enum AssignToEnums {
  Department = 'Department',
  Employees = 'Employees',
  Roles = 'Roles'
}

export type AssignToInput = {
  assignee?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<AssignToEnums>;
};

export type AssignToMeTaskResult = {
  __typename?: 'assignToMeTaskResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AssignToPolicyInput = {
  employee: Scalars['ID']['input'];
  extra_taken: Scalars['Float']['input'];
  is_unpaid: Scalars['Boolean']['input'];
  pto_minutes?: InputMaybe<Pto_MinutesType_Input>;
  time_off: Array<TimeOffEmployeeInput>;
};

export type AssignToType = {
  __typename?: 'assignToType';
  assignee?: Maybe<Array<Maybe<User>>>;
  department?: Maybe<Department>;
  roles?: Maybe<Array<Maybe<Role>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AssignUsersToQuizAndTrainingInput = {
  Department?: InputMaybe<Array<Scalars['ID']['input']>>;
  Role?: InputMaybe<Array<Scalars['ID']['input']>>;
  assignTo: Array<Scalars['ID']['input']>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  evaluate_by: Array<Scalars['ID']['input']>;
  started_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum AssignedType {
  Department = 'department',
  Employee = 'employee',
  Other = 'other',
  Site = 'site'
}

export type AssigneeTaskListingResult = {
  __typename?: 'assigneeTaskListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
};

export type AssigneeTaskResult = {
  __typename?: 'assigneeTaskResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AssinByMeTaskResult = {
  __typename?: 'assinByMeTaskResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AsssignAssetResult = {
  __typename?: 'asssignAssetResult';
  accessories?: Maybe<Array<Maybe<Asset>>>;
  assets?: Maybe<Array<Maybe<Asset>>>;
};

export type AttachmentListingResult = {
  __typename?: 'attachmentListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Attachment>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AttandencePolicy = {
  __typename?: 'attandencePolicy';
  AttendancePolicy?: Maybe<AttandencePolicy>;
  Business?: Maybe<Business>;
  How_are_leaves_deducted?: Maybe<Scalars['String']['output']>;
  RecurrenceRule?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  apply_penalty_employee_daily_salary?: Maybe<Scalars['Int']['output']>;
  attendance_after_days?: Maybe<Scalars['Int']['output']>;
  attendance_rule?: Maybe<Scalars['String']['output']>;
  attendance_rule_effective_from?: Maybe<Scalars['DateTime']['output']>;
  base?: Maybe<Scalars['String']['output']>;
  before_early_clockin?: Maybe<Scalars['Int']['output']>;
  block_employee_account_after?: Maybe<Scalars['Int']['output']>;
  block_employee_account_after_days?: Maybe<Scalars['Int']['output']>;
  block_employee_default_message?: Maybe<Scalars['String']['output']>;
  block_user?: Maybe<Scalars['Boolean']['output']>;
  block_user_acount_number_breaks?: Maybe<Scalars['Int']['output']>;
  break_deduct_salary_for_every_minuts?: Maybe<Scalars['Int']['output']>;
  break_deduct_salary_for_every_per_minuts?: Maybe<Scalars['Int']['output']>;
  break_grace_period?: Maybe<Scalars['Boolean']['output']>;
  break_modify_message?: Maybe<Scalars['String']['output']>;
  breaks?: Maybe<Scalars['String']['output']>;
  clock_out_grace_period?: Maybe<Scalars['Boolean']['output']>;
  deafult_message_earlyOut?: Maybe<Scalars['Boolean']['output']>;
  deafult_missing_attendance_message?: Maybe<Scalars['Boolean']['output']>;
  deduct_annually_minuts?: Maybe<Scalars['Int']['output']>;
  deduct_days?: Maybe<Scalars['Int']['output']>;
  deduct_days_of_leave_incidents?: Maybe<Scalars['Int']['output']>;
  deduct_leave?: Maybe<Scalars['Int']['output']>;
  deduct_salary_for_every?: Maybe<Scalars['Int']['output']>;
  deduct_salary_for_every_per_minuts?: Maybe<Scalars['Int']['output']>;
  deduction_based?: Maybe<Scalars['String']['output']>;
  default_message_early?: Maybe<Scalars['Boolean']['output']>;
  department?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  detail?: Maybe<EmployeeDetail>;
  earlyOut_deduct_based_on?: Maybe<Scalars['String']['output']>;
  earlyOut_deduct_salary_incidents?: Maybe<Scalars['Boolean']['output']>;
  earlyOut_maximum_early_time?: Maybe<Scalars['Int']['output']>;
  early_clockin?: Maybe<Scalars['Boolean']['output']>;
  employeeIds?: Maybe<Scalars['Int']['output']>;
  employee_type?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  employesCount?: Maybe<Scalars['Int']['output']>;
  employesId?: Maybe<Array<Maybe<User>>>;
  for_every_incidents_late_coming?: Maybe<Scalars['Int']['output']>;
  grace_period?: Maybe<Scalars['Int']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  hours_penalize_deduct_leave?: Maybe<Scalars['Boolean']['output']>;
  is_auto_clocked_in?: Maybe<Scalars['Boolean']['output']>;
  is_auto_miss_punch_writeup?: Maybe<Scalars['Boolean']['output']>;
  is_clocked_in_from_app?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_email_for_miss_punch?: Maybe<Scalars['Boolean']['output']>;
  is_email_to_employee?: Maybe<Scalars['Boolean']['output']>;
  is_email_to_line_manager?: Maybe<Scalars['Boolean']['output']>;
  is_exclude_grace_time_in_working_hours?: Maybe<Scalars['Boolean']['output']>;
  is_paid_for_extra_time?: Maybe<Scalars['Boolean']['output']>;
  is_paid_weekend?: Maybe<Scalars['Boolean']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  is_weekend_mode?: Maybe<Scalars['Boolean']['output']>;
  is_weekend_premium_after_limit?: Maybe<Scalars['Boolean']['output']>;
  is_weekend_premium_before_limit?: Maybe<Scalars['Boolean']['output']>;
  lateOut_maximum_late_time?: Maybe<Scalars['Int']['output']>;
  lateOut_message?: Maybe<Scalars['Boolean']['output']>;
  lateOut_message_late_time?: Maybe<Scalars['String']['output']>;
  late_clockin?: Maybe<Scalars['Boolean']['output']>;
  late_clockin_deduction?: Maybe<Scalars['String']['output']>;
  late_coming_incidents?: Maybe<Scalars['String']['output']>;
  maximum_absent_modify_message?: Maybe<Scalars['String']['output']>;
  maximum_emp_absent?: Maybe<Scalars['Boolean']['output']>;
  maximum_emp_message?: Maybe<Scalars['Boolean']['output']>;
  maximum_emp_time?: Maybe<Scalars['Int']['output']>;
  maximum_late_modify_message?: Maybe<Scalars['String']['output']>;
  maximum_late_time?: Maybe<Scalars['Boolean']['output']>;
  maximum_late_time_deduction_after_minutes?: Maybe<Scalars['Int']['output']>;
  maximum_late_time_message?: Maybe<Scalars['Boolean']['output']>;
  maximum_no_days?: Maybe<Scalars['Int']['output']>;
  messge_earlyOut?: Maybe<Scalars['String']['output']>;
  minuts_period_break_in_out?: Maybe<Scalars['Int']['output']>;
  missing_attendance_message?: Maybe<Scalars['String']['output']>;
  modify_message_early?: Maybe<Scalars['String']['output']>;
  over_time_hours?: Maybe<Scalars['Int']['output']>;
  over_time_rate?: Maybe<Scalars['Float']['output']>;
  overtime?: Maybe<Scalars['String']['output']>;
  overtime_by_employeeType?: Maybe<Scalars['String']['output']>;
  paunch_out_mnts?: Maybe<Scalars['Int']['output']>;
  pay_type?: Maybe<PayrollSchedule>;
  penalize_deduct_leave?: Maybe<Scalars['Boolean']['output']>;
  percentage_Base?: Maybe<Scalars['String']['output']>;
  percentage_base_no_of_days?: Maybe<Scalars['Int']['output']>;
  percentage_base_percentage_of_hourse?: Maybe<Scalars['Float']['output']>;
  plenty_base?: Maybe<Scalars['String']['output']>;
  repeat?: Maybe<Scalars['String']['output']>;
  send_break_email_to_employee?: Maybe<Scalars['Boolean']['output']>;
  send_break_email_to_line_manager?: Maybe<Scalars['Boolean']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_hours?: Maybe<Scalars['Int']['output']>;
  wagebased?: Maybe<Scalars['Boolean']['output']>;
  wagebased_on?: Maybe<Scalars['String']['output']>;
  weekEndDays?: Maybe<Array<Maybe<WeekEndDaysRetun>>>;
  week_number?: Maybe<Scalars['Int']['output']>;
  working_days?: Maybe<Scalars['Int']['output']>;
};

export type AttandencePolicyListFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type AttandencePolicyUpdate = {
  Business?: InputMaybe<Scalars['String']['input']>;
  How_are_leaves_deducted?: InputMaybe<Scalars['String']['input']>;
  apply_penalty_employee_daily_salary?: InputMaybe<Scalars['Int']['input']>;
  attendance_after_days?: InputMaybe<Scalars['Int']['input']>;
  attendance_rule?: InputMaybe<Scalars['String']['input']>;
  base?: InputMaybe<Scalars['String']['input']>;
  before_early_clockin?: InputMaybe<Scalars['Int']['input']>;
  block_employee_account_after?: InputMaybe<Scalars['Int']['input']>;
  block_employee_account_after_days?: InputMaybe<Scalars['Int']['input']>;
  block_employee_default_message?: InputMaybe<Scalars['String']['input']>;
  block_user?: InputMaybe<Scalars['Boolean']['input']>;
  block_user_acount_number_breaks?: InputMaybe<Scalars['Int']['input']>;
  break_deduct_salary_for_every_minuts?: InputMaybe<Scalars['Int']['input']>;
  break_deduct_salary_for_every_per_minuts?: InputMaybe<Scalars['Int']['input']>;
  break_grace_period?: InputMaybe<Scalars['Boolean']['input']>;
  break_modify_message?: InputMaybe<Scalars['String']['input']>;
  breaks?: InputMaybe<Scalars['String']['input']>;
  clock_out_grace_period?: InputMaybe<Scalars['Boolean']['input']>;
  deafult_message_earlyOut?: InputMaybe<Scalars['Boolean']['input']>;
  deafult_missing_attendance_message?: InputMaybe<Scalars['Boolean']['input']>;
  deduct_annually_minuts?: InputMaybe<Scalars['Int']['input']>;
  deduct_days?: InputMaybe<Scalars['Int']['input']>;
  deduct_days_of_leave_incidents?: InputMaybe<Scalars['Int']['input']>;
  deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  deduct_leave_time?: InputMaybe<Scalars['String']['input']>;
  deduct_salary_for_every?: InputMaybe<Scalars['Int']['input']>;
  deduct_salary_for_every_per_minuts?: InputMaybe<Scalars['Int']['input']>;
  deduction_based?: InputMaybe<Scalars['String']['input']>;
  default_message_early?: InputMaybe<Scalars['Boolean']['input']>;
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  earlyOut_deduct_based_on?: InputMaybe<Scalars['String']['input']>;
  earlyOut_deduct_salary_incidents?: InputMaybe<Scalars['Boolean']['input']>;
  earlyOut_maximum_early_time?: InputMaybe<Scalars['Int']['input']>;
  early_clockin?: InputMaybe<Scalars['Boolean']['input']>;
  employee_type?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  employesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  for_every_incidents_late_coming?: InputMaybe<Scalars['Int']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  grace_period?: InputMaybe<Scalars['Int']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  hours_penalize_deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  is_auto_clocked_in?: InputMaybe<Scalars['Boolean']['input']>;
  is_auto_miss_punch_writeup?: InputMaybe<Scalars['Boolean']['input']>;
  is_clocked_in_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_to_employee?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_to_line_manager?: InputMaybe<Scalars['Boolean']['input']>;
  is_exclude_grace_time_in_working_hours?: InputMaybe<Scalars['Boolean']['input']>;
  is_paid_for_extra_time?: InputMaybe<Scalars['Boolean']['input']>;
  is_paid_weekend?: InputMaybe<Scalars['Boolean']['input']>;
  is_un_restricted: Scalars['Boolean']['input'];
  is_weekend_mode: Scalars['Boolean']['input'];
  is_weekend_premium_after_limit?: InputMaybe<Scalars['Boolean']['input']>;
  is_weekend_premium_before_limit?: InputMaybe<Scalars['Boolean']['input']>;
  lateOut_maximum_late_time?: InputMaybe<Scalars['Int']['input']>;
  lateOut_message?: InputMaybe<Scalars['Boolean']['input']>;
  lateOut_message_late_time?: InputMaybe<Scalars['String']['input']>;
  late_clockin?: InputMaybe<Scalars['Boolean']['input']>;
  late_clockin_deduction?: InputMaybe<Scalars['String']['input']>;
  late_coming_incidents?: InputMaybe<Scalars['String']['input']>;
  maximum_absent_modify_message?: InputMaybe<Scalars['String']['input']>;
  maximum_emp_absent?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_emp_message?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_emp_time?: InputMaybe<Scalars['Int']['input']>;
  maximum_late_modify_message?: InputMaybe<Scalars['String']['input']>;
  maximum_late_time?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_late_time_deduction_after_minutes?: InputMaybe<Scalars['Int']['input']>;
  maximum_late_time_message?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_no_days?: InputMaybe<Scalars['Int']['input']>;
  messge_earlyOut?: InputMaybe<Scalars['String']['input']>;
  minuts_period_break_in_out?: InputMaybe<Scalars['Int']['input']>;
  missing_attendance_message?: InputMaybe<Scalars['String']['input']>;
  modify_message_early?: InputMaybe<Scalars['String']['input']>;
  over_time_hours?: InputMaybe<Scalars['Int']['input']>;
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  overtime?: InputMaybe<Scalars['String']['input']>;
  overtime_by_employeeType?: InputMaybe<Scalars['String']['input']>;
  paunch_out_mnts?: InputMaybe<Scalars['Int']['input']>;
  pay_type: Scalars['ID']['input'];
  penalize_deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  percentage_Base?: InputMaybe<Scalars['String']['input']>;
  percentage_base_no_of_days?: InputMaybe<Scalars['Int']['input']>;
  percentage_base_percentage_of_hourse?: InputMaybe<Scalars['Int']['input']>;
  plenty_base?: InputMaybe<Scalars['String']['input']>;
  send_break_email_to_employee?: InputMaybe<Scalars['Boolean']['input']>;
  send_break_email_to_line_manager?: InputMaybe<Scalars['Boolean']['input']>;
  wagebased?: InputMaybe<Scalars['Boolean']['input']>;
  wagebased_on?: InputMaybe<Scalars['String']['input']>;
  weekEndDays?: InputMaybe<Array<InputMaybe<WeekEndDays>>>;
  working_days?: InputMaybe<Scalars['Int']['input']>;
};

export type AttendanceFilter = {
  attendance_date?: InputMaybe<Scalars['DateTime']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum AttendanceFilters {
  Absent = 'Absent',
  All = 'All',
  Archive = 'Archive',
  Block = 'Block',
  EarlyOut = 'EarlyOut',
  LateOut = 'LateOut',
  Lateness = 'Lateness',
  Present = 'Present',
  ShortTime = 'ShortTime',
  Leave = 'leave',
  PublicHoliday = 'publicHoliday'
}

export type AttendanceListExtendedresult = {
  __typename?: 'attendanceListExtendedresult';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<AttandencePolicy>>>;
};

export type AttendanceListFilter = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status: AttendancePolicyStatusFilter;
};

export type AttendanceListFilters = {
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AttendanceFilters>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttendanceListWithStatus = {
  employee?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttendanceWithStatus>;
  store_id?: InputMaybe<Scalars['ID']['input']>;
};

export type AttendanceListingResult = {
  __typename?: 'attendanceListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Attendance>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type AttendanceListingresult = {
  __typename?: 'attendanceListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AttandencePolicy>>>;
};

export type AttendanceLogDetail = {
  __typename?: 'attendanceLogDetail';
  clock_in_time?: Maybe<Scalars['String']['output']>;
  clock_out_time?: Maybe<Scalars['String']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  logged_hours?: Maybe<Scalars['String']['output']>;
  logged_minutes?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  wages?: Maybe<Scalars['Float']['output']>;
};

export type AttendanceLogDetailInput = {
  clock_in_time?: InputMaybe<Scalars['String']['input']>;
  clock_out_time?: InputMaybe<Scalars['String']['input']>;
};

export type AttendanceResult = {
  __typename?: 'attendanceResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AttendanceRegulation>>>;
};

export enum AttendanceStatus {
  EarlyClockin = 'EarlyClockin',
  Absent = 'absent',
  Accepted = 'accepted',
  EarlyClockedOut = 'earlyClockedOut',
  LateOut = 'lateOut',
  Lateness = 'lateness',
  OnLeave = 'onLeave',
  Present = 'present',
  Rejected = 'rejected'
}

export type AttendanceStatusType = {
  __typename?: 'attendanceStatusType';
  Clockin?: Maybe<Scalars['Float']['output']>;
  EarlyBreak?: Maybe<Scalars['Float']['output']>;
  GraceLateBreak?: Maybe<Scalars['Float']['output']>;
  LateBreak?: Maybe<Scalars['Float']['output']>;
  LateOutBreak?: Maybe<Scalars['Float']['output']>;
  WritupEarlyOut?: Maybe<Scalars['Float']['output']>;
  WritupLateIn?: Maybe<Scalars['Float']['output']>;
  WritupLateOut?: Maybe<Scalars['Float']['output']>;
  WritupMisspunchout?: Maybe<Scalars['Float']['output']>;
  absent?: Maybe<Scalars['Int']['output']>;
  attendenceHours?: Maybe<Scalars['Float']['output']>;
  block?: Maybe<Scalars['Float']['output']>;
  breakIn?: Maybe<Scalars['Float']['output']>;
  breakOut?: Maybe<Scalars['Float']['output']>;
  clockHistoryCount?: Maybe<Scalars['Float']['output']>;
  earlyIn?: Maybe<Scalars['Int']['output']>;
  earlyOut?: Maybe<Scalars['Int']['output']>;
  late?: Maybe<Scalars['Int']['output']>;
  lateOut?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  leave?: Maybe<Scalars['Int']['output']>;
  onTime?: Maybe<Scalars['Int']['output']>;
  onTimeOut?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  totalHours?: Maybe<Scalars['Float']['output']>;
  total_hours_logged?: Maybe<Scalars['Float']['output']>;
};

export enum AttendanceWithStatus {
  Absent = 'Absent',
  All = 'All',
  Block = 'Block',
  EarlyIn = 'EarlyIn',
  EarlyOut = 'EarlyOut',
  LateOut = 'LateOut',
  Lateness = 'Lateness',
  MissPaunchOut = 'MissPaunchOut',
  OnTimeOut = 'OnTimeOut',
  Present = 'Present',
  ShortLeave = 'ShortLeave',
  ShortTime = 'ShortTime',
  Leave = 'leave',
  OnTime = 'onTime',
  PaidLeave = 'paidLeave',
  PublicHoliday = 'publicHoliday',
  UnpaidLeave = 'unpaidLeave',
  Weekend = 'weekend'
}

export type AuthenticatorAppInfo = {
  __typename?: 'authenticatorAppInfo';
  label?: Maybe<Scalars['String']['output']>;
  qr_url?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

export type AuthenticorResult = {
  __typename?: 'authenticorResult';
  authentictorsEmployees?: Maybe<Array<Maybe<User>>>;
  unAuthentictorsEmployees?: Maybe<Array<Maybe<User>>>;
};

export type BackPayInput = {
  action_type: BackPayType;
  basic_salary?: InputMaybe<Scalars['Float']['input']>;
  employee: Scalars['ID']['input'];
  employee_group: Scalars['ID']['input'];
  employee_type: Scalars['String']['input'];
  from_date: Scalars['String']['input'];
  is_email_notify?: InputMaybe<Scalars['Boolean']['input']>;
  is_pay_now: Scalars['Boolean']['input'];
  is_update_timesheet: Scalars['Boolean']['input'];
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  pay_schedule: Scalars['ID']['input'];
  public_day_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
  salary_type: EmployeeType;
  to_date?: InputMaybe<Scalars['String']['input']>;
  total_week_hours?: InputMaybe<Scalars['Int']['input']>;
  weekend_day_salary?: InputMaybe<Scalars['Float']['input']>;
  weekly_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
};

export enum BackPayType {
  Increment = 'increment'
}

export type Billing_Details = {
  __typename?: 'billing_details';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandList = {
  __typename?: 'brandList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<AssetBranAndModel>>>;
};

export type BrandResult = {
  __typename?: 'brandResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Brand>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type BreakDetail = {
  break_duration: Scalars['Int']['input'];
  break_end_time?: InputMaybe<Scalars['String']['input']>;
  break_start_time?: InputMaybe<Scalars['String']['input']>;
  break_type: Scalars['ID']['input'];
  is_break_start_time: Scalars['Boolean']['input'];
};

export type BreakDetailType = {
  __typename?: 'breakDetailType';
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_end_time?: Maybe<Scalars['String']['output']>;
  break_start_time?: Maybe<Scalars['String']['output']>;
  break_type?: Maybe<MasterDataValue>;
  is_break_start_time?: Maybe<Scalars['Boolean']['output']>;
};

export type BreakIn = {
  __typename?: 'breakIn';
  previous_state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export type BreakLogs = {
  __typename?: 'breakLogs';
  break_id?: Maybe<MasterDataValue>;
  break_in?: Maybe<BreakIn>;
  break_name?: Maybe<Scalars['String']['output']>;
  break_out?: Maybe<BreakOut>;
};

export type BreakOut = {
  __typename?: 'breakOut';
  previous_state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export type BreakTime = {
  __typename?: 'breakTime';
  breakName?: Maybe<Scalars['String']['output']>;
  breakType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  totalTime?: Maybe<Scalars['Int']['output']>;
};

export type Break_Details = {
  __typename?: 'break_details';
  breakID?: Maybe<Scalars['String']['output']>;
  breakType?: Maybe<Scalars['String']['output']>;
  breakTypeID?: Maybe<Scalars['String']['output']>;
  break_in_time?: Maybe<Scalars['String']['output']>;
};

export type Breaks = {
  breakId: Scalars['ID']['input'];
  breakName: Scalars['String']['input'];
  breakType: Scalars['String']['input'];
  break_duration: Scalars['Int']['input'];
  break_in_time?: InputMaybe<Scalars['String']['input']>;
  break_out_time?: InputMaybe<Scalars['String']['input']>;
  minimum_break_percentage?: InputMaybe<Scalars['Int']['input']>;
};

export type BuinsessLocationlistingResult = {
  __typename?: 'buinsessLocationlistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<BusinessLocation>>>;
};

export type BuinsesslistingResult = {
  __typename?: 'buinsesslistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Business>>>;
};

export type BusinessListFilter = {
  businessType?: InputMaybe<AllowBusinessType>;
  business_id?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessLocationListFilter = {
  business_id: Scalars['ID']['input'];
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  store_type?: InputMaybe<StoreTypeEnum>;
};

export enum BusinessNavigationStatusEnum {
  Accepted = 'accepted',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type BusinessPermissionsbytype = {
  __typename?: 'businessPermissionsbytype';
  adminPermission?: Maybe<Array<Maybe<ModulesFeaturesPermissions>>>;
  posPermissions?: Maybe<Array<Maybe<ModulesFeaturesPermissions>>>;
};

export type BusinessRadius = {
  __typename?: 'businessRadius';
  radius?: Maybe<Scalars['Float']['output']>;
};

export type BusinessRegistration = {
  address?: InputMaybe<Scalars['String']['input']>;
  business_identification_number?: InputMaybe<Scalars['String']['input']>;
  business_identification_type?: InputMaybe<Scalars['String']['input']>;
  business_legal_name: Scalars['String']['input'];
  business_logo?: InputMaybe<Scalars['Upload']['input']>;
  business_system_name: Scalars['String']['input'];
  business_type?: InputMaybe<Scalars['String']['input']>;
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_number?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  confirm_password?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['ID']['input'];
  currency_format?: InputMaybe<Scalars['String']['input']>;
  currency_name?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  date_format?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  expiration_month?: InputMaybe<Scalars['String']['input']>;
  expiration_year?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  is_24_hour_format?: InputMaybe<Scalars['Boolean']['input']>;
  is_custom_package: Scalars['Boolean']['input'];
  is_email_verify?: InputMaybe<Scalars['Boolean']['input']>;
  is_phone_verify?: InputMaybe<Scalars['Boolean']['input']>;
  landline?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  number_of_customer?: InputMaybe<Scalars['Int']['input']>;
  number_of_employee?: InputMaybe<Scalars['Int']['input']>;
  number_of_product?: InputMaybe<Scalars['Int']['input']>;
  number_of_repair_tickets?: InputMaybe<Scalars['Int']['input']>;
  number_of_stores?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  phone_country_code?: InputMaybe<Scalars['String']['input']>;
  request_for_franchise?: InputMaybe<Scalars['Boolean']['input']>;
  request_to?: InputMaybe<Scalars['ID']['input']>;
  sales_volume?: InputMaybe<Scalars['String']['input']>;
  sample_data?: InputMaybe<Array<InputMaybe<UpdateSampleDataInput>>>;
  save_card?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['ID']['input']>;
  time_zone: Scalars['String']['input'];
  types_of_products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  what_mostly_sell?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessStoreInput = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  business_location_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum BusinessType {
  Franchiser = 'franchiser',
  FranchiserOem = 'franchiser_OEM',
  IndependentBusiness = 'independent_business'
}

export type BusniessId = {
  __typename?: 'busniessId';
  _id?: Maybe<Scalars['ID']['output']>;
};

export type CampaignInput = {
  business: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignsListingResult = {
  __typename?: 'campaignsListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Campaign>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type CampaignsListingResultNew = {
  __typename?: 'campaignsListingResultNew';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<CompaignData>>>;
};

export type Card = {
  __typename?: 'card';
  brand?: Maybe<Scalars['String']['output']>;
  checks?: Maybe<Checks>;
  country?: Maybe<Scalars['String']['output']>;
  exp_month?: Maybe<Scalars['Int']['output']>;
  exp_year?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
};

export type CardsDetail = {
  __typename?: 'cardsDetail';
  cards?: Maybe<Array<Maybe<GetPaymentMethod>>>;
  default?: Maybe<Scalars['String']['output']>;
};

export enum CarryForwardEnum {
  CarryForward = 'CarryForward'
}

export enum CarryForwardTypeEnum {
  Percentage = 'Percentage',
  Unit = 'Unit'
}

export type CashDemoninationInput = {
  qty?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['Float']['input']>;
};

export type CashDrawerInput = {
  BusinessLocation: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  cashRegister: Scalars['ID']['input'];
  clockin_pin: Scalars['Int']['input'];
  drawerType: OpenCashDrawerType;
  remarks: Scalars['String']['input'];
};

export enum CashFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type CashRegisterInput = {
  BusinessLocation: Scalars['ID']['input'];
  closed_at?: InputMaybe<Scalars['String']['input']>;
  closing_amount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_amount?: InputMaybe<Scalars['Float']['input']>;
  status: CashRegisterStatus;
};

export type CashRegisterListFilter = {
  businessLocation: Scalars['ID']['input'];
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export enum CashRegisterStatus {
  Close = 'close',
  Open = 'open'
}

export enum CashRegisterTypeEnum {
  Deposit = 'Deposit',
  Withdraw = 'Withdraw'
}

export type CashRegisterlistingResult = {
  __typename?: 'cashRegisterlistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<CashRegisters>>>;
};

export type CashRegistersHistoryInput = {
  BusinessLocation: Scalars['ID']['input'];
  businessLocation: Scalars['ID']['input'];
  cashRegisters: Scalars['ID']['input'];
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payment_type: PaymentTypeEnum;
  previous_amount?: InputMaybe<Scalars['Float']['input']>;
  transaction_amount: Scalars['Float']['input'];
  type: CashRegisterTypeEnum;
  updated_amount?: InputMaybe<Scalars['Float']['input']>;
};

export type CategoryData = {
  __typename?: 'categoryData';
  _id?: Maybe<Scalars['ID']['output']>;
  assigned_asset_count?: Maybe<Scalars['Int']['output']>;
  detail?: Maybe<SubCategoryDetail>;
  dispose_asset_count?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  maintenance_asset_count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reserved_asset_count?: Maybe<Scalars['Int']['output']>;
  scrap_asset_count?: Maybe<Scalars['Int']['output']>;
  subCategory?: Maybe<Array<Maybe<AssetSubCategory>>>;
  subCategoryCount?: Maybe<Scalars['Int']['output']>;
  totalActualCost?: Maybe<Scalars['Float']['output']>;
  totalCurrentValue?: Maybe<Scalars['Float']['output']>;
  totalDepreciationValue?: Maybe<Scalars['Float']['output']>;
  trashed_asset_count?: Maybe<Scalars['Int']['output']>;
  unassigned_asset_count?: Maybe<Scalars['Int']['output']>;
};

export type CategoryInput = {
  business: Scalars['String']['input'];
  category_name: Scalars['String']['input'];
  template?: InputMaybe<Scalars['Upload']['input']>;
};

export type CategoryList = {
  __typename?: 'categoryList';
  categoryName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subCategory?: Maybe<Array<Maybe<AssetSubCategory>>>;
  totalActualCost?: Maybe<Scalars['Float']['output']>;
  totalCurrentValue?: Maybe<Scalars['Float']['output']>;
  totalDepreciationValue?: Maybe<Scalars['Float']['output']>;
  totalSubCategory?: Maybe<Scalars['Int']['output']>;
};

export type CategoryListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryListingResult = {
  __typename?: 'categoryListingResult';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<CategoryData>>>;
};

export type ChangePasswordEncryptionKeys = {
  encryptedPrivateKey?: InputMaybe<Scalars['String']['input']>;
  iv?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePolicyInput = {
  assign_to: AssignToPolicyInput;
  current_policy: Scalars['ID']['input'];
  new_policy: Scalars['ID']['input'];
};

export type ChangePolicyInput_ = {
  current_policy: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
  new_policy: Scalars['ID']['input'];
};

export type ChangeRequestStatusInput = {
  business_navigation_id: Scalars['ID']['input'];
  status: BusinessNavigationStatusEnum;
};

export type ChangeshareStatusInput = {
  action?: InputMaybe<ShareDocumentroles>;
  department?: InputMaybe<Scalars['ID']['input']>;
  documentId: Scalars['ID']['input'];
  role?: InputMaybe<Scalars['ID']['input']>;
  shareId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChartOfAccountsInput = {
  account_balance: Scalars['Int']['input'];
  account_code?: InputMaybe<Scalars['String']['input']>;
  account_name: Scalars['String']['input'];
  account_type: Scalars['ID']['input'];
  as_of?: InputMaybe<Scalars['DateTime']['input']>;
  business?: InputMaybe<Scalars['ID']['input']>;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_editable: Scalars['Boolean']['input'];
  is_sub_account: Scalars['Boolean']['input'];
  is_system_generated: Scalars['Boolean']['input'];
  opening_balance: Scalars['Int']['input'];
  parent_account?: InputMaybe<Scalars['ID']['input']>;
};

export type ChartOfAccountsListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ChartOfAccountsListingresult = {
  __typename?: 'chartOfAccountsListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ChartOfAccount>>>;
};

export type CheckListInput = {
  is_completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CheckListStep = {
  __typename?: 'checkListStep';
  _id?: Maybe<Scalars['ID']['output']>;
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Checks = {
  __typename?: 'checks';
  cvc_check?: Maybe<Scalars['String']['output']>;
};

export type ChildTaxInput = {
  child_tax_amount: Scalars['String']['input'];
  child_tax_is_percentage: Scalars['Boolean']['input'];
  child_tax_name: Scalars['String']['input'];
};

export type CityInput = {
  State: Scalars['ID']['input'];
  city_name: Scalars['String']['input'];
  short_name?: InputMaybe<Scalars['String']['input']>;
};

export type ClockHistoryEmployee = {
  __typename?: 'clockHistoryEmployee';
  ClockedHistory?: Maybe<Array<Maybe<ClockedHistory>>>;
  countStatus?: Maybe<CountStatusGroupedEmployee>;
};

export type ClockHistoryWithStatus = {
  __typename?: 'clockHistoryWithStatus';
  groupClockHistory?: Maybe<Array<Maybe<GroupClockHistory>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type ClockHistryPdfDownloadType = {
  __typename?: 'clockHistryPdfDownloadType';
  donwloadProgress?: Maybe<Scalars['Int']['output']>;
  processingProgress?: Maybe<Scalars['Int']['output']>;
};

export type ClockIn = {
  __typename?: 'clockIn';
  previous_state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export enum ClockInEnum {
  EarlyIn = 'EarlyIn',
  Lateness = 'Lateness',
  OnTime = 'onTime'
}

export type ClockInOUtStatus = {
  __typename?: 'clockInOUtStatus';
  previous_state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ClockOut = {
  __typename?: 'clockOut';
  previous_state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export enum ClockOutEnum {
  EarlyOut = 'EarlyOut',
  LateOut = 'LateOut',
  MissPunchOut = 'MissPunchOut',
  OnTimeOut = 'OnTimeOut'
}

export type ClockStatus = {
  __typename?: 'clockStatus';
  EarlyOut?: Maybe<Scalars['Int']['output']>;
  LateOut?: Maybe<Scalars['Int']['output']>;
  Lateness?: Maybe<Scalars['Int']['output']>;
  early_clock_in?: Maybe<Scalars['Int']['output']>;
  miss_punch_out?: Maybe<Scalars['Int']['output']>;
  on_time_clock_in?: Maybe<Scalars['Int']['output']>;
};

export type ClockedInOrSepration = {
  __typename?: 'clockedInOrSepration';
  firstClockedInDate?: Maybe<Scalars['DateTime']['output']>;
  lastClockedInDate?: Maybe<Scalars['DateTime']['output']>;
  last_working_date?: Maybe<Scalars['DateTime']['output']>;
  resignation_date?: Maybe<Scalars['DateTime']['output']>;
  seprationDate?: Maybe<Scalars['DateTime']['output']>;
};

export enum ClockedInStatusEnum {
  EarlyIn = 'EarlyIn',
  Lateness = 'Lateness',
  OnTime = 'onTime'
}

export type CloneRoleInput = {
  name: Scalars['String']['input'];
  role: Scalars['ID']['input'];
};

export enum ColorSchemeEnum {
  Custom = 'custom',
  Default = 'default'
}

export enum ColumnTypeEnum {
  Date = 'date',
  Dropdown = 'dropdown',
  NestedSearch = 'nested_search',
  Number = 'number',
  String = 'string'
}

export type Column_Dropdown_Value = {
  __typename?: 'column_dropdown_value';
  _id?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ColumnsInput = {
  _ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  field: Scalars['String']['input'];
  query?: InputMaybe<QueryInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  type: ColumnTypeEnum;
};

export type CommenType = {
  __typename?: 'commenType';
  _id?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  comment_by?: Maybe<User>;
  comment_date?: Maybe<Scalars['DateTime']['output']>;
  optional_id?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Maybe<ReplyType>>>;
};

export type CommentDetail = {
  __typename?: 'commentDetail';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<CommenType>>>;
};

export type CommentInput = {
  TaskManagement: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type CommisionCampaignList = {
  __typename?: 'commisionCampaignList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<CommissionCompaignData>>>;
};

export type CommissioinCampaignSearchInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CommissionCompaignData = {
  __typename?: 'commissionCompaignData';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Commission?: Maybe<Array<Maybe<Commission>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  detail?: Maybe<CommissionDetails>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  statistics?: Maybe<Scalars['Float']['output']>;
  stores?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CompaignData = {
  __typename?: 'compaignData';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  Discount?: Maybe<Array<Maybe<Discount>>>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  detail?: Maybe<DiscountDetail>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  statistics?: Maybe<Scalars['Float']['output']>;
  stores?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CompletetSubTaskInput = {
  is_completed: Scalars['Boolean']['input'];
  sub_task_id: Scalars['ID']['input'];
};

export enum ConditionEnum {
  And = 'and',
  None = 'none',
  Or = 'or'
}

export enum ConditionalEnum {
  After = 'after',
  Before = 'before',
  Contain = 'contain',
  Equal = 'equal',
  GreaterThenEqual = 'greater_then_equal',
  LessThenEqual = 'less_then_equal'
}

export type ConfirmClockedHistory = {
  date: Scalars['String']['input'];
  employeeId: Scalars['String']['input'];
};

export type ConflictRoster = {
  __typename?: 'conflictRoster';
  conflictSchedule?: Maybe<Array<Maybe<ConflictScheduleList>>>;
  isLeaveConflict?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ConflictScheduleList = {
  __typename?: 'conflictScheduleList';
  clockIn?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  existingScheduleId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  newRosterId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ConflictScheduleList_ = {
  __typename?: 'conflictScheduleList_';
  clockIn?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  existingScheduleId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  newRosterId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ConflictedSchedules = {
  __typename?: 'conflictedSchedules';
  conflicted_schedule?: Maybe<Schedule>;
  employee_action?: Maybe<Scalars['ID']['output']>;
  employee_id?: Maybe<Scalars['ID']['output']>;
  employee_name?: Maybe<Scalars['String']['output']>;
  is_attendance_exist?: Maybe<Scalars['Boolean']['output']>;
  is_conflict?: Maybe<Scalars['Boolean']['output']>;
  is_leave?: Maybe<Scalars['Boolean']['output']>;
  is_overlap?: Maybe<Scalars['Boolean']['output']>;
  is_salary_detail_not_exist?: Maybe<Scalars['Boolean']['output']>;
  new_schedule?: Maybe<Schedule>;
};

export type ContractLicenseInput = {
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  contractLicenseTitle?: InputMaybe<Scalars['String']['input']>;
  contractNo?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  isForSoftware?: InputMaybe<Scalars['Boolean']['input']>;
  isNoEndDate?: InputMaybe<Scalars['Boolean']['input']>;
  noOfLicenses?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ContractLogs = {
  __typename?: 'contractLogs';
  action?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<Asset>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type ContributionListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type ContributionlistingResult = {
  __typename?: 'contributionlistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Contribution>>>;
};

export type CopyPermissionInput = {
  copy_from: Scalars['ID']['input'];
  copy_to: Array<Scalars['ID']['input']>;
};

export type CopyScheduleByDateInput = {
  schedule_date?: InputMaybe<Scalars['String']['input']>;
  schedules: Array<Scalars['ID']['input']>;
  week_number?: InputMaybe<Scalars['Int']['input']>;
};

export type CopyScheduleDifferentDateInput = {
  employee_id: Scalars['ID']['input'];
  schedule_date: Scalars['DateTime']['input'];
  schedule_id: Scalars['ID']['input'];
};

export type CopyScheduleEmpInput = {
  employee_id: Scalars['ID']['input'];
  employees: Array<Scalars['ID']['input']>;
  end_date: Scalars['DateTime']['input'];
  start_date: Scalars['DateTime']['input'];
};

export type CopyScheduleInput = {
  _id: Scalars['ID']['input'];
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  end_date: Scalars['DateTime']['input'];
  includes_comments?: InputMaybe<Scalars['Boolean']['input']>;
  no_of_weeks: Scalars['Int']['input'];
  start_date: Scalars['DateTime']['input'];
};

export type CopyScheduleSelectedDate = {
  dateType?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  scheduleList?: InputMaybe<Array<InputMaybe<SelectedScheduleInput>>>;
  weekNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type CopyScheduleSelectedDatesInput = {
  dateType?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  scheduleList?: InputMaybe<Array<InputMaybe<SelectedScheduleInput>>>;
  weekNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type CountAlert = {
  __typename?: 'countAlert';
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CountStatus = {
  __typename?: 'countStatus';
  EarlyClockin?: Maybe<Scalars['Int']['output']>;
  absent?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  earlyClockedOut?: Maybe<Scalars['Int']['output']>;
  lateOut?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  missPaunchOut?: Maybe<Scalars['Int']['output']>;
  onLeave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  shortLeave?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CountStatusCount = {
  __typename?: 'countStatusCount';
  absent?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  earlyIn?: Maybe<Scalars['Int']['output']>;
  earlyOut?: Maybe<Scalars['Int']['output']>;
  lateOut?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  missPunchOut?: Maybe<Scalars['Int']['output']>;
  onLeave?: Maybe<Scalars['Int']['output']>;
  onTimeIn?: Maybe<Scalars['Int']['output']>;
  onTimeOut?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  publicHoliday?: Maybe<Scalars['Int']['output']>;
  shortLeave?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['String']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
};

export type CountStatusGroupedEmployee = {
  __typename?: 'countStatusGroupedEmployee';
  EarlyClockin?: Maybe<Scalars['Int']['output']>;
  OntimeOut?: Maybe<Scalars['Int']['output']>;
  absent?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  earlyClockedOut?: Maybe<Scalars['Int']['output']>;
  lateOut?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  missPaunchOut?: Maybe<Scalars['Int']['output']>;
  onLeave?: Maybe<Scalars['Int']['output']>;
  onTIme?: Maybe<Scalars['Int']['output']>;
  publicHoliday?: Maybe<Scalars['Int']['output']>;
  shortLeave?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalLogedMinuts?: Maybe<Scalars['String']['output']>;
  totalScheduleHours?: Maybe<Scalars['Int']['output']>;
  totalWorkingLogedMinuts?: Maybe<Scalars['String']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
};

export type CouponCode = {
  __typename?: 'couponCode';
  code: Scalars['String']['output'];
};

export type CreateAppInputOtp = {
  qrData: Scalars['String']['input'];
};

export type CreateAppInputWithoutOtp = {
  app_name: Scalars['String']['input'];
  password: PasswordManagerInput;
  url: Scalars['String']['input'];
};

export type CreateAppraisalObjecive = {
  AppraisalType: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight_percent?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateBusinessInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  business_identification_number?: InputMaybe<Scalars['String']['input']>;
  business_identification_type?: InputMaybe<Scalars['String']['input']>;
  business_legal_name: Scalars['String']['input'];
  business_logo?: InputMaybe<Scalars['Upload']['input']>;
  business_system_name: Scalars['String']['input'];
  business_type: AllowBusinessType;
  city?: InputMaybe<Scalars['ID']['input']>;
  country: Scalars['ID']['input'];
  currency_format?: InputMaybe<Scalars['String']['input']>;
  currency_name?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  date_format?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  is_24_hour_format?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_verify?: InputMaybe<Scalars['Boolean']['input']>;
  is_phone_verify?: InputMaybe<Scalars['Boolean']['input']>;
  landline?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  package?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_country_code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['ID']['input']>;
  time_zone?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCampaignInput = {
  Business: Scalars['ID']['input'];
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCommentInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  mention_users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  optional_id?: InputMaybe<Scalars['String']['input']>;
  task_id: Scalars['ID']['input'];
};

export type CreateCompasationLeaveInput = {
  countIn?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  date_type_leave?: InputMaybe<Array<InputMaybe<TypeLeaveInput>>>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  is_compansation_leave?: InputMaybe<Scalars['Boolean']['input']>;
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  is_short_leave?: InputMaybe<Scalars['Boolean']['input']>;
  leave_request?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  reason_for_leave?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TimeOffStatus>;
  total_leave_out_of_accural?: InputMaybe<Scalars['Float']['input']>;
  total_leaves?: InputMaybe<Scalars['Float']['input']>;
  total_unpaid_leaves?: InputMaybe<Scalars['Float']['input']>;
  type_of_absence?: InputMaybe<Scalars['ID']['input']>;
  unpaid_count?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateEvaluationInput = {
  PerformanceCycle?: InputMaybe<Scalars['ID']['input']>;
  User?: InputMaybe<Scalars['ID']['input']>;
  listProjects?: InputMaybe<Scalars['String']['input']>;
  milestone?: InputMaybe<Scalars['String']['input']>;
  performanceCycles?: InputMaybe<Array<InputMaybe<InputPerformance_Cycles>>>;
  performanceGoals?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  roadMap?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trainingRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateExpenseInvoice = {
  category?: InputMaybe<Scalars['String']['input']>;
  expenseInvoiceCategoryId?: InputMaybe<Scalars['ID']['input']>;
  expenseInvoiceId?: InputMaybe<Scalars['ID']['input']>;
  invoice?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExpenseInvoiceCategory = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGroupInput = {
  activity?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  activityFor?: InputMaybe<ActivityFor>;
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  groupAssignee?: InputMaybe<GroupAssignees>;
  groupType?: InputMaybe<GroupType>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateInputObjectiveAssignment = {
  User?: InputMaybe<Scalars['ID']['input']>;
  objectiveAssigned?: InputMaybe<Array<InputMaybe<InputobjectiveAssigned>>>;
  status?: InputMaybe<EnumObjectiveAssignmentStatus>;
};

export type CreateInputTablePreset = {
  activeFilters?: InputMaybe<Scalars['Boolean']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ListingColumnsInput>>>;
  config?: InputMaybe<TableConfig>;
  filters?: InputMaybe<Array<InputMaybe<ListingFiltersInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  loadingCall?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRegionInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Array<Scalars['ID']['input']>>;
  City?: InputMaybe<Array<Scalars['ID']['input']>>;
  Country: Scalars['ID']['input'];
  State?: InputMaybe<Array<Scalars['ID']['input']>>;
  region_name: Scalars['String']['input'];
};

export type CreateRepliesCommentInput = {
  comment_id: Scalars['ID']['input'];
  reply: Scalars['String']['input'];
  task_id: Scalars['ID']['input'];
};

export type CreateResponseQuizTraining = {
  __typename?: 'createResponseQuizTraining';
  Quiz?: Maybe<Quiz>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CreateRocketChatUserInput = {
  chat_user_name?: InputMaybe<Scalars['String']['input']>;
  rocket_chat_id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRosterByTemplate = {
  end_date: Scalars['DateTime']['input'];
  start_date: Scalars['DateTime']['input'];
  template_id: Scalars['ID']['input'];
};

export type CreateRosterForcefully = {
  date?: InputMaybe<Scalars['String']['input']>;
  existingScheduleId?: InputMaybe<Scalars['ID']['input']>;
  newRosterId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateSampleDataInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  is_selected: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type CreateSchedule = {
  __typename?: 'createSchedule';
  conflictSchedule?: Maybe<Array<Maybe<Schedule>>>;
  errorList?: Maybe<Array<Maybe<OverLapedSchedules>>>;
  message?: Maybe<Scalars['String']['output']>;
  overLapedSchedules?: Maybe<Array<Maybe<OverLapedSchedules>>>;
};

export type CreateShipTo = {
  location: Scalars['String']['input'];
};

export type CreateSyncWithChatServerInput = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateTaskInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  ParentTask?: InputMaybe<Scalars['ID']['input']>;
  assignee?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  check_list?: InputMaybe<Array<CheckListInput>>;
  department?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  editor_description?: InputMaybe<Scalars['String']['input']>;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  priority: PriorityEmums;
  role?: InputMaybe<Scalars['ID']['input']>;
  summary: Scalars['String']['input'];
};

export type CreateTimeOffInput = {
  accept_reject_leave?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  countIn?: InputMaybe<Scalars['String']['input']>;
  date_type_leave?: InputMaybe<Array<InputMaybe<TypeLeaveInput>>>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  is_pto?: InputMaybe<Scalars['Boolean']['input']>;
  is_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  is_short_leave?: InputMaybe<Scalars['Boolean']['input']>;
  leave?: InputMaybe<Array<InputMaybe<TypeLeaveInput>>>;
  leave_request?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  reason_for_leave?: InputMaybe<Scalars['String']['input']>;
  remaining_days?: InputMaybe<Scalars['Float']['input']>;
  remaining_unpaid_days?: InputMaybe<Scalars['Float']['input']>;
  sandwich?: InputMaybe<Array<InputMaybe<Sandwich>>>;
  scheduleData?: InputMaybe<Array<InputMaybe<ScheduleData>>>;
  status?: InputMaybe<TimeOffStatus>;
  total_leave_out_of_accural?: InputMaybe<Scalars['Float']['input']>;
  total_leaves?: InputMaybe<Scalars['Float']['input']>;
  total_unpaid_leaves?: InputMaybe<Scalars['Float']['input']>;
  type_of_absence?: InputMaybe<Scalars['ID']['input']>;
  type_of_absence_id?: InputMaybe<Scalars['String']['input']>;
  unpaid_count?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateUpdateTimeOffRequestInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  accept_reject_leave?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  countIn?: InputMaybe<Scalars['String']['input']>;
  date_type_leave?: InputMaybe<Array<InputMaybe<TypeLeaveInput>>>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  is_pto?: InputMaybe<Scalars['Boolean']['input']>;
  is_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  is_short_leave?: InputMaybe<Scalars['Boolean']['input']>;
  leave_request?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  reason_for_leave?: InputMaybe<Scalars['String']['input']>;
  remaining_days?: InputMaybe<Scalars['Float']['input']>;
  remaining_unpaid_days?: InputMaybe<Scalars['Float']['input']>;
  sandwich?: InputMaybe<Array<InputMaybe<Sandwich>>>;
  total_leave_out_of_accural?: InputMaybe<Scalars['Float']['input']>;
  total_leaves?: InputMaybe<Scalars['Float']['input']>;
  total_unpaid_leaves?: InputMaybe<Scalars['Float']['input']>;
  type_of_absence: Scalars['ID']['input'];
  type_of_absence_id?: InputMaybe<Scalars['String']['input']>;
  unpaid_count?: InputMaybe<Scalars['Float']['input']>;
};

export type CreatedExpenseInvoice = {
  __typename?: 'createdExpenseInvoice';
  category?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  invoice?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CreatedExpenseInvoiceCategory = {
  __typename?: 'createdExpenseInvoiceCategory';
  category?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invoice?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomLocationInput = {
  city_name: Scalars['String']['input'];
  country_id: Scalars['ID']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  state_id: Scalars['ID']['input'];
  zip_code: Scalars['String']['input'];
};

export type CustomerInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerTransactionInput = {
  customer: Scalars['ID']['input'];
};

export type DailyClockHistoryList = {
  __typename?: 'dailyClockHistoryList';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<ClockedHistory>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type DailyReport = {
  __typename?: 'dailyReport';
  date?: Maybe<Scalars['String']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  totalMinutes?: Maybe<Scalars['Int']['output']>;
  totalWages?: Maybe<Scalars['String']['output']>;
};

export type Daily_Wages = {
  __typename?: 'daily_wages';
  schedule_date?: Maybe<Scalars['String']['output']>;
  total_wage?: Maybe<Scalars['Float']['output']>;
};

export type Daily_Wages_Timesheet = {
  __typename?: 'daily_wages_timesheet';
  attendance_date?: Maybe<Scalars['String']['output']>;
  total_wages?: Maybe<Scalars['Float']['output']>;
};

export type DashBoardChange = {
  __typename?: 'dashBoardChange';
  is_updated?: Maybe<Scalars['Boolean']['output']>;
};

export type DashboardAssetCount = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DashboardEmplyeCountToday = {
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  employees?: InputMaybe<Array<Scalars['ID']['input']>>;
  endDate: Scalars['DateTime']['input'];
  role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate: Scalars['DateTime']['input'];
};

export type DashboardRostersWithAttendance = {
  __typename?: 'dashboardRostersWithAttendance';
  absent?: Maybe<Scalars['Int']['output']>;
  absentPercentage?: Maybe<Scalars['Int']['output']>;
  employees?: Maybe<Array<Maybe<User>>>;
  leave?: Maybe<Scalars['Int']['output']>;
  leavePercentage?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  presentPercentage?: Maybe<Scalars['Int']['output']>;
  scheduledEmployees?: Maybe<Scalars['Int']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  unrestrictedUsers?: Maybe<Scalars['Int']['output']>;
};

export type DataColumnResults = {
  __typename?: 'dataColumnResults';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
};

export type DataTableConfig = {
  __typename?: 'dataTableConfig';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  filters?: Maybe<Array<Maybe<ListingFiltersType>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  no_of_records?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  table_preset?: Maybe<Array<Maybe<ListingTablePreset>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DataTypeInput = {
  data_type_name: Scalars['String']['input'];
};

export type DataTypeResult = {
  __typename?: 'dataTypeResult';
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<MasterDataValue>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type DataTypeValueInput = {
  business?: InputMaybe<Scalars['ID']['input']>;
  data_type: Scalars['ID']['input'];
  data_value_name: Scalars['String']['input'];
  data_value_type?: InputMaybe<Scalars['ID']['input']>;
  is_system_generated: Scalars['Boolean']['input'];
};

export type DataValueInput = {
  business: Scalars['ID']['input'];
  data_type_id: Scalars['ID']['input'];
};

export type DateObj = {
  __typename?: 'dateObj';
  from_date?: Maybe<Scalars['DateTime']['output']>;
  to_date?: Maybe<Scalars['DateTime']['output']>;
};

export type DateOfSandwich = {
  __typename?: 'dateOfSandwich';
  date?: Maybe<Scalars['DateTime']['output']>;
  day?: Maybe<Scalars['String']['output']>;
};

export enum DeductionFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type DeductionListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type DeductionlistingResult = {
  __typename?: 'deductionlistingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Deduction>>>;
};

export type DelegantApprovalMutationInput = {
  approval_type: WorkFlowTypeEnum;
  employee_id: Scalars['ID']['input'];
};

export type DeleteAppraisalType = {
  __typename?: 'deleteAppraisalType';
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteAttachmentInput = {
  _id: Scalars['ID']['input'];
  attachmentURl: Scalars['String']['input'];
};

export type DeleteDocumentSubscribe = {
  __typename?: 'deleteDocumentSubscribe';
  current?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
};

export type DeleteSubTaskInput = {
  _id: Scalars['ID']['input'];
  sub_task_id: Scalars['ID']['input'];
};

export type DeletedRequestResponse = {
  __typename?: 'deletedRequestResponse';
  _id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<RequestEnums>;
};

export type DepartmentEmployeeCount = {
  __typename?: 'departmentEmployeeCount';
  department?: Maybe<Department>;
  employee_count?: Maybe<Scalars['Int']['output']>;
};

export enum DepartmentFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type DepartmentInput = {
  Business: Scalars['ID']['input'];
  department_name: Scalars['String']['input'];
};

export type DepartmentListFilter = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentListingresult = {
  __typename?: 'departmentListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Department>>>;
};

export type Depreciation = {
  __typename?: 'depreciation';
  dailyDepreciation?: Maybe<Scalars['Float']['output']>;
  depreciationAmount?: Maybe<Scalars['Int']['output']>;
  depreciationMonths?: Maybe<Scalars['Int']['output']>;
  endAmount?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  startAmount?: Maybe<Scalars['Int']['output']>;
  totalDepreciated?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export enum DepreciationEnum {
  Instant = 'instant',
  Periodic = 'periodic'
}

export type DepreciationInput = {
  dailyDepreciation?: InputMaybe<Scalars['Float']['input']>;
  depreciationAmount?: InputMaybe<Scalars['Int']['input']>;
  depreciationMonths?: InputMaybe<Scalars['Int']['input']>;
  endAmount?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['Float']['input']>;
  startAmount?: InputMaybe<Scalars['Int']['input']>;
  totalDepreciated?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DesigationEmployeeCount = {
  __typename?: 'desigationEmployeeCount';
  designation?: Maybe<Designation>;
  employee_count?: Maybe<Scalars['Int']['output']>;
};

export type DesignationListingresult = {
  __typename?: 'designationListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Designation>>>;
};

export type DesignationsInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  business: Scalars['ID']['input'];
  designation_name: Scalars['String']['input'];
};

export enum DesignationtFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type DesignationtListFilter = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DesignationtFilter>;
};

export type DesignationtListFilterNew = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type DetailReport = {
  __typename?: 'detailReport';
  Objective?: Maybe<AppraisalObjecive>;
  _id?: Maybe<Scalars['ID']['output']>;
  appraisal_type?: Maybe<AppraisalType>;
  appraiser?: Maybe<Array<Maybe<User>>>;
  department?: Maybe<Department>;
  name?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type DetailType = {
  __typename?: 'detailType';
  _id?: Maybe<Scalars['ID']['output']>;
  accunt_type?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DetailTypeInput = {
  accunt_type?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Detail_Result = {
  __typename?: 'detail_result';
  AppraisalObjective?: Maybe<AppraisalObjecive>;
  AppraisalType?: Maybe<AppraisalType>;
  _id?: Maybe<Scalars['ID']['output']>;
  appraisal?: Maybe<User>;
  appraiser?: Maybe<User>;
  appraisers?: Maybe<Array<Maybe<User>>>;
  score?: Maybe<Scalars['Float']['output']>;
  target?: Maybe<Scalars['Float']['output']>;
  weight_percent?: Maybe<Scalars['Float']['output']>;
};

export type DetailextendedView = {
  __typename?: 'detailextendedView';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<Detail_Result>>>;
};

export type DeviceModelResult = {
  __typename?: 'deviceModelResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<DeviceModel>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export enum DeviceStatus {
  Linked = 'linked',
  Unlinked = 'unlinked'
}

export type DiscountListingResult = {
  __typename?: 'discountListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Discount>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type DisposeDetail = {
  __typename?: 'disposeDetail';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<LogsAsset>>>;
};

export enum DisposeFilter {
  All = 'all',
  Disposed = 'disposed',
  Scrap = 'scrap',
  Trashed = 'trashed'
}

export type DisposeListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  disposeColumns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type DisposeObj = {
  __typename?: 'disposeObj';
  disposeDate?: Maybe<Scalars['Date']['output']>;
  disposeTo?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
};

export type DisposedInput = {
  assetId: Scalars['String']['input'];
  disposeDate?: InputMaybe<Scalars['Date']['input']>;
  disposeTo?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentDetail = {
  __typename?: 'documentDetail';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<UplaodDocument>>>;
};

export enum DocumentType {
  All = 'All',
  Company = 'Company',
  Individual = 'Individual'
}

export enum DocumentTypeEnum {
  All = 'All',
  Company = 'Company',
  Individual = 'Individual'
}

export type Documents = {
  __typename?: 'documents';
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileType?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  upload_by?: Maybe<User>;
};

export type DownloadZip = {
  __typename?: 'downloadZip';
  percent?: Maybe<Scalars['Int']['output']>;
};

export type EditBusinessEmployeeInput = {
  business_navigation_id: Scalars['ID']['input'];
  employee: Scalars['ID']['input'];
  role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum EffectiveAfterTypeEnum {
  Day = 'Day',
  Month = 'Month',
  Year = 'Year'
}

export type EmailChanged = {
  __typename?: 'emailChanged';
  is_email_changed?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailDocumentControlAttachment = {
  department?: InputMaybe<Scalars['ID']['input']>;
  documentId: Scalars['ID']['input'];
  employee: Array<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  share_as?: InputMaybe<ShareDocumentroles>;
  type?: InputMaybe<AssignToEnums>;
};

export type EmailOtp = {
  __typename?: 'emailOtp';
  _id?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  otp_code: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type EmailOtpInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EmailSmtpConfigrationInput = {
  configuration_name?: InputMaybe<Scalars['String']['input']>;
  from_email?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  used_for?: InputMaybe<Array<InputMaybe<ModuleEnum>>>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type EmailSmtpConfigrationList = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type EmailTemplateInput = {
  business_address?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_phone?: InputMaybe<Scalars['String']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  email_subject?: InputMaybe<Scalars['String']['input']>;
  footer_logo?: InputMaybe<Scalars['Upload']['input']>;
  header_logo?: InputMaybe<Scalars['Upload']['input']>;
  module?: InputMaybe<ModuleEnum>;
  support_email?: InputMaybe<Scalars['String']['input']>;
  template_name?: InputMaybe<Scalars['String']['input']>;
};

export type EmailVerifyOtpInput = {
  email: Scalars['String']['input'];
  otp_code: Scalars['String']['input'];
};

export type EmloyeeSharePermission = {
  __typename?: 'emloyeeSharePermission';
  detail?: Maybe<Share_With>;
  employee?: Maybe<User>;
  share_as?: Maybe<Scalars['String']['output']>;
};

export type EmployeeAdpId = {
  adpId: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
};

export type EmployeeActionInput = {
  employee_id: Scalars['ID']['input'];
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeActivityFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type EmployeeClockHistory = {
  __typename?: 'employeeClockHistory';
  groupData?: Maybe<Array<Maybe<ClockHistoryEmployee>>>;
};

export type EmployeeDetail = {
  __typename?: 'employeeDetail';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<User>>>;
};

export type EmployeeDocumentUpdateInput = {
  Role?: InputMaybe<Scalars['ID']['input']>;
  _id: Scalars['ID']['input'];
  assinged_to?: InputMaybe<Scalars['ID']['input']>;
  documents_description?: InputMaybe<Scalars['String']['input']>;
  documents_expiry_date?: InputMaybe<Scalars['String']['input']>;
  documents_name?: InputMaybe<Scalars['String']['input']>;
  documents_type?: InputMaybe<Scalars['String']['input']>;
  is_email_notify?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeDocumentUpload = {
  __typename?: 'employeeDocumentUpload';
  _id?: Maybe<Scalars['ID']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  fileRef?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  view?: Maybe<Scalars['Int']['output']>;
};

export type EmployeeEncryptionKeyInput = {
  encryptedPrivateKey: Scalars['String']['input'];
  iv: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
  salt: Scalars['String']['input'];
};

export type EmployeeFilterInput = {
  departments?: InputMaybe<Array<Scalars['ID']['input']>>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeGarnishmentInput = {
  assignTo?: InputMaybe<Scalars['ID']['input']>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  fix_amount?: InputMaybe<Scalars['Float']['input']>;
  garnishment: EnumGarnishment;
  garnishment_account: Scalars['String']['input'];
  garnishment_creator: Scalars['String']['input'];
  garnishment_type: GarnishmentTypeEnums;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['DateTime']['input'];
};

export type EmployeeGarnishmentResult = {
  __typename?: 'employeeGarnishmentResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<EmployeeGarnishment>>>;
};

export type EmployeeGarnishmentUpdate = {
  _id: Scalars['ID']['input'];
  assignTo?: InputMaybe<Scalars['ID']['input']>;
  document?: InputMaybe<Scalars['Upload']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  fix_amount?: InputMaybe<Scalars['Float']['input']>;
  garnishment?: InputMaybe<EnumGarnishment>;
  garnishment_account?: InputMaybe<Scalars['String']['input']>;
  garnishment_creator?: InputMaybe<Scalars['String']['input']>;
  garnishment_type?: InputMaybe<GarnishmentTypeEnums>;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeLeaveInput = {
  employeeId: Scalars['ID']['input'];
  fromDate: Scalars['DateTime']['input'];
  toDate: Scalars['DateTime']['input'];
};

export type EmployeeLeavebyDateRange = {
  __typename?: 'employeeLeavebyDateRange';
  from_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  reason_for_leave?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  to_date?: Maybe<Scalars['DateTime']['output']>;
  total_leaves?: Maybe<Scalars['Float']['output']>;
};

export type EmployeeListFilter = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeListingResult = {
  __typename?: 'employeeListingResult';
  config?: Maybe<DataTableConfig>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<User>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmployeeListingResultNew = {
  __typename?: 'employeeListingResultNew';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<User>>>;
};

export type EmployeeListingresult = {
  __typename?: 'employeeListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<EmployeeSeparation>>>;
};

export type EmployeeLoanAmountResult = {
  __typename?: 'employeeLoanAmountResult';
  paidAmount?: Maybe<Scalars['Int']['output']>;
  remainingAmount?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['Int']['output']>;
};

export type EmployeePaidUnpaidLeaves = {
  __typename?: 'employeePaidUnpaidLeaves';
  paidLeave?: Maybe<Scalars['Int']['output']>;
  unPaidLeave?: Maybe<Scalars['Int']['output']>;
};

export type EmployeeRosters = {
  __typename?: 'employeeRosters';
  date?: Maybe<Scalars['DateTime']['output']>;
  roster?: Maybe<Roster>;
  short_breaks?: Maybe<Shortbreak>;
  wages?: Maybe<Scalars['Float']['output']>;
};

export type EmployeeScheduleInput = {
  end_date: Scalars['DateTime']['input'];
  feature: FeatureEnum;
  start_date: Scalars['DateTime']['input'];
};

export enum EmployeeSections {
  Accounts = 'accounts',
  Contract = 'contract',
  Documents = 'documents',
  EmployeeTimeLine = 'employee_time_line',
  JoiningLatter = 'joining_latter',
  Leave = 'leave',
  ProfileInfo = 'profile_info',
  SalaryTaxDetails = 'salary_tax_details',
  TimeRuleAttendance = 'time_rule_attendance',
  TransferMethod = 'transfer_method'
}

export type EmployeeSeparation = {
  __typename?: 'employeeSeparation';
  _id?: Maybe<Scalars['ID']['output']>;
  attrition?: Maybe<Attrition>;
  business?: Maybe<Business>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  documents?: Maybe<Array<Maybe<EmployeeDocument>>>;
  employee?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_notifiy?: Maybe<Scalars['Boolean']['output']>;
  last_working_date?: Maybe<Scalars['DateTime']['output']>;
  payroll_hold?: Maybe<Scalars['Boolean']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  reason_description?: Maybe<Scalars['String']['output']>;
  resignation_date?: Maybe<Scalars['DateTime']['output']>;
  separation_type?: Maybe<Separation_Types>;
  settlement_completed?: Maybe<Scalars['Boolean']['output']>;
  to_employees?: Maybe<Array<Maybe<User>>>;
};

export type EmployeeSeparationFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeSeparationInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  attrition: Attrition;
  business: Scalars['ID']['input'];
  documents?: InputMaybe<Array<InputMaybe<EmployeeDocumentInput>>>;
  employee: Scalars['ID']['input'];
  is_notifiy?: InputMaybe<Scalars['Boolean']['input']>;
  last_working_date: Scalars['DateTime']['input'];
  payroll_hold?: InputMaybe<Scalars['Boolean']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_description?: InputMaybe<Scalars['String']['input']>;
  resignation_date: Scalars['DateTime']['input'];
  separation_type: Separation_Types;
  to_employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum EmployeeStatus {
  Inactive = 'Inactive',
  Active = 'active'
}

export type EmployeeTimeSheetInput = {
  business: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeTimeSheetType = {
  __typename?: 'employeeTimeSheetType';
  Absent?: Maybe<Scalars['Int']['output']>;
  EarlyOut?: Maybe<Scalars['Int']['output']>;
  Lateness?: Maybe<Scalars['Int']['output']>;
  Leave?: Maybe<Scalars['Int']['output']>;
  Present?: Maybe<Scalars['Int']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
};

export enum EmployeeType {
  Hourly = 'Hourly',
  Salary = 'Salary'
}

export enum EmployeeTypeEnum {
  Promotion = 'Promotion',
  Transfer = 'Transfer',
  Increment = 'increment'
}

export type Employee_Actions = {
  __typename?: 'employee_actions';
  UserHistory?: Maybe<UserHistory>;
  absents?: Maybe<Scalars['Int']['output']>;
  no_of_days?: Maybe<Scalars['Int']['output']>;
  paid_leaves?: Maybe<Scalars['Int']['output']>;
  paid_short_leaves?: Maybe<Scalars['Int']['output']>;
  un_paid_leaves?: Maybe<Scalars['Int']['output']>;
  un_paid_short_leaves?: Maybe<Scalars['Int']['output']>;
};

export type Employee_Groups = {
  __typename?: 'employee_groups';
  _id?: Maybe<Scalars['String']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
};

export type EmployeesByBusiness = {
  business_id: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rosterStore: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeesClockHistory = {
  __typename?: 'employeesClockHistory';
  dailyClockHistoryList?: Maybe<DailyClockHistoryList>;
  groupData?: Maybe<ClockHistoryWithStatus>;
};

export type EmployeesDepartmentsFilter = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  store_id?: InputMaybe<Scalars['ID']['input']>;
};

export type EmployeesForPolicy = {
  department?: InputMaybe<Array<Scalars['ID']['input']>>;
  designation?: InputMaybe<Array<Scalars['ID']['input']>>;
  role?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type EmployeesMonthlyTimeSheet = {
  __typename?: 'employeesMonthlyTimeSheet';
  dateList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  employeesTimeSheet?: Maybe<Array<Maybe<EmployeeTimeSheetType>>>;
  totalAbsent?: Maybe<Scalars['Int']['output']>;
  totalEarlyOut?: Maybe<Scalars['Int']['output']>;
  totalLateness?: Maybe<Scalars['Int']['output']>;
  totalLeave?: Maybe<Scalars['Int']['output']>;
  totalPresent?: Maybe<Scalars['Int']['output']>;
};

export type EmployeesRosters = {
  __typename?: 'employeesRosters';
  employees?: Maybe<Array<Maybe<User>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  rosterStore?: Maybe<RosterStores>;
  rosters?: Maybe<Array<Maybe<Roster>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EmployeesRostersInput = {
  endDate: Scalars['DateTime']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
};

export type EmployeesRostertsInput = {
  currentView?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  endDate: Scalars['DateTime']['input'];
  payrollType?: InputMaybe<PayrollType>;
  role?: InputMaybe<Scalars['ID']['input']>;
  scheduled?: InputMaybe<ScheduledFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  timeOff?: InputMaybe<_Schedule>;
};

export type EmployeesScheduleExists = {
  endDate: Scalars['DateTime']['input'];
  feature?: InputMaybe<FeatureEnum>;
  startDate: Scalars['DateTime']['input'];
};

export type EmployeesWithClockedHistory = {
  __typename?: 'employeesWithClockedHistory';
  clockedHistory?: Maybe<Array<Maybe<ClockedHistory>>>;
  user?: Maybe<User>;
};

export type EmployeesWithRosters = {
  __typename?: 'employeesWithRosters';
  user?: Maybe<User>;
  userRosters?: Maybe<Array<Maybe<EmployeeRosters>>>;
};

export type EmployeesWithRostersList = {
  __typename?: 'employeesWithRostersList';
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  is_canceled?: Maybe<Scalars['Boolean']['output']>;
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  userRostersList?: Maybe<Array<Maybe<EmployeesWithRosters>>>;
};

export type EmployeeshClockedHistoryList = {
  __typename?: 'employeeshClockedHistoryList';
  clockedHistoryList?: Maybe<Array<Maybe<EmployeesWithClockedHistory>>>;
  current_time?: Maybe<Scalars['DateTime']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  is_salary_view?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type EncryptedPasswordInput = {
  encryptedAESKey?: InputMaybe<Scalars['String']['input']>;
  encryptedPassword?: InputMaybe<Scalars['String']['input']>;
  iv?: InputMaybe<Scalars['String']['input']>;
};

export type EncryptedPasswordType = {
  __typename?: 'encryptedPasswordType';
  encryptedAESKey?: Maybe<Scalars['String']['output']>;
  encryptedPassword?: Maybe<Scalars['String']['output']>;
  iv?: Maybe<Scalars['String']['output']>;
};

export enum Enrollment {
  EligibleToJoinBetween = 'eligible_to_join_between',
  GeneralEnrollment = 'general_enrollment'
}

export type EntitlementInput = {
  accural_from_day: Scalars['String']['input'];
  accural_from_month: Scalars['String']['input'];
  pto_policy?: InputMaybe<PolicyTypeEnum>;
  pto_schedule: PtoScheduleEnum;
  reset_to_day: Scalars['String']['input'];
  reset_to_month: Scalars['String']['input'];
};

export type EntitlementType = {
  __typename?: 'entitlementType';
  accural_from_day?: Maybe<Scalars['String']['output']>;
  accural_from_month?: Maybe<Scalars['String']['output']>;
  pto_policy?: Maybe<Scalars['String']['output']>;
  pto_schedule?: Maybe<Scalars['String']['output']>;
  reset_to_day?: Maybe<Scalars['String']['output']>;
  reset_to_month?: Maybe<Scalars['String']['output']>;
};

export enum EnumActive {
  Active = 'active',
  Inactive = 'inactive'
}

export enum EnumGarnishment {
  Monthly = 'monthly',
  Yearly = 'yearly'
}

export enum EnumObjectiveAssignmentStatus {
  Assigned = 'assigned',
  Unassigned = 'unassigned'
}

export enum EnumReasonMark {
  All = 'All',
  Damage = 'Damage',
  Defective = 'Defective',
  Missing = 'Missing',
  Stolen = 'Stolen'
}

export enum EnumReasonType {
  FamilyEmergency = 'FAMILY_EMERGENCY',
  Miscommunication = 'MISCOMMUNICATION',
  SickLeave = 'SICK_LEAVE',
  SupervisorApproved = 'SUPERVISOR_APPROVED',
  TravelIssue = 'TRAVEL_ISSUE',
  UnplannedAbsence = 'UNPLANNED_ABSENCE',
  ForgotCheckIn = 'forgot_check_in',
  ForgotCheckOut = 'forgot_check_out',
  LateComming = 'late_comming',
  Lateness = 'lateness',
  Other = 'other',
  SystemError = 'system_error'
}

export type ErrorMessage = {
  __typename?: 'errorMessage';
  date?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type EvaluatorInputs = {
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ExpenseCategory = {
  __typename?: 'expenseCategory';
  created_at?: Maybe<Scalars['Date']['output']>;
  expenseInvoice?: Maybe<GetExpenseInvoice>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice?: Maybe<Array<Maybe<InvoicesList>>>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExpenseFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  expense_date?: InputMaybe<Scalars['DateTime']['input']>;
  expense_type?: InputMaybe<Scalars['String']['input']>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_business_expense: Scalars['Boolean']['input'];
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExpenseRequestFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  expense_status?: InputMaybe<ExpenseStatus>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum ExpenseStatus {
  Accepted = 'accepted',
  All = 'all',
  Archive = 'archive',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type ExpnseResult = {
  __typename?: 'expnseResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Expense>>>;
};

export enum FeatureEnum {
  DocumentControl = 'document_control',
  ManageEmployee = 'manage_employee',
  QuizList = 'quiz_list',
  Schedule = 'schedule',
  Task = 'task',
  Timesheet = 'timesheet',
  Training = 'training'
}

export type FeatureHierarchy = {
  __typename?: 'featureHierarchy';
  feature?: Maybe<Scalars['String']['output']>;
  is_all?: Maybe<Scalars['Boolean']['output']>;
  is_only_me?: Maybe<Scalars['Boolean']['output']>;
  is_peer?: Maybe<Scalars['Boolean']['output']>;
  is_under_them?: Maybe<Scalars['Boolean']['output']>;
};

export type FeatureHierarchyInput = {
  feature: FeatureEnum;
  is_all: Scalars['Boolean']['input'];
  is_only_me?: InputMaybe<Scalars['Boolean']['input']>;
  is_peer: Scalars['Boolean']['input'];
  is_under_them: Scalars['Boolean']['input'];
};

export type Field = {
  assetName?: InputMaybe<Scalars['String']['input']>;
  labelName?: InputMaybe<Scalars['String']['input']>;
};

export type FieldData = {
  __typename?: 'fieldData';
  assetName?: Maybe<Scalars['String']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
};

export type FileUploadDocumentControl = {
  attachment: Scalars['Upload']['input'];
  expiry?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Fileuploadsize = {
  __typename?: 'fileuploadsize';
  percent?: Maybe<Scalars['Int']['output']>;
};

export enum FilterAlerts {
  All = 'all',
  LeaseExpiry = 'leaseExpiry',
  MaintenanceDue = 'maintenanceDue',
  MaintenanceRecur = 'maintenanceRecur',
  Warranty = 'warranty'
}

export enum FilterAsset {
  All = 'all',
  Archive = 'archive',
  Assigned = 'assigned',
  Disposed = 'disposed',
  Leased = 'leased',
  Maintenance = 'maintenance',
  Unassigned = 'unassigned'
}

export enum FilterEmployee {
  Active = 'active',
  All = 'all',
  Archive = 'archive',
  Inactive = 'inactive'
}

export type FilterHistory = {
  action_type?: InputMaybe<ActionTypeEnum>;
  employee_type?: InputMaybe<EmployeeTypeEnum>;
  pay_type?: InputMaybe<PayTypeEnum>;
  status?: InputMaybe<StatusEnum>;
};

export type FilterInput = {
  businessIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  purchasesReportType?: InputMaybe<PurchasesReportType>;
  salesReportType?: InputMaybe<SalesReportType>;
  storeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FilterInvoice = {
  grandTotal?: InputMaybe<Scalars['Int']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export enum FilterLeaves {
  All = 'All',
  OnDuty = 'OnDuty',
  Paid = 'Paid',
  Unpaid = 'Unpaid',
  Active = 'active',
  Archive = 'archive'
}

export enum FilterMaintenance {
  All = 'all',
  Archive = 'archive',
  Completed = 'completed',
  InProgress = 'inProgress',
  OnHold = 'onHold',
  Scheduled = 'scheduled'
}

export enum FilterRoster {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export enum FilterSchedule {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export enum FilterTask {
  All = 'all',
  AssignToMe = 'assign_to_me',
  AssignedByMe = 'assigned_by_me',
  MyTasks = 'my_tasks'
}

export type FilterTrainingAssignementResult = {
  __typename?: 'filterTrainingAssignementResult';
  _id?: Maybe<Scalars['ID']['output']>;
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  email?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['DateTime']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  training_end_time?: Maybe<Scalars['DateTime']['output']>;
  training_start_time?: Maybe<Scalars['DateTime']['output']>;
};

export type FiltersQueryInput = {
  condition?: InputMaybe<Scalars['String']['input']>;
  first_condition?: InputMaybe<Scalars['String']['input']>;
  first_value?: InputMaybe<Scalars['String']['input']>;
  second_condition?: InputMaybe<Scalars['String']['input']>;
  second_value?: InputMaybe<Scalars['String']['input']>;
};

export type FiltersQueryType = {
  __typename?: 'filtersQueryType';
  condition?: Maybe<Scalars['String']['output']>;
  first_condition?: Maybe<Scalars['String']['output']>;
  first_value?: Maybe<Scalars['String']['output']>;
  second_condition?: Maybe<Scalars['String']['output']>;
  second_value?: Maybe<Scalars['String']['output']>;
};

export type FinalSettlementFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FinalSettlementResult = {
  __typename?: 'finalSettlementResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<FinalSettlement>>>;
};

export enum ForUserDashbaord {
  Task = 'task',
  Timesheet = 'timesheet'
}

export type ForgetBusinessInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<AllowMethodPhoneVerify>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export enum GarnishmentTypeEnums {
  UnpaidChildSupport = 'UNPAID_CHILD_SUPPORT',
  UnpaidLoans = 'UNPAID_LOANS',
  UnpaidTaxes = 'UNPAID_TAXES'
}

export type GeneratedAssetIds = {
  __typename?: 'generatedAssetIds';
  generatedAssetId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type GetAdminDashboardData = {
  __typename?: 'getAdminDashboardData';
  approvals?: Maybe<Approval>;
  assets?: Maybe<Assets>;
  presentAbsentLeave?: Maybe<PresentAbsentLeave>;
  taskManagementCount?: Maybe<TaskManagementCount>;
  total_employees?: Maybe<Array<Maybe<TotalEmployees>>>;
};

export type GetAuthenticatorAppDataTableInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type GetAuthenticatorAppInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type GetCashRegistersHistoryInput = {
  businessLocation: Scalars['ID']['input'];
  cashRegister: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCategoriesList = {
  __typename?: 'getCategoriesList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<AssetCategories>>>;
};

export type GetContributionFilter = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetDeductionFilter = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetDisposeList = {
  __typename?: 'getDisposeList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Asset>>>;
};

export type GetEncryptionCopyInput = {
  from_user?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  user: Scalars['ID']['input'];
};

export type GetExpenseInvoice = {
  __typename?: 'getExpenseInvoice';
  category?: Maybe<Array<Maybe<ExpenseCategory>>>;
  category_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  detail?: Maybe<InvoiceDetails>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice?: Maybe<Array<Maybe<InvoicesList>>>;
  invoice_count?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type GetExpenseInvoiceAndCategory = {
  __typename?: 'getExpenseInvoiceAndCategory';
  category_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  detail?: Maybe<InvoiceCategoryDetails>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice_count?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type GetExpenseInvoiceCategory = {
  __typename?: 'getExpenseInvoiceCategory';
  category?: Maybe<ExpenseCategory>;
  created_at?: Maybe<Scalars['Date']['output']>;
  expenseInvoice?: Maybe<ExpenseCategory>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice?: Maybe<Array<Maybe<InvoicesList>>>;
  invoice_number?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type GetExpenseInvoiceCategoryList = {
  __typename?: 'getExpenseInvoiceCategoryList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<GetExpenseInvoiceCategory>>>;
};

export type GetExpenseInvoiceList = {
  __typename?: 'getExpenseInvoiceList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<GetExpenseInvoice>>>;
};

export type GetGoals = {
  __typename?: 'getGoals';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  business_type?: Maybe<BusinessType>;
  count_no_by_goal_period?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<Array<Maybe<Department>>>;
  employees?: Maybe<Array<Maybe<User>>>;
  goal_name?: Maybe<Scalars['String']['output']>;
  goal_period?: Maybe<GoalPeriod>;
  goal_type?: Maybe<GoalType>;
  is_all_department?: Maybe<Scalars['Boolean']['output']>;
  is_all_employee?: Maybe<Scalars['Boolean']['output']>;
  is_amount?: Maybe<Scalars['Boolean']['output']>;
  is_percentage?: Maybe<Scalars['Boolean']['output']>;
  recurring?: Maybe<Scalars['Boolean']['output']>;
  sales_target_incentive?: Maybe<Scalars['Int']['output']>;
  sales_target_value?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  store?: Maybe<BusinessLocation>;
  target_by_departments?: Maybe<Array<Maybe<TargetByDepartments>>>;
  target_by_employees?: Maybe<Array<Maybe<TargetByEmployees>>>;
  target_by_products?: Maybe<Array<Maybe<TargetByProducts>>>;
};

export type GetInvoiceExpenseAndCategoryList = {
  __typename?: 'getInvoiceExpenseAndCategoryList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<GetExpenseInvoiceAndCategory>>>;
};

export type GetInvoiceExpenseList = {
  __typename?: 'getInvoiceExpenseList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<GetExpenseInvoice>>>;
};

export type GetInvoiceItemList = {
  __typename?: 'getInvoiceItemList';
  data?: Maybe<Array<Maybe<InvoiceItem>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type GetInvoiceItemType = {
  __typename?: 'getInvoiceItemType';
  data?: Maybe<Array<Maybe<InvoiceItemDetails>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GetInvoiceList = {
  __typename?: 'getInvoiceList';
  config?: Maybe<DataTableConfig>;
  data?: Maybe<Array<Maybe<InvoiceData>>>;
};

export type GetLeaveAfterLastWorkingDayInput = {
  last_working_date: Scalars['DateTime']['input'];
  userId: Scalars['ID']['input'];
};

export type GetLeavePolicyArguments = {
  department?: InputMaybe<Scalars['ID']['input']>;
  designation?: InputMaybe<Scalars['ID']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type GetLinkedBusinessInput = {
  status?: InputMaybe<Scalars['String']['input']>;
  type: LinkedBusinessTypeEnum;
};

export type GetMarkInvoiceItems = {
  archive?: InputMaybe<ArchiveEnum>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type GetPaymentMethod = {
  __typename?: 'getPaymentMethod';
  billing_details?: Maybe<Billing_Details>;
  card?: Maybe<Card>;
  customer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GetQuickAsset = {
  __typename?: 'getQuickAsset';
  data?: Maybe<Array<Maybe<QuickAssetType>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type GetReserveAssetColor = {
  __typename?: 'getReserveAssetColor';
  employeeColor?: Maybe<Scalars['String']['output']>;
  siteColor?: Maybe<Scalars['String']['output']>;
};

export type GetReviewReport = {
  __typename?: 'getReviewReport';
  cycleId?: Maybe<Scalars['String']['output']>;
  cycle_name?: Maybe<Scalars['String']['output']>;
  employeID?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type GetRosterWithFilter = {
  department?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
};

export type GetScheduleByEmployeeIdInput = {
  employee: Scalars['ID']['input'];
  from_date: Scalars['Date']['input'];
  to_date: Scalars['Date']['input'];
};

export type GetScheduleGraphData = {
  __typename?: 'getScheduleGraphData';
  normalTime?: Maybe<Scalars['Float']['output']>;
  paidBreakMinuts?: Maybe<Scalars['Float']['output']>;
  paidLeaves?: Maybe<Scalars['Float']['output']>;
  scheduleEmployees?: Maybe<Scalars['Int']['output']>;
  scheduleMinuts?: Maybe<Scalars['Float']['output']>;
  unpaidLeaves?: Maybe<Scalars['Float']['output']>;
  unpaidbreakMinuts?: Maybe<Scalars['Float']['output']>;
  wages?: Maybe<Array<Maybe<Wages>>>;
};

export type GetShipToType = {
  __typename?: 'getShipToType';
  created_at?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type GetTillCountInput = {
  businessLocation: Scalars['ID']['input'];
  cashRegister: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type GetTimeSheetGraph = {
  department?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['ID']['input']>;
  start_date: Scalars['String']['input'];
};

export type GiftCardCategoryList = {
  __typename?: 'giftCardCategoryList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<GiftCardCategory>>>;
};

export type GiftCardCategoryListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardInput = {
  BusinessLocation: Scalars['ID']['input'];
  amount?: InputMaybe<Scalars['Float']['input']>;
  business?: InputMaybe<Scalars['ID']['input']>;
  business_type?: InputMaybe<BusinessType>;
  from: Scalars['ID']['input'];
  gift_card_url?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  send_gift_card: Scalars['DateTime']['input'];
  subject: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type GiftCardListFilter = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  headerFilter?: InputMaybe<HeaderFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardListingResult = {
  __typename?: 'giftCardListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<GiftCard>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export enum GoalPeriod {
  Daily = 'daily',
  Monthly = 'monthly',
  Weekly = 'weekly'
}

export enum GoalType {
  DepartmentGoal = 'department_goal',
  EmployeeGoal = 'employee_goal'
}

export type Goals = {
  __typename?: 'goals';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Scalars['ID']['output']>;
  business_type?: Maybe<BusinessType>;
  count_no_by_goal_period?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  employees?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  goal_name?: Maybe<Scalars['String']['output']>;
  goal_period?: Maybe<GoalPeriod>;
  goal_type?: Maybe<GoalType>;
  is_all_department?: Maybe<Scalars['Boolean']['output']>;
  is_all_employee?: Maybe<Scalars['Boolean']['output']>;
  is_amount?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_percentage?: Maybe<Scalars['Boolean']['output']>;
  recurring?: Maybe<Scalars['Boolean']['output']>;
  sales_target_incentive?: Maybe<Scalars['Int']['output']>;
  sales_target_value?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  store?: Maybe<Scalars['ID']['output']>;
  target_by_departments?: Maybe<Array<Maybe<TargetByDepartments>>>;
  target_by_employees?: Maybe<Array<Maybe<TargetByEmployees>>>;
  target_by_products?: Maybe<Array<Maybe<TargetByProducts>>>;
};

export type GoalsInput = {
  business?: InputMaybe<Scalars['ID']['input']>;
  business_type?: InputMaybe<BusinessType>;
  count_no_by_goal_period?: InputMaybe<Scalars['Int']['input']>;
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  goal_name?: InputMaybe<Scalars['String']['input']>;
  goal_period?: InputMaybe<GoalPeriod>;
  goal_type?: InputMaybe<GoalType>;
  is_all_department?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_employee?: InputMaybe<Scalars['Boolean']['input']>;
  is_amount?: InputMaybe<Scalars['Boolean']['input']>;
  is_percentage?: InputMaybe<Scalars['Boolean']['input']>;
  recurring?: InputMaybe<Scalars['Boolean']['input']>;
  sales_target_incentive?: InputMaybe<Scalars['Int']['input']>;
  sales_target_value?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  store?: InputMaybe<Scalars['ID']['input']>;
  target_by_departments?: InputMaybe<Array<InputMaybe<TargetByDepartmentsInput>>>;
  target_by_employees?: InputMaybe<Array<InputMaybe<TargetByEmployeesInput>>>;
  target_by_products?: InputMaybe<Array<InputMaybe<TargetByProductsInput>>>;
};

export type GoalsListFilter = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['ID']['input']>;
};

export type GoalsListingresult = {
  __typename?: 'goalsListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Goals>>>;
};

export type GrandTotalResult = {
  __typename?: 'grandTotalResult';
  absent?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  departmentWiseOT?: Maybe<DepartmentOvertimeResult>;
  earlyIn?: Maybe<Scalars['Int']['output']>;
  earlyOut?: Maybe<Scalars['Int']['output']>;
  lateOut?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  missPunchOut?: Maybe<Scalars['Int']['output']>;
  onLeave?: Maybe<Scalars['Int']['output']>;
  onTimeIn?: Maybe<Scalars['Int']['output']>;
  onTimeOut?: Maybe<Scalars['Int']['output']>;
  paidLeave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  publicHoliday?: Maybe<Scalars['Int']['output']>;
  restrected?: Maybe<Scalars['Int']['output']>;
  scheduleTime?: Maybe<Scalars['String']['output']>;
  shortLeave?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  unpaidLeave?: Maybe<Scalars['Int']['output']>;
  unrestrected?: Maybe<Scalars['Int']['output']>;
  unrestrictedWorkingTime?: Maybe<Scalars['String']['output']>;
  wages?: Maybe<Scalars['Float']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
  workingTime?: Maybe<Scalars['String']['output']>;
};

export type GrandTotalWagesGraph = {
  __typename?: 'grandTotalWagesGraph';
  grand_total?: Maybe<Scalars['Float']['output']>;
  wages_by_date?: Maybe<Array<Maybe<WagesByDate>>>;
};

export type GraphOfTimeSheet = {
  __typename?: 'graphOfTimeSheet';
  clockStatus?: Maybe<Array<Maybe<ClockStatus>>>;
  presentAbsentLeave?: Maybe<PresentAbsentLeave>;
  scheduleEmployeeAndHours?: Maybe<ScheduleEmployeeAndHours>;
  totalWagesAndScheduleHours?: Maybe<Array<Maybe<TotalWagesAndScheduleHours>>>;
};

export enum GroupAssignees {
  Automatic = 'Automatic',
  None = 'None'
}

export type GroupClockHistory = {
  __typename?: 'groupClockHistory';
  ClockedHistory?: Maybe<Array<Maybe<ClockedHistory>>>;
  countStatus?: Maybe<CountStatusGroupedEmployee>;
};

export type GroupEmployeeInput = {
  absents?: InputMaybe<Scalars['Boolean']['input']>;
  activeStatus?: InputMaybe<Array<InputMaybe<ClockedInStatusEnum>>>;
  break?: InputMaybe<Scalars['Boolean']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  leave?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  screen_id?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  short_break?: InputMaybe<Scalars['Boolean']['input']>;
  sort_by?: InputMaybe<Sort_By_Enum>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum GroupType {
  Decrement = 'Decrement',
  Department = 'Department',
  Employee = 'Employee',
  Increment = 'Increment',
  Role = 'Role'
}

export enum HalfDayConsideration {
  Schedule = 'Schedule',
  WeekHourLimit = 'weekHourLimit'
}

export enum HeaderFilter {
  All = 'all',
  NotUsed = 'not_used',
  Used = 'used'
}

export type HistoryListFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type HistoryListingResult = {
  __typename?: 'historyListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<UserHistory>>>;
};

export type HistoryTimes = {
  __typename?: 'historyTimes';
  previous_time?: Maybe<Scalars['String']['output']>;
  updated_time?: Maybe<Scalars['String']['output']>;
};

export type HrPolicyInput = {
  Business?: InputMaybe<Scalars['String']['input']>;
  How_are_leaves_deducted?: InputMaybe<Scalars['String']['input']>;
  apply_penalty_employee_daily_salary?: InputMaybe<Scalars['Int']['input']>;
  attendance_after_days?: InputMaybe<Scalars['Int']['input']>;
  attendance_rule?: InputMaybe<Scalars['String']['input']>;
  base?: InputMaybe<Scalars['String']['input']>;
  before_early_clockin?: InputMaybe<Scalars['Int']['input']>;
  block_employee_account_after?: InputMaybe<Scalars['Int']['input']>;
  block_employee_account_after_days?: InputMaybe<Scalars['Int']['input']>;
  block_employee_default_message?: InputMaybe<Scalars['String']['input']>;
  block_user?: InputMaybe<Scalars['Boolean']['input']>;
  block_user_acount_number_breaks?: InputMaybe<Scalars['Int']['input']>;
  break_deduct_salary_for_every_minuts?: InputMaybe<Scalars['Int']['input']>;
  break_deduct_salary_for_every_per_minuts?: InputMaybe<Scalars['Int']['input']>;
  break_grace_period?: InputMaybe<Scalars['Boolean']['input']>;
  break_modify_message?: InputMaybe<Scalars['String']['input']>;
  breaks?: InputMaybe<Scalars['String']['input']>;
  clock_out_grace_period?: InputMaybe<Scalars['Boolean']['input']>;
  deafult_message_earlyOut?: InputMaybe<Scalars['Boolean']['input']>;
  deafult_missing_attendance_message?: InputMaybe<Scalars['Boolean']['input']>;
  deduct_annually_minuts?: InputMaybe<Scalars['Int']['input']>;
  deduct_days?: InputMaybe<Scalars['Int']['input']>;
  deduct_days_of_leave_incidents?: InputMaybe<Scalars['Int']['input']>;
  deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  deduct_leave_time?: InputMaybe<Scalars['String']['input']>;
  deduct_salary_for_every?: InputMaybe<Scalars['Int']['input']>;
  deduct_salary_for_every_per_minuts?: InputMaybe<Scalars['Int']['input']>;
  deduction_based?: InputMaybe<Scalars['String']['input']>;
  default_message_early?: InputMaybe<Scalars['Boolean']['input']>;
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  earlyOut_deduct_based_on?: InputMaybe<Scalars['String']['input']>;
  earlyOut_deduct_salary_incidents?: InputMaybe<Scalars['Boolean']['input']>;
  earlyOut_maximum_early_time?: InputMaybe<Scalars['Int']['input']>;
  early_clockin?: InputMaybe<Scalars['Boolean']['input']>;
  employee_type?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  employesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  for_every_incidents_late_coming?: InputMaybe<Scalars['Int']['input']>;
  grace_period?: InputMaybe<Scalars['Int']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  hours_penalize_deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  is_auto_clocked_in?: InputMaybe<Scalars['Boolean']['input']>;
  is_auto_miss_punch_writeup?: InputMaybe<Scalars['Boolean']['input']>;
  is_clocked_in_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_to_employee?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_to_line_manager?: InputMaybe<Scalars['Boolean']['input']>;
  is_exclude_grace_time_in_working_hours?: InputMaybe<Scalars['Boolean']['input']>;
  is_paid_for_extra_time?: InputMaybe<Scalars['Boolean']['input']>;
  is_paid_weekend?: InputMaybe<Scalars['Boolean']['input']>;
  is_un_restricted: Scalars['Boolean']['input'];
  is_weekend_mode?: InputMaybe<Scalars['Boolean']['input']>;
  is_weekend_premium_after_limit?: InputMaybe<Scalars['Boolean']['input']>;
  is_weekend_premium_before_limit?: InputMaybe<Scalars['Boolean']['input']>;
  lateOut_maximum_late_time?: InputMaybe<Scalars['Int']['input']>;
  lateOut_message?: InputMaybe<Scalars['Boolean']['input']>;
  lateOut_message_late_time?: InputMaybe<Scalars['String']['input']>;
  late_clockin?: InputMaybe<Scalars['Boolean']['input']>;
  late_clockin_deduction?: InputMaybe<Scalars['String']['input']>;
  late_coming_incidents?: InputMaybe<Scalars['String']['input']>;
  maximum_absent_modify_message?: InputMaybe<Scalars['String']['input']>;
  maximum_emp_absent?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_emp_message?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_emp_time?: InputMaybe<Scalars['Int']['input']>;
  maximum_late_modify_message?: InputMaybe<Scalars['String']['input']>;
  maximum_late_time?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_late_time_deduction_after_minutes?: InputMaybe<Scalars['Int']['input']>;
  maximum_late_time_message?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_no_days?: InputMaybe<Scalars['Int']['input']>;
  messge_earlyOut?: InputMaybe<Scalars['String']['input']>;
  minuts_period_break_in_out?: InputMaybe<Scalars['Int']['input']>;
  missing_attendance_message?: InputMaybe<Scalars['String']['input']>;
  modify_message_early?: InputMaybe<Scalars['String']['input']>;
  over_time_hours?: InputMaybe<Scalars['Int']['input']>;
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  overtime?: InputMaybe<Scalars['String']['input']>;
  overtime_by_employeeType?: InputMaybe<Scalars['String']['input']>;
  paunch_out_mnts?: InputMaybe<Scalars['Int']['input']>;
  pay_type: Scalars['ID']['input'];
  penalize_deduct_leave?: InputMaybe<Scalars['Boolean']['input']>;
  percentage_Base?: InputMaybe<Scalars['String']['input']>;
  percentage_base_no_of_days?: InputMaybe<Scalars['Int']['input']>;
  percentage_base_percentage_of_hourse?: InputMaybe<Scalars['Int']['input']>;
  plenty_base?: InputMaybe<Scalars['String']['input']>;
  send_break_email_to_employee?: InputMaybe<Scalars['Boolean']['input']>;
  send_break_email_to_line_manager?: InputMaybe<Scalars['Boolean']['input']>;
  wagebased?: InputMaybe<Scalars['Boolean']['input']>;
  wagebased_on?: InputMaybe<Scalars['String']['input']>;
  weekEndDays?: InputMaybe<Array<InputMaybe<WeekEndDays>>>;
  working_days?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'image';
  _id?: Maybe<Scalars['ID']['output']>;
  dimension?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type ImportCsvSubsciption = {
  __typename?: 'importCsvSubsciption';
  currentEmployee?: Maybe<Scalars['Int']['output']>;
  doneEmployees?: Maybe<Scalars['Int']['output']>;
  employee_name?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
};

export enum InformedBy {
  Email = 'Email',
  Phone = 'Phone',
  Sms = 'SMS',
  Whatsapp = 'Whatsapp'
}

export type InpuUserTimeSheetStatus = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type InputAllAppraisalType = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputAllEvaluation = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  performance_cycle_Id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputAllobjectiveAssignment = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  performanceCycle?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputAppraisalObjective = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputAppraisalScales = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputAssetByBusiness = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type InputAssetByEmployee = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type InputAttendceRequest = {
  attendance_date?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type InputBagShipping = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputBagVendor = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputBreakUpdate = {
  breaks?: InputMaybe<Array<InputMaybe<MultipleBreakPayload>>>;
  employee_id: Array<Scalars['ID']['input']>;
  end_date: Scalars['String']['input'];
  start_date: Scalars['String']['input'];
};

export type InputCreateAdvanceFilter = {
  filter_name?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<InputMaybe<ListingFiltersInput>>>;
  list_type?: InputMaybe<Scalars['String']['input']>;
};

export type InputDeviceInfoById = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['ID']['input'];
};

export type InputDocumentsWithFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  department?: InputMaybe<Scalars['ID']['input']>;
  document_type?: InputMaybe<DocumentType>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<SortEnum>;
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InputEmailTemplateList = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type InputEmployeeDocuments = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<SortEnum>;
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputExpenseRequestUser = {
  expense_date?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type InputFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type InputGetAllTaxes = {
  archive?: InputMaybe<ArchiveEnum>;
};

export type InputGetReportObjective = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputGetShippingWithSearch = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<ArchiveEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputGetVendorWithSearch = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<ArchiveEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputGrandTotal = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type InputLoanRequestUser = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  request_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InputMarginTiersSearch = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<ArchiveEnum>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputOfTypes = {
  type: Scalars['Boolean']['input'];
};

export type InputPerformanceCycleType = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InputPerformance_Cycles = {
  ApraisalObjectiveAssignmnet?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  measurement?: InputMaybe<Scalars['Float']['input']>;
  objectiveAssigned?: InputMaybe<Scalars['ID']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  target?: InputMaybe<Scalars['Float']['input']>;
  weight_percent?: InputMaybe<Scalars['Float']['input']>;
};

export type InputProfitCategory = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  Category: Scalars['ID']['input'];
  markup?: InputMaybe<Scalars['Float']['input']>;
};

export type InputProfitCategoryWithSearch = {
  Category?: InputMaybe<Scalars['ID']['input']>;
  archive?: InputMaybe<ArchiveEnum>;
  id?: InputMaybe<Scalars['ID']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
};

export type InputReason = {
  reason_name: Scalars['String']['input'];
  reason_type: ReasonTypeEnum;
};

export type InputReasonMark = {
  type: EnumReasonMark;
};

export type InputRecruitment = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputRepairPrice = {
  DeviceIssue: Array<Scalars['ID']['input']>;
  DeviceModel: Scalars['ID']['input'];
  Service: Scalars['ID']['input'];
  created_by?: InputMaybe<Scalars['ID']['input']>;
  minimum_price: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  repair_label: Scalars['String']['input'];
};

export type InputRepairPriceWithSearch = {
  archive?: InputMaybe<ArchiveEnum>;
  repair_label?: InputMaybe<Scalars['String']['input']>;
};

export type InputReserveAssetColor = {
  employeeColor: Scalars['String']['input'];
  siteColor: Scalars['String']['input'];
};

export type InputReviewcyclereport = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputSearchMarkReason = {
  archive?: InputMaybe<ArchiveEnum>;
};

export type InputTerminalAppHistory = {
  appType?: InputMaybe<Application_Type>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type InputTimeOffRequestUser = {
  from_timeOff_date?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  to_timeOff_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InputTimeSheet = {
  clockedInStatus?: InputMaybe<Array<InputMaybe<ClockInEnum>>>;
  clockedOutStatus?: InputMaybe<Array<InputMaybe<ClockOutEnum>>>;
  currentView?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  endDate: Scalars['DateTime']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  over_time?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payrollType?: InputMaybe<PayrollType>;
  role?: InputMaybe<Scalars['ID']['input']>;
  rosterStore?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  status?: InputMaybe<AttendanceWithStatus>;
  timeOff?: InputMaybe<_Schedule>;
};

export type InputTimeSheetEmployee = {
  employee?: InputMaybe<Scalars['ID']['input']>;
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type InputTimeSheetEmployeeId = {
  employee: Scalars['ID']['input'];
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
  status: AttendanceWithStatus;
};

export type InputTypeMarginTiers = {
  from_price?: InputMaybe<Scalars['Float']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  to_price?: InputMaybe<Scalars['Float']['input']>;
};

export type InputUpdateBrand = {
  _id: Scalars['ID']['input'];
  brand_name?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateMarginTiers = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  from_price?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  markup?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  to_price?: InputMaybe<Scalars['Float']['input']>;
};

export type InputUpdateModel = {
  AssetBrand?: InputMaybe<Scalars['ID']['input']>;
  _id: Scalars['ID']['input'];
  model_name?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateMultipleSubCateg = {
  AssetCategory?: InputMaybe<Scalars['ID']['input']>;
  subCatgeoryName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subCatgeoryObj?: InputMaybe<Array<InputMaybe<SubCatgoryObjs>>>;
};

export type InputUpdateProfitCategory = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  Category?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  markup?: InputMaybe<Scalars['Float']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type InputUpdateReason = {
  id: Scalars['ID']['input'];
  reason_name?: InputMaybe<Scalars['String']['input']>;
  reason_type?: InputMaybe<ReasonTypeEnum>;
};

export type InputUpdateRepairPrice = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  DeviceIssue?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  DeviceModel?: InputMaybe<Scalars['ID']['input']>;
  Service?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  minimum_price?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  repair_label?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type InputUpdateShipping = {
  _id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateVendor = {
  _id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputUserAppDevice = {
  Business: Scalars['ID']['input'];
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  app_type: AppTypes;
  device_id: Scalars['String']['input'];
  device_manufacturer?: InputMaybe<Scalars['String']['input']>;
  device_model?: InputMaybe<Scalars['String']['input']>;
  device_name?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  operating_system?: InputMaybe<Scalars['String']['input']>;
  os_version?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  sim_network?: InputMaybe<Scalars['String']['input']>;
  sim_number?: InputMaybe<Scalars['String']['input']>;
};

export type InputUserMonthly = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type InputWithFilter = {
  department?: InputMaybe<Scalars['ID']['input']>;
  document_type?: InputMaybe<DocumentTypeEnum>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type: DocumentTypeEnums;
};

export type InputadminDashboard = {
  end_date?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
};

export type InputfilterAssetBrand = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InputobjectiveAssigned = {
  AppraisalObjective?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<Scalars['Float']['input']>;
  weight_percent?: InputMaybe<Scalars['Float']['input']>;
};

export type InsuranceLinking = {
  insurance?: InputMaybe<Scalars['ID']['input']>;
};

export type InsuranceLinks = {
  __typename?: 'insuranceLinks';
  insurance?: Maybe<Insurance>;
};

export type InsuranceListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InsuranceListingResult = {
  __typename?: 'insuranceListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Insurance>>>;
};

export type InsuranceLogs = {
  __typename?: 'insuranceLogs';
  action?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<Asset>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type InvoiceCategoryDetails = {
  __typename?: 'invoiceCategoryDetails';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<ExpenseCategory>>>;
};

export type InvoiceDetail = {
  __typename?: 'invoiceDetail';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<InvoiceItemsType>>>;
};

export type InvoiceDetails = {
  __typename?: 'invoiceDetails';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<InvoiceItemsTypes>>>;
};

export type InvoiceItem = {
  __typename?: 'invoiceItem';
  _id?: Maybe<Scalars['ID']['output']>;
  assetIds?: Maybe<Asset>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoiceObjectId?: Maybe<Scalars['ID']['output']>;
  is_expense?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serial_number?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type InvoiceItemDetails = {
  __typename?: 'invoiceItemDetails';
  _id?: Maybe<Scalars['ID']['output']>;
  assetIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  expenseId?: Maybe<Scalars['ID']['output']>;
  expenseInvCategoryId?: Maybe<Scalars['ID']['output']>;
  is_expense?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type InvoiceItems = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  expenseId?: InputMaybe<Scalars['ID']['input']>;
  expenseInvCategoryId?: InputMaybe<Scalars['ID']['input']>;
  is_expense?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newCreatedAssetsList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  serial_number?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type InvoiceItemsType = {
  __typename?: 'invoiceItemsType';
  assetIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  expenseId?: Maybe<GetExpenseInvoice>;
  expenseInvCategoryId?: Maybe<ExpenseCategory>;
  id?: Maybe<Scalars['ID']['output']>;
  is_expense?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  serial_number?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type InvoiceItemsTypes = {
  __typename?: 'invoiceItemsTypes';
  category?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoice_name?: Maybe<Scalars['String']['output']>;
  invoice_number?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
};

export type InvoicesInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  filterInvoice?: InputMaybe<FilterInvoice>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InvoicesList = {
  __typename?: 'invoicesList';
  assignToAsset?: Maybe<Scalars['Float']['output']>;
  billTo?: Maybe<GetShipToType>;
  company?: Maybe<Scalars['String']['output']>;
  courtesyCredit?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  grandTotal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoiceItems?: Maybe<Array<Maybe<InvoiceItemsType>>>;
  invoiceNumber?: Maybe<Scalars['Int']['output']>;
  invoice_image?: Maybe<Scalars['String']['output']>;
  invoice_image_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['Date']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  shipTo?: Maybe<GetShipToType>;
  shippingMethod?: Maybe<ShippingMethods>;
  subTotal?: Maybe<Scalars['Float']['output']>;
  taxes?: Maybe<Scalars['Float']['output']>;
  toPayOff?: Maybe<Scalars['Float']['output']>;
  totalInvoiceItems?: Maybe<Scalars['Float']['output']>;
  totalPaid?: Maybe<Scalars['Float']['output']>;
  totalProducts?: Maybe<Scalars['Float']['output']>;
  totalQty?: Maybe<Scalars['Int']['output']>;
  totalSerialNumber?: Maybe<Scalars['Float']['output']>;
  totalShippingCharges?: Maybe<Scalars['Float']['output']>;
  totalSku?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  vendor?: Maybe<Vendors>;
};

export enum IsActive {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export enum Is_Active {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type JoiningLatterInput = {
  Joining_formalities?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
};

export type Joining_Latter = {
  __typename?: 'joining_latter';
  Joining_formalities?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  footer?: Maybe<Scalars['String']['output']>;
};

export type Joiningdateinput = {
  joining_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseListFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum LeaveDuration {
  FullDay = 'FullDay',
  HalfDay = 'HalfDay'
}

export enum LeaveEntitlement {
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

export type LeaveInput = {
  end_time?: InputMaybe<Scalars['String']['input']>;
  from_date: Scalars['DateTime']['input'];
  is_out_of_accural_leave?: InputMaybe<Scalars['Boolean']['input']>;
  is_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  leave_date?: InputMaybe<Scalars['DateTime']['input']>;
  leave_type?: InputMaybe<Scalars['String']['input']>;
  no_of_days?: InputMaybe<Scalars['Float']['input']>;
  out_of_accural_leave_days?: InputMaybe<Scalars['Float']['input']>;
  out_of_accural_leave_hours?: InputMaybe<Scalars['Float']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to_date: Scalars['DateTime']['input'];
  totalMinuts?: InputMaybe<Scalars['Float']['input']>;
};

export type LeaveInputType = {
  __typename?: 'leaveInputType';
  end_time?: Maybe<Scalars['String']['output']>;
  from_date: Scalars['DateTime']['output'];
  is_out_of_accural_leave?: Maybe<Scalars['Boolean']['output']>;
  is_sandwich?: Maybe<Scalars['Boolean']['output']>;
  leave_date?: Maybe<Scalars['DateTime']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
  no_of_days?: Maybe<Scalars['Float']['output']>;
  out_of_accural_leave_days?: Maybe<Scalars['Float']['output']>;
  out_of_accural_leave_hours?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  to_date: Scalars['DateTime']['output'];
  totalMinuts?: Maybe<Scalars['Float']['output']>;
};

export type LeavePolicyInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  accrual_no_of_hours?: InputMaybe<Scalars['Float']['input']>;
  accrual_on_day?: InputMaybe<Scalars['String']['input']>;
  accrual_on_month?: InputMaybe<MonthEnum>;
  accrual_one_time_day?: InputMaybe<Scalars['String']['input']>;
  accrual_one_time_month?: InputMaybe<MonthEnum>;
  accrual_type?: InputMaybe<YearlyMonthlyEnum>;
  assign_to?: InputMaybe<Array<AssignToPolicyInput>>;
  business?: InputMaybe<Scalars['ID']['input']>;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  carry_forward_limit?: InputMaybe<Scalars['Float']['input']>;
  is_accrual?: InputMaybe<Scalars['Boolean']['input']>;
  is_carry_forward_percentage?: InputMaybe<Scalars['Boolean']['input']>;
  is_hourly_employee_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  is_manual_deduction?: InputMaybe<Scalars['Boolean']['input']>;
  is_reset?: InputMaybe<Scalars['Boolean']['input']>;
  is_salary_employee_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  is_short_leave_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  is_user_input_value?: InputMaybe<Scalars['Boolean']['input']>;
  is_week_hour_limit?: InputMaybe<Scalars['Boolean']['input']>;
  leaves: Array<LeavesInput>;
  manual_deduction_value?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  policy_type?: InputMaybe<PolicyTypeEnum>;
  reset_carry_forward?: InputMaybe<CarryForwardEnum>;
  reset_carry_forward_count?: InputMaybe<Scalars['Float']['input']>;
  reset_carry_forward_type?: InputMaybe<CarryForwardTypeEnum>;
  reset_max_limit?: InputMaybe<Scalars['Float']['input']>;
  reset_on_day?: InputMaybe<Scalars['String']['input']>;
  reset_on_month?: InputMaybe<MonthEnum>;
  reset_one_time_day?: InputMaybe<Scalars['String']['input']>;
  reset_one_time_month?: InputMaybe<MonthEnum>;
  reset_type?: InputMaybe<YearlyMonthlyEnum>;
  sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  sandwich_on_public_holiday?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LeaveTypeEmployeeById = {
  __typename?: 'leaveTypeEmployeeById';
  _id?: Maybe<Scalars['String']['output']>;
  carry_forword?: Maybe<Scalars['Int']['output']>;
  countIn?: Maybe<Scalars['String']['output']>;
  time_off_days?: Maybe<Scalars['String']['output']>;
  time_off_type?: Maybe<LeaveType>;
  unpaid_count?: Maybe<Scalars['String']['output']>;
  working_days?: Maybe<Scalars['String']['output']>;
};

export type LeaveTypeListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  filterLeavesType?: InputMaybe<FilterLeaves>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type LeaveTypeListingResult = {
  __typename?: 'leaveTypeListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<LeaveType>>>;
};

export enum LeaveTypesEnum {
  OnDuty = 'OnDuty',
  Paid = 'Paid',
  Unpaid = 'Unpaid'
}

export type LeavesInput = {
  carry_forward_limit?: InputMaybe<Scalars['Float']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  countIn?: InputMaybe<LeaveCountTypeEnum>;
  leaveAssighment?: InputMaybe<LeaveEntitlement>;
  policy_type?: InputMaybe<PolicyTypeEnum>;
  type: Scalars['ID']['input'];
  unpaid_count?: InputMaybe<Scalars['Int']['input']>;
};

export type LeavesType = {
  __typename?: 'leavesType';
  carry_forward_limit?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  countIn?: Maybe<Scalars['String']['output']>;
  leaveAssighment?: Maybe<Scalars['String']['output']>;
  policy_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LeaveType>;
};

export type LeavesWithType = {
  __typename?: 'leavesWithType';
  id?: Maybe<Scalars['String']['output']>;
  leaveName?: Maybe<Scalars['String']['output']>;
  totalLeaves?: Maybe<Scalars['Int']['output']>;
};

export type Level = {
  __typename?: 'level';
  approval_level?: Maybe<Scalars['Int']['output']>;
  approval_to?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  level?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Role>;
};

export type LinearFlowItem = {
  __typename?: 'linearFlowItem';
  User?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  objectiveStatus?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LinkBusinessesInput = {
  requested_to: Scalars['ID']['input'];
};

export enum LinkedBusinessTypeEnum {
  LinkedBusiness = 'linked_business',
  LinkedWithMe = 'linked_with_me'
}

export type LinkingAssets = {
  __typename?: 'linkingAssets';
  asset?: Maybe<Asset>;
  relation?: Maybe<Scalars['String']['output']>;
};

export type LinkingRelationAsset = {
  accessoryId?: InputMaybe<Scalars['ID']['input']>;
  assetId?: InputMaybe<Scalars['ID']['input']>;
  assetTag: Scalars['String']['input'];
  linkingTransactWhole: Scalars['Boolean']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  relation: RelationAsset;
  relationAssetId: Scalars['ID']['input'];
};

export type ListingColumnsInput = {
  column_data?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  filters_data?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  header?: InputMaybe<Scalars['String']['input']>;
  is_amount?: InputMaybe<Scalars['Boolean']['input']>;
  is_search_able?: InputMaybe<Scalars['Boolean']['input']>;
  is_sortable?: InputMaybe<Scalars['Boolean']['input']>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ListingColumnsType = {
  __typename?: 'listingColumnsType';
  _id?: Maybe<Scalars['ID']['output']>;
  column_data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  column_dropdown_value?: Maybe<Array<Maybe<Column_Dropdown_Value>>>;
  field?: Maybe<Scalars['String']['output']>;
  filterValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  header?: Maybe<Scalars['String']['output']>;
  is_amount?: Maybe<Scalars['Boolean']['output']>;
  is_search_able?: Maybe<Scalars['Boolean']['output']>;
  is_sortable?: Maybe<Scalars['Boolean']['output']>;
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  query?: Maybe<QueryType>;
  search?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ListingFiltersInput = {
  _ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<FiltersQueryInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ListingFiltersType = {
  __typename?: 'listingFiltersType';
  _ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  field?: Maybe<Scalars['String']['output']>;
  query?: Maybe<FiltersQueryType>;
  search?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ListingTablePreset = {
  __typename?: 'listingTablePreset';
  activeFilters?: Maybe<Scalars['Boolean']['output']>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  config?: Maybe<TableConfigListing>;
  filters?: Maybe<Array<Maybe<ListingFiltersType>>>;
  id?: Maybe<Scalars['ID']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  loadingCall?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LoanFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  request_date?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type LoanRequestFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LoanResult = {
  __typename?: 'loanResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<LoanPayment>>>;
};

export type LoanTransactionFilter = {
  field?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  loan_id: Scalars['ID']['input'];
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type LoanTransactionResult = {
  __typename?: 'loanTransactionResult';
  config?: Maybe<DataTableConfig>;
  employee?: Maybe<User>;
  results?: Maybe<Array<Maybe<LoanTransaction>>>;
};

export type LocationData = {
  __typename?: 'locationData';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Int']['output']>;
  lon?: Maybe<Scalars['Int']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  store_number?: Maybe<Scalars['String']['output']>;
};

export type LogActivity = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  subscription: Scalars['ID']['input'];
};

export type LogActivityListingResult = {
  __typename?: 'logActivityListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<SubscriptionLogActivity>>>;
};

export type LogInput = {
  break_id?: InputMaybe<Scalars['ID']['input']>;
  log_date?: InputMaybe<Scalars['DateTime']['input']>;
  log_status?: InputMaybe<LogTypes>;
  total_minutes?: InputMaybe<Scalars['Int']['input']>;
};

export type LogType = {
  __typename?: 'logType';
  break_id?: Maybe<MasterDataValue>;
  log_date?: Maybe<Scalars['DateTime']['output']>;
  log_status?: Maybe<Scalars['String']['output']>;
  total_minutes?: Maybe<Scalars['Int']['output']>;
};

export enum LogTypes {
  BreakEarlyOut = 'break_early_out',
  BreakGraceLateOut = 'break_grace_late_out',
  BreakLateOut = 'break_late_out',
  EarlyClockOut = 'early_clock_out',
  GraceEarlyClockIn = 'grace_early_clock_in',
  GraceEarlyClockOut = 'grace_early_clock_out',
  GraceLateClockIn = 'grace_late_clock_in',
  GraceLateClockOut = 'grace_late_clock_out',
  LateClockIn = 'late_clock_in',
  LateClockOut = 'late_clock_out'
}

export type LoginToOtherBusinessInput = {
  app_type?: InputMaybe<Scalars['String']['input']>;
  business_id: Scalars['ID']['input'];
  device_id?: InputMaybe<Scalars['String']['input']>;
  device_token?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  long?: InputMaybe<Scalars['String']['input']>;
};

export type Logs = {
  __typename?: 'logs';
  from?: Maybe<Scalars['String']['output']>;
  log_type?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type LogsAsset = {
  __typename?: 'logsAsset';
  action?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<User>;
  assignedDepartment?: Maybe<Department>;
  assignedSite?: Maybe<BusinessLocation>;
  changedFrom?: Maybe<Scalars['String']['output']>;
  changedTo?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
  oldAssigneId?: Maybe<User>;
  quantity?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LogsAttendanceRegulation = {
  __typename?: 'logsAttendanceRegulation';
  action?: Maybe<Scalars['String']['output']>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type LogsExpense = {
  __typename?: 'logsExpense';
  action?: Maybe<Scalars['String']['output']>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type LogsLoanPayments = {
  __typename?: 'logsLoanPayments';
  action?: Maybe<Scalars['String']['output']>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type LogsTask = {
  __typename?: 'logsTask';
  action?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<User>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
  task_id?: Maybe<Scalars['String']['output']>;
};

export type LogsTimeOff = {
  __typename?: 'logsTimeOff';
  action?: Maybe<Scalars['String']['output']>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type LogsWriteUp = {
  __typename?: 'logsWriteUp';
  action?: Maybe<Scalars['String']['output']>;
  changed_from?: Maybe<Scalars['String']['output']>;
  changed_to?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type MaintenanceListFilter = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maintenanceColumns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MaintenanceListingResult = {
  __typename?: 'maintenanceListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Maintenance>>>;
};

export type ManuallyAdjustmentInput = {
  adjusted_amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  is_credit: Scalars['Boolean']['input'];
  payroll_detail_ids: Array<Scalars['ID']['input']>;
  payroll_id: Scalars['ID']['input'];
};

export type ManuallyLogs = {
  __typename?: 'manuallyLogs';
  breaks?: Maybe<Array<Maybe<BreakLogs>>>;
  clock_in?: Maybe<ClockIn>;
  clock_in_status?: Maybe<ClockInOUtStatus>;
  clock_out?: Maybe<ClockOut>;
  clock_out_status?: Maybe<ClockInOUtStatus>;
  history_times?: Maybe<HistoryTimes>;
  log_date?: Maybe<Scalars['DateTime']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  short_leave?: Maybe<ShortLeaveLog>;
  updated_by?: Maybe<User>;
};

export type MarkAsReadInput = {
  feature?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  module?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum MaximumDuration {
  HalfDay = 'halfDay',
  Partialy = 'partialy'
}

export enum MaximumDurationEnum {
  HalfDay = 'halfDay',
  Partialy = 'partialy'
}

export type MedicalInsuranceInput = {
  medical_facilities_name: Scalars['String']['input'];
  medical_insurance_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MedicalInsuranceListFilter = {
  business?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalInsurancePackageInput = {
  assigned_to?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  enrollment_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  enrollment_end_days?: InputMaybe<Scalars['Int']['input']>;
  enrollment_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  enrollment_start_days?: InputMaybe<Scalars['Int']['input']>;
  expire_days?: InputMaybe<Scalars['Int']['input']>;
  is_open_enrollment_period?: InputMaybe<Scalars['Boolean']['input']>;
  is_post_hire_eligibility?: InputMaybe<Scalars['Boolean']['input']>;
  medical_facilities_id?: InputMaybe<Array<Scalars['ID']['input']>>;
  medical_package_id?: InputMaybe<Scalars['ID']['input']>;
  monthly_cost_to_employe?: InputMaybe<Scalars['Float']['input']>;
  monthly_cost_to_employer?: InputMaybe<Scalars['Float']['input']>;
  notifications?: InputMaybe<Scalars['Boolean']['input']>;
  notify_before_days?: InputMaybe<Scalars['Int']['input']>;
  package_name?: InputMaybe<Scalars['String']['input']>;
  package_price?: InputMaybe<Scalars['Float']['input']>;
  package_type?: InputMaybe<Scalars['String']['input']>;
  upload_document?: InputMaybe<Scalars['Upload']['input']>;
};

export enum ModuleEnum {
  Asset = 'asset',
  Business = 'business',
  Document = 'document',
  GiftCard = 'giftCard',
  Leave = 'leave',
  Schedule = 'schedule',
  Task = 'task',
  Timesheet = 'timesheet',
  User = 'user'
}

export type Modulefeatureandpermission = {
  __typename?: 'modulefeatureandpermission';
  POSPermissionResult?: Maybe<Array<Maybe<ModulesFeaturesPermissions>>>;
  adminPermissionResult?: Maybe<Array<Maybe<ModulesFeaturesPermissions>>>;
};

export enum MonthEnum {
  Apr = 'Apr',
  Aug = 'Aug',
  Dec = 'Dec',
  Feb = 'Feb',
  Jan = 'Jan',
  Jul = 'Jul',
  Jun = 'Jun',
  Mar = 'Mar',
  May = 'May',
  Nov = 'Nov',
  Oct = 'Oct',
  Sep = 'Sep'
}

export type MultiScheduleDeleteInput = {
  employeesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_all?: InputMaybe<Scalars['Boolean']['input']>;
  is_delete_clockhistry?: InputMaybe<Scalars['Boolean']['input']>;
  is_delete_timeoff?: InputMaybe<Scalars['Boolean']['input']>;
  notifyByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  start_date: Scalars['DateTime']['input'];
};

export type MultipleBreakPayload = {
  break_id: Scalars['ID']['input'];
  minimum_break_percentage: Scalars['Int']['input'];
};

export type MyTaskResult = {
  __typename?: 'myTaskResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<TaskManagement>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type NextWeekInput = {
  _id: Scalars['ID']['input'];
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  end_date: Scalars['DateTime']['input'];
  includes_comments?: InputMaybe<Scalars['Boolean']['input']>;
  no_of_weeks: Scalars['Int']['input'];
  start_date: Scalars['DateTime']['input'];
};

export enum NodeColorModeEnum {
  Layer = 'layer',
  ParentChild = 'parentChild'
}

export type Notification = {
  __typename?: 'notification';
  _id?: Maybe<Scalars['ID']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  business_id?: Maybe<Business>;
  created_at?: Maybe<Scalars['Date']['output']>;
  data_object?: Maybe<Scalars['JSON']['output']>;
  defaultSystemNotification?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  for_user?: Maybe<User>;
  has_action?: Maybe<Scalars['Boolean']['output']>;
  is_read?: Maybe<Scalars['Boolean']['output']>;
  is_reminder_sent?: Maybe<Scalars['Boolean']['output']>;
  is_veiwed?: Maybe<Scalars['Boolean']['output']>;
  path?: Maybe<NotificationPath>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<User>;
};

export type NotificationCount = {
  __typename?: 'notificationCount';
  notificationCount?: Maybe<Scalars['Int']['output']>;
};

export type NotificationFilterInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  feature?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  is_deleted: Scalars['Boolean']['input'];
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  module?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page: Scalars['Int']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NotificationListingResult = {
  __typename?: 'notificationListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  notificationCount?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Notification>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type NotificationsInput = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Objective = {
  __typename?: 'objective';
  AppraisalObjective?: Maybe<AppraisalObjecive>;
  _id?: Maybe<Scalars['ID']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  target?: Maybe<Scalars['Float']['output']>;
  weight_percent?: Maybe<Scalars['Float']['output']>;
};

export type ObjectiveAssignedInput = {
  AppraisalType?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  objective?: InputMaybe<Array<InputMaybe<InputobjectiveAssigned>>>;
  total_weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ObjectiveAssignment = {
  __typename?: 'objectiveAssignment';
  Business?: Maybe<Business>;
  PerformanceCycle?: Maybe<PerformanceCycleType>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_by?: Maybe<User>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  linearFlow?: Maybe<Array<Maybe<LinearFlowItem>>>;
  objective?: Maybe<Scalars['Int']['output']>;
  objectiveAssigned?: Maybe<Array<Maybe<Objective_Assigned>>>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<User>;
};

export type ObjectiveAssignmentResult = {
  __typename?: 'objectiveAssignmentResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ObjectiveAssignment>>>;
};

export type ObjectiveAssignments = {
  __typename?: 'objectiveAssignments';
  Business?: Maybe<Business>;
  PerformanceCycle?: Maybe<PerformanceCycleType>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  linearFlow?: Maybe<Array<Maybe<LinearFlowItem>>>;
  objectiveAssigned?: Maybe<Array<Maybe<Objective_Assigned>>>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ObjectiveAssignmnet = {
  objective?: InputMaybe<Array<InputMaybe<InputPerformance_Cycles>>>;
  objectiveAssigned?: InputMaybe<Scalars['ID']['input']>;
  total_score?: InputMaybe<Scalars['Float']['input']>;
  total_target?: InputMaybe<Scalars['Float']['input']>;
  total_weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Objective_Assigned = {
  __typename?: 'objective_Assigned';
  AppraisalType?: Maybe<AppraisalType>;
  _id?: Maybe<Scalars['ID']['output']>;
  attendanceStatus?: Maybe<Array<Maybe<AttendanceStatusType>>>;
  objective?: Maybe<Array<Maybe<Objective>>>;
  task?: Maybe<Array<Maybe<TaskType>>>;
  total?: Maybe<Scalars['Int']['output']>;
  total_score?: Maybe<Scalars['Int']['output']>;
  total_target?: Maybe<Scalars['Int']['output']>;
  total_weight?: Maybe<Scalars['Int']['output']>;
};

export type OldAndNewSchedule = {
  __typename?: 'oldAndNewSchedule';
  scheduleListOldAndNew?: Maybe<Array<Maybe<ScheduleListOldAndNew>>>;
};

export enum OneTimeDateEnum {
  BirthDate = 'BirthDate',
  JoiningDate = 'JoiningDate',
  PolicyDate = 'PolicyDate'
}

export enum OneTimeMonthEnum {
  PolicyMonth = 'PolicyMonth'
}

export enum OpenCashDrawerType {
  Deposit = 'deposit',
  Withdraw = 'withdraw'
}

export type OverLapedSchedules = {
  __typename?: 'overLapedSchedules';
  employeeId?: Maybe<Scalars['String']['output']>;
  employee_name?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  schedule_date?: Maybe<Scalars['String']['output']>;
};

export type OverTime = {
  __typename?: 'overTime';
  overtimeDate?: Maybe<Scalars['String']['output']>;
  overtimeDuration?: Maybe<Scalars['Int']['output']>;
};

export type PackageById = {
  __typename?: 'packageById';
  package?: Maybe<Package>;
  permissions?: Maybe<DividePermission>;
};

export type PackageInput = {
  auto_renewal?: InputMaybe<Scalars['Boolean']['input']>;
  business: Scalars['ID']['input'];
  hr_module_only?: InputMaybe<Scalars['Boolean']['input']>;
  is_pakage_free?: InputMaybe<Scalars['Boolean']['input']>;
  is_public_package?: InputMaybe<Scalars['Boolean']['input']>;
  no_of_employee: Scalars['Int']['input'];
  no_of_store?: InputMaybe<Scalars['Int']['input']>;
  no_of_transcation?: InputMaybe<Scalars['Int']['input']>;
  number_of_cashregisters?: InputMaybe<Scalars['Int']['input']>;
  package_name: Scalars['String']['input'];
  package_price?: InputMaybe<Scalars['Float']['input']>;
  package_type: PackageType;
  per_employee_fee?: InputMaybe<Scalars['Float']['input']>;
  per_store_fee?: InputMaybe<Scalars['Float']['input']>;
  permissions: Array<InputMaybe<PermissionInput>>;
  policy?: InputMaybe<PolicyInput>;
  purchase_from_ms?: InputMaybe<Scalars['Boolean']['input']>;
  recurring: PackageRecurrignType;
  transcation_fee?: InputMaybe<Scalars['Float']['input']>;
  transcation_fee_calculation_type?: InputMaybe<PackageTranscationFeeType>;
  transcation_fee_ending_limit?: InputMaybe<Scalars['Float']['input']>;
  transcation_fee_starting_limit?: InputMaybe<Scalars['Float']['input']>;
};

export type PackageListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  package_type?: InputMaybe<PackageType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PaidUnPaidInput = {
  business: Scalars['ID']['input'];
  hours_earn_per_year: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  include_weekends: Scalars['Boolean']['input'];
  is_paid_leave: Scalars['Boolean']['input'];
  policy_name: Scalars['String']['input'];
};

export type PaidUnPaidListFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type PaidUnPaidlistingResult = {
  __typename?: 'paidUnPaidlistingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<PaidUnPaids>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type PaidUnPaids = {
  __typename?: 'paidUnPaids';
  _id?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  hours_earn_per_year?: Maybe<Scalars['Int']['output']>;
  include_weekends?: Maybe<Scalars['Boolean']['output']>;
  is_paid_leave?: Maybe<Scalars['Boolean']['output']>;
  policy_name?: Maybe<Scalars['String']['output']>;
};

export type PasswordManagerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<EncryptedPasswordInput>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordManagerType = {
  __typename?: 'passwordManagerType';
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<EncryptedPasswordType>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export enum PayPeriodEnum {
  MonthlyPeriod = 'MonthlyPeriod'
}

export enum PayTypeEnum {
  BiWeekly = 'BiWeekly',
  PerMonth = 'PerMonth',
  Weekly = 'Weekly'
}

export enum Payment {
  Paid = 'paid',
  UnPaid = 'unPaid'
}

export type PaymentMethod = {
  card_holder_name?: InputMaybe<Scalars['String']['input']>;
  card_number?: InputMaybe<Scalars['String']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  expiration_month?: InputMaybe<Scalars['String']['input']>;
  expiration_year?: InputMaybe<Scalars['String']['input']>;
  save_card?: InputMaybe<Scalars['Boolean']['input']>;
  subscription_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum PaymentTypeEnum {
  AdditionalCost = 'additional_cost',
  ExtraItem = 'extra_item',
  OrderPayment = 'order_payment'
}

export type PayrollListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_dispersed?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pay_period: PayrollPayPeriodEnum;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PayrollResult = {
  __typename?: 'payrollResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Payroll>>>;
};

export enum PayrollStatus {
  Approved = 'Approved',
  Cancelled = 'Cancelled',
  InProgress = 'InProgress',
  OnHold = 'OnHold',
  Paid = 'Paid',
  Pending = 'Pending'
}

export enum PayrollType {
  Hourly = 'Hourly',
  Salary = 'Salary'
}

export type Payroll_Detail = {
  __typename?: 'payroll_detail';
  User?: Maybe<User>;
  is_manually_adjust?: Maybe<Scalars['Boolean']['output']>;
  salary_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_adjusted_amount?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
};

export type PendingRequests = {
  __typename?: 'pendingRequests';
  assetListing?: Maybe<Array<Maybe<Asset>>>;
  clockedHistory?: Maybe<Array<Maybe<ClockedHistory>>>;
  documentListing?: Maybe<Array<Maybe<DocumentControlAttachment>>>;
  pending_attendance_requests?: Maybe<Array<Maybe<AttendanceRegulation>>>;
  pending_expenses_requests?: Maybe<Array<Maybe<Expense>>>;
  pending_leaves_requests?: Maybe<Array<Maybe<TimeOff>>>;
  pending_loan_requests?: Maybe<Array<Maybe<LoanPayment>>>;
  pending_writeup_requests?: Maybe<Array<Maybe<WriteUp>>>;
  tasklisting?: Maybe<Array<Maybe<TaskManagement_>>>;
  workFlowListing?: Maybe<Array<Maybe<UserWorkFlow>>>;
};

export type PerformanceCycleInput = {
  Department?: InputMaybe<Scalars['ID']['input']>;
  Role?: InputMaybe<Scalars['ID']['input']>;
  appraisal_setting?: InputMaybe<Array<InputMaybe<AppraisalSettingInput>>>;
  appraiser_setting?: InputMaybe<Array<InputMaybe<AppraiserSettingInput>>>;
  assigning_start_date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  end_date: Scalars['Date']['input'];
  is_all?: InputMaybe<Scalars['Boolean']['input']>;
  is_linear_flow?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  start_date: Scalars['Date']['input'];
};

export type PerformanceCycleResult = {
  __typename?: 'performanceCycleResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<PerformanceCycleType>>>;
};

export type PerformanceCycleType = {
  __typename?: 'performanceCycleType';
  Department?: Maybe<Department>;
  Role?: Maybe<Role>;
  _id?: Maybe<Scalars['ID']['output']>;
  appraisal_setting?: Maybe<Array<Maybe<AppraisalSettingType>>>;
  appraiser_setting?: Maybe<Array<Maybe<AppraiserSettingType>>>;
  assigning_start_date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Array<Maybe<User>>>;
  end_date?: Maybe<Scalars['Date']['output']>;
  is_all?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_linear_flow?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Performance_Cycles = {
  __typename?: 'performance_cycles';
  ApraisalObjectiveAssignmnet?: Maybe<ObjectiveAssignment>;
  measurement?: Maybe<Scalars['Float']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  target?: Maybe<Scalars['Float']['output']>;
  weight_percent?: Maybe<Scalars['Float']['output']>;
};

export enum PermissionAtEnum {
  Administration = 'administration',
  Pos = 'pos'
}

export type PermissionInput = {
  feature?: InputMaybe<Scalars['String']['input']>;
  is_admin_essential_permission?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  permission?: InputMaybe<Scalars['String']['input']>;
  permission_at?: InputMaybe<Scalars['String']['input']>;
};

export type PermissionObj = {
  __typename?: 'permissionObj';
  permission?: Maybe<Scalars['String']['output']>;
};

export type Permissions = {
  __typename?: 'permissions';
  can_update_schedule?: Maybe<Scalars['Boolean']['output']>;
  can_view_schedule?: Maybe<Scalars['Boolean']['output']>;
  employee?: Maybe<User>;
};

export type PhoneOtp = {
  __typename?: 'phoneOtp';
  _id?: Maybe<Scalars['String']['output']>;
  otp_code?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type PhoneOtpInput = {
  method?: InputMaybe<AllowMethodPhoneVerify>;
  phone: Scalars['String']['input'];
};

export type PhoneVerifyOtpInput = {
  otp_code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type PlaidCategoriesInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  mapped_category?: InputMaybe<Scalars['String']['input']>;
  plaid_categorie?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PolicyInput = {
  customer_max_storecredit?: InputMaybe<Scalars['Int']['input']>;
  customer_max_storecredit_transfer?: InputMaybe<Scalars['Int']['input']>;
  device_type?: InputMaybe<Scalars['String']['input']>;
  max_tabs?: InputMaybe<Scalars['Int']['input']>;
  pay_later_invoice_max_limit?: InputMaybe<Scalars['Int']['input']>;
  payment_gateways?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sale_cash_max_limit?: InputMaybe<Scalars['Int']['input']>;
  sale_max_invoice_discount_fixed?: InputMaybe<Scalars['Int']['input']>;
  sale_max_invoice_discount_percentage?: InputMaybe<Scalars['Int']['input']>;
  sale_max_item_discount?: InputMaybe<Scalars['Int']['input']>;
  sale_paypal_invoice_min_limit?: InputMaybe<Scalars['Int']['input']>;
  sale_paypal_invoice_no_transaction?: InputMaybe<Scalars['Int']['input']>;
  sale_paypal_min_limit?: InputMaybe<Scalars['Int']['input']>;
  sale_paypal_no_transaction?: InputMaybe<Scalars['Int']['input']>;
  ticket_invoice_refund_max_percentage_discount?: InputMaybe<Scalars['Int']['input']>;
  useDefaultServices?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PolicyWithRosterInput = {
  department?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  designations?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  full_year?: InputMaybe<Scalars['Boolean']['input']>;
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  recurrence_rule?: InputMaybe<Scalars['String']['input']>;
  repeat: Repeat;
  rosterStore: Scalars['ID']['input'];
  start_date: Scalars['DateTime']['input'];
  total_hours: Scalars['Int']['input'];
  week_number?: InputMaybe<Scalars['Int']['input']>;
};

export type PresentAbsentLeave = {
  __typename?: 'presentAbsentLeave';
  absent?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  leave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  restricted?: Maybe<Scalars['Int']['output']>;
  unrestricted?: Maybe<Scalars['Int']['output']>;
};

export type PreviewOldScheduleInput = {
  new_schedule_id: Scalars['ID']['input'];
  old_schedule_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum PriorityEmums {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium'
}

export type ProductAttributeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  prefix?: InputMaybe<Scalars['String']['input']>;
  type: ProductAttributeTypes;
};

export enum ProductTypeEnum {
  Accessory = 'Accessory',
  Computer = 'Computer',
  Connector = 'Connector',
  DeviceIssue = 'DeviceIssue',
  Mobile = 'Mobile',
  Supply = 'Supply',
  Tool = 'Tool'
}

export type ProfilePictures = {
  __typename?: 'profilePictures';
  dimension?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type ProgressBarData = {
  __typename?: 'progressBarData';
  Total_customer?: Maybe<Scalars['Int']['output']>;
  effect_customer?: Maybe<Scalars['Int']['output']>;
};

export type ProgressBarInput = {
  business: Scalars['ID']['input'];
  businessLocations?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customer_since?: InputMaybe<Scalars['String']['input']>;
  is_customer_more_then_said_amount?: InputMaybe<Scalars['Boolean']['input']>;
  is_customer_since: Scalars['Boolean']['input'];
  is_customer_spent_amount?: InputMaybe<Scalars['Boolean']['input']>;
  spent_amount?: InputMaybe<Scalars['Float']['input']>;
};

export enum PtoScheduleEnum {
  Monthly = 'Monthly',
  Onetime = 'Onetime',
  Yearly = 'Yearly'
}

export type Pto_MinutesType = {
  __typename?: 'pto_minutesType';
  carry_forword?: Maybe<Scalars['Int']['output']>;
  pto_availed_minutes?: Maybe<Scalars['Float']['output']>;
  pto_earned_minutes?: Maybe<Scalars['Float']['output']>;
};

export type Pto_MinutesType_Input = {
  pto_availed_minutes?: InputMaybe<Scalars['Float']['input']>;
  pto_count_in?: InputMaybe<Scalars['String']['input']>;
  pto_earned_minutes?: InputMaybe<Scalars['Float']['input']>;
  pto_fixed_days?: InputMaybe<Scalars['Float']['input']>;
  pto_fixed_minutes?: InputMaybe<Scalars['Float']['input']>;
  pto_fixed_total_days?: InputMaybe<Scalars['Float']['input']>;
  pto_fixed_total_minutes?: InputMaybe<Scalars['Float']['input']>;
  pto_type?: InputMaybe<Scalars['String']['input']>;
};

export type PublicHolidayOrWeekendSchedule = {
  end_date: Scalars['String']['input'];
  start_date: Scalars['String']['input'];
};

export type PublicHolidaysFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type PublicHolidaysResult = {
  __typename?: 'publicHolidaysResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<PublicHoliday>>>;
};

export enum PurchaseType {
  Card = 'card',
  Cash = 'cash',
  Employee = 'employee',
  Leased = 'leased',
  Netbanking = 'netbanking',
  Upi = 'upi'
}

export enum PurchasesReportType {
  All = 'all',
  Monthly = 'monthly',
  Quarter = 'quarter',
  Today = 'today',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export type QueryInput = {
  condition?: InputMaybe<ConditionEnum>;
  first_condition?: InputMaybe<ConditionalEnum>;
  first_value?: InputMaybe<Scalars['String']['input']>;
  second_condition?: InputMaybe<ConditionalEnum>;
  second_value?: InputMaybe<Scalars['String']['input']>;
};

export type QueryInputTerminalAppDevice = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryInputUserAppDevice = {
  app_type: AppTypes;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryType = {
  __typename?: 'queryType';
  condition?: Maybe<Scalars['String']['output']>;
  first_condition?: Maybe<Scalars['String']['output']>;
  first_value?: Maybe<Scalars['String']['output']>;
  second_condition?: Maybe<Scalars['String']['output']>;
  second_value?: Maybe<Scalars['String']['output']>;
};

export type Question_AnswerType = {
  __typename?: 'question_answerType';
  QuizQuestion?: Maybe<QuestionWithOutCorrectAnswer>;
};

export type QuickAssetType = {
  __typename?: 'quickAssetType';
  AssetBrand?: Maybe<AssetBrand>;
  AssetModel?: Maybe<AssetModel>;
  assetId?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<SubData>;
  id?: Maybe<Scalars['ID']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subCategory?: Maybe<SubData>;
  type?: Maybe<Scalars['String']['output']>;
};

export type QuizAssignedListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  quiz_id?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QuizAssignedListResult = {
  __typename?: 'quizAssignedListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<AssignedQuiz>>>;
  stats?: Maybe<StatsType>;
};

export type QuizCategoryListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QuizCategoryListResult = {
  __typename?: 'quizCategoryListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<QuizCategoryDetails>>>;
};

export type QuizEvaluatorResult = {
  __typename?: 'quizEvaluatorResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Quiz>>>;
  stats?: Maybe<StatsType>;
};

export type QuizListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type QuizListResult = {
  __typename?: 'quizListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Quiz>>>;
};

export type QuizTrainingAssignToInput = {
  assign_to?: InputMaybe<Array<Scalars['ID']['input']>>;
  department?: InputMaybe<Scalars['ID']['input']>;
  due_date: Scalars['DateTime']['input'];
  role?: InputMaybe<Scalars['ID']['input']>;
  started_date: Scalars['DateTime']['input'];
};

export type QuizTrainingAssignmentListResult = {
  __typename?: 'quizTrainingAssignmentListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<QuizTrainingAssignementListResult>>>;
  stats?: Maybe<StatsType>;
};

export type QuizTrainingListing = {
  __typename?: 'quizTrainingListing';
  Quiz?: Maybe<Quiz>;
  all_assignee?: Maybe<Array<Maybe<QuizTrainingUser>>>;
  assign_to_department?: Maybe<Array<Maybe<QuizTrainingDepartment>>>;
  assign_to_role?: Maybe<Array<Maybe<QuizTrainingRole>>>;
  attachments?: Maybe<Array<QuizTrainingAttachment>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  global_status?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type QuizTrainingReplicaListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  trainingId?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizTrainingReplicaListResult = {
  __typename?: 'quizTrainingReplicaListResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<QuizTrainingReplica>>>;
  stats?: Maybe<StatsType>;
};

export type QuizTrainingUpdateStatus = {
  assign_to?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<TrainingAssignStatus>;
};

export type QuizTraningListInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ReJoinEmployeeInput = {
  basic_salary?: InputMaybe<Scalars['Float']['input']>;
  employee_group?: InputMaybe<Scalars['ID']['input']>;
  employee_type?: InputMaybe<Scalars['ID']['input']>;
  hire_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  joining_date?: InputMaybe<Scalars['DateTime']['input']>;
  line_manager?: InputMaybe<Scalars['ID']['input']>;
  over_time_rate?: InputMaybe<Scalars['Float']['input']>;
  pay_schedule?: InputMaybe<Scalars['ID']['input']>;
  public_day_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  salary_type?: InputMaybe<Scalars['String']['input']>;
  total_week_hours?: InputMaybe<Scalars['Float']['input']>;
  weekend_day_salary?: InputMaybe<Scalars['Float']['input']>;
  weekly_hourly_salary?: InputMaybe<Scalars['Float']['input']>;
};

export type ReasonInput = {
  reason_name: Scalars['String']['input'];
  reason_type: ReasonType;
};

export enum ReasonType {
  Resignation = 'Resignation',
  Retirement = 'Retirement',
  Termination = 'Termination'
}

export enum ReasonTypeEnum {
  Damage = 'Damage',
  Defective = 'Defective',
  Missing = 'Missing',
  Stolen = 'Stolen'
}

export type RecruitmentResult = {
  __typename?: 'recruitmentResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Recruitment>>>;
};

export enum RecruitmentStatusEnum {
  Hired = 'hired',
  Hold = 'hold',
  Rejected = 'rejected',
  Shortlisted = 'shortlisted'
}

export enum RecurringBy {
  Monthly = 'monthly',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export type RegionInput = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<RegionStatus>;
};

export type RegionListingResult = {
  __typename?: 'regionListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Region>>>;
};

export enum RegionStatus {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export enum RegionStatusChange {
  Active = 'active',
  Inactive = 'inactive'
}

export enum RelationAsset {
  Child = 'child',
  Parent = 'parent'
}

export type RemoveBusinessEmployeeInput = {
  business_navigation_id: Scalars['ID']['input'];
  employee: Scalars['ID']['input'];
};

export type RemoveEmployee = {
  roleId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type RemoveShareInput = {
  authenticatorAppId: Scalars['ID']['input'];
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum Repeat {
  Daily = 'DAILY',
  Never = 'Never',
  Weekly = 'WEEKLY'
}

export enum RepeatOnEnum {
  Fri = 'Fri',
  Mon = 'Mon',
  Sat = 'Sat',
  Sun = 'Sun',
  Thu = 'Thu',
  Tue = 'Tue',
  Wed = 'Wed'
}

export type RepeatOnInput = {
  repeatOn?: InputMaybe<RepeatOnEnum>;
};

export type ReplyType = {
  __typename?: 'replyType';
  _id?: Maybe<Scalars['ID']['output']>;
  reply?: Maybe<Scalars['String']['output']>;
  reply_by?: Maybe<User>;
  reply_date?: Maybe<Scalars['DateTime']['output']>;
};

export type ReportObjectiveAssignment = {
  __typename?: 'reportObjectiveAssignment';
  _id?: Maybe<ReportObjectiveAssignmentData>;
  detail?: Maybe<Array<Maybe<DetailReport>>>;
};

export type ReportObjectiveAssignment1 = {
  __typename?: 'reportObjectiveAssignment1';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<ReportObjectiveAssignment_>>>;
};

export type ReportObjectiveAssignmentData = {
  __typename?: 'reportObjectiveAssignmentData';
  department?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  performanceCycleName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ReportObjectiveAssignment_ = {
  __typename?: 'reportObjectiveAssignment_';
  Business?: Maybe<Business>;
  PerformanceCycle?: Maybe<PerformanceCycleType>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  detail?: Maybe<DetailextendedView>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export enum RequestEnums {
  AttendanceRegulation = 'attendanceRegulation',
  Expense = 'expense',
  LaonPayment = 'laonPayment',
  Leave = 'leave'
}

export type ReserveAssetFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReserveAssetInput = {
  assetId: Scalars['String']['input'];
  assignedId?: InputMaybe<Scalars['ID']['input']>;
  assignedType?: InputMaybe<AssignedType>;
  isAllDay?: InputMaybe<Scalars['Boolean']['input']>;
  other_detail?: InputMaybe<Scalars['String']['input']>;
  reserveFrom?: InputMaybe<Scalars['Date']['input']>;
  reserveTo?: InputMaybe<Scalars['Date']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type ReserveAssetResult = {
  __typename?: 'reserveAssetResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<ResevedAsset>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type ReserveAssets = {
  __typename?: 'reserveAssets';
  assignedType?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  employee?: Maybe<User>;
  other_assignee?: Maybe<Scalars['String']['output']>;
  other_detail?: Maybe<Scalars['String']['output']>;
  reserveFrom?: Maybe<Scalars['Date']['output']>;
  reserveTo?: Maybe<Scalars['Date']['output']>;
  site?: Maybe<BusinessLocation>;
};

export type ReserveListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReserveUpdateAssetInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assignedId?: InputMaybe<Scalars['ID']['input']>;
  assignedType?: InputMaybe<AssignedType>;
  isAllDay?: InputMaybe<Scalars['Boolean']['input']>;
  previousAsset?: InputMaybe<Scalars['ID']['input']>;
  reserveFrom?: InputMaybe<Scalars['Date']['input']>;
  reserveTo?: InputMaybe<Scalars['Date']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type ResevedAsset = {
  __typename?: 'resevedAsset';
  assetId?: Maybe<Scalars['String']['output']>;
  assetName?: Maybe<Scalars['String']['output']>;
  assignedId?: Maybe<Scalars['ID']['output']>;
  assignedType?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isAllDay?: Maybe<Scalars['Boolean']['output']>;
  startTime?: Maybe<Scalars['Date']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type ResolveConflictsInput = {
  employee_action: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
  new_schedle_id: Scalars['ID']['input'];
  old_schedle_id: Scalars['ID']['input'];
  schedule_date: Scalars['String']['input'];
};

export type ResultOfLeavePolicy = {
  __typename?: 'resultOfLeavePolicy';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<LeavePolicy>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type RocketChat = {
  __typename?: 'rocketChat';
  authToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RoleChanged = {
  __typename?: 'roleChanged';
  is_navigated_business_change?: Maybe<Scalars['Boolean']['output']>;
  is_password_changed?: Maybe<Scalars['Boolean']['output']>;
  is_role_changed?: Maybe<Scalars['Boolean']['output']>;
};

export type RoleDataForSwap = {
  firstRole: Scalars['ID']['input'];
  secondRole: Scalars['ID']['input'];
};

export type RoleFilter = {
  business_id: Scalars['ID']['input'];
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  location_id?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Int']['input'];
};

export type RoleInput = {
  business: Scalars['ID']['input'];
  feature_hierarchy?: InputMaybe<Array<FeatureHierarchyInput>>;
  location?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  permissions: Array<InputMaybe<PermissionInput>>;
  roleName: Scalars['String']['input'];
  rolePolicy?: InputMaybe<RolePolicyInput>;
};

export type RoleListingFilter = {
  business_id: Scalars['ID']['input'];
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['ID']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type RolePolicyInput = {
  sale_max_invoice_discount_fixed?: InputMaybe<Scalars['Float']['input']>;
  sale_max_invoice_discount_percentage?: InputMaybe<Scalars['Float']['input']>;
  sale_max_item_discount?: InputMaybe<Scalars['Float']['input']>;
  ticket_invoice_refund_max_percentage_discount?: InputMaybe<Scalars['Float']['input']>;
};

export type RoleWithUser = {
  __typename?: 'roleWithUser';
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['ID']['output']>;
  positionName?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['ID']['output']>;
};

export type RolesData = {
  __typename?: 'rolesData';
  childs?: Maybe<Array<Maybe<RolesData>>>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RolesWithUsers = {
  __typename?: 'rolesWithUsers';
  role?: Maybe<Role>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RosterListFilter = {
  filterRoster?: InputMaybe<FilterRoster>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RosterListingResult = {
  __typename?: 'rosterListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Roster>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type RostersInput = {
  currentView?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  employees?: InputMaybe<Array<Scalars['ID']['input']>>;
  endDate: Scalars['DateTime']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payrollType?: InputMaybe<PayrollType>;
  role?: InputMaybe<Scalars['ID']['input']>;
  rosterStore?: InputMaybe<Scalars['ID']['input']>;
  scheduled?: InputMaybe<ScheduledFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  timeOff?: InputMaybe<_Schedule>;
};

export enum SalaryType {
  Hourly = 'Hourly',
  Salary = 'Salary'
}

export type SaleGoalAdvanceSearchInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SalesReportType {
  All = 'all',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Today = 'today',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export type SandWichDays = {
  __typename?: 'sandWichDays';
  date_of_sandwich?: Maybe<Array<Maybe<DateOfSandwich>>>;
  deduction_type?: Maybe<Scalars['String']['output']>;
  deduction_value?: Maybe<Scalars['Float']['output']>;
  difference_in_days?: Maybe<Scalars['Int']['output']>;
  difference_in_hours?: Maybe<Scalars['Float']['output']>;
};

export type Sandwich = {
  date_of_sandwich?: InputMaybe<Array<InputMaybe<Sandwichdate>>>;
  deduction_type?: InputMaybe<Scalars['String']['input']>;
  deduction_value?: InputMaybe<Scalars['Float']['input']>;
  difference_in_days?: InputMaybe<Scalars['Int']['input']>;
  difference_in_hours?: InputMaybe<Scalars['Float']['input']>;
};

export type SandwichUpdateAproval = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Sandwichdate = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
};

export type SaveFilterInput = {
  filter: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: FilterTypeEnum;
};

export type ScaleGroup = {
  __typename?: 'scaleGroup';
  maximum_value?: Maybe<Scalars['Int']['output']>;
  minimum_value?: Maybe<Scalars['Int']['output']>;
  scroe_name?: Maybe<Scalars['String']['output']>;
};

export type ScaleGroupInput = {
  maximum_value?: InputMaybe<Scalars['Int']['input']>;
  minimum_value?: InputMaybe<Scalars['Int']['input']>;
  scroe_name?: InputMaybe<Scalars['String']['input']>;
};

export type SchdualCsvResponse = {
  __typename?: 'schdualCsvResponse';
  InvalidRecord?: Maybe<Array<Maybe<InvalidRecord>>>;
  complectSechduals?: Maybe<Array<Maybe<ConflictedSchedules>>>;
};

export type SchduleInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  User: Array<Scalars['ID']['input']>;
  break_detail?: InputMaybe<Array<ScheduleBreaksInput>>;
  end_time: Scalars['String']['input'];
  is_full_year: Scalars['Boolean']['input'];
  notifyByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  schedule_date: Scalars['String']['input'];
  short_break?: InputMaybe<Scalars['ID']['input']>;
  short_break_count: Scalars['Int']['input'];
  start_time: Scalars['String']['input'];
  week_days: Array<Scalars['String']['input']>;
  week_number: Scalars['Int']['input'];
};

export type ScheduleBreaks = {
  __typename?: 'scheduleBreaks';
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_in_time?: Maybe<Scalars['String']['output']>;
  break_out_time?: Maybe<Scalars['String']['output']>;
  break_type?: Maybe<MasterDataValue>;
  minimum_break_percentage?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleBreaksInput = {
  break_duration: Scalars['Int']['input'];
  break_type: Scalars['ID']['input'];
  minimum_break_percentage?: InputMaybe<Scalars['Int']['input']>;
};

export type ScheduleCountFilter = {
  end_date?: InputMaybe<Scalars['String']['input']>;
  filterSchedule?: InputMaybe<FilterSchedule>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
};

export type ScheduleCountsType = {
  __typename?: 'scheduleCountsType';
  estimateWage?: Maybe<Scalars['Float']['output']>;
  onleave?: Maybe<Scalars['Float']['output']>;
  overTimeCost?: Maybe<Scalars['Float']['output']>;
  overTimeHours?: Maybe<Scalars['Float']['output']>;
  ptoCost?: Maybe<Scalars['Float']['output']>;
  ptoHours?: Maybe<Scalars['Float']['output']>;
  scheduleHours?: Maybe<Scalars['Float']['output']>;
  scheduleShift?: Maybe<Scalars['Float']['output']>;
  shortleaves?: Maybe<Scalars['Float']['output']>;
  totalUserCount?: Maybe<Scalars['Float']['output']>;
};

export type ScheduleData = {
  create_schedule: Scalars['Boolean']['input'];
  date: Scalars['String']['input'];
  delete_clock_histry: Scalars['Boolean']['input'];
  end_time?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduleDataInput = {
  employee_id: Scalars['ID']['input'];
  schedule_id: Array<Scalars['ID']['input']>;
};

export type ScheduleEmployeeAndHours = {
  __typename?: 'scheduleEmployeeAndHours';
  schduleEmploye?: Maybe<Scalars['Float']['output']>;
  schduleHours?: Maybe<Scalars['Float']['output']>;
};

export type ScheduleEvents = {
  __typename?: 'scheduleEvents';
  TimeOff?: Maybe<TimeOff>;
  end_time?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['Int']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['Int']['output']>;
  star_time?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ScheduleFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type ScheduleGraphData = {
  __typename?: 'scheduleGraphData';
  daily_wages?: Maybe<Array<Maybe<Daily_Wages>>>;
  total_normal_time_minutes?: Maybe<Scalars['Int']['output']>;
  total_normal_time_wage?: Maybe<Scalars['Float']['output']>;
  total_over_time_minutes?: Maybe<Scalars['Int']['output']>;
  total_over_time_wage?: Maybe<Scalars['Float']['output']>;
  total_paid_breaks_minutes?: Maybe<Scalars['Int']['output']>;
  total_paid_leave_count?: Maybe<Scalars['Int']['output']>;
  total_schedules_hours?: Maybe<Scalars['Float']['output']>;
  total_schedules_minutes?: Maybe<Scalars['Int']['output']>;
  total_unpaid_breaks_minutes?: Maybe<Scalars['Int']['output']>;
  total_unpaid_leave_count?: Maybe<Scalars['Int']['output']>;
  total_users?: Maybe<Scalars['Int']['output']>;
  total_wages?: Maybe<Scalars['Float']['output']>;
  total_weekend_off_days?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleListFilter = {
  department?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  filterSchedule?: InputMaybe<FilterSchedule>;
  is_monthly_view: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  salary_type?: InputMaybe<SalaryType>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  type?: InputMaybe<ScheduleType>;
};

export type ScheduleListFilterApp = {
  department?: InputMaybe<Scalars['ID']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  filterSchedule?: InputMaybe<FilterSchedule>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
};

export type ScheduleListOldAndNew = {
  __typename?: 'scheduleListOldAndNew';
  clockIn?: Maybe<Scalars['Boolean']['output']>;
  existingDates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  existingScheduleId?: Maybe<Scalars['ID']['output']>;
  newRosterId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type ScheduleListingResult = {
  __typename?: 'scheduleListingResult';
  RosterStore?: Maybe<RosterStores>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  is_conflict_schedule?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<ScheduleResult>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
  wagesPermission?: Maybe<Scalars['Boolean']['output']>;
};

export type ScheduleListingResultApp = {
  __typename?: 'scheduleListingResultApp';
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  is_salary_view?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<ScheduleResultApp>>>;
};

export type ScheduleLogs = {
  __typename?: 'scheduleLogs';
  Schedule?: Maybe<Schedule>;
  User?: Maybe<User>;
  created_date?: Maybe<Scalars['DateTime']['output']>;
  logs?: Maybe<Array<Maybe<Logs>>>;
};

export type ScheduleProgressType = {
  __typename?: 'scheduleProgressType';
  data?: Maybe<Array<Maybe<ConflictedSchedules>>>;
  processingCurrChunkSize?: Maybe<Scalars['Int']['output']>;
  processingProgress?: Maybe<Scalars['Int']['output']>;
  successProgress?: Maybe<Scalars['Int']['output']>;
  successProgressCurrChunkSize?: Maybe<Scalars['Int']['output']>;
  totalChunkSize?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleResult = {
  __typename?: 'scheduleResult';
  RosterStore?: Maybe<RosterStores>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['String']['output']>;
  estimated_wage?: Maybe<Scalars['Float']['output']>;
  schedules?: Maybe<Array<Maybe<Schedule>>>;
  total_normal_time?: Maybe<Scalars['Int']['output']>;
  total_normal_time_wage?: Maybe<Scalars['Float']['output']>;
  total_over_time?: Maybe<Scalars['Int']['output']>;
  total_over_time_wage?: Maybe<Scalars['Float']['output']>;
  total_schedules_hours?: Maybe<Scalars['Int']['output']>;
  total_schedules_minutes?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleResultApp = {
  __typename?: 'scheduleResultApp';
  RosterStore?: Maybe<RosterStores>;
  _id?: Maybe<Scalars['String']['output']>;
  estimated_wage?: Maybe<Scalars['Float']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  profile_pictures?: Maybe<Array<Maybe<ProfilePictures>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  schedules?: Maybe<Array<Maybe<Schedule>>>;
  total_normal_time?: Maybe<Scalars['Int']['output']>;
  total_normal_time_wage?: Maybe<Scalars['Float']['output']>;
  total_over_time?: Maybe<Scalars['Int']['output']>;
  total_over_time_wage?: Maybe<Scalars['Float']['output']>;
  total_schedules_hours?: Maybe<Scalars['Int']['output']>;
  total_schedules_minutes?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  end_date: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  rosters: Array<Scalars['ID']['input']>;
  start_date: Scalars['DateTime']['input'];
};

export enum ScheduleType {
  Holiday = 'holiday',
  Leave = 'leave',
  Mandatory = 'mandatory',
  NotMandatory = 'notMandatory',
  OverTime = 'overTime',
  Pto = 'pto',
  Schadule = 'schadule',
  Weekend = 'weekend'
}

export enum ScheduledFilter {
  All = 'all',
  Scheduled = 'scheduled',
  Unscheduled = 'unscheduled'
}

export type SchedulerConfigInput = {
  backgroundScheduler: Scalars['String']['input'];
  business: Scalars['ID']['input'];
  number_of_record_employees: Scalars['Int']['input'];
  overtimeColor: Scalars['String']['input'];
  paidTomeOffColor: Scalars['String']['input'];
  ptoColor?: InputMaybe<Scalars['String']['input']>;
  publicHolidayColor?: InputMaybe<Scalars['String']['input']>;
  sandwichLeaveColor?: InputMaybe<Scalars['String']['input']>;
  shortLeavePaid: Scalars['String']['input'];
  shortLeaveUnpaid: Scalars['String']['input'];
  short_breaks?: InputMaybe<ShortBreaksInput>;
  unpaidTomeOffColor: Scalars['String']['input'];
  weekendColor?: InputMaybe<Scalars['String']['input']>;
};

export type ScrapInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  assetId: Scalars['String']['input'];
  scrapDate?: InputMaybe<Scalars['Date']['input']>;
  scrapDealer?: InputMaybe<Scalars['String']['input']>;
};

export type SearchCampaignInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SearchCommissionInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<_SearchStatus>;
};

export type SearchDataTypeValueInput = {
  business: Scalars['ID']['input'];
  data_type: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SearchDiscountInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type SearchDiscountNewInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SearchRosterInput = {
  employeeId?: InputMaybe<Scalars['ID']['input']>;
  store_id?: InputMaybe<Scalars['ID']['input']>;
};

export type SearchSitesInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchStatus_ {
  Active = 'Active',
  All = 'All',
  Disabled = 'Disabled',
  Expired = 'Expired',
  Scheduled = 'Scheduled'
}

export type SearchTagsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchUserTypeenum {
  Assets = 'assets',
  EmployeeSeparation = 'employeeSeparation',
  LoanAndPayment = 'loanAndPayment',
  Subscription = 'subscription',
  Timeoff = 'timeoff'
}

export type SectionValueInput = {
  addAttachment?: InputMaybe<Array<Scalars['Upload']['input']>>;
  addComment?: InputMaybe<Scalars['String']['input']>;
  addSubTask?: InputMaybe<Scalars['String']['input']>;
  assignTo?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  completeSubTask?: InputMaybe<CompletetSubTaskInput>;
  deleteAttachment?: InputMaybe<Scalars['String']['input']>;
  deleteSubTask?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  markAsDone?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<PriorityEmums>;
  status?: InputMaybe<_TaskStatusEmums>;
  summary?: InputMaybe<Scalars['String']['input']>;
  updateComment?: InputMaybe<UpdateCommentInput>;
};

export type SelectedScheduleInput = {
  empid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
};

export type SetNumberOfRecordInput = {
  business?: InputMaybe<Scalars['ID']['input']>;
  limit: Scalars['Int']['input'];
};

export type ShareAppInput = {
  id: Scalars['ID']['input'];
  is_opt_share: Scalars['Boolean']['input'];
  is_password_share: Scalars['Boolean']['input'];
  is_scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  scheduled_for?: InputMaybe<Scalars['String']['input']>;
  share_as: ShareAsEnum;
  share_permissions: ShareAppPermissions;
  share_with?: InputMaybe<Array<InputMaybe<SharePasswordInput>>>;
};

export enum ShareAsEnum {
  Editor = 'Editor',
  Viewer = 'Viewer'
}

export type ShareFilteredResults = {
  __typename?: 'shareFilteredResults';
  department?: Maybe<Department>;
  employees?: Maybe<Array<Maybe<EmloyeeSharePermission>>>;
  role?: Maybe<Role>;
  share_as?: Maybe<Scalars['String']['output']>;
};

export type SharePasswordInput = {
  employeeId: Scalars['ID']['input'];
  password?: InputMaybe<EncryptedPasswordInput>;
};

export type Share_Permissions = {
  __typename?: 'share_permissions';
  can_delete?: Maybe<Scalars['Boolean']['output']>;
  can_edit?: Maybe<Scalars['Boolean']['output']>;
  can_share_otp?: Maybe<Scalars['Boolean']['output']>;
  can_share_password?: Maybe<Scalars['Boolean']['output']>;
};

export type Share_With = {
  __typename?: 'share_with';
  Document?: Maybe<DocumentControlAttachment>;
  _id?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  employee?: Maybe<User>;
  role?: Maybe<Role>;
  share_as?: Maybe<Scalars['String']['output']>;
  shared_by?: Maybe<User>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ShiftFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type ShiftListingResult = {
  __typename?: 'shiftListingResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<Shift>>>;
};

export type ShortBreak = {
  __typename?: 'shortBreak';
  short_break_duration?: Maybe<Scalars['Int']['output']>;
  short_break_name?: Maybe<Scalars['String']['output']>;
};

export type ShortBreakClockedHistory = {
  __typename?: 'shortBreakClockedHistory';
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_end_time?: Maybe<Scalars['String']['output']>;
  break_out_time?: Maybe<Scalars['String']['output']>;
  break_start_time?: Maybe<Scalars['String']['output']>;
  shift_time?: Maybe<Scalars['String']['output']>;
};

export type ShortBreakDetail = {
  break_duration?: InputMaybe<Scalars['Int']['input']>;
  break_end_time?: InputMaybe<Scalars['String']['input']>;
  break_start_time?: InputMaybe<Scalars['String']['input']>;
};

export type ShortBreakInput = {
  allowed_limit: Scalars['Int']['input'];
  break_duration: Scalars['Int']['input'];
  break_name: Scalars['String']['input'];
};

export type ShortBreakType = {
  __typename?: 'shortBreakType';
  allowed_limit?: Maybe<Scalars['Int']['output']>;
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_name?: Maybe<Scalars['String']['output']>;
};

export type ShortBreaks = {
  __typename?: 'shortBreaks';
  short_break_duration?: Maybe<Scalars['Int']['output']>;
  short_break_name?: Maybe<Scalars['String']['output']>;
};

export type ShortBreaksInput = {
  short_break_duration?: InputMaybe<Scalars['Int']['input']>;
  short_break_name?: InputMaybe<Scalars['String']['input']>;
};

export type ShortBreaksRosterInput = {
  short_break_count?: InputMaybe<Scalars['Int']['input']>;
  short_break_duration?: InputMaybe<Scalars['Int']['input']>;
  short_break_name?: InputMaybe<Scalars['String']['input']>;
};

export type ShortLeave = {
  __typename?: 'shortLeave';
  TimeOff?: Maybe<Scalars['ID']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
  is_paid?: Maybe<Scalars['Float']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  short_leave_time_percentage?: Maybe<Scalars['Float']['output']>;
  star_time?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ShortLeaveInput = {
  employee: Scalars['ID']['input'];
  end_time: Scalars['String']['input'];
  leave_date: Scalars['DateTime']['input'];
  remarks: Scalars['String']['input'];
  start_time: Scalars['String']['input'];
};

export type ShortLeaveLog = {
  __typename?: 'shortLeaveLog';
  duration?: Maybe<Scalars['Int']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  previous_state?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
};

export type Short_Break_Detail = {
  __typename?: 'short_break_detail';
  break_duration?: Maybe<Scalars['Int']['output']>;
  break_end_time?: Maybe<Scalars['String']['output']>;
  break_out_time?: Maybe<Scalars['String']['output']>;
  break_start_time?: Maybe<Scalars['String']['output']>;
};

export type Shortbreak = {
  __typename?: 'shortbreak';
  short_break_count?: Maybe<Scalars['Int']['output']>;
  short_break_duration?: Maybe<Scalars['Int']['output']>;
  short_break_name?: Maybe<Scalars['String']['output']>;
};

export type SoldInput = {
  soldProductsType?: InputMaybe<SoldProductsType>;
};

export enum SoldProductsType {
  WithOutPrice = 'with_out_price',
  WithPrice = 'with_price'
}

export enum SortEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Sort_By_Enum {
  Asc = 'asc',
  Desc = 'desc'
}

export type StateInput = {
  Country: Scalars['ID']['input'];
  short_name?: InputMaybe<Scalars['String']['input']>;
  state_name: Scalars['String']['input'];
};

export type StationInput = {
  Department: Scalars['ID']['input'];
  station_name: Scalars['String']['input'];
};

export type StatsType = {
  __typename?: 'statsType';
  duration?: Maybe<Scalars['String']['output']>;
  highest_score?: Maybe<Scalars['Int']['output']>;
  total_attempt?: Maybe<Scalars['Int']['output']>;
  total_completed?: Maybe<Scalars['Int']['output']>;
  total_condidate?: Maybe<Scalars['Int']['output']>;
  total_fail?: Maybe<Scalars['Int']['output']>;
  total_inprogress?: Maybe<Scalars['Int']['output']>;
  total_not_attempt?: Maybe<Scalars['Int']['output']>;
  total_pass?: Maybe<Scalars['Int']['output']>;
  total_to_be_attempt?: Maybe<Scalars['Int']['output']>;
  total_to_be_check?: Maybe<Scalars['Int']['output']>;
};

export enum StatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

export enum StatusFilter {
  Accepted = 'accepted',
  All = 'all',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type StatusOfTasks = {
  __typename?: 'statusOfTasks';
  completed?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  overdue?: Maybe<Scalars['Int']['output']>;
};

export type SubCate = {
  __typename?: 'subCate';
  Business?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SubCategory = {
  __typename?: 'subCategory';
  created_at?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type SubCategoryDetail = {
  __typename?: 'subCategoryDetail';
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<AssetSubCategory>>>;
};

export type SubCategoryType = {
  __typename?: 'subCategoryType';
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  columns?: Maybe<Array<Maybe<ListingColumnsType>>>;
  result?: Maybe<Array<Maybe<SubCategory>>>;
};

export type SubCatgoryObjs = {
  _id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubData = {
  __typename?: 'subData';
  name?: Maybe<Scalars['String']['output']>;
};

export type SubTaskInput = {
  _id: Scalars['ID']['input'];
  is_completed: Scalars['Boolean']['input'];
  sub_task_id: Scalars['ID']['input'];
};

export type SubmitDocumentEmployeeInput = {
  attachment?: InputMaybe<Scalars['Upload']['input']>;
  employeeId?: InputMaybe<Scalars['ID']['input']>;
  google_drive_attachment?: InputMaybe<Scalars['String']['input']>;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscribeMedicalInsuranceInput = {
  employee_id: Scalars['ID']['input'];
  medical_insurance_id: Scalars['ID']['input'];
};

export type SubscriptionListFilter = {
  business_id: Scalars['ID']['input'];
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type SwapeEmployeesData = {
  firstRoleId: Scalars['ID']['input'];
  firstUserId: Scalars['ID']['input'];
  secondRoleId: Scalars['ID']['input'];
  secondUserId: Scalars['ID']['input'];
};

export type SyncPayrollInput = {
  employee?: InputMaybe<Array<Scalars['ID']['input']>>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pay_type?: InputMaybe<PayTypeEnum>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystembrandResult = {
  __typename?: 'systembrandResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Brand>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type TagsListingResult = {
  __typename?: 'tagsListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Tags>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type TargetByDepartments = {
  __typename?: 'targetByDepartments';
  department_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  target?: Maybe<Scalars['String']['output']>;
};

export type TargetByDepartmentsInput = {
  department_name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
};

export type TargetByEmployees = {
  __typename?: 'targetByEmployees';
  designation?: Maybe<Scalars['String']['output']>;
  employee_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  target?: Maybe<Scalars['String']['output']>;
};

export type TargetByEmployeesInput = {
  designation?: InputMaybe<Scalars['String']['input']>;
  employee_name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
};

export type TargetByProducts = {
  __typename?: 'targetByProducts';
  amount?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['String']['output']>;
  product_category?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type TargetByProductsInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['String']['input']>;
  product_category?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCountInput = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  team_member?: InputMaybe<Scalars['ID']['input']>;
  to_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskListingResult = {
  __typename?: 'taskListingResult';
  assign_by_me?: Maybe<Array<Maybe<TaskManagement>>>;
  assign_to_me?: Maybe<Array<Maybe<TaskManagement>>>;
  closed_tasks?: Maybe<Array<Maybe<TaskManagement>>>;
  my_tasks?: Maybe<Array<Maybe<TaskManagement>>>;
};

export type TaskManagementCount = {
  __typename?: 'taskManagementCount';
  completed?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  onHold?: Maybe<Scalars['Int']['output']>;
  todo?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum TaskSections {
  AddAttachment = 'add_attachment',
  AddSubTask = 'add_sub_task',
  AssignTo = 'assign_to',
  Comment = 'comment',
  CompleteSubTask = 'complete_sub_task',
  DeleteAttachment = 'delete_attachment',
  DeleteSubTask = 'delete_sub_task',
  Description = 'description',
  DueDate = 'due_date',
  MarkAsDone = 'mark_as_done',
  Priority = 'priority',
  Status = 'status',
  Summary = 'summary',
  UpdateComment = 'update_comment'
}

export enum TaskStatus {
  All = 'all',
  Closed = 'closed',
  DueDate = 'due_date',
  InProgress = 'inProgress'
}

export enum TaskStatusEmums {
  Closed = 'closed',
  InProgress = 'inProgress'
}

export enum TaskStatusUpdateEmums {
  BackLog = 'backLog',
  Completed = 'completed',
  InProgress = 'inProgress',
  OnHold = 'onHold',
  Todo = 'todo'
}

export type TaskType = {
  __typename?: 'taskType';
  count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TaskWithSearchInput = {
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<PriorityEmums>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TaskStatusUpdateEmums>;
  team_member?: InputMaybe<Scalars['ID']['input']>;
};

export type TasksCountResult = {
  __typename?: 'tasksCountResult';
  assign_by_me?: Maybe<Scalars['Int']['output']>;
  assign_to_me?: Maybe<Scalars['Int']['output']>;
  my_tasks?: Maybe<Scalars['Int']['output']>;
};

export enum TaxFilter {
  Active = 'active',
  All = 'all',
  Archive = 'archive'
}

export type TaxFilterInput = {
  BusinessLocation: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TaxFilter>;
};

export type TaxInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  applicable_on?: InputMaybe<Array<InputMaybe<ApplicableEnum>>>;
  is_tax_exemptible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  percentage_amount: Scalars['Int']['input'];
};

export type TaxListingResult = {
  __typename?: 'taxListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<Tax>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type TillCountInput = {
  BusinessLocation?: InputMaybe<Scalars['ID']['input']>;
  cashDemonination?: InputMaybe<Array<InputMaybe<CashDemoninationInput>>>;
  cashRegister?: InputMaybe<Scalars['ID']['input']>;
  counted_amount?: InputMaybe<Scalars['Float']['input']>;
  deposited?: InputMaybe<Scalars['Float']['input']>;
  discrepancy?: InputMaybe<Scalars['Float']['input']>;
  expected_amount?: InputMaybe<Scalars['Float']['input']>;
  remaining_amount?: InputMaybe<Scalars['Float']['input']>;
};

export type TimeOff = {
  __typename?: 'timeOff';
  _id?: Maybe<Scalars['ID']['output']>;
  accept_reject_leave?: Maybe<Array<Maybe<LeaveInputType>>>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approval_status?: Maybe<Scalars['String']['output']>;
  behalf_of?: Maybe<Array<Maybe<User>>>;
  business_manager?: Maybe<User>;
  countIn?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date_type_leave?: Maybe<Array<Maybe<TypeLeave>>>;
  differenceInDays?: Maybe<Scalars['Int']['output']>;
  document_url?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_pto?: Maybe<Scalars['Boolean']['output']>;
  is_sandwich?: Maybe<Scalars['Boolean']['output']>;
  is_short_leave?: Maybe<Scalars['Boolean']['output']>;
  leave_request?: Maybe<Array<Maybe<LeaveInputType>>>;
  leave_request_dates?: Maybe<Array<Maybe<DateObj>>>;
  logs?: Maybe<Array<Maybe<LogsTimeOff>>>;
  no_request?: Maybe<Scalars['Float']['output']>;
  reason_for_leave?: Maybe<Scalars['String']['output']>;
  remaining_days?: Maybe<Scalars['Float']['output']>;
  remaining_unpaid_days?: Maybe<Scalars['Float']['output']>;
  request_id?: Maybe<Scalars['String']['output']>;
  sandwich?: Maybe<Array<Maybe<SandWichDays>>>;
  status?: Maybe<TimeOffStatus>;
  total_leave_out_of_accural?: Maybe<Scalars['Float']['output']>;
  total_leaves?: Maybe<Scalars['Float']['output']>;
  total_request_leaves?: Maybe<Scalars['Float']['output']>;
  total_unpaid_leaves?: Maybe<Scalars['Float']['output']>;
  type_of_absence?: Maybe<LeaveType>;
  unpaid_count?: Maybe<Scalars['Float']['output']>;
  upload_document_info?: Maybe<UpdloadDocumentInf>;
  work_flow?: Maybe<Array<Maybe<WorkFlow>>>;
};

export type TimeOffEmployeeInput = {
  is_pto?: InputMaybe<Scalars['Boolean']['input']>;
  time_off_days: Scalars['String']['input'];
  time_off_total_days?: InputMaybe<Scalars['String']['input']>;
  time_off_type: Scalars['ID']['input'];
};

export enum TimeOffEnum {
  Paid = 'Paid',
  Unpaid = 'Unpaid'
}

export type TimeOffInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  date_type_leave: Array<TypeLeaveInput>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  out_of_accural_leave_days?: InputMaybe<Scalars['Int']['input']>;
  out_of_accural_leave_hours?: InputMaybe<Scalars['Int']['input']>;
  reason_for_leave?: InputMaybe<Scalars['String']['input']>;
  remaining_days?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<TimeOffStatus>;
  total_leaves?: InputMaybe<Scalars['Float']['input']>;
  type_of_absence?: InputMaybe<Scalars['String']['input']>;
  type_of_absence_id?: InputMaybe<Scalars['String']['input']>;
};

export type TimeOffListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  from_timeOff_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to_timeOff_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TimeOffListingresult = {
  __typename?: 'timeOffListingresult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<TimeOff>>>;
};

export enum TimeOffStatus {
  Approved = 'approved',
  Canceled = 'canceled',
  Partially = 'partially',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum TimeOffStatusFilter {
  All = 'all',
  Approved = 'approved',
  Archive = 'archive',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type TimesheetAnalytics = {
  __typename?: 'timesheetAnalytics';
  absent?: Maybe<Scalars['Int']['output']>;
  attendanceDate?: Maybe<Scalars['String']['output']>;
  leave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  publicHoliday?: Maybe<Scalars['Int']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
};

export type TimesheetAnalyticsResult = {
  __typename?: 'timesheetAnalyticsResult';
  is_employee?: Maybe<Scalars['Boolean']['output']>;
  timesheet_analytics?: Maybe<Array<Maybe<TimesheetAnalytics>>>;
};

export type TimesheetGraph = {
  __typename?: 'timesheetGraph';
  daily_wages?: Maybe<Array<Maybe<Daily_Wages_Timesheet>>>;
  total_absent?: Maybe<Scalars['Int']['output']>;
  total_early_clocked_in?: Maybe<Scalars['Int']['output']>;
  total_early_out?: Maybe<Scalars['Int']['output']>;
  total_employees?: Maybe<Scalars['Int']['output']>;
  total_late_out?: Maybe<Scalars['Int']['output']>;
  total_lateness?: Maybe<Scalars['Int']['output']>;
  total_leaves?: Maybe<Scalars['Int']['output']>;
  total_miss_punch_out?: Maybe<Scalars['Int']['output']>;
  total_on_time_cloked_in?: Maybe<Scalars['Int']['output']>;
  total_on_time_out?: Maybe<Scalars['Int']['output']>;
  total_public_holidays?: Maybe<Scalars['Int']['output']>;
  total_restricted_employees?: Maybe<Scalars['Int']['output']>;
  total_schedules_minutes?: Maybe<Scalars['Int']['output']>;
  total_short_leaves?: Maybe<Scalars['Int']['output']>;
  total_wages?: Maybe<Scalars['Float']['output']>;
  total_weekends?: Maybe<Scalars['Int']['output']>;
};

export type TimesheetStatus = {
  __typename?: 'timesheetStatus';
  absent?: Maybe<Scalars['Int']['output']>;
  absent_users?: Maybe<Scalars['Int']['output']>;
  early_in?: Maybe<Scalars['Int']['output']>;
  early_out?: Maybe<Scalars['Int']['output']>;
  is_employee?: Maybe<Scalars['Boolean']['output']>;
  late_out?: Maybe<Scalars['Int']['output']>;
  lateness?: Maybe<Scalars['Int']['output']>;
  leave_users?: Maybe<Scalars['Int']['output']>;
  miss_punch_out?: Maybe<Scalars['Int']['output']>;
  on_time_in?: Maybe<Scalars['Int']['output']>;
  on_time_out?: Maybe<Scalars['Int']['output']>;
  paid_leavs?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  present_users?: Maybe<Scalars['Int']['output']>;
  publicHoliday?: Maybe<Scalars['Int']['output']>;
  restricted_employees?: Maybe<Scalars['Int']['output']>;
  short_leavs?: Maybe<Scalars['Int']['output']>;
  total_leaves?: Maybe<Scalars['Int']['output']>;
  total_users?: Maybe<Scalars['Int']['output']>;
  unpaid_leaves?: Maybe<Scalars['Int']['output']>;
  unrestricted_employees?: Maybe<Scalars['Int']['output']>;
  weekend?: Maybe<Scalars['Int']['output']>;
};

export type TimesheetStatusInput = {
  end_date: Scalars['String']['input'];
  is_employee: Scalars['Boolean']['input'];
  start_date: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'token';
  expires?: Maybe<Scalars['DateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Tokens = {
  __typename?: 'tokens';
  access?: Maybe<Token>;
  refresh?: Maybe<Token>;
};

export type TotalEmployees = {
  __typename?: 'totalEmployees';
  _id?: Maybe<Scalars['String']['output']>;
  employee_group?: Maybe<Employee_Groups>;
};

export type TotalEmployeesRostersWages = {
  __typename?: 'totalEmployeesRostersWages';
  breaksTime?: Maybe<Array<Maybe<BreakTime>>>;
  dailyReport?: Maybe<Array<Maybe<DailyReport>>>;
  dateList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  leavesWithType?: Maybe<Array<Maybe<LeavesWithType>>>;
  totaTimeOffMinutes?: Maybe<Scalars['Int']['output']>;
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  totalMinutes?: Maybe<Scalars['Int']['output']>;
  totalOverTime?: Maybe<Scalars['Int']['output']>;
  totalRosters?: Maybe<Scalars['Int']['output']>;
  totalTimeOff?: Maybe<Scalars['Int']['output']>;
  totalWages?: Maybe<Scalars['String']['output']>;
  unRestrictedEmployees?: Maybe<Scalars['Int']['output']>;
  weeklyData?: Maybe<Array<Maybe<WeeklyData>>>;
};

export type TotalWagesAndScheduleHours = {
  __typename?: 'totalWagesAndScheduleHours';
  _id?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  totalScheduleMinutes?: Maybe<Scalars['Float']['output']>;
  totalWages?: Maybe<Scalars['Float']['output']>;
};

export type TransactionLogs = {
  __typename?: 'transactionLogs';
  adjustment_amount?: Maybe<Scalars['Float']['output']>;
  adjustment_comment?: Maybe<Scalars['String']['output']>;
  adjustment_date?: Maybe<Scalars['DateTime']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<User>;
  is_credit?: Maybe<Scalars['Boolean']['output']>;
};

export type TrashInput = {
  assetId: Scalars['String']['input'];
  expense?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  trashDate?: InputMaybe<Scalars['Date']['input']>;
};

export enum TypeAsset {
  Accessories = 'accessories',
  Accessory = 'accessory',
  Asset = 'asset'
}

export enum TypeEnum {
  Call = 'Call',
  Email = 'Email',
  Sms = 'SMS'
}

export type TypeLeave = {
  __typename?: 'typeLeave';
  end_time?: Maybe<Scalars['String']['output']>;
  is_paid?: Maybe<Scalars['Boolean']['output']>;
  leave_date?: Maybe<Scalars['DateTime']['output']>;
  leave_type?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
};

export type TypeLeaveInput = {
  end_time?: InputMaybe<Scalars['String']['input']>;
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  leave_date?: InputMaybe<Scalars['DateTime']['input']>;
  leave_type?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
};

export type UnAssignAssetInput = {
  asset_Id: Scalars['ID']['input'];
  item_id: Scalars['ID']['input'];
};

export type UnBlockInput = {
  ids: Array<Scalars['ID']['input']>;
  isEmployees: Scalars['Boolean']['input'];
  status: EmployeeStatus;
};

export type UnLinkingRelationAsset = {
  assetId: Scalars['ID']['input'];
  assetTag: Scalars['String']['input'];
  relationAssetId: Scalars['ID']['input'];
};

export type UnSignedList = {
  __typename?: 'unSignedList';
  _id?: Maybe<Scalars['ID']['output']>;
  docRef?: Maybe<Scalars['String']['output']>;
  request_to?: Maybe<Scalars['String']['output']>;
  requested_time?: Maybe<Scalars['DateTime']['output']>;
  signed?: Maybe<Scalars['Boolean']['output']>;
  signed_time?: Maybe<Scalars['DateTime']['output']>;
  subject_to?: Maybe<Scalars['String']['output']>;
  subscription_id?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  user_request_from?: Maybe<Scalars['String']['output']>;
};

export type UnlinkBusinessInput = {
  business_navigation_id: Scalars['ID']['input'];
};

export type UpdateAccountTypeInput = {
  _id: Scalars['ID']['input'];
  is_editable: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type UpdateAppInput = {
  app_name: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  password?: InputMaybe<PasswordManagerInput>;
  qrData?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type UpdateAppraisalObjecive = {
  AppraisalType?: InputMaybe<Scalars['ID']['input']>;
  _id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight_percent?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateAppraisalType = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumActive>;
  target_type: TargetEnum;
};

export type UpdateAssignToInput = {
  _id: Scalars['ID']['input'];
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  assignee: Scalars['ID']['input'];
};

export type UpdateAttendanceSocket = {
  __typename?: 'updateAttendanceSocket';
  action?: Maybe<Scalars['String']['output']>;
  clockedHistory?: Maybe<ClockedHistory>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type UpdateBusinessInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  business_identification_number?: InputMaybe<Scalars['String']['input']>;
  business_identification_type?: InputMaybe<Scalars['String']['input']>;
  business_legal_name: Scalars['String']['input'];
  business_logo?: InputMaybe<Scalars['Upload']['input']>;
  business_system_name: Scalars['String']['input'];
  business_type: AllowBusinessType;
  city?: InputMaybe<Scalars['ID']['input']>;
  country: Scalars['ID']['input'];
  currency_format?: InputMaybe<Scalars['String']['input']>;
  currency_name?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  date_format?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  is_24_hour_format?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_verify?: InputMaybe<Scalars['Boolean']['input']>;
  is_phone_verify?: InputMaybe<Scalars['Boolean']['input']>;
  landline?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  owner_id?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_country_code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['ID']['input']>;
  time_zone?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBusinessOwnerPasswordInput = {
  encryptedPassword?: InputMaybe<ChangePasswordEncryptionKeys>;
  newPassword: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  business: Scalars['String']['input'];
  category_id?: InputMaybe<Scalars['ID']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  templateFile?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateCommentInput = {
  comment: Scalars['String']['input'];
  comment_id: Scalars['ID']['input'];
  mention_users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  optional_id?: InputMaybe<Scalars['String']['input']>;
  task_id: Scalars['ID']['input'];
};

export type UpdateDataTypeValueInput = {
  _id: Scalars['ID']['input'];
  business?: InputMaybe<Scalars['ID']['input']>;
  data_value_name: Scalars['String']['input'];
  data_value_type?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDescriptionInput = {
  _id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
};

export type UpdateDocumentInput = {
  assign_to?: InputMaybe<AssignToInput>;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  document_type?: InputMaybe<DocumentType>;
  id: Scalars['ID']['input'];
  is_document_submission_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_hide_after_review?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_submission_required?: InputMaybe<Scalars['Boolean']['input']>;
  validity?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateDoucment = {
  docRef?: InputMaybe<Scalars['Upload']['input']>;
  doc_id?: InputMaybe<Scalars['String']['input']>;
  xfdf?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateDueDateInput = {
  _id: Scalars['ID']['input'];
  due_date: Scalars['DateTime']['input'];
};

export type UpdateEvaluationInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  listProjects?: InputMaybe<Scalars['String']['input']>;
  milestone?: InputMaybe<Scalars['String']['input']>;
  objectiveAssigned?: InputMaybe<Array<InputMaybe<ObjectiveAssignmnet>>>;
  performanceGoals?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  road_map?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_remark?: InputMaybe<Scalars['Float']['input']>;
  total_score?: InputMaybe<Scalars['Float']['input']>;
  total_target?: InputMaybe<Scalars['Float']['input']>;
  total_weight?: InputMaybe<Scalars['Float']['input']>;
  trainingRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateExpenseInvoice = {
  category?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExpenseInvoiceCategory = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInputAppraisaleScale = {
  _id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  scale_group?: InputMaybe<Array<InputMaybe<ScaleGroupInput>>>;
  total_score?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateInputObjectiveAssignment = {
  _id: Scalars['ID']['input'];
  objectiveAssigned?: InputMaybe<Array<InputMaybe<ObjectiveAssignedInput>>>;
};

export type UpdateInputUserAppDevice = {
  app_type: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  is_approved: Scalars['Boolean']['input'];
};

export type UpdateInvoiceItemsInput = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  expenseId?: InputMaybe<Scalars['ID']['input']>;
  expenseInvCategoryId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_expense?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newCreatedAssetsList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  serial_number?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLeaseInput = {
  assetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  leaseBegin?: InputMaybe<Scalars['String']['input']>;
  leaseEnd?: InputMaybe<Scalars['String']['input']>;
  leasingCustomerId: Scalars['ID']['input'];
};

export type UpdateLeavePolicyInput = {
  _id: Scalars['ID']['input'];
  assign_to: Array<Scalars['ID']['input']>;
  business?: InputMaybe<Scalars['ID']['input']>;
  businessLocation?: InputMaybe<Scalars['ID']['input']>;
  leaves: Array<LeavesInput>;
  name: Scalars['String']['input'];
};

export type UpdateLeaveRequest = {
  accept_reject_leave?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  approval_description?: InputMaybe<Scalars['String']['input']>;
  date_type_leave?: InputMaybe<Array<InputMaybe<TypeLeaveInput>>>;
  employee_id: Scalars['ID']['input'];
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  is_sandwich?: InputMaybe<Scalars['Boolean']['input']>;
  leave_request?: InputMaybe<Array<InputMaybe<LeaveInput>>>;
  reason_for_leave?: InputMaybe<Scalars['String']['input']>;
  remaining_days?: InputMaybe<Scalars['Float']['input']>;
  remaining_unpaid_days?: InputMaybe<Scalars['Float']['input']>;
  sandwich?: InputMaybe<Array<InputMaybe<SandwichUpdateAproval>>>;
  status?: InputMaybe<TimeOffStatus>;
  time_off_id: Scalars['ID']['input'];
  total_leave_out_of_accural?: InputMaybe<Scalars['Float']['input']>;
  total_leaves?: InputMaybe<Scalars['Float']['input']>;
  total_unpaid_leaves?: InputMaybe<Scalars['Float']['input']>;
  type_of_absence: Scalars['ID']['input'];
  type_of_absence_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLoanRequest = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  approval_description?: InputMaybe<Scalars['String']['input']>;
  employee_id: Scalars['ID']['input'];
  loan_id: Scalars['ID']['input'];
  status: LoanPaymentStatus;
};

export type UpdateMultiSchduleInput = {
  break_detail?: InputMaybe<Array<ScheduleBreaksInput>>;
  employeesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_time?: InputMaybe<Scalars['String']['input']>;
  is_all?: InputMaybe<Scalars['Boolean']['input']>;
  notifyByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  short_break?: InputMaybe<Scalars['ID']['input']>;
  short_break_count?: InputMaybe<Scalars['Int']['input']>;
  start_date: Scalars['DateTime']['input'];
  start_time: Scalars['String']['input'];
};

export type UpdateMultipleScheduleRes = {
  __typename?: 'updateMultipleScheduleRes';
  data?: Maybe<Scalars['Boolean']['output']>;
  errorMessage?: Maybe<Array<Maybe<ErrorMessage>>>;
};

export type UpdatePayrollStatusInput = {
  _id: Scalars['ID']['input'];
  status: PayrollStatus;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdatePerformanceCycleInput = {
  Department?: InputMaybe<Scalars['ID']['input']>;
  Role?: InputMaybe<Scalars['ID']['input']>;
  appraisal_setting?: InputMaybe<Array<InputMaybe<AppraisalSettingInput>>>;
  appraiser_setting?: InputMaybe<Array<InputMaybe<AppraiserSettingInput>>>;
  assigning_start_date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  employees?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  end_date: Scalars['Date']['input'];
  id: Scalars['ID']['input'];
  is_all?: InputMaybe<Scalars['Boolean']['input']>;
  is_linear_flow?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  start_date: Scalars['Date']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePerformanceCycleStatusInput = {
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  status: Scalars['String']['input'];
};

export type UpdatePermissions = {
  permissions?: InputMaybe<Array<UserPermissionInput>>;
};

export type UpdatePreviousDataInput = {
  from_date: Scalars['String']['input'];
};

export type UpdatePreviousInput = {
  business_id?: InputMaybe<Scalars['ID']['input']>;
  from_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_paid_weekend?: InputMaybe<Scalars['Boolean']['input']>;
  is_weekend_mode?: InputMaybe<Scalars['Boolean']['input']>;
  pay_type?: InputMaybe<Scalars['ID']['input']>;
  weekEndDays?: InputMaybe<Array<InputMaybe<WeekEndDays>>>;
  working_days?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePriorityInput = {
  _id: Scalars['ID']['input'];
  priority: PriorityEmums;
};

export type UpdateProfilePictureInput = {
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  type?: InputMaybe<UpdateProfileTypeEnum>;
};

export enum UpdateProfileTypeEnum {
  Asset = 'asset',
  Business = 'business',
  Employee = 'employee'
}

export type UpdateRegionInput = {
  Business?: InputMaybe<Scalars['ID']['input']>;
  BusinessLocation?: InputMaybe<Array<Scalars['ID']['input']>>;
  City?: InputMaybe<Array<Scalars['ID']['input']>>;
  Country: Scalars['ID']['input'];
  State?: InputMaybe<Array<Scalars['ID']['input']>>;
  _id: Scalars['ID']['input'];
  region_name: Scalars['String']['input'];
};

export type UpdateRegisterBusinessInput = {
  business_identification_number?: InputMaybe<Scalars['String']['input']>;
  business_identification_type?: InputMaybe<Scalars['String']['input']>;
  business_legal_name: Scalars['String']['input'];
  business_logo?: InputMaybe<Scalars['Upload']['input']>;
  card_holder_name: Scalars['String']['input'];
  card_number: Scalars['String']['input'];
  confirm_password?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['ID']['input'];
  currency_format?: InputMaybe<Scalars['String']['input']>;
  currency_name?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  cvv: Scalars['String']['input'];
  date_format?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  estimated_monthly_sale?: InputMaybe<Scalars['Float']['input']>;
  expiration_month: Scalars['String']['input'];
  expiration_year: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  is_24_hour_format?: InputMaybe<Scalars['Boolean']['input']>;
  landline?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  number_of_stores?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  phone_country_code: Scalars['String']['input'];
  save_card: Scalars['Boolean']['input'];
  what_mostly_sell?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateRepliesCommentInput = {
  comment_id: Scalars['ID']['input'];
  reply: Scalars['String']['input'];
  reply_id: Scalars['ID']['input'];
  task_id: Scalars['ID']['input'];
};

export type UpdateRequestLevel = {
  action_performed?: InputMaybe<Scalars['Boolean']['input']>;
  approval_description?: InputMaybe<Scalars['String']['input']>;
  attendance_date: Scalars['DateTime']['input'];
  attendance_id: Scalars['ID']['input'];
  employee_id: Scalars['ID']['input'];
  reason_type: Scalars['String']['input'];
  status: AttendanceStatus;
  time_in?: InputMaybe<Scalars['String']['input']>;
  time_out?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSampleDataInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  is_selected: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type UpdateSchduleInput = {
  _id: Scalars['ID']['input'];
  break_detail?: InputMaybe<Array<ScheduleBreaksInput>>;
  end_time: Scalars['String']['input'];
  notifyByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  short_break?: InputMaybe<Scalars['ID']['input']>;
  short_break_count: Scalars['Int']['input'];
  start_time: Scalars['String']['input'];
};

export type UpdateShipTo = {
  id: Scalars['ID']['input'];
  location: Scalars['String']['input'];
};

export type UpdateSummaryInput = {
  _id: Scalars['ID']['input'];
  summary: Scalars['String']['input'];
};

export type UpdateTaskInput = {
  _id: Scalars['ID']['input'];
  assignee?: InputMaybe<Array<Scalars['ID']['input']>>;
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  check_list?: InputMaybe<Array<CheckListInput>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  editor_description?: InputMaybe<Scalars['String']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<PriorityEmums>;
  removeFileUrl?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<Scalars['ID']['input']>;
  status: TaskStatusUpdateEmums;
  summary: Scalars['String']['input'];
};

export type UpdateTaskSectionWise = {
  _id: Scalars['ID']['input'];
  section: TaskSections;
  sectionValue: SectionValueInput;
};

export type UpdateTraininReplicagInput = {
  add_attachments: Array<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  remove_attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTrainingAttachementStatus = {
  attachmentId: Scalars['ID']['input'];
  is_completed: Scalars['Boolean']['input'];
};

export type UpdateTrainingInput = {
  Quiz?: InputMaybe<Scalars['ID']['input']>;
  add_attachments: Array<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  remove_attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  _id: Scalars['ID']['input'];
  business_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  old_password?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  confirmPassword: Scalars['String']['input'];
  encryptedPassword?: InputMaybe<ChangePasswordEncryptionKeys>;
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateWriteUpInput = {
  _id: Scalars['ID']['input'];
  accept_assign_schedule?: InputMaybe<Scalars['Boolean']['input']>;
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<InformedBy>;
  employee: Scalars['ID']['input'];
  informed_hr?: InputMaybe<Scalars['Boolean']['input']>;
  write_up_type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdloadDocumentInf = {
  __typename?: 'updloadDocumentInf';
  extension?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

export type UplaodDocument = {
  __typename?: 'uplaodDocument';
  date?: Maybe<Scalars['DateTime']['output']>;
  employee?: Maybe<User>;
  fileRef?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UploadAssetDocInput = {
  assetDoc?: InputMaybe<Scalars['Upload']['input']>;
  assetId: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type UploadFileDocumentControlAttachment = {
  attachment: Array<Scalars['Upload']['input']>;
  google_drive_attachment?: InputMaybe<Scalars['String']['input']>;
  google_drive_id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type UpoadFileWorkFlow = {
  __typename?: 'upoadFileWorkFlow';
  file_name?: Maybe<Scalars['String']['output']>;
  file_url?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<User>;
};

export type UserAccountStatus = {
  __typename?: 'userAccountStatus';
  account_status?: Maybe<Scalars['Boolean']['output']>;
};

export type UserActivityListingResult = {
  __typename?: 'userActivityListingResult';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<UserActivity>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type UserAppDevice = {
  __typename?: 'userAppDevice';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  User?: Maybe<User>;
  _id?: Maybe<Scalars['ID']['output']>;
  app_type?: Maybe<Scalars['String']['output']>;
  approved_at?: Maybe<Scalars['DateTime']['output']>;
  approved_by?: Maybe<User>;
  device_id?: Maybe<Scalars['String']['output']>;
  device_manufacturer?: Maybe<Scalars['String']['output']>;
  device_model?: Maybe<Scalars['String']['output']>;
  device_name?: Maybe<Scalars['String']['output']>;
  installed_date?: Maybe<Scalars['DateTime']['output']>;
  is_allow_attendance?: Maybe<Scalars['Boolean']['output']>;
  last_active_date?: Maybe<Scalars['DateTime']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  operating_system?: Maybe<Scalars['String']['output']>;
  os_version?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  removed_at?: Maybe<Scalars['DateTime']['output']>;
  removed_by?: Maybe<User>;
  sim_network?: Maybe<Scalars['String']['output']>;
  sim_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  terminal_id?: Maybe<Scalars['String']['output']>;
};

export type UserAppDeviceCount = {
  __typename?: 'userAppDeviceCount';
  allowAttendanceCount?: Maybe<Scalars['Int']['output']>;
  linked_device_count?: Maybe<Scalars['Int']['output']>;
  notAllowAttendanceCount?: Maybe<Scalars['Int']['output']>;
  terminal_app_device_count?: Maybe<Scalars['Int']['output']>;
  unlinked_device_count?: Maybe<Scalars['Int']['output']>;
  user_app_device_count?: Maybe<Scalars['Int']['output']>;
};

export type UserAppDeviceList = {
  __typename?: 'userAppDeviceList';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<UserAppDevice>>>;
};

export type UserAuthDetail = {
  __typename?: 'userAuthDetail';
  avatar_location?: Maybe<Scalars['String']['output']>;
  business_city_name?: Maybe<Scalars['String']['output']>;
  business_country_name?: Maybe<Scalars['String']['output']>;
  business_id?: Maybe<Business>;
  business_is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  business_state_name?: Maybe<Scalars['String']['output']>;
  business_status: Scalars['String']['output'];
  business_type: Scalars['String']['output'];
  chat_user_name?: Maybe<Scalars['String']['output']>;
  currency_format?: Maybe<Scalars['String']['output']>;
  currency_name?: Maybe<Scalars['String']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  date_format?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Designation>;
  do_not_disturb?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_domain?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDeviceExists?: Maybe<Scalars['Boolean']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  is_navigated_user?: Maybe<Scalars['Boolean']['output']>;
  is_popup_closed?: Maybe<Scalars['Boolean']['output']>;
  is_sample_data?: Maybe<Scalars['Boolean']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_working_date?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_pictures?: Maybe<Array<Maybe<ProfilePictures>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  time_zone?: Maybe<Scalars['String']['output']>;
  two_fa_secret?: Maybe<Scalars['String']['output']>;
  user_is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export type UserBreakIn = {
  app_type?: InputMaybe<Application_Type>;
  breakId?: InputMaybe<Scalars['String']['input']>;
  breakType?: InputMaybe<Scalars['String']['input']>;
  clockedHistoryId?: InputMaybe<Scalars['ID']['input']>;
  device_id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  minimum_break_percentage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCLocked = {
  __typename?: 'userCLocked';
  Schedule?: Maybe<Schedule>;
  User?: Maybe<User>;
  UserClockInPin: Scalars['String']['output'];
  break_details?: Maybe<Break_Details>;
  clockedHistory?: Maybe<ClockedHistory>;
  clocked_in_time?: Maybe<Scalars['String']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  oldClockHistoryId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Tokens>;
};

export type UserCustomPermissions = {
  __typename?: 'userCustomPermissions';
  can_update_payroll?: Maybe<Scalars['Boolean']['output']>;
  can_update_schedule?: Maybe<Scalars['Boolean']['output']>;
  can_view_payroll?: Maybe<Scalars['Boolean']['output']>;
  can_view_schedule?: Maybe<Scalars['Boolean']['output']>;
};

export type UserDashbaord = {
  __typename?: 'userDashbaord';
  task?: Maybe<Array<Maybe<TaskForUserDashbaord>>>;
  wagesAndHours?: Maybe<Array<Maybe<UserDashboardWagesAndHours>>>;
};

export type UserDashboardInput = {
  task_end_date?: InputMaybe<Scalars['String']['input']>;
  task_start_date?: InputMaybe<Scalars['String']['input']>;
  timesheet_end_date?: InputMaybe<Scalars['String']['input']>;
  timesheet_start_date?: InputMaybe<Scalars['String']['input']>;
};

export type UserDashboardWagesAndHours = {
  __typename?: 'userDashboardWagesAndHours';
  _id?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  totalWages?: Maybe<Scalars['Float']['output']>;
};

export type UserData = {
  __typename?: 'userData';
  Schedule?: Maybe<Schedule>;
  User?: Maybe<User>;
  UserClockInPin?: Maybe<Scalars['String']['output']>;
  approval_requests?: Maybe<Scalars['Int']['output']>;
  attendanceStatus?: Maybe<Scalars['String']['output']>;
  break_details?: Maybe<Break_Details>;
  clockedHistory?: Maybe<ClockedHistory>;
  clocked_in_time?: Maybe<Scalars['String']['output']>;
  isScheduleViewAsAdmin?: Maybe<Scalars['Boolean']['output']>;
  isTimesheetViewAsAdmin?: Maybe<Scalars['Boolean']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  is_clocked_in_from_app?: Maybe<Scalars['Boolean']['output']>;
  is_un_restricted?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Scalars['Int']['output']>;
  oldClockHistoryId?: Maybe<Scalars['String']['output']>;
  onTime?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  short_break?: Maybe<ShortBreak>;
  short_break_count?: Maybe<Scalars['Int']['output']>;
  short_break_detail?: Maybe<Array<Maybe<Short_Break_Detail>>>;
  status?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Scalars['Int']['output']>;
};

export type UserEncryptionKeyInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  encryptedPrivateKey: Scalars['String']['input'];
  iv: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
  salt: Scalars['String']['input'];
};

export type UserFilterTasks = {
  date: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserMonthlyAttendaceStatus = {
  __typename?: 'userMonthlyAttendaceStatus';
  absent?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  onLeave?: Maybe<Scalars['Int']['output']>;
  present?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  week?: Maybe<Scalars['String']['output']>;
};

export type UserPermissionInput = {
  id: Scalars['ID']['input'];
  is_enabled: Scalars['Boolean']['input'];
};

export type UserShortBreak = {
  app_type: Application_Type;
  break_end_time?: InputMaybe<Scalars['String']['input']>;
  clockedHistoryId?: InputMaybe<Scalars['ID']['input']>;
  device_id: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  shift_time?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserWithRolesHierarchy = {
  __typename?: 'userWithRolesHierarchy';
  Business?: Maybe<Business>;
  BusinessLocation?: Maybe<BusinessLocation>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Role>;
  parentId?: Maybe<Scalars['ID']['output']>;
  path?: Maybe<Array<Maybe<Role>>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  positionName?: Maybe<Scalars['String']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  rolePolicy?: Maybe<RolePolicy>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User_List_Input = {
  employee?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Userdata = {
  __typename?: 'userdata';
  _id?: Maybe<Scalars['ID']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
};

export type UsersSharedPasswordInput = {
  employeeId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<EncryptedPasswordInput>;
};

export type ValidateDiscountInput = {
  couponCode: Scalars['String']['input'];
  customerId: Scalars['ID']['input'];
  locationId: Scalars['ID']['input'];
  transactionId: Scalars['ID']['input'];
};

export type Vendors = {
  __typename?: 'vendors';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum VerificationMethodEnum {
  Email = 'email',
  Phone = 'phone'
}

export type VerifySsnAndSendOtpInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  method: VerificationMethodEnum;
  phone?: InputMaybe<Scalars['String']['input']>;
  ssn_no: Scalars['String']['input'];
};

export type Wages = {
  __typename?: 'wages';
  _id?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  totalWages?: Maybe<Scalars['Float']['output']>;
  total_calculated_daily_salary?: Maybe<Scalars['Float']['output']>;
};

export type WagesByDate = {
  __typename?: 'wagesByDate';
  date?: Maybe<Scalars['String']['output']>;
  total_wages?: Maybe<Scalars['Float']['output']>;
};

export type WeekEndDays = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  selected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeekEndDaysRetun = {
  __typename?: 'weekEndDaysRetun';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
};

export type Weekend = {
  __typename?: 'weekend';
  _id?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
};

export type WeeklyData = {
  __typename?: 'weeklyData';
  totalEmployees?: Maybe<Scalars['Int']['output']>;
  totalOverTime?: Maybe<Scalars['Int']['output']>;
  totalRostersTime?: Maybe<Scalars['Int']['output']>;
  totalWages?: Maybe<Scalars['String']['output']>;
  weekNumber?: Maybe<Scalars['Int']['output']>;
};

export type WorkFlow = {
  __typename?: 'workFlow';
  action_date?: Maybe<Scalars['Date']['output']>;
  approval_description?: Maybe<Scalars['String']['output']>;
  approved_by?: Maybe<User>;
  delegated_user?: Maybe<Array<Maybe<User>>>;
  deleted_date?: Maybe<Scalars['Date']['output']>;
  employee?: Maybe<User>;
  status?: Maybe<Scalars['String']['output']>;
};

export type WorkFlowLevels = {
  __typename?: 'workFlowLevels';
  approval_level?: Maybe<Scalars['Int']['output']>;
  approval_to?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<User>;
  level?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Role>;
};

export type WorkFlowListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum WorkFlowTypeEnum {
  AttendenceRegulation = 'AttendenceRegulation',
  Expense = 'Expense',
  Leave = 'Leave',
  Loan = 'Loan',
  WriteUp = 'WriteUp'
}

export type WorkFlows = {
  __typename?: 'workFlows';
  current_workflow_levels?: Maybe<Array<Maybe<Level>>>;
  previous_workflow_levels?: Maybe<Array<Maybe<Level>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<User>;
};

export type WriteUpByEmployee = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  employee: Scalars['ID']['input'];
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type WriteUpInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  accept_assign_schedule?: InputMaybe<Scalars['Boolean']['input']>;
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<InformedBy>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  informed_hr?: InputMaybe<Scalars['Boolean']['input']>;
  write_up_reason: WriteUpReason;
  write_up_source?: InputMaybe<Application_Type>;
  write_up_type?: InputMaybe<Scalars['String']['input']>;
  writeup_date?: InputMaybe<Scalars['DateTime']['input']>;
  writeup_message?: InputMaybe<Scalars['String']['input']>;
};

export type WriteUpListDataTable = {
  __typename?: 'writeUpListDataTable';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<WriteUp>>>;
};

export type WriteUpListFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<WriteUpStatus>;
};

export type WriteUpRequestFilter = {
  columns?: InputMaybe<Array<InputMaybe<ColumnsInput>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  exported_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  field?: InputMaybe<Scalars['String']['input']>;
  is_call_from_app?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted: Scalars['Boolean']['input'];
  is_exported?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<SortEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WriteUpResult = {
  __typename?: 'writeUpResult';
  config?: Maybe<DataTableConfig>;
  results?: Maybe<Array<Maybe<WriteUp>>>;
};

export enum WriteUpStatus {
  Accepted = 'accepted',
  All = 'all',
  Archive = 'archive',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum WriteUpTypeFilters {
  All = 'All',
  EarlyOut = 'EarlyOut',
  Late = 'Late',
  LateOut = 'LateOut',
  MissPunchOut = 'MissPunchOut'
}

export enum WritupStatusEnumMult {
  Accepted = 'accepted',
  Rejected = 'rejected'
}

export enum XpenseStatusEnum {
  Accept = 'accept',
  All = 'all',
  Reject = 'reject'
}

export enum YearlyMonthlyEnum {
  Monthly = 'Monthly',
  Onetime = 'Onetime',
  Yearly = 'Yearly'
}

export type LoginWithEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  deviceToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginWithEmailMutation = { __typename?: 'Mutation', loginWithEmail?: { __typename: 'AuthTokens', tokens?: { __typename: 'tokens', access?: { __typename: 'token', token?: string | null, expires?: any | null } | null, refresh?: { __typename: 'token', token?: string | null, expires?: any | null } | null } | null, user?: { __typename: 'userAuthDetail', is_navigated_user?: boolean | null, date_format?: string | null, currency_format?: string | null, currency_name?: string | null, currency_symbol?: string | null, do_not_disturb?: boolean | null, two_fa_secret?: string | null, is_un_restricted?: boolean | null, last_working_date?: string | null, is_sample_data?: boolean | null, isOwner?: boolean | null, id?: string | null, business_status: string, business_type: string, first_name?: string | null, last_name?: string | null, email?: string | null, phone?: string | null, logo?: string | null, avatar_location?: string | null, user_is_super_admin?: boolean | null, is_popup_closed?: boolean | null, business_is_super_admin?: boolean | null, profile_pictures?: Array<{ __typename: 'profilePictures', dimension?: number | null, path?: string | null } | null> | null, business_id?: { __typename: 'Business', zip_code?: string | null, is_24_hour_format?: boolean | null, _id: string, logo?: string | null, business_legal_name?: string | null, business_type?: string | null, time_zone?: string | null, Country?: { __typename: 'Country', name?: string | null, _id?: string | null } | null, state?: { __typename: 'State', _id?: string | null, state_name?: string | null } | null, city?: { __typename: 'City', _id?: string | null, city_name?: string | null } | null, business_package?: { __typename: 'BusinessPackage', hr_module_only?: boolean | null } | null } | null } | null, businesses?: Array<{ __typename: 'Business', _id: string, business_email?: string | null, business_legal_name?: string | null, address?: string | null, logo?: string | null } | null> | null } | null };

export type GetEmployeeByEmailLoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetEmployeeByEmailLoginQuery = { __typename?: 'Query', getEmployeeByEmailLogin?: { __typename?: 'User', phone?: string | null, email?: string | null, first_name?: string | null, last_name?: string | null, is_password_set?: boolean | null, is_email_verify?: boolean | null, is_phone_verify?: boolean | null, id?: string | null } | null };

export const LoginWithEmailDocument = gql`
    mutation loginWithEmail($email: String!, $password: String!, $deviceToken: String) {
  loginWithEmail(email: $email, password: $password, device_token: $deviceToken) {
    tokens {
      access {
        token
        expires
        __typename
      }
      refresh {
        token
        expires
        __typename
      }
      __typename
    }
    user {
      is_navigated_user
      date_format
      currency_format
      currency_name
      currency_symbol
      do_not_disturb
      two_fa_secret
      is_un_restricted
      last_working_date
      is_sample_data
      isOwner
      id
      profile_pictures {
        dimension
        path
        __typename
      }
      business_id {
        zip_code
        is_24_hour_format
        Country {
          name
          _id
          __typename
        }
        state {
          _id
          state_name
          __typename
        }
        city {
          _id
          city_name
          __typename
        }
        _id
        logo
        business_legal_name
        business_type
        time_zone
        business_package {
          hr_module_only
          __typename
        }
        __typename
      }
      business_status
      business_type
      first_name
      last_name
      email
      phone
      logo
      avatar_location
      user_is_super_admin
      is_popup_closed
      business_is_super_admin
      __typename
    }
    businesses {
      _id
      business_email
      business_legal_name
      address
      logo
      __typename
    }
    __typename
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginWithEmailGQL extends Apollo.Mutation<LoginWithEmailMutation, LoginWithEmailMutationVariables> {
    document = LoginWithEmailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEmployeeByEmailLoginDocument = gql`
    query getEmployeeByEmailLogin($email: String!) {
  getEmployeeByEmailLogin(email: $email) {
    phone
    email
    first_name
    last_name
    is_password_set
    is_email_verify
    is_phone_verify
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmployeeByEmailLoginGQL extends Apollo.Query<GetEmployeeByEmailLoginQuery, GetEmployeeByEmailLoginQueryVariables> {
    document = GetEmployeeByEmailLoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }