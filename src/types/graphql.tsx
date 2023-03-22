import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> &
  {
    [P in K]-?: NonNullable<T[P]>;
  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** App access control list */
export type AccessControls = {
  backOffice: BackOfficeAccessControls;
  commerce: CommerceAccessControls;
  financials: FinancialAccessControls;
  mobile: MobileAccessControls;
  pfep: PfepAccessControls;
  production: ProductionAccessControls;
};

/** Access type */
export type AccessType = {
  create: Scalars["Boolean"];
  edit: Scalars["Boolean"];
  exports: Scalars["Boolean"];
  reports: Scalars["Boolean"];
  view: Scalars["Boolean"];
};

export type AddInstructionTemplateStepToInstructionTemplateInput = {
  /** The text content of this InstructionTemplateStep. */
  content: Scalars["String"];
  /** The ID of InstructionTemplate that contains this step. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionTemplateStep. */
  name: Scalars["String"];
  /** For ordering the InstructionTemplateSteps within the InstructionTemplate. */
  weight: Scalars["Float"];
};

export type AddKitTemplatePartOptionToKitTemplatePartInput = {
  /** The ID of the Item or Kit for the default option of this part. */
  childId: Scalars["String"];
  /** Is the the KitPartOption an Item or Kit?. Must be Item or Kit. */
  childType: Scalars["String"];
  /** If set to true, this option becomes the default option of the KitPart */
  isDefault: Scalars["Boolean"];
  /** The ID of the parent KitTemplate that the KitPart you want to add a KitPartOption to belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart that you want to add a KitPartOption to. */
  partId: Scalars["String"];
};

export type AddKitTemplatePartToKitTemplateInput = {
  /** Give the KitPart a name. The KitPart can have more than one option so you may not always want to name it what you are going to set the default option to. */
  name: Scalars["String"];
  /** The ID of the parent KitTemplate that this KitPart belongs to. */
  parentId: Scalars["String"];
  /** The number of pieces of this KitPart used in the Kit. */
  quantity: Scalars["Float"];
};

export type AddKitTemplatePartWithOptionToKitTemplateInput = {
  /** The ID of the Item or Kit for the default option of this part. */
  childId: Scalars["String"];
  /** Is the KitPart an Item or another Kit? Must be either Item or Kit. */
  childType: Scalars["String"];
  /** Give the KitPart a name. The KitPart can have more than one option so you may not always want to name it what you are going to set the default option to. */
  name: Scalars["String"];
  /** The ID of the parent KitTemplate that this KitPart belongs to. */
  parentId: Scalars["String"];
  /** The number of pieces of this KitPart used in the Kit. */
  quantity: Scalars["Float"];
};

/** Generic address model */
export type Address = {
  /** The city for the address. */
  city?: Maybe<Scalars["String"]>;
  /** The country for the address. */
  country?: Maybe<Scalars["String"]>;
  /** The main email address associated with this address. */
  emailAddress?: Maybe<Scalars["String"]>;
  /** The first name of the main recipient at this address. */
  firstName?: Maybe<Scalars["String"]>;
  /** The last name of the main recipient at this address. */
  lastName?: Maybe<Scalars["String"]>;
  /** The main phone number at this address. */
  phoneNumber?: Maybe<Scalars["String"]>;
  /** The state for the address. */
  state?: Maybe<Scalars["String"]>;
  /** The street details for the address. */
  street1?: Maybe<Scalars["String"]>;
  /** Additional street details for the address. */
  street2?: Maybe<Scalars["String"]>;
  /** The zip code for the address. */
  zipCode?: Maybe<Scalars["String"]>;
};

/** Common address input */
export type AddressInput = {
  /** The city for the address. */
  city?: InputMaybe<Scalars["String"]>;
  /** The country for the address. */
  country?: InputMaybe<Scalars["String"]>;
  /** The main email address associated with this address. */
  emailAddress?: InputMaybe<Scalars["String"]>;
  /** The first name of the main recipient at this address. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** The last name of the main recipient at this address. */
  lastName?: InputMaybe<Scalars["String"]>;
  /** The main phone number at this address. */
  phoneNumber?: InputMaybe<Scalars["String"]>;
  /** The state for the address. */
  state?: InputMaybe<Scalars["String"]>;
  /** The street details for the address. */
  street1?: InputMaybe<Scalars["String"]>;
  /** Additional street details for the address. */
  street2?: InputMaybe<Scalars["String"]>;
  /** The zip code for the address. */
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** Common address input update */
export type AddressUpdateInput = {
  /** The city for the address. */
  city?: InputMaybe<Scalars["String"]>;
  /** The country for the address. */
  country?: InputMaybe<Scalars["String"]>;
  /** The main email address associated with this address. */
  emailAddress?: InputMaybe<Scalars["String"]>;
  /** The first name of the main recipient at this address. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** The last name of the main recipient at this address. */
  lastName?: InputMaybe<Scalars["String"]>;
  /** The main phone number at this address. */
  phoneNumber?: InputMaybe<Scalars["String"]>;
  /** The state for the address. */
  state?: InputMaybe<Scalars["String"]>;
  /** The street details for the address. */
  street1?: InputMaybe<Scalars["String"]>;
  /** Additional street details for the address. */
  street2?: InputMaybe<Scalars["String"]>;
  /** The zip code for the address. */
  zipCode?: InputMaybe<Scalars["String"]>;
};

/** The App record */
export type App = {
  /** The ID of the company the App belongs to. */
  companyId: Scalars["String"];
  /** The cover image of the app. */
  coverUrl?: Maybe<Scalars["String"]>;
  /** ID of the User that created this app. */
  createdBy: Scalars["String"];
  /** The date the App record was created. */
  createdOn: Scalars["String"];
  /** The description of the app. */
  description: Scalars["String"];
  /** The version of the editor this app was made in. */
  editorVersion: Scalars["String"];
  /** The icon of the app. */
  iconUrl?: Maybe<Scalars["String"]>;
  /** The ID of the App. */
  id: Scalars["String"];
  /** Is the app available for other users of the company. */
  isPublished: Scalars["Boolean"];
  /** The name of the app. */
  name: Scalars["String"];
  /** The version of the player this app should be played in. */
  playerVersion: Scalars["String"];
  /** The version number of the published app. */
  publishedAppVersion?: Maybe<Scalars["String"]>;
  /** Is the app currently available. active|inactive */
  status: Scalars["String"];
  /** The date the App record was last updated. */
  updatedOn: Scalars["String"];
};

/** App media upload */
export type AppMediaUploadInput = {
  /** The name of the file to upload. */
  fileName: Scalars["String"];
  /** ID of the app to associate with the upload */
  id: Scalars["String"];
  /** Type of the media: config|image|video */
  type: Scalars["String"];
};

/** AppUsageLog record */
export type AppUsageLog = {
  /** The user action that is logged. started */
  action: Scalars["String"];
  /** The ID of the App. */
  appId: Scalars["String"];
  /** The type of the App: custom|official. */
  appType: Scalars["String"];
  /** The ID of the company the AppUsageLog belongs to. */
  companyId: Scalars["String"];
  /** The date the AppUsageLog record was created. */
  createdOn: Scalars["String"];
  /** The ID of the AppUsageLog. */
  id: Scalars["String"];
  /** The date the AppUsageLog record was last updated. */
  updatedOn: Scalars["String"];
  /** ID of the User this log belongs to. */
  userId: Scalars["String"];
};

/** App media upload */
export type AppUsageLogInput = {
  /** The user action that is logged. started */
  action: Scalars["String"];
  /** The ID of the App. */
  appId: Scalars["String"];
  /** The type of the App: custom|official. */
  appType: Scalars["String"];
};

export type Apps = {
  customApps: Array<App>;
  officialApps: Array<InstalledApp>;
};

export type Arrival = {
  /** The internal reference number for this Arrival. This is created by the system. */
  arrivalNumber: Scalars["String"];
  /** The date that the Arrival was automatically closed. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** A history of comments and events related to this Arrival. */
  comments: Array<ArrivalComment>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** A note that can be sent to the Supplier along with the Arrival order. */
  externalNote?: Maybe<Scalars["String"]>;
  /** The ID of the Facility that this Arrival will be delivered to. */
  facilityId: Scalars["String"];
  /** The ID of the Arrival record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the Arrival. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Was the Arrival closed because all of the LineItems have been fully delivered? */
  isAutoClosed: Scalars["Boolean"];
  /** Was the Arrival closed manually by a user. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the user that manually closed the Arrival. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the Arrival was manually closed. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** The payment type agreed upon with the Supplier for this Arrival. */
  paymentType?: Maybe<Scalars["String"]>;
  /** The current status of the Arrival. One of active or inactive. */
  status: Scalars["String"];
  /** A partial record of the Supplier that the Arrival is for. */
  supplier: ClonedSupplier;
  /** The ID of the Supplier supplying the Items in this Arrival. */
  supplierId: Scalars["String"];
  /** Provided by the Supplier. Their reference number for your order */
  supplierOrderNumber?: Maybe<Scalars["String"]>;
  /** The payment terms agreed upon with the Supplier for this Arrival. */
  terms?: Maybe<Scalars["String"]>;
  /** The type of Arrival. One of regular or blanket. */
  type: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

/** Comments for an arrival */
export type ArrivalComment = {
  /** The comment itself. */
  comment?: Maybe<Scalars["String"]>;
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** Date the event occurred. Can be different than created on. For example, a quote was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, a quote. */
  file?: Maybe<Scalars["String"]>;
  /** Can be used to tie a comment to a specific ArrivalRelease. */
  releaseId?: Maybe<Scalars["String"]>;
  /** The type of comment. For example, quote received, line item added, etc. */
  type: Scalars["String"];
};

/** Comment for an arrival */
export type ArrivalCommentInput = {
  /** The comment itself. */
  comment?: InputMaybe<Scalars["String"]>;
  /** Date the event occurred. Can be different than created on. For example, a quote was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, a quote. */
  file?: InputMaybe<Scalars["String"]>;
  /** Can be used to tie a comment to a specific ArrivalRelease. */
  releaseId?: InputMaybe<Scalars["String"]>;
  /** The type of comment. For example, quote received, line item added, etc. */
  type: Scalars["String"];
};

/** ArrivalDelivery record */
export type ArrivalDelivery = {
  /** The ID of the Arrival that this ArrivalDelivery belongs to. */
  arrivalId: Scalars["ID"];
  /** The Arrival order number of the Arrival that this ArrivalDelivery belongs to. */
  arrivalNumber: Scalars["String"];
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Facility that this ArrivalDelivery is being delivered to. */
  facilityId: Scalars["String"];
  /** The ID of the ArrivalDelivery record. */
  id: Scalars["ID"];
  /** A general purpose note for this ArrivalDelivery. */
  note?: Maybe<Scalars["String"]>;
  /** Where in the Facility was the delivery received. */
  receivedAt: Scalars["String"];
  /** Who received the physical delivery? */
  receivedBy: Scalars["String"];
  /** When did the delivery occur (in the real world, not record creation). */
  receivedOn: Scalars["String"];
  /** The ID of the ArrivalRelease that this ArrivalDelivery belongs to. */
  releaseId: Scalars["ID"];
  /** The Supplier ID that is supplying the Items in this ArrivalDelivery. */
  supplierId: Scalars["String"];
  /** A URL to a receipt of the file received upon physical delivery of the items. */
  supplierReceivingDocumentFile?: Maybe<Scalars["String"]>;
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

export type ArrivalDeliveryDeleteInput = {
  arrivalId: Scalars["String"];
  id: Scalars["String"];
};

export type ArrivalDeliveryInput = {
  /** The line items in this ArrivalDelivery. */
  arrivalDeliveryLineItems?: InputMaybe<Array<ArrivalDeliveryLineItemRecord>>;
  /** The ID of the Arrival that this ArrivalDelivery belongs to. */
  arrivalId: Scalars["ID"];
  /** The Arrival order number of the Arrival that this ArrivalDelivery belongs to. */
  arrivalNumber: Scalars["String"];
  /** The ID of the Facility that this ArrivalDelivery is being delivered to. */
  facilityId: Scalars["String"];
  /** A general purpose note for this ArrivalDelivery. */
  note?: InputMaybe<Scalars["String"]>;
  /** Where in the Facility was the delivery received. */
  receivedAt?: InputMaybe<Scalars["String"]>;
  /** Who received the physical delivery? */
  receivedBy?: InputMaybe<Scalars["String"]>;
  /** When did the delivery occur (in the real world, not record creation). */
  receivedOn?: InputMaybe<Scalars["String"]>;
  /** The ID of the ArrivalRelease that this ArrivalDelivery belongs to. */
  releaseId: Scalars["ID"];
  /** The Supplier ID that is supplying the Items in this ArrivalDelivery. */
  supplierId: Scalars["String"];
  /** A URL to a receipt of the file received upon physical delivery of the items. */
  supplierReceivingDocumentFile?: InputMaybe<Scalars["String"]>;
};

/** ArrivalDeliveryLineItem record */
export type ArrivalDeliveryLineItem = {
  /** The ID of the Arrival this ArrivalDeliveryLineItem belongs to. */
  arrivalId: Scalars["ID"];
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The ID of the ArrivalDelivery this ArrivalDeliveryLineItem belongs to. */
  deliveryId: Scalars["ID"];
  /** The ID of the Item this ArrivalDeliveryLineItem was created for. */
  itemId: Scalars["String"];
  /** Any note specific to the delivery of this ArrivalDeliveryLineItem. */
  note?: Maybe<Scalars["String"]>;
  /** If the received quantity is larger than the remaining quantity allowed to be received then this override must be set to true. This prevents accidently receiving a quantity greater than what was ordered or released. */
  override?: Maybe<Scalars["Boolean"]>;
  /** The quantity received of the ArrivalDeliveryLineItem. */
  quantity: Scalars["Float"];
  /** The ID of the ArrivalRelease this ArrivalDeliveryLineItem belongs to. */
  releaseId: Scalars["ID"];
  supplierId?: Maybe<Scalars["String"]>;
  /** The ID of the SupplierItem for this line item. */
  supplierItemId: Scalars["ID"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

export type ArrivalDeliveryLineItemInput = {
  /** The ID of the Arrival this ArrivalDeliveryLineItem belongs to. */
  arrivalId: Scalars["ID"];
  /** The ID of the ArrivalDelivery this ArrivalDeliveryLineItem belongs to. */
  deliveryId: Scalars["ID"];
  /** Any note specific to the delivery of this ArrivalDeliveryLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** If the received quantity is larger than the remaining quantity allowed to be received then this override must be set to true. This prevents accidently receiving a quantity greater than what was ordered or released. */
  override?: InputMaybe<Scalars["Boolean"]>;
  /** The quantity received of the ArrivalDeliveryLineItem. */
  quantity: Scalars["Float"];
  /** The ID of the SupplierItem for this ArrivalDeliveryLineItem. */
  supplierItemId: Scalars["ID"];
};

export type ArrivalDeliveryLineItemRecord = {
  /** Any note specific to the delivery of this ArrivalDeliveryLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** If the received quantity is larger than the remaining quantity allowed to be received then this override must be set to true. This prevents accidently receiving a quantity greater than what was ordered or released. */
  override?: InputMaybe<Scalars["Boolean"]>;
  /** The quantity received of the ArrivalDeliveryLineItem. */
  quantity: Scalars["Float"];
  /** The ID of the SupplierItem for this ArrivalDeliveryLineItem. */
  supplierItemId: Scalars["ID"];
};

export type ArrivalDeliveryLineItemUpdateInput = {
  /** The ID of the Arrival this ArrivalDeliveryLineItem belongs to. */
  arrivalId: Scalars["ID"];
  /** The ID of the ArrivalDelivery this ArrivalDeliveryLineItem belongs to. */
  deliveryId: Scalars["ID"];
  /** Any note specific to the delivery of this line item. */
  note?: InputMaybe<Scalars["String"]>;
  /** The ID of the SupplierItem to be updated. */
  supplierItemId: Scalars["ID"];
};

export type ArrivalDeliveryUpdateInput = {
  /** The ID of the Arrival that this ArrivalDelivery belongs to. */
  arrivalId: Scalars["String"];
  /** The ID of the ArrivalDelivery you want to update. */
  id: Scalars["String"];
  /** A general purpose note for this ArrivalDelivery. */
  note?: InputMaybe<Scalars["String"]>;
  /** Where in the Facility was the delivery received. */
  receivedAt?: InputMaybe<Scalars["String"]>;
  /** Who received the physical delivery? */
  receivedBy?: InputMaybe<Scalars["String"]>;
  /** When did the delivery occur (in the real world, not record creation). */
  receivedOn?: InputMaybe<Scalars["String"]>;
  /** A URL to a receipt of the file received upon physical delivery of the items. */
  supplierReceivingDocumentFile?: InputMaybe<Scalars["String"]>;
};

/** ArrivalDetailsWithStatus record */
export type ArrivalDetailsWithStatus = {
  /** The Arrival record. */
  arrival: ArrivalWithStatus;
  /** All of the ArrivalDelivery records for this Arrival. */
  arrivalDeliveries: Array<ArrivalDelivery>;
  /** All of the ArrivalDeliveryLineItem records for this Arrival. */
  arrivalDeliveryLineItems: Array<ArrivalDeliveryLineItem>;
  /** All of the ArrivalLineItem records for this Arrival. */
  arrivalLineItems: Array<ArrivalLineItemWithStatus>;
  /** All of the ArrivalReleaseLineItem records for this Arrival. */
  arrivalReleaseLineItems: Array<ArrivalReleaseLineItemWithStatus>;
  /** All of the ArrivalRelease records for this Arrival. */
  arrivalReleases: Array<ArrivalReleaseWithStatus>;
  /** BidRequestLineItem. */
  bidRequestLineItems: Array<BidRequestLineItem>;
};

export type ArrivalInput = {
  /** The Items supplied by the Supplier in this Arrival. */
  arrivalLineItems?: InputMaybe<Array<ArrivalLineItemRecord>>;
  /** The ArrivalReleases to be created at the time of Arrival creation. This is only used if the type is set to blanket. */
  arrivalReleases?: InputMaybe<Array<ArrivalReleaseRecordInput>>;
  /** A history of comments and events related to this Arrival. */
  comment?: InputMaybe<ArrivalCommentInput>;
  /** When we the Arrival can be expected to be delivered. This is only used if the type is set to regular. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** A note that can be sent to the Supplier along with the Arrival order. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Facility that this Arrival will be delivered to. */
  facilityId: Scalars["String"];
  /** A note that can be viewed internally about the Arrival. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** The payment type agreed upon with the Supplier for this Arrival. */
  paymentType?: InputMaybe<Scalars["String"]>;
  /** The shipping method for the Arrival. This is only used if the type is set to regular. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The cost associated with shipping this Arrival. This is only used if the type is set to regular. */
  shippingCost?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Supplier supplying the Items in this Arrival. */
  supplierId: Scalars["String"];
  /** Provided by the Supplier. Their reference number for your order */
  supplierOrderNumber?: InputMaybe<Scalars["String"]>;
  /** The payment terms agreed upon with the Supplier for this Arrival. */
  terms?: InputMaybe<Scalars["String"]>;
  /** The type of the Arrival. Must be either regular or blanket. */
  type: Scalars["String"];
};

/** YBR app arrival line item */
export type ArrivalLineItem = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The date that the ArrivalLineItem was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the ArrivalLineItem record was created. */
  createdOn: Scalars["String"];
  /** The amount of the ArrivalLineItem that has been delivered already. */
  deliveredQuantity: Scalars["Float"];
  /** The total monetary value of the delivered quantity of the ArrivalLineItem. */
  deliveredValue: Scalars["Float"];
  /** The ID of the Facility the ArrivalLineItem is being delivered to. */
  facilityId: Scalars["String"];
  /** Was the ArrivalLineItem closed automatically because it was fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Was the ArrivalLineItem closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** A partial Item record. */
  item: ClonedItem;
  /** The ID of the Item this ArrivalLineItem is for. */
  itemId: Scalars["String"];
  /** The ID of the user that manually closed the ArrivalLineItem. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalLineItem was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** A note about this specific ArrivalLineItem. */
  note?: Maybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The amount of the ArrivalLineItem that has been released and sent to the Supplier for fulfillment. */
  releasedQuantity: Scalars["Float"];
  /** The total monetary value of the released quantity of the ArrivalLineItem. */
  releasedValue: Scalars["Float"];
  /** The ID of the Supplier that the parent Arrival was sent to. */
  supplierId: Scalars["String"];
  /** A partial SupplierItem record. */
  supplierItem: ClonedSupplierItem;
  /** The ID of the SupplierItem for this ArrivalLineItem. */
  supplierItemId: Scalars["String"];
  /** When the ArrivalLineItem record was last updated. */
  updatedOn: Scalars["String"];
  /** The total monetary value of the ArrivalLineItem. Determined by pricePerUnit times quantity. */
  value: Scalars["Float"];
};

export type ArrivalLineItemDeleteInput = {
  /** The ID of the Arrival that the ArrivalLineItem you want to delete belongs to. */
  arrivalId: Scalars["ID"];
  /** The ID of the SupplierItem that you want to remove from an Arrival. */
  supplierItemId: Scalars["String"];
};

export type ArrivalLineItemInput = {
  /** The ID of the Arrival that you want to add an ArrivalLineItem to. */
  arrivalId: Scalars["ID"];
  /** A note about this specific ArrivalLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The ID of the SupplierItem for this ArrivalLineItem. */
  supplierItemId: Scalars["String"];
};

export type ArrivalLineItemRecord = {
  /** A note about this specific ArrivalLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The ID of the SupplierItem for this ArrivalLineItem. */
  supplierItemId: Scalars["String"];
};

export type ArrivalLineItemUpdateInput = {
  /** The ID of the Arrival that the ArrivalLineItem you want to update belongs to. */
  arrivalId: Scalars["ID"];
  /** Mark the ArrivalLineItem as completed. If set to true then you will not be able to create new ArrivalReleaseLineItems or ArrivalDeliveryLineItems that correspond to this ArrivalLineItem. */
  isClosed?: InputMaybe<Scalars["Boolean"]>;
  /** A note about this specific ArrivalLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit?: InputMaybe<Scalars["Float"]>;
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity?: InputMaybe<Scalars["Float"]>;
  /** The ID of the SupplierItem you want to update. */
  supplierItemId: Scalars["String"];
};

export type ArrivalLineItemWithStatus = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The date that the ArrivalLineItem was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The parent record that made this ArrivalLineItem closed. */
  closedParents: Array<ClosedParent>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the ArrivalLineItem record was created. */
  createdOn: Scalars["String"];
  /** The amount of the ArrivalLineItem that has been delivered already. */
  deliveredQuantity: Scalars["Float"];
  /** The total monetary value of the delivered quantity of the ArrivalLineItem. */
  deliveredValue: Scalars["Float"];
  /** The ID of the Facility the ArrivalLineItem is being delivered to. */
  facilityId: Scalars["String"];
  /** Was the ArrivalLineItem closed automatically because it was fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Is the ArrivalLineItem accepting deliveries or not. */
  isClosed: Scalars["Boolean"];
  /** Was the ArrivalLineItem closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** A partial Item record. */
  item: ClonedItem;
  /** The ID of the Item this ArrivalLineItem is for. */
  itemId: Scalars["String"];
  /** The ID of the user that manually closed the ArrivalLineItem. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalLineItem was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** A note about this specific ArrivalLineItem. */
  note?: Maybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The amount of the ArrivalLineItem that has been released and sent to the Supplier for fulfillment. */
  releasedQuantity: Scalars["Float"];
  /** The total monetary value of the released quantity of the ArrivalLineItem. */
  releasedValue: Scalars["Float"];
  /** The ID of the Supplier that the parent Arrival was sent to. */
  supplierId: Scalars["String"];
  /** A partial SupplierItem record. */
  supplierItem: ClonedSupplierItem;
  /** The ID of the SupplierItem for this ArrivalLineItem. */
  supplierItemId: Scalars["String"];
  /** When the ArrivalLineItem record was last updated. */
  updatedOn: Scalars["String"];
  /** The total monetary value of the ArrivalLineItem. Determined by pricePerUnit times quantity. */
  value: Scalars["Float"];
};

export type ArrivalQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Arrival>;
};

/** ArrivalRelease record */
export type ArrivalRelease = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The internal reference number of the parent Arrival. */
  arrivalNumber: Scalars["String"];
  arrivalScheduleId?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** When we the ArrivalRelease can be expected to be delivered. */
  dueDate?: Maybe<Scalars["String"]>;
  /** The ID of the Facility the ArrivalRelease is being delivered to. */
  facilityId: Scalars["String"];
  /** The ID of the ArrivalRelease record. */
  id: Scalars["ID"];
  /** Was the ArrivalRelease closed automatically because all of its line items were fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Was the ArrivalRelease closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the user that manually closed the ArrivalRelease. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease information was sent to the Supplier. */
  releasedDate?: Maybe<Scalars["String"]>;
  /** Any sales tax associated with the ArrivalRelease. */
  salesTax?: Maybe<Scalars["Float"]>;
  /** The shipping method for the ArrivalRelease. */
  shipVia?: Maybe<Scalars["String"]>;
  /** The cost associated with shipping this ArrivalRelease. */
  shippingCost?: Maybe<Scalars["Float"]>;
  /** A partial record of the Supplier the ArrivalRelease was sent to. */
  supplier: ClonedSupplier;
  /** The ID of the Supplier the Arrival is being sent to for fulfillment. */
  supplierId: Scalars["String"];
  /** A list of surcharges for this specific ArrivalRelease. */
  surcharges?: Maybe<Array<ArrivalReleaseSurcharge>>;
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

export type ArrivalReleaseDeleteInput = {
  /** The ID of the Arrival that the ArrivalRelease you want to delete belongs to. */
  arrivalId: Scalars["String"];
  /** The ID of the ArrivalRelease you want to delete. */
  id: Scalars["String"];
};

export type ArrivalReleaseInput = {
  /** The ID of the Arrival that this ArrivalRelease belongs to. */
  arrivalId: Scalars["String"];
  /** The Arrival order number of the Arrival that this ArrivalRelease belongs to. */
  arrivalNumber: Scalars["String"];
  /** A list of ArrivalReleaseLineItems to add to the ArrivalRelease at time of creation. */
  arrivalReleaseLineItems?: InputMaybe<Array<ArrivalReleaseLineItemRecord>>;
  arrivalScheduleId?: InputMaybe<Scalars["String"]>;
  /** When we the ArrivalRelease can be expected to be delivered. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the Facility that this ArrivalRelease will be delivered to. */
  facilityId: Scalars["String"];
  /** The date that the ArrivalRelease information was sent to the Supplier. */
  releasedDate?: InputMaybe<Scalars["String"]>;
  /** Any sales tax associated with the ArrivalRelease. */
  salesTax?: InputMaybe<Scalars["Float"]>;
  /** The shipping method for the ArrivalRelease. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The cost associated with shipping this ArrivalRelease. */
  shippingCost?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Supplier supplying the Items in this Arrival Release. */
  supplierId: Scalars["String"];
  /** A list of surcharges for this specific ArrivalRelease. */
  surcharges?: InputMaybe<Array<ArrivalReleaseSurchargeInput>>;
};

/** ArrivalReleaseLineItem record */
export type ArrivalReleaseLineItem = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The date that the ArrivalReleaseLineItem was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The current delivered quantity of the ArrivalReleaseLineItem. */
  deliveredQuantity: Scalars["Float"];
  /** Was the ArrivalReleaseLineItem closed automatically because it was fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Was the ArrivalReleaseLineItem closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the Item this line item is for. */
  itemId: Scalars["String"];
  /** The ID of the user that manually closed the ArrivalReleaseLineItem. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalReleaseLineItem was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** A note about this specific ArrivalReleaseLineItem. */
  note?: Maybe<Scalars["String"]>;
  /** The price per unit of the ArrivalReleaseLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The quantity ordered of the ArrivalReleaseLineItem. */
  quantity: Scalars["Float"];
  /** The ID of the parent ArrivalRelease. */
  releaseId: Scalars["ID"];
  /** The ID of the Supplier that the parent Arrival was sent to. */
  supplierId: Scalars["String"];
  /** The ID of the SupplierItem this line item is for. */
  supplierItemId: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
  /** The total monetary value of the ArrivalReleaseLineItem. Calculated by the system as pricePerUnit times quantity. */
  value: Scalars["Float"];
};

export type ArrivalReleaseLineItemDeleteInput = {
  /** The ID of the Arrival that the ArrivalRelease belongs to. */
  arrivalId: Scalars["String"];
  /** The ID of the ArrivalRelease that the ArrivalReleaseLineItem you want to delete belongs to. */
  releaseId: Scalars["ID"];
  /** The ID of the SupplierItem you want to delete from the ArrivalRelease. */
  supplierItemId: Scalars["String"];
};

export type ArrivalReleaseLineItemInput = {
  /** The ID of the Arrival that the ArrivalRelease belongs to. */
  arrivalId: Scalars["String"];
  /** A note about this specific ArrivalLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The ID of the ArrivalRelease you want to add this ArrivalReleaseLineItem to. */
  releaseId: Scalars["ID"];
  /** The ID of the SupplierItem for this ArrivalReleaseLineItem. */
  supplierItemId: Scalars["String"];
};

export type ArrivalReleaseLineItemRecord = {
  /** A note about this specific ArrivalLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity: Scalars["Float"];
  /** The ID of the SupplierItem for this ArrivalReleaseLineItem. */
  supplierItemId: Scalars["String"];
};

export type ArrivalReleaseLineItemUpdateInput = {
  /** The ID of the Arrival that the ArrivalRelease belongs to. */
  arrivalId: Scalars["String"];
  /** Mark the ArrivalReleaseLineItem completed. If set to true then you will not be able to create new  ArrivalDeliveryLineItems that correspond to this ArrivalReleaseLineItem. */
  isClosed?: InputMaybe<Scalars["Boolean"]>;
  /** A note about this specific ArrivalReleaseLineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The price per unit (purchase unit of measure) for this ArrivalLineItem. */
  pricePerUnit?: InputMaybe<Scalars["Float"]>;
  /** The unit of measure the Supplier expects to see. */
  purchaseUnitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** The amount of the Item (purchase unit of measure) to be acquired. */
  quantity?: InputMaybe<Scalars["Float"]>;
  /** The ID of the ArrivalRelease that the ArrivalReleaseLineItem you want to update belongs to. */
  releaseId: Scalars["ID"];
  /** The ID of the SupplierItem for this ArrivalLineItem. */
  supplierItemId: Scalars["String"];
};

export type ArrivalReleaseLineItemWithStatus = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The date that the ArrivalReleaseLineItem was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The parent records that made this ArrivalReleaseLineItem closed. */
  closedParents: Array<ClosedParent>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The current delivered quantity of the ArrivalReleaseLineItem. */
  deliveredQuantity: Scalars["Float"];
  /** Was the ArrivalReleaseLineItem closed automatically because it was fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Is the ArrivalReleaseLineItem open or closed. If open we are still awaiting delivery of some Items. */
  isClosed: Scalars["Boolean"];
  /** Was the ArrivalReleaseLineItem closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the Item this line item is for. */
  itemId: Scalars["String"];
  /** The ID of the user that manually closed the ArrivalReleaseLineItem. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalReleaseLineItem was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** A note about this specific ArrivalReleaseLineItem. */
  note?: Maybe<Scalars["String"]>;
  /** The price per unit of the ArrivalReleaseLineItem. */
  pricePerUnit: Scalars["Float"];
  /** The quantity ordered of the ArrivalReleaseLineItem. */
  quantity: Scalars["Float"];
  /** The ID of the parent ArrivalRelease. */
  releaseId: Scalars["ID"];
  /** The ID of the Supplier that the parent Arrival was sent to. */
  supplierId: Scalars["String"];
  /** The ID of the SupplierItem this line item is for. */
  supplierItemId: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
  /** The total monetary value of the ArrivalReleaseLineItem. Calculated by the system as pricePerUnit times quantity. */
  value: Scalars["Float"];
};

export type ArrivalReleaseQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<ArrivalRelease>;
};

export type ArrivalReleaseRecordInput = {
  /** A list of ArrivalReleaseLineItems to add to the ArrivalRelease at time of creation. */
  arrivalReleaseLineItems?: InputMaybe<Array<ArrivalReleaseLineItemRecord>>;
  /** When we the ArrivalRelease can be expected to be delivered. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** The date that the ArrivalRelease information was sent to the Supplier. */
  releasedDate?: InputMaybe<Scalars["String"]>;
  /** Any sales tax associated with the ArrivalRelease. */
  salesTax?: InputMaybe<Scalars["Float"]>;
  /** The shipping method for the ArrivalRelease. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The cost associated with shipping this ArrivalRelease. */
  shippingCost?: InputMaybe<Scalars["Float"]>;
  /** A list of surcharges for this specific ArrivalRelease. */
  surcharges?: InputMaybe<Array<ArrivalReleaseSurchargeInput>>;
};

/** PO Release surcharges (gas costs, labor, etc) */
export type ArrivalReleaseSurcharge = {
  /** The monetary value of the surcharge. */
  amount: Scalars["Float"];
  /** A description of the surcharge. */
  description: Scalars["String"];
};

/** PO Release surcharges (gas costs, labor, etc) */
export type ArrivalReleaseSurchargeInput = {
  /** The monetary value of the surcharge. */
  amount: Scalars["Float"];
  /** A description of the surcharge. */
  description: Scalars["String"];
};

export type ArrivalReleaseUpdateInput = {
  /** The ID of the Arrival that this ArrivalRelease belongs to. */
  arrivalId: Scalars["String"];
  arrivalScheduleId?: InputMaybe<Scalars["String"]>;
  /** When we the ArrivalRelease can be expected to be delivered. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the ArrivalRelease you want to update. */
  id: Scalars["String"];
  /** Mark the ArrivalRelease completed. If set to true then you will not be able to create new ArrivalReleaseLineItems or ArrivalDeliveryLineItems that correspond to this ArrivalRelease. */
  isClosed?: InputMaybe<Scalars["Boolean"]>;
  /** The date that payment is due to the Supplier. */
  paymentDueDate?: InputMaybe<Scalars["String"]>;
  /** The date that the ArrivalRelease information was sent to the Supplier. */
  releasedDate?: InputMaybe<Scalars["String"]>;
  /** Any sales tax associated with the ArrivalRelease. */
  salesTax?: InputMaybe<Scalars["Float"]>;
  /** The shipping method for the ArrivalRelease. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The cost associated with shipping this ArrivalRelease. */
  shippingCost?: InputMaybe<Scalars["Float"]>;
  /** A list of surcharges for this specific ArrivalRelease. */
  surcharges?: InputMaybe<Array<ArrivalReleaseSurchargeInput>>;
};

export type ArrivalReleaseWithStatus = {
  /** The ID of the parent Arrival. */
  arrivalId: Scalars["String"];
  /** The internal reference number of the parent Arrival. */
  arrivalNumber: Scalars["String"];
  arrivalScheduleId?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease was automatically closed on. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** The parent record that made this ArrivalRelease closed. */
  closedParents: Array<ClosedParent>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** When we the ArrivalRelease can be expected to be delivered. */
  dueDate?: Maybe<Scalars["String"]>;
  /** The ID of the Facility the ArrivalRelease is being delivered to. */
  facilityId: Scalars["String"];
  /** The ID of the ArrivalRelease record. */
  id: Scalars["ID"];
  /** Was the ArrivalRelease closed automatically because all of its line items were fully delivered. */
  isAutoClosed: Scalars["Boolean"];
  /** Is the release open or closed. If open we are still awaiting delivery of some Items. */
  isClosed: Scalars["Boolean"];
  /** Was the ArrivalRelease closed manually. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the user that manually closed the ArrivalRelease. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease was manually closed on. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** The date that the ArrivalRelease information was sent to the Supplier. */
  releasedDate?: Maybe<Scalars["String"]>;
  /** Any sales tax associated with the ArrivalRelease. */
  salesTax?: Maybe<Scalars["Float"]>;
  /** The shipping method for the ArrivalRelease. */
  shipVia?: Maybe<Scalars["String"]>;
  /** The cost associated with shipping this ArrivalRelease. */
  shippingCost?: Maybe<Scalars["Float"]>;
  /** A partial record of the Supplier the ArrivalRelease was sent to. */
  supplier: ClonedSupplier;
  /** The ID of the Supplier the Arrival is being sent to for fulfillment. */
  supplierId: Scalars["String"];
  /** A list of surcharges for this specific ArrivalRelease. */
  surcharges?: Maybe<Array<ArrivalReleaseSurcharge>>;
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

export type ArrivalReleaseWithStatusQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<ArrivalReleaseWithStatus>;
};

export type ArrivalUpdateInput = {
  /** A history of comments and events related to this Arrival. */
  comment?: InputMaybe<ArrivalCommentInput>;
  /** When we expect the order to be delivered by */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** A note that can be sent to the Supplier along with the Arrival order. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Arrival you want to update. */
  id: Scalars["String"];
  /** A note that can be viewed internally about the Arrival. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** Mark the Arrival as completed. If set to true then you will not be able to create new ArrivalLineItems, ArrivalReleases, or ArrivalDeliveries. */
  isClosed?: InputMaybe<Scalars["Boolean"]>;
  /** The payment type agreed upon with the Supplier for this Arrival. */
  paymentType?: InputMaybe<Scalars["String"]>;
  /** When we the Arrival can be expected to be delivered. This is only used if the type is set to regular. */
  releasedDate?: InputMaybe<Scalars["String"]>;
  /** Any sales tax associated with the Arrival. This is only used if the type is set to regular. */
  salesTax?: InputMaybe<Scalars["Float"]>;
  /** The shipping method for the Arrival. This is only used if the type is set to regular. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The cost associated with shipping this Arrival. This is only used if the type is set to regular. */
  shippingCost?: InputMaybe<Scalars["Float"]>;
  /** Provided by the Supplier. Their reference number for your order */
  supplierOrderNumber?: InputMaybe<Scalars["String"]>;
  /** A list of surcharges associated with the Arrival. */
  surcharges?: InputMaybe<Array<ArrivalReleaseSurchargeInput>>;
  /** The payment terms agreed upon with the Supplier for this Arrival. */
  terms?: InputMaybe<Scalars["String"]>;
};

export type ArrivalWithStatus = {
  /** The internal reference number for this Arrival. This is created by the system. */
  arrivalNumber: Scalars["String"];
  /** The date that the Arrival was automatically closed. */
  autoClosedOn?: Maybe<Scalars["String"]>;
  /** A history of comments and events related to this Arrival. */
  comments: Array<ArrivalComment>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** A note that can be sent to the Supplier along with the Arrival order. */
  externalNote?: Maybe<Scalars["String"]>;
  /** The ID of the Facility that this Arrival will be delivered to. */
  facilityId: Scalars["String"];
  /** The ID of the Arrival record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the Arrival. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Was the Arrival closed because all of the LineItems have been fully delivered? */
  isAutoClosed: Scalars["Boolean"];
  /** Is the Arrival accepting deliveries or not. */
  isClosed: Scalars["Boolean"];
  /** Was the Arrival closed manually by a user. */
  isManualClosed: Scalars["Boolean"];
  /** The ID of the user that manually closed the Arrival. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** The date that the Arrival was manually closed. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  /** The payment type agreed upon with the Supplier for this Arrival. */
  paymentType?: Maybe<Scalars["String"]>;
  /** The current status of the Arrival. One of active or inactive. */
  status: Scalars["String"];
  /** A partial record of the Supplier that the Arrival is for. */
  supplier: ClonedSupplier;
  /** The ID of the Supplier supplying the Items in this Arrival. */
  supplierId: Scalars["String"];
  /** Provided by the Supplier. Their reference number for your order */
  supplierOrderNumber?: Maybe<Scalars["String"]>;
  /** The payment terms agreed upon with the Supplier for this Arrival. */
  terms?: Maybe<Scalars["String"]>;
  /** The type of Arrival. One of regular or blanket. */
  type: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

/** App access control list */
export type BackOfficeAccessControls = {
  all: AccessType;
  employeeShifts: AccessType;
  employees: AccessType;
};

/** Bid record */
export type Bid = {
  /** The ID of the BidRequest record this Bid is attached to. */
  bidRequestId: Scalars["ID"];
  /** The internal reference number for the BidRequest. This is created by the system. */
  bidRequestNumber: Scalars["String"];
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the Bid record was created. */
  createdOn: Scalars["String"];
  /** The date the Supplier believes they can ship all of the requested items in the quote. */
  estimatedDeliveryDate?: Maybe<Scalars["String"]>;
  /** The date the final quote by the Supplier was received. */
  finalQuoteReceivedDate?: Maybe<Scalars["String"]>;
  /** The date the Supplier returned the first quote. */
  firstQuoteReceivedDate?: Maybe<Scalars["String"]>;
  /** The ID of the Bid record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the Bid. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Is the Bid rejected. */
  isBidRejected: Scalars["Boolean"];
  /** Is the BidRequest closed. */
  isBidRequestClosed: Scalars["Boolean"];
  /** The date a request for a quote was sent to the Supplier. */
  requestSentDate?: Maybe<Scalars["String"]>;
  /** A partial record of the Supplier that the Bid is for. */
  supplier: ClonedSupplier;
  /** The ID of the Supplier this bid was sent to/from. */
  supplierId: Scalars["String"];
  /** When the Bid record was last updated. */
  updatedOn: Scalars["String"];
};

/** BidIdInput record */
export type BidIdInput = {
  /** The id of the bidRequest. */
  bidRequestId: Scalars["String"];
  /** The id of the bid. */
  id: Scalars["String"];
};

/** BidInput record */
export type BidInput = {
  /** The ID of the BidRequest record this Bid is attached to. */
  bidRequestId: Scalars["ID"];
  /** The date the Supplier believes they can ship all of the requested items in the quote. */
  estimatedDeliveryDate?: InputMaybe<Scalars["String"]>;
  /** The date the final quote by the Supplier was received. */
  finalQuoteReceivedDate?: InputMaybe<Scalars["String"]>;
  /** The date the Supplier returned the first quote. */
  firstQuoteReceivedDate?: InputMaybe<Scalars["String"]>;
  /** A note that can be viewed internally about the Bid. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** The date a request for a quote was sent to the Supplier. */
  requestSentDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the Supplier this bid was sent to/from. */
  supplierId: Scalars["String"];
};

/** The BidRequestLineItem can either be for an Item or ItemGroup record. This entity will provide additional details about the associated Item or ItemGroup. */
export type BidItem = BidItemGroupRecord | BidItemRecord;

/** This provides additional information about the ItemGroup record associated with the BidRequestLineItem. */
export type BidItemGroupRecord = {
  /** A partial ItemGroup record. */
  itemGroup: ClonedItemGroup;
  /** The type of the BidRequestLineItem. This will always be "itemGroup". */
  type: Scalars["String"];
};

/** This provides additional information about the Item record associated with the BidRequestLineItem. */
export type BidItemRecord = {
  /** A partial Item record. */
  item: ClonedItem;
  /** The type of the BidRequestLineItem. This will always be "item". */
  type: Scalars["String"];
};

/** BidLineItem record */
export type BidLineItem = {
  /** When the Bid was made by the Supplier. */
  bidDate?: Maybe<Scalars["String"]>;
  /** The ID of the Bid record this BidLineItem belongs to. */
  bidId: Scalars["String"];
  /** The ID of the BidRequest record this BidLineItem belongs to. */
  bidRequestId: Scalars["String"];
  /** The internal reference number for the BidRequest. This is created by the system. */
  bidRequestNumber: Scalars["String"];
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the BidLineItem record was created. */
  createdOn: Scalars["String"];
  /** A note that can be viewed internally about the BidLineItem. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Is the BidLineItem rejected. */
  isBidLineItemRejected: Scalars["Boolean"];
  /** Is the Bid rejected. */
  isBidRejected: Scalars["Boolean"];
  /** Is the BidRequest closed. */
  isBidRequestClosed: Scalars["Boolean"];
  /** Is the BidRequestLineItem closed. */
  isBidRequestLineItemClosed: Scalars["Boolean"];
  /** The Item or ItemGroup details. */
  item: BidItem;
  /** The ID of the Item or ItemGroup record this BidLineItem is about. */
  itemId: Scalars["String"];
  /** The price per unit (bill of items unit of measure) that was offered for the BidLineItem. */
  ppu: Scalars["Float"];
  /** The quantity of the BidLineItem in this Bid. */
  quantity: Scalars["Float"];
  /** The ID of the Supplier record this BidLineItem belongs to. */
  supplierId: Scalars["String"];
  /** The type of the item <item|itemGroup>. */
  type: Scalars["String"];
  /** The unit of measure that the Supplier responded with in regard to how they sell the line item. */
  unitOfMeasure?: Maybe<Scalars["String"]>;
  /** When the BidLineItem record was last updated. */
  updatedOn: Scalars["String"];
  /** The expiration date of the offer for this BidLineItem. */
  validUntil?: Maybe<Scalars["String"]>;
};

/** BidLineItemInput record */
export type BidLineItemInput = {
  /** When the Bid was made by the Supplier. */
  bidDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the Bid record this BidLineItem belongs to. */
  bidId: Scalars["String"];
  /** The ID of the BidRequest record this BidLineItem belongs to. */
  bidRequestId: Scalars["String"];
  /** A note that can be viewed internally about the BidLineItem. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Item or ItemGroup record this BidLineItem is about. */
  itemId: Scalars["String"];
  /** The price per unit (bill of items unit of measure) that was offered for the BidLineItem. */
  ppu: Scalars["Float"];
  /** The quantity of the BidLineItem in this Bid. */
  quantity: Scalars["Float"];
  /** The type of the item <item|itemGroup>. */
  type: Scalars["String"];
  /** The unit of measure that the Supplier responded with in regard to how they sell the line item. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** The expiration date of the offer for this BidLineItem. */
  validUntil?: InputMaybe<Scalars["String"]>;
};

export type BidLineItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<BidLineItem>;
};

/** BidLineItemUpdateInput record */
export type BidLineItemUpdateInput = {
  /** When the Bid was made by the Supplier. */
  bidDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the Bid record this BidLineItem belongs to. */
  bidId: Scalars["String"];
  /** The ID of the BidRequest record this BidLineItem belongs to. */
  bidRequestId: Scalars["String"];
  /** A note that can be viewed internally about the BidLineItem. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** Is the BidLineItem rejected. */
  isBidLineItemRejected?: InputMaybe<Scalars["Boolean"]>;
  /** The ID of the Item or ItemGroup record this BidLineItem is about. */
  itemId: Scalars["String"];
  /** The price per unit (bill of items unit of measure) that was offered for the BidLineItem. */
  ppu?: InputMaybe<Scalars["Float"]>;
  /** The quantity of the BidLineItem in this Bid. */
  quantity?: InputMaybe<Scalars["Float"]>;
  /** The type of the item <item|itemGroup>. */
  type?: InputMaybe<Scalars["String"]>;
  /** The unit of measure that the Supplier responded with in regard to how they sell the line item. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** The expiration date of the offer for this BidLineItem. */
  validUntil?: InputMaybe<Scalars["String"]>;
};

export type BidQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Bid>;
};

/** BidRequest record */
export type BidRequest = {
  /** The internal reference number for this BidRequest. This is created by the system. */
  bidRequestNumber: Scalars["String"];
  /** A history of comments and events related to this BidRequest. */
  comments: Array<BidRequestComment>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the BidRequest record was created. */
  createdOn: Scalars["String"];
  /** When the BidRequest can be expected to be converted to Arrival. */
  dueDate?: Maybe<Scalars["String"]>;
  /** A note that can be sent to the Supplier along with the BidRequest. */
  externalNote?: Maybe<Scalars["String"]>;
  /** The ID of the Facility the BidRequest is requested for. */
  facilityId?: Maybe<Scalars["String"]>;
  /** The ID of the BidRequest record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the BidRequest. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Is the BidRequest closed. */
  isBidRequestClosed: Scalars["Boolean"];
  /** When the BidRequest record was last updated. */
  updatedOn: Scalars["String"];
};

/** Comments for an BidRequest. */
export type BidRequestComment = {
  /** Can be used to tie a comment to a specific Bid. */
  bidId?: Maybe<Scalars["String"]>;
  /** The comment itself. */
  comment?: Maybe<Scalars["String"]>;
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the BidRequestComment record was created. */
  createdOn: Scalars["String"];
  /** Date the event occurred. Can be different than created on. For example, a quote was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, a quote. */
  file?: Maybe<Scalars["String"]>;
  /** The type of comment. For example, quote received, line item added, etc. */
  type: Scalars["String"];
};

/** Comments for an BidRequest. */
export type BidRequestCommentInput = {
  /** Can be used to tie a comment to a specific Bid. */
  bidId?: InputMaybe<Scalars["String"]>;
  /** The comment itself. */
  comment?: InputMaybe<Scalars["String"]>;
  /** Date the event occurred. Can be different than created on. For example, a quote was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, a quote. */
  file?: InputMaybe<Scalars["String"]>;
  /** The type of comment. For example, quote received, line item added, etc. */
  type: Scalars["String"];
};

/** BidRequestDetails record */
export type BidRequestDetails = {
  /** BidLineItem. */
  bidLineItems: Array<BidLineItem>;
  /** BidRequest record. */
  bidRequest: BidRequest;
  /** BidRequest line items. */
  bidRequestLineItems: Array<BidRequestLineItem>;
  /** Bid. */
  bids: Array<Bid>;
};

/** BidRequestInput record */
export type BidRequestInput = {
  /** A history of comments and events related to this BidRequest. */
  comment?: InputMaybe<BidRequestCommentInput>;
  /** When the BidRequest can be expected to be converted to Arrival. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** A note that can be sent to the Supplier along with the BidRequest. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Facility the BidRequest is requested for. */
  facilityId?: InputMaybe<Scalars["String"]>;
  /** A note that can be viewed internally about the BidRequest. */
  internalNote?: InputMaybe<Scalars["String"]>;
};

/** BidRequestLineItem record */
export type BidRequestLineItem = {
  /** The ID of the Arrival that was created with this line item in it. */
  arrivalId?: Maybe<Scalars["String"]>;
  /** The ID of the BidRequest record this line item belongs to. */
  bidRequestId: Scalars["ID"];
  /** The internal reference number for this BidRequest. This is created by the system. */
  bidRequestNumber: Scalars["String"];
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the BidRequestLineItem record was created. */
  createdOn: Scalars["String"];
  /** A note that can be sent to the Supplier along with the BidRequestLineItem order. */
  externalNote?: Maybe<Scalars["String"]>;
  /** A note that can be viewed internally about the BidRequestLineItem. */
  internalNote?: Maybe<Scalars["String"]>;
  /** Is the BidRequest closed. */
  isBidRequestClosed: Scalars["Boolean"];
  /** Is the BidRequestLineItem closed. */
  isBidRequestLineItemClosed: Scalars["Boolean"];
  /** A partial Item or ItemGroup record. */
  item: BidItem;
  /** The ID of the Item or ItemGroup record this line item is about. */
  itemId: Scalars["ID"];
  /** The target quantity of the Item in this BidRequest. */
  quantity: Scalars["Float"];
  /** The target price per unit (bill of items unit of measure) for the Item in this BidRequest. */
  targetPpu?: Maybe<Scalars["Float"]>;
  /** The type of the item <item|itemGroup>. */
  type: Scalars["String"];
  /** A common unit of measure that all the Suppliers can respond to with an estimate. */
  unitOfMeasure?: Maybe<Scalars["String"]>;
  /** When the BidRequestLineItem record was last updated. */
  updatedOn: Scalars["String"];
  /** The ID of the Supplier that had an Arrival created for this line item. */
  winnerSupplierId?: Maybe<Scalars["String"]>;
};

/** BidRequestLineItemInput record */
export type BidRequestLineItemInput = {
  /** The ID of the BidRequest record this line item belongs to. */
  bidRequestId: Scalars["ID"];
  /** A note that can be sent to the Supplier along with the BidRequestLineItem order. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** A note that can be viewed internally about the BidRequestLineItem. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Item or ItemGroup record this line item is about. */
  itemId: Scalars["ID"];
  /** The target quantity of the Item in this BidRequest. */
  quantity: Scalars["Float"];
  /** The target price per unit (bill of items unit of measure) for the Item in this BidRequest. */
  targetPpu?: InputMaybe<Scalars["Float"]>;
  /** The type of the item <item|itemGroup>. */
  type: Scalars["String"];
  /** A common unit of measure that all the Suppliers can respond to with an estimate. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
};

export type BidRequestLineItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<BidRequestLineItem>;
};

/** BidRequestLineItemUpdateInput record */
export type BidRequestLineItemUpdateInput = {
  /** The ID of the Arrival that was created with this line item in it. */
  arrivalId?: InputMaybe<Scalars["String"]>;
  /** The ID of the BidRequest record this line item belongs to. */
  bidRequestId: Scalars["ID"];
  /** A note that can be sent to the Supplier along with the BidRequestLineItem order. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** A note that can be viewed internally about the BidRequestLineItem. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** Is the BidRequestLineItem closed. */
  isBidRequestLineItemClosed?: InputMaybe<Scalars["Boolean"]>;
  /** The ID of the Item or ItemGroup record this line item is about. */
  itemId: Scalars["ID"];
  /** The target quantity of the Item in this BidRequest. */
  quantity?: InputMaybe<Scalars["Float"]>;
  /** The target price per unit (bill of items unit of measure) for the Item in this BidRequest. */
  targetPpu?: InputMaybe<Scalars["Float"]>;
  /** The type of the item <item|itemGroup>. */
  type?: InputMaybe<Scalars["String"]>;
  /** A common unit of measure that all the Suppliers can respond to with an estimate. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** The ID of the Supplier that had an Arrival created for this line item. */
  winnerSupplierId?: InputMaybe<Scalars["String"]>;
};

export type BidRequestQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<BidRequest>;
};

/** BidRequestUpdateInput record */
export type BidRequestUpdateInput = {
  /** A history of comments and events related to this BidRequest. */
  comment?: InputMaybe<BidRequestCommentInput>;
  /** When the BidRequest can be expected to be converted to Arrival. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** A note that can be sent to the Supplier along with the BidRequest. */
  externalNote?: InputMaybe<Scalars["String"]>;
  /** The ID of the Facility the BidRequest is requested for. */
  facilityId?: InputMaybe<Scalars["String"]>;
  /** The ID of the BidRequest record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the BidRequest. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** Is the BidRequest closed. */
  isBidRequestClosed?: InputMaybe<Scalars["Boolean"]>;
};

/** BidUpdateInput record */
export type BidUpdateInput = {
  /** The ID of the BidRequest record this Bid is attached to. */
  bidRequestId: Scalars["ID"];
  /** The date the Supplier believes they can ship all of the requested items in the quote. */
  estimatedDeliveryDate?: InputMaybe<Scalars["String"]>;
  /** The date the final quote by the Supplier was received. */
  finalQuoteReceivedDate?: InputMaybe<Scalars["String"]>;
  /** The date the Supplier returned the first quote. */
  firstQuoteReceivedDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the Bid record. */
  id: Scalars["ID"];
  /** A note that can be viewed internally about the Bid. */
  internalNote?: InputMaybe<Scalars["String"]>;
  /** Is the Bid rejected. */
  isBidRejected?: InputMaybe<Scalars["Boolean"]>;
  /** The date a request for a quote was sent to the Supplier. */
  requestSentDate?: InputMaybe<Scalars["String"]>;
};

export type BillingCycleTypeUpdate = {
  success: Scalars["Boolean"];
};

export type BillingCycleTypeUpdatePreview = {
  nextInvoiceTotal: Scalars["Float"];
};

export type CheckoutSession = {
  url: Scalars["String"];
};

/** Cloned partial facility item data */
export type ClonedFacilityItem = {
  /** The ID of the Facility these rules belong to. */
  facilityId: Scalars["ID"];
  /** The maximum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  maxQuantity?: Maybe<Scalars["Float"]>;
  /** The reasoning behind the set minimum and maximum quantities. */
  minMaxReasoning?: Maybe<Scalars["String"]>;
  /** The minimum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  minQuantity?: Maybe<Scalars["Float"]>;
};

/** Cloned partial item data */
export type ClonedItem = {
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: Maybe<Scalars["String"]>;
  /** The main image of this Item. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: Maybe<Scalars["String"]>;
  /** A memorable name. */
  name?: Maybe<Scalars["String"]>;
  /** An internal part number or code to refer to this item. */
  partNumber?: Maybe<Scalars["String"]>;
  /** Is the Item still being used? active | inactive */
  status?: Maybe<Scalars["String"]>;
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: Maybe<ItemUnitsOfMeasure>;
};

/** Cloned item inventory record for a dynamic container */
export type ClonedItemDynamicContainerPayload = {
  /** The ID of the Arrival that the Items in this DynamicContainer came from. */
  arrivalDeliveryId?: Maybe<Scalars["String"]>;
  /** The price per unit (bill of items unit of measure) of the Item in this DynamicContainer. */
  ppu?: Maybe<Scalars["Float"]>;
  /** The quantity of the Item in this DynamicContainer. */
  quantity: Scalars["Float"];
};

/** Partial group of variants of an item. */
export type ClonedItemGroup = {
  /** A description of the ItemGroup. */
  description?: Maybe<Scalars["String"]>;
  /** The name of the ItemGroup. */
  name?: Maybe<Scalars["String"]>;
};

/** Cloned inventory record for a storage position */
export type ClonedItemStorageInventoryAreaLocation = {
  aisle: Scalars["String"];
  /** A list of the Arrival IDs that currently have this Item loaded into the location. */
  arrivalDeliveryIds: Array<Scalars["String"]>;
  bay: Scalars["String"];
  /** The ID of the InventoryArea the location is in. */
  inventoryAreaId: Scalars["ID"];
  position: Scalars["String"];
  /** A list of the Item with different price points that have been loaded into this position. A static location can be loaded multiple times with the same Item and each time the Item may have come with a different price. */
  ppus: Array<ItemStorageInventoryAreaPpu>;
  /** The current quantity of the Item in this location (measured with the bill of items unit of measure). */
  quantity: Scalars["Float"];
  shelf: Scalars["String"];
};

export type ClonedProduct = {
  /** The ID of the Item or Kit that this Product represents. */
  childId: Scalars["String"];
  /** Does this Product represent an Item or a Kit. This value must be equal to Item or Kit. */
  childType: Scalars["String"];
  /** The name of the product. Something that will get people to buy! */
  name: Scalars["String"];
  /** A product SKU that may be used across the organization in different systems. */
  sku?: Maybe<Scalars["String"]>;
  /** Is the Product still being used? active | inactive */
  status: Scalars["String"];
};

/** Cloned partial supplier data */
export type ClonedSupplier = {
  /** The name of the Supplier. */
  name?: Maybe<Scalars["String"]>;
  /** The desired payment type of the Supplier. */
  primaryPaymentType?: Maybe<Scalars["String"]>;
  /** Is the Supplier still being used? active | inactive */
  status?: Maybe<Scalars["String"]>;
  /** Terms of payment for the Supplier. */
  terms?: Maybe<Scalars["String"]>;
};

/** Cloned partial supplier item data */
export type ClonedSupplierItem = {
  /** The brand of an Item that this Supplier provides. */
  brand?: Maybe<Scalars["String"]>;
  /** The brand SKU that this Supplier provides. */
  brandSku?: Maybe<Scalars["String"]>;
  /** A URL linking to the Item on the Supplier's website. */
  productUrl?: Maybe<Scalars["String"]>;
  /** The SKU that the Supplier gives to the Item. */
  sku?: Maybe<Scalars["String"]>;
  /** Quantity information for the way a Supplier sells an Item. */
  unitsOfMeasure?: Maybe<SupplierItemUnitsOfMeasure>;
};

export type ClosedParent = {
  /** The ID of the user that manually closed the parent. */
  manualClosedBy?: Maybe<Scalars["String"]>;
  /** Was the parent closed manually by a user. */
  manualClosedOn?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
};

/** App access control list */
export type CommerceAccessControls = {
  all: AccessType;
  contractors: AccessType;
  orders: AccessType;
};

/** Jeeny Company */
export type Company = {
  /** The alias is a human readable unique identifier for a company */
  alias: Scalars["String"];
  checklist: Array<Scalars["String"]>;
  /** Company Address */
  companyAddress?: Maybe<Address>;
  /** Company Name */
  companyName: Scalars["String"];
  /** Company record creator */
  createdBy: Scalars["ID"];
  createdOn: Scalars["String"];
  /** JSON string of overrides for certain dropdowns in the application. {[dropdownName: string]: [{label: string; value: string}]} */
  customFields?: Maybe<Scalars["String"]>;
  /** The ISO code of the company's default currency */
  defaultCurrency: Scalars["String"];
  id: Scalars["ID"];
  /** The staus of the integration services */
  integrations?: Maybe<Array<CompanyIntegration>>;
  /** Decsribes the order of deductions in the books. */
  inventoryStrategies?: Maybe<Array<InventoryStrategy>>;
  kanbanBins: Array<CompanyKanbanBin>;
  ledgers?: Maybe<Array<Ledger>>;
  /** Company logo */
  logoUrl?: Maybe<Scalars["String"]>;
  operatorLevels?: Maybe<Array<CompanyOperatorLevel>>;
  /** Is company still active. active | inactive */
  status: Scalars["String"];
  teams?: Maybe<Array<CompanyTeam>>;
  updatedOn: Scalars["String"];
};

export type CompanyInput = {
  /** The alias is a human readable unique identifier for a company */
  alias: Scalars["String"];
  checklist?: InputMaybe<Array<Scalars["String"]>>;
  companyName: Scalars["String"];
  /** The ISO code of the company's default currency */
  defaultCurrency: Scalars["String"];
  /** Decsribes the order of deductions in the books. */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  kanbanBins?: InputMaybe<Array<CompanyKanbanBinInput>>;
  ledgers?: InputMaybe<Array<LedgerInput>>;
  /** Company logo */
  logoUrl?: InputMaybe<Scalars["String"]>;
};

export type CompanyInputUpdate = {
  /** The alias is a human readable unique identifier for a company */
  alias?: InputMaybe<Scalars["String"]>;
  checklist?: InputMaybe<Array<Scalars["String"]>>;
  companyAddress?: InputMaybe<AddressUpdateInput>;
  companyName?: InputMaybe<Scalars["String"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  /** JSON string of overrides for certain dropdowns in the application. {[dropdownName: string]: [{label: string; value: string}]} */
  customFields?: InputMaybe<Scalars["String"]>;
  /** Decsribes the order of deductions in the books. */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  kanbanBins?: InputMaybe<Array<CompanyKanbanBinInput>>;
  ledgers?: InputMaybe<Array<LedgerInput>>;
  /** Company logo */
  logoUrl?: InputMaybe<Scalars["String"]>;
  /** Is company still active. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** Jeeny integrations */
export type CompanyIntegration = {
  service: Scalars["String"];
  status: Scalars["String"];
};

/** Kanban bin */
export type CompanyKanbanBin = {
  /** In inches */
  backLabelHeight?: Maybe<Scalars["String"]>;
  /** In inches */
  backLabelLength?: Maybe<Scalars["String"]>;
  /** In inches */
  frontLabelHeight?: Maybe<Scalars["String"]>;
  /** In inches */
  frontLabelLength?: Maybe<Scalars["String"]>;
  /** In inches */
  height?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  /** In inches */
  length?: Maybe<Scalars["Float"]>;
  manufacturer: Scalars["String"];
  modelNumber: Scalars["String"];
  status: Scalars["String"];
  /** In inches */
  width?: Maybe<Scalars["Float"]>;
};

/** Kanban bin */
export type CompanyKanbanBinInput = {
  /** In inches */
  backLabelHeight?: InputMaybe<Scalars["String"]>;
  /** In inches */
  backLabelLength?: InputMaybe<Scalars["String"]>;
  /** In inches */
  frontLabelHeight?: InputMaybe<Scalars["String"]>;
  /** In inches */
  frontLabelLength?: InputMaybe<Scalars["String"]>;
  /** In inches */
  height?: InputMaybe<Scalars["Float"]>;
  id: Scalars["ID"];
  /** In inches */
  length?: InputMaybe<Scalars["Float"]>;
  manufacturer: Scalars["String"];
  modelNumber: Scalars["String"];
  status: Scalars["String"];
  /** In inches */
  width?: InputMaybe<Scalars["Float"]>;
};

/** Operator Level */
export type CompanyOperatorLevel = {
  cost: Scalars["Float"];
  id: Scalars["ID"];
  label: Scalars["String"];
  status: Scalars["String"];
};

export type CompanyQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Company>;
};

/** Company team record */
export type CompanyTeam = {
  accessControls: AccessControls;
  id: Scalars["ID"];
  name: Scalars["String"];
};

/** Company User Model */
export type CompanyUser = {
  /** Jeeny Company */
  companyId: Scalars["String"];
  contactEmail?: Maybe<Scalars["String"]>;
  createdOn: Scalars["String"];
  /** Which facilities this user belongs to */
  facilityIds: Array<Scalars["String"]>;
  favoriteModules: Array<Scalars["String"]>;
  mobilePhone?: Maybe<Scalars["String"]>;
  /** User office phone */
  officePhone?: Maybe<Scalars["String"]>;
  /** Role of the user eg. Admin | none */
  role: Scalars["String"];
  seenTutorials: Array<Scalars["String"]>;
  /** Is user still allowed access. active | inactive */
  status: Scalars["String"];
  /** ID of the team this user belongs to */
  teamId?: Maybe<Scalars["String"]>;
  /** Name of the team this user belongs to */
  teamName?: Maybe<Scalars["String"]>;
  updatedOn: Scalars["String"];
  user: User;
  /** Jeeny user */
  userId: Scalars["ID"];
};

export type CompanyUserAdminUpdateInput = {
  contactEmail?: InputMaybe<Scalars["String"]>;
  /** Which facilities this user belongs to */
  facilityIds?: InputMaybe<Array<Scalars["String"]>>;
  favoriteModules?: InputMaybe<Array<Scalars["String"]>>;
  mobilePhone?: InputMaybe<Scalars["String"]>;
  /** User office phone */
  officePhone?: InputMaybe<Scalars["String"]>;
  /** Role of the user eg. Admin | none */
  role?: InputMaybe<Scalars["String"]>;
  seenTutorials?: InputMaybe<Array<Scalars["String"]>>;
  /** Is user still allowed access. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** ID of the team this user belongs to */
  teamId?: InputMaybe<Scalars["String"]>;
};

export type CompanyUserQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<CompanyUser>;
};

export type CompanyUserUpdateInput = {
  contactEmail?: InputMaybe<Scalars["String"]>;
  favoriteModules?: InputMaybe<Array<Scalars["String"]>>;
  mobilePhone?: InputMaybe<Scalars["String"]>;
  /** User office phone */
  officePhone?: InputMaybe<Scalars["String"]>;
  seenTutorials?: InputMaybe<Array<Scalars["String"]>>;
};

/** Generic contact model */
export type Contact = {
  /** The date the contact was created on. */
  createdOn?: Maybe<Scalars["String"]>;
  /** The department the contact works in at their company. */
  department?: Maybe<Scalars["String"]>;
  /** Contact's email address. */
  email?: Maybe<Scalars["String"]>;
  /** Contact's first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** Contact's home phone number. */
  homePhone?: Maybe<Scalars["String"]>;
  /** Contact's last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** Contact's mobile phone number. */
  mobilePhone?: Maybe<Scalars["String"]>;
  /** Contact's office phone number. */
  officePhone?: Maybe<Scalars["String"]>;
  /** The contact's title at the company they work at. */
  title?: Maybe<Scalars["String"]>;
  /** The date the contact was last updated on. */
  updatedOn?: Maybe<Scalars["String"]>;
};

/** Common contact input */
export type ContactInput = {
  /** The date the contact was created on. */
  createdOn?: InputMaybe<Scalars["String"]>;
  /** The department the contact works in at their company. */
  department?: InputMaybe<Scalars["String"]>;
  /** Contact's email address. */
  email?: InputMaybe<Scalars["String"]>;
  /** Contact's first name. */
  firstName: Scalars["String"];
  /** Contact's home phone number. */
  homePhone?: InputMaybe<Scalars["String"]>;
  /** Contact's last name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /** Contact's mobile phone number. */
  mobilePhone?: InputMaybe<Scalars["String"]>;
  /** Contact's office phone number. */
  officePhone?: InputMaybe<Scalars["String"]>;
  /** The contact's title at the company they work at. */
  title?: InputMaybe<Scalars["String"]>;
  /** The date the contact was last updated on. */
  updatedOn?: InputMaybe<Scalars["String"]>;
};

export type CreateKitTemplateInput = {
  /** Give the Kit a memorable code - something short and sweet. */
  code: Scalars["String"];
  /** Describe the Kit. */
  description?: InputMaybe<Scalars["String"]>;
  /** Give the Kit a memorable name. */
  name: Scalars["String"];
  /** Is the Kit still in use? active | inactive */
  status: Scalars["String"];
};

/** Create quickBooks account input */
export type CreateQuickBooksAccountsInput = {
  accounts: QuickBooksAccountsInput;
};

export type CreateQuickBooksIntegration = {
  token: QuickBooksToken;
};

/** Create quickBooks integration input */
export type CreateQuickBooksIntegrationInput = {
  /** OAuth2 URL */
  url: Scalars["String"];
};

/** Create quickBooks sync input */
export type CreateQuickBooksSyncInput = {
  items: Array<QuickBooksAndJeenyIds>;
  suppliers: Array<QuickBooksAndJeenyIds>;
};

/** CustomApp creation */
export type CustomAppInput = {
  /** The cover image of the app. */
  coverUrl?: InputMaybe<Scalars["String"]>;
  /** The description of the app. */
  description: Scalars["String"];
  /** The version of the editor this app was made in. */
  editorVersion: Scalars["String"];
  /** The icon of the app. */
  iconUrl?: InputMaybe<Scalars["String"]>;
  /** The name of the app. */
  name: Scalars["String"];
  /** The version of the player this app should be played in. */
  playerVersion: Scalars["String"];
};

/** CustomApp update */
export type CustomAppUpdateInput = {
  /** The cover image of the app. */
  coverUrl?: InputMaybe<Scalars["String"]>;
  /** The description of the app. */
  description?: InputMaybe<Scalars["String"]>;
  /** The version of the editor this app was made in. */
  editorVersion?: InputMaybe<Scalars["String"]>;
  /** The icon of the app. */
  iconUrl?: InputMaybe<Scalars["String"]>;
  /** The ID of the product you are updating. */
  id: Scalars["String"];
  /** The name of the app. */
  name?: InputMaybe<Scalars["String"]>;
  /** The version of the player this app should be played in. */
  playerVersion?: InputMaybe<Scalars["String"]>;
  /** Is the app currently available. active|inactive */
  status: Scalars["String"];
};

export type CustomerPortal = {
  url: Scalars["String"];
};

export type DeleteInstructionSubjectInput = {
  /** The ID of the InstructionTemplate. */
  instructionTemplateId: Scalars["String"];
  /** The ID of the subject entity. */
  subjectId: Scalars["String"];
  /** The type of the subject entity. arrival|item|kit|supplier|product|departure|user */
  subjectType: Scalars["String"];
};

export type DeleteInstructionTemplateStepFromInstructionTemplateInput = {
  /** The ID of the parent InstructionTemplate that the InstructionTemplateStep you want to remove belongs to. */
  instructionTemplateId: Scalars["String"];
  /** The ID of the InstructionTemplateStep that you want to remove. */
  instructionTemplateStepId: Scalars["String"];
};

export type DeleteKitTemplatePartFromKitTemplateInput = {
  /** The ID of the parent KitTemplate that the KitPart you want to remove belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart that you want to remove. */
  partId: Scalars["String"];
};

export type DeleteKitTemplatePartOptionFromKitTemplatePartInput = {
  /** The ID of the KitPartOption that you want to remove. */
  optionId: Scalars["String"];
  /** The ID of the parent KitTemplate that the KitPart you want to remove a KitPartOption from belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart that you want to remove a KitPartOption from. */
  partId: Scalars["String"];
};

/** Departure record */
export type Departure = {
  /** A history of comments and events related to this Departure. */
  comments: Array<DepartureComment>;
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the Departure record was created. */
  createdOn: Scalars["String"];
  /** A 3rd party customer ID from an external system for this Departure. */
  externalCustomerId?: Maybe<Scalars["String"]>;
  /** A 3rd party order ID from an external system for this Departure. */
  externalOrderId?: Maybe<Scalars["String"]>;
  /** When the Departure was be fulfilled. */
  fulfilledOn?: Maybe<Scalars["String"]>;
  /** The ID of the Departure record. */
  id: Scalars["String"];
  /** Has the Departure been completed? */
  isFulfilled: Scalars["Boolean"];
  /** Is the Departure process ready to start? */
  isReadyToFulfill: Scalars["Boolean"];
  /** The date the Departure was placed by an external customer. */
  placedOn: Scalars["String"];
  /** When the Departure will be fulfilled. */
  readyToFulfillOn?: Maybe<Scalars["String"]>;
  /** A free form field to set a status for this Departure. For example, pending, in progress, completed. */
  status: Scalars["String"];
  /** When the Departure record was last updated. */
  updatedOn: Scalars["String"];
};

/** Comments for a Departure */
export type DepartureComment = {
  /** The comment itself. */
  comment?: Maybe<Scalars["String"]>;
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the record was created. */
  createdOn: Scalars["String"];
  /** Date the event occurred. Can be different than created on. For example, an invoice was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, an invoice. */
  file?: Maybe<Scalars["String"]>;
  /** Can be used to tie a comment to a specific DeparturePickList. */
  pickListId?: Maybe<Scalars["String"]>;
  /** The type of comment. For example, line item added, invoice added etc. */
  type: Scalars["String"];
};

/** Comments for a Departure. */
export type DepartureCommentInput = {
  /** The comment itself. */
  comment?: InputMaybe<Scalars["String"]>;
  /** Date the event occurred. Can be different than created on. For example, an invoice was received two days ago but not uploaded until today. */
  date: Scalars["String"];
  /** A URL to a file related to the comment. For example, an invoice. */
  file?: InputMaybe<Scalars["String"]>;
  /** Can be used to tie a comment to a specific DeparturePickList. */
  pickListId?: InputMaybe<Scalars["String"]>;
  /** The type of comment. For example, line item added, invoice added etc. */
  type: Scalars["String"];
};

/** Departure details */
export type DepartureDetails = {
  /** The Departure record. */
  departure: Departure;
  /** All of the DepartureLineItems. */
  departureLineItems: Array<DepartureLineItem>;
  /** All of the DeparturePickLineItems. */
  departurePickLineItems: Array<DeparturePickLineItem>;
  /** All of the DeparturePickListLineItems. */
  departurePickListLineItems: Array<DeparturePickListLineItem>;
  /** All of the DeparturePickLists. */
  departurePickLists: Array<DeparturePickList>;
  /** All of the DeparturePicks. */
  departurePicks: Array<DeparturePick>;
  /** InstructionSubject records linked to this record. */
  instructionSubjects: Array<InstructionSubject>;
};

/** Departure creation */
export type DepartureInput = {
  /** A history of comments and events related to this Departure. */
  comment?: InputMaybe<DepartureCommentInput>;
  /** A 3rd party customer ID from an external system for this Departure. */
  externalCustomerId?: InputMaybe<Scalars["String"]>;
  /** A 3rd party order ID from an external system for this Departure. */
  externalOrderId?: InputMaybe<Scalars["String"]>;
  /** When the Departure was be fulfilled. */
  fulfilledOn?: InputMaybe<Scalars["String"]>;
  /** Has the Departure been completed? */
  isFulfilled: Scalars["Boolean"];
  /** The date the Departure was placed by an external customer. */
  placedOn?: InputMaybe<Scalars["String"]>;
  /** When the Departure will be fulfilled. */
  readyToFulfillOn?: InputMaybe<Scalars["String"]>;
  /** A free form field to set a status for this Departure. For example, pending, in progress, completed. */
  status: Scalars["String"];
};

/** Departure line item */
export type DepartureLineItem = {
  /** A partial record of the associated Item. */
  clonedItem: ClonedItem;
  /** A partial record of the associated Product. */
  clonedProduct: ClonedProduct;
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the DepartureLineItem record was created. */
  createdOn: Scalars["String"];
  /** The ID of the parent Departure. */
  departureId: Scalars["String"];
  /** The ID of the Departure line item record. */
  id: Scalars["String"];
  /** The ID of the associated Item. */
  itemId: Scalars["String"];
  /** A note that can be viewed internally about the LineItem. */
  note?: Maybe<Scalars["String"]>;
  /** The total quantity of the items already added to PickLists. */
  pickListQuantity: Scalars["Float"];
  /** The total quantity of the items already picked. */
  pickedQuantity: Scalars["Float"];
  /** The ID of the associated Product. */
  productId: Scalars["String"];
  /** The total quantity of the item to be picked. */
  quantity: Scalars["Float"];
  /** When the DepartureLineItem record was last updated. */
  updatedOn: Scalars["String"];
};

/** Departure line item creation */
export type DepartureLineItemInput = {
  /** The ID of the Departure that this DepartureLineItem belongs to. */
  departureId: Scalars["String"];
  /** A note that can be viewed internally about the LineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The ID of the Product that this line item is associated with. */
  productId: Scalars["String"];
  /** The requested amount of the Product. */
  quantity: Scalars["Float"];
};

export type DepartureLineItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<DepartureLineItem>;
};

/** Departure line item update */
export type DepartureLineItemUpdateInput = {
  /** The ID of the Departure that this DepartureLineItem belongs to. */
  departureId: Scalars["String"];
  /** A note that can be viewed internally about the LineItem. */
  note?: InputMaybe<Scalars["String"]>;
  /** The ID of the Product that this line item is associated with. */
  productId: Scalars["String"];
  /** The requested amount of the Product. */
  quantity?: InputMaybe<Scalars["Float"]>;
};

/** Departure pick */
export type DeparturePick = {
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the DeparturePick record was created. */
  createdOn: Scalars["String"];
  /** The ID of the parent Departure. */
  departureId: Scalars["String"];
  /** The ID of the DeparturePick record. */
  id: Scalars["String"];
  /** The ID of the parent DeparturePickList. */
  pickListId: Scalars["String"];
  /** When the DeparturePick record was last updated. */
  updatedOn: Scalars["String"];
};

/** Departure line item creation */
export type DeparturePickInput = {
  /** The ID of the Departure that this Pick belongs to. */
  departureId: Scalars["String"];
  /** The ID of the DeparturePickList that this Pick belongs to. */
  pickListId: Scalars["String"];
};

/** Departure pick line item */
export type DeparturePickLineItem = {
  /** A partial record of the associated Item. */
  clonedItem: ClonedItem;
  /** The DynamicContainer the Product was picked from (if it happened at a DynamicContainer). */
  clonedItemDynamicContainerPayload?: Maybe<ClonedItemDynamicContainerPayload>;
  /** The static location the Product was picked at (if it happened at a static location). */
  clonedItemStorageInventoryAreaLocation?: Maybe<ClonedItemStorageInventoryAreaLocation>;
  /** A partial record of the associated Product. */
  clonedProduct: ClonedProduct;
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** When the DeparturePickLineItem record was created. */
  createdOn: Scalars["String"];
  /** The ID of the parent Departure. */
  departureId: Scalars["String"];
  /** The ID of the DeparturePickLineItem record. */
  id: Scalars["String"];
  /** The ID of the associated Item. */
  itemId: Scalars["String"];
  /** The ID of the parent DeparturePick. */
  pickId: Scalars["String"];
  /** The ID of the parent DeparturePickList. */
  pickListId: Scalars["String"];
  /** The ID of the user that conducted the pick. */
  pickedBy: Scalars["String"];
  /** The ID of the associated Product. */
  productId: Scalars["String"];
  /** The quantity that was picked. */
  quantity: Scalars["Float"];
  /** When the DeparturePickLineItem record was last updated. */
  updatedOn: Scalars["String"];
};

/** Departure pick list */
export type DeparturePickList = {
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** When the DeparturePickList record was created. */
  createdOn: Scalars["String"];
  /** The ID of the parent Departure. */
  departureId: Scalars["String"];
  /** A date that the DeparturePickList should be fully picked by. */
  dueDate?: Maybe<Scalars["String"]>;
  /** A 3rd party customer ID from an external system for the parent Departure. */
  externalCustomerId: Scalars["String"];
  /** A 3rd party order ID from an external system for the parent Departure. */
  externalOrderId: Scalars["String"];
  /** The ID of the Facility that the DeparturePickList should take place in. */
  facilityId: Scalars["String"];
  /** The ID of the DeparturePickList record. */
  id: Scalars["String"];
  /** The shipping method for the DeparturePickList. */
  shipVia?: Maybe<Scalars["String"]>;
  /** When the DeparturePickList record was last updated. */
  updatedOn: Scalars["String"];
};

/** Departure line item creation */
export type DeparturePickListInput = {
  /** The ID of the Departure that this DeparturePickList belongs to. */
  departureId: Scalars["String"];
  /** A date that the DeparturePickList should be fully picked by. */
  dueDate: Scalars["String"];
  /** The ID of the Facility that the Products in this DeparturePickList will be picked from. */
  facilityId: Scalars["String"];
  /** The shipping method for the DeparturePickList. */
  shipVia?: InputMaybe<Scalars["String"]>;
};

/** Departure pick list line item */
export type DeparturePickListLineItem = {
  /** A partial record of the associated Item. */
  clonedItem: ClonedItem;
  /** A partial record of the associated Product. */
  clonedProduct: ClonedProduct;
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["String"];
  /** When the DeparturePickListLineItem record was created. */
  createdOn: Scalars["String"];
  /** The ID of the parent Departure. */
  departureId: Scalars["String"];
  id: Scalars["String"];
  /** The ID of the associated Item. */
  itemId: Scalars["String"];
  /** The ID of the parent DeparturePickList. */
  pickListId: Scalars["String"];
  /** The total quantity of the items already picked. */
  pickedQuantity: Scalars["Float"];
  /** The ID of the associated Product. */
  productId: Scalars["String"];
  /** The quantity that should be picked. */
  quantity: Scalars["Float"];
  /** When the DeparturePickListLineItem record was last updated. */
  updatedOn: Scalars["String"];
};

/** Departure pick list line item creation */
export type DeparturePickListLineItemInput = {
  /** The ID of the Departure that this DeparturePickListLineItem belongs to. */
  departureId: Scalars["String"];
  /** The ID of the DeparturePickList that this DeparturePickListLineItem belongs to. */
  pickListId: Scalars["String"];
  /** The ID of the Product to add to the DeparturePickList. */
  productId: Scalars["String"];
  /** The quantity of this Product that will need to be picked. */
  quantity: Scalars["Float"];
};

export type DeparturePickListLineItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<DeparturePickListLineItem>;
};

/** Departure line item update */
export type DeparturePickListLineItemUpdateInput = {
  /** The ID of the Departure that this DeparturePickListLineItem belongs to. */
  departureId: Scalars["String"];
  /** The ID of the DeparturePickList that this DeparturePickListLineItem belongs to. */
  pickListId: Scalars["String"];
  /** The ID of the Product to add to the DeparturePickList. */
  productId: Scalars["String"];
  /** The quantity of this Product that will need to be picked. */
  quantity?: InputMaybe<Scalars["Float"]>;
};

export type DeparturePickListQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<DeparturePickList>;
};

/** Departure pick list update */
export type DeparturePickListUpdateInput = {
  /** The ID of the Departure that this DeparturePickListLineItem belongs to. */
  departureId: Scalars["String"];
  /** A date that the DeparturePickList should be fully picked by. */
  dueDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the DeparturePickList that this DeparturePickListLineItem belongs to. */
  pickListId: Scalars["String"];
  /** The shipping method for the DeparturePickList. */
  shipVia?: InputMaybe<Scalars["String"]>;
};

export type DepartureQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Departure>;
};

/** Departure update */
export type DepartureUpdateInput = {
  /** A 3rd party customer ID from an external system for this departure */
  externalCustomerId?: InputMaybe<Scalars["String"]>;
  /** A 3rd party order ID from an external system for this departure */
  externalOrderId?: InputMaybe<Scalars["String"]>;
  /** When the Departure was be fulfilled. */
  fulfilledOn?: InputMaybe<Scalars["String"]>;
  /** The ID of the Departure you want to update. */
  id: Scalars["String"];
  /** Has the Departure been completed? */
  isFulfilled?: InputMaybe<Scalars["Boolean"]>;
  /** The date the Departure was placed by an external customer. */
  placedOn?: InputMaybe<Scalars["String"]>;
  /** When the Departure will be fulfilled. */
  readyToFulfillOn?: InputMaybe<Scalars["String"]>;
  /** A free form field to set a status for this Departure. For example, pending, in progress, completed. */
  status?: InputMaybe<Scalars["String"]>;
};

/** Device model */
export type Device = {
  /** Log of the last operator accesses */
  accessLog: Array<OperatorAccess>;
  /** The id of the device's access token */
  accessTokenId: Scalars["String"];
  /** The id of the company */
  companyId: Scalars["String"];
  createdOn: Scalars["String"];
  /** Device descriptors from the device's os */
  deviceInfo: DeviceInfo;
  /** The unique identifier of the device (FID) */
  deviceUId: Scalars["String"];
  /** The id of the device */
  id: Scalars["String"];
  /** A custom name of the device to show in the device list */
  name: Scalars["String"];
  /** A list of the device's users */
  operators: Array<Scalars["String"]>;
  /** The id of the device's refresh token */
  refreshTokenId: Scalars["String"];
  /** The status of the device. (active|inactive) */
  status: Scalars["String"];
  /** The ID of the team that is using the device */
  teamId?: Maybe<Scalars["String"]>;
  /** The name of the team that is using the device */
  teamName?: Maybe<Scalars["String"]>;
  updatedOn: Scalars["String"];
};

/** Company Operator Model */
export type DeviceAccess = {
  createdOn: Scalars["String"];
  /** The id of the device used by the operator */
  deviceId: Scalars["String"];
  /** The ID us the operator's accessToken */
  tokenId: Scalars["String"];
};

/** Device info */
export type DeviceInfo = {
  /** The consumer-visible brand with which the product/hardware will be associated, if any. */
  brand: Scalars["String"];
  /** The name of the industrial design. */
  device: Scalars["String"];
  /** The manufacturer of the product/hardware. */
  manufacturer: Scalars["String"];
  /** The end-user-visible name for the end product. */
  model: Scalars["String"];
  /** The name of the overall product. */
  product: Scalars["String"];
};

export type DeviceQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Device>;
};

/** Device model */
export type DeviceUpdateInput = {
  /** The id of the device */
  id: Scalars["String"];
  /** A custom name of the device to show in the device list */
  name?: InputMaybe<Scalars["String"]>;
  /** The list of operators allowed to use this device */
  operators?: InputMaybe<Array<Scalars["String"]>>;
  /** The status of the device. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** ID of the team this device belongs to */
  teamId?: InputMaybe<Scalars["String"]>;
};

/** Generic dimensions model */
export type Dimensions = {
  /** In your desired unit of measure. */
  area?: Maybe<Scalars["Float"]>;
  /** In your desired unit of measure. */
  height?: Maybe<Scalars["Float"]>;
  /** In your desired unit of measure. */
  length?: Maybe<Scalars["Float"]>;
  /** In your desired unit of measure. */
  width?: Maybe<Scalars["Float"]>;
};

/** Dimensions input update */
export type DimensionsInputUpdate = {
  /** In your desired unit of measure. */
  height?: InputMaybe<Scalars["Float"]>;
  /** In your desired unit of measure. */
  length?: InputMaybe<Scalars["Float"]>;
  /** In your desired unit of measure. */
  width?: InputMaybe<Scalars["Float"]>;
};

/** DynamicContainer record */
export type DynamicContainer = {
  /** The weight capacity of the DynamicContainer in your desired unit of measure. */
  capacity?: Maybe<Scalars["Float"]>;
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["ID"];
  /** The ID of the user that created the DynamicContainer record. */
  createdBy: Scalars["String"];
  /** When the DynamicContainer record was created. */
  createdOn: Scalars["String"];
  /** The depth of the DynamicContainer in your desired unit of measure. */
  depth?: Maybe<Scalars["Float"]>;
  /** The ID of the Facility this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The height of the DynamicContainer in your desired unit of measure. */
  height?: Maybe<Scalars["Float"]>;
  /** The ID of the DynamicContainer record. */
  id: Scalars["ID"];
  /** The current location of the DynamicContainer. */
  location?: Maybe<DynamicContainerLocation>;
  /** The current payload of the DynamicContainer. */
  payload?: Maybe<DynamicContainerPayload>;
  /** A human readable identifer of the DynamicContainer. */
  readableId: Scalars["String"];
  /** Is the DynamicContainer still in use. active | inactive */
  status: Scalars["String"];
  /** The type of the dynamic container */
  type: Scalars["String"];
  /** When the DynamicContainer record was last updated. */
  updatedOn: Scalars["String"];
  /** The width of the DynamicContainer in your desired unit of measure. */
  width?: Maybe<Scalars["Float"]>;
};

/** Adjust the payload's quantity in a dynamic container */
export type DynamicContainerAdjustPayloadQuantityInput = {
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the DynamicContainer that is having the quantity of its Item changed. */
  id: Scalars["ID"];
  /** The updated quantity of the Item in the DynamicContainer. */
  quantity: Scalars["Float"];
};

/** Attach a dynamic container to a location */
export type DynamicContainerAttachInput = {
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the DynamicContainer that is being attached to an InventoryAreaLocation. */
  id: Scalars["ID"];
  /** The InventoryAreaLocation that this DynamicDynamic container is being attached to. */
  inventoryAreaLocation?: InputMaybe<InventoryAreaLocationInput>;
};

/** Delete a dynamic container */
export type DynamicContainerDeleteInput = {
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the DynamicContainer you want to delete. */
  id: Scalars["ID"];
};

/** Detach a dynamic container from a location */
export type DynamicContainerDetachInput = {
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the DynamicContainer that is being detached from an InventoryAreaLocation. */
  id: Scalars["ID"];
};

/** Input dynamic container record */
export type DynamicContainerInput = {
  /** The weight capacity of the DynamicContainer. In whichever unit of measure you want. */
  capacity?: InputMaybe<Scalars["Float"]>;
  /** The depth of the DynamicContainer. In whichever unit of measure you want. */
  depth?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The height of the DynamicContainer. In whichever unit of measure you want. */
  height?: InputMaybe<Scalars["Float"]>;
  /** Is the DynamicContainer still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** The type of DynamicContainer. For example, cardboard dynamic container, pallet, rack, etc. */
  type: Scalars["String"];
  /** The width of the DynamicContainer. In whichever unit of measure you want. */
  width?: InputMaybe<Scalars["Float"]>;
};

/** Load payload to a dynamic container */
export type DynamicContainerLoadInput = {
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the DynamicContainer that is being loaded. */
  id: Scalars["ID"];
  /** Information on the Item being loaded into the DynamicContainer. */
  itemPayload?: InputMaybe<ItemDynamicContainerPayloadInput>;
};

/** DynamicContainerLocation record */
export type DynamicContainerLocation = {
  /** The current location of the DynamicContainer. */
  location: DynamicContainerLocationRecord;
  type: Scalars["String"];
};

export type DynamicContainerLocationRecord =
  | InventoryAreaLocation
  | PartialInventoryAreaLocation;

/** DynamicContainerPayload record */
export type DynamicContainerPayload = {
  /** The current payload of the DynamicContainer. */
  payload: DynamicContainerPayloadRecord;
  type: Scalars["String"];
};

export type DynamicContainerPayloadRecord = ItemDynamicContainerPayload;

export type DynamicContainerQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<DynamicContainer>;
};

/** Input dynamic container record */
export type DynamicContainerUpdateInput = {
  /** The weight capacity of the DynamicContainer. In whichever unit of measure you want. */
  capacity?: InputMaybe<Scalars["Float"]>;
  /** The depth of the DynamicContainer. In whichever unit of measure you want. */
  depth?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Facility that this DynamicContainer is located in. */
  facilityId: Scalars["ID"];
  /** The height of the DynamicContainer. In whichever unit of measure you want. */
  height?: InputMaybe<Scalars["Float"]>;
  /** The ID of the DynamicContainer you want to update. */
  id: Scalars["ID"];
  /** Is the DynamicContainer still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** The type of DynamicContainer. For example, cardboard dynamic container, pallet, rack, etc. */
  type?: InputMaybe<Scalars["String"]>;
  /** The width of the DynamicContainer. In whichever unit of measure you want. */
  width?: InputMaybe<Scalars["Float"]>;
};

/** Employee Model */
export type Employee = {
  company: Company;
  /** Jeeny Company */
  companyId: Scalars["String"];
  createdOn: Scalars["String"];
  /** Facilities that this employee has access to */
  facilities: Array<Scalars["String"]>;
  /** Employee ID */
  id: Scalars["ID"];
  /** List of kit ids an operator can buold */
  kitIds?: Maybe<Array<Scalars["ID"]>>;
  permissions?: Maybe<EmployeePermissions>;
  /** User's role */
  role: Scalars["String"];
  /** User's team */
  teamId?: Maybe<Scalars["ID"]>;
  trainings?: Maybe<Array<EmployeeTraining>>;
  updatedOn: Scalars["String"];
  user: User;
  /** List of workbench ids an operator can work at */
  workbenchIds?: Maybe<Array<Scalars["ID"]>>;
  workbenches?: Maybe<Array<Workbench>>;
};

/** Various employee permissions */
export type EmployeePermissions = {
  /** Do arrivals created by this employee require approval */
  arrivalsRequireApproval?: Maybe<Scalars["Boolean"]>;
  /** Can this employee approve arrivals */
  canApproveArrivals?: Maybe<Scalars["Boolean"]>;
};

/** Employee training model */
export type EmployeeTraining = {
  /** Employee training id */
  id: Scalars["ID"];
  stats: Array<EmployeeTrainingStats>;
  trainingId: Scalars["ID"];
  videoStats: Array<EmployeeTrainingVideoStats>;
};

/** Employee training video stats model */
export type EmployeeTrainingStats = {
  /** The positions of completed items on the training checklist */
  checklist: Array<Scalars["Float"]>;
  endDate?: Maybe<Scalars["String"]>;
  /** Video file name */
  id: Scalars["ID"];
  score?: Maybe<Scalars["Float"]>;
  startDate: Scalars["String"];
  teacherId: Scalars["ID"];
};

/** Employee training video stats model */
export type EmployeeTrainingVideoStats = {
  /** Video file name */
  id: Scalars["ID"];
  timesCompleted: Scalars["Float"];
};

export type Event = {
  /** ID of the User or Team who is assigned to this Event. */
  assigneeId: Scalars["String"];
  /** This indicates if the assignee is a companyUser or operator. Values can be companyUser | operator | team. */
  assigneeType: Scalars["String"];
  /** The ID of the company the Event belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the Event record was created. */
  createdOn: Scalars["String"];
  /** Date of the event if type is single. */
  date?: Maybe<Scalars["String"]>;
  /** The description of the Event. */
  description?: Maybe<Scalars["String"]>;
  /** The date when the event ends, if the type is single. */
  endDate?: Maybe<Scalars["String"]>;
  /** The ID of the Event. */
  id: Scalars["String"];
  /** The subjectId of the Instruction to create for the event. */
  instructionSubjectId?: Maybe<Scalars["String"]>;
  /** The subjectType of Instruction to create for the event. item | arrival | departure | kit | supplier */
  instructionSubjectType?: Maybe<Scalars["String"]>;
  /** The ID of the base InstructionTemplate to create the Instruction for the event. */
  instructionTemplateId?: Maybe<Scalars["String"]>;
  /** The name of the Event. */
  name: Scalars["String"];
  /** The recurrence data, based on the iCalendar protocol, if type is recurring. */
  recurrence?: Maybe<Scalars["String"]>;
  /** The nature of the event: single|recurring */
  type: Scalars["String"];
  /** The date the Event record was last updated. */
  updatedOn: Scalars["String"];
};

export type EventDetails = {
  /** The Event record */
  event: Event;
  /** All of the InstructionExecution records for this Event. */
  instructionExecutions: Array<InstructionExecution>;
};

/** Event creation */
export type EventInput = {
  /** ID of the User or Team who is assigned to this Event. */
  assigneeId: Scalars["String"];
  /** This indicates if the assignee is a companyUser or operator. Values can be companyUser | operator | team. */
  assigneeType: Scalars["String"];
  /** Date of the event. */
  date?: InputMaybe<Scalars["String"]>;
  /** The description of the Event. */
  description?: InputMaybe<Scalars["String"]>;
  /** The date when the event ends, if the type is single. */
  endDate?: InputMaybe<Scalars["String"]>;
  /** The subjectId of the Instruction to create for the event. */
  instructionSubjectId?: InputMaybe<Scalars["String"]>;
  /** The subjectType of Instruction to create for the event. item | arrival | departure | kit | supplier */
  instructionSubjectType?: InputMaybe<Scalars["String"]>;
  /** The ID of the base InstructionTemplate to create the Instruction for the event. */
  instructionTemplateId?: InputMaybe<Scalars["String"]>;
  /** The name of the Event. */
  name: Scalars["String"];
  /** The recurrence data, based on the iCalendar protocol. */
  recurrence?: InputMaybe<Scalars["String"]>;
  /** The nature of the event: single|recurring */
  type: Scalars["String"];
};

/** Event update */
export type EventUpdateInput = {
  /** ID of the User or Team who is assigned to this Event. assigneeType must also be provided. */
  assigneeId?: InputMaybe<Scalars["String"]>;
  /** This indicates if the assignee is a companyUser or operator. Values can be companyUser | operator | team. assigneeId must also be provided. */
  assigneeType?: InputMaybe<Scalars["String"]>;
  /** Date of the event. */
  date?: InputMaybe<Scalars["String"]>;
  /** The description of the Event. */
  description?: InputMaybe<Scalars["String"]>;
  /** The date when the event ends, if the type is single. */
  endDate?: InputMaybe<Scalars["String"]>;
  /** The ID of the event you are updating. */
  id: Scalars["String"];
  /** The subjectId of the Instruction to create for the event. */
  instructionSubjectId?: InputMaybe<Scalars["String"]>;
  /** The subjectType of Instruction to create for the event. item | arrival | departure | kit | supplier */
  instructionSubjectType?: InputMaybe<Scalars["String"]>;
  /** The ID of the base InstructionTemplate to create the Instruction for the event. */
  instructionTemplateId?: InputMaybe<Scalars["String"]>;
  /** The name of the Event. */
  name?: InputMaybe<Scalars["String"]>;
  /** The recurrence data, based on the iCalendar protocol. */
  recurrence?: InputMaybe<Scalars["String"]>;
  /** The nature of the event: single|recurring */
  type?: InputMaybe<Scalars["String"]>;
};

export type EventsBetweenDates = {
  /** Single events within the date range. */
  recurringEvents: Array<Event>;
  /** Single events within the date range. */
  singleEvents: Array<Event>;
};

export type ExecuteInstructionTemplateInput = {
  /** The ID of an Event, if the execution belongs to one. */
  eventId?: InputMaybe<Scalars["String"]>;
  /** The ID of the user who executes the Instructions. */
  executorId: Scalars["String"];
  /** The ID of the InstructionTemplate which will be executed. */
  instructionTemplateId: Scalars["String"];
  /** The status of InstructionExecution. */
  status: Scalars["String"];
  /** Id of the subject, if the execution is tied to a subject. */
  subjectId?: InputMaybe<Scalars["String"]>;
  /** Type of the subject, if the execution is tied to a subject. */
  subjectType?: InputMaybe<Scalars["String"]>;
  /** Name of the trigger. If the execution was created via a trigger. */
  triggerSource?: InputMaybe<Scalars["String"]>;
  /** Id of the trigger. If the execution was created via a trigger. */
  triggerSourceId?: InputMaybe<Scalars["String"]>;
};

export type ExternalProduct = {
  /** The ID of the company the Product belongs to. */
  companyId: Scalars["String"];
  /** The date the record was created. */
  createdOn: Scalars["String"];
  /** The ID of the External Product. */
  externalProductId: Scalars["String"];
  /** The ID of the Product. */
  productId: Scalars["String"];
  /** The integration source of the External Product. */
  source: Scalars["String"];
};

/** External Product creation */
export type ExternalProductInput = {
  /** The ID of the External Product. */
  externalProductId: Scalars["String"];
  /** The ID of the Product. */
  productId: Scalars["String"];
  /** The integration source of the External Product. */
  source: Scalars["String"];
};

export type ExternalProductQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<ExternalProduct>;
};

/** Facility model */
export type Facility = {
  /** The physical address of the Facility */
  address: Address;
  /** An email address that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalEmail?: Maybe<Scalars["String"]>;
  /** A phone number that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalPhoneNumber?: Maybe<Scalars["String"]>;
  /** A memorable code - something short and sweet. */
  code: Scalars["String"];
  /** The companyId the Facility belongs to. */
  companyId: Scalars["String"];
  /** JSON string */
  configuration: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** An image associated with the Facility. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** The dimensions of the Facility. */
  dimensions?: Maybe<Dimensions>;
  /** Exported for use on frontend */
  facilityComponentConfiguration?: Maybe<FacilityComponentConfiguration>;
  /** Facility files. */
  files?: Maybe<Array<FileStorageRecord>>;
  /** The ID of the Facility. */
  id: Scalars["ID"];
  /** Facility images. */
  images?: Maybe<Array<FileStorageRecord>>;
  /** The InventoryAreas that belong to this Facility. */
  inventoryAreas: Array<FacilityInventoryArea>;
  /** A list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to a Facility is used when there is not a narrower option (for example, an inventory strategy on an InventoryArea). */
  inventoryStrategies?: Maybe<Array<InventoryStrategy>>;
  /** A memorable name. */
  name: Scalars["String"];
  /** Is the Facility still in use. active | inactive */
  status: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
  /** Facility videos. */
  videos?: Maybe<Array<FileStorageRecord>>;
};

/** Workcell Component Configuration */
export type FacilityComponentConfiguration = {
  equipmentId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  inventoryAreaId?: Maybe<Scalars["String"]>;
  machineId?: Maybe<Scalars["String"]>;
  productionLineId?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Float"]>;
  /** workbench|equipment|machine|workcell|productionLine|inventoryArea */
  type: Scalars["String"];
  workbenchId?: Maybe<Scalars["String"]>;
  workcellId?: Maybe<Scalars["String"]>;
  /** From left */
  xCoordinate: Scalars["Float"];
  /** From top */
  yCoordinate: Scalars["Float"];
};

/** A detailed view of the Facility and what is inside of it. */
export type FacilityDetails = {
  dynamicContainers: Array<DynamicContainer>;
  facility: Facility;
  facilityItems: Array<FacilityItem>;
  itemStorageInventoryAreaLocations: Array<ItemStorageInventoryAreaLocation>;
  itemStorageInventoryAreaRules: Array<ItemStorageInventoryAreaRule>;
  storageInventoryAreaLocations: Array<StorageInventoryAreaLocation>;
  storageInventoryAreaRules: Array<StorageInventoryAreaRule>;
};

/** Facility input */
export type FacilityInput = {
  /** The physical address of the Facility */
  address: AddressInput;
  /** An email address that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalEmail?: InputMaybe<Scalars["String"]>;
  /** A phone number that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalPhoneNumber?: InputMaybe<Scalars["String"]>;
  /** Give the Facility a memorable code - something short and sweet. */
  code: Scalars["String"];
  /** A JSON string */
  configuration: Scalars["String"];
  /** The dimensions of the Facility. */
  dimensions?: InputMaybe<DimensionsInputUpdate>;
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to a Facility is used when there is not a narrower option (for example, an inventory strategy on an FacilityItem). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** Give the Facility a memorable name. */
  name: Scalars["String"];
  /** Is the Facility still in use. active | inactive */
  status: Scalars["String"];
};

/** Facility input update */
export type FacilityInputUpdate = {
  /** The physical address of the Facility */
  address?: InputMaybe<AddressInput>;
  /** An email address that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalEmail?: InputMaybe<Scalars["String"]>;
  /** A phone number that can be used to give to Suppliers for any Arrival information or contact. */
  arrivalPhoneNumber?: InputMaybe<Scalars["String"]>;
  /** Give the Facility a memorable code - something short and sweet. */
  code?: InputMaybe<Scalars["String"]>;
  /** JSON string */
  configuration?: InputMaybe<Scalars["String"]>;
  /** An image associated with the Facility. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** The dimensions of the Facility. */
  dimensions?: InputMaybe<DimensionsInputUpdate>;
  id: Scalars["ID"];
  /** A list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to a Facility is used when there is not a narrower option (for example, an inventory strategy on an InventoryArea). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** Give the Facility a memorable name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Is facility still being used. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** Facility inventory area Model */
export type FacilityInventoryArea = {
  /** Category of the FacilityInventoryArea. */
  category?: Maybe<Scalars["String"]>;
  /** A memorable code - something short and sweet */
  code: Scalars["String"];
  /** Description of the InventoryArea. Is it for a specific type of Item? */
  description: Scalars["String"];
  /** A set of DynamicContainer types. */
  dynamicContainerTypes: Array<FacilityInventoryAreaDynamicContainerType>;
  /** The ID of the InventoryArea. */
  id: Scalars["ID"];
  name: Scalars["String"];
  /** Is the FacilityInventoryArea still in use. active | inactive */
  status: Scalars["String"];
};

/** Delete facility inventory area input */
export type FacilityInventoryAreaDeleteInput = {
  /** The ID of the Facility that the InventoryArea you want to delete is in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea you want to delete. */
  id: Scalars["ID"];
};

/** Facility inventory area dynamic container type model */
export type FacilityInventoryAreaDynamicContainerType = {
  /** Depth of the DynamicContainer in your desired unit of measure. */
  depth: Scalars["Float"];
  /** Height of the DynamicContainer in your desired unit of measure. */
  height: Scalars["Float"];
  id: Scalars["ID"];
  /** Is this DynamicContainer type able to be used? */
  status: Scalars["String"];
  /** Width of the DynamicContainer in your desired unit of measure. */
  width: Scalars["Float"];
};

/** Facility inventory area dynamic container type model */
export type FacilityInventoryAreaDynamicContainerTypeInput = {
  /** Depth of the DynamicContainer. Use your desired unit of measure. */
  depth: Scalars["Float"];
  /** Height of the DynamicContainer. Use your desired unit of measure. */
  height: Scalars["Float"];
  /** You need to provide a unique ID yourself. */
  id: Scalars["ID"];
  /** Should this DynamicContainer continue to be used? */
  status: Scalars["String"];
  /** Width of the DynamicContainer. Use your desired unit of measure. */
  width: Scalars["Float"];
};

/** The input for Creat */
export type FacilityInventoryAreaInput = {
  /** Category of the FacilityInventoryArea. */
  category?: InputMaybe<Scalars["String"]>;
  /** Give the InventoryArea a memorable code - something short and sweet. */
  code: Scalars["String"];
  /** Describe the InventoryArea. Is it for a specific type of Item? */
  description: Scalars["String"];
  /** If this InventoryArea allows for dynamic slotting you can enter a set of DynamicContainer types. */
  dynamicContainerTypes: Array<FacilityInventoryAreaDynamicContainerTypeInput>;
  /** The Facility that the InventoryArea will be inside of. */
  facilityId: Scalars["ID"];
  /** Give the InventoryArea a memorable name. */
  name: Scalars["String"];
  /** Is the FacilityInventoryArea still in use. active | inactive */
  status: Scalars["String"];
};

/** Update facility inventory area input */
export type FacilityInventoryAreaUpdateInput = {
  /** Category of the FacilityInventoryArea. */
  category?: InputMaybe<Scalars["String"]>;
  /** Give the InventoryArea a memorable code - something short and sweet. */
  code?: InputMaybe<Scalars["String"]>;
  /** Describe the InventoryArea. Is it for a specific type of Item? */
  description?: InputMaybe<Scalars["String"]>;
  /** If this InventoryArea allows for dynamic slotting you can enter a set of DynamicContainer types. */
  dynamicContainerTypes?: InputMaybe<
    Array<FacilityInventoryAreaDynamicContainerTypeInput>
  >;
  /** The ID of the Facility that this InventoryArea is in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea you want to update. */
  id: Scalars["ID"];
  /** Give the InventoryArea a memorable name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Is the FacilityInventoryArea still in use. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** Item details for storage groups in a facility */
export type FacilityItem = {
  /** The ID of the company this record belongs to. */
  companyId: Scalars["ID"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Facility these rules belong to. */
  facilityId: Scalars["ID"];
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an FacilityItem is used when there is not a narrower option (for example, an inventory strategy on an InventoryArea). */
  inventoryStrategies?: Maybe<Array<InventoryStrategy>>;
  /** The ID of the Item these rules belong to. */
  itemId: Scalars["ID"];
  /** The maximum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  maxQuantity?: Maybe<Scalars["Float"]>;
  /** The reasoning behind the set minimum and maximum quantities. */
  minMaxReasoning?: Maybe<Scalars["String"]>;
  /** The minimum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  minQuantity?: Maybe<Scalars["Float"]>;
  /** Indicates the reorder status based on current inventory levels. This property is automatically determined by the system and is not a user input. */
  reorderStatus?: Maybe<Scalars["String"]>;
  /** Inactive status won't be reordered (active|inactive) */
  status: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

export type FacilityItemGetInput = {
  /** The ID of the Facility for this FacilityItem record */
  facilityId: Scalars["ID"];
  /** The ID of the Item for this FacilityItem record */
  itemId: Scalars["ID"];
};

/** Input storage record for an item in a position */
export type FacilityItemInput = {
  /** The ID of the Facility for this FacilityItem record */
  facilityId: Scalars["ID"];
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an FacilityItem is used when there is not a narrower option (for example, an inventory strategy on an InventoryArea). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** The ID of the Item for this FacilityItem record */
  itemId: Scalars["ID"];
  /** The maximum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The reasoning behind the set minimum and maximum quantities. */
  minMaxReasoning?: InputMaybe<Scalars["String"]>;
  /** The minimum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  minQuantity?: InputMaybe<Scalars["Float"]>;
  /** Inactive status won't be reordered (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

export type FacilityItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<FacilityItem>;
};

/** Input storage record for an item in a position */
export type FacilityItemUpdateInput = {
  /** The ID of the Facility for this FacilityItem record */
  facilityId: Scalars["ID"];
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an FacilityItem is used when there is not a narrower option (for example, an inventory strategy on an InventoryArea). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** The ID of the Item for this FacilityItem record */
  itemId: Scalars["ID"];
  /** The maximum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The reasoning behind the set minimum and maximum quantities */
  minMaxReasoning?: InputMaybe<Scalars["String"]>;
  /** The minimum quantity of this Item (in the bill of items unit of measure) to store in this Facility. */
  minQuantity?: InputMaybe<Scalars["Float"]>;
  /** Inactive status won't be reordered (active|inactive). */
  status?: InputMaybe<Scalars["String"]>;
};

export type FacilityQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Facility>;
};

export type FileStorageRecord = {
  /** The name of the file. */
  fileName: Scalars["String"];
  /** The size of the file. */
  size: Scalars["Float"];
  /** The date and time when the file was last uploaded/replaced. */
  updatedOn: Scalars["String"];
  /** The URL of the file. */
  url: Scalars["String"];
};

export type FileUploadInput = {
  /** The file category. Must be one of Item, Supplier, Facility, Arrival, Product or Kit */
  category: Scalars["String"];
  /** The file name. */
  fileName: Scalars["String"];
  /** The ID of the record the file belongs to. For example, this could be the Item ID or the Supplier ID. */
  id: Scalars["String"];
  /** The file type. Must be one of image, video, or file/ */
  type: Scalars["String"];
};

/** App access control list */
export type FinancialAccessControls = {
  all: AccessType;
  employeeCosts: AccessType;
  itemCosts: AccessType;
  kitCosts: AccessType;
  productCosts: AccessType;
  productPricing: AccessType;
};

export type GetItemStorageInventoryAreaLocationQuery = {
  /** Provide an aisle to narrow the search down to a single aisle. */
  aisle: Scalars["String"];
  /** Provide n bay to narrow the search down to a single bay. */
  bay: Scalars["String"];
  /** Provide an ID to narrow the search down to a single Facility. */
  facilityId: Scalars["ID"];
  /** Provide an ID to narrow the search down to a single InventoryArea. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item being looked for. */
  itemId: Scalars["ID"];
  /** Provide a position to narrow the search down to a single position. */
  position: Scalars["String"];
  /** Provide a shelf to narrow the search down to a single shelf. */
  shelf: Scalars["String"];
};

export type GetKitTemplateBomInput = {
  /** A set of dimensions to pass to the bill of items calculation. These dimensions will flow down and be used by any KitParts with dynamic measurements. */
  dimensions?: InputMaybe<KitTemplateDimensionsInput>;
  /** The ID of the KitTemplate you want to get the bill of items for. */
  id: Scalars["String"];
  partOptionSelections: Array<PartOptionSelection>;
};

/** Company HeadlessUser Model */
export type HeadlessUser = {
  /** Jeeny Company */
  companyId: Scalars["String"];
  createdBy: Scalars["String"];
  createdOn: Scalars["String"];
  /** Jeeny headless user */
  id: Scalars["ID"];
  /** The last time when the headless user attempted to log in from a device */
  lastUsed?: Maybe<Scalars["String"]>;
  /** The first and last 4 characters of the access token */
  maskedToken: Scalars["String"];
  /** Is headless user still allowed access. active | inactive | suspended */
  status: Scalars["String"];
  /** The access token */
  token?: Maybe<Scalars["String"]>;
  updatedOn: Scalars["String"];
};

export type HeadlessUserInputUpdate = {
  id: Scalars["ID"];
  /** Is headless user still allowed access. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

export type HeadlessUserQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<HeadlessUser>;
};

/** AppConfiguration */
export type InstalledApp = {
  /** The ID of the company the App belongs to. */
  companyId: Scalars["String"];
  /** The cover image of the app. */
  coverUrl?: Maybe<Scalars["String"]>;
  /** ID of the User that created this app. */
  createdBy: Scalars["String"];
  /** The date the App record was created. */
  createdOn: Scalars["String"];
  /** The description of the app. */
  description: Scalars["String"];
  /** The version of the editor this app was made in. */
  editorVersion: Scalars["String"];
  /** The icon of the app. */
  iconUrl?: Maybe<Scalars["String"]>;
  /** The ID of the App. */
  id: Scalars["String"];
  /** The installation data of the app. */
  installation: OfficialAppInstallation;
  /** Is the app available for other users of the company. */
  isPublished: Scalars["Boolean"];
  /** The name of the app. */
  name: Scalars["String"];
  /** The version of the player this app should be played in. */
  playerVersion: Scalars["String"];
  /** The version number of the published app. */
  publishedAppVersion?: Maybe<Scalars["String"]>;
  /** Is the app currently available. active|inactive */
  status: Scalars["String"];
  /** The date the App record was last updated. */
  updatedOn: Scalars["String"];
};

export type InstructionExecution = {
  /** The ID of the company the InstructionTemplate belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the InstructionTemplate record was created. */
  createdOn: Scalars["String"];
  /** The description of the InstructionTemplate. */
  description?: Maybe<Scalars["String"]>;
  /** The ID of an Event, if the execution belongs to one. */
  eventId?: Maybe<Scalars["String"]>;
  /** The ID of the user who executes the Instructions. */
  executorId: Scalars["String"];
  /** The ID of the InstructionTemplate. */
  id: Scalars["String"];
  /** The ID of InstructionTemplate this InstructionExecution was made of. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionTemplate. */
  name: Scalars["String"];
  /** The status of InstructionExecution. */
  status: Scalars["String"];
  /** Id of the subject, if the execution is tied to a subject. */
  subjectId?: Maybe<Scalars["String"]>;
  /** Type of the subject, if the execution is tied to a subject. */
  subjectType?: Maybe<Scalars["String"]>;
  /** Source of the trigger. If the execution was created via a trigger. */
  triggerSource?: Maybe<Scalars["String"]>;
  /** Id of the trigger. If the execution was created via a trigger. */
  triggerSourceId?: Maybe<Scalars["String"]>;
  /** The date the InstructionTemplate record was last updated. */
  updatedOn: Scalars["String"];
};

export type InstructionExecutionDetails = {
  instructionExecution: InstructionExecution;
  instructionExecutionStepSubmissions: Array<InstructionExecutionStepSubmission>;
  instructionExecutionSteps: Array<InstructionExecutionStep>;
};

export type InstructionExecutionQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<InstructionExecution>;
};

export type InstructionExecutionStep = {
  /** The ID of the company the InstructionTemplateStep belongs to. */
  companyId: Scalars["String"];
  /** The text content of this InstructionTemplateStep. */
  content: Scalars["String"];
  /** The date the InstructionTemplate record was created. */
  createdOn: Scalars["String"];
  /** The ID of the InstructionTemplateStep. */
  id: Scalars["String"];
  /** The ID of the InstructionExecution this InstructionExecutionStepSubmission belongs to. */
  instructionExecutionId: Scalars["String"];
  /** The ID of InstructionTemplate that contains this step. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionTemplateStep. */
  name: Scalars["String"];
  /** The date the InstructionTemplate record was last updated. */
  updatedOn: Scalars["String"];
  /** For ordering the InstructionTemplateSteps within the InstructionTemplate. */
  weight: Scalars["Float"];
};

export type InstructionExecutionStepSubmission = {
  /** The ID of the company the InstructionExecutionStepSubmission belongs to. */
  companyId: Scalars["String"];
  /** The date the InstructionExecutionStepSubmission record was created. */
  createdOn: Scalars["String"];
  id: Scalars["String"];
  /** The ID of the InstructionExecution this InstructionExecutionStepSubmission belongs to. */
  instructionExecutionId: Scalars["String"];
  /** The ID of the InstructionExecutionStep this InstructionExecutionStepSubmission belongs to. */
  instructionExecutionStepId: Scalars["String"];
  /** A freeform text data containing submission information. */
  submission?: Maybe<Scalars["String"]>;
};

export type InstructionExecutionUpdateInput = {
  /** The ID of the InstructionExecution you are updating. */
  id: Scalars["String"];
  /** The ID of the InstructionTemplateId this InstructionExecution belongs to. */
  instructionTemplateId: Scalars["String"];
  /** The status of InstructionExecution. */
  status?: InputMaybe<Scalars["String"]>;
};

export type InstructionSubject = {
  /** The ID of the company the InstructionSubject belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the InstructionSubject record was created. */
  createdOn: Scalars["String"];
  /** The ID of the InstructionTemplate which you want to link to the subject. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionSubject. */
  name: Scalars["String"];
  /** Is the InstructionSubject still being used? active | inactive */
  status: Scalars["String"];
  /** The ID of the subject entity. */
  subjectId: Scalars["String"];
  /** The type of the subject entity. arrival|item|kit|supplier|product|departure|user */
  subjectType: Scalars["String"];
  /** A list of triggers, to instantiate an InstructionExecution. */
  triggers?: Maybe<Array<InstructionSubjectTrigger>>;
};

/** InstructionSubject creation */
export type InstructionSubjectInput = {
  /** The ID of the InstructionTemplate which you want to link to the subject. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionSubject. */
  name: Scalars["String"];
  /** Is the InstructionSubject still being used? active | inactive */
  status: Scalars["String"];
  /** The ID of the subject entity. */
  subjectId: Scalars["String"];
  /** The type of the subject entity. arrival|item|kit|supplier|product|departure|user */
  subjectType: Scalars["String"];
  /** A list of triggers, to instantiate an InstructionExecution. */
  triggers?: InputMaybe<Array<InstructionSubjectTriggerInput>>;
};

export type InstructionSubjectQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<InstructionSubject>;
};

export type InstructionSubjectTrigger = {
  /** Is the instantiation of the InstructionExecution mandatory when the trigger happens? */
  isRequired: Scalars["Boolean"];
  /** On what occasion should the instantiation of the InstructionExecution happen? eg. arrivalDelivery */
  source: Scalars["String"];
};

export type InstructionSubjectTriggerInput = {
  /** Is the instantiation of the InstructionExecution mandatory when the trigger happens? */
  isRequired: Scalars["Boolean"];
  /** On what occasion should the instantiation of the InstructionExecution happen? eg. arrivalDelivery */
  source: Scalars["String"];
};

export type InstructionSubjectWithTemplate = {
  /** The ID of the company the InstructionSubject belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the InstructionSubject record was created. */
  createdOn: Scalars["String"];
  /** The ID of the InstructionTemplate which you want to link to the subject. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionSubject. */
  name: Scalars["String"];
  /** Is the InstructionSubject still being used? active | inactive */
  status: Scalars["String"];
  /** The ID of the subject entity. */
  subjectId: Scalars["String"];
  /** The type of the subject entity. arrival|item|kit|supplier|product|departure|user */
  subjectType: Scalars["String"];
  /** A list of triggers, to instantiate an InstructionExecution. */
  triggers?: Maybe<Array<InstructionSubjectTrigger>>;
};

export type InstructionSubjectWithTemplateQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<InstructionSubjectWithTemplate>;
};

export type InstructionTemplate = {
  /** The ID of the company the InstructionTemplate belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the InstructionTemplate record was created. */
  createdOn: Scalars["String"];
  /** The description of the InstructionTemplate. */
  description?: Maybe<Scalars["String"]>;
  /** The ID of the InstructionTemplate. */
  id: Scalars["String"];
  /** The name of the InstructionTemplate. */
  name: Scalars["String"];
  /** The status of InstructionTemplate. */
  status: Scalars["String"];
  /** The date the InstructionTemplate record was last updated. */
  updatedOn: Scalars["String"];
};

export type InstructionTemplateDetails = {
  instructionTemplate: InstructionTemplate;
  instructionTemplateSteps: Array<InstructionTemplateStep>;
};

/** InstructionTemplate creation */
export type InstructionTemplateInput = {
  /** The description of the InstructionTemplate. */
  description?: InputMaybe<Scalars["String"]>;
  /** The name of the InstructionTemplate. */
  name: Scalars["String"];
  /** Is the InstructionTemplateInput still being used? active | inactive */
  status: Scalars["String"];
};

export type InstructionTemplateQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<InstructionTemplate>;
};

export type InstructionTemplateStep = {
  /** The ID of the company the InstructionTemplateStep belongs to. */
  companyId: Scalars["String"];
  /** The text content of this InstructionTemplateStep. */
  content: Scalars["String"];
  /** The date the InstructionTemplate record was created. */
  createdOn: Scalars["String"];
  /** The ID of the InstructionTemplateStep. */
  id: Scalars["String"];
  /** The ID of InstructionTemplate that contains this step. */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionTemplateStep. */
  name: Scalars["String"];
  /** The date the InstructionTemplate record was last updated. */
  updatedOn: Scalars["String"];
  /** For ordering the InstructionTemplateSteps within the InstructionTemplate. */
  weight: Scalars["Float"];
};

/** InstructionTemplate update */
export type InstructionTemplateUpdateInput = {
  /** The description of the InstructionTemplate. */
  description?: InputMaybe<Scalars["String"]>;
  /** The ID of the InstructionTemplate you are updating. */
  id: Scalars["String"];
  /** The name of the InstructionTemplate. */
  name?: InputMaybe<Scalars["String"]>;
  /** Is the InstructionTemplateInput still being used? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** InventoryAreaLocation record */
export type InventoryAreaLocation = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The ID of the InventoryArea record. */
  inventoryAreaId: Scalars["ID"];
  position: Scalars["String"];
  shelf: Scalars["String"];
};

/** Storage location input. This input was designed for use in facilities and warehouses. */
export type InventoryAreaLocationInput = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The ID of the InventoryArea that the location is in. */
  inventoryAreaId: Scalars["ID"];
  position: Scalars["String"];
  shelf: Scalars["String"];
};

/** StorageLocation rule input */
export type InventoryAreaRuleInput = {
  /** The type of location assignment. Must be one of static or dynamic. This cannot be changed once set. */
  locationAssignment?: InputMaybe<Scalars["String"]>;
  /** The strategy to use when picking occurs in this InventoryArea. This is independent of the financial ledger accounting strategy. Must be one of FIFO, LIFO, or HIFO. This cannot be changed once set. */
  pickStrategy?: InputMaybe<Scalars["String"]>;
};

/** Inventory history record */
export type InventoryHistoryRecord = {
  /** The sum of the addition operation in the given timeframe. */
  addition: Scalars["Float"];
  /** The timeframe of the historical data. */
  days: Scalars["Float"];
  /** The sum of the deduction operation in the given timeframe. */
  deduction: Scalars["Float"];
  /** The id of the facility. */
  facilityId: Scalars["String"];
  /** The id of the item. */
  itemId: Scalars["String"];
  /** The ledger of the item. */
  ledger: Scalars["String"];
};

export type InventoryLog = {
  /** The DepartureDelivery that caused this change. Useful for enhanced tracking. */
  arrivalDeliveryId?: Maybe<Scalars["String"]>;
  /** The Departure that caused this change. Useful for enhanced tracking. */
  arrivalId?: Maybe<Scalars["String"]>;
  /** The DepartureRelease that caused this change. Useful for enhanced tracking. */
  arrivalReleaseId?: Maybe<Scalars["String"]>;
  /** The ID of the company that the InventoryLog belongs to. */
  companyId: Scalars["String"];
  correctionType?: Maybe<Scalars["String"]>;
  /** The ID of the user that took the action that caused the inventory change. */
  createdBy: Scalars["String"];
  /** The date the InventoryLog was created. */
  createdOn: Scalars["String"];
  /** The ID of the Facility that the inventory change took place in. */
  facilityId: Scalars["String"];
  /** The reason why the system rejected the change to the financial ledger. */
  failReason?: Maybe<Scalars["String"]>;
  /** The ID of the Item that the inventory change took place for. */
  itemId: Scalars["String"];
  /** The ledger that the inventory change is taking place in. */
  ledger: Scalars["String"];
  /** Must be one of addition or deduction. If addition then the quantity value will be added to the availableQuantity. If deduction then the quantity value will be subtracted from the availableQuantity. */
  operation: Scalars["String"];
  /** The price per unit of the Item that had its inventory changed. */
  price?: Maybe<Scalars["Float"]>;
  /** The quantity that was used in the change. */
  quantity: Scalars["Float"];
  /** A description of why this change is taking place. */
  reason?: Maybe<Scalars["String"]>;
  /** Msut be one of success or failure. */
  status: Scalars["String"];
  /** The SupplierItem being changed. Useful for enhanced tracking. */
  supplierItemId?: Maybe<Scalars["String"]>;
};

export type InventoryLogQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<InventoryLog>;
};

export type InventoryRecord = {
  adjustedQuantity?: Maybe<Scalars["String"]>;
  /** The DepartureDelivery that caused this change. Useful for enhanced tracking. */
  arrivalDeliveryId?: Maybe<Scalars["String"]>;
  /** The Departure that caused this change. Useful for enhanced tracking. */
  arrivalId?: Maybe<Scalars["String"]>;
  /** The DepartureRelease that caused this change. Useful for enhanced tracking. */
  arrivalReleaseId?: Maybe<Scalars["String"]>;
  /** The previous quantity of the Item being tracked. */
  availableQuantity?: Maybe<Scalars["Float"]>;
  /** The ID of the company that the InventoryRecord belongs to. */
  companyId: Scalars["String"];
  correctionType?: Maybe<Scalars["String"]>;
  /** The ID of the user that took the action that created the InventoryRecord. */
  createdBy: Scalars["String"];
  /** The date that the InventoryRecord was created. */
  createdOn: Scalars["String"];
  /** The Facility ID that the financial adjustment is taking place in. */
  facilityId: Scalars["String"];
  fromRecordId?: Maybe<Scalars["String"]>;
  /** The ID of the InventoryRecord. */
  id: Scalars["String"];
  /** The type of accounting strategy being used in this change. */
  inventoryStrategy?: Maybe<Scalars["String"]>;
  /** Is this the most recent InventoryRecord for this item. The latest transaction in the ledger. */
  isHead?: Maybe<Scalars["Boolean"]>;
  /** The Item ID for the financial adjustment. */
  itemId: Scalars["String"];
  /** The financial ledger that is being adjusted. */
  ledger: Scalars["String"];
  /** Must be one of addition or deduction. If addition then the quantity value will be added to the availableQuantity. If deduction then the quantity value will be subtracted from the availableQuantity. */
  operation: Scalars["String"];
  /** A link to the previous ... */
  previousPriceRecordId?: Maybe<Scalars["String"]>;
  /** A link to the previous InventoryRecord in the ledger. */
  previousRecordId?: Maybe<Scalars["String"]>;
  /** The price per unit being made in this adjustment. */
  price: Scalars["Float"];
  priceCategoryQuantity: Scalars["Float"];
  /** The quantity being changed in this adjustment. Must be a positive number. */
  quantity: Scalars["Float"];
  /** A description of why this change is taking place. */
  reason?: Maybe<Scalars["String"]>;
  /** The SupplierItem being changed. Useful for enhanced tracking. */
  supplierItemId?: Maybe<Scalars["String"]>;
  /** The new quantity of the Item being tracked. */
  totalQuantity: Scalars["Float"];
  /** The new value of the Item being tracked. */
  totalValue: Scalars["Float"];
};

export type InventoryRecordAdditionInput = {
  /** The type of correction. For example, `manualAdjustment`. */
  correctionType?: InputMaybe<Scalars["String"]>;
  /** The Facility ID that the financial adjustment is taking place in. */
  facilityId: Scalars["String"];
  /** The Item ID for the financial adjustment. */
  itemId: Scalars["String"];
  /** The financial ledger that is being adjusted. */
  ledger: Scalars["String"];
  /** The price per unit. The financial ledger will be adjusted based on the value of `price x quantity`. */
  price: Scalars["Float"];
  /** The quantity of units being added. The financial ledger will be adjusted based on the value of `price x quantity`. */
  quantity: Scalars["Float"];
  /** A reason for the correction. For example, `Joel undercounted how much we received at the loading dock.` */
  reason?: InputMaybe<Scalars["String"]>;
  /** The SupplierItem ID. Useful for enhanced tracking and discovery. */
  supplierItemId?: InputMaybe<Scalars["String"]>;
};

export type InventoryRecordDeductionInput = {
  /** The type of correction. For example, `manualAdjustment`. */
  correctionType?: InputMaybe<Scalars["String"]>;
  /** The Facility ID that the financial adjustment is taking place in. */
  facilityId: Scalars["String"];
  /** The Item ID for the financial adjustment. */
  itemId: Scalars["String"];
  /** The financial ledger that is being adjusted. */
  ledger: Scalars["String"];
  /** The quantity of units being added. The financial ledger will be adjusted based on the value of `price x quantity`. */
  quantity: Scalars["Float"];
  /** A reason for the correction. For example, `Joel overcounted how much we received at the loading dock.` */
  reason?: InputMaybe<Scalars["String"]>;
};

/** The bookkeeping configuration. */
export type InventoryStrategy = {
  /** The accounting principle to use when deducting from the specified ledger. Must be one of FIFO, LIFO, HIFO, or LOFO. */
  deduction: Scalars["String"];
  /** The ledger type to use this deduction method for. */
  ledger: Scalars["String"];
};

/** Dimensions input */
export type InventoryStrategyInput = {
  /** The accounting principle to use when deducting from the specified ledger. Must be one of FIFO, LIFO, HIFO, or LOFO. */
  deduction: Scalars["String"];
  /** The ledger type to use this deduction method for. */
  ledger: Scalars["String"];
};

/** Company Invitation Model */
export type Invitation = {
  /** Jeeny Company */
  companyId: Scalars["String"];
  createdOn: Scalars["String"];
  email: Scalars["String"];
  expiresOn?: Maybe<Scalars["String"]>;
  expiresOnEpoch: Scalars["Float"];
  /** Which facilities this user belongs to */
  facilityIds: Array<Scalars["String"]>;
  invitationCode: Scalars["String"];
  /** Role of the user eg. Admin | none */
  role: Scalars["String"];
  /** ID of the team this user belongs to */
  teamId: Scalars["String"];
  /** Name of the team this user belongs to */
  teamName: Scalars["String"];
  updatedOn: Scalars["String"];
};

export type InvitationFulfilledPromise = {
  status: Scalars["String"];
  value: Invitation;
};

export type InvitationInput = {
  email: Scalars["String"];
  /** Which facilities this user belongs to */
  facilityIds?: InputMaybe<Array<Scalars["String"]>>;
  /** Role of the user eg. Admin | none */
  role: Scalars["String"];
  /** ID of the team this user belongs to */
  teamId: Scalars["String"];
};

export type InvitationQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Invitation>;
};

export type InvitationRejectedPromise = {
  reason: Scalars["String"];
  status: Scalars["String"];
};

export type InvitationUpdateInput = {
  email: Scalars["String"];
  /** Which facilities this user belongs to */
  facilityIds?: InputMaybe<Array<Scalars["String"]>>;
  invitationCode: Scalars["String"];
  /** Role of the user eg. Admin | none */
  role?: InputMaybe<Scalars["String"]>;
  /** ID of the team this user belongs to */
  teamId?: InputMaybe<Scalars["String"]>;
};

export type InvitationsInput = {
  emails: Array<Scalars["String"]>;
  /** Which facilities this user belongs to */
  facilityIds?: InputMaybe<Array<Scalars["String"]>>;
  /** Role of the user eg. Admin | none */
  role: Scalars["String"];
  /** ID of the team this user belongs to */
  teamId: Scalars["String"];
};

/** Item model */
export type Item = {
  /** Statistics on active arrival quantities of the Item. */
  arrivals?: Maybe<Array<ItemArrival>>;
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: Maybe<Scalars["String"]>;
  /** Assign a classification level to the Item. For example, High Priority, Low Priority, 5 Stars, etc. */
  classification?: Maybe<Scalars["String"]>;
  /** The Item's color. */
  color?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** Use as a JSON string to hold custom information about the Item. */
  configuration?: Maybe<Scalars["String"]>;
  /** ID of the User that added this record. */
  createdBy?: Maybe<Scalars["String"]>;
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The main image of this Item. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: Maybe<Scalars["String"]>;
  /** Defines if the Item has an expiration day. If true the expiry date can be added to a Dynamic Container that contains this Item. */
  expirable?: Maybe<Scalars["Boolean"]>;
  /** Rules for this Item in different Facilities. */
  facilityItem?: Maybe<Array<ClonedFacilityItem>>;
  /** Item files. */
  files?: Maybe<Array<FileStorageRecord>>;
  /** The items from the same group. */
  groupItems?: Maybe<Array<Item>>;
  /** The ID of the Item. */
  id: Scalars["ID"];
  /** Item images. */
  images?: Maybe<Array<FileStorageRecord>>;
  /** Statistics on the current ledger inventories of the item. */
  inventory?: Maybe<Array<ItemInventory>>;
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an Item is used when there is not a narrower option (for example, an inventory strategy on an FacilityItem). */
  inventoryStrategies?: Maybe<Array<InventoryStrategy>>;
  /** The group of variants of the same item. */
  itemGroup?: Maybe<ItemGroup>;
  /** The group id to group variants of the same item. */
  itemGroupId?: Maybe<Scalars["String"]>;
  /** Defines if the Item can belong to a lot. If true the lot identifier can be added to a Dynamic Container that contains this Item. */
  lotable?: Maybe<Scalars["Boolean"]>;
  /** Maximum inventory stock. */
  maximumStock?: Maybe<Scalars["Float"]>;
  /** Minimum inventory stock. Alert will be sent when below. */
  minimumStock?: Maybe<Scalars["Float"]>;
  /** A memorable name. */
  name: Scalars["String"];
  /** An internal part number or code to refer to this item. Make it short and sweet. */
  partNumber?: Maybe<Scalars["String"]>;
  /** The preferred brand of this Item. */
  preferredBrand?: Maybe<Scalars["String"]>;
  /** SKU from the preferred brand of this Item. */
  preferredBrandSku?: Maybe<Scalars["String"]>;
  /** The preferred SupplierItem ID. */
  primarySupplierItemId?: Maybe<Scalars["String"]>;
  /** An external  link to the Item page. */
  productUrl?: Maybe<Scalars["String"]>;
  /** The length of time that the Item can be stored in seconds. This will be automatically added to any Dynamic Container that contains this item, providing an end of shelf life date to the container. */
  shelfLife?: Maybe<Scalars["Float"]>;
  /** Is the Item still being used? active | inactive */
  status: Scalars["String"];
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: Maybe<ItemUnitsOfMeasure>;
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
  /** Item videos. */
  videos?: Maybe<Array<FileStorageRecord>>;
};

/** Item arrival record. Reflects the active arrivals only */
export type ItemArrival = {
  /** The total amount of the Item ever delivered to this Facility. */
  deliveredQuantity: Scalars["Float"];
  /** The total dollar (or any other currency) amount of the Item ever delivered to this Facility. */
  deliveredValue: Scalars["Float"];
  /** The ID of the Facility these statistics are for. */
  facilityId: Scalars["ID"];
  /** The total amount of the Item ever ordered for this Facility. */
  quantity: Scalars["Float"];
  /** The total amount of the Item ever released and sent to the Supplier for fulfillment for this Facility. */
  releasedQuantity: Scalars["Float"];
  /** The total dollar (or any other currency) amount of the Item ever released and sent to the Supplier for fulfillment for this Facility. */
  releasedValue: Scalars["Float"];
  /** The total dollar (or any other currency) amount of the Item ever ordered for this Facility. */
  value: Scalars["Float"];
};

/** YBR app item details */
export type ItemDetails = {
  /** A list of all (closed and open) ArrivalDeliveryLineItems for this Item. */
  arrivalDeliveryLineItems: Array<ArrivalDeliveryLineItem>;
  /** A list of all (closed and open) ArrivalLineItems for this Item. */
  arrivalLineItems: Array<ArrivalLineItem>;
  /** A list of all (closed and open) ArrivalReleaseLineItems for this Item. */
  arrivalReleaseLineItems: Array<ArrivalReleaseLineItem>;
  /** A list of BidLineItems for this Item. */
  bidLineItems: Array<BidLineItem>;
  /** A list of BidRequestLineItems for this Item. */
  bidRequestLineItems: Array<BidRequestLineItem>;
  /** All of the DynamicContainers where this Item is currently stored. */
  dynamicContainers: Array<DynamicContainer>;
  /** Rules for this Item in different Facilities. */
  facilityItems: Array<FacilityItem>;
  /** InstructionSubject records linked to this record. */
  instructionSubjects: Array<InstructionSubject>;
  /** Logs on Inventory changes for this Item. */
  inventoryLogs: Array<InventoryLog>;
  /** The Item record. */
  item: Item;
  /** All of the static locations where this Item is currently stored. */
  itemStorageInventoryAreaLocations: Array<ItemStorageInventoryAreaLocation>;
  /** A list of KitTemplatePartOptions where this Item is used. Can be used to derive the KitTemplates the item is used in. */
  kitTemplatePartOptions: Array<KitTemplatePartOption>;
  /** The Product record linked to this Item. */
  product?: Maybe<Product>;
  /** All of the SupplierItems for this Item. */
  supplierItems: Array<SupplierItem>;
};

/** Item inventory record for a dynamic container */
export type ItemDynamicContainerPayload = {
  /** The ID of an ArrivalDelivery that the Items inside of this DynamicContainer came from. */
  arrivalDeliveryId?: Maybe<Scalars["String"]>;
  /** The ID of the user that created the record. */
  createdBy: Scalars["String"];
  /** When the record was created. */
  createdOn: Scalars["String"];
  /** The defaultImageUrl of the Item stored in the DynamicContainer. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** The end of shelf life date of the Items inside of this DynamicContainer. */
  endOfShelfLife?: Maybe<Scalars["String"]>;
  /** The expiration date of the Items inside of this DynamicContainer. */
  expiry?: Maybe<Scalars["String"]>;
  /** The ID of the Item stored in the DynamicContainer. */
  itemId: Scalars["ID"];
  /** The lot identifier of the Items inside of this DynamicContainer. */
  lot?: Maybe<Scalars["String"]>;
  /** The name of the Item stored in the DynamicContainer. */
  name?: Maybe<Scalars["String"]>;
  /** The partNumber of the Item stored in the DynamicContainer. */
  partNumber?: Maybe<Scalars["String"]>;
  /** A calculated value at the time the dynamic container is assigned to a location */
  pickable?: Maybe<Scalars["Boolean"]>;
  /** The price per unit (bill of items unit of measure) for the Item stored in this DynamicContainer. */
  ppu?: Maybe<Scalars["Float"]>;
  /** Is this the primary picking location for this Item in this Facility? */
  primary?: Maybe<Scalars["Boolean"]>;
  /** The quantity of this Item currently in this DynamicContainer. */
  quantity: Scalars["Float"];
  /** The unitsOfMeasure of the Item stored in the DynamicContainer. */
  unitsOfMeasure?: Maybe<ItemUnitsOfMeasure>;
  /** The ID of the user that last updated the record. */
  updatedBy: Scalars["String"];
  /** When the record was last updated. */
  updatedOn: Scalars["String"];
};

/** Input storage record for an item in a position */
export type ItemDynamicContainerPayloadInput = {
  /** The ID of an ArrivalDelivery that the Items inside of this DynamicContainer came from. */
  arrivalDeliveryId?: InputMaybe<Scalars["String"]>;
  /** The expiration date of the Items inside of this DynamicContainer. */
  expiry?: InputMaybe<Scalars["String"]>;
  /** The ID of the Item that is stored inside of the DynamicContainer. */
  itemId: Scalars["ID"];
  /** The lot identifier of the Items inside of this DynamicContainer. */
  lot?: InputMaybe<Scalars["String"]>;
  /** The price per unit of the Item inside of this DynamicContainer. */
  ppu?: InputMaybe<Scalars["Float"]>;
  /** Is this the first DynamicContainer that should be picked when the Item stored inside of it is requested? */
  primary?: InputMaybe<Scalars["Boolean"]>;
  /** The quantity of the Item inside of this DynamicContainer. */
  quantity: Scalars["Float"];
};

/** The group of variants of an item. */
export type ItemGroup = {
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy?: Maybe<Scalars["String"]>;
  /** When the ItemGroup record was created. */
  createdOn: Scalars["String"];
  /** A description of the ItemGroup. */
  description?: Maybe<Scalars["String"]>;
  /** The ID of the ItemGroup. */
  id: Scalars["ID"];
  /** The name of the ItemGroup. */
  name: Scalars["String"];
  /** When the ItemGroup record was last updated. */
  updatedOn: Scalars["String"];
};

export type ItemGroupDeleteInput = {
  /** The ID of the ItemGroup. */
  id: Scalars["ID"];
};

/** YBR app item group details */
export type ItemGroupDetails = {
  /** A list of BidLineItems for this Item. */
  bidLineItems: Array<BidLineItem>;
  /** A list of BidRequestLineItems for this Item. */
  bidRequestLineItems: Array<BidRequestLineItem>;
  /** The ItemGroup record. */
  itemGroup: ItemGroup;
  /** The items belong to the group. */
  items: Array<Item>;
};

export type ItemGroupInput = {
  /** A description of the ItemGroup. */
  description?: InputMaybe<Scalars["String"]>;
  /** The name of the ItemGroup. */
  name: Scalars["String"];
};

export type ItemGroupUpdateInput = {
  /** A description of the ItemGroup. */
  description?: InputMaybe<Scalars["String"]>;
  /** The ID of the ItemGroup. */
  id: Scalars["ID"];
  /** The name of the ItemGroup. */
  name?: InputMaybe<Scalars["String"]>;
};

/** YBR app item group details */
export type ItemGroupsWithItems = {
  /** ItemGroup records. */
  itemGroups: Array<ItemGroup>;
  /** The items belong to the groups. */
  items: Array<Item>;
};

export type ItemInput = {
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: InputMaybe<Scalars["String"]>;
  /** Assign a classification level to the Item. For example, High Priority, Low Priority, 5 Stars, etc. */
  classification?: InputMaybe<Scalars["String"]>;
  /** The Item's color. */
  color?: InputMaybe<Scalars["String"]>;
  /** Use as a JSON string to hold custom information about the Item. */
  configuration?: InputMaybe<Scalars["String"]>;
  /** The main image of this Item. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: InputMaybe<Scalars["String"]>;
  /** Defines if the Item has an expiration day. If true the expiry date can be added to a Dynamic Container that contains this Item. */
  expirable?: InputMaybe<Scalars["Boolean"]>;
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an Item is used when there is not a narrower option (for example, an inventory strategy on an FacilityItem). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** The group id to group variants of the same item. */
  itemGroupId?: InputMaybe<Scalars["String"]>;
  /** Defines if the Item can belong to a lot. If true the lot identifier can be added to a Dynamic Container that contains this Item. */
  lotable?: InputMaybe<Scalars["Boolean"]>;
  /** Maximum inventory stock. */
  maximumStock?: InputMaybe<Scalars["Float"]>;
  /** Minimum inventory stock. Alert will be sent when below. */
  minimumStock?: InputMaybe<Scalars["Float"]>;
  /** Give the Item a memorable name. */
  name: Scalars["String"];
  /** An internal part number or code to refer to this item. Make it short and sweet. */
  partNumber?: InputMaybe<Scalars["String"]>;
  /** The preferred brand of this Item. */
  preferredBrand?: InputMaybe<Scalars["String"]>;
  /** SKU from the preferred brand of this Item. */
  preferredBrandSku?: InputMaybe<Scalars["String"]>;
  /** The preferred SupplierItem ID. */
  primarySupplierItemId?: InputMaybe<Scalars["String"]>;
  /** An external link to the Item page. */
  productUrl?: InputMaybe<Scalars["String"]>;
  /** The length of time that the Item can be stored in seconds. This will be automatically added to any Dynamic Container that contains this item, providing an end of shelf life date to the container. */
  shelfLife?: InputMaybe<Scalars["Float"]>;
  /** Is the Item still being used? active | inactive */
  status: Scalars["String"];
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: InputMaybe<ItemUnitsOfMeasureInput>;
};

export type ItemInputUpdate = {
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: InputMaybe<Scalars["String"]>;
  /** Assign a classification level to the Item. For example, High Priority, Low Priority, 5 Stars, etc. */
  classification?: InputMaybe<Scalars["String"]>;
  /** The Item's color. */
  color?: InputMaybe<Scalars["String"]>;
  /** Use as a JSON string to hold custom information about the Item. */
  configuration?: InputMaybe<Scalars["String"]>;
  /** The main image of this Item. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: InputMaybe<Scalars["String"]>;
  /** Defines if the Item has an expiration day. If true the expiry date can be added to a Dynamic Container that contains this Item. */
  expirable?: InputMaybe<Scalars["Boolean"]>;
  /** The ID of the Item that you want to update. */
  id: Scalars["ID"];
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an Item is used when there is not a narrower option (for example, an inventory strategy on an FacilityItem). */
  inventoryStrategies?: InputMaybe<Array<InventoryStrategyInput>>;
  /** The group id to group variants of the same item. */
  itemGroupId?: InputMaybe<Scalars["String"]>;
  /** Defines if the Item can belong to a lot. If true the lot identifier can be added to a Dynamic Container that contains this Item. */
  lotable?: InputMaybe<Scalars["Boolean"]>;
  /** Maximum inventory stock. */
  maximumStock?: InputMaybe<Scalars["Float"]>;
  /** Minimum inventory stock. Alert will be sent when below. */
  minimumStock?: InputMaybe<Scalars["Float"]>;
  /** Give the Item a memorable name. */
  name?: InputMaybe<Scalars["String"]>;
  /** An internal part number or code to refer to this item. Make it short and sweet. */
  partNumber?: InputMaybe<Scalars["String"]>;
  /** The preferred brand of this Item. */
  preferredBrand?: InputMaybe<Scalars["String"]>;
  /** SKU from the preferred brand of this Item. */
  preferredBrandSku?: InputMaybe<Scalars["String"]>;
  /** The preferred SupplierItem ID. */
  primarySupplierItemId?: InputMaybe<Scalars["String"]>;
  /** An external link to the Item page. */
  productUrl?: InputMaybe<Scalars["String"]>;
  /** The length of time that the Item can be stored in seconds. This will be automatically added to any Dynamic Container that contains this item, providing an end of shelf life date to the container. */
  shelfLife?: InputMaybe<Scalars["Float"]>;
  /** Is the Item still being used? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: InputMaybe<ItemUnitsOfMeasureInput>;
};

/** Item inventory record */
export type ItemInventory = {
  /** The ID of the Facility these statistics are for. */
  facilityId: Scalars["ID"];
  /** The designated inventory ledger these statistics are for. */
  ledger: Scalars["String"];
  /** The current total inventory of the Item in this Facility for this ledger. */
  quantity: Scalars["Float"];
  /** The current total value of the Item in this Facility for this ledger.. */
  value: Scalars["Float"];
};

export type ItemPpuInput = {
  /** The price. */
  amount: Scalars["Float"];
  /** The date that this price was entered into the system. */
  date: Scalars["String"];
};

export type ItemPpuInputUpdate = {
  /** The price. */
  amount: Scalars["Float"];
  /** The date that this price was entered into the system. */
  date: Scalars["String"];
};

/** Price Tier */
export type ItemPpuTierInput = {
  /** A list of prices that the SupplierItem once held. */
  priceHistory: Array<ItemPpuInput>;
  /** Is this price tier still active? active | inactive */
  status: Scalars["String"];
  /** The maximum order quantity allowed for this price. */
  tierEnd?: InputMaybe<Scalars["Float"]>;
  /** The minimum order quantity needed for this price. */
  tierStart: Scalars["Float"];
};

/** Price Tier */
export type ItemPpuTierInputUpdate = {
  /** A list of prices that the SupplierItem once held. */
  priceHistory: Array<ItemPpuInputUpdate>;
  /** Is this price tier still active? active | inactive */
  status: Scalars["String"];
  /** The maximum order quantity allowed for this price. */
  tierEnd?: InputMaybe<Scalars["Float"]>;
  /** The minimum order quantity needed for this price. */
  tierStart: Scalars["Float"];
};

export type ItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Item>;
};

/** Inventory record for a storage position */
export type ItemStorageInventoryAreaLocation = {
  aisle: Scalars["String"];
  /** A list of the Arrival IDs that currently have this Item loaded into the location. */
  arrivalDeliveryIds: Array<Scalars["String"]>;
  bay: Scalars["String"];
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["ID"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The main image of this Item. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: Maybe<Scalars["String"]>;
  /** The ID of the Facility the location is in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea the location is in. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item in the location. */
  itemId: Scalars["ID"];
  /** The maximum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  maxQuantity?: Maybe<Scalars["Float"]>;
  /** The minimum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  minQuantity: Scalars["Float"];
  /** A memorable name. */
  name?: Maybe<Scalars["String"]>;
  /** An internal part number or code to refer to this item. */
  partNumber?: Maybe<Scalars["String"]>;
  position: Scalars["String"];
  /** A list of the Item with different price points that have been loaded into this position. A static location can be loaded multiple times with the same Item and each time the Item may have come with a different price. */
  ppus: Array<ItemStorageInventoryAreaPpu>;
  /** The current quantity of the Item in this location (measured with the bill of items unit of measure). */
  quantity: Scalars["Float"];
  /** Indicates refill status based on the available quantity. This field is determined by the system and not a user input. */
  refillStatus?: Maybe<Scalars["String"]>;
  shelf: Scalars["String"];
  /** Inactive status won't be refilled (active|inactive) */
  status: Scalars["String"];
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: Maybe<ItemUnitsOfMeasure>;
  /** ID of the User that updated this record. */
  updatedBy: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

/** Delete an item from a location. Works only if quantity is 0 */
export type ItemStorageInventoryAreaLocationDeleteInput = {
  /** The aisle of the location. */
  aisle: Scalars["String"];
  /** The bay of the location. */
  bay: Scalars["String"];
  /** The ID of the Facility for this location. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea for this location. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item to remove from this location. */
  itemId: Scalars["ID"];
  /** The position of the location. */
  position: Scalars["String"];
  /** The shelf of the location. */
  shelf: Scalars["String"];
};

export type ItemStorageInventoryAreaLocationGetInput = {
  /** The ID of the Facility you are requesting. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea you are requesting. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item you are requesting. */
  itemId: Scalars["ID"];
};

/** Add or remove to storage inventory */
export type ItemStorageInventoryAreaLocationHandleInput = {
  /** The aisle of the location. */
  aisle: Scalars["String"];
  /** The ID of an ArrivalDelivery associated with the physical loading or unloading of this location. */
  arrivalDeliveryId?: InputMaybe<Scalars["String"]>;
  /** The bay of the location. */
  bay: Scalars["String"];
  /** The ID of the Facility for this location. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea for this location. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item that will have its quantity adjusted. */
  itemId: Scalars["ID"];
  /** The position of the location. */
  position: Scalars["String"];
  /** The price per unit (bill of items unit of measure) of the quantity being changed. This number will be multiplied by the value of the quantity to adjust the rawItem ledger for the Item in this Facility. */
  ppu?: InputMaybe<Scalars["Float"]>;
  /** The quantity (positive or negative number) to add to the location (a negative number is the same as subtracting from the location). */
  quantity: Scalars["Float"];
  /** The shelf of the location. */
  shelf: Scalars["String"];
  /** The type of action being done. Must be one of load or unload */
  type: Scalars["String"];
};

/** Storage record for an item in a position */
export type ItemStorageInventoryAreaLocationInput = {
  /** The aisle of the location. */
  aisle: Scalars["String"];
  /** The bay of the location. */
  bay: Scalars["String"];
  /** The ID of the Facility for this location. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea for this location. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item that will be attached to this location. */
  itemId: Scalars["ID"];
  /** The maximum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The minimum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  minQuantity: Scalars["Float"];
  /** The position of the location. */
  position: Scalars["String"];
  /** The shelf of the location. */
  shelf: Scalars["String"];
  /** Inactive status won't be refilled (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

/** Storage record for an item in a position update */
export type ItemStorageInventoryAreaLocationUpdateInput = {
  /** The aisle of the location. */
  aisle: Scalars["String"];
  /** The bay of the location. */
  bay: Scalars["String"];
  /** The ID of the Facility for this location. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea for this location. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item attached to this location. */
  itemId: Scalars["ID"];
  /** The maximum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The minimum quantity of the Item (in the bill of items unit of measure) allowed in this location. */
  minQuantity?: InputMaybe<Scalars["Float"]>;
  /** The position of the location. */
  position: Scalars["String"];
  /** The shelf of the location. */
  shelf: Scalars["String"];
  /** Inactive status won't be refilled (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

/** Inventory record for a storage position */
export type ItemStorageInventoryAreaPpu = {
  price: Scalars["Float"];
  quantity: Scalars["Float"];
};

/** Item details for storage groups in a facility */
export type ItemStorageInventoryAreaRule = {
  /** The ID of the company this record belongs to. */
  companyId: Scalars["ID"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Facility that will have this rule for this Item. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that will have this rule for this Item. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item that will have this rule in this Facility. */
  itemId: Scalars["ID"];
  /** The locations of the item in pick order for static pick strategy */
  locationPriority?: Maybe<Array<Scalars["String"]>>;
  /** The maximum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  maxQuantity?: Maybe<Scalars["Float"]>;
  /** The minimum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  minQuantity: Scalars["Float"];
  /** Indicates refill status for the Facility based on the available quantity. This field is determined by the system and not a user input. */
  refillStatus?: Maybe<Scalars["String"]>;
  /** Inactive status won't be refilled (active|inactive) */
  status: Scalars["String"];
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
};

/** Storage rule record for an item in a position */
export type ItemStorageInventoryAreaRuleInput = {
  /** The ID of the Facility that will have this rule for this Item. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that will have this rule for this Item. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item that will have this rule in this Facility. */
  itemId: Scalars["ID"];
  /** The locations of the item in pick order for static pick strategy */
  locationPriority?: InputMaybe<Array<Scalars["String"]>>;
  /** The maximum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The minimum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  minQuantity: Scalars["Float"];
  /** Indicates refill status based on the minQuantity and total qty in inventory area. */
  refillStatus?: InputMaybe<Scalars["String"]>;
  /** Inactive status won't be refilled (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

export type ItemStorageInventoryAreaRuleQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<ItemStorageInventoryAreaRule>;
};

/** Storage rule record for an item in a position */
export type ItemStorageInventoryAreaRuleUpdateInput = {
  /** The ID of the Facility that will have this rule for this Item. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that will have this rule for this Item. */
  inventoryAreaId: Scalars["ID"];
  /** The ID of the Item that will have this rule in this Facility. */
  itemId: Scalars["ID"];
  /** The locations of the item in pick order for static pick strategy */
  locationPriority?: InputMaybe<Array<Scalars["String"]>>;
  /** The maximum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  maxQuantity?: InputMaybe<Scalars["Float"]>;
  /** The minimum quantity (bill of items unit of measure) allowed in this InventoryArea. */
  minQuantity?: InputMaybe<Scalars["Float"]>;
  /** Indicates refill status based on the minQuantity and total qty in inventory area. */
  refillStatus?: InputMaybe<Scalars["String"]>;
  /** Inactive status won't be refilled (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

/** Various units of measure for an item */
export type ItemUnitsOfMeasure = {
  /** This is the base unit of measure that is used in the bill of items when this Item is used in Kits or as a Product. Ex: inch, ounce, each */
  bom?: Maybe<Scalars["String"]>;
  /** This is the unit of measure that is stored in inventory or stock keeping. Ex: dynamic container, bag, container */
  inventory?: Maybe<Scalars["String"]>;
  /** This is the weight per bill of items unit of measure. Used for calculating the weight of Kits. You may use any unit of measure you want. */
  weightPerBomUom?: Maybe<Scalars["Float"]>;
};

/** Various units of measure for an item */
export type ItemUnitsOfMeasureInput = {
  /** This is the base unit of measure that is used in the bill of items when this Item is used in Kits or as a Product. Ex: inch, ounce, each */
  bom?: InputMaybe<Scalars["String"]>;
  /** This is the unit of measure that is stored in inventory or stock keeping. Ex: dynamic container, bag, container */
  inventory?: InputMaybe<Scalars["String"]>;
  /** This is the weight per bill of items unit of measure. Used for calculating the weight of Kits. You may use any unit of measure you want. */
  weightPerBomUom?: InputMaybe<Scalars["Float"]>;
};

/** Item with primarySupplierItem */
export type ItemWithPrimarySupplier = {
  /** Statistics on active arrival quantities of the Item. */
  arrivals?: Maybe<Array<ItemArrival>>;
  /** Type/group of the Item (e.g. metals, perfumes, apparel, etc.) */
  category?: Maybe<Scalars["String"]>;
  /** Assign a classification level to the Item. For example, High Priority, Low Priority, 5 Stars, etc. */
  classification?: Maybe<Scalars["String"]>;
  /** The Item's color. */
  color?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["String"];
  /** Use as a JSON string to hold custom information about the Item. */
  configuration?: Maybe<Scalars["String"]>;
  /** ID of the User that added this record. */
  createdBy?: Maybe<Scalars["String"]>;
  /** When the Facility record was created. */
  createdOn: Scalars["String"];
  /** The main image of this Item. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Describes the Item. */
  description?: Maybe<Scalars["String"]>;
  /** Defines if the Item has an expiration day. If true the expiry date can be added to a Dynamic Container that contains this Item. */
  expirable?: Maybe<Scalars["Boolean"]>;
  /** Rules for this Item in different Facilities. */
  facilityItem?: Maybe<Array<ClonedFacilityItem>>;
  /** Item files. */
  files?: Maybe<Array<FileStorageRecord>>;
  /** The items from the same group. */
  groupItems?: Maybe<Array<Item>>;
  /** The ID of the Item. */
  id: Scalars["ID"];
  /** Item images. */
  images?: Maybe<Array<FileStorageRecord>>;
  /** Statistics on the current ledger inventories of the item. */
  inventory?: Maybe<Array<ItemInventory>>;
  /** Create a list of inventory deduction strategies based on accounting principles used across the world. The system decides which deduction strategy to use based on a narrowing scheme. The inventory strategy attached to an Item is used when there is not a narrower option (for example, an inventory strategy on an FacilityItem). */
  inventoryStrategies?: Maybe<Array<InventoryStrategy>>;
  /** The group of variants of the same item. */
  itemGroup?: Maybe<ItemGroup>;
  /** The group id to group variants of the same item. */
  itemGroupId?: Maybe<Scalars["String"]>;
  /** Defines if the Item can belong to a lot. If true the lot identifier can be added to a Dynamic Container that contains this Item. */
  lotable?: Maybe<Scalars["Boolean"]>;
  /** Maximum inventory stock. */
  maximumStock?: Maybe<Scalars["Float"]>;
  /** Minimum inventory stock. Alert will be sent when below. */
  minimumStock?: Maybe<Scalars["Float"]>;
  /** A memorable name. */
  name: Scalars["String"];
  /** An internal part number or code to refer to this item. Make it short and sweet. */
  partNumber?: Maybe<Scalars["String"]>;
  /** The preferred brand of this Item. */
  preferredBrand?: Maybe<Scalars["String"]>;
  /** SKU from the preferred brand of this Item. */
  preferredBrandSku?: Maybe<Scalars["String"]>;
  /** The primary Supplier record for this item. */
  primarySupplier?: Maybe<Supplier>;
  /** The preferred SupplierItem ID. */
  primarySupplierItemId?: Maybe<Scalars["String"]>;
  /** An external  link to the Item page. */
  productUrl?: Maybe<Scalars["String"]>;
  /** The length of time that the Item can be stored in seconds. This will be automatically added to any Dynamic Container that contains this item, providing an end of shelf life date to the container. */
  shelfLife?: Maybe<Scalars["Float"]>;
  /** Is the Item still being used? active | inactive */
  status: Scalars["String"];
  /** Units of measure that are common to this Item and not how any Supplier might supply the Item. */
  unitsOfMeasure?: Maybe<ItemUnitsOfMeasure>;
  /** When the Facility record was last updated. */
  updatedOn: Scalars["String"];
  /** Item videos. */
  videos?: Maybe<Array<FileStorageRecord>>;
};

export type ItemWithPrimarySupplierQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<ItemWithPrimarySupplier>;
};

export type Items = {
  jeenyItem?: Maybe<Item>;
  quickBooksItem?: Maybe<QuickBooksItem>;
};

/** Kanban model */
export type Kanban = {
  color?: Maybe<Scalars["String"]>;
  /** User that added this entry */
  createdBy?: Maybe<Scalars["String"]>;
  createdOn: Scalars["String"];
  id: Scalars["ID"];
  item: Item;
  itemId: Scalars["String"];
  itemQuantity: Scalars["Float"];
  kanbanBin: CompanyKanbanBin;
  kanbanBinId?: Maybe<Scalars["ID"]>;
  localStorage?: Maybe<Scalars["String"]>;
  readableId: Scalars["String"];
  /** active|inactive */
  status: Scalars["String"];
  updatedOn: Scalars["String"];
  workbenchId?: Maybe<Scalars["ID"]>;
};

/** Kanban model */
export type KanbanInput = {
  color?: InputMaybe<Scalars["String"]>;
  itemId: Scalars["String"];
  itemQuantity: Scalars["Float"];
  kanbanBinId?: InputMaybe<Scalars["ID"]>;
  localStorage?: InputMaybe<Scalars["String"]>;
  /** active|inactive */
  status: Scalars["String"];
  workbenchId?: InputMaybe<Scalars["ID"]>;
};

/** Kanban model */
export type KanbanInputUpdate = {
  color?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  itemId: Scalars["String"];
  itemQuantity?: InputMaybe<Scalars["Float"]>;
  kanbanBinId?: InputMaybe<Scalars["ID"]>;
  localStorage?: InputMaybe<Scalars["String"]>;
  /** active|inactive */
  status?: InputMaybe<Scalars["String"]>;
  workbenchId?: InputMaybe<Scalars["ID"]>;
};

/** Kiosk record */
export type Kiosk = {
  /** Log of the last operator accesses */
  accessLog: Array<OperatorAccess>;
  /** The id of the kiosk's access token */
  accessTokenId?: Maybe<Scalars["String"]>;
  /** A collection of app IDs. The Kiosk is restricted to only use these apps. */
  allowedApps?: Maybe<Array<Scalars["String"]>>;
  /** The id of the company */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** When the kiosk record was created. */
  createdOn: Scalars["String"];
  /** The id of the kiosk */
  id: Scalars["String"];
  /** The unique identifier of the kiosk (FID) */
  installationCode?: Maybe<Scalars["String"]>;
  /** A custom name of the kiosk to show in the kiosk list */
  name: Scalars["String"];
  /** The properties of the kiosk */
  properties?: Maybe<Array<KioskProperty>>;
  /** The id of the kiosk's refresh token */
  refreshTokenId?: Maybe<Scalars["String"]>;
  /** The status of the kiosk. (active|inactive) */
  status: Scalars["String"];
  /** When the kiosk record was last updated. */
  updatedOn: Scalars["String"];
};

/** Company Operator Model */
export type KioskAccess = {
  createdOn: Scalars["String"];
  /** The id of the kiosk used by the operator */
  kioskId: Scalars["String"];
  /** The ID us the operator's accessToken */
  tokenId: Scalars["String"];
};

/** Kiosk record */
export type KioskInput = {
  /** A collection of app IDs. The Kiosk is restricted to only use these apps. */
  allowedApps?: InputMaybe<Array<Scalars["String"]>>;
  /** The unique identifier of the kiosk (FID) */
  installationCode?: InputMaybe<Scalars["String"]>;
  /** A custom name of the kiosk to show in the kiosk list */
  name: Scalars["String"];
};

/** Kiosk property */
export type KioskProperty = {
  /** The name of the property */
  name: Scalars["String"];
  /** The value of the property */
  value: Scalars["String"];
};

/** Kiosk property */
export type KioskPropertyInput = {
  /** The name of the property */
  name: Scalars["String"];
  /** The value of the property */
  value: Scalars["String"];
};

export type KioskQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Kiosk>;
};

/** Kiosk record */
export type KioskUpdateInput = {
  /** A collection of app IDs. The Kiosk is restricted to only use these apps. */
  allowedApps?: InputMaybe<Array<Scalars["String"]>>;
  /** The id of the kiosk */
  id: Scalars["String"];
  /** The unique identifier of the kiosk (FID) */
  installationCode?: InputMaybe<Scalars["String"]>;
  /** A custom name of the kiosk to show in the kiosk list */
  name?: InputMaybe<Scalars["String"]>;
  /** The properties of the kiosk */
  properties?: InputMaybe<Array<KioskPropertyInput>>;
  /** The status of the kiosk. (active|inactive) */
  status?: InputMaybe<Scalars["String"]>;
};

export type KitTemplate = {
  /** A category or grouping that this Kit fits in to. */
  category?: Maybe<Scalars["String"]>;
  /** A memorable code - something short and sweet. */
  code: Scalars["String"];
  /** The ID of the company the Kit belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that added this record. */
  createdBy: Scalars["String"];
  /** The date the Kit record was created. */
  createdOn: Scalars["String"];
  /** The base dimensions of this Kit. */
  defaultDimensions?: Maybe<KitTemplateDimensions>;
  /** The main image of the Kit. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Description of the Kit. */
  description?: Maybe<Scalars["String"]>;
  /** The ID of the Kit. */
  id: Scalars["String"];
  /** Instructions for assembling the Kit. You may use your own format and save it as a JSON string. */
  instructions?: Maybe<Scalars["String"]>;
  /** A memorable name for the Kit. */
  name: Scalars["String"];
  /** Is the Kit still in use? active | inactive */
  status: Scalars["String"];
  /** The date the Kit record was last updated. */
  updatedOn: Scalars["String"];
};

export type KitTemplateBomEntry = {
  item: Item;
  pricePerBomUom: Scalars["Float"];
  quantity: Scalars["Float"];
  unitQuantity: Scalars["Float"];
};

export type KitTemplateDetails = {
  /** InstructionSubject records linked to this record. */
  instructionSubjects: Array<InstructionSubject>;
  kitTemplate: KitTemplate;
  kitTemplatePartOptions: Array<KitTemplatePartOption>;
  kitTemplateParts: Array<KitTemplatePart>;
};

export type KitTemplateDimensions = {
  /** Default depth of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  height?: Maybe<Scalars["Float"]>;
  /** Default height of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  length?: Maybe<Scalars["Float"]>;
  /** How many dimensions does this KitTemplate have? For example, a fish tank would have three dimensions. */
  numberOfDimensions: Scalars["Float"];
  /** Default width of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  width?: Maybe<Scalars["Float"]>;
};

export type KitTemplateDimensionsInput = {
  /** Default depth of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  height?: InputMaybe<Scalars["Float"]>;
  /** Default height of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  length?: InputMaybe<Scalars["Float"]>;
  /** How many dimensions does this KitTemplate have? For example, a fish tank would have three dimensions. */
  numberOfDimensions: Scalars["Int"];
  /** Default width of the KitTemplate. Use your desired unit of measure. When this Kit is used as a part in other Kits it can be given a different measurement. When used in another Kit the dimensions can be either static or dynamic (determined by the parent Kit). */
  width?: InputMaybe<Scalars["Float"]>;
};

export type KitTemplatePart = {
  /** The ID of the company the KitPart belongs to. */
  companyId: Scalars["String"];
  /** The date the KitPart record was created. */
  createdOn: Scalars["String"];
  /** The ID of the KitPartOption set as the default. */
  defaultOptionId: Scalars["String"];
  /** All of the dimensions of this KitPart. */
  dimensions?: Maybe<KitTemplatePartDimensions>;
  /** The ID of the KitPart */
  id: Scalars["String"];
  /** A descriptive name for the KitPart. The KitPart can have more than one option so you may not always want to name it what you are going to set the default option to. */
  name: Scalars["String"];
  /** The ID of the Kit that the KitPart belongs to. */
  parentId: Scalars["String"];
  /** The number of pieces of this KitPart used in the Kit. */
  quantity: Scalars["Float"];
  /** Is the KitPart still in use? active | inactive */
  status: Scalars["String"];
  /** The date the KitPart record was last updated. */
  updatedOn: Scalars["String"];
};

export type KitTemplatePartDimensionCalculation = {
  /** The static dimension of the KitPart. For example, regardless of the dimensions of the parent Kit this KitPart always has a length of 24 inches. */
  base?: Maybe<Scalars["Float"]>;
  /** The number to multiply the base dimension of the KitPart when the corresponding dimension of the parent Kit changes. Let's use a desk as a Kit example. Regardless of the length of the desk the top of the desk will have the same length so the multiplier is 1. Let's now imagine that the desk actually has two parts for the top of the desk. One of those parts is always 1/4 of the length of the desk itself so its parent multiplier is going to be 0.25. */
  parentMultiplier?: Maybe<Scalars["Float"]>;
  /** The number to add to the dimension of the KitPart after multipling the parent Kit dimension by the parentMultiplier. For example, if the top of the desk always hangs two inches over the side of the desk itself the parentOffset would be 2. This can also be a negative number if necessary and it will act as if you are subtracing instead of adding. */
  parentOffset?: Maybe<Scalars["Float"]>;
  /** The nature of the calculation for this part: static | dynamic. If it is static then only `base` should be filled out. If it is `dynamic` then only the `parentMultiplier` and `parentOffset` fields should be filled out. A dynamic part's measurements are determined by its parent Kit. The final measurement is `base x parentMultiplier + parentOffset`. */
  type: Scalars["String"];
};

export type KitTemplatePartDimensionCalculationInput = {
  /** The static dimension of the KitPart. For example, regardless of the dimensions of the parent Kit this KitPart always has a length of 24 inches. */
  base?: InputMaybe<Scalars["Float"]>;
  /** The number to multiply the base dimension of the KitPart when the corresponding dimension of the parent Kit changes. Let's use a desk as a Kit example. Regardless of the length of the desk the top of the desk will have the same length so the multiplier is 1. Let's now imagine that the desk actually has two parts for the top of the desk. One of those parts is always 1/4 of the length of the desk itself so its parent multiplier is going to be 0.25. */
  parentMultiplier?: InputMaybe<Scalars["Float"]>;
  /** The number to add to the dimension of the KitPart after multipling the parent Kit dimension by the parentMultiplier. For example, if the top of the desk always hangs two inches over the side of the desk itself the parentOffset would be 2. This can also be a negative number if necessary and it will act as if you are subtracing instead of adding. */
  parentOffset?: InputMaybe<Scalars["Float"]>;
  /** The nature of the calculation for this part: static | dynamic. If it is static then only `base` should be filled out. If it is `dynamic` then only the `parentMultiplier` and `parentOffset` fields should be filled out. A dynamic part's measurements are determined by its parent Kit. The final measurement is `base x parentMultiplier + parentOffset`. */
  type: Scalars["String"];
};

export type KitTemplatePartDimensions = {
  /** The calculation will determine the height of the KitTemplatePart. Use your desired unit of measure. */
  height?: Maybe<KitTemplatePartDimensionCalculation>;
  /** The calculation will determine the length of the KitTemplatePart. Use your desired unit of measure. */
  length?: Maybe<KitTemplatePartDimensionCalculation>;
  /** How many dimensions does this KitTemplatePart have? For example, the top of a desk would have two dimensions that you care about. */
  numberOfDimensions: Scalars["Float"];
  /** The calculation will determine the width of the KitTemplatePart. Use your desired unit of measure. */
  width?: Maybe<KitTemplatePartDimensionCalculation>;
};

export type KitTemplatePartDimensionsInput = {
  /** The calculation will determine the height of the KitTemplatePart. Use your desired unit of measure. */
  height?: InputMaybe<KitTemplatePartDimensionCalculationInput>;
  /** The calculation will determine the length of the KitTemplatePart. Use your desired unit of measure. */
  length?: InputMaybe<KitTemplatePartDimensionCalculationInput>;
  /** How many dimensions does this KitTemplatePart have? For example, the top of a desk would have two dimensions that you care about. */
  numberOfDimensions: Scalars["Int"];
  /** The calculation will determine the width of the KitTemplatePart. Use your desired unit of measure. */
  width?: InputMaybe<KitTemplatePartDimensionCalculationInput>;
};

export type KitTemplatePartOption = {
  /** Detailed information on the Item or Kit that this KitPartOption represents. */
  childDetails: KitTemplatePartOptionChildDetails;
  /** The ID of the Item or Kit for the default option of this part. */
  childId: Scalars["String"];
  /** Is the the KitPartOption an Item or Kit?. Must be Item or Kit. */
  childType: Scalars["String"];
  /** The ID of the company the KitPartOption belongs to. */
  companyId: Scalars["String"];
  /** The date the KitPartOption record was created. */
  createdOn: Scalars["String"];
  /** The ID of the KitPartOption. */
  id: Scalars["String"];
  /** The ID of the parent Kit that the KitPart you want to add a KitPartOption to belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart this is an option for. */
  partId: Scalars["String"];
  /** The date the KitPartOption record was last updated. */
  updatedOn: Scalars["String"];
};

export type KitTemplatePartOptionChildDetails = {
  /** The code of the Kit that the KitPartOption represents. If the KitPartOption represents an Item this will be null. */
  code?: Maybe<Scalars["String"]>;
  /** The defaultImageUrl of the Item or Kit that the KitPartOption represents. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** The name of the Item or Kit that the KitPartOption represents. */
  name: Scalars["String"];
  /** The part number of the Item that the KitPartOption represents. If the KitPartOption represents another Kit this will be null. */
  partNumber?: Maybe<Scalars["String"]>;
};

export type KitTemplateQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<KitTemplate>;
};

export type KitTemplateTree = {
  /** A list of all Items used as KitPartOptions in the parent Kit or any descendant Kit. */
  items: Array<Item>;
  /** A list of all KitPartOptions in the parent Kit and any descendant Kit. */
  kitTemplatePartOptions: Array<KitTemplatePartOption>;
  /** A list of all KitParts in the parent Kit and any descendant Kit. */
  kitTemplateParts: Array<KitTemplatePart>;
  /** A list of all Kits used as KitPartOptions in the parent Kit or any descendant Kit. */
  kitTemplates: Array<KitTemplate>;
  /** The ID of the Kit you asked for the tree of. */
  rootKitTemplateId: Scalars["String"];
};

export type Ledger = {
  /** The description of the ledger. */
  description?: Maybe<Scalars["String"]>;
  /** The human readable name of the ledger. */
  label: Scalars["String"];
  /** The name of the ledger. */
  value: Scalars["String"];
};

export type LedgerInput = {
  /** The description of the ledger. */
  description?: InputMaybe<Scalars["String"]>;
  /** The human readable name of the ledger. */
  label: Scalars["String"];
  /** The name of the ledger. */
  value: Scalars["String"];
};

/** The operator model on log */
export type LogOperator = {
  /** User's first name */
  firstName: Scalars["String"];
  /** The id of the operator  */
  id: Scalars["ID"];
  /** User's last name */
  lastName: Scalars["String"];
};

/** Mobile app modules list */
export type MobileAccessControls = {
  analytics: Scalars["Boolean"];
  chat: Scalars["Boolean"];
  delivery: Scalars["Boolean"];
  facility: Scalars["Boolean"];
  inventory: Scalars["Boolean"];
  kanbanScanner: Scalars["Boolean"];
  maintenance: Scalars["Boolean"];
  orders: Scalars["Boolean"];
  receiving: Scalars["Boolean"];
  shipping: Scalars["Boolean"];
  team: Scalars["Boolean"];
  waterSpiderScanner: Scalars["Boolean"];
};

export type Mutation = {
  /** Add an InstructionTemplateStep to the InstructionTemplate. */
  addInstructionTemplateStepToInstructionTemplate?: Maybe<InstructionTemplateStep>;
  /** Add a new InventoryRecord with a positive quantity to a ledger for an item. This will increase the quantity of this item in the given ledger. Ledger is a free form field. You can create as many ledgers as you wish.  */
  addInventoryRecord?: Maybe<InventoryRecord>;
  /** Adds an option (Item or another Kit) to a KitPart */
  addKitTemplatePartOptionToKitTemplatePart?: Maybe<KitTemplatePartOption>;
  /** Add a Part to the Kit. After a Part is added you can attach a default Item or Kit to it as well as additional options. */
  addKitTemplatePartToKitTemplate?: Maybe<KitTemplatePart>;
  /** Adjust the payload's quantity in a dynamic container */
  adjustDynamicContainerPayloadQuantity?: Maybe<DynamicContainer>;
  /** Attach DynamicContainer to a location */
  attachDynamicContainer?: Maybe<DynamicContainer>;
  /** Cancel a subscription at the end of billing period */
  cancelSubscription: SubscriptionCancellation;
  /** Creates an AppUsageLog */
  createAppUsageLog: AppUsageLog;
  /** Creates a new Arrival. */
  createArrival?: Maybe<Arrival>;
  /** Creates a new ArrivalDelivery. */
  createArrivalDelivery?: Maybe<ArrivalDelivery>;
  /** Creates a new ArrivalDeliveryLineItem. */
  createArrivalDeliveryLineItem?: Maybe<ArrivalDeliveryLineItem>;
  /** Creates a ArrivalLineItem for an Arrival. */
  createArrivalLineItem?: Maybe<ArrivalLineItem>;
  /** Creates a new ArrivalRelease. */
  createArrivalRelease?: Maybe<ArrivalRelease>;
  /** Creates an ArrivalReleaseLineItem in an ArrivalRelease. */
  createArrivalReleaseLineItem?: Maybe<ArrivalReleaseLineItem>;
  /** Create a new Bid. */
  createBid?: Maybe<Bid>;
  /** Create a bid line item */
  createBidLineItem?: Maybe<BidLineItem>;
  /** Create a new bid request */
  createBidRequest?: Maybe<BidRequest>;
  /** Create a bid request line item */
  createBidRequestLineItem?: Maybe<BidRequestLineItem>;
  /** Create a checkout session */
  createCheckoutSession: CheckoutSession;
  /** Create a new company */
  createCompany?: Maybe<Company>;
  /** Creates a new App. */
  createCustomApp: App;
  /** Create a customer portal */
  createCustomerPortal: CustomerPortal;
  /** Creates a Departure. */
  createDeparture?: Maybe<Departure>;
  /** Creates a DepartureLineItem. */
  createDepartureLineItem?: Maybe<DepartureLineItem>;
  /** Creates a DeparturePick. */
  createDeparturePick: DeparturePick;
  /** Creates a DeparturePickList. */
  createDeparturePickList?: Maybe<DeparturePickList>;
  /** Creates a DeparturePickListLineItem. */
  createDeparturePickListLineItem: DeparturePickListLineItem;
  /** Create a new DynamicContainer */
  createDynamicContainer?: Maybe<DynamicContainer>;
  /** Creates a new Event. */
  createEvent: Event;
  /** Creates a new External Product. */
  createExternalProduct: ExternalProduct;
  /** Creates a new Facility. */
  createFacility?: Maybe<Facility>;
  /** Creates a new ruleset for an Item in a Facility. */
  createFacilityItem?: Maybe<FacilityItem>;
  /** Creates a new headless user record */
  createHeadlessUser: HeadlessUser;
  /** Creates a new InstructionSubject. */
  createInstructionSubject: InstructionSubject;
  /** Creates a new InstructionTemplate. */
  createInstructionTemplate?: Maybe<InstructionTemplate>;
  /** Create a new InventoryArea. */
  createInventoryArea?: Maybe<FacilityInventoryArea>;
  /** Creates a new invitation record */
  createInvitation?: Maybe<Invitation>;
  /** Creates new invitations record */
  createInvitations?: Maybe<Array<ResultListByStatus>>;
  /** Creates a new Item. */
  createItem?: Maybe<Item>;
  /** Creates a new ItemGroup. */
  createItemGroup: ItemGroup;
  /** Attach an Item to an already created InventoryAreaLocation. Only one Item can be attached to an InventoryAreaLocation at one time. This will create a static location. Dynamic containers will not be able to be placed at the location. */
  createItemStorageInventoryAreaLocation?: Maybe<ItemStorageInventoryAreaLocation>;
  /** Creates a ruleset for an Item in an InventoryArea. */
  createItemStorageInventoryAreaRule?: Maybe<ItemStorageInventoryAreaRule>;
  /** Create a new kanban */
  createKanban?: Maybe<Kanban>;
  /** Create a new Kiosk. */
  createKiosk?: Maybe<Kiosk>;
  /** Creates a new KitTemplate. */
  createKitTemplate?: Maybe<KitTemplate>;
  /** Creates a new operator record */
  createOperator?: Maybe<Operator>;
  /** Creates a new Product. */
  createProduct?: Maybe<Product>;
  /** Create quickBooks integration */
  createQuickBooksIntegration?: Maybe<CreateQuickBooksIntegration>;
  /** Create a new StorageLocation. */
  createStorageInventoryAreaLocation?: Maybe<StorageInventoryAreaLocation>;
  /** Create a new InventoryAreaRule. */
  createStorageInventoryAreaRule?: Maybe<StorageInventoryAreaRule>;
  /** Creates a new Supplier. */
  createSupplier?: Maybe<Supplier>;
  /** Creates a new SupplierItem. */
  createSupplierItem?: Maybe<SupplierItem>;
  /** Creates a new team */
  createTeam?: Maybe<Team>;
  createWorkbench?: Maybe<Workbench>;
  createWorkbenchHistoryLog?: Maybe<Workbench>;
  /** Add a new InventoryRecord with a negative quantity to a ledger for an item. This will decrease the quantity of this item in the given ledger. Ledger is a free form field. You can create as many ledgers as you wish.  */
  deductInventoryRecord?: Maybe<Array<InventoryRecord>>;
  /** Deletes an ArrivalDelivery. */
  deleteArrivalDelivery?: Maybe<ArrivalDelivery>;
  /** Deletes an ArrivalLineItem in an Arrival. An ArrivalLineItem cannot be deleted if it has a released or delivered quantity above 0. */
  deleteArrivalLineItem?: Maybe<ArrivalLineItem>;
  /** Deletes an ArrivalRelease. An ArrivalRelease cannot be deleted if it has associated ArrivalReleaseLineItems. */
  deleteArrivalRelease?: Maybe<ArrivalRelease>;
  /** Delete an ArrivalReleaseLineItem in an ArrivalRelease. */
  deleteArrivalReleaseLineItem?: Maybe<ArrivalReleaseLineItem>;
  /** Delete a Bid. */
  deleteBid: Bid;
  /** Delete a BidLineItem. */
  deleteBidLineItem: BidLineItem;
  /** Delete a BidRequest. */
  deleteBidRequest: BidRequest;
  /** Delete a BidRequestLineItem. */
  deleteBidRequestLineItem: BidRequestLineItem;
  /** Deletes a DepartureLineItem. You cannot delete a DepartureLineItem that is in a DeparturePickList or DeparturePick. */
  deleteDepartureLineItem: DepartureLineItem;
  /** Deletes a DeparturePick. You cannot delete a DeparturePick that already has picked Products. */
  deleteDeparturePick: DeparturePick;
  /** This will delete a DeparturePickLineItem from a DeparturePick but it WILL NOT reverse any changes made to a financial ledger or the physical quantity in a static location or DynamicContainer. */
  deleteDeparturePickLineItem: DeparturePickLineItem;
  /** Deletes a DeparturePickList. You cannot delete a DeparturePickList that has DeparturePickListItems still in it. */
  deleteDeparturePickList: DeparturePickList;
  /** Deletes a DeparturePickListLineItem. You cannot delete a DeparturePickListLineItem that has already been picked. */
  deleteDeparturePickListLineItem: DeparturePickListLineItem;
  /** Delete a device  */
  deleteDevice?: Maybe<Device>;
  /** Delete a DynamicContainer */
  deleteDynamicContainer?: Maybe<DynamicContainer>;
  /** Removes a Event */
  deleteEvent: Event;
  /** Delete an External Product. */
  deleteExternalProduct: ExternalProduct;
  /** Removes an InstructionSubject. */
  deleteInstructionSubject: InstructionSubject;
  /** Removes an InstructionStep an InstructionTemplate. */
  deleteInstructionTemplateStepFromInstructionTemplate?: Maybe<InstructionTemplateStep>;
  /** Deletes a InventoryArea. */
  deleteInventoryArea?: Maybe<Array<FacilityInventoryArea>>;
  /** Delete a invitation  */
  deleteInvitation?: Maybe<Invitation>;
  /** Detach all Items from the Group and delete the group. */
  deleteItemGroup: ItemGroup;
  /** Detach an Item from the InventoryAreaLocation. This will allow a new Item to take its spot. */
  deleteItemStorageInventoryAreaLocation?: Maybe<ItemStorageInventoryAreaLocation>;
  /** Delete a Kiosk. */
  deleteKiosk: Kiosk;
  /** Removes a KitPart and all of its associated KitPartOptions from a Kit. */
  deleteKitTemplatePartFromKitTemplate?: Maybe<KitTemplatePart>;
  /** Removes an option from a KitPart. */
  deleteKitTemplatePartOptionFromKitTemplatePart: KitTemplatePartOption;
  /** Delete a StorageLocation */
  deleteStorageInventoryAreaLocation?: Maybe<StorageInventoryAreaLocation>;
  /** Detach DynamicContainer from a location */
  detachDynamicContainer?: Maybe<DynamicContainer>;
  /** Creates an InstructionExecution from an InstructionTemplate. */
  executeInstructionTemplate: InstructionExecution;
  /** Increase or decrease the quantity of an Item at a specific InventoryAreaLocation. */
  handleItemStorageInventoryAreaLocation?: Maybe<ItemStorageInventoryAreaLocation>;
  /** Installs an official App. */
  installOfficialApp: OfficialAppInstallation;
  jeenyAddKitTemplatePartWithOptionToKitTemplate?: Maybe<KitTemplateDetails>;
  /** Creates a new company user record by company alias */
  joinCompany?: Maybe<CompanyUser>;
  /** Creates a new company user record by company alias */
  joinCompanyByInvitation?: Maybe<CompanyUser>;
  /** Load payload to a DynamicContainer */
  loadDynamicContainer?: Maybe<DynamicContainer>;
  /** Pick from a dynamic container or location */
  pickStorageLocation?: Maybe<StorageInventoryPickRecord>;
  pickStorageLocationForDeparture: DeparturePickLineItem;
  /** Preview invoices of a billing cycle type update */
  previewBillingCycleTypeUpdate: BillingCycleTypeUpdatePreview;
  /** Preview invoices of a subscription update */
  previewSubscriptionUpdate: SubscriptionUpdatePreview;
  /** Resends an existing invitation */
  resendInvitation?: Maybe<Invitation>;
  /** Resume a cancelled a subscription if still within the same billing period */
  resumeSubscription: SubscriptionResumption;
  /** Revoke quickBooks integration */
  revokeQuickBooksIntegration?: Maybe<RevokeQuickBooksIntegration>;
  /** Updates an Arrival. */
  saveArrival?: Maybe<Arrival>;
  /** Updates an ArrivalDelivery. */
  saveArrivalDelivery?: Maybe<ArrivalDelivery>;
  /** Updates an ArrivalDeliveryLineItem. */
  saveArrivalDeliveryLineItem?: Maybe<ArrivalDeliveryLineItem>;
  /** Updates an ArrivalLineItem. */
  saveArrivalLineItem?: Maybe<ArrivalLineItem>;
  /** Updates an ArrivalRelease. */
  saveArrivalRelease?: Maybe<ArrivalRelease>;
  /** Updates an ArrivalReleaseLineItem. */
  saveArrivalReleaseLineItem?: Maybe<ArrivalReleaseLineItem>;
  /** Updates a Bid. */
  saveBid?: Maybe<Bid>;
  /** Updates a BidLineItem. */
  saveBidLineItem?: Maybe<BidLineItem>;
  /** Updates a BidRequest. */
  saveBidRequest?: Maybe<BidRequest>;
  /** Updates a BidRequestLineItem. */
  saveBidRequestLineItem?: Maybe<BidRequestLineItem>;
  /** Update a company */
  saveCompany?: Maybe<Company>;
  /** Update a company user */
  saveCompanyUser?: Maybe<CompanyUser>;
  /** Update a company user */
  saveCompanyUserAdmin?: Maybe<CompanyUser>;
  /** Updates an App. */
  saveCustomApp: App;
  /** Updates a Departure. */
  saveDeparture?: Maybe<Departure>;
  /** Updates a DepartureLineItem. */
  saveDepartureLineItem: DepartureLineItem;
  /** Updates a DeparturePickList. */
  saveDeparturePickList: DeparturePickList;
  /** Updates a DeparturePickListLineItem. */
  saveDeparturePickListLineItem: DeparturePickListLineItem;
  /** Update a company user */
  saveDevice?: Maybe<Device>;
  /** Save a DynamicContainer */
  saveDynamicContainer?: Maybe<DynamicContainer>;
  /** Updates a Event. */
  saveEvent: Event;
  /** Updates a Facility. */
  saveFacility?: Maybe<Facility>;
  /** Updates the ruleset for an Item in a Facility. */
  saveFacilityItem?: Maybe<FacilityItem>;
  /** Updates a headless user record */
  saveHeadlessUser?: Maybe<HeadlessUser>;
  /** Updates an InstructionExecution. */
  saveInstructionExecution: InstructionExecution;
  /** Updates an InstructionSubject. */
  saveInstructionSubject: InstructionSubject;
  /** Updates an InstructionTemplate. */
  saveInstructionTemplate?: Maybe<InstructionTemplate>;
  /** Updates a InstructionStep */
  saveInstructionTemplateStep: InstructionTemplateStep;
  /** Updates an InventoryArea. */
  saveInventoryArea?: Maybe<Array<FacilityInventoryArea>>;
  /** Update a company user */
  saveInvitation?: Maybe<Invitation>;
  /** Updates an Item. */
  saveItem?: Maybe<Item>;
  /** Updates an ItemGroup. */
  saveItemGroup: ItemGroup;
  /** Updates an Item's ruleset in the given InventoryArea. */
  saveItemStorageInventoryAreaRule?: Maybe<ItemStorageInventoryAreaRule>;
  /** Save a kanban */
  saveKanban?: Maybe<Kanban>;
  /** Updates a Kiosk. */
  saveKiosk?: Maybe<Kiosk>;
  /** Updates a KitTemplate. */
  saveKitTemplate?: Maybe<KitTemplate>;
  /** Updates a KitPart */
  saveKitTemplatePart: KitTemplatePart;
  /** Updates a operator record */
  saveOperator?: Maybe<SafeOperator>;
  /** Updates a Product. */
  saveProduct?: Maybe<Product>;
  /** Save the selected quickBooks accounts */
  saveQuickBooksAccounts?: Maybe<QuickBooksIntegrationAccounts>;
  /** Save a StorageLocation. */
  saveStorageInventoryAreaLocation?: Maybe<StorageInventoryAreaLocation>;
  /** Updates a Supplier. */
  saveSupplier?: Maybe<Supplier>;
  /** Updates a SupplierItem. */
  saveSupplierItem?: Maybe<SupplierItem>;
  /** Update a given team */
  saveTeam?: Maybe<Team>;
  /** Update a given user */
  saveUser: User;
  saveWorkbench?: Maybe<Workbench>;
  saveWorkbenchHistoryLog?: Maybe<Workbench>;
  /** Sets the default option (Item or Kit) for a KitPart. It must be an option that was previously added using the addKitTemplatePartOptionToKitTemplatePart mutation. */
  setDefaultKitTemplatePartOption: KitTemplatePart;
  /** Submits an InstructionExecutionStep. */
  submitInstructionExecutionStep: InstructionExecutionStepSubmission;
  /** Switch two DynamicContainers for a StorageLocation. The DynamicContainer that is already in the StorageLocation must be empty. */
  switchDynamicContainers?: Maybe<DynamicContainer>;
  /** Sync quickBooks */
  syncQuickBooks?: Maybe<QuickBooksSyncList>;
  /** Uninstalls an installed official App. */
  uninstallOfficialApp: OfficialAppInstallation;
  /** Update the type of billing cycle */
  updateBillingCycleType: BillingCycleTypeUpdate;
  /** Change the minimum and maximum quantities for the Item at this specific InventoryAreaLocation. */
  updateItemStorageInventoryAreaLocation?: Maybe<ItemStorageInventoryAreaLocation>;
  /** Update an InventoryAreaRule. */
  updateStorageInventoryAreaRule?: Maybe<StorageInventoryAreaRule>;
  /** Update the number of seats in a subscription */
  updateSubscription: SubscriptionUpdate;
};

export type MutationAddInstructionTemplateStepToInstructionTemplateArgs = {
  data: AddInstructionTemplateStepToInstructionTemplateInput;
};

export type MutationAddInventoryRecordArgs = {
  data: InventoryRecordAdditionInput;
};

export type MutationAddKitTemplatePartOptionToKitTemplatePartArgs = {
  data: AddKitTemplatePartOptionToKitTemplatePartInput;
};

export type MutationAddKitTemplatePartToKitTemplateArgs = {
  data: AddKitTemplatePartToKitTemplateInput;
};

export type MutationAdjustDynamicContainerPayloadQuantityArgs = {
  data: DynamicContainerAdjustPayloadQuantityInput;
};

export type MutationAttachDynamicContainerArgs = {
  data: DynamicContainerAttachInput;
};

export type MutationCreateAppUsageLogArgs = {
  data: AppUsageLogInput;
};

export type MutationCreateArrivalArgs = {
  data: ArrivalInput;
};

export type MutationCreateArrivalDeliveryArgs = {
  data: ArrivalDeliveryInput;
};

export type MutationCreateArrivalDeliveryLineItemArgs = {
  data: ArrivalDeliveryLineItemInput;
};

export type MutationCreateArrivalLineItemArgs = {
  data: ArrivalLineItemInput;
};

export type MutationCreateArrivalReleaseArgs = {
  data: ArrivalReleaseInput;
};

export type MutationCreateArrivalReleaseLineItemArgs = {
  data: ArrivalReleaseLineItemInput;
};

export type MutationCreateBidArgs = {
  data: BidInput;
};

export type MutationCreateBidLineItemArgs = {
  data: BidLineItemInput;
};

export type MutationCreateBidRequestArgs = {
  data: BidRequestInput;
};

export type MutationCreateBidRequestLineItemArgs = {
  data: BidRequestLineItemInput;
};

export type MutationCreateCheckoutSessionArgs = {
  data: PaymentCreateCheckoutSessionInput;
};

export type MutationCreateCompanyArgs = {
  data: CompanyInput;
};

export type MutationCreateCustomAppArgs = {
  data: CustomAppInput;
};

export type MutationCreateCustomerPortalArgs = {
  data: PaymentCreateCustomerPortalInput;
};

export type MutationCreateDepartureArgs = {
  data: DepartureInput;
};

export type MutationCreateDepartureLineItemArgs = {
  data: DepartureLineItemInput;
};

export type MutationCreateDeparturePickArgs = {
  data: DeparturePickInput;
};

export type MutationCreateDeparturePickListArgs = {
  data: DeparturePickListInput;
};

export type MutationCreateDeparturePickListLineItemArgs = {
  data: DeparturePickListLineItemInput;
};

export type MutationCreateDynamicContainerArgs = {
  data: DynamicContainerInput;
};

export type MutationCreateEventArgs = {
  data: EventInput;
};

export type MutationCreateExternalProductArgs = {
  data: ExternalProductInput;
};

export type MutationCreateFacilityArgs = {
  data: FacilityInput;
};

export type MutationCreateFacilityItemArgs = {
  data: FacilityItemInput;
};

export type MutationCreateInstructionSubjectArgs = {
  data: InstructionSubjectInput;
};

export type MutationCreateInstructionTemplateArgs = {
  data: InstructionTemplateInput;
};

export type MutationCreateInventoryAreaArgs = {
  inventoryArea: FacilityInventoryAreaInput;
  rule: InventoryAreaRuleInput;
};

export type MutationCreateInvitationArgs = {
  data: InvitationInput;
};

export type MutationCreateInvitationsArgs = {
  data: InvitationsInput;
};

export type MutationCreateItemArgs = {
  data: ItemInput;
};

export type MutationCreateItemGroupArgs = {
  data: ItemGroupInput;
};

export type MutationCreateItemStorageInventoryAreaLocationArgs = {
  data: ItemStorageInventoryAreaLocationInput;
};

export type MutationCreateItemStorageInventoryAreaRuleArgs = {
  data: ItemStorageInventoryAreaRuleInput;
};

export type MutationCreateKanbanArgs = {
  data: KanbanInput;
};

export type MutationCreateKioskArgs = {
  data: KioskInput;
};

export type MutationCreateKitTemplateArgs = {
  data: CreateKitTemplateInput;
};

export type MutationCreateOperatorArgs = {
  data: OperatorInput;
};

export type MutationCreateProductArgs = {
  data: ProductInput;
};

export type MutationCreateQuickBooksIntegrationArgs = {
  data: CreateQuickBooksIntegrationInput;
};

export type MutationCreateStorageInventoryAreaLocationArgs = {
  data: StorageInventoryAreaLocationInput;
};

export type MutationCreateStorageInventoryAreaRuleArgs = {
  data: StorageInventoryAreaRuleInput;
};

export type MutationCreateSupplierArgs = {
  data: SupplierInput;
};

export type MutationCreateSupplierItemArgs = {
  data: SupplierItemInput;
};

export type MutationCreateTeamArgs = {
  data: TeamInput;
};

export type MutationCreateWorkbenchArgs = {
  data: WorkbenchInput;
};

export type MutationCreateWorkbenchHistoryLogArgs = {
  data: WorkbenchHistoryLogInput;
};

export type MutationDeductInventoryRecordArgs = {
  data: InventoryRecordDeductionInput;
};

export type MutationDeleteArrivalDeliveryArgs = {
  data: ArrivalDeliveryDeleteInput;
};

export type MutationDeleteArrivalLineItemArgs = {
  data: ArrivalLineItemDeleteInput;
};

export type MutationDeleteArrivalReleaseArgs = {
  data: ArrivalReleaseDeleteInput;
};

export type MutationDeleteArrivalReleaseLineItemArgs = {
  data: ArrivalReleaseLineItemDeleteInput;
};

export type MutationDeleteBidArgs = {
  bidRequestId: Scalars["String"];
  id: Scalars["String"];
};

export type MutationDeleteBidLineItemArgs = {
  bidId: Scalars["String"];
  bidRequestId: Scalars["String"];
  itemId: Scalars["String"];
};

export type MutationDeleteBidRequestArgs = {
  id: Scalars["String"];
};

export type MutationDeleteBidRequestLineItemArgs = {
  bidRequestId: Scalars["String"];
  itemId: Scalars["String"];
};

export type MutationDeleteDepartureLineItemArgs = {
  departureId: Scalars["String"];
  productId: Scalars["String"];
};

export type MutationDeleteDeparturePickArgs = {
  departureId: Scalars["String"];
  id: Scalars["String"];
};

export type MutationDeleteDeparturePickLineItemArgs = {
  departureId: Scalars["String"];
  pickId: Scalars["String"];
  productId: Scalars["String"];
};

export type MutationDeleteDeparturePickListArgs = {
  departureId: Scalars["String"];
  id: Scalars["String"];
};

export type MutationDeleteDeparturePickListLineItemArgs = {
  departureId: Scalars["String"];
  pickListId: Scalars["String"];
  productId: Scalars["String"];
};

export type MutationDeleteDeviceArgs = {
  id: Scalars["String"];
};

export type MutationDeleteDynamicContainerArgs = {
  data: DynamicContainerDeleteInput;
};

export type MutationDeleteEventArgs = {
  id: Scalars["String"];
};

export type MutationDeleteExternalProductArgs = {
  externalProductId: Scalars["String"];
  productId: Scalars["String"];
};

export type MutationDeleteInstructionSubjectArgs = {
  data: DeleteInstructionSubjectInput;
};

export type MutationDeleteInstructionTemplateStepFromInstructionTemplateArgs = {
  data: DeleteInstructionTemplateStepFromInstructionTemplateInput;
};

export type MutationDeleteInventoryAreaArgs = {
  data: FacilityInventoryAreaDeleteInput;
};

export type MutationDeleteInvitationArgs = {
  invitationCode: Scalars["String"];
};

export type MutationDeleteItemGroupArgs = {
  data: ItemGroupDeleteInput;
};

export type MutationDeleteItemStorageInventoryAreaLocationArgs = {
  data: ItemStorageInventoryAreaLocationDeleteInput;
};

export type MutationDeleteKioskArgs = {
  id: Scalars["String"];
};

export type MutationDeleteKitTemplatePartFromKitTemplateArgs = {
  data: DeleteKitTemplatePartFromKitTemplateInput;
};

export type MutationDeleteKitTemplatePartOptionFromKitTemplatePartArgs = {
  data: DeleteKitTemplatePartOptionFromKitTemplatePartInput;
};

export type MutationDeleteStorageInventoryAreaLocationArgs = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  facilityId: Scalars["String"];
  inventoryAreaId: Scalars["String"];
  position: Scalars["String"];
  shelf: Scalars["String"];
};

export type MutationDetachDynamicContainerArgs = {
  data: DynamicContainerDetachInput;
};

export type MutationExecuteInstructionTemplateArgs = {
  data: ExecuteInstructionTemplateInput;
};

export type MutationHandleItemStorageInventoryAreaLocationArgs = {
  data: ItemStorageInventoryAreaLocationHandleInput;
};

export type MutationInstallOfficialAppArgs = {
  appId: Scalars["String"];
};

export type MutationJeenyAddKitTemplatePartWithOptionToKitTemplateArgs = {
  data: AddKitTemplatePartWithOptionToKitTemplateInput;
};

export type MutationJoinCompanyArgs = {
  companyAlias: Scalars["String"];
};

export type MutationJoinCompanyByInvitationArgs = {
  invitationCode: Scalars["String"];
};

export type MutationLoadDynamicContainerArgs = {
  data: DynamicContainerLoadInput;
};

export type MutationPickStorageLocationArgs = {
  facilityId: Scalars["String"];
  inventoryAreaLocation: InventoryAreaLocationInput;
  itemId: Scalars["String"];
  ledger?: InputMaybe<Scalars["String"]>;
  quantity: Scalars["Float"];
};

export type MutationPickStorageLocationForDepartureArgs = {
  data: PickStorageLocationForDepartureInput;
};

export type MutationPreviewBillingCycleTypeUpdateArgs = {
  data: PaymentPreviewBillingCycleTypeUpdate;
};

export type MutationPreviewSubscriptionUpdateArgs = {
  data: PaymentPreviewSubscriptionUpdate;
};

export type MutationResendInvitationArgs = {
  id: Scalars["String"];
};

export type MutationSaveArrivalArgs = {
  data: ArrivalUpdateInput;
};

export type MutationSaveArrivalDeliveryArgs = {
  data: ArrivalDeliveryUpdateInput;
};

export type MutationSaveArrivalDeliveryLineItemArgs = {
  data: ArrivalDeliveryLineItemUpdateInput;
};

export type MutationSaveArrivalLineItemArgs = {
  data: ArrivalLineItemUpdateInput;
};

export type MutationSaveArrivalReleaseArgs = {
  data: ArrivalReleaseUpdateInput;
};

export type MutationSaveArrivalReleaseLineItemArgs = {
  data: ArrivalReleaseLineItemUpdateInput;
};

export type MutationSaveBidArgs = {
  bidRequestId: Scalars["String"];
  data: BidUpdateInput;
  id: Scalars["String"];
};

export type MutationSaveBidLineItemArgs = {
  bidId: Scalars["String"];
  bidRequestId: Scalars["String"];
  data: BidLineItemUpdateInput;
  itemId: Scalars["String"];
};

export type MutationSaveBidRequestArgs = {
  data: BidRequestUpdateInput;
  id: Scalars["String"];
};

export type MutationSaveBidRequestLineItemArgs = {
  bidRequestId: Scalars["String"];
  data: BidRequestLineItemUpdateInput;
  itemId: Scalars["String"];
};

export type MutationSaveCompanyArgs = {
  data: CompanyInputUpdate;
};

export type MutationSaveCompanyUserArgs = {
  data: CompanyUserUpdateInput;
};

export type MutationSaveCompanyUserAdminArgs = {
  data: CompanyUserAdminUpdateInput;
  userId: Scalars["String"];
};

export type MutationSaveCustomAppArgs = {
  data: CustomAppUpdateInput;
};

export type MutationSaveDepartureArgs = {
  data: DepartureUpdateInput;
};

export type MutationSaveDepartureLineItemArgs = {
  data: DepartureLineItemUpdateInput;
};

export type MutationSaveDeparturePickListArgs = {
  data: DeparturePickListUpdateInput;
};

export type MutationSaveDeparturePickListLineItemArgs = {
  data: DeparturePickListLineItemUpdateInput;
};

export type MutationSaveDeviceArgs = {
  data: DeviceUpdateInput;
  id: Scalars["String"];
};

export type MutationSaveDynamicContainerArgs = {
  data: DynamicContainerUpdateInput;
};

export type MutationSaveEventArgs = {
  data: EventUpdateInput;
};

export type MutationSaveFacilityArgs = {
  data: FacilityInputUpdate;
};

export type MutationSaveFacilityItemArgs = {
  data: FacilityItemUpdateInput;
};

export type MutationSaveHeadlessUserArgs = {
  data: HeadlessUserInputUpdate;
};

export type MutationSaveInstructionExecutionArgs = {
  data: InstructionExecutionUpdateInput;
};

export type MutationSaveInstructionSubjectArgs = {
  data: UpdateInstructionSubjectInput;
};

export type MutationSaveInstructionTemplateArgs = {
  data: InstructionTemplateUpdateInput;
};

export type MutationSaveInstructionTemplateStepArgs = {
  data: UpdateInstructionTemplateStepInput;
};

export type MutationSaveInventoryAreaArgs = {
  data: FacilityInventoryAreaUpdateInput;
};

export type MutationSaveInvitationArgs = {
  data: InvitationUpdateInput;
};

export type MutationSaveItemArgs = {
  data: ItemInputUpdate;
};

export type MutationSaveItemGroupArgs = {
  data: ItemGroupUpdateInput;
};

export type MutationSaveItemStorageInventoryAreaRuleArgs = {
  data: ItemStorageInventoryAreaRuleUpdateInput;
};

export type MutationSaveKanbanArgs = {
  data: KanbanInputUpdate;
};

export type MutationSaveKioskArgs = {
  data: KioskUpdateInput;
};

export type MutationSaveKitTemplateArgs = {
  data: UpdateKitTemplateInput;
};

export type MutationSaveKitTemplatePartArgs = {
  data: UpdateKitTemplatePartInput;
};

export type MutationSaveOperatorArgs = {
  data: OperatorInputUpdate;
};

export type MutationSaveProductArgs = {
  data: ProductUpdateInput;
};

export type MutationSaveQuickBooksAccountsArgs = {
  data: CreateQuickBooksAccountsInput;
};

export type MutationSaveStorageInventoryAreaLocationArgs = {
  data: StorageInventoryAreaLocationUpdateInput;
};

export type MutationSaveSupplierArgs = {
  data: SupplierInputUpdate;
};

export type MutationSaveSupplierItemArgs = {
  data: SupplierItemInputUpdate;
};

export type MutationSaveTeamArgs = {
  data: TeamInputUpdate;
};

export type MutationSaveUserArgs = {
  data: UserInputUpdate;
};

export type MutationSaveWorkbenchArgs = {
  data: WorkbenchInputUpdate;
};

export type MutationSaveWorkbenchHistoryLogArgs = {
  data: WorkbenchHistoryLogInputUpdate;
};

export type MutationSetDefaultKitTemplatePartOptionArgs = {
  data: SetDefaultKitTemplatePartOptionInput;
};

export type MutationSubmitInstructionExecutionStepArgs = {
  data: SubmitInstructionExecutionStepInput;
};

export type MutationSwitchDynamicContainersArgs = {
  dynamicContainer1Id: Scalars["String"];
  dynamicContainer2Id: Scalars["String"];
  facilityId: Scalars["String"];
};

export type MutationSyncQuickBooksArgs = {
  data: CreateQuickBooksSyncInput;
};

export type MutationUninstallOfficialAppArgs = {
  appId: Scalars["String"];
};

export type MutationUpdateBillingCycleTypeArgs = {
  data: PaymentUpdateBillingCycleType;
};

export type MutationUpdateItemStorageInventoryAreaLocationArgs = {
  data: ItemStorageInventoryAreaLocationUpdateInput;
};

export type MutationUpdateStorageInventoryAreaRuleArgs = {
  data: StorageInventoryAreaRuleUpdateInput;
};

export type MutationUpdateSubscriptionArgs = {
  data: PaymentUpdateSubscription;
};

/** Contractor customer note model. Want to add createdBy to this later */
export type Note = {
  /** User id that added the note */
  createdBy: Scalars["String"];
  /** Date note created */
  createdOn: Scalars["String"];
  id: Scalars["ID"];
  note: Scalars["String"];
};

/** OfficialAppInstallation record */
export type OfficialAppInstallation = {
  /** The ID of the OfficialApp. */
  appId: Scalars["String"];
  /** The ID of the company the Product belongs to. */
  companyId: Scalars["String"];
  /** ID of the User that created this app. */
  createdBy: Scalars["String"];
  /** The date the OfficialApp record was created. */
  createdOn: Scalars["String"];
  /** Is the app currently installed. active|inactive */
  status: Scalars["String"];
  /** The date the OfficialApp record was last updated. */
  updatedOn: Scalars["String"];
};

/** Operator with details record */
export type Operator = {
  /** DEPRECATED */
  accessLog: Array<DeviceAccess>;
  /** Jeeny Company */
  companyId: Scalars["String"];
  createdBy: Scalars["String"];
  createdOn: Scalars["String"];
  /** Log of the last device accesses */
  deviceAccessLog: Array<DeviceAccess>;
  /** User's email address */
  email?: Maybe<Scalars["String"]>;
  /** Which facilities this operator belongs to */
  facilityIds: Array<Scalars["String"]>;
  /** The number of failed login attempts since the last successful one */
  failedLoginAttempts: Scalars["Float"];
  /** User's first name */
  firstName: Scalars["String"];
  /** Jeeny operator */
  id: Scalars["ID"];
  /** Log of the last kiosk accesses */
  kioskAccessLog: Array<KioskAccess>;
  /** User's prefered language */
  language: Scalars["String"];
  /** The last time when the operator attempted to log in from a device */
  lastLoginAttempt?: Maybe<Scalars["String"]>;
  /** User's last name */
  lastName: Scalars["String"];
  /** User's mobile phone */
  mobilePhone?: Maybe<Scalars["String"]>;
  /** User's pin code */
  pinCode: Scalars["String"];
  /** Role of the operator eg. plumber | none */
  role: Scalars["String"];
  seenTutorials: Array<Scalars["String"]>;
  /** Is operator still allowed access. active | inactive | suspended */
  status: Scalars["String"];
  /** ID of the team this operator belongs to */
  teamId: Scalars["String"];
  /** Name of the team this operator belongs to */
  teamName: Scalars["String"];
  updatedOn: Scalars["String"];
};

/** The operator's access log entry */
export type OperatorAccess = {
  createdOn: Scalars["String"];
  operator: LogOperator;
};

export type OperatorInput = {
  /** User email address */
  email?: InputMaybe<Scalars["String"]>;
  /** Which facilities this operator belongs to */
  facilityIds: Array<Scalars["String"]>;
  /** User first name */
  firstName: Scalars["String"];
  /** User prefered language */
  language?: InputMaybe<Scalars["String"]>;
  /** User last name */
  lastName: Scalars["String"];
  /** User mobile phone */
  mobilePhone?: InputMaybe<Scalars["String"]>;
  /** Role of the operator eg. plumber | none */
  role: Scalars["String"];
  seenTutorials: Array<Scalars["String"]>;
  /** ID of the team this operator belongs to */
  teamId: Scalars["String"];
};

export type OperatorInputUpdate = {
  /** User email address */
  email?: InputMaybe<Scalars["String"]>;
  /** Which facilities this operator belongs to */
  facilityIds?: InputMaybe<Array<Scalars["String"]>>;
  /** User first name */
  firstName?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** User prefered language */
  language?: InputMaybe<Scalars["String"]>;
  /** User last name */
  lastName?: InputMaybe<Scalars["String"]>;
  /** User mobile phone */
  mobilePhone?: InputMaybe<Scalars["String"]>;
  /** Role of the operator eg. plumber | none */
  role?: InputMaybe<Scalars["String"]>;
  seenTutorials?: InputMaybe<Array<Scalars["String"]>>;
  /** Is operator still allowed access. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** ID of the team this operator belongs to */
  teamId?: InputMaybe<Scalars["String"]>;
};

export type PartOptionSelection = {
  partIds: Array<Scalars["String"]>;
  selectedOptionId: Scalars["String"];
};

/** PartialInventoryAreaLocation record */
export type PartialInventoryAreaLocation = {
  aisle?: Maybe<Scalars["String"]>;
  bay?: Maybe<Scalars["String"]>;
  /** The ID of the InventoryArea record. */
  inventoryAreaId?: Maybe<Scalars["ID"]>;
  shelf?: Maybe<Scalars["String"]>;
};

/** Partial storage location. This input was designed for use in facilities and warehouses. */
export type PartialInventoryAreaLocationInput = {
  aisle?: InputMaybe<Scalars["String"]>;
  bay?: InputMaybe<Scalars["String"]>;
  /** The ID of the InventoryArea that the location is in. */
  inventoryAreaId?: InputMaybe<Scalars["ID"]>;
  shelf?: InputMaybe<Scalars["String"]>;
};

/** Payment Model */
export type Payment = {
  /** The current billing cycle. monthly|yearly */
  billingCycleType: Scalars["String"];
  /** The next billing cycle. monthly|yearly */
  billingCycleTypeNextPeriod: Scalars["String"];
  /** Will this subscription cancel when the current period ends */
  cancelAtPeriodEnd: Scalars["Boolean"];
  companyId: Scalars["ID"];
  createdOn: Scalars["String"];
  /** When the billing cycle ends */
  currentPeriodEnd: Scalars["String"];
  /** When the grace period ends */
  currentPeriodEndsWithGrace: Scalars["String"];
  /** Are there unresolved payment problems on the account */
  hasFailedPayment: Scalars["Boolean"];
  /** Is the subscription cancelled */
  isCancelled: Scalars["Boolean"];
  /** ID to identify customer on stripe */
  stripeCustomerId: Scalars["String"];
  /** ID to identify subscription on stripe */
  stripeSubscriptionId: Scalars["String"];
  updatedOn: Scalars["String"];
  /** How many available ERP seats are there in the current billing cycle */
  userSeatNumber: Scalars["Float"];
  /** How many available ERP seats will there in the next billing cycle */
  userSeatNumberNextPeriod: Scalars["Float"];
};

export type PaymentCreateCheckoutSessionInput = {
  /** What is the billing cycle period? month|year */
  billingCycleType: Scalars["String"];
  /** Email address for invoices and payment related emails */
  billingEmail: Scalars["String"];
  /** On cancellation, the checkout session redirect to this URL. */
  cancelUrl?: InputMaybe<Scalars["String"]>;
  /** On success, the checkout session redirect to this URL. */
  successUrl?: InputMaybe<Scalars["String"]>;
};

export type PaymentCreateCustomerPortalInput = {
  /** After leaving the customer portal, it redirects to this URL. */
  returnUrl?: InputMaybe<Scalars["String"]>;
};

export type PaymentPreviewBillingCycleTypeUpdate = {
  /** Desired type of billing cycle. month|year */
  billingCycleType: Scalars["String"];
};

export type PaymentPreviewSubscriptionUpdate = {
  /** Desired number of erp user seats */
  userSeats: Scalars["Float"];
};

export type PaymentUpdateBillingCycleType = {
  /** Desired type of billing cycle. month|year */
  billingCycleType: Scalars["String"];
};

export type PaymentUpdateSubscription = {
  /** Desired number of erp user seats */
  userSeats: Scalars["Float"];
};

/** App access control list */
export type PfepAccessControls = {
  all: AccessType;
  arrivals: AccessType;
  items: AccessType;
  kanbanScanner: AccessType;
  kits: AccessType;
  products: AccessType;
  suppliers: AccessType;
};

/** Picking a storage location for a departure */
export type PickStorageLocationForDepartureInput = {
  /** The ID of the Departure that this Pick belongs to. */
  departureId: Scalars["String"];
  /** The physical location where the Product is being picked from. */
  inventoryAreaLocation: InventoryAreaLocationInput;
  /** The ID of the Item being picked. */
  itemId: Scalars["String"];
  /** The financial ledger to subtract from. */
  ledger: Scalars["String"];
  /** The ID of the Pick for this physical picking action. */
  pickId: Scalars["String"];
  /** The quantity of the Product picked. */
  quantity: Scalars["Float"];
};

/** Presigned post */
export type PresignedPost = {
  /** JSON string of the fields that must be included as hidden inputs on the form. */
  fields?: Maybe<Scalars["String"]>;
  /** The URL that should be used as the action of the form. */
  url: Scalars["String"];
};

export type Prices = {
  monthlySeatPrice: Scalars["Float"];
  yearlySeatPrice: Scalars["Float"];
};

export type Product = {
  /** The ID of the Item or Kit that this Product represents. */
  childId: Scalars["String"];
  /** Does this Product represent an Item or a Kit. This value must be equal to Item or Kit. */
  childType: Scalars["String"];
  /** The ID of the company the Product belongs to. */
  companyId: Scalars["String"];
  /** The date the Product record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Product. */
  id: Scalars["String"];
  /** The name of the product. Something that will get people to buy! */
  name: Scalars["String"];
  /** A product SKU that may be used across the organization in different systems. */
  sku?: Maybe<Scalars["String"]>;
  /** Is the Product still being used? active | inactive */
  status: Scalars["String"];
  /** The date the Product record was last updated. */
  updatedOn: Scalars["String"];
};

export type ProductDetails = {
  externalProducts: Array<ExternalProduct>;
  product: Product;
};

/** Product creation */
export type ProductInput = {
  /** The ID of the Item or Kit that this Product represents. */
  childId: Scalars["String"];
  /** Does this Product represent an Item or a Kit. This value must be equal to Item or Kit. */
  childType: Scalars["String"];
  /** The name of the product. */
  name: Scalars["String"];
  /** A product SKU that may be used across the organization in different systems. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Is the Product still being used? active | inactive */
  status: Scalars["String"];
};

export type ProductQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Product>;
};

/** Product update */
export type ProductUpdateInput = {
  /** The ID of the product you are updating. */
  id: Scalars["String"];
  /** The name of the product. */
  name?: InputMaybe<Scalars["String"]>;
  /** A product SKU that may be used across the organization in different systems. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Is the Product still being used? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** App access control list */
export type ProductionAccessControls = {
  all: AccessType;
  equipment: AccessType;
  facilities: AccessType;
  productionLines: AccessType;
  toolings: AccessType;
  trainings?: Maybe<AccessType>;
  workbenches: AccessType;
  workcells: AccessType;
};

export type Query = {
  /** Returns BidRequests given ids. */
  batchGetBidRequests: Array<BidRequest>;
  /** Returns bids for given ids. */
  batchGetBids: Array<Bid>;
  /** Returns all custom and installed official apps */
  getApps: Apps;
  /** Returns all custom and installed official apps that are allowed on a Kiosk. */
  getAppsForKiosk: Apps;
  /** Returns an Arrival given an ID. */
  getArrivalDetails?: Maybe<ArrivalDetailsWithStatus>;
  /** Returns all ArrivalReleases. */
  getArrivalReleases?: Maybe<ArrivalReleaseQueryResponse>;
  /** Returns all ArrivalReleases for a given Item. */
  getArrivalReleasesByItem: Array<ArrivalRelease>;
  /** Returns all ArrivalReleases for a given Supplier. */
  getArrivalReleasesBySupplier: ArrivalReleaseQueryResponse;
  /** Returns all ArrivalReleases with a status field indicating whether the ArrivalRelease is open or closed. */
  getArrivalReleasesWithStatus?: Maybe<ArrivalReleaseWithStatusQueryResponse>;
  /** Returns all Arrivals. */
  getArrivals?: Maybe<ArrivalQueryResponse>;
  /** Returns all Arrivals for a given Item. */
  getArrivalsByItem?: Maybe<Array<Arrival>>;
  /** Returns all Arrivals for a given Supplier. */
  getArrivalsBySupplier: ArrivalQueryResponse;
  /** Returns a Bid given an id. */
  getBid?: Maybe<Bid>;
  /** Returns a BidLineItem given a bidId, a bidRequestId and an itemId. */
  getBidLineItem?: Maybe<BidLineItem>;
  /** Returns BidLineItems given a bidRequestId and a bidId. */
  getBidLineItems: BidLineItemQueryResponse;
  /** Returns a BidLineItemQueryResponse given an itemId. */
  getBidLineItemsByItem: BidLineItemQueryResponse;
  /** Returns BidLineItems given an itemGroupId. */
  getBidLineItemsByItemGroup: Array<BidLineItem>;
  /** Returns a BidLineItemQueryResponse given a supplierId. */
  getBidLineItemsBySupplier: BidLineItemQueryResponse;
  /** Returns BidRequest given an id. */
  getBidRequest?: Maybe<BidRequest>;
  /** Returns an BidRequest with associated records given an id. */
  getBidRequestDetails?: Maybe<BidRequestDetails>;
  /** Returns BidRequestLineItem given a bidRequestId and itemId. */
  getBidRequestLineItem?: Maybe<BidRequestLineItem>;
  /** Returns BidRequestLineItems given a bidRequestId. */
  getBidRequestLineItems: BidRequestLineItemQueryResponse;
  /** Returns BidRequestLineItems given an itemId. */
  getBidRequestLineItemsByItem: BidRequestLineItemQueryResponse;
  /** Returns BidRequests given a company. */
  getBidRequests: BidRequestQueryResponse;
  /** Returns Bids given a bidRequestId. */
  getBids: BidQueryResponse;
  /** Returns Bids given a supplierId. */
  getBidsBySupplier: BidQueryResponse;
  /** Returns all companies */
  getCompanies: CompanyQueryResponse;
  /** Returns company list for a given user */
  getCompaniesByUser?: Maybe<Array<Company>>;
  /** Returns a company given an id */
  getCompany?: Maybe<Company>;
  /** Returns a company user for the current user */
  getCompanyUser?: Maybe<CompanyUser>;
  /** Returns a company user for the current user */
  getCompanyUserAdmin?: Maybe<CompanyUser>;
  /** Returns all companyUsers */
  getCompanyUsers?: Maybe<CompanyUserQueryResponse>;
  /** Returns users from a given team */
  getCompanyUsersByTeamId?: Maybe<CompanyUserQueryResponse>;
  /** Returns an custom App given an ID. */
  getCustomApp?: Maybe<App>;
  /** Returns a Departure given an ID. */
  getDeparture?: Maybe<Departure>;
  /** Returns a Departure with all associated records given an ID. */
  getDepartureDetails?: Maybe<DepartureDetails>;
  /** Returns all the DepartureLineItems for a given Item. */
  getDepartureLineItemsByItemId?: Maybe<DepartureLineItemQueryResponse>;
  /** Returns all DeparturePickListLineItems for a specific Item. */
  getDeparturePickListLineItemsByItemId: DeparturePickListLineItemQueryResponse;
  /** Returns all DeparturePickLists. */
  getDeparturePickLists: DeparturePickListQueryResponse;
  /** Returns all DeparturePickLists for a specific Facility. */
  getDeparturePickListsByFacilityId: DeparturePickListQueryResponse;
  /** Returns all Departures. */
  getDepartures?: Maybe<DepartureQueryResponse>;
  /** Returns all the Departures for a customer/receiver. */
  getDeparturesByExternalCustomerId?: Maybe<DepartureQueryResponse>;
  /** Returns a device */
  getDevice?: Maybe<Device>;
  /** Returns a device access token */
  getDeviceAccessToken?: Maybe<Scalars["String"]>;
  /** Returns all devices */
  getDevices?: Maybe<DeviceQueryResponse>;
  /** Get a DynamicContainer. */
  getDynamicContainer?: Maybe<DynamicContainer>;
  /** Get all DynamicContainers. */
  getDynamicContainers: DynamicContainerQueryResponse;
  /** Get DynamicContainers by expiry */
  getDynamicContainersByExpiry?: Maybe<DynamicContainerQueryResponse>;
  /** Returns a Event given an ID. */
  getEvent?: Maybe<Event>;
  /** Returns an Event and associated records given an ID. This includes all of the InstructionExecutions. */
  getEventDetails?: Maybe<EventDetails>;
  /** Returns all Products. */
  getEvents: EventsBetweenDates;
  /** Returns all Products. */
  getEventsByAssignee: EventsBetweenDates;
  /** Returns a External Product given an id. */
  getExternalProduct?: Maybe<ExternalProduct>;
  /** Returns External Products given a external product id. */
  getExternalProducts: ExternalProductQueryResponse;
  /** Returns External Products given a product id. */
  getExternalProductsByProductId: ExternalProductQueryResponse;
  /** Returns all Facilities. */
  getFacilities?: Maybe<FacilityQueryResponse>;
  /** Returns a Facility given an ID. */
  getFacility?: Maybe<Facility>;
  /** Returns a Facility with details given an id. This query will return an object with all rules, locations, and dynamic containers belonging to the Facility. */
  getFacilityDetails?: Maybe<FacilityDetails>;
  /** Returns an Items ruleset in the given Facility. */
  getFacilityItem?: Maybe<FacilityItem>;
  /** Returns the rulesets for all Items in the given Facility. */
  getFacilityItemsByFacility: FacilityItemQueryResponse;
  /** Returns the rulesets for an Item across all facilities. */
  getFacilityItemsByItem: FacilityItemQueryResponse;
  /** Uploaded files */
  getFilesForKitTemplate?: Maybe<Array<FileStorageRecord>>;
  /** Returns a headless user given an id */
  getHeadlessUser?: Maybe<HeadlessUser>;
  /** Returns all headless users */
  getHeadlessUsers?: Maybe<HeadlessUserQueryResponse>;
  /** Get media uploaded directly to the hub. */
  getHubImages?: Maybe<Array<FileStorageRecord>>;
  /** Get media uploaded directly to the hub. */
  getHubVideos?: Maybe<Array<FileStorageRecord>>;
  /** Uploaded images */
  getImagesForKitTemplate?: Maybe<Array<FileStorageRecord>>;
  /** Returns an installed official App given an ID. */
  getInstalledOfficialApp?: Maybe<InstalledApp>;
  /** Returns an InstructionExecution and associated records given an ID. This includes all of the InstructionExecutionSteps and InstructionExecutionStepSubmissions. */
  getInstructionExecutionDetails?: Maybe<InstructionExecutionDetails>;
  /** Returns all InstructionExecutions for a given event */
  getInstructionExecutionsByEventId: InstructionExecutionQueryResponse;
  /** Returns all InstructionExecutions for a given executorId */
  getInstructionExecutionsByExecutorId?: Maybe<InstructionExecutionQueryResponse>;
  /** Returns all InstructionExecutions for a given executorId */
  getInstructionExecutionsByInstructionTemplateId: InstructionExecutionQueryResponse;
  /** Returns all InstructionExecutions for a given trigger */
  getInstructionExecutionsByTrigger: InstructionExecutionQueryResponse;
  /** Returns all InstructionSubjects for a given subject.  */
  getInstructionSubjectsBySubject: InstructionSubjectQueryResponse;
  /** Returns all InstructionSubjects for a given subject with their corresponding templates. */
  getInstructionSubjectsBySubjectWithTemplate: InstructionSubjectWithTemplateQueryResponse;
  /** Returns all InstructionSubjects for a given subject.  */
  getInstructionSubjectsByTemplate: InstructionSubjectQueryResponse;
  /** Returns an InstructionTemplate given an ID. */
  getInstructionTemplate?: Maybe<InstructionTemplate>;
  /** Returns a InstructionTemplate and associated records given an ID. This includes all of the InstructionTemplateSteps. */
  getInstructionTemplateDetails?: Maybe<InstructionTemplateDetails>;
  /** Returns all InstructionTemplates. */
  getInstructionTemplates?: Maybe<InstructionTemplateQueryResponse>;
  /** Returns a InventoryArea plus the InventoryAreaRule given an ID. */
  getInventoryArea?: Maybe<StorageInventoryArea>;
  /** Returns all the InventoryLogs for an item. */
  getInventoryLogs: InventoryLogQueryResponse;
  /** Returns an invitation */
  getInvitation?: Maybe<Invitation>;
  /** Returns all invitations */
  getInvitations?: Maybe<InvitationQueryResponse>;
  /** Returns invitations from a given team */
  getInvitationsByTeamId?: Maybe<InvitationQueryResponse>;
  /** Returns an Item given an ID. */
  getItem?: Maybe<Item>;
  /** Returns an Item with associated records given an id. Includes rules, locations, products, arrivals, kits, and supplier Items. */
  getItemDetails?: Maybe<ItemDetails>;
  /** Returns an ItemGroup with all details given an ID. */
  getItemGroupDetails: ItemGroupDetails;
  /** Returns all ItemGroups and Items belong those groups given an ID. */
  getItemGroupsWithItems: ItemGroupsWithItems;
  /** Returns inventory history for an item given an id. */
  getItemHistory: Array<InventoryHistoryRecord>;
  /** Returns all the current static locations of an Item in all inventory areas. This will not return dynamic containers that contain this Item. */
  getItemStorageInventoryAreaLocation?: Maybe<ItemStorageInventoryAreaLocation>;
  /** Returns the rule for an Item in a given InventoryArea. */
  getItemStorageInventoryAreaRule?: Maybe<ItemStorageInventoryAreaRule>;
  /** Returns all the rules for an Item across all facilities and InventoryAreas. */
  getItemStorageInventoryAreaRules: ItemStorageInventoryAreaRuleQueryResponse;
  /** Returns all Items. */
  getItems?: Maybe<ItemQueryResponse>;
  /** Returns inventory history for all item. */
  getItemsHistory: Array<InventoryHistoryRecord>;
  /** Returns all Items with their primary Supplier attached. */
  getItemsWithPrimarySupplier?: Maybe<ItemWithPrimarySupplierQueryResponse>;
  /** Get a kanban based off id */
  getKanban?: Maybe<Kanban>;
  /** Get all kanbans */
  getKanbans?: Maybe<Array<Kanban>>;
  /** Get all kanbans for a given item */
  getKanbansByItemId?: Maybe<Array<Kanban>>;
  /** Get all kanbans */
  getKanbansByWorkbenchId?: Maybe<Array<Kanban>>;
  /** Returns a Kiosk given an id. */
  getKiosk?: Maybe<Kiosk>;
  /** Returns Kiosks given a bidRequestId and a bidId. */
  getKiosks: KioskQueryResponse;
  /** Returns a list of all the Items used in the Kit (including Items used in descendant Kits). */
  getKitTemplateBom?: Maybe<Array<KitTemplateBomEntry>>;
  /** Returns a KitTemplate and associated records given an ID. This includes all of the KitParts and KitPartOptions. */
  getKitTemplateDetails?: Maybe<KitTemplateDetails>;
  /** Returns all of the descendant Kits, descendant Items, Parts, and PartOptions for the entire hieararchy of the root Kit. As an example this query can be used to create a tree view of a Kit (when one Kit includes other Kits). */
  getKitTemplateTree?: Maybe<KitTemplateTree>;
  /** Returns all KitTemplates. */
  getKitTemplates?: Maybe<KitTemplateQueryResponse>;
  /** Returns the image record list of an item */
  getMedia?: Maybe<Array<FileStorageRecord>>;
  /** Returns an official App given an ID. */
  getOfficialApp?: Maybe<App>;
  /** Returns all official Apps. */
  getOfficialApps: Array<App>;
  /** Returns a operator given an id */
  getOperator?: Maybe<SafeOperator>;
  /** Returns an operator's pin code */
  getOperatorPinCode?: Maybe<Scalars["String"]>;
  /** Returns all operators */
  getOperators?: Maybe<SafeOperatorQueryResponse>;
  /** Returns all operators */
  getOperatorsByDevice?: Maybe<Array<SafeOperator>>;
  /** Returns all operators by team id */
  getOperatorsByTeamId?: Maybe<SafeOperatorQueryResponse>;
  getPayment?: Maybe<Payment>;
  /** Upload presigned post */
  getPresignedPost?: Maybe<PresignedPost>;
  /** Upload presigned post */
  getPresignedPostForApp: PresignedPost;
  getPrices: Prices;
  /** Returns a Product given an ID. */
  getProduct?: Maybe<Product>;
  /** Returns a Product with associated records given an id. */
  getProductDetails?: Maybe<ProductDetails>;
  /** Returns all Products. */
  getProducts?: Maybe<ProductQueryResponse>;
  /** Get quickBooks account list */
  getQuickBooksAccounts?: Maybe<QuickBooksAccounts>;
  /** Get quickBooks auth url */
  getQuickBooksAuthUrl: QuickBooksAuthUrl;
  /** Get quickBooks and jeeny item lists */
  getQuickBooksItemSyncList?: Maybe<QuickBooksItemSyncList>;
  /** Get quickBooks and jeeny supplier lists */
  getQuickBooksSupplierSyncList?: Maybe<QuickBooksSupplierSyncList>;
  /** Returns all custom and installed official apps recently used by a given user. */
  getRecentApps: Apps;
  /** Returns all custom and installed official apps recently used by a given user that are allowed on a Kiosk. */
  getRecentAppsForKiosk: Apps;
  /** Get saved quickBooks accounts */
  getSavedQuickBooksAccounts?: Maybe<QuickBooksIntegrationAccounts>;
  getSeatStatus?: Maybe<SeatStatus>;
  /** Returns shopify integrations for a company. */
  getShopifyIntegrations: SafeShopifyIntegrationQueryResponse;
  /** Returns a shopify product for a given shop and external product id. */
  getShopifyProduct?: Maybe<ShopifyProduct>;
  /** Returns shopify products for a given shop. */
  getShopifyProducts: Array<ShopifyProduct>;
  /** Get a StorageLocation. This storage type is great for facilities and warehouses. */
  getStorageInventoryAreaLocation?: Maybe<StorageInventoryAreaLocation>;
  /** Get all StorageLocations based off of a partial location. This storage type is great for facilities and warehouses. */
  getStorageInventoryAreaLocations: StorageInventoryAreaLocationQueryResponse;
  /** Get InventoryAreaLocationPayloads by location. */
  getStorageInventoryAreaLocationsPayload: Array<StorageInventoryAreaLocationPayload>;
  /** Get a InventoryAreaRule */
  getStorageInventoryAreaRule?: Maybe<StorageInventoryAreaRule>;
  /** Get all the InventoryAreaRules in a Facility. */
  getStorageInventoryAreaRules: StorageInventoryAreaRule;
  /** Get StorageInventories by location. */
  getStorageInventoryByLocation: StorageInventory;
  /** Get StorageInventories by Item ID. */
  getStorageInventoryByPayload: StorageInventory;
  /** Returns a Supplier given an ID. */
  getSupplier?: Maybe<Supplier>;
  /** Returns a Supplier with associated records given an id. */
  getSupplierDetails?: Maybe<SupplierDetails>;
  /** Returns a SupplierItem given an ID. */
  getSupplierItem?: Maybe<SupplierItem>;
  /** Returns all SupplierItems for a given Item. */
  getSupplierItemsByItem: SupplierItemQueryResponse;
  /** The ID of the Supplier you want to return all SupplierItems for. */
  getSupplierItemsBySupplier?: Maybe<SupplierItemQueryResponse>;
  /** Returns all Suppliers. */
  getSuppliers?: Maybe<SupplierQueryResponse>;
  /** Get a team by id */
  getTeam?: Maybe<Team>;
  /** Returns a team with details given an id */
  getTeamDetails?: Maybe<TeamDetails>;
  /** Returns teams */
  getTeams?: Maybe<TeamQueryResponse>;
  /** Get a user by userID */
  getUser: User;
  /** Uploaded videos */
  getVideosForKitTemplate?: Maybe<Array<FileStorageRecord>>;
  /** Get a workbench record given id */
  getWorkbench?: Maybe<Workbench>;
  getWorkbenches?: Maybe<Array<Workbench>>;
};

export type QueryBatchGetBidRequestsArgs = {
  ids: Array<Scalars["String"]>;
};

export type QueryBatchGetBidsArgs = {
  ids: Array<BidIdInput>;
};

export type QueryGetArrivalDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetArrivalReleasesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetArrivalReleasesByItemArgs = {
  fromDate?: InputMaybe<Scalars["String"]>;
  itemId: Scalars["String"];
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetArrivalReleasesBySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  supplierId: Scalars["String"];
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetArrivalReleasesWithStatusArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetArrivalsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetArrivalsByItemArgs = {
  itemId: Scalars["String"];
};

export type QueryGetArrivalsBySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  supplierId: Scalars["String"];
};

export type QueryGetBidArgs = {
  bidRequestId: Scalars["String"];
  id: Scalars["String"];
};

export type QueryGetBidLineItemArgs = {
  bidId: Scalars["String"];
  bidRequestId: Scalars["String"];
  itemId: Scalars["String"];
};

export type QueryGetBidLineItemsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemGroupId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidLineItemsByItemArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidLineItemsByItemGroupArgs = {
  itemGroupId: Scalars["String"];
};

export type QueryGetBidLineItemsBySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  supplierId: Scalars["String"];
};

export type QueryGetBidRequestArgs = {
  id: Scalars["String"];
};

export type QueryGetBidRequestDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetBidRequestLineItemArgs = {
  bidRequestId: Scalars["String"];
  itemId: Scalars["String"];
};

export type QueryGetBidRequestLineItemsArgs = {
  bidRequestId: Scalars["String"];
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidRequestLineItemsByItemArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidRequestsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidsArgs = {
  bidRequestId: Scalars["String"];
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetBidsBySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  supplierId: Scalars["String"];
};

export type QueryGetCompaniesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetCompanyUserAdminArgs = {
  userId: Scalars["String"];
};

export type QueryGetCompanyUsersArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetCompanyUsersByTeamIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  teamId: Scalars["String"];
};

export type QueryGetCustomAppArgs = {
  id: Scalars["String"];
};

export type QueryGetDepartureArgs = {
  id: Scalars["String"];
};

export type QueryGetDepartureDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetDepartureLineItemsByItemIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetDeparturePickListLineItemsByItemIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetDeparturePickListsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetDeparturePickListsByFacilityIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetDeparturesByExternalCustomerIdArgs = {
  externalCustomerId: Scalars["String"];
};

export type QueryGetDeviceArgs = {
  id: Scalars["String"];
};

export type QueryGetDevicesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetDynamicContainerArgs = {
  facilityId: Scalars["String"];
  id: Scalars["String"];
};

export type QueryGetDynamicContainersArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetDynamicContainersByExpiryArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  fromDate?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  toDate?: InputMaybe<Scalars["String"]>;
};

export type QueryGetEventArgs = {
  id: Scalars["String"];
};

export type QueryGetEventDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetEventsArgs = {
  fromDate: Scalars["String"];
  toDate: Scalars["String"];
};

export type QueryGetEventsByAssigneeArgs = {
  assigneeId: Scalars["String"];
  assigneeType: Scalars["String"];
  fromDate: Scalars["String"];
  toDate: Scalars["String"];
};

export type QueryGetExternalProductArgs = {
  externalProductId: Scalars["String"];
  productId: Scalars["String"];
};

export type QueryGetExternalProductsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  externalProductId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetExternalProductsByProductIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  productId: Scalars["String"];
};

export type QueryGetFacilitiesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetFacilityArgs = {
  id: Scalars["String"];
};

export type QueryGetFacilityDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetFacilityItemArgs = {
  data: FacilityItemGetInput;
};

export type QueryGetFacilityItemsByFacilityArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetFacilityItemsByItemArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetFilesForKitTemplateArgs = {
  id: Scalars["String"];
};

export type QueryGetHeadlessUserArgs = {
  id: Scalars["String"];
};

export type QueryGetHeadlessUsersArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetImagesForKitTemplateArgs = {
  id: Scalars["String"];
};

export type QueryGetInstalledOfficialAppArgs = {
  appId: Scalars["String"];
};

export type QueryGetInstructionExecutionDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetInstructionExecutionsByEventIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  eventId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInstructionExecutionsByExecutorIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  executorId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInstructionExecutionsByInstructionTemplateIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  instructionTemplateId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInstructionExecutionsByTriggerArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  triggerSource: Scalars["String"];
  triggerSourceId: Scalars["String"];
};

export type QueryGetInstructionSubjectsBySubjectArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  subjectId: Scalars["String"];
  subjectType: Scalars["String"];
};

export type QueryGetInstructionSubjectsBySubjectWithTemplateArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  subjectId: Scalars["String"];
  subjectType: Scalars["String"];
};

export type QueryGetInstructionSubjectsByTemplateArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  instructionTemplateId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInstructionTemplateArgs = {
  id: Scalars["String"];
};

export type QueryGetInstructionTemplateDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetInventoryAreaArgs = {
  facilityId: Scalars["String"];
  inventoryAreaId: Scalars["String"];
};

export type QueryGetInventoryLogsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInvitationArgs = {
  id: Scalars["String"];
};

export type QueryGetInvitationsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetInvitationsByTeamIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  teamId: Scalars["String"];
};

export type QueryGetItemArgs = {
  id: Scalars["String"];
};

export type QueryGetItemDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetItemGroupDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetItemHistoryArgs = {
  itemId: Scalars["String"];
};

export type QueryGetItemStorageInventoryAreaLocationArgs = {
  data: GetItemStorageInventoryAreaLocationQuery;
};

export type QueryGetItemStorageInventoryAreaRuleArgs = {
  data: ItemStorageInventoryAreaLocationGetInput;
};

export type QueryGetItemStorageInventoryAreaRulesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetItemsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetItemsWithPrimarySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetKanbanArgs = {
  id: Scalars["String"];
};

export type QueryGetKanbansArgs = {
  status?: InputMaybe<Scalars["String"]>;
};

export type QueryGetKanbansByItemIdArgs = {
  itemId: Scalars["String"];
  status?: InputMaybe<Scalars["String"]>;
};

export type QueryGetKanbansByWorkbenchIdArgs = {
  status?: InputMaybe<Scalars["String"]>;
  workbenchId: Scalars["String"];
};

export type QueryGetKioskArgs = {
  id: Scalars["String"];
};

export type QueryGetKiosksArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetKitTemplateBomArgs = {
  data: GetKitTemplateBomInput;
};

export type QueryGetKitTemplateDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetKitTemplateTreeArgs = {
  id: Scalars["String"];
};

export type QueryGetKitTemplatesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetMediaArgs = {
  category: Scalars["String"];
  id: Scalars["String"];
  type: Scalars["String"];
};

export type QueryGetOfficialAppArgs = {
  id: Scalars["String"];
};

export type QueryGetOperatorArgs = {
  id: Scalars["String"];
};

export type QueryGetOperatorPinCodeArgs = {
  id: Scalars["String"];
};

export type QueryGetOperatorsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetOperatorsByDeviceArgs = {
  deviceId: Scalars["String"];
};

export type QueryGetOperatorsByTeamIdArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  teamId: Scalars["String"];
};

export type QueryGetPresignedPostArgs = {
  args: FileUploadInput;
};

export type QueryGetPresignedPostForAppArgs = {
  args: AppMediaUploadInput;
};

export type QueryGetProductArgs = {
  id: Scalars["String"];
};

export type QueryGetProductDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetShopifyIntegrationsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetShopifyProductArgs = {
  externalProductId: Scalars["String"];
  shop: Scalars["String"];
};

export type QueryGetShopifyProductsArgs = {
  shop: Scalars["String"];
};

export type QueryGetStorageInventoryAreaLocationArgs = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  facilityId: Scalars["String"];
  inventoryAreaId: Scalars["String"];
  position: Scalars["String"];
  shelf: Scalars["String"];
};

export type QueryGetStorageInventoryAreaLocationsArgs = {
  aisle?: InputMaybe<Scalars["String"]>;
  bay?: InputMaybe<Scalars["String"]>;
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  inventoryAreaId?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Float"]>;
  shelf?: InputMaybe<Scalars["String"]>;
};

export type QueryGetStorageInventoryAreaLocationsPayloadArgs = {
  facilityId: Scalars["String"];
  partialInventoryAreaLocation?: InputMaybe<PartialInventoryAreaLocationInput>;
};

export type QueryGetStorageInventoryAreaRuleArgs = {
  facilityId: Scalars["String"];
  inventoryAreaId: Scalars["String"];
};

export type QueryGetStorageInventoryAreaRulesArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  facilityId: Scalars["String"];
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetStorageInventoryByLocationArgs = {
  facilityId: Scalars["String"];
  inventoryAreaLocation?: InputMaybe<InventoryAreaLocationInput>;
  partialInventoryAreaLocation?: InputMaybe<PartialInventoryAreaLocationInput>;
};

export type QueryGetStorageInventoryByPayloadArgs = {
  facilityId: Scalars["String"];
  inventoryAreaLocation?: InputMaybe<InventoryAreaLocationInput>;
  itemId: Scalars["String"];
  partialInventoryAreaLocation?: InputMaybe<PartialInventoryAreaLocationInput>;
};

export type QueryGetSupplierArgs = {
  id: Scalars["String"];
};

export type QueryGetSupplierDetailsArgs = {
  id: Scalars["String"];
};

export type QueryGetSupplierItemArgs = {
  id: Scalars["String"];
};

export type QueryGetSupplierItemsByItemArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  itemId: Scalars["String"];
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetSupplierItemsBySupplierArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
  supplierId: Scalars["String"];
};

export type QueryGetSuppliersArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetTeamArgs = {
  id: Scalars["String"];
};

export type QueryGetTeamDetailsArgs = {
  teamId: Scalars["String"];
};

export type QueryGetTeamsArgs = {
  cursor?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<Array<QueryFilterInput>>;
  limit?: InputMaybe<Scalars["Float"]>;
};

export type QueryGetVideosForKitTemplateArgs = {
  id: Scalars["String"];
};

export type QueryGetWorkbenchArgs = {
  id: Scalars["String"];
};

export type QueryGetWorkbenchesArgs = {
  status?: InputMaybe<Scalars["String"]>;
};

/** QueryFilterInput record */
export type QueryFilterInput = {
  name: Scalars["String"];
  /** eq | in | begins */
  operator: Scalars["String"];
  value?: InputMaybe<Scalars["String"]>;
  values?: InputMaybe<Array<Scalars["String"]>>;
};

export type QuickBooksAccount = {
  AccountSubType: Scalars["String"];
  AccountType: Scalars["String"];
  Active: Scalars["Boolean"];
  Id: Scalars["String"];
  Name: Scalars["String"];
};

export type QuickBooksAccounts = {
  accounts: Array<QuickBooksAccount>;
};

export type QuickBooksAccountsInput = {
  assetAccountRef: QuickBooksRefInput;
  expenseAccountRef: QuickBooksRefInput;
  incomeAccountRef: QuickBooksRefInput;
};

export type QuickBooksAndJeenyIds = {
  jeenyId?: InputMaybe<Scalars["String"]>;
  quickBooksId?: InputMaybe<Scalars["String"]>;
};

export type QuickBooksAuthUrl = {
  url: Scalars["String"];
};

export type QuickBooksIntegrationAccounts = {
  assetAccountRef?: Maybe<QuickBooksRef>;
  expenseAccountRef?: Maybe<QuickBooksRef>;
  incomeAccountRef?: Maybe<QuickBooksRef>;
};

export type QuickBooksItem = {
  AssetAccountRef: QuickBooksRef;
  Description?: Maybe<Scalars["String"]>;
  ExpenseAccountRef: QuickBooksRef;
  Id: Scalars["String"];
  InvStartDate: Scalars["String"];
  Name: Scalars["String"];
  PrefSupplierRef?: Maybe<QuickBooksRef>;
  PurchaseCost?: Maybe<Scalars["Float"]>;
  PurchaseDesc?: Maybe<Scalars["String"]>;
  QtyOnHand?: Maybe<Scalars["Float"]>;
  Sku?: Maybe<Scalars["String"]>;
  SyncToken: Scalars["String"];
  TrackQtyOnHand?: Maybe<Scalars["Boolean"]>;
  Type: Scalars["String"];
  UnitPrice?: Maybe<Scalars["Float"]>;
};

export type QuickBooksItemSyncList = {
  itemsInSync: Array<Items>;
  itemsOutOfSync: Array<Items>;
  jeenyItems: Array<Item>;
  quickBooksItems: Array<QuickBooksItem>;
};

export type QuickBooksRef = {
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type QuickBooksRefInput = {
  name: Scalars["String"];
  value: Scalars["String"];
};

export type QuickBooksSupplier = {
  Active: Scalars["Boolean"];
  DisplayName: Scalars["String"];
  Id: Scalars["String"];
  SyncToken: Scalars["String"];
  WebAddr?: Maybe<QuickBooksWebAddress>;
};

export type QuickBooksSupplierSyncList = {
  jeenySuppliers: Array<Supplier>;
  quickBooksSuppliers: Array<QuickBooksSupplier>;
  suppliersInSync: Array<Suppliers>;
  suppliersOutofSync: Array<Suppliers>;
};

export type QuickBooksSync = {
  id: Scalars["String"];
  quickBooksId: Scalars["String"];
  syncToken: Scalars["String"];
};

export type QuickBooksSyncList = {
  itemSync: Array<QuickBooksSync>;
  supplierSync: Array<QuickBooksSync>;
};

export type QuickBooksToken = {
  access_token: Scalars["String"];
  createdAt: Scalars["Float"];
  expires_in: Scalars["Float"];
  refresh_token: Scalars["String"];
  token_type: Scalars["String"];
  x_refresh_token_expires_in: Scalars["Float"];
};

export type QuickBooksWebAddress = {
  URI?: Maybe<Scalars["String"]>;
};

export type ResultListByStatus =
  | InvitationFulfilledPromise
  | InvitationRejectedPromise;

export type RevokeQuickBooksIntegration = {
  success: Scalars["Boolean"];
};

/** Company Operator Model */
export type SafeOperator = {
  /** DEPRECATED */
  accessLog: Array<DeviceAccess>;
  /** Jeeny Company */
  companyId: Scalars["String"];
  createdBy: Scalars["String"];
  createdOn: Scalars["String"];
  /** Log of the last device accesses */
  deviceAccessLog: Array<DeviceAccess>;
  /** User's email address */
  email?: Maybe<Scalars["String"]>;
  /** Which facilities this operator belongs to */
  facilityIds: Array<Scalars["String"]>;
  /** The number of failed login attempts since the last successful one */
  failedLoginAttempts: Scalars["Float"];
  /** User's first name */
  firstName: Scalars["String"];
  /** Jeeny operator */
  id: Scalars["ID"];
  /** Log of the last kiosk accesses */
  kioskAccessLog: Array<KioskAccess>;
  /** User's prefered language */
  language: Scalars["String"];
  /** The last time when the operator attempted to log in from a device */
  lastLoginAttempt?: Maybe<Scalars["String"]>;
  /** User's last name */
  lastName: Scalars["String"];
  /** User's mobile phone */
  mobilePhone?: Maybe<Scalars["String"]>;
  /** Role of the operator eg. plumber | none */
  role: Scalars["String"];
  seenTutorials: Array<Scalars["String"]>;
  /** Is operator still allowed access. active | inactive | suspended */
  status: Scalars["String"];
  /** ID of the team this operator belongs to */
  teamId: Scalars["String"];
  /** Name of the team this operator belongs to */
  teamName: Scalars["String"];
  updatedOn: Scalars["String"];
};

export type SafeOperatorQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<SafeOperator>;
};

/** Safe shopify integration record */
export type SafeShopifyIntegration = {
  /** The id of the company */
  companyId: Scalars["String"];
  /** When the Shopify integration record was created. */
  createdOn: Scalars["String"];
  /** The scope of the access token */
  scope?: Maybe<Scalars["String"]>;
  /** The id of the shop */
  shop: Scalars["String"];
  /** When the Shopify integration record was last updated. */
  updatedOn: Scalars["String"];
};

export type SafeShopifyIntegrationQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<SafeShopifyIntegration>;
};

export type SeatStatus = {
  availableCustomApps?: Maybe<Scalars["Float"]>;
  availableDevices: Scalars["Float"];
  availableFreeCompanyUserSeats: Scalars["Float"];
  availableFreeOperatorSeats: Scalars["Float"];
  /** Number of available kiosks. */
  availableKiosks?: Maybe<Scalars["Float"]>;
  availableSeats: Scalars["Float"];
  companyUserCount: Scalars["Float"];
  customAppCount: Scalars["Float"];
  deviceCount: Scalars["Float"];
  hasPayment: Scalars["Boolean"];
  hasUnlimitedCustomApps?: Maybe<Scalars["Boolean"]>;
  hasUnlimitedKiosks?: Maybe<Scalars["Boolean"]>;
  invitationCount: Scalars["Float"];
  kioskCount: Scalars["Float"];
  operatorUserCount: Scalars["Float"];
};

export type SetDefaultKitTemplatePartOptionInput = {
  /** The ID of the KitPartOption that you want to make the default option. */
  defaultOptionId: Scalars["String"];
  /** The ID of the parent KitTemplate that the KitPart you want to add a KitPartOption to belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart that you want to add a KitPartOption to. */
  partId: Scalars["String"];
};

/** Shopify product record */
export type ShopifyProduct = {
  admin_graphql_api_id?: Maybe<Scalars["String"]>;
  body_html?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  image?: Maybe<ShopifyProductImage>;
  images?: Maybe<Array<ShopifyProductImage>>;
  options?: Maybe<Array<ShopifyProductOption>>;
  product_type?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["String"]>;
  published_scope?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  tags?: Maybe<Scalars["String"]>;
  template_suffix?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
  variants?: Maybe<Array<ShopifyProductVariant>>;
  vendor?: Maybe<Scalars["String"]>;
};

/** Shopify product image record */
export type ShopifyProductImage = {
  admin_graphql_api_id?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  position?: Maybe<Scalars["Float"]>;
  product_id?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
  variant_ids?: Maybe<Array<Scalars["Float"]>>;
  width?: Maybe<Scalars["Float"]>;
};

/** Shopify product option record */
export type ShopifyProductOption = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Float"]>;
  product_id?: Maybe<Scalars["Float"]>;
  values?: Maybe<Array<Scalars["String"]>>;
};

/** Shopify product variant record */
export type ShopifyProductVariant = {
  admin_graphql_api_id?: Maybe<Scalars["String"]>;
  barcode?: Maybe<Scalars["String"]>;
  compare_at_price?: Maybe<Scalars["Float"]>;
  created_at?: Maybe<Scalars["String"]>;
  fulfillment_service?: Maybe<Scalars["String"]>;
  grams?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
  inventory_item_id?: Maybe<Scalars["Float"]>;
  inventory_management?: Maybe<Scalars["String"]>;
  inventory_policy?: Maybe<Scalars["String"]>;
  inventory_quantity?: Maybe<Scalars["Float"]>;
  jeenyProduct?: Maybe<Product>;
  old_inventory_quantity?: Maybe<Scalars["Float"]>;
  option1?: Maybe<Scalars["String"]>;
  option2?: Maybe<Scalars["String"]>;
  option3?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  product_id?: Maybe<Scalars["Float"]>;
  requires_shipping?: Maybe<Scalars["Boolean"]>;
  sku?: Maybe<Scalars["String"]>;
  taxable?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["Float"]>;
  weight_unit?: Maybe<Scalars["String"]>;
};

/** Jeeny StorageInventory */
export type StorageInventory = {
  /** All of the DynamicContainers the item is available in. */
  dynamicContainer?: Maybe<Array<DynamicContainer>>;
  /** All of the static locations the Item is available in. */
  item?: Maybe<Array<ItemStorageInventoryAreaLocation>>;
  /** The total quantity of the Item available in DynamicContainers or static locations. */
  quantity?: Maybe<Scalars["Float"]>;
};

/** Storage inventory area. Inventory area from facility record plus inventoryAreaRule record */
export type StorageInventoryArea = {
  /** The ID of the InventoryArea record. */
  id: Scalars["ID"];
  /** Details on the InventoryArea. */
  inventoryArea: FacilityInventoryArea;
  /** Rules associated with the InventoryArea. */
  rule: StorageInventoryAreaRule;
};

/** StorageInventoryAreaLocation record */
export type StorageInventoryAreaLocation = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The weight capacity of the StorageLocation in your desired unit of measure. */
  capacity?: Maybe<Scalars["Float"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["ID"];
  /** The ID of the user that created this record. */
  createdBy: Scalars["String"];
  /** When the StorageLocation record was created. */
  createdOn: Scalars["String"];
  /** If the value is true, then the financial ledger will be deducted when picking from this StorageLocation. */
  deductInventory?: Maybe<Scalars["Boolean"]>;
  /** The depth of the StorageLocation in your desired unit of measure. */
  depth?: Maybe<Scalars["Float"]>;
  /** The list of the dynamic container types can be placed in the StorageLocation. */
  dynamicContainerTypes?: Maybe<Array<Scalars["String"]>>;
  /** The ID of the Facility this location is in. */
  facilityId: Scalars["ID"];
  /** The height of the StorageLocation in your desired unit of measure. */
  height?: Maybe<Scalars["Float"]>;
  /** The ID of this StorageLocation. */
  id: Scalars["ID"];
  /** The ID of the InventoryArea record. */
  inventoryAreaId: Scalars["ID"];
  /** A list of actions that happened at this StorageLocation. */
  logs: Array<StorageLog>;
  /** Can this StorageLocation be picked for end use or is it used to refill other positions? */
  pickable?: Maybe<Scalars["Boolean"]>;
  position: Scalars["String"];
  /** A human readable reference to this StorageLocation. */
  readableId: Scalars["String"];
  shelf: Scalars["String"];
  /** The size category of the storage location. For example, small, medium, large. Can be used to limit what type of Items can be stored in this location. */
  sizeCategory?: Maybe<Scalars["String"]>;
  /** Is the StorageLocation still in use? active | inactive */
  status: Scalars["String"];
  /** When the StorageLocation record was last updated. */
  updatedOn: Scalars["String"];
  /** The width of the StorageLocation in your desired unit of measure. */
  width?: Maybe<Scalars["Float"]>;
  /** X coordinate of the location relative to north-west corner of the Facility. Useful when creating digital twins. */
  xCoordinate?: Maybe<Scalars["String"]>;
  /** Y coordinate of the location relative to north-west corner of the Facility. Useful when creating digital twins. */
  yCoordinate?: Maybe<Scalars["String"]>;
};

/** Storage location input. */
export type StorageInventoryAreaLocationInput = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The weight capacity of the StorageLocation. Use whatever unit of measure you want. */
  capacity?: InputMaybe<Scalars["Float"]>;
  /** If the value is true, then the financial ledger will be deducted when picking from this StorageLocation. */
  deductInventory?: InputMaybe<Scalars["Boolean"]>;
  /** The depth of the StorageLocation. Use whatever unit of measure you want. */
  depth?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Facility that this StorageLocation is in. */
  facilityId: Scalars["ID"];
  /** The height of the StorageLocation. Use whatever unit of measure you want. */
  height?: InputMaybe<Scalars["Float"]>;
  /** The ID of the InventoryArea that the location is in. */
  inventoryAreaId: Scalars["ID"];
  /** If true then the StorageLocation is available for end use picking. If false then the StorageLocation should be used to refill other StorageLocations that carry the same Item. */
  pickable?: InputMaybe<Scalars["Boolean"]>;
  position: Scalars["String"];
  shelf: Scalars["String"];
  /** The size category of the storage location. For example, small, medium, large. Can be used to limit what type of Items can be stored in this location. */
  sizeCategory?: InputMaybe<Scalars["String"]>;
  /** Is the StorageLocation still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** The width of the StorageLocation. Use whatever unit of measure you want. */
  width?: InputMaybe<Scalars["Float"]>;
  /** X coordinate of the StorageLocation relative to north-west corner of the Facility. Useful when creating digital twins. */
  xCoordinate?: InputMaybe<Scalars["String"]>;
  /** Y coordinate of the StorageLocation relative to north-west corner of the Facility. Useful when creating digital twins. */
  yCoordinate?: InputMaybe<Scalars["String"]>;
};

/** StorageInventoryAreaLocationPayload record */
export type StorageInventoryAreaLocationPayload = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The weight capacity of the StorageLocation in your desired unit of measure. */
  capacity?: Maybe<Scalars["Float"]>;
  /** The ID of the company this record belongs to. */
  companyId: Scalars["ID"];
  /** The ID of the user that created this record. */
  createdBy: Scalars["String"];
  /** When the StorageLocation record was created. */
  createdOn: Scalars["String"];
  /** If the value is true, then the financial ledger will be deducted when picking from this StorageLocation. */
  deductInventory?: Maybe<Scalars["Boolean"]>;
  /** The depth of the StorageLocation in your desired unit of measure. */
  depth?: Maybe<Scalars["Float"]>;
  dynamicContainer?: Maybe<DynamicContainer>;
  /** The list of the dynamic container types can be placed in the StorageLocation. */
  dynamicContainerTypes?: Maybe<Array<Scalars["String"]>>;
  /** The ID of the Facility this location is in. */
  facilityId: Scalars["ID"];
  /** The height of the StorageLocation in your desired unit of measure. */
  height?: Maybe<Scalars["Float"]>;
  /** The ID of this StorageLocation. */
  id: Scalars["ID"];
  /** The ID of the InventoryArea record. */
  inventoryAreaId: Scalars["ID"];
  item?: Maybe<ItemStorageInventoryAreaLocation>;
  /** A list of actions that happened at this StorageLocation. */
  logs: Array<StorageLog>;
  /** Can this StorageLocation be picked for end use or is it used to refill other positions? */
  pickable?: Maybe<Scalars["Boolean"]>;
  position: Scalars["String"];
  /** A human readable reference to this StorageLocation. */
  readableId: Scalars["String"];
  shelf: Scalars["String"];
  /** The size category of the storage location. For example, small, medium, large. Can be used to limit what type of Items can be stored in this location. */
  sizeCategory?: Maybe<Scalars["String"]>;
  /** Is the StorageLocation still in use? active | inactive */
  status: Scalars["String"];
  /** When the StorageLocation record was last updated. */
  updatedOn: Scalars["String"];
  /** The width of the StorageLocation in your desired unit of measure. */
  width?: Maybe<Scalars["Float"]>;
  /** X coordinate of the location relative to north-west corner of the Facility. Useful when creating digital twins. */
  xCoordinate?: Maybe<Scalars["String"]>;
  /** Y coordinate of the location relative to north-west corner of the Facility. Useful when creating digital twins. */
  yCoordinate?: Maybe<Scalars["String"]>;
};

export type StorageInventoryAreaLocationQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<StorageInventoryAreaLocation>;
};

/** Storage location input update */
export type StorageInventoryAreaLocationUpdateInput = {
  aisle: Scalars["String"];
  bay: Scalars["String"];
  /** The weight capacity of the StorageLocation. Use whatever unit of measure you want. */
  capacity?: InputMaybe<Scalars["Float"]>;
  /** If the value is true, then the financial ledger will be deducted when picking from this StorageLocation. */
  deductInventory?: InputMaybe<Scalars["Boolean"]>;
  /** The depth of the StorageLocation. Use whatever unit of measure you want. */
  depth?: InputMaybe<Scalars["Float"]>;
  /** The ID of the Facility that this StorageLocation is in. */
  facilityId: Scalars["ID"];
  /** The height of the StorageLocation. Use whatever unit of measure you want. */
  height?: InputMaybe<Scalars["Float"]>;
  /** The ID of the InventoryArea that the location is in. */
  inventoryAreaId: Scalars["ID"];
  /** A list of actions that have occurred at this StorageLocation. */
  log?: InputMaybe<StorageLogInput>;
  /** If true then the StorageLocation is available for end use picking. If false then the StorageLocation should be used to refill other StorageLocations that carry the same Item. */
  pickable?: InputMaybe<Scalars["Boolean"]>;
  position: Scalars["String"];
  shelf: Scalars["String"];
  /** The size category of the storage location. For example, small, medium, large. Can be used to limit what type of Items can be stored in this location. */
  sizeCategory?: InputMaybe<Scalars["String"]>;
  /** Is the StorageLocation still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** The width of the StorageLocation. Use whatever unit of measure you want. */
  width?: InputMaybe<Scalars["Float"]>;
  /** X coordinate of the StorageLocation relative to north-west corner of the Facility. Useful when creating digital twins. */
  xCoordinate?: InputMaybe<Scalars["String"]>;
  /** Y coordinate of the StorageLocation relative to north-west corner of the Facility. Useful when creating digital twins. */
  yCoordinate?: InputMaybe<Scalars["String"]>;
};

/** Jeeny Storage */
export type StorageInventoryAreaRule = {
  /** The ID of the company that this record belongs to. */
  companyId: Scalars["ID"];
  /** The ID of the user that created this record. */
  createdBy: Scalars["String"];
  /** When the InventoryAreaRule record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Facility that the InventoryArea is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that the rule belongs to. */
  inventoryAreaId: Scalars["ID"];
  /** The type of location assignment. Must be one of static or dynamic. This cannot be changed once set. */
  locationAssignment?: Maybe<Scalars["String"]>;
  /** The strategy to use when picking occurs in this InventoryArea. This is independent of the financial ledger accounting strategy. Must be one of FIFO, LIFO, or HIFO. This cannot be changed once set. */
  pickStrategy?: Maybe<Scalars["String"]>;
  /** When the InventoryAreaRule record was last updated. */
  updatedOn: Scalars["String"];
};

/** StorageLocation rule input */
export type StorageInventoryAreaRuleInput = {
  /** The ID of the Facility that the InventoryArea is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that the rule belongs to. */
  inventoryAreaId: Scalars["ID"];
  /** The type of location assignment. Must be one of static or dynamic. This cannot be changed once set. */
  locationAssignment?: InputMaybe<Scalars["String"]>;
  /** The strategy to use when picking occurs in this InventoryArea. This is independent of the financial ledger accounting strategy. Must be one of FIFO, LIFO, or HIFO. This cannot be changed once set. */
  pickStrategy?: InputMaybe<Scalars["String"]>;
};

/** StorageLocation rule input */
export type StorageInventoryAreaRuleUpdateInput = {
  /** The ID of the Facility that the InventoryArea is located in. */
  facilityId: Scalars["ID"];
  /** The ID of the InventoryArea that the rule belongs to. */
  inventoryAreaId: Scalars["ID"];
  /** The type of location assignment. Must be one of static or dynamic. This cannot be changed once set. */
  locationAssignment?: InputMaybe<Scalars["String"]>;
  /** The strategy to use when picking occurs in this InventoryArea. This is independent of the financial ledger accounting strategy. Must be one of FIFO, LIFO, or HIFO. This cannot be changed once set. */
  pickStrategy?: InputMaybe<Scalars["String"]>;
};

export type StorageInventoryPickRecord =
  | ItemDynamicContainerPayload
  | ItemStorageInventoryAreaLocation;

/** Log record for physical inventory actions related to DynamicContainers or static locations. */
export type StorageLog = {
  /** The ID of the user that caused the change. */
  createdBy: Scalars["String"];
  /** The date the log was created. */
  createdOn: Scalars["String"];
  /** The quantity of the Item in the DynamicContainer or static location after the change. */
  inventoryQuantity: Scalars["Float"];
  /** The ID of the Item. */
  itemId: Scalars["String"];
  /** The quantity of the Item that was changed. */
  quantity: Scalars["Float"];
  /** The type of action taken. Must be one of load, unload, or correction. */
  type: Scalars["String"];
};

/** Log record for quantity changes due to loading or unloading an Item. */
export type StorageLogInput = {
  /** The ID of the Item having its quantity changed. */
  itemId: Scalars["String"];
  /** The quantity of the Item that was changed. */
  quantity: Scalars["Float"];
  /** The type of action taken. Will determine whether the quantity is added or subtracted from the current total. Must be one of load or unload. */
  type: Scalars["String"];
};

export type SubmitInstructionExecutionStepInput = {
  /** The ID of the InstructionExecution this InstructionExecutionStepSubmission belongs to. */
  instructionExecutionId: Scalars["String"];
  /** The ID of the InstructionExecutionStep this InstructionExecutionStepSubmission belongs to. */
  instructionExecutionStepId: Scalars["String"];
  /** A freeform text data containing submission information. */
  submission?: InputMaybe<Scalars["String"]>;
};

export type SubscriptionCancellation = {
  success: Scalars["Boolean"];
};

export type SubscriptionResumption = {
  success: Scalars["Boolean"];
};

export type SubscriptionUpdate = {
  success: Scalars["Boolean"];
};

export type SubscriptionUpdatePreview = {
  immediateTotal: Scalars["Float"];
  nextInvoiceTotal: Scalars["Float"];
};

/** Supplier model */
export type Supplier = {
  /** The mailing address of the Supplier. */
  address?: Maybe<Address>;
  /** The ID of the company the Supplier record belongs to. This is the Jeeny companyId and not for classifying suppliers under their subsidiaries. */
  companyId: Scalars["ID"];
  /** Contacts for the Supplier. */
  contacts?: Maybe<Array<Contact>>;
  /** ID of the User that created the Supplier record. */
  createdBy: Scalars["String"];
  /** The date the Supplier record was created. */
  createdOn: Scalars["String"];
  /** The number that references you in the Supplier's system. */
  customerNumber?: Maybe<Scalars["String"]>;
  /** The main image of the Supplier. */
  defaultImageUrl?: Maybe<Scalars["String"]>;
  /** Supplier files. */
  files?: Maybe<Array<FileStorageRecord>>;
  /** The ID of the Supplier. */
  id: Scalars["ID"];
  /** Supplier images. */
  images?: Maybe<Array<FileStorageRecord>>;
  /** The name of the Supplier. */
  name: Scalars["String"];
  /** Any relevant notes about the Supplier. */
  notes?: Maybe<Array<Note>>;
  /** The phone number of the Supplier. */
  phoneNumber?: Maybe<Scalars["String"]>;
  /** The desired payment type of the Supplier. */
  primaryPaymentType?: Maybe<Scalars["String"]>;
  /** The shipping address of the Supplier. */
  shippingAddress?: Maybe<Address>;
  /** Is the Supplier still being used? active | inactive */
  status: Scalars["String"];
  /** Terms of payment for the Supplier. */
  terms?: Maybe<Scalars["String"]>;
  /** The date the Supplier record was last updated. */
  updatedOn: Scalars["String"];
  /** Supplier videos. */
  videos?: Maybe<Array<FileStorageRecord>>;
  /** The website URL of the Supplier. */
  website?: Maybe<Scalars["String"]>;
};

/** SupplierDetails record */
export type SupplierDetails = {
  /** Arrival releases of the supplier. */
  arrivalReleases: Array<ArrivalRelease>;
  /** Arrivals of the supplier. */
  arrivals: Array<Arrival>;
  /** BidLineItem. */
  bidLineItems: Array<BidLineItem>;
  /** Bid. */
  bids: Array<Bid>;
  /** InstructionSubject records linked to this record. */
  instructionSubjects: Array<InstructionSubject>;
  /** Supplier record. */
  supplier: Supplier;
  /** Supplier items of the supplier. */
  supplierItems: Array<SupplierItem>;
};

/** Supplier input */
export type SupplierInput = {
  /** The mailing address of the Supplier. */
  address?: InputMaybe<AddressInput>;
  /** Contacts for the Supplier. */
  contacts?: InputMaybe<Array<ContactInput>>;
  /** The number that references you in the Supplier's system. */
  customerNumber?: InputMaybe<Scalars["String"]>;
  /** The main image of the Supplier. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** The name of the Supplier. */
  name: Scalars["String"];
  /** Any relevant notes about the Supplier. */
  note?: InputMaybe<Scalars["String"]>;
  /** The phone number of the Supplier. */
  phoneNumber?: InputMaybe<Scalars["String"]>;
  /** The desired payment type of the Supplier. */
  primaryPaymentType?: InputMaybe<Scalars["String"]>;
  /** The shipping address of the Supplier. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Is the Supplier still being used? active | inactive */
  status: Scalars["String"];
  /** Terms of payment for the Supplier. */
  terms?: InputMaybe<Scalars["String"]>;
  /** The website URL of the Supplier. */
  website?: InputMaybe<Scalars["String"]>;
};

/** Supplier input update */
export type SupplierInputUpdate = {
  /** The mailing address of the Supplier. */
  address?: InputMaybe<AddressInput>;
  /** Contacts for the Supplier. */
  contacts?: InputMaybe<Array<ContactInput>>;
  /** The number that references you in the Supplier's system. */
  customerNumber?: InputMaybe<Scalars["String"]>;
  /** The main image of the Supplier. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** The ID of the Supplier you want to update. */
  id: Scalars["ID"];
  /** The name of the Supplier. */
  name?: InputMaybe<Scalars["String"]>;
  /** Any relevant notes about the Supplier. */
  note?: InputMaybe<Scalars["String"]>;
  /** The phone number of the Supplier. */
  phoneNumber?: InputMaybe<Scalars["String"]>;
  /** The desired payment type of the Supplier. */
  primaryPaymentType?: InputMaybe<Scalars["String"]>;
  /** The shipping address of the Supplier. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Is supplier still being used. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** Terms of payment for the Supplier. */
  terms?: InputMaybe<Scalars["String"]>;
  /** The website URL of the Supplier. */
  website?: InputMaybe<Scalars["String"]>;
};

/** Supplier info for a given item */
export type SupplierItem = {
  /** The brand of an Item that this Supplier provides. */
  brand?: Maybe<Scalars["String"]>;
  /** The brand SKU that this Supplier provides. */
  brandSku?: Maybe<Scalars["String"]>;
  /** Shipping carrier used by the Supplier for this Item. */
  carrierType?: Maybe<Scalars["String"]>;
  /** The ID of the company this record belongs to. This is the Jeeny company not the ID of a Supplier. */
  companyId: Scalars["String"];
  /** ID of the User that created this record. */
  createdBy: Scalars["String"];
  /** The date the SupplierItem record was created. */
  createdOn: Scalars["String"];
  /** The ID of the Supplier contact that should be reached out to if the Item is damaged. */
  damagedGoodsContactId?: Maybe<Scalars["String"]>;
  /** The dimensions of the container that the SupplierItem arrives in. */
  deliveryContainer?: Maybe<SupplierItemDeliveryContainer>;
  /** Instructions on how to order the SupplierItem. Examples: arrival, over the phone, website, etc. */
  howToOrder?: Maybe<Scalars["String"]>;
  /** The ID of the SupplierItem record. */
  id: Scalars["ID"];
  /** A copy of the Item record. */
  item?: Maybe<Item>;
  /** The ID of the Item being supplied by the Supplier. */
  itemId: Scalars["String"];
  /** Returns the last price per unit per the quantity argument. */
  lastPPU?: Maybe<SupplierItemPpu>;
  /** Average time between the order date and shipping date. */
  leadTimeInHours?: Maybe<Scalars["Float"]>;
  /** Minimum amount of units that must be ordered. */
  minimumOrderQuantity?: Maybe<Scalars["Float"]>;
  /** Does the Item need to be ordered in multiples of a certain number? */
  multiplesOf?: Maybe<Scalars["Float"]>;
  /** Supplier performance rating for this specific Item. */
  performanceRating?: Maybe<Scalars["String"]>;
  /** Where the Supplier is shipping this Item from. */
  pointOfOrigin?: Maybe<Scalars["String"]>;
  /** Price tiers including historical pricing within each tier. */
  priceTiers?: Maybe<Array<SupplierItemPpuTier>>;
  /** The ID of the Supplier contact most associated with this Item. */
  primaryContactId?: Maybe<Scalars["String"]>;
  /** A URL linking to the Item on the Supplier's website. */
  productUrl?: Maybe<Scalars["String"]>;
  /** Instructions on how to to get a replacement from the Supplier */
  replacementInstructions?: Maybe<Scalars["String"]>;
  /** Shipping type used by the Supplier for this Item. */
  shipVia?: Maybe<Scalars["String"]>;
  /** The SKU that the Supplier gives to the Item. */
  sku?: Maybe<Scalars["String"]>;
  /** Is the SupplierItem still being used? active | inactive */
  status: Scalars["String"];
  /** A copy of the Supplier record. */
  supplier?: Maybe<ClonedSupplier>;
  /** The ID of the Supplier supplying the Item. */
  supplierId: Scalars["String"];
  /** Average time between shipping date and delivery date. */
  transitTimeInHours?: Maybe<Scalars["Float"]>;
  /** Quantity information for the way a Supplier sells an Item. */
  unitsOfMeasure?: Maybe<SupplierItemUnitsOfMeasure>;
  /** The date the SupplierItem record was last updated. */
  updatedOn: Scalars["String"];
};

/** Supplier info for a given item */
export type SupplierItemLastPpuArgs = {
  itemQuantity?: InputMaybe<Scalars["Float"]>;
};

/** Container dimensions for an item. Supplier specific */
export type SupplierItemDeliveryContainer = {
  /** Cubic feet. Calculated not input by user */
  cubicFeet?: Maybe<Scalars["Float"]>;
  /** Height of the container. Use any unit of measure. */
  height?: Maybe<Scalars["Float"]>;
  /** Length of the container. Use any unit of measure. */
  length?: Maybe<Scalars["Float"]>;
  /** What type of container does the Supplier send the Item in? Examples: dynamic container, bag, pallet, etc. */
  unitOfMeasure?: Maybe<Scalars["String"]>;
  /** Weight of the container plus Item load. Use any unit of measure. */
  weight?: Maybe<Scalars["Float"]>;
  /** Width of the container. Use any unit of measure. */
  width?: Maybe<Scalars["Float"]>;
};

export type SupplierItemDeliveryContainerInput = {
  /** Height of the container. Use any unit of measure. */
  height?: InputMaybe<Scalars["Float"]>;
  /** Length of the container. Use any unit of measure. */
  length?: InputMaybe<Scalars["Float"]>;
  /** What type of container does the Supplier send the Item in? Examples: dynamic container, bag, pallet, etc. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** Weight of the container plus Item load. Use any unit of measure. */
  weight?: InputMaybe<Scalars["Float"]>;
  /** Width of the container. Use any unit of measure. */
  width?: InputMaybe<Scalars["Float"]>;
};

export type SupplierItemDeliveryContainerInputUpdate = {
  /** Height of the container. Use any unit of measure. */
  height?: InputMaybe<Scalars["Float"]>;
  /** Length of the container. Use any unit of measure. */
  length?: InputMaybe<Scalars["Float"]>;
  /** What type of container does the Supplier send the Item in? Examples: dynamic container, bag, pallet, etc. */
  unitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** Weight of the container plus Item load. Use any unit of measure. */
  weight?: InputMaybe<Scalars["Float"]>;
  /** Width of the container. Use any unit of measure. */
  width?: InputMaybe<Scalars["Float"]>;
};

export type SupplierItemInput = {
  /** The brand of an Item that this Supplier provides. */
  brand?: InputMaybe<Scalars["String"]>;
  /** The brand SKU that this Supplier provides. */
  brandSku?: InputMaybe<Scalars["String"]>;
  /** Shipping carrier used by the Supplier for this Item. */
  carrierType?: InputMaybe<Scalars["String"]>;
  /** The ID of the Supplier contact that should be reached out to if the Item is damaged. */
  damagedGoodsContactId?: InputMaybe<Scalars["String"]>;
  /** The dimensions of the container that the SupplierItem arrives in. */
  deliveryContainer?: InputMaybe<SupplierItemDeliveryContainerInput>;
  /** Instructions on how to order the SupplierItem. Examples: arrival, over the phone, website, etc. */
  howToOrder?: InputMaybe<Scalars["String"]>;
  /** The ID of the Item being supplied by the Supplier. */
  itemId: Scalars["String"];
  /** Average time between the order date and shipping date. */
  leadTimeInHours?: InputMaybe<Scalars["Float"]>;
  /** Minimum amount of units that must be ordered. */
  minimumOrderQuantity?: InputMaybe<Scalars["Float"]>;
  /** Does the Item need to be ordered in multiples of a certain number? */
  multiplesOf?: InputMaybe<Scalars["Float"]>;
  /** Supplier performance rating for this specific Item. */
  performanceRating?: InputMaybe<Scalars["String"]>;
  /** Where the Supplier is shipping this Item from. */
  pointOfOrigin?: InputMaybe<Scalars["String"]>;
  /** Price tiers including historical pricing within each tier. */
  priceTiers?: InputMaybe<Array<ItemPpuTierInput>>;
  /** The ID of the Supplier contact most associated with this Item. */
  primaryContactId?: InputMaybe<Scalars["String"]>;
  /** A URL linking to the Item on the Supplier's website. */
  productUrl?: InputMaybe<Scalars["String"]>;
  /** Instructions on how to to get a replacement from the Supplier */
  replacementInstructions?: InputMaybe<Scalars["String"]>;
  /** Shipping type used by the Supplier for this Item. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The SKU that the Supplier gives to the Item. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Is the SupplierItem still being used? active | inactive */
  status: Scalars["String"];
  /** The ID of the Supplier supplying the Item. */
  supplierId: Scalars["String"];
  /** Average time between shipping date and delivery date. */
  transitTimeInHours?: InputMaybe<Scalars["Float"]>;
  /** Quantity information for the way a Supplier sells an Item. */
  unitsOfMeasure?: InputMaybe<SupplierItemUnitsOfMeasureInput>;
};

export type SupplierItemInputUpdate = {
  /** The brand of an Item that this Supplier provides. */
  brand?: InputMaybe<Scalars["String"]>;
  /** The brand SKU that this Supplier provides. */
  brandSku?: InputMaybe<Scalars["String"]>;
  /** Shipping carrier used by the Supplier for this Item. */
  carrierType?: InputMaybe<Scalars["String"]>;
  /** The ID of the Supplier contact that should be reached out to if the Item is damaged. */
  damagedGoodsContactId?: InputMaybe<Scalars["String"]>;
  /** The dimensions of the container that the SupplierItem arrives in. */
  deliveryContainer?: InputMaybe<SupplierItemDeliveryContainerInputUpdate>;
  /** Instructions on how to order the SupplierItem. Examples: arrival, over the phone, website, etc. */
  howToOrder?: InputMaybe<Scalars["String"]>;
  /** The ID of the SupplierItem you want to update. */
  id: Scalars["ID"];
  /** Average time between order date and shipping date */
  leadTimeInHours?: InputMaybe<Scalars["Float"]>;
  /** Minimum amount of units that must be ordered. */
  minimumOrderQuantity?: InputMaybe<Scalars["Float"]>;
  /** Does the Item need to be ordered in multiples of a certain number? */
  multiplesOf?: InputMaybe<Scalars["Float"]>;
  /** Supplier performance rating for this specific Item. */
  performanceRating?: InputMaybe<Scalars["String"]>;
  /** Where the Supplier is shipping this Item from. */
  pointOfOrigin?: InputMaybe<Scalars["String"]>;
  /** Price tiers including historical pricing within each tier */
  priceTiers?: InputMaybe<Array<ItemPpuTierInputUpdate>>;
  /** The ID of the Supplier contact most associated with this Item. */
  primaryContactId?: InputMaybe<Scalars["String"]>;
  /** A URL linking to the Item on the Supplier's website. */
  productUrl?: InputMaybe<Scalars["String"]>;
  /** Purchase unit of measure. Nullable until all supplier items created before 7/15/2021 are fixed */
  purchaseUnitOfMeasure?: InputMaybe<Scalars["String"]>;
  /** Instructions on how to to get a replacement from the Supplier */
  replacementInstructions?: InputMaybe<Scalars["String"]>;
  /** Shipping type used by the Supplier for this Item. */
  shipVia?: InputMaybe<Scalars["String"]>;
  /** The SKU that the Supplier gives to the Item. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Is the SupplierItem still being used? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** Average time between shipping date and delivery date */
  transitTimeInHours?: InputMaybe<Scalars["Float"]>;
  /** Quantity information for the way a supplier sells an item */
  unitsOfMeasure?: InputMaybe<SupplierItemUnitsOfMeasureInput>;
};

/** Historical price per unit model */
export type SupplierItemPpu = {
  /** The price. */
  amount: Scalars["Float"];
  /** The date that this price was entered into the system. */
  date: Scalars["String"];
};

/** Price Tier */
export type SupplierItemPpuTier = {
  /** A list of prices that the SupplierItem once held. */
  priceHistory: Array<SupplierItemPpu>;
  /** Is this price tier still active? active | inactive */
  status: Scalars["String"];
  /** The maximum order quantity allowed for this price. */
  tierEnd?: Maybe<Scalars["Float"]>;
  /** The minimum order quantity needed for this price. */
  tierStart: Scalars["Float"];
};

export type SupplierItemQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<SupplierItem>;
};

export type SupplierItemUnitsOfMeasure = {
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  bomInParent?: Maybe<Scalars["Float"]>;
  /** Ordered first to last in relations. Inventory => custom[0] => custom[1] => custom[2] => bom */
  customInvToBom?: Maybe<Array<SupplierItemUnitsOfMeasureCustom>>;
  /** Ordered first to last in relations. Purchase => custom[0] => custom[1] => custom[2] => inventory */
  customPurToInv?: Maybe<Array<SupplierItemUnitsOfMeasureCustom>>;
  /** If true the number will be a decimal. For example: No good example yet */
  flipBomParentCountMethod?: Maybe<Scalars["Boolean"]>;
  /** If true the number will be a decimal. For example: We purchase wire by the roll but store it by the dynamic container. Instead of asking how many dynamic containers are in a roll we want to ask how many rolls are in a dynamic container */
  flipInvParentCountMethod?: Maybe<Scalars["Boolean"]>;
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  inventoryInParent?: Maybe<Scalars["Float"]>;
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  purchaseUnitOfMeasure?: Maybe<Scalars["String"]>;
};

export type SupplierItemUnitsOfMeasureCustom = {
  /** The quantity of the Item present in a single unit of this unit of measure's parent. */
  amountInParent: Scalars["Float"];
  /** A valid descriptor of the unit of measure to explain what it is for. */
  descriptor: Scalars["String"];
  /** Set to true if you need to reverse the multiplication done between this unit of measure and its parent. Ex if false: There are .001 sheets in each square foot. Ex if true: there are 1000 square feet in each sheet */
  flipSelfParentCountMethod?: Maybe<Scalars["Boolean"]>;
  /** The name of the unit of measure. For example, bag, dynamic container, each, etc. */
  unitOfMeasure: Scalars["String"];
};

/** Custom units of measure in between predefined units of measure */
export type SupplierItemUnitsOfMeasureCustomInput = {
  /** The quantity of the Item present in a single unit of this unit of measure's parent. */
  amountInParent: Scalars["Float"];
  /** A valid descriptor of the unit of measure to explain what it is for. */
  descriptor: Scalars["String"];
  /** Set to true if you need to reverse the multiplication done between this unit of measure and its parent. Ex if false: There are .001 sheets in each square foot. Ex if true: there are 1000 square feet in each sheet */
  flipSelfParentCountMethod?: InputMaybe<Scalars["Boolean"]>;
  /** The name of the unit of measure. For example, bag, dynamic container, each, etc. */
  unitOfMeasure: Scalars["String"];
};

/** Quantity information for the way a Supplier sells an Item. */
export type SupplierItemUnitsOfMeasureInput = {
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  bomInParent?: InputMaybe<Scalars["Float"]>;
  /** Ordered first to last in relations. Inventory => custom[0] => custom[1] => custom[2] => bom */
  customInvToBom?: InputMaybe<Array<SupplierItemUnitsOfMeasureCustomInput>>;
  /** Ordered first to last in relations. Purchase => custom[0] => custom[1] => custom[2] => inventory */
  customPurToInv?: InputMaybe<Array<SupplierItemUnitsOfMeasureCustomInput>>;
  /** If true the number will be a decimal. For example: No good example yet */
  flipBomParentCountMethod?: InputMaybe<Scalars["Boolean"]>;
  /** If true the number will be a decimal. For example: We purchase wire by the roll but store it by the dynamic container. Instead of asking how many dynamic containers are in a roll we want to ask how many rolls are in a dynamic container */
  flipInvParentCountMethod?: InputMaybe<Scalars["Boolean"]>;
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  inventoryInParent?: InputMaybe<Scalars["Float"]>;
  /** Nullable until all supplier items created before 10/22/2021 are fixed */
  purchaseUnitOfMeasure?: InputMaybe<Scalars["String"]>;
};

export type SupplierQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Supplier>;
};

export type Suppliers = {
  jeenySupplier?: Maybe<Supplier>;
  quickBooksSupplier?: Maybe<QuickBooksSupplier>;
};

/** Team Model */
export type Team = {
  /** Jeeny app company id */
  companyId: Scalars["String"];
  createdOn: Scalars["String"];
  id: Scalars["ID"];
  /** Name of the team */
  name: Scalars["String"];
  updatedOn: Scalars["String"];
};

/** YBR app team details */
export type TeamDetails = {
  companyUsers: Array<CompanyUser>;
  devices: Array<Device>;
  invitations: Array<Invitation>;
  operators: Array<Operator>;
  team: Team;
};

export type TeamInput = {
  /** Name of the team */
  name: Scalars["String"];
};

export type TeamInputUpdate = {
  id: Scalars["String"];
  /** Name of the team */
  name: Scalars["String"];
};

export type TeamQueryResponse = {
  cursor?: Maybe<Scalars["String"]>;
  items: Array<Team>;
};

/** InstructionSubject update */
export type UpdateInstructionSubjectInput = {
  /** The ID of the InstructionTemplate */
  instructionTemplateId: Scalars["String"];
  /** The name of the InstructionSubject. */
  name?: InputMaybe<Scalars["String"]>;
  /** Is the InstructionSubject still being used? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
  /** The ID of the subject entity. */
  subjectId: Scalars["String"];
  /** The type of the subject entity. arrival|item|kit|supplier|product|departure|user */
  subjectType: Scalars["String"];
  /** A list of triggers, to instantiate an InstructionExecution. */
  triggers?: InputMaybe<Array<InstructionSubjectTriggerInput>>;
};

export type UpdateInstructionTemplateStepInput = {
  /** The text content of this InstructionTemplateStep. */
  content?: InputMaybe<Scalars["String"]>;
  /** The ID of InstructionTemplate that contains this step. */
  instructionTemplateId: Scalars["String"];
  /** The ID of the InstructionTemplateStep that you want to update. */
  instructionTemplateStepId: Scalars["String"];
  /** The name of the InstructionTemplateStep. */
  name?: InputMaybe<Scalars["String"]>;
  /** For ordering the InstructionTemplateSteps within the InstructionTemplate. */
  weight?: InputMaybe<Scalars["Float"]>;
};

export type UpdateKitTemplateInput = {
  /** A category or grouping that this Kit fits in to. */
  category?: InputMaybe<Scalars["String"]>;
  /** Give the Kit a memorable code - something short and sweet. */
  code?: InputMaybe<Scalars["String"]>;
  /** The base dimensions of this Kit. */
  defaultDimensions?: InputMaybe<KitTemplateDimensionsInput>;
  /** The main image of the Kit. */
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  /** Describe the Kit. */
  description?: InputMaybe<Scalars["String"]>;
  /** The ID fo the Kit you want to update. */
  id: Scalars["String"];
  /** Instructions for assembling the Kit. You may use your own format and save it as a JSON string. */
  instructions?: InputMaybe<Scalars["String"]>;
  /** Give the Kit a memorable name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Is the Kit still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

export type UpdateKitTemplatePartInput = {
  /** All of the dimensions of this KitPart. */
  dimensions?: InputMaybe<KitTemplatePartDimensionsInput>;
  /** Give the KitPart a name. The KitPart can have more than one option so you may not always want to name it what you are going to set the default option to. */
  name?: InputMaybe<Scalars["String"]>;
  /** The ID of the parent KitTemplate that this KitPart belongs to. */
  parentId: Scalars["String"];
  /** The ID of the KitPart that you want to update. */
  partId: Scalars["String"];
  /** The number of pieces of this KitPart used in the Kit. */
  quantity?: InputMaybe<Scalars["Float"]>;
  /** Is the KitPart still in use? active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

/** User Model */
export type User = {
  createdOn: Scalars["String"];
  /** User email address */
  email?: Maybe<Scalars["String"]>;
  /** User first name */
  firstName?: Maybe<Scalars["String"]>;
  /** Cognito id */
  id: Scalars["ID"];
  /** User last name */
  lastName?: Maybe<Scalars["String"]>;
  /** User mobile phone */
  mobilePhone?: Maybe<Scalars["String"]>;
  updatedOn: Scalars["String"];
};

export type UserInputUpdate = {
  /** User first name */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User last name */
  lastName?: InputMaybe<Scalars["String"]>;
  /** User mobile phone */
  mobilePhone?: InputMaybe<Scalars["String"]>;
};

/** Workbench model */
export type Workbench = {
  /** Short hand code for this workcell */
  code: Scalars["String"];
  /** Jeeny Company */
  companyId: Scalars["String"];
  configuration: WorkbenchConfiguration;
  createdOn: Scalars["String"];
  defaultImageUrl?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dimensions: WorkbenchDimensions;
  facility?: Maybe<Facility>;
  facilityId: Scalars["ID"];
  /** Item files */
  files?: Maybe<Array<FileStorageRecord>>;
  history?: Maybe<Array<WorkbenchHistoryLog>>;
  id: Scalars["ID"];
  /** Item images */
  images?: Maybe<Array<FileStorageRecord>>;
  /** List of kit ids built at this workcell */
  kitIds: Array<Scalars["ID"]>;
  name: Scalars["String"];
  /** List of oeprator ids allowed to work at this workcell */
  operatorIds: Array<Scalars["ID"]>;
  operators?: Maybe<Array<Employee>>;
  reportedOn?: Maybe<Scalars["String"]>;
  reportedStatus?: Maybe<Scalars["String"]>;
  /** Is workcell still being used. active | inactive */
  status: Scalars["String"];
  updatedOn: Scalars["String"];
  /** Item videos */
  videos?: Maybe<Array<FileStorageRecord>>;
  workbenchHardwares?: Maybe<Array<WorkbenchHardware>>;
};

/** Workbench Accessory model */
export type WorkbenchAccessory = {
  equipmentId: Scalars["String"];
  id: Scalars["String"];
  itemHolderId: Scalars["String"];
  itemId: Scalars["String"];
  machineId: Scalars["String"];
  /** JSON string of string[][] */
  toolGrid: Scalars["String"];
  toolId: Scalars["String"];
  toolingId: Scalars["String"];
  /** toolGrid|tool|item|itemHolder|equipment|machine|tooling|empty */
  type: Scalars["String"];
};

/** Workbench Accessory model */
export type WorkbenchAccessoryInput = {
  equipmentId?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  itemId?: InputMaybe<Scalars["String"]>;
  machineId?: InputMaybe<Scalars["String"]>;
  /** JSON string of string[][] */
  toolGrid?: InputMaybe<Scalars["String"]>;
  toolId?: InputMaybe<Scalars["String"]>;
  toolingId?: InputMaybe<Scalars["String"]>;
  /** toolGrid|tool|itemHolder|equipment|machine|tooling */
  type: Scalars["String"];
};

/** Workbench Configuration model */
export type WorkbenchConfiguration = {
  /** Want to export accessory type */
  accessoryType?: Maybe<WorkbenchAccessory>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  belowAccessories?: Maybe<Scalars["String"]>;
  /** JSON string of WorkbenchFlowrackLaneInput[][]. Graphql doesn't allow nested arrays */
  flowrack?: Maybe<Scalars["String"]>;
  /** Want to export accessory type */
  flowrackLaneType?: Maybe<WorkbenchFlowrackLane>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  hangingAccessories?: Maybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  leftSideAccessories?: Maybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  pegboard?: Maybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  rightSideAccessories?: Maybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  tableAccessories?: Maybe<Scalars["String"]>;
};

/** Workbench Configuration model */
export type WorkbenchConfigurationInput = {
  /** Want to export accessory type */
  accessoryType?: InputMaybe<WorkbenchAccessoryInput>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  belowAccessories?: InputMaybe<Scalars["String"]>;
  /** JSON string of WorkbenchFlowrackLaneInput[][]. Graphql doesn't allow nested arrays */
  flowrack?: InputMaybe<Scalars["String"]>;
  /** Want to export accessory type */
  flowrackLaneType?: InputMaybe<WorkbenchFlowrackLaneInput>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  hangingAccessories?: InputMaybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  leftSideAccessories?: InputMaybe<Scalars["String"]>;
  /** JSON string of string[][]. Graphql doesn't allow nested arrays */
  pegboard?: InputMaybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  rightSideAccessories?: InputMaybe<Scalars["String"]>;
  /** JSON string of WorkbenchAccessoryInput[][]. Graphql doesn't allow nested arrays */
  tableAccessories?: InputMaybe<Scalars["String"]>;
};

/** Workbench Dimensions */
export type WorkbenchDimensions = {
  below?: Maybe<Dimensions>;
  flowrack?: Maybe<Dimensions>;
  hanging?: Maybe<Dimensions>;
  leftSide?: Maybe<Dimensions>;
  pegboard?: Maybe<Dimensions>;
  rightSide?: Maybe<Dimensions>;
  table?: Maybe<Dimensions>;
};

/** Workbench Dimensions */
export type WorkbenchDimensionsInput = {
  below?: InputMaybe<DimensionsInputUpdate>;
  flowrack?: InputMaybe<DimensionsInputUpdate>;
  hanging?: InputMaybe<DimensionsInputUpdate>;
  leftSide?: InputMaybe<DimensionsInputUpdate>;
  pegboard?: InputMaybe<DimensionsInputUpdate>;
  rightSide?: InputMaybe<DimensionsInputUpdate>;
  self?: InputMaybe<DimensionsInputUpdate>;
  table?: InputMaybe<DimensionsInputUpdate>;
};

/** Workbench Flowrack Lane model */
export type WorkbenchFlowrackLane = {
  id: Scalars["String"];
  kanban: Kanban;
  kanbanId: Scalars["String"];
  /** Beginning and end position for pick lights */
  pickLights?: Maybe<Array<Scalars["Float"]>>;
};

/** Workbench Flowrack Lane model */
export type WorkbenchFlowrackLaneInput = {
  id: Scalars["String"];
  kanbanId: Scalars["String"];
  /** Start and stop position for pick lights */
  pickLights?: InputMaybe<Array<Scalars["Float"]>>;
};

/** Workbench hardware model */
export type WorkbenchHardware = {
  /** Jeeny Company */
  companyId: Scalars["String"];
  /** Is workbench hardware the main hardware on the workbench. primary | secondary */
  configuration: Scalars["String"];
  createdOn: Scalars["String"];
  id: Scalars["ID"];
  /** Is workbench hardware still being used. active | inactive */
  status: Scalars["String"];
  updatedOn: Scalars["String"];
  workbench?: Maybe<Workbench>;
  workbenchId: Scalars["ID"];
};

/** WorkbenchHistoryLog model */
export type WorkbenchHistoryLog = {
  /** When the kit was finished */
  completedOn?: Maybe<Scalars["String"]>;
  /** When the kit started */
  createdOn: Scalars["String"];
  /** When the kit was discarded */
  discardedOn?: Maybe<Scalars["String"]>;
  /** If status is discarded then provide reason */
  discardedReason?: Maybe<Scalars["String"]>;
  /** Difference between completedOn and createdOn */
  duration?: Maybe<Scalars["String"]>;
  /** Employee that assembled item */
  employeeId: Scalars["ID"];
  id: Scalars["ID"];
  /** Kit id assembled */
  kitId: Scalars["ID"];
  /** Order ID associated with this particular kit */
  orderId?: Maybe<Scalars["ID"]>;
  /** Product id assembled */
  productId: Scalars["ID"];
  /** One of inProgress | completed | discarded */
  status: Scalars["String"];
  /** Workcell id assembled at */
  workcellId: Scalars["ID"];
};

/** WorkbenchHistoryLog input */
export type WorkbenchHistoryLogInput = {
  /** When the kit was finished */
  completedOn?: InputMaybe<Scalars["String"]>;
  /** Employee that assembled item */
  employeeId: Scalars["ID"];
  /** Kit id assembled */
  kitId: Scalars["ID"];
  /** Order ID associated with this particular kit */
  orderId?: InputMaybe<Scalars["ID"]>;
  /** Product id assembled */
  productId: Scalars["ID"];
  workbenchId: Scalars["ID"];
  /** Workcell id assembled at */
  workcellId: Scalars["ID"];
};

/** WorkbenchHistoryLog input update */
export type WorkbenchHistoryLogInputUpdate = {
  /** When the kit was finished */
  completedOn?: InputMaybe<Scalars["String"]>;
  /** When the kit was discarded */
  discardedOn?: InputMaybe<Scalars["String"]>;
  /** If status is discarded then provide reason */
  discardedReason?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  status?: InputMaybe<Scalars["String"]>;
  workbenchId: Scalars["ID"];
};

/** Workbench input */
export type WorkbenchInput = {
  /** Short hand code for this workcell */
  code: Scalars["String"];
  configuration: WorkbenchConfigurationInput;
  description?: InputMaybe<Scalars["String"]>;
  dimensions?: InputMaybe<WorkbenchDimensionsInput>;
  facilityId: Scalars["ID"];
  kitIds: Array<Scalars["ID"]>;
  name: Scalars["String"];
  operatorIds: Array<Scalars["ID"]>;
  /** Is workcell still being used. active | inactive */
  status: Scalars["String"];
};

/** Workbench input update */
export type WorkbenchInputUpdate = {
  /** Short hand code for this workcell */
  code?: InputMaybe<Scalars["String"]>;
  configuration?: InputMaybe<WorkbenchConfigurationInput>;
  defaultImageUrl?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dimensions?: InputMaybe<WorkbenchDimensionsInput>;
  id: Scalars["ID"];
  /** List of kit ids built at this workcell */
  kitIds?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  /** List of operators ids allowed at this workcell */
  operatorIds?: InputMaybe<Array<Scalars["ID"]>>;
  /** Is workcell still being used. active | inactive */
  status?: InputMaybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessControls: ResolverTypeWrapper<AccessControls>;
  AccessType: ResolverTypeWrapper<AccessType>;
  AddInstructionTemplateStepToInstructionTemplateInput: AddInstructionTemplateStepToInstructionTemplateInput;
  AddKitTemplatePartOptionToKitTemplatePartInput: AddKitTemplatePartOptionToKitTemplatePartInput;
  AddKitTemplatePartToKitTemplateInput: AddKitTemplatePartToKitTemplateInput;
  AddKitTemplatePartWithOptionToKitTemplateInput: AddKitTemplatePartWithOptionToKitTemplateInput;
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  AddressUpdateInput: AddressUpdateInput;
  App: ResolverTypeWrapper<App>;
  AppMediaUploadInput: AppMediaUploadInput;
  AppUsageLog: ResolverTypeWrapper<AppUsageLog>;
  AppUsageLogInput: AppUsageLogInput;
  Apps: ResolverTypeWrapper<Apps>;
  Arrival: ResolverTypeWrapper<Arrival>;
  ArrivalComment: ResolverTypeWrapper<ArrivalComment>;
  ArrivalCommentInput: ArrivalCommentInput;
  ArrivalDelivery: ResolverTypeWrapper<ArrivalDelivery>;
  ArrivalDeliveryDeleteInput: ArrivalDeliveryDeleteInput;
  ArrivalDeliveryInput: ArrivalDeliveryInput;
  ArrivalDeliveryLineItem: ResolverTypeWrapper<ArrivalDeliveryLineItem>;
  ArrivalDeliveryLineItemInput: ArrivalDeliveryLineItemInput;
  ArrivalDeliveryLineItemRecord: ArrivalDeliveryLineItemRecord;
  ArrivalDeliveryLineItemUpdateInput: ArrivalDeliveryLineItemUpdateInput;
  ArrivalDeliveryUpdateInput: ArrivalDeliveryUpdateInput;
  ArrivalDetailsWithStatus: ResolverTypeWrapper<ArrivalDetailsWithStatus>;
  ArrivalInput: ArrivalInput;
  ArrivalLineItem: ResolverTypeWrapper<ArrivalLineItem>;
  ArrivalLineItemDeleteInput: ArrivalLineItemDeleteInput;
  ArrivalLineItemInput: ArrivalLineItemInput;
  ArrivalLineItemRecord: ArrivalLineItemRecord;
  ArrivalLineItemUpdateInput: ArrivalLineItemUpdateInput;
  ArrivalLineItemWithStatus: ResolverTypeWrapper<ArrivalLineItemWithStatus>;
  ArrivalQueryResponse: ResolverTypeWrapper<ArrivalQueryResponse>;
  ArrivalRelease: ResolverTypeWrapper<ArrivalRelease>;
  ArrivalReleaseDeleteInput: ArrivalReleaseDeleteInput;
  ArrivalReleaseInput: ArrivalReleaseInput;
  ArrivalReleaseLineItem: ResolverTypeWrapper<ArrivalReleaseLineItem>;
  ArrivalReleaseLineItemDeleteInput: ArrivalReleaseLineItemDeleteInput;
  ArrivalReleaseLineItemInput: ArrivalReleaseLineItemInput;
  ArrivalReleaseLineItemRecord: ArrivalReleaseLineItemRecord;
  ArrivalReleaseLineItemUpdateInput: ArrivalReleaseLineItemUpdateInput;
  ArrivalReleaseLineItemWithStatus: ResolverTypeWrapper<ArrivalReleaseLineItemWithStatus>;
  ArrivalReleaseQueryResponse: ResolverTypeWrapper<ArrivalReleaseQueryResponse>;
  ArrivalReleaseRecordInput: ArrivalReleaseRecordInput;
  ArrivalReleaseSurcharge: ResolverTypeWrapper<ArrivalReleaseSurcharge>;
  ArrivalReleaseSurchargeInput: ArrivalReleaseSurchargeInput;
  ArrivalReleaseUpdateInput: ArrivalReleaseUpdateInput;
  ArrivalReleaseWithStatus: ResolverTypeWrapper<ArrivalReleaseWithStatus>;
  ArrivalReleaseWithStatusQueryResponse: ResolverTypeWrapper<ArrivalReleaseWithStatusQueryResponse>;
  ArrivalUpdateInput: ArrivalUpdateInput;
  ArrivalWithStatus: ResolverTypeWrapper<ArrivalWithStatus>;
  BackOfficeAccessControls: ResolverTypeWrapper<BackOfficeAccessControls>;
  Bid: ResolverTypeWrapper<Bid>;
  BidIdInput: BidIdInput;
  BidInput: BidInput;
  BidItem:
    | ResolversTypes["BidItemGroupRecord"]
    | ResolversTypes["BidItemRecord"];
  BidItemGroupRecord: ResolverTypeWrapper<BidItemGroupRecord>;
  BidItemRecord: ResolverTypeWrapper<BidItemRecord>;
  BidLineItem: ResolverTypeWrapper<
    Omit<BidLineItem, "item"> & { item: ResolversTypes["BidItem"] }
  >;
  BidLineItemInput: BidLineItemInput;
  BidLineItemQueryResponse: ResolverTypeWrapper<BidLineItemQueryResponse>;
  BidLineItemUpdateInput: BidLineItemUpdateInput;
  BidQueryResponse: ResolverTypeWrapper<BidQueryResponse>;
  BidRequest: ResolverTypeWrapper<BidRequest>;
  BidRequestComment: ResolverTypeWrapper<BidRequestComment>;
  BidRequestCommentInput: BidRequestCommentInput;
  BidRequestDetails: ResolverTypeWrapper<BidRequestDetails>;
  BidRequestInput: BidRequestInput;
  BidRequestLineItem: ResolverTypeWrapper<
    Omit<BidRequestLineItem, "item"> & { item: ResolversTypes["BidItem"] }
  >;
  BidRequestLineItemInput: BidRequestLineItemInput;
  BidRequestLineItemQueryResponse: ResolverTypeWrapper<BidRequestLineItemQueryResponse>;
  BidRequestLineItemUpdateInput: BidRequestLineItemUpdateInput;
  BidRequestQueryResponse: ResolverTypeWrapper<BidRequestQueryResponse>;
  BidRequestUpdateInput: BidRequestUpdateInput;
  BidUpdateInput: BidUpdateInput;
  BillingCycleTypeUpdate: ResolverTypeWrapper<BillingCycleTypeUpdate>;
  BillingCycleTypeUpdatePreview: ResolverTypeWrapper<BillingCycleTypeUpdatePreview>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CheckoutSession: ResolverTypeWrapper<CheckoutSession>;
  ClonedFacilityItem: ResolverTypeWrapper<ClonedFacilityItem>;
  ClonedItem: ResolverTypeWrapper<ClonedItem>;
  ClonedItemDynamicContainerPayload: ResolverTypeWrapper<ClonedItemDynamicContainerPayload>;
  ClonedItemGroup: ResolverTypeWrapper<ClonedItemGroup>;
  ClonedItemStorageInventoryAreaLocation: ResolverTypeWrapper<ClonedItemStorageInventoryAreaLocation>;
  ClonedProduct: ResolverTypeWrapper<ClonedProduct>;
  ClonedSupplier: ResolverTypeWrapper<ClonedSupplier>;
  ClonedSupplierItem: ResolverTypeWrapper<ClonedSupplierItem>;
  ClosedParent: ResolverTypeWrapper<ClosedParent>;
  CommerceAccessControls: ResolverTypeWrapper<CommerceAccessControls>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CompanyInputUpdate: CompanyInputUpdate;
  CompanyIntegration: ResolverTypeWrapper<CompanyIntegration>;
  CompanyKanbanBin: ResolverTypeWrapper<CompanyKanbanBin>;
  CompanyKanbanBinInput: CompanyKanbanBinInput;
  CompanyOperatorLevel: ResolverTypeWrapper<CompanyOperatorLevel>;
  CompanyQueryResponse: ResolverTypeWrapper<CompanyQueryResponse>;
  CompanyTeam: ResolverTypeWrapper<CompanyTeam>;
  CompanyUser: ResolverTypeWrapper<CompanyUser>;
  CompanyUserAdminUpdateInput: CompanyUserAdminUpdateInput;
  CompanyUserQueryResponse: ResolverTypeWrapper<CompanyUserQueryResponse>;
  CompanyUserUpdateInput: CompanyUserUpdateInput;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  CreateKitTemplateInput: CreateKitTemplateInput;
  CreateQuickBooksAccountsInput: CreateQuickBooksAccountsInput;
  CreateQuickBooksIntegration: ResolverTypeWrapper<CreateQuickBooksIntegration>;
  CreateQuickBooksIntegrationInput: CreateQuickBooksIntegrationInput;
  CreateQuickBooksSyncInput: CreateQuickBooksSyncInput;
  CustomAppInput: CustomAppInput;
  CustomAppUpdateInput: CustomAppUpdateInput;
  CustomerPortal: ResolverTypeWrapper<CustomerPortal>;
  DeleteInstructionSubjectInput: DeleteInstructionSubjectInput;
  DeleteInstructionTemplateStepFromInstructionTemplateInput: DeleteInstructionTemplateStepFromInstructionTemplateInput;
  DeleteKitTemplatePartFromKitTemplateInput: DeleteKitTemplatePartFromKitTemplateInput;
  DeleteKitTemplatePartOptionFromKitTemplatePartInput: DeleteKitTemplatePartOptionFromKitTemplatePartInput;
  Departure: ResolverTypeWrapper<Departure>;
  DepartureComment: ResolverTypeWrapper<DepartureComment>;
  DepartureCommentInput: DepartureCommentInput;
  DepartureDetails: ResolverTypeWrapper<DepartureDetails>;
  DepartureInput: DepartureInput;
  DepartureLineItem: ResolverTypeWrapper<DepartureLineItem>;
  DepartureLineItemInput: DepartureLineItemInput;
  DepartureLineItemQueryResponse: ResolverTypeWrapper<DepartureLineItemQueryResponse>;
  DepartureLineItemUpdateInput: DepartureLineItemUpdateInput;
  DeparturePick: ResolverTypeWrapper<DeparturePick>;
  DeparturePickInput: DeparturePickInput;
  DeparturePickLineItem: ResolverTypeWrapper<DeparturePickLineItem>;
  DeparturePickList: ResolverTypeWrapper<DeparturePickList>;
  DeparturePickListInput: DeparturePickListInput;
  DeparturePickListLineItem: ResolverTypeWrapper<DeparturePickListLineItem>;
  DeparturePickListLineItemInput: DeparturePickListLineItemInput;
  DeparturePickListLineItemQueryResponse: ResolverTypeWrapper<DeparturePickListLineItemQueryResponse>;
  DeparturePickListLineItemUpdateInput: DeparturePickListLineItemUpdateInput;
  DeparturePickListQueryResponse: ResolverTypeWrapper<DeparturePickListQueryResponse>;
  DeparturePickListUpdateInput: DeparturePickListUpdateInput;
  DepartureQueryResponse: ResolverTypeWrapper<DepartureQueryResponse>;
  DepartureUpdateInput: DepartureUpdateInput;
  Device: ResolverTypeWrapper<Device>;
  DeviceAccess: ResolverTypeWrapper<DeviceAccess>;
  DeviceInfo: ResolverTypeWrapper<DeviceInfo>;
  DeviceQueryResponse: ResolverTypeWrapper<DeviceQueryResponse>;
  DeviceUpdateInput: DeviceUpdateInput;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  DimensionsInputUpdate: DimensionsInputUpdate;
  DynamicContainer: ResolverTypeWrapper<DynamicContainer>;
  DynamicContainerAdjustPayloadQuantityInput: DynamicContainerAdjustPayloadQuantityInput;
  DynamicContainerAttachInput: DynamicContainerAttachInput;
  DynamicContainerDeleteInput: DynamicContainerDeleteInput;
  DynamicContainerDetachInput: DynamicContainerDetachInput;
  DynamicContainerInput: DynamicContainerInput;
  DynamicContainerLoadInput: DynamicContainerLoadInput;
  DynamicContainerLocation: ResolverTypeWrapper<
    Omit<DynamicContainerLocation, "location"> & {
      location: ResolversTypes["DynamicContainerLocationRecord"];
    }
  >;
  DynamicContainerLocationRecord:
    | ResolversTypes["InventoryAreaLocation"]
    | ResolversTypes["PartialInventoryAreaLocation"];
  DynamicContainerPayload: ResolverTypeWrapper<
    Omit<DynamicContainerPayload, "payload"> & {
      payload: ResolversTypes["DynamicContainerPayloadRecord"];
    }
  >;
  DynamicContainerPayloadRecord: ResolversTypes["ItemDynamicContainerPayload"];
  DynamicContainerQueryResponse: ResolverTypeWrapper<DynamicContainerQueryResponse>;
  DynamicContainerUpdateInput: DynamicContainerUpdateInput;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeePermissions: ResolverTypeWrapper<EmployeePermissions>;
  EmployeeTraining: ResolverTypeWrapper<EmployeeTraining>;
  EmployeeTrainingStats: ResolverTypeWrapper<EmployeeTrainingStats>;
  EmployeeTrainingVideoStats: ResolverTypeWrapper<EmployeeTrainingVideoStats>;
  Event: ResolverTypeWrapper<Event>;
  EventDetails: ResolverTypeWrapper<EventDetails>;
  EventInput: EventInput;
  EventUpdateInput: EventUpdateInput;
  EventsBetweenDates: ResolverTypeWrapper<EventsBetweenDates>;
  ExecuteInstructionTemplateInput: ExecuteInstructionTemplateInput;
  ExternalProduct: ResolverTypeWrapper<ExternalProduct>;
  ExternalProductInput: ExternalProductInput;
  ExternalProductQueryResponse: ResolverTypeWrapper<ExternalProductQueryResponse>;
  Facility: ResolverTypeWrapper<Facility>;
  FacilityComponentConfiguration: ResolverTypeWrapper<FacilityComponentConfiguration>;
  FacilityDetails: ResolverTypeWrapper<FacilityDetails>;
  FacilityInput: FacilityInput;
  FacilityInputUpdate: FacilityInputUpdate;
  FacilityInventoryArea: ResolverTypeWrapper<FacilityInventoryArea>;
  FacilityInventoryAreaDeleteInput: FacilityInventoryAreaDeleteInput;
  FacilityInventoryAreaDynamicContainerType: ResolverTypeWrapper<FacilityInventoryAreaDynamicContainerType>;
  FacilityInventoryAreaDynamicContainerTypeInput: FacilityInventoryAreaDynamicContainerTypeInput;
  FacilityInventoryAreaInput: FacilityInventoryAreaInput;
  FacilityInventoryAreaUpdateInput: FacilityInventoryAreaUpdateInput;
  FacilityItem: ResolverTypeWrapper<FacilityItem>;
  FacilityItemGetInput: FacilityItemGetInput;
  FacilityItemInput: FacilityItemInput;
  FacilityItemQueryResponse: ResolverTypeWrapper<FacilityItemQueryResponse>;
  FacilityItemUpdateInput: FacilityItemUpdateInput;
  FacilityQueryResponse: ResolverTypeWrapper<FacilityQueryResponse>;
  FileStorageRecord: ResolverTypeWrapper<FileStorageRecord>;
  FileUploadInput: FileUploadInput;
  FinancialAccessControls: ResolverTypeWrapper<FinancialAccessControls>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  GetItemStorageInventoryAreaLocationQuery: GetItemStorageInventoryAreaLocationQuery;
  GetKitTemplateBomInput: GetKitTemplateBomInput;
  HeadlessUser: ResolverTypeWrapper<HeadlessUser>;
  HeadlessUserInputUpdate: HeadlessUserInputUpdate;
  HeadlessUserQueryResponse: ResolverTypeWrapper<HeadlessUserQueryResponse>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  InstalledApp: ResolverTypeWrapper<InstalledApp>;
  InstructionExecution: ResolverTypeWrapper<InstructionExecution>;
  InstructionExecutionDetails: ResolverTypeWrapper<InstructionExecutionDetails>;
  InstructionExecutionQueryResponse: ResolverTypeWrapper<InstructionExecutionQueryResponse>;
  InstructionExecutionStep: ResolverTypeWrapper<InstructionExecutionStep>;
  InstructionExecutionStepSubmission: ResolverTypeWrapper<InstructionExecutionStepSubmission>;
  InstructionExecutionUpdateInput: InstructionExecutionUpdateInput;
  InstructionSubject: ResolverTypeWrapper<InstructionSubject>;
  InstructionSubjectInput: InstructionSubjectInput;
  InstructionSubjectQueryResponse: ResolverTypeWrapper<InstructionSubjectQueryResponse>;
  InstructionSubjectTrigger: ResolverTypeWrapper<InstructionSubjectTrigger>;
  InstructionSubjectTriggerInput: InstructionSubjectTriggerInput;
  InstructionSubjectWithTemplate: ResolverTypeWrapper<InstructionSubjectWithTemplate>;
  InstructionSubjectWithTemplateQueryResponse: ResolverTypeWrapper<InstructionSubjectWithTemplateQueryResponse>;
  InstructionTemplate: ResolverTypeWrapper<InstructionTemplate>;
  InstructionTemplateDetails: ResolverTypeWrapper<InstructionTemplateDetails>;
  InstructionTemplateInput: InstructionTemplateInput;
  InstructionTemplateQueryResponse: ResolverTypeWrapper<InstructionTemplateQueryResponse>;
  InstructionTemplateStep: ResolverTypeWrapper<InstructionTemplateStep>;
  InstructionTemplateUpdateInput: InstructionTemplateUpdateInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  InventoryAreaLocation: ResolverTypeWrapper<InventoryAreaLocation>;
  InventoryAreaLocationInput: InventoryAreaLocationInput;
  InventoryAreaRuleInput: InventoryAreaRuleInput;
  InventoryHistoryRecord: ResolverTypeWrapper<InventoryHistoryRecord>;
  InventoryLog: ResolverTypeWrapper<InventoryLog>;
  InventoryLogQueryResponse: ResolverTypeWrapper<InventoryLogQueryResponse>;
  InventoryRecord: ResolverTypeWrapper<InventoryRecord>;
  InventoryRecordAdditionInput: InventoryRecordAdditionInput;
  InventoryRecordDeductionInput: InventoryRecordDeductionInput;
  InventoryStrategy: ResolverTypeWrapper<InventoryStrategy>;
  InventoryStrategyInput: InventoryStrategyInput;
  Invitation: ResolverTypeWrapper<Invitation>;
  InvitationFulfilledPromise: ResolverTypeWrapper<InvitationFulfilledPromise>;
  InvitationInput: InvitationInput;
  InvitationQueryResponse: ResolverTypeWrapper<InvitationQueryResponse>;
  InvitationRejectedPromise: ResolverTypeWrapper<InvitationRejectedPromise>;
  InvitationUpdateInput: InvitationUpdateInput;
  InvitationsInput: InvitationsInput;
  Item: ResolverTypeWrapper<Item>;
  ItemArrival: ResolverTypeWrapper<ItemArrival>;
  ItemDetails: ResolverTypeWrapper<ItemDetails>;
  ItemDynamicContainerPayload: ResolverTypeWrapper<ItemDynamicContainerPayload>;
  ItemDynamicContainerPayloadInput: ItemDynamicContainerPayloadInput;
  ItemGroup: ResolverTypeWrapper<ItemGroup>;
  ItemGroupDeleteInput: ItemGroupDeleteInput;
  ItemGroupDetails: ResolverTypeWrapper<ItemGroupDetails>;
  ItemGroupInput: ItemGroupInput;
  ItemGroupUpdateInput: ItemGroupUpdateInput;
  ItemGroupsWithItems: ResolverTypeWrapper<ItemGroupsWithItems>;
  ItemInput: ItemInput;
  ItemInputUpdate: ItemInputUpdate;
  ItemInventory: ResolverTypeWrapper<ItemInventory>;
  ItemPPUInput: ItemPpuInput;
  ItemPPUInputUpdate: ItemPpuInputUpdate;
  ItemPPUTierInput: ItemPpuTierInput;
  ItemPPUTierInputUpdate: ItemPpuTierInputUpdate;
  ItemQueryResponse: ResolverTypeWrapper<ItemQueryResponse>;
  ItemStorageInventoryAreaLocation: ResolverTypeWrapper<ItemStorageInventoryAreaLocation>;
  ItemStorageInventoryAreaLocationDeleteInput: ItemStorageInventoryAreaLocationDeleteInput;
  ItemStorageInventoryAreaLocationGetInput: ItemStorageInventoryAreaLocationGetInput;
  ItemStorageInventoryAreaLocationHandleInput: ItemStorageInventoryAreaLocationHandleInput;
  ItemStorageInventoryAreaLocationInput: ItemStorageInventoryAreaLocationInput;
  ItemStorageInventoryAreaLocationUpdateInput: ItemStorageInventoryAreaLocationUpdateInput;
  ItemStorageInventoryAreaPpu: ResolverTypeWrapper<ItemStorageInventoryAreaPpu>;
  ItemStorageInventoryAreaRule: ResolverTypeWrapper<ItemStorageInventoryAreaRule>;
  ItemStorageInventoryAreaRuleInput: ItemStorageInventoryAreaRuleInput;
  ItemStorageInventoryAreaRuleQueryResponse: ResolverTypeWrapper<ItemStorageInventoryAreaRuleQueryResponse>;
  ItemStorageInventoryAreaRuleUpdateInput: ItemStorageInventoryAreaRuleUpdateInput;
  ItemUnitsOfMeasure: ResolverTypeWrapper<ItemUnitsOfMeasure>;
  ItemUnitsOfMeasureInput: ItemUnitsOfMeasureInput;
  ItemWithPrimarySupplier: ResolverTypeWrapper<ItemWithPrimarySupplier>;
  ItemWithPrimarySupplierQueryResponse: ResolverTypeWrapper<ItemWithPrimarySupplierQueryResponse>;
  Items: ResolverTypeWrapper<Items>;
  Kanban: ResolverTypeWrapper<Kanban>;
  KanbanInput: KanbanInput;
  KanbanInputUpdate: KanbanInputUpdate;
  Kiosk: ResolverTypeWrapper<Kiosk>;
  KioskAccess: ResolverTypeWrapper<KioskAccess>;
  KioskInput: KioskInput;
  KioskProperty: ResolverTypeWrapper<KioskProperty>;
  KioskPropertyInput: KioskPropertyInput;
  KioskQueryResponse: ResolverTypeWrapper<KioskQueryResponse>;
  KioskUpdateInput: KioskUpdateInput;
  KitTemplate: ResolverTypeWrapper<KitTemplate>;
  KitTemplateBomEntry: ResolverTypeWrapper<KitTemplateBomEntry>;
  KitTemplateDetails: ResolverTypeWrapper<KitTemplateDetails>;
  KitTemplateDimensions: ResolverTypeWrapper<KitTemplateDimensions>;
  KitTemplateDimensionsInput: KitTemplateDimensionsInput;
  KitTemplatePart: ResolverTypeWrapper<KitTemplatePart>;
  KitTemplatePartDimensionCalculation: ResolverTypeWrapper<KitTemplatePartDimensionCalculation>;
  KitTemplatePartDimensionCalculationInput: KitTemplatePartDimensionCalculationInput;
  KitTemplatePartDimensions: ResolverTypeWrapper<KitTemplatePartDimensions>;
  KitTemplatePartDimensionsInput: KitTemplatePartDimensionsInput;
  KitTemplatePartOption: ResolverTypeWrapper<KitTemplatePartOption>;
  KitTemplatePartOptionChildDetails: ResolverTypeWrapper<KitTemplatePartOptionChildDetails>;
  KitTemplateQueryResponse: ResolverTypeWrapper<KitTemplateQueryResponse>;
  KitTemplateTree: ResolverTypeWrapper<KitTemplateTree>;
  Ledger: ResolverTypeWrapper<Ledger>;
  LedgerInput: LedgerInput;
  LogOperator: ResolverTypeWrapper<LogOperator>;
  MobileAccessControls: ResolverTypeWrapper<MobileAccessControls>;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  OfficialAppInstallation: ResolverTypeWrapper<OfficialAppInstallation>;
  Operator: ResolverTypeWrapper<Operator>;
  OperatorAccess: ResolverTypeWrapper<OperatorAccess>;
  OperatorInput: OperatorInput;
  OperatorInputUpdate: OperatorInputUpdate;
  PartOptionSelection: PartOptionSelection;
  PartialInventoryAreaLocation: ResolverTypeWrapper<PartialInventoryAreaLocation>;
  PartialInventoryAreaLocationInput: PartialInventoryAreaLocationInput;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentCreateCheckoutSessionInput: PaymentCreateCheckoutSessionInput;
  PaymentCreateCustomerPortalInput: PaymentCreateCustomerPortalInput;
  PaymentPreviewBillingCycleTypeUpdate: PaymentPreviewBillingCycleTypeUpdate;
  PaymentPreviewSubscriptionUpdate: PaymentPreviewSubscriptionUpdate;
  PaymentUpdateBillingCycleType: PaymentUpdateBillingCycleType;
  PaymentUpdateSubscription: PaymentUpdateSubscription;
  PfepAccessControls: ResolverTypeWrapper<PfepAccessControls>;
  PickStorageLocationForDepartureInput: PickStorageLocationForDepartureInput;
  PresignedPost: ResolverTypeWrapper<PresignedPost>;
  Prices: ResolverTypeWrapper<Prices>;
  Product: ResolverTypeWrapper<Product>;
  ProductDetails: ResolverTypeWrapper<ProductDetails>;
  ProductInput: ProductInput;
  ProductQueryResponse: ResolverTypeWrapper<ProductQueryResponse>;
  ProductUpdateInput: ProductUpdateInput;
  ProductionAccessControls: ResolverTypeWrapper<ProductionAccessControls>;
  Query: ResolverTypeWrapper<{}>;
  QueryFilterInput: QueryFilterInput;
  QuickBooksAccount: ResolverTypeWrapper<QuickBooksAccount>;
  QuickBooksAccounts: ResolverTypeWrapper<QuickBooksAccounts>;
  QuickBooksAccountsInput: QuickBooksAccountsInput;
  QuickBooksAndJeenyIds: QuickBooksAndJeenyIds;
  QuickBooksAuthUrl: ResolverTypeWrapper<QuickBooksAuthUrl>;
  QuickBooksIntegrationAccounts: ResolverTypeWrapper<QuickBooksIntegrationAccounts>;
  QuickBooksItem: ResolverTypeWrapper<QuickBooksItem>;
  QuickBooksItemSyncList: ResolverTypeWrapper<QuickBooksItemSyncList>;
  QuickBooksRef: ResolverTypeWrapper<QuickBooksRef>;
  QuickBooksRefInput: QuickBooksRefInput;
  QuickBooksSupplier: ResolverTypeWrapper<QuickBooksSupplier>;
  QuickBooksSupplierSyncList: ResolverTypeWrapper<QuickBooksSupplierSyncList>;
  QuickBooksSync: ResolverTypeWrapper<QuickBooksSync>;
  QuickBooksSyncList: ResolverTypeWrapper<QuickBooksSyncList>;
  QuickBooksToken: ResolverTypeWrapper<QuickBooksToken>;
  QuickBooksWebAddress: ResolverTypeWrapper<QuickBooksWebAddress>;
  ResultListByStatus:
    | ResolversTypes["InvitationFulfilledPromise"]
    | ResolversTypes["InvitationRejectedPromise"];
  RevokeQuickBooksIntegration: ResolverTypeWrapper<RevokeQuickBooksIntegration>;
  SafeOperator: ResolverTypeWrapper<SafeOperator>;
  SafeOperatorQueryResponse: ResolverTypeWrapper<SafeOperatorQueryResponse>;
  SafeShopifyIntegration: ResolverTypeWrapper<SafeShopifyIntegration>;
  SafeShopifyIntegrationQueryResponse: ResolverTypeWrapper<SafeShopifyIntegrationQueryResponse>;
  SeatStatus: ResolverTypeWrapper<SeatStatus>;
  SetDefaultKitTemplatePartOptionInput: SetDefaultKitTemplatePartOptionInput;
  ShopifyProduct: ResolverTypeWrapper<ShopifyProduct>;
  ShopifyProductImage: ResolverTypeWrapper<ShopifyProductImage>;
  ShopifyProductOption: ResolverTypeWrapper<ShopifyProductOption>;
  ShopifyProductVariant: ResolverTypeWrapper<ShopifyProductVariant>;
  StorageInventory: ResolverTypeWrapper<StorageInventory>;
  StorageInventoryArea: ResolverTypeWrapper<StorageInventoryArea>;
  StorageInventoryAreaLocation: ResolverTypeWrapper<StorageInventoryAreaLocation>;
  StorageInventoryAreaLocationInput: StorageInventoryAreaLocationInput;
  StorageInventoryAreaLocationPayload: ResolverTypeWrapper<StorageInventoryAreaLocationPayload>;
  StorageInventoryAreaLocationQueryResponse: ResolverTypeWrapper<StorageInventoryAreaLocationQueryResponse>;
  StorageInventoryAreaLocationUpdateInput: StorageInventoryAreaLocationUpdateInput;
  StorageInventoryAreaRule: ResolverTypeWrapper<StorageInventoryAreaRule>;
  StorageInventoryAreaRuleInput: StorageInventoryAreaRuleInput;
  StorageInventoryAreaRuleUpdateInput: StorageInventoryAreaRuleUpdateInput;
  StorageInventoryPickRecord:
    | ResolversTypes["ItemDynamicContainerPayload"]
    | ResolversTypes["ItemStorageInventoryAreaLocation"];
  StorageLog: ResolverTypeWrapper<StorageLog>;
  StorageLogInput: StorageLogInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  SubmitInstructionExecutionStepInput: SubmitInstructionExecutionStepInput;
  SubscriptionCancellation: ResolverTypeWrapper<SubscriptionCancellation>;
  SubscriptionResumption: ResolverTypeWrapper<SubscriptionResumption>;
  SubscriptionUpdate: ResolverTypeWrapper<SubscriptionUpdate>;
  SubscriptionUpdatePreview: ResolverTypeWrapper<SubscriptionUpdatePreview>;
  Supplier: ResolverTypeWrapper<Supplier>;
  SupplierDetails: ResolverTypeWrapper<SupplierDetails>;
  SupplierInput: SupplierInput;
  SupplierInputUpdate: SupplierInputUpdate;
  SupplierItem: ResolverTypeWrapper<SupplierItem>;
  SupplierItemDeliveryContainer: ResolverTypeWrapper<SupplierItemDeliveryContainer>;
  SupplierItemDeliveryContainerInput: SupplierItemDeliveryContainerInput;
  SupplierItemDeliveryContainerInputUpdate: SupplierItemDeliveryContainerInputUpdate;
  SupplierItemInput: SupplierItemInput;
  SupplierItemInputUpdate: SupplierItemInputUpdate;
  SupplierItemPPU: ResolverTypeWrapper<SupplierItemPpu>;
  SupplierItemPPUTier: ResolverTypeWrapper<SupplierItemPpuTier>;
  SupplierItemQueryResponse: ResolverTypeWrapper<SupplierItemQueryResponse>;
  SupplierItemUnitsOfMeasure: ResolverTypeWrapper<SupplierItemUnitsOfMeasure>;
  SupplierItemUnitsOfMeasureCustom: ResolverTypeWrapper<SupplierItemUnitsOfMeasureCustom>;
  SupplierItemUnitsOfMeasureCustomInput: SupplierItemUnitsOfMeasureCustomInput;
  SupplierItemUnitsOfMeasureInput: SupplierItemUnitsOfMeasureInput;
  SupplierQueryResponse: ResolverTypeWrapper<SupplierQueryResponse>;
  Suppliers: ResolverTypeWrapper<Suppliers>;
  Team: ResolverTypeWrapper<Team>;
  TeamDetails: ResolverTypeWrapper<TeamDetails>;
  TeamInput: TeamInput;
  TeamInputUpdate: TeamInputUpdate;
  TeamQueryResponse: ResolverTypeWrapper<TeamQueryResponse>;
  UpdateInstructionSubjectInput: UpdateInstructionSubjectInput;
  UpdateInstructionTemplateStepInput: UpdateInstructionTemplateStepInput;
  UpdateKitTemplateInput: UpdateKitTemplateInput;
  UpdateKitTemplatePartInput: UpdateKitTemplatePartInput;
  User: ResolverTypeWrapper<User>;
  UserInputUpdate: UserInputUpdate;
  Workbench: ResolverTypeWrapper<Workbench>;
  WorkbenchAccessory: ResolverTypeWrapper<WorkbenchAccessory>;
  WorkbenchAccessoryInput: WorkbenchAccessoryInput;
  WorkbenchConfiguration: ResolverTypeWrapper<WorkbenchConfiguration>;
  WorkbenchConfigurationInput: WorkbenchConfigurationInput;
  WorkbenchDimensions: ResolverTypeWrapper<WorkbenchDimensions>;
  WorkbenchDimensionsInput: WorkbenchDimensionsInput;
  WorkbenchFlowrackLane: ResolverTypeWrapper<WorkbenchFlowrackLane>;
  WorkbenchFlowrackLaneInput: WorkbenchFlowrackLaneInput;
  WorkbenchHardware: ResolverTypeWrapper<WorkbenchHardware>;
  WorkbenchHistoryLog: ResolverTypeWrapper<WorkbenchHistoryLog>;
  WorkbenchHistoryLogInput: WorkbenchHistoryLogInput;
  WorkbenchHistoryLogInputUpdate: WorkbenchHistoryLogInputUpdate;
  WorkbenchInput: WorkbenchInput;
  WorkbenchInputUpdate: WorkbenchInputUpdate;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessControls: AccessControls;
  AccessType: AccessType;
  AddInstructionTemplateStepToInstructionTemplateInput: AddInstructionTemplateStepToInstructionTemplateInput;
  AddKitTemplatePartOptionToKitTemplatePartInput: AddKitTemplatePartOptionToKitTemplatePartInput;
  AddKitTemplatePartToKitTemplateInput: AddKitTemplatePartToKitTemplateInput;
  AddKitTemplatePartWithOptionToKitTemplateInput: AddKitTemplatePartWithOptionToKitTemplateInput;
  Address: Address;
  AddressInput: AddressInput;
  AddressUpdateInput: AddressUpdateInput;
  App: App;
  AppMediaUploadInput: AppMediaUploadInput;
  AppUsageLog: AppUsageLog;
  AppUsageLogInput: AppUsageLogInput;
  Apps: Apps;
  Arrival: Arrival;
  ArrivalComment: ArrivalComment;
  ArrivalCommentInput: ArrivalCommentInput;
  ArrivalDelivery: ArrivalDelivery;
  ArrivalDeliveryDeleteInput: ArrivalDeliveryDeleteInput;
  ArrivalDeliveryInput: ArrivalDeliveryInput;
  ArrivalDeliveryLineItem: ArrivalDeliveryLineItem;
  ArrivalDeliveryLineItemInput: ArrivalDeliveryLineItemInput;
  ArrivalDeliveryLineItemRecord: ArrivalDeliveryLineItemRecord;
  ArrivalDeliveryLineItemUpdateInput: ArrivalDeliveryLineItemUpdateInput;
  ArrivalDeliveryUpdateInput: ArrivalDeliveryUpdateInput;
  ArrivalDetailsWithStatus: ArrivalDetailsWithStatus;
  ArrivalInput: ArrivalInput;
  ArrivalLineItem: ArrivalLineItem;
  ArrivalLineItemDeleteInput: ArrivalLineItemDeleteInput;
  ArrivalLineItemInput: ArrivalLineItemInput;
  ArrivalLineItemRecord: ArrivalLineItemRecord;
  ArrivalLineItemUpdateInput: ArrivalLineItemUpdateInput;
  ArrivalLineItemWithStatus: ArrivalLineItemWithStatus;
  ArrivalQueryResponse: ArrivalQueryResponse;
  ArrivalRelease: ArrivalRelease;
  ArrivalReleaseDeleteInput: ArrivalReleaseDeleteInput;
  ArrivalReleaseInput: ArrivalReleaseInput;
  ArrivalReleaseLineItem: ArrivalReleaseLineItem;
  ArrivalReleaseLineItemDeleteInput: ArrivalReleaseLineItemDeleteInput;
  ArrivalReleaseLineItemInput: ArrivalReleaseLineItemInput;
  ArrivalReleaseLineItemRecord: ArrivalReleaseLineItemRecord;
  ArrivalReleaseLineItemUpdateInput: ArrivalReleaseLineItemUpdateInput;
  ArrivalReleaseLineItemWithStatus: ArrivalReleaseLineItemWithStatus;
  ArrivalReleaseQueryResponse: ArrivalReleaseQueryResponse;
  ArrivalReleaseRecordInput: ArrivalReleaseRecordInput;
  ArrivalReleaseSurcharge: ArrivalReleaseSurcharge;
  ArrivalReleaseSurchargeInput: ArrivalReleaseSurchargeInput;
  ArrivalReleaseUpdateInput: ArrivalReleaseUpdateInput;
  ArrivalReleaseWithStatus: ArrivalReleaseWithStatus;
  ArrivalReleaseWithStatusQueryResponse: ArrivalReleaseWithStatusQueryResponse;
  ArrivalUpdateInput: ArrivalUpdateInput;
  ArrivalWithStatus: ArrivalWithStatus;
  BackOfficeAccessControls: BackOfficeAccessControls;
  Bid: Bid;
  BidIdInput: BidIdInput;
  BidInput: BidInput;
  BidItem:
    | ResolversParentTypes["BidItemGroupRecord"]
    | ResolversParentTypes["BidItemRecord"];
  BidItemGroupRecord: BidItemGroupRecord;
  BidItemRecord: BidItemRecord;
  BidLineItem: Omit<BidLineItem, "item"> & {
    item: ResolversParentTypes["BidItem"];
  };
  BidLineItemInput: BidLineItemInput;
  BidLineItemQueryResponse: BidLineItemQueryResponse;
  BidLineItemUpdateInput: BidLineItemUpdateInput;
  BidQueryResponse: BidQueryResponse;
  BidRequest: BidRequest;
  BidRequestComment: BidRequestComment;
  BidRequestCommentInput: BidRequestCommentInput;
  BidRequestDetails: BidRequestDetails;
  BidRequestInput: BidRequestInput;
  BidRequestLineItem: Omit<BidRequestLineItem, "item"> & {
    item: ResolversParentTypes["BidItem"];
  };
  BidRequestLineItemInput: BidRequestLineItemInput;
  BidRequestLineItemQueryResponse: BidRequestLineItemQueryResponse;
  BidRequestLineItemUpdateInput: BidRequestLineItemUpdateInput;
  BidRequestQueryResponse: BidRequestQueryResponse;
  BidRequestUpdateInput: BidRequestUpdateInput;
  BidUpdateInput: BidUpdateInput;
  BillingCycleTypeUpdate: BillingCycleTypeUpdate;
  BillingCycleTypeUpdatePreview: BillingCycleTypeUpdatePreview;
  Boolean: Scalars["Boolean"];
  CheckoutSession: CheckoutSession;
  ClonedFacilityItem: ClonedFacilityItem;
  ClonedItem: ClonedItem;
  ClonedItemDynamicContainerPayload: ClonedItemDynamicContainerPayload;
  ClonedItemGroup: ClonedItemGroup;
  ClonedItemStorageInventoryAreaLocation: ClonedItemStorageInventoryAreaLocation;
  ClonedProduct: ClonedProduct;
  ClonedSupplier: ClonedSupplier;
  ClonedSupplierItem: ClonedSupplierItem;
  ClosedParent: ClosedParent;
  CommerceAccessControls: CommerceAccessControls;
  Company: Company;
  CompanyInput: CompanyInput;
  CompanyInputUpdate: CompanyInputUpdate;
  CompanyIntegration: CompanyIntegration;
  CompanyKanbanBin: CompanyKanbanBin;
  CompanyKanbanBinInput: CompanyKanbanBinInput;
  CompanyOperatorLevel: CompanyOperatorLevel;
  CompanyQueryResponse: CompanyQueryResponse;
  CompanyTeam: CompanyTeam;
  CompanyUser: CompanyUser;
  CompanyUserAdminUpdateInput: CompanyUserAdminUpdateInput;
  CompanyUserQueryResponse: CompanyUserQueryResponse;
  CompanyUserUpdateInput: CompanyUserUpdateInput;
  Contact: Contact;
  ContactInput: ContactInput;
  CreateKitTemplateInput: CreateKitTemplateInput;
  CreateQuickBooksAccountsInput: CreateQuickBooksAccountsInput;
  CreateQuickBooksIntegration: CreateQuickBooksIntegration;
  CreateQuickBooksIntegrationInput: CreateQuickBooksIntegrationInput;
  CreateQuickBooksSyncInput: CreateQuickBooksSyncInput;
  CustomAppInput: CustomAppInput;
  CustomAppUpdateInput: CustomAppUpdateInput;
  CustomerPortal: CustomerPortal;
  DeleteInstructionSubjectInput: DeleteInstructionSubjectInput;
  DeleteInstructionTemplateStepFromInstructionTemplateInput: DeleteInstructionTemplateStepFromInstructionTemplateInput;
  DeleteKitTemplatePartFromKitTemplateInput: DeleteKitTemplatePartFromKitTemplateInput;
  DeleteKitTemplatePartOptionFromKitTemplatePartInput: DeleteKitTemplatePartOptionFromKitTemplatePartInput;
  Departure: Departure;
  DepartureComment: DepartureComment;
  DepartureCommentInput: DepartureCommentInput;
  DepartureDetails: DepartureDetails;
  DepartureInput: DepartureInput;
  DepartureLineItem: DepartureLineItem;
  DepartureLineItemInput: DepartureLineItemInput;
  DepartureLineItemQueryResponse: DepartureLineItemQueryResponse;
  DepartureLineItemUpdateInput: DepartureLineItemUpdateInput;
  DeparturePick: DeparturePick;
  DeparturePickInput: DeparturePickInput;
  DeparturePickLineItem: DeparturePickLineItem;
  DeparturePickList: DeparturePickList;
  DeparturePickListInput: DeparturePickListInput;
  DeparturePickListLineItem: DeparturePickListLineItem;
  DeparturePickListLineItemInput: DeparturePickListLineItemInput;
  DeparturePickListLineItemQueryResponse: DeparturePickListLineItemQueryResponse;
  DeparturePickListLineItemUpdateInput: DeparturePickListLineItemUpdateInput;
  DeparturePickListQueryResponse: DeparturePickListQueryResponse;
  DeparturePickListUpdateInput: DeparturePickListUpdateInput;
  DepartureQueryResponse: DepartureQueryResponse;
  DepartureUpdateInput: DepartureUpdateInput;
  Device: Device;
  DeviceAccess: DeviceAccess;
  DeviceInfo: DeviceInfo;
  DeviceQueryResponse: DeviceQueryResponse;
  DeviceUpdateInput: DeviceUpdateInput;
  Dimensions: Dimensions;
  DimensionsInputUpdate: DimensionsInputUpdate;
  DynamicContainer: DynamicContainer;
  DynamicContainerAdjustPayloadQuantityInput: DynamicContainerAdjustPayloadQuantityInput;
  DynamicContainerAttachInput: DynamicContainerAttachInput;
  DynamicContainerDeleteInput: DynamicContainerDeleteInput;
  DynamicContainerDetachInput: DynamicContainerDetachInput;
  DynamicContainerInput: DynamicContainerInput;
  DynamicContainerLoadInput: DynamicContainerLoadInput;
  DynamicContainerLocation: Omit<DynamicContainerLocation, "location"> & {
    location: ResolversParentTypes["DynamicContainerLocationRecord"];
  };
  DynamicContainerLocationRecord:
    | ResolversParentTypes["InventoryAreaLocation"]
    | ResolversParentTypes["PartialInventoryAreaLocation"];
  DynamicContainerPayload: Omit<DynamicContainerPayload, "payload"> & {
    payload: ResolversParentTypes["DynamicContainerPayloadRecord"];
  };
  DynamicContainerPayloadRecord: ResolversParentTypes["ItemDynamicContainerPayload"];
  DynamicContainerQueryResponse: DynamicContainerQueryResponse;
  DynamicContainerUpdateInput: DynamicContainerUpdateInput;
  Employee: Employee;
  EmployeePermissions: EmployeePermissions;
  EmployeeTraining: EmployeeTraining;
  EmployeeTrainingStats: EmployeeTrainingStats;
  EmployeeTrainingVideoStats: EmployeeTrainingVideoStats;
  Event: Event;
  EventDetails: EventDetails;
  EventInput: EventInput;
  EventUpdateInput: EventUpdateInput;
  EventsBetweenDates: EventsBetweenDates;
  ExecuteInstructionTemplateInput: ExecuteInstructionTemplateInput;
  ExternalProduct: ExternalProduct;
  ExternalProductInput: ExternalProductInput;
  ExternalProductQueryResponse: ExternalProductQueryResponse;
  Facility: Facility;
  FacilityComponentConfiguration: FacilityComponentConfiguration;
  FacilityDetails: FacilityDetails;
  FacilityInput: FacilityInput;
  FacilityInputUpdate: FacilityInputUpdate;
  FacilityInventoryArea: FacilityInventoryArea;
  FacilityInventoryAreaDeleteInput: FacilityInventoryAreaDeleteInput;
  FacilityInventoryAreaDynamicContainerType: FacilityInventoryAreaDynamicContainerType;
  FacilityInventoryAreaDynamicContainerTypeInput: FacilityInventoryAreaDynamicContainerTypeInput;
  FacilityInventoryAreaInput: FacilityInventoryAreaInput;
  FacilityInventoryAreaUpdateInput: FacilityInventoryAreaUpdateInput;
  FacilityItem: FacilityItem;
  FacilityItemGetInput: FacilityItemGetInput;
  FacilityItemInput: FacilityItemInput;
  FacilityItemQueryResponse: FacilityItemQueryResponse;
  FacilityItemUpdateInput: FacilityItemUpdateInput;
  FacilityQueryResponse: FacilityQueryResponse;
  FileStorageRecord: FileStorageRecord;
  FileUploadInput: FileUploadInput;
  FinancialAccessControls: FinancialAccessControls;
  Float: Scalars["Float"];
  GetItemStorageInventoryAreaLocationQuery: GetItemStorageInventoryAreaLocationQuery;
  GetKitTemplateBomInput: GetKitTemplateBomInput;
  HeadlessUser: HeadlessUser;
  HeadlessUserInputUpdate: HeadlessUserInputUpdate;
  HeadlessUserQueryResponse: HeadlessUserQueryResponse;
  ID: Scalars["ID"];
  InstalledApp: InstalledApp;
  InstructionExecution: InstructionExecution;
  InstructionExecutionDetails: InstructionExecutionDetails;
  InstructionExecutionQueryResponse: InstructionExecutionQueryResponse;
  InstructionExecutionStep: InstructionExecutionStep;
  InstructionExecutionStepSubmission: InstructionExecutionStepSubmission;
  InstructionExecutionUpdateInput: InstructionExecutionUpdateInput;
  InstructionSubject: InstructionSubject;
  InstructionSubjectInput: InstructionSubjectInput;
  InstructionSubjectQueryResponse: InstructionSubjectQueryResponse;
  InstructionSubjectTrigger: InstructionSubjectTrigger;
  InstructionSubjectTriggerInput: InstructionSubjectTriggerInput;
  InstructionSubjectWithTemplate: InstructionSubjectWithTemplate;
  InstructionSubjectWithTemplateQueryResponse: InstructionSubjectWithTemplateQueryResponse;
  InstructionTemplate: InstructionTemplate;
  InstructionTemplateDetails: InstructionTemplateDetails;
  InstructionTemplateInput: InstructionTemplateInput;
  InstructionTemplateQueryResponse: InstructionTemplateQueryResponse;
  InstructionTemplateStep: InstructionTemplateStep;
  InstructionTemplateUpdateInput: InstructionTemplateUpdateInput;
  Int: Scalars["Int"];
  InventoryAreaLocation: InventoryAreaLocation;
  InventoryAreaLocationInput: InventoryAreaLocationInput;
  InventoryAreaRuleInput: InventoryAreaRuleInput;
  InventoryHistoryRecord: InventoryHistoryRecord;
  InventoryLog: InventoryLog;
  InventoryLogQueryResponse: InventoryLogQueryResponse;
  InventoryRecord: InventoryRecord;
  InventoryRecordAdditionInput: InventoryRecordAdditionInput;
  InventoryRecordDeductionInput: InventoryRecordDeductionInput;
  InventoryStrategy: InventoryStrategy;
  InventoryStrategyInput: InventoryStrategyInput;
  Invitation: Invitation;
  InvitationFulfilledPromise: InvitationFulfilledPromise;
  InvitationInput: InvitationInput;
  InvitationQueryResponse: InvitationQueryResponse;
  InvitationRejectedPromise: InvitationRejectedPromise;
  InvitationUpdateInput: InvitationUpdateInput;
  InvitationsInput: InvitationsInput;
  Item: Item;
  ItemArrival: ItemArrival;
  ItemDetails: ItemDetails;
  ItemDynamicContainerPayload: ItemDynamicContainerPayload;
  ItemDynamicContainerPayloadInput: ItemDynamicContainerPayloadInput;
  ItemGroup: ItemGroup;
  ItemGroupDeleteInput: ItemGroupDeleteInput;
  ItemGroupDetails: ItemGroupDetails;
  ItemGroupInput: ItemGroupInput;
  ItemGroupUpdateInput: ItemGroupUpdateInput;
  ItemGroupsWithItems: ItemGroupsWithItems;
  ItemInput: ItemInput;
  ItemInputUpdate: ItemInputUpdate;
  ItemInventory: ItemInventory;
  ItemPPUInput: ItemPpuInput;
  ItemPPUInputUpdate: ItemPpuInputUpdate;
  ItemPPUTierInput: ItemPpuTierInput;
  ItemPPUTierInputUpdate: ItemPpuTierInputUpdate;
  ItemQueryResponse: ItemQueryResponse;
  ItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
  ItemStorageInventoryAreaLocationDeleteInput: ItemStorageInventoryAreaLocationDeleteInput;
  ItemStorageInventoryAreaLocationGetInput: ItemStorageInventoryAreaLocationGetInput;
  ItemStorageInventoryAreaLocationHandleInput: ItemStorageInventoryAreaLocationHandleInput;
  ItemStorageInventoryAreaLocationInput: ItemStorageInventoryAreaLocationInput;
  ItemStorageInventoryAreaLocationUpdateInput: ItemStorageInventoryAreaLocationUpdateInput;
  ItemStorageInventoryAreaPpu: ItemStorageInventoryAreaPpu;
  ItemStorageInventoryAreaRule: ItemStorageInventoryAreaRule;
  ItemStorageInventoryAreaRuleInput: ItemStorageInventoryAreaRuleInput;
  ItemStorageInventoryAreaRuleQueryResponse: ItemStorageInventoryAreaRuleQueryResponse;
  ItemStorageInventoryAreaRuleUpdateInput: ItemStorageInventoryAreaRuleUpdateInput;
  ItemUnitsOfMeasure: ItemUnitsOfMeasure;
  ItemUnitsOfMeasureInput: ItemUnitsOfMeasureInput;
  ItemWithPrimarySupplier: ItemWithPrimarySupplier;
  ItemWithPrimarySupplierQueryResponse: ItemWithPrimarySupplierQueryResponse;
  Items: Items;
  Kanban: Kanban;
  KanbanInput: KanbanInput;
  KanbanInputUpdate: KanbanInputUpdate;
  Kiosk: Kiosk;
  KioskAccess: KioskAccess;
  KioskInput: KioskInput;
  KioskProperty: KioskProperty;
  KioskPropertyInput: KioskPropertyInput;
  KioskQueryResponse: KioskQueryResponse;
  KioskUpdateInput: KioskUpdateInput;
  KitTemplate: KitTemplate;
  KitTemplateBomEntry: KitTemplateBomEntry;
  KitTemplateDetails: KitTemplateDetails;
  KitTemplateDimensions: KitTemplateDimensions;
  KitTemplateDimensionsInput: KitTemplateDimensionsInput;
  KitTemplatePart: KitTemplatePart;
  KitTemplatePartDimensionCalculation: KitTemplatePartDimensionCalculation;
  KitTemplatePartDimensionCalculationInput: KitTemplatePartDimensionCalculationInput;
  KitTemplatePartDimensions: KitTemplatePartDimensions;
  KitTemplatePartDimensionsInput: KitTemplatePartDimensionsInput;
  KitTemplatePartOption: KitTemplatePartOption;
  KitTemplatePartOptionChildDetails: KitTemplatePartOptionChildDetails;
  KitTemplateQueryResponse: KitTemplateQueryResponse;
  KitTemplateTree: KitTemplateTree;
  Ledger: Ledger;
  LedgerInput: LedgerInput;
  LogOperator: LogOperator;
  MobileAccessControls: MobileAccessControls;
  Mutation: {};
  Note: Note;
  OfficialAppInstallation: OfficialAppInstallation;
  Operator: Operator;
  OperatorAccess: OperatorAccess;
  OperatorInput: OperatorInput;
  OperatorInputUpdate: OperatorInputUpdate;
  PartOptionSelection: PartOptionSelection;
  PartialInventoryAreaLocation: PartialInventoryAreaLocation;
  PartialInventoryAreaLocationInput: PartialInventoryAreaLocationInput;
  Payment: Payment;
  PaymentCreateCheckoutSessionInput: PaymentCreateCheckoutSessionInput;
  PaymentCreateCustomerPortalInput: PaymentCreateCustomerPortalInput;
  PaymentPreviewBillingCycleTypeUpdate: PaymentPreviewBillingCycleTypeUpdate;
  PaymentPreviewSubscriptionUpdate: PaymentPreviewSubscriptionUpdate;
  PaymentUpdateBillingCycleType: PaymentUpdateBillingCycleType;
  PaymentUpdateSubscription: PaymentUpdateSubscription;
  PfepAccessControls: PfepAccessControls;
  PickStorageLocationForDepartureInput: PickStorageLocationForDepartureInput;
  PresignedPost: PresignedPost;
  Prices: Prices;
  Product: Product;
  ProductDetails: ProductDetails;
  ProductInput: ProductInput;
  ProductQueryResponse: ProductQueryResponse;
  ProductUpdateInput: ProductUpdateInput;
  ProductionAccessControls: ProductionAccessControls;
  Query: {};
  QueryFilterInput: QueryFilterInput;
  QuickBooksAccount: QuickBooksAccount;
  QuickBooksAccounts: QuickBooksAccounts;
  QuickBooksAccountsInput: QuickBooksAccountsInput;
  QuickBooksAndJeenyIds: QuickBooksAndJeenyIds;
  QuickBooksAuthUrl: QuickBooksAuthUrl;
  QuickBooksIntegrationAccounts: QuickBooksIntegrationAccounts;
  QuickBooksItem: QuickBooksItem;
  QuickBooksItemSyncList: QuickBooksItemSyncList;
  QuickBooksRef: QuickBooksRef;
  QuickBooksRefInput: QuickBooksRefInput;
  QuickBooksSupplier: QuickBooksSupplier;
  QuickBooksSupplierSyncList: QuickBooksSupplierSyncList;
  QuickBooksSync: QuickBooksSync;
  QuickBooksSyncList: QuickBooksSyncList;
  QuickBooksToken: QuickBooksToken;
  QuickBooksWebAddress: QuickBooksWebAddress;
  ResultListByStatus:
    | ResolversParentTypes["InvitationFulfilledPromise"]
    | ResolversParentTypes["InvitationRejectedPromise"];
  RevokeQuickBooksIntegration: RevokeQuickBooksIntegration;
  SafeOperator: SafeOperator;
  SafeOperatorQueryResponse: SafeOperatorQueryResponse;
  SafeShopifyIntegration: SafeShopifyIntegration;
  SafeShopifyIntegrationQueryResponse: SafeShopifyIntegrationQueryResponse;
  SeatStatus: SeatStatus;
  SetDefaultKitTemplatePartOptionInput: SetDefaultKitTemplatePartOptionInput;
  ShopifyProduct: ShopifyProduct;
  ShopifyProductImage: ShopifyProductImage;
  ShopifyProductOption: ShopifyProductOption;
  ShopifyProductVariant: ShopifyProductVariant;
  StorageInventory: StorageInventory;
  StorageInventoryArea: StorageInventoryArea;
  StorageInventoryAreaLocation: StorageInventoryAreaLocation;
  StorageInventoryAreaLocationInput: StorageInventoryAreaLocationInput;
  StorageInventoryAreaLocationPayload: StorageInventoryAreaLocationPayload;
  StorageInventoryAreaLocationQueryResponse: StorageInventoryAreaLocationQueryResponse;
  StorageInventoryAreaLocationUpdateInput: StorageInventoryAreaLocationUpdateInput;
  StorageInventoryAreaRule: StorageInventoryAreaRule;
  StorageInventoryAreaRuleInput: StorageInventoryAreaRuleInput;
  StorageInventoryAreaRuleUpdateInput: StorageInventoryAreaRuleUpdateInput;
  StorageInventoryPickRecord:
    | ResolversParentTypes["ItemDynamicContainerPayload"]
    | ResolversParentTypes["ItemStorageInventoryAreaLocation"];
  StorageLog: StorageLog;
  StorageLogInput: StorageLogInput;
  String: Scalars["String"];
  SubmitInstructionExecutionStepInput: SubmitInstructionExecutionStepInput;
  SubscriptionCancellation: SubscriptionCancellation;
  SubscriptionResumption: SubscriptionResumption;
  SubscriptionUpdate: SubscriptionUpdate;
  SubscriptionUpdatePreview: SubscriptionUpdatePreview;
  Supplier: Supplier;
  SupplierDetails: SupplierDetails;
  SupplierInput: SupplierInput;
  SupplierInputUpdate: SupplierInputUpdate;
  SupplierItem: SupplierItem;
  SupplierItemDeliveryContainer: SupplierItemDeliveryContainer;
  SupplierItemDeliveryContainerInput: SupplierItemDeliveryContainerInput;
  SupplierItemDeliveryContainerInputUpdate: SupplierItemDeliveryContainerInputUpdate;
  SupplierItemInput: SupplierItemInput;
  SupplierItemInputUpdate: SupplierItemInputUpdate;
  SupplierItemPPU: SupplierItemPpu;
  SupplierItemPPUTier: SupplierItemPpuTier;
  SupplierItemQueryResponse: SupplierItemQueryResponse;
  SupplierItemUnitsOfMeasure: SupplierItemUnitsOfMeasure;
  SupplierItemUnitsOfMeasureCustom: SupplierItemUnitsOfMeasureCustom;
  SupplierItemUnitsOfMeasureCustomInput: SupplierItemUnitsOfMeasureCustomInput;
  SupplierItemUnitsOfMeasureInput: SupplierItemUnitsOfMeasureInput;
  SupplierQueryResponse: SupplierQueryResponse;
  Suppliers: Suppliers;
  Team: Team;
  TeamDetails: TeamDetails;
  TeamInput: TeamInput;
  TeamInputUpdate: TeamInputUpdate;
  TeamQueryResponse: TeamQueryResponse;
  UpdateInstructionSubjectInput: UpdateInstructionSubjectInput;
  UpdateInstructionTemplateStepInput: UpdateInstructionTemplateStepInput;
  UpdateKitTemplateInput: UpdateKitTemplateInput;
  UpdateKitTemplatePartInput: UpdateKitTemplatePartInput;
  User: User;
  UserInputUpdate: UserInputUpdate;
  Workbench: Workbench;
  WorkbenchAccessory: WorkbenchAccessory;
  WorkbenchAccessoryInput: WorkbenchAccessoryInput;
  WorkbenchConfiguration: WorkbenchConfiguration;
  WorkbenchConfigurationInput: WorkbenchConfigurationInput;
  WorkbenchDimensions: WorkbenchDimensions;
  WorkbenchDimensionsInput: WorkbenchDimensionsInput;
  WorkbenchFlowrackLane: WorkbenchFlowrackLane;
  WorkbenchFlowrackLaneInput: WorkbenchFlowrackLaneInput;
  WorkbenchHardware: WorkbenchHardware;
  WorkbenchHistoryLog: WorkbenchHistoryLog;
  WorkbenchHistoryLogInput: WorkbenchHistoryLogInput;
  WorkbenchHistoryLogInputUpdate: WorkbenchHistoryLogInputUpdate;
  WorkbenchInput: WorkbenchInput;
  WorkbenchInputUpdate: WorkbenchInputUpdate;
};

export type AccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccessControls"] = ResolversParentTypes["AccessControls"]
> = {
  backOffice?: Resolver<
    ResolversTypes["BackOfficeAccessControls"],
    ParentType,
    ContextType
  >;
  commerce?: Resolver<
    ResolversTypes["CommerceAccessControls"],
    ParentType,
    ContextType
  >;
  financials?: Resolver<
    ResolversTypes["FinancialAccessControls"],
    ParentType,
    ContextType
  >;
  mobile?: Resolver<
    ResolversTypes["MobileAccessControls"],
    ParentType,
    ContextType
  >;
  pfep?: Resolver<
    ResolversTypes["PfepAccessControls"],
    ParentType,
    ContextType
  >;
  production?: Resolver<
    ResolversTypes["ProductionAccessControls"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccessTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccessType"] = ResolversParentTypes["AccessType"]
> = {
  create?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  edit?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  exports?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  reports?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  view?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Address"] = ResolversParentTypes["Address"]
> = {
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  street1?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  street2?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["App"] = ResolversParentTypes["App"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  coverUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  editorVersion?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  playerVersion?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publishedAppVersion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppUsageLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppUsageLog"] = ResolversParentTypes["AppUsageLog"]
> = {
  action?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  appId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  appType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Apps"] = ResolversParentTypes["Apps"]
> = {
  customApps?: Resolver<Array<ResolversTypes["App"]>, ParentType, ContextType>;
  officialApps?: Resolver<
    Array<ResolversTypes["InstalledApp"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Arrival"] = ResolversParentTypes["Arrival"]
> = {
  arrivalNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["ArrivalComment"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  paymentType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplier?: Resolver<
    ResolversTypes["ClonedSupplier"],
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierOrderNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  terms?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalComment"] = ResolversParentTypes["ArrivalComment"]
> = {
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  releaseId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalDeliveryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalDelivery"] = ResolversParentTypes["ArrivalDelivery"]
> = {
  arrivalId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  arrivalNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  receivedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  receivedBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  receivedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  releaseId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierReceivingDocumentFile?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalDeliveryLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalDeliveryLineItem"] = ResolversParentTypes["ArrivalDeliveryLineItem"]
> = {
  arrivalId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deliveryId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  override?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releaseId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  supplierId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  supplierItemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalDetailsWithStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalDetailsWithStatus"] = ResolversParentTypes["ArrivalDetailsWithStatus"]
> = {
  arrival?: Resolver<
    ResolversTypes["ArrivalWithStatus"],
    ParentType,
    ContextType
  >;
  arrivalDeliveries?: Resolver<
    Array<ResolversTypes["ArrivalDelivery"]>,
    ParentType,
    ContextType
  >;
  arrivalDeliveryLineItems?: Resolver<
    Array<ResolversTypes["ArrivalDeliveryLineItem"]>,
    ParentType,
    ContextType
  >;
  arrivalLineItems?: Resolver<
    Array<ResolversTypes["ArrivalLineItemWithStatus"]>,
    ParentType,
    ContextType
  >;
  arrivalReleaseLineItems?: Resolver<
    Array<ResolversTypes["ArrivalReleaseLineItemWithStatus"]>,
    ParentType,
    ContextType
  >;
  arrivalReleases?: Resolver<
    Array<ResolversTypes["ArrivalReleaseWithStatus"]>,
    ParentType,
    ContextType
  >;
  bidRequestLineItems?: Resolver<
    Array<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalLineItem"] = ResolversParentTypes["ArrivalLineItem"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deliveredQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  deliveredValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  item?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pricePerUnit?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierItem?: Resolver<
    ResolversTypes["ClonedSupplierItem"],
    ParentType,
    ContextType
  >;
  supplierItemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalLineItemWithStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalLineItemWithStatus"] = ResolversParentTypes["ArrivalLineItemWithStatus"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  closedParents?: Resolver<
    Array<ResolversTypes["ClosedParent"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deliveredQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  deliveredValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  item?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pricePerUnit?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierItem?: Resolver<
    ResolversTypes["ClonedSupplierItem"],
    ParentType,
    ContextType
  >;
  supplierItemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalQueryResponse"] = ResolversParentTypes["ArrivalQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Arrival"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalRelease"] = ResolversParentTypes["ArrivalRelease"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalScheduleId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  releasedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  salesTax?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  shipVia?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  shippingCost?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<
    ResolversTypes["ClonedSupplier"],
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  surcharges?: Resolver<
    Maybe<Array<ResolversTypes["ArrivalReleaseSurcharge"]>>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseLineItem"] = ResolversParentTypes["ArrivalReleaseLineItem"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deliveredQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pricePerUnit?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releaseId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierItemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseLineItemWithStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseLineItemWithStatus"] = ResolversParentTypes["ArrivalReleaseLineItemWithStatus"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  closedParents?: Resolver<
    Array<ResolversTypes["ClosedParent"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deliveredQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pricePerUnit?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releaseId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierItemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseQueryResponse"] = ResolversParentTypes["ArrivalReleaseQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseSurchargeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseSurcharge"] = ResolversParentTypes["ArrivalReleaseSurcharge"]
> = {
  amount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseWithStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseWithStatus"] = ResolversParentTypes["ArrivalReleaseWithStatus"]
> = {
  arrivalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalScheduleId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  closedParents?: Resolver<
    Array<ResolversTypes["ClosedParent"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  releasedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  salesTax?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  shipVia?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  shippingCost?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<
    ResolversTypes["ClonedSupplier"],
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  surcharges?: Resolver<
    Maybe<Array<ResolversTypes["ArrivalReleaseSurcharge"]>>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalReleaseWithStatusQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalReleaseWithStatusQueryResponse"] = ResolversParentTypes["ArrivalReleaseWithStatusQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["ArrivalReleaseWithStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalWithStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ArrivalWithStatus"] = ResolversParentTypes["ArrivalWithStatus"]
> = {
  arrivalNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  autoClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["ArrivalComment"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isAutoClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isManualClosed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  paymentType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplier?: Resolver<
    ResolversTypes["ClonedSupplier"],
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierOrderNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  terms?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BackOfficeAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BackOfficeAccessControls"] = ResolversParentTypes["BackOfficeAccessControls"]
> = {
  all?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  employeeShifts?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  employees?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Bid"] = ResolversParentTypes["Bid"]
> = {
  bidRequestId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  bidRequestNumber?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  estimatedDeliveryDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  finalQuoteReceivedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  firstQuoteReceivedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isBidRejected?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isBidRequestClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  requestSentDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<
    ResolversTypes["ClonedSupplier"],
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidItem"] = ResolversParentTypes["BidItem"]
> = {
  __resolveType: TypeResolveFn<
    "BidItemGroupRecord" | "BidItemRecord",
    ParentType,
    ContextType
  >;
};

export type BidItemGroupRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidItemGroupRecord"] = ResolversParentTypes["BidItemGroupRecord"]
> = {
  itemGroup?: Resolver<
    ResolversTypes["ClonedItemGroup"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidItemRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidItemRecord"] = ResolversParentTypes["BidItemRecord"]
> = {
  item?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidLineItem"] = ResolversParentTypes["BidLineItem"]
> = {
  bidDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bidId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bidRequestId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bidRequestNumber?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isBidLineItemRejected?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isBidRejected?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isBidRequestClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isBidRequestLineItemClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  item?: Resolver<ResolversTypes["BidItem"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ppu?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitOfMeasure?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  validUntil?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidLineItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidLineItemQueryResponse"] = ResolversParentTypes["BidLineItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidQueryResponse"] = ResolversParentTypes["BidQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Bid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequest"] = ResolversParentTypes["BidRequest"]
> = {
  bidRequestNumber?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<ResolversTypes["BidRequestComment"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  externalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isBidRequestClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequestComment"] = ResolversParentTypes["BidRequestComment"]
> = {
  bidId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequestDetails"] = ResolversParentTypes["BidRequestDetails"]
> = {
  bidLineItems?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType
  >;
  bidRequest?: Resolver<ResolversTypes["BidRequest"], ParentType, ContextType>;
  bidRequestLineItems?: Resolver<
    Array<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType
  >;
  bids?: Resolver<Array<ResolversTypes["Bid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequestLineItem"] = ResolversParentTypes["BidRequestLineItem"]
> = {
  arrivalId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bidRequestId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  bidRequestNumber?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  internalNote?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isBidRequestClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isBidRequestLineItemClosed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  item?: Resolver<ResolversTypes["BidItem"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  targetPpu?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitOfMeasure?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  winnerSupplierId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestLineItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequestLineItemQueryResponse"] = ResolversParentTypes["BidRequestLineItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRequestQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BidRequestQueryResponse"] = ResolversParentTypes["BidRequestQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["BidRequest"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingCycleTypeUpdateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BillingCycleTypeUpdate"] = ResolversParentTypes["BillingCycleTypeUpdate"]
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingCycleTypeUpdatePreviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BillingCycleTypeUpdatePreview"] = ResolversParentTypes["BillingCycleTypeUpdatePreview"]
> = {
  nextInvoiceTotal?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutSessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CheckoutSession"] = ResolversParentTypes["CheckoutSession"]
> = {
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedFacilityItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedFacilityItem"] = ResolversParentTypes["ClonedFacilityItem"]
> = {
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minMaxReasoning?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  minQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedItem"] = ResolversParentTypes["ClonedItem"]
> = {
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["ItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedItemDynamicContainerPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedItemDynamicContainerPayload"] = ResolversParentTypes["ClonedItemDynamicContainerPayload"]
> = {
  arrivalDeliveryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  ppu?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedItemGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedItemGroup"] = ResolversParentTypes["ClonedItemGroup"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedItemStorageInventoryAreaLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedItemStorageInventoryAreaLocation"] = ResolversParentTypes["ClonedItemStorageInventoryAreaLocation"]
> = {
  aisle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalDeliveryIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bay?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ppus?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaPpu"]>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  shelf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedProduct"] = ResolversParentTypes["ClonedProduct"]
> = {
  childId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  childType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedSupplierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedSupplier"] = ResolversParentTypes["ClonedSupplier"]
> = {
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  primaryPaymentType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  terms?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClonedSupplierItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClonedSupplierItem"] = ResolversParentTypes["ClonedSupplierItem"]
> = {
  brand?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  brandSku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  productUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["SupplierItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClosedParentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClosedParent"] = ResolversParentTypes["ClosedParent"]
> = {
  manualClosedBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  manualClosedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommerceAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommerceAccessControls"] = ResolversParentTypes["CommerceAccessControls"]
> = {
  all?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  contractors?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  orders?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Company"] = ResolversParentTypes["Company"]
> = {
  alias?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  checklist?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyAddress?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  companyName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  customFields?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  defaultCurrency?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  integrations?: Resolver<
    Maybe<Array<ResolversTypes["CompanyIntegration"]>>,
    ParentType,
    ContextType
  >;
  inventoryStrategies?: Resolver<
    Maybe<Array<ResolversTypes["InventoryStrategy"]>>,
    ParentType,
    ContextType
  >;
  kanbanBins?: Resolver<
    Array<ResolversTypes["CompanyKanbanBin"]>,
    ParentType,
    ContextType
  >;
  ledgers?: Resolver<
    Maybe<Array<ResolversTypes["Ledger"]>>,
    ParentType,
    ContextType
  >;
  logoUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  operatorLevels?: Resolver<
    Maybe<Array<ResolversTypes["CompanyOperatorLevel"]>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teams?: Resolver<
    Maybe<Array<ResolversTypes["CompanyTeam"]>>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyIntegrationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyIntegration"] = ResolversParentTypes["CompanyIntegration"]
> = {
  service?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyKanbanBinResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyKanbanBin"] = ResolversParentTypes["CompanyKanbanBin"]
> = {
  backLabelHeight?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  backLabelLength?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  frontLabelHeight?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  frontLabelLength?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  modelNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyOperatorLevelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyOperatorLevel"] = ResolversParentTypes["CompanyOperatorLevel"]
> = {
  cost?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyQueryResponse"] = ResolversParentTypes["CompanyQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Company"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyTeamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyTeam"] = ResolversParentTypes["CompanyTeam"]
> = {
  accessControls?: Resolver<
    ResolversTypes["AccessControls"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyUser"] = ResolversParentTypes["CompanyUser"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contactEmail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  favoriteModules?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mobilePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  officePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  seenTutorials?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyUserQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompanyUserQueryResponse"] = ResolversParentTypes["CompanyUserQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Contact"] = ResolversParentTypes["Contact"]
> = {
  createdOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  department?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  homePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mobilePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  officePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateQuickBooksIntegrationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateQuickBooksIntegration"] = ResolversParentTypes["CreateQuickBooksIntegration"]
> = {
  token?: Resolver<ResolversTypes["QuickBooksToken"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerPortalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CustomerPortal"] = ResolversParentTypes["CustomerPortal"]
> = {
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Departure"] = ResolversParentTypes["Departure"]
> = {
  comments?: Resolver<
    Array<ResolversTypes["DepartureComment"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalCustomerId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  externalOrderId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fulfilledOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isFulfilled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isReadyToFulfill?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  placedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  readyToFulfillOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DepartureComment"] = ResolversParentTypes["DepartureComment"]
> = {
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pickListId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DepartureDetails"] = ResolversParentTypes["DepartureDetails"]
> = {
  departure?: Resolver<ResolversTypes["Departure"], ParentType, ContextType>;
  departureLineItems?: Resolver<
    Array<ResolversTypes["DepartureLineItem"]>,
    ParentType,
    ContextType
  >;
  departurePickLineItems?: Resolver<
    Array<ResolversTypes["DeparturePickLineItem"]>,
    ParentType,
    ContextType
  >;
  departurePickListLineItems?: Resolver<
    Array<ResolversTypes["DeparturePickListLineItem"]>,
    ParentType,
    ContextType
  >;
  departurePickLists?: Resolver<
    Array<ResolversTypes["DeparturePickList"]>,
    ParentType,
    ContextType
  >;
  departurePicks?: Resolver<
    Array<ResolversTypes["DeparturePick"]>,
    ParentType,
    ContextType
  >;
  instructionSubjects?: Resolver<
    Array<ResolversTypes["InstructionSubject"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DepartureLineItem"] = ResolversParentTypes["DepartureLineItem"]
> = {
  clonedItem?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  clonedProduct?: Resolver<
    ResolversTypes["ClonedProduct"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  departureId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  pickListQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  pickedQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureLineItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DepartureLineItemQueryResponse"] = ResolversParentTypes["DepartureLineItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["DepartureLineItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePick"] = ResolversParentTypes["DeparturePick"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  departureId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickListId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePickLineItem"] = ResolversParentTypes["DeparturePickLineItem"]
> = {
  clonedItem?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  clonedItemDynamicContainerPayload?: Resolver<
    Maybe<ResolversTypes["ClonedItemDynamicContainerPayload"]>,
    ParentType,
    ContextType
  >;
  clonedItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ClonedItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  clonedProduct?: Resolver<
    ResolversTypes["ClonedProduct"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  departureId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickListId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickedBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePickList"] = ResolversParentTypes["DeparturePickList"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  departureId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  externalCustomerId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  externalOrderId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shipVia?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickListLineItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePickListLineItem"] = ResolversParentTypes["DeparturePickListLineItem"]
> = {
  clonedItem?: Resolver<ResolversTypes["ClonedItem"], ParentType, ContextType>;
  clonedProduct?: Resolver<
    ResolversTypes["ClonedProduct"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  departureId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickListId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickedQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickListLineItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePickListLineItemQueryResponse"] = ResolversParentTypes["DeparturePickListLineItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["DeparturePickListLineItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturePickListQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeparturePickListQueryResponse"] = ResolversParentTypes["DeparturePickListQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["DeparturePickList"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DepartureQueryResponse"] = ResolversParentTypes["DepartureQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Departure"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Device"] = ResolversParentTypes["Device"]
> = {
  accessLog?: Resolver<
    Array<ResolversTypes["OperatorAccess"]>,
    ParentType,
    ContextType
  >;
  accessTokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deviceInfo?: Resolver<ResolversTypes["DeviceInfo"], ParentType, ContextType>;
  deviceUId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  operators?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refreshTokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceAccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeviceAccess"] = ResolversParentTypes["DeviceAccess"]
> = {
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deviceId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeviceInfo"] = ResolversParentTypes["DeviceInfo"]
> = {
  brand?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  device?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  model?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeviceQueryResponse"] = ResolversParentTypes["DeviceQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Device"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DimensionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Dimensions"] = ResolversParentTypes["Dimensions"]
> = {
  area?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicContainerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainer"] = ResolversParentTypes["DynamicContainer"]
> = {
  capacity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes["DynamicContainerLocation"]>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<
    Maybe<ResolversTypes["DynamicContainerPayload"]>,
    ParentType,
    ContextType
  >;
  readableId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicContainerLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainerLocation"] = ResolversParentTypes["DynamicContainerLocation"]
> = {
  location?: Resolver<
    ResolversTypes["DynamicContainerLocationRecord"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicContainerLocationRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainerLocationRecord"] = ResolversParentTypes["DynamicContainerLocationRecord"]
> = {
  __resolveType: TypeResolveFn<
    "InventoryAreaLocation" | "PartialInventoryAreaLocation",
    ParentType,
    ContextType
  >;
};

export type DynamicContainerPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainerPayload"] = ResolversParentTypes["DynamicContainerPayload"]
> = {
  payload?: Resolver<
    ResolversTypes["DynamicContainerPayloadRecord"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicContainerPayloadRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainerPayloadRecord"] = ResolversParentTypes["DynamicContainerPayloadRecord"]
> = {
  __resolveType: TypeResolveFn<
    "ItemDynamicContainerPayload",
    ParentType,
    ContextType
  >;
};

export type DynamicContainerQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DynamicContainerQueryResponse"] = ResolversParentTypes["DynamicContainerQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Employee"] = ResolversParentTypes["Employee"]
> = {
  company?: Resolver<ResolversTypes["Company"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilities?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kitIds?: Resolver<
    Maybe<Array<ResolversTypes["ID"]>>,
    ParentType,
    ContextType
  >;
  permissions?: Resolver<
    Maybe<ResolversTypes["EmployeePermissions"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  trainings?: Resolver<
    Maybe<Array<ResolversTypes["EmployeeTraining"]>>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  workbenchIds?: Resolver<
    Maybe<Array<ResolversTypes["ID"]>>,
    ParentType,
    ContextType
  >;
  workbenches?: Resolver<
    Maybe<Array<ResolversTypes["Workbench"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeePermissionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EmployeePermissions"] = ResolversParentTypes["EmployeePermissions"]
> = {
  arrivalsRequireApproval?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  canApproveArrivals?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeTrainingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EmployeeTraining"] = ResolversParentTypes["EmployeeTraining"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  stats?: Resolver<
    Array<ResolversTypes["EmployeeTrainingStats"]>,
    ParentType,
    ContextType
  >;
  trainingId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  videoStats?: Resolver<
    Array<ResolversTypes["EmployeeTrainingVideoStats"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeTrainingStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EmployeeTrainingStats"] = ResolversParentTypes["EmployeeTrainingStats"]
> = {
  checklist?: Resolver<Array<ResolversTypes["Float"]>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teacherId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeTrainingVideoStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EmployeeTrainingVideoStats"] = ResolversParentTypes["EmployeeTrainingVideoStats"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  timesCompleted?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Event"] = ResolversParentTypes["Event"]
> = {
  assigneeId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  assigneeType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionSubjectId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  instructionSubjectType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  instructionTemplateId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  recurrence?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EventDetails"] = ResolversParentTypes["EventDetails"]
> = {
  event?: Resolver<ResolversTypes["Event"], ParentType, ContextType>;
  instructionExecutions?: Resolver<
    Array<ResolversTypes["InstructionExecution"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventsBetweenDatesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EventsBetweenDates"] = ResolversParentTypes["EventsBetweenDates"]
> = {
  recurringEvents?: Resolver<
    Array<ResolversTypes["Event"]>,
    ParentType,
    ContextType
  >;
  singleEvents?: Resolver<
    Array<ResolversTypes["Event"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ExternalProduct"] = ResolversParentTypes["ExternalProduct"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalProductId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  productId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalProductQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ExternalProductQueryResponse"] = ResolversParentTypes["ExternalProductQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["ExternalProduct"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Facility"] = ResolversParentTypes["Facility"]
> = {
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  arrivalEmail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalPhoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  configuration?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dimensions?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  facilityComponentConfiguration?: Resolver<
    Maybe<ResolversTypes["FacilityComponentConfiguration"]>,
    ParentType,
    ContextType
  >;
  files?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  inventoryAreas?: Resolver<
    Array<ResolversTypes["FacilityInventoryArea"]>,
    ParentType,
    ContextType
  >;
  inventoryStrategies?: Resolver<
    Maybe<Array<ResolversTypes["InventoryStrategy"]>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityComponentConfigurationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityComponentConfiguration"] = ResolversParentTypes["FacilityComponentConfiguration"]
> = {
  equipmentId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  machineId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  productionLineId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  rotate?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  workbenchId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  workcellId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  xCoordinate?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  yCoordinate?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityDetails"] = ResolversParentTypes["FacilityDetails"]
> = {
  dynamicContainers?: Resolver<
    Array<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType
  >;
  facility?: Resolver<ResolversTypes["Facility"], ParentType, ContextType>;
  facilityItems?: Resolver<
    Array<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType
  >;
  itemStorageInventoryAreaLocations?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  itemStorageInventoryAreaRules?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaRule"]>,
    ParentType,
    ContextType
  >;
  storageInventoryAreaLocations?: Resolver<
    Array<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  storageInventoryAreaRules?: Resolver<
    Array<ResolversTypes["StorageInventoryAreaRule"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityInventoryAreaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityInventoryArea"] = ResolversParentTypes["FacilityInventoryArea"]
> = {
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dynamicContainerTypes?: Resolver<
    Array<ResolversTypes["FacilityInventoryAreaDynamicContainerType"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityInventoryAreaDynamicContainerTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityInventoryAreaDynamicContainerType"] = ResolversParentTypes["FacilityInventoryAreaDynamicContainerType"]
> = {
  depth?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  height?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityItem"] = ResolversParentTypes["FacilityItem"]
> = {
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryStrategies?: Resolver<
    Maybe<Array<ResolversTypes["InventoryStrategy"]>>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minMaxReasoning?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  minQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  reorderStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityItemQueryResponse"] = ResolversParentTypes["FacilityItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FacilityQueryResponse"] = ResolversParentTypes["FacilityQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Facility"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileStorageRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FileStorageRecord"] = ResolversParentTypes["FileStorageRecord"]
> = {
  fileName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  size?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FinancialAccessControls"] = ResolversParentTypes["FinancialAccessControls"]
> = {
  all?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  employeeCosts?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  itemCosts?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  kitCosts?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  productCosts?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  productPricing?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeadlessUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["HeadlessUser"] = ResolversParentTypes["HeadlessUser"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastUsed?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  maskedToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeadlessUserQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["HeadlessUserQueryResponse"] = ResolversParentTypes["HeadlessUserQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["HeadlessUser"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstalledAppResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstalledApp"] = ResolversParentTypes["InstalledApp"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  coverUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  editorVersion?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  installation?: Resolver<
    ResolversTypes["OfficialAppInstallation"],
    ParentType,
    ContextType
  >;
  isPublished?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  playerVersion?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publishedAppVersion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionExecutionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionExecution"] = ResolversParentTypes["InstructionExecution"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  eventId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  executorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subjectId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subjectType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  triggerSource?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  triggerSourceId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionExecutionDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionExecutionDetails"] = ResolversParentTypes["InstructionExecutionDetails"]
> = {
  instructionExecution?: Resolver<
    ResolversTypes["InstructionExecution"],
    ParentType,
    ContextType
  >;
  instructionExecutionStepSubmissions?: Resolver<
    Array<ResolversTypes["InstructionExecutionStepSubmission"]>,
    ParentType,
    ContextType
  >;
  instructionExecutionSteps?: Resolver<
    Array<ResolversTypes["InstructionExecutionStep"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionExecutionQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionExecutionQueryResponse"] = ResolversParentTypes["InstructionExecutionQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["InstructionExecution"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionExecutionStepResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionExecutionStep"] = ResolversParentTypes["InstructionExecutionStep"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionExecutionId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  instructionTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionExecutionStepSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionExecutionStepSubmission"] = ResolversParentTypes["InstructionExecutionStepSubmission"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionExecutionId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  instructionExecutionStepId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  submission?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionSubject"] = ResolversParentTypes["InstructionSubject"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subjectId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subjectType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  triggers?: Resolver<
    Maybe<Array<ResolversTypes["InstructionSubjectTrigger"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionSubjectQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionSubjectQueryResponse"] = ResolversParentTypes["InstructionSubjectQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["InstructionSubject"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionSubjectTriggerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionSubjectTrigger"] = ResolversParentTypes["InstructionSubjectTrigger"]
> = {
  isRequired?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionSubjectWithTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionSubjectWithTemplate"] = ResolversParentTypes["InstructionSubjectWithTemplate"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subjectId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subjectType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  triggers?: Resolver<
    Maybe<Array<ResolversTypes["InstructionSubjectTrigger"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionSubjectWithTemplateQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionSubjectWithTemplateQueryResponse"] = ResolversParentTypes["InstructionSubjectWithTemplateQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["InstructionSubjectWithTemplate"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionTemplate"] = ResolversParentTypes["InstructionTemplate"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionTemplateDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionTemplateDetails"] = ResolversParentTypes["InstructionTemplateDetails"]
> = {
  instructionTemplate?: Resolver<
    ResolversTypes["InstructionTemplate"],
    ParentType,
    ContextType
  >;
  instructionTemplateSteps?: Resolver<
    Array<ResolversTypes["InstructionTemplateStep"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionTemplateQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionTemplateQueryResponse"] = ResolversParentTypes["InstructionTemplateQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["InstructionTemplate"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstructionTemplateStepResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InstructionTemplateStep"] = ResolversParentTypes["InstructionTemplateStep"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructionTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryAreaLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryAreaLocation"] = ResolversParentTypes["InventoryAreaLocation"]
> = {
  aisle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bay?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shelf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryHistoryRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryHistoryRecord"] = ResolversParentTypes["InventoryHistoryRecord"]
> = {
  addition?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  days?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  deduction?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ledger?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryLog"] = ResolversParentTypes["InventoryLog"]
> = {
  arrivalDeliveryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalReleaseId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  correctionType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  failReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ledger?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  operation?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplierItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryLogQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryLogQueryResponse"] = ResolversParentTypes["InventoryLogQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["InventoryLog"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryRecord"] = ResolversParentTypes["InventoryRecord"]
> = {
  adjustedQuantity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalDeliveryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  arrivalReleaseId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  availableQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  correctionType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fromRecordId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  inventoryStrategy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isHead?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ledger?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  operation?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  previousPriceRecordId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  previousRecordId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  priceCategoryQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  supplierItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  totalQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryStrategyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InventoryStrategy"] = ResolversParentTypes["InventoryStrategy"]
> = {
  deduction?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ledger?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Invitation"] = ResolversParentTypes["Invitation"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  expiresOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expiresOnEpoch?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  facilityIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  invitationCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationFulfilledPromiseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InvitationFulfilledPromise"] = ResolversParentTypes["InvitationFulfilledPromise"]
> = {
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Invitation"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InvitationQueryResponse"] = ResolversParentTypes["InvitationQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationRejectedPromiseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InvitationRejectedPromise"] = ResolversParentTypes["InvitationRejectedPromise"]
> = {
  reason?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Item"] = ResolversParentTypes["Item"]
> = {
  arrivals?: Resolver<
    Maybe<Array<ResolversTypes["ItemArrival"]>>,
    ParentType,
    ContextType
  >;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  classification?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  configuration?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expirable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  facilityItem?: Resolver<
    Maybe<Array<ResolversTypes["ClonedFacilityItem"]>>,
    ParentType,
    ContextType
  >;
  files?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  groupItems?: Resolver<
    Maybe<Array<ResolversTypes["Item"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  inventory?: Resolver<
    Maybe<Array<ResolversTypes["ItemInventory"]>>,
    ParentType,
    ContextType
  >;
  inventoryStrategies?: Resolver<
    Maybe<Array<ResolversTypes["InventoryStrategy"]>>,
    ParentType,
    ContextType
  >;
  itemGroup?: Resolver<
    Maybe<ResolversTypes["ItemGroup"]>,
    ParentType,
    ContextType
  >;
  itemGroupId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lotable?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  maximumStock?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minimumStock?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  preferredBrand?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  preferredBrandSku?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  primarySupplierItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  productUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shelfLife?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["ItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemArrivalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemArrival"] = ResolversParentTypes["ItemArrival"]
> = {
  deliveredQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  deliveredValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  releasedValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemDetails"] = ResolversParentTypes["ItemDetails"]
> = {
  arrivalDeliveryLineItems?: Resolver<
    Array<ResolversTypes["ArrivalDeliveryLineItem"]>,
    ParentType,
    ContextType
  >;
  arrivalLineItems?: Resolver<
    Array<ResolversTypes["ArrivalLineItem"]>,
    ParentType,
    ContextType
  >;
  arrivalReleaseLineItems?: Resolver<
    Array<ResolversTypes["ArrivalReleaseLineItem"]>,
    ParentType,
    ContextType
  >;
  bidLineItems?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType
  >;
  bidRequestLineItems?: Resolver<
    Array<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType
  >;
  dynamicContainers?: Resolver<
    Array<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType
  >;
  facilityItems?: Resolver<
    Array<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType
  >;
  instructionSubjects?: Resolver<
    Array<ResolversTypes["InstructionSubject"]>,
    ParentType,
    ContextType
  >;
  inventoryLogs?: Resolver<
    Array<ResolversTypes["InventoryLog"]>,
    ParentType,
    ContextType
  >;
  item?: Resolver<ResolversTypes["Item"], ParentType, ContextType>;
  itemStorageInventoryAreaLocations?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  kitTemplatePartOptions?: Resolver<
    Array<ResolversTypes["KitTemplatePartOption"]>,
    ParentType,
    ContextType
  >;
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
  supplierItems?: Resolver<
    Array<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemDynamicContainerPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemDynamicContainerPayload"] = ResolversParentTypes["ItemDynamicContainerPayload"]
> = {
  arrivalDeliveryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endOfShelfLife?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expiry?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lot?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pickable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  ppu?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  primary?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["ItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  updatedBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemGroup"] = ResolversParentTypes["ItemGroup"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemGroupDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemGroupDetails"] = ResolversParentTypes["ItemGroupDetails"]
> = {
  bidLineItems?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType
  >;
  bidRequestLineItems?: Resolver<
    Array<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType
  >;
  itemGroup?: Resolver<ResolversTypes["ItemGroup"], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemGroupsWithItemsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemGroupsWithItems"] = ResolversParentTypes["ItemGroupsWithItems"]
> = {
  itemGroups?: Resolver<
    Array<ResolversTypes["ItemGroup"]>,
    ParentType,
    ContextType
  >;
  items?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemInventoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemInventory"] = ResolversParentTypes["ItemInventory"]
> = {
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  ledger?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemQueryResponse"] = ResolversParentTypes["ItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStorageInventoryAreaLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemStorageInventoryAreaLocation"] = ResolversParentTypes["ItemStorageInventoryAreaLocation"]
> = {
  aisle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  arrivalDeliveryIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bay?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ppus?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaPpu"]>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  refillStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shelf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["ItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  updatedBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStorageInventoryAreaPpuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemStorageInventoryAreaPpu"] = ResolversParentTypes["ItemStorageInventoryAreaPpu"]
> = {
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStorageInventoryAreaRuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemStorageInventoryAreaRule"] = ResolversParentTypes["ItemStorageInventoryAreaRule"]
> = {
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  locationPriority?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  maxQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  refillStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStorageInventoryAreaRuleQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemStorageInventoryAreaRuleQueryResponse"] = ResolversParentTypes["ItemStorageInventoryAreaRuleQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["ItemStorageInventoryAreaRule"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUnitsOfMeasureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemUnitsOfMeasure"] = ResolversParentTypes["ItemUnitsOfMeasure"]
> = {
  bom?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  inventory?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  weightPerBomUom?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemWithPrimarySupplierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemWithPrimarySupplier"] = ResolversParentTypes["ItemWithPrimarySupplier"]
> = {
  arrivals?: Resolver<
    Maybe<Array<ResolversTypes["ItemArrival"]>>,
    ParentType,
    ContextType
  >;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  classification?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  configuration?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expirable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  facilityItem?: Resolver<
    Maybe<Array<ResolversTypes["ClonedFacilityItem"]>>,
    ParentType,
    ContextType
  >;
  files?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  groupItems?: Resolver<
    Maybe<Array<ResolversTypes["Item"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  inventory?: Resolver<
    Maybe<Array<ResolversTypes["ItemInventory"]>>,
    ParentType,
    ContextType
  >;
  inventoryStrategies?: Resolver<
    Maybe<Array<ResolversTypes["InventoryStrategy"]>>,
    ParentType,
    ContextType
  >;
  itemGroup?: Resolver<
    Maybe<ResolversTypes["ItemGroup"]>,
    ParentType,
    ContextType
  >;
  itemGroupId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lotable?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  maximumStock?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minimumStock?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  preferredBrand?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  preferredBrandSku?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  primarySupplier?: Resolver<
    Maybe<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType
  >;
  primarySupplierItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  productUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shelfLife?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["ItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemWithPrimarySupplierQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemWithPrimarySupplierQueryResponse"] = ResolversParentTypes["ItemWithPrimarySupplierQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["ItemWithPrimarySupplier"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Items"] = ResolversParentTypes["Items"]
> = {
  jeenyItem?: Resolver<Maybe<ResolversTypes["Item"]>, ParentType, ContextType>;
  quickBooksItem?: Resolver<
    Maybe<ResolversTypes["QuickBooksItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KanbanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Kanban"] = ResolversParentTypes["Kanban"]
> = {
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdBy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  item?: Resolver<ResolversTypes["Item"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  kanbanBin?: Resolver<
    ResolversTypes["CompanyKanbanBin"],
    ParentType,
    ContextType
  >;
  kanbanBinId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  localStorage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  readableId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  workbenchId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KioskResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Kiosk"] = ResolversParentTypes["Kiosk"]
> = {
  accessLog?: Resolver<
    Array<ResolversTypes["OperatorAccess"]>,
    ParentType,
    ContextType
  >;
  accessTokenId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  allowedApps?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  installationCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  properties?: Resolver<
    Maybe<Array<ResolversTypes["KioskProperty"]>>,
    ParentType,
    ContextType
  >;
  refreshTokenId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KioskAccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KioskAccess"] = ResolversParentTypes["KioskAccess"]
> = {
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  kioskId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KioskPropertyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KioskProperty"] = ResolversParentTypes["KioskProperty"]
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KioskQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KioskQueryResponse"] = ResolversParentTypes["KioskQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Kiosk"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplate"] = ResolversParentTypes["KitTemplate"]
> = {
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultDimensions?: Resolver<
    Maybe<ResolversTypes["KitTemplateDimensions"]>,
    ParentType,
    ContextType
  >;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  instructions?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateBomEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplateBomEntry"] = ResolversParentTypes["KitTemplateBomEntry"]
> = {
  item?: Resolver<ResolversTypes["Item"], ParentType, ContextType>;
  pricePerBomUom?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  unitQuantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplateDetails"] = ResolversParentTypes["KitTemplateDetails"]
> = {
  instructionSubjects?: Resolver<
    Array<ResolversTypes["InstructionSubject"]>,
    ParentType,
    ContextType
  >;
  kitTemplate?: Resolver<
    ResolversTypes["KitTemplate"],
    ParentType,
    ContextType
  >;
  kitTemplatePartOptions?: Resolver<
    Array<ResolversTypes["KitTemplatePartOption"]>,
    ParentType,
    ContextType
  >;
  kitTemplateParts?: Resolver<
    Array<ResolversTypes["KitTemplatePart"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateDimensionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplateDimensions"] = ResolversParentTypes["KitTemplateDimensions"]
> = {
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  numberOfDimensions?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplatePartResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplatePart"] = ResolversParentTypes["KitTemplatePart"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultOptionId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dimensions?: Resolver<
    Maybe<ResolversTypes["KitTemplatePartDimensions"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplatePartDimensionCalculationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplatePartDimensionCalculation"] = ResolversParentTypes["KitTemplatePartDimensionCalculation"]
> = {
  base?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  parentMultiplier?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  parentOffset?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplatePartDimensionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplatePartDimensions"] = ResolversParentTypes["KitTemplatePartDimensions"]
> = {
  height?: Resolver<
    Maybe<ResolversTypes["KitTemplatePartDimensionCalculation"]>,
    ParentType,
    ContextType
  >;
  length?: Resolver<
    Maybe<ResolversTypes["KitTemplatePartDimensionCalculation"]>,
    ParentType,
    ContextType
  >;
  numberOfDimensions?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  width?: Resolver<
    Maybe<ResolversTypes["KitTemplatePartDimensionCalculation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplatePartOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplatePartOption"] = ResolversParentTypes["KitTemplatePartOption"]
> = {
  childDetails?: Resolver<
    ResolversTypes["KitTemplatePartOptionChildDetails"],
    ParentType,
    ContextType
  >;
  childId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  childType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  partId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplatePartOptionChildDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplatePartOptionChildDetails"] = ResolversParentTypes["KitTemplatePartOptionChildDetails"]
> = {
  code?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  partNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplateQueryResponse"] = ResolversParentTypes["KitTemplateQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["KitTemplate"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KitTemplateTreeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["KitTemplateTree"] = ResolversParentTypes["KitTemplateTree"]
> = {
  items?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  kitTemplatePartOptions?: Resolver<
    Array<ResolversTypes["KitTemplatePartOption"]>,
    ParentType,
    ContextType
  >;
  kitTemplateParts?: Resolver<
    Array<ResolversTypes["KitTemplatePart"]>,
    ParentType,
    ContextType
  >;
  kitTemplates?: Resolver<
    Array<ResolversTypes["KitTemplate"]>,
    ParentType,
    ContextType
  >;
  rootKitTemplateId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LedgerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Ledger"] = ResolversParentTypes["Ledger"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogOperatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LogOperator"] = ResolversParentTypes["LogOperator"]
> = {
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MobileAccessControls"] = ResolversParentTypes["MobileAccessControls"]
> = {
  analytics?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  delivery?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  facility?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  inventory?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  kanbanScanner?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  maintenance?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  orders?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  receiving?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  team?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  waterSpiderScanner?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  addInstructionTemplateStepToInstructionTemplate?: Resolver<
    Maybe<ResolversTypes["InstructionTemplateStep"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAddInstructionTemplateStepToInstructionTemplateArgs,
      "data"
    >
  >;
  addInventoryRecord?: Resolver<
    Maybe<ResolversTypes["InventoryRecord"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddInventoryRecordArgs, "data">
  >;
  addKitTemplatePartOptionToKitTemplatePart?: Resolver<
    Maybe<ResolversTypes["KitTemplatePartOption"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddKitTemplatePartOptionToKitTemplatePartArgs, "data">
  >;
  addKitTemplatePartToKitTemplate?: Resolver<
    Maybe<ResolversTypes["KitTemplatePart"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddKitTemplatePartToKitTemplateArgs, "data">
  >;
  adjustDynamicContainerPayloadQuantity?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAdjustDynamicContainerPayloadQuantityArgs, "data">
  >;
  attachDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAttachDynamicContainerArgs, "data">
  >;
  cancelSubscription?: Resolver<
    ResolversTypes["SubscriptionCancellation"],
    ParentType,
    ContextType
  >;
  createAppUsageLog?: Resolver<
    ResolversTypes["AppUsageLog"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAppUsageLogArgs, "data">
  >;
  createArrival?: Resolver<
    Maybe<ResolversTypes["Arrival"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalArgs, "data">
  >;
  createArrivalDelivery?: Resolver<
    Maybe<ResolversTypes["ArrivalDelivery"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalDeliveryArgs, "data">
  >;
  createArrivalDeliveryLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalDeliveryLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalDeliveryLineItemArgs, "data">
  >;
  createArrivalLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalLineItemArgs, "data">
  >;
  createArrivalRelease?: Resolver<
    Maybe<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalReleaseArgs, "data">
  >;
  createArrivalReleaseLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalReleaseLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArrivalReleaseLineItemArgs, "data">
  >;
  createBid?: Resolver<
    Maybe<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBidArgs, "data">
  >;
  createBidLineItem?: Resolver<
    Maybe<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBidLineItemArgs, "data">
  >;
  createBidRequest?: Resolver<
    Maybe<ResolversTypes["BidRequest"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBidRequestArgs, "data">
  >;
  createBidRequestLineItem?: Resolver<
    Maybe<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBidRequestLineItemArgs, "data">
  >;
  createCheckoutSession?: Resolver<
    ResolversTypes["CheckoutSession"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCheckoutSessionArgs, "data">
  >;
  createCompany?: Resolver<
    Maybe<ResolversTypes["Company"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, "data">
  >;
  createCustomApp?: Resolver<
    ResolversTypes["App"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCustomAppArgs, "data">
  >;
  createCustomerPortal?: Resolver<
    ResolversTypes["CustomerPortal"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCustomerPortalArgs, "data">
  >;
  createDeparture?: Resolver<
    Maybe<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDepartureArgs, "data">
  >;
  createDepartureLineItem?: Resolver<
    Maybe<ResolversTypes["DepartureLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDepartureLineItemArgs, "data">
  >;
  createDeparturePick?: Resolver<
    ResolversTypes["DeparturePick"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDeparturePickArgs, "data">
  >;
  createDeparturePickList?: Resolver<
    Maybe<ResolversTypes["DeparturePickList"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDeparturePickListArgs, "data">
  >;
  createDeparturePickListLineItem?: Resolver<
    ResolversTypes["DeparturePickListLineItem"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDeparturePickListLineItemArgs, "data">
  >;
  createDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDynamicContainerArgs, "data">
  >;
  createEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEventArgs, "data">
  >;
  createExternalProduct?: Resolver<
    ResolversTypes["ExternalProduct"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateExternalProductArgs, "data">
  >;
  createFacility?: Resolver<
    Maybe<ResolversTypes["Facility"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFacilityArgs, "data">
  >;
  createFacilityItem?: Resolver<
    Maybe<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFacilityItemArgs, "data">
  >;
  createHeadlessUser?: Resolver<
    ResolversTypes["HeadlessUser"],
    ParentType,
    ContextType
  >;
  createInstructionSubject?: Resolver<
    ResolversTypes["InstructionSubject"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateInstructionSubjectArgs, "data">
  >;
  createInstructionTemplate?: Resolver<
    Maybe<ResolversTypes["InstructionTemplate"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateInstructionTemplateArgs, "data">
  >;
  createInventoryArea?: Resolver<
    Maybe<ResolversTypes["FacilityInventoryArea"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateInventoryAreaArgs, "inventoryArea" | "rule">
  >;
  createInvitation?: Resolver<
    Maybe<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateInvitationArgs, "data">
  >;
  createInvitations?: Resolver<
    Maybe<Array<ResolversTypes["ResultListByStatus"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateInvitationsArgs, "data">
  >;
  createItem?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, "data">
  >;
  createItemGroup?: Resolver<
    ResolversTypes["ItemGroup"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemGroupArgs, "data">
  >;
  createItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemStorageInventoryAreaLocationArgs, "data">
  >;
  createItemStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemStorageInventoryAreaRuleArgs, "data">
  >;
  createKanban?: Resolver<
    Maybe<ResolversTypes["Kanban"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateKanbanArgs, "data">
  >;
  createKiosk?: Resolver<
    Maybe<ResolversTypes["Kiosk"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateKioskArgs, "data">
  >;
  createKitTemplate?: Resolver<
    Maybe<ResolversTypes["KitTemplate"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateKitTemplateArgs, "data">
  >;
  createOperator?: Resolver<
    Maybe<ResolversTypes["Operator"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOperatorArgs, "data">
  >;
  createProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, "data">
  >;
  createQuickBooksIntegration?: Resolver<
    Maybe<ResolversTypes["CreateQuickBooksIntegration"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateQuickBooksIntegrationArgs, "data">
  >;
  createStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateStorageInventoryAreaLocationArgs, "data">
  >;
  createStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateStorageInventoryAreaRuleArgs, "data">
  >;
  createSupplier?: Resolver<
    Maybe<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSupplierArgs, "data">
  >;
  createSupplierItem?: Resolver<
    Maybe<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSupplierItemArgs, "data">
  >;
  createTeam?: Resolver<
    Maybe<ResolversTypes["Team"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTeamArgs, "data">
  >;
  createWorkbench?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateWorkbenchArgs, "data">
  >;
  createWorkbenchHistoryLog?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateWorkbenchHistoryLogArgs, "data">
  >;
  deductInventoryRecord?: Resolver<
    Maybe<Array<ResolversTypes["InventoryRecord"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeductInventoryRecordArgs, "data">
  >;
  deleteArrivalDelivery?: Resolver<
    Maybe<ResolversTypes["ArrivalDelivery"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArrivalDeliveryArgs, "data">
  >;
  deleteArrivalLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArrivalLineItemArgs, "data">
  >;
  deleteArrivalRelease?: Resolver<
    Maybe<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArrivalReleaseArgs, "data">
  >;
  deleteArrivalReleaseLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalReleaseLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArrivalReleaseLineItemArgs, "data">
  >;
  deleteBid?: Resolver<
    ResolversTypes["Bid"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBidArgs, "bidRequestId" | "id">
  >;
  deleteBidLineItem?: Resolver<
    ResolversTypes["BidLineItem"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteBidLineItemArgs,
      "bidId" | "bidRequestId" | "itemId"
    >
  >;
  deleteBidRequest?: Resolver<
    ResolversTypes["BidRequest"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBidRequestArgs, "id">
  >;
  deleteBidRequestLineItem?: Resolver<
    ResolversTypes["BidRequestLineItem"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteBidRequestLineItemArgs,
      "bidRequestId" | "itemId"
    >
  >;
  deleteDepartureLineItem?: Resolver<
    ResolversTypes["DepartureLineItem"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteDepartureLineItemArgs,
      "departureId" | "productId"
    >
  >;
  deleteDeparturePick?: Resolver<
    ResolversTypes["DeparturePick"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDeparturePickArgs, "departureId" | "id">
  >;
  deleteDeparturePickLineItem?: Resolver<
    ResolversTypes["DeparturePickLineItem"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteDeparturePickLineItemArgs,
      "departureId" | "pickId" | "productId"
    >
  >;
  deleteDeparturePickList?: Resolver<
    ResolversTypes["DeparturePickList"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDeparturePickListArgs, "departureId" | "id">
  >;
  deleteDeparturePickListLineItem?: Resolver<
    ResolversTypes["DeparturePickListLineItem"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteDeparturePickListLineItemArgs,
      "departureId" | "pickListId" | "productId"
    >
  >;
  deleteDevice?: Resolver<
    Maybe<ResolversTypes["Device"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDeviceArgs, "id">
  >;
  deleteDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDynamicContainerArgs, "data">
  >;
  deleteEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEventArgs, "id">
  >;
  deleteExternalProduct?: Resolver<
    ResolversTypes["ExternalProduct"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteExternalProductArgs,
      "externalProductId" | "productId"
    >
  >;
  deleteInstructionSubject?: Resolver<
    ResolversTypes["InstructionSubject"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteInstructionSubjectArgs, "data">
  >;
  deleteInstructionTemplateStepFromInstructionTemplate?: Resolver<
    Maybe<ResolversTypes["InstructionTemplateStep"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteInstructionTemplateStepFromInstructionTemplateArgs,
      "data"
    >
  >;
  deleteInventoryArea?: Resolver<
    Maybe<Array<ResolversTypes["FacilityInventoryArea"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteInventoryAreaArgs, "data">
  >;
  deleteInvitation?: Resolver<
    Maybe<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteInvitationArgs, "invitationCode">
  >;
  deleteItemGroup?: Resolver<
    ResolversTypes["ItemGroup"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemGroupArgs, "data">
  >;
  deleteItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemStorageInventoryAreaLocationArgs, "data">
  >;
  deleteKiosk?: Resolver<
    ResolversTypes["Kiosk"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteKioskArgs, "id">
  >;
  deleteKitTemplatePartFromKitTemplate?: Resolver<
    Maybe<ResolversTypes["KitTemplatePart"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteKitTemplatePartFromKitTemplateArgs, "data">
  >;
  deleteKitTemplatePartOptionFromKitTemplatePart?: Resolver<
    ResolversTypes["KitTemplatePartOption"],
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteKitTemplatePartOptionFromKitTemplatePartArgs,
      "data"
    >
  >;
  deleteStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationDeleteStorageInventoryAreaLocationArgs,
      "aisle" | "bay" | "facilityId" | "inventoryAreaId" | "position" | "shelf"
    >
  >;
  detachDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDetachDynamicContainerArgs, "data">
  >;
  executeInstructionTemplate?: Resolver<
    ResolversTypes["InstructionExecution"],
    ParentType,
    ContextType,
    RequireFields<MutationExecuteInstructionTemplateArgs, "data">
  >;
  handleItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationHandleItemStorageInventoryAreaLocationArgs, "data">
  >;
  installOfficialApp?: Resolver<
    ResolversTypes["OfficialAppInstallation"],
    ParentType,
    ContextType,
    RequireFields<MutationInstallOfficialAppArgs, "appId">
  >;
  jeenyAddKitTemplatePartWithOptionToKitTemplate?: Resolver<
    Maybe<ResolversTypes["KitTemplateDetails"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationJeenyAddKitTemplatePartWithOptionToKitTemplateArgs,
      "data"
    >
  >;
  joinCompany?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType,
    RequireFields<MutationJoinCompanyArgs, "companyAlias">
  >;
  joinCompanyByInvitation?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType,
    RequireFields<MutationJoinCompanyByInvitationArgs, "invitationCode">
  >;
  loadDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoadDynamicContainerArgs, "data">
  >;
  pickStorageLocation?: Resolver<
    Maybe<ResolversTypes["StorageInventoryPickRecord"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationPickStorageLocationArgs,
      "facilityId" | "inventoryAreaLocation" | "itemId" | "quantity"
    >
  >;
  pickStorageLocationForDeparture?: Resolver<
    ResolversTypes["DeparturePickLineItem"],
    ParentType,
    ContextType,
    RequireFields<MutationPickStorageLocationForDepartureArgs, "data">
  >;
  previewBillingCycleTypeUpdate?: Resolver<
    ResolversTypes["BillingCycleTypeUpdatePreview"],
    ParentType,
    ContextType,
    RequireFields<MutationPreviewBillingCycleTypeUpdateArgs, "data">
  >;
  previewSubscriptionUpdate?: Resolver<
    ResolversTypes["SubscriptionUpdatePreview"],
    ParentType,
    ContextType,
    RequireFields<MutationPreviewSubscriptionUpdateArgs, "data">
  >;
  resendInvitation?: Resolver<
    Maybe<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationResendInvitationArgs, "id">
  >;
  resumeSubscription?: Resolver<
    ResolversTypes["SubscriptionResumption"],
    ParentType,
    ContextType
  >;
  revokeQuickBooksIntegration?: Resolver<
    Maybe<ResolversTypes["RevokeQuickBooksIntegration"]>,
    ParentType,
    ContextType
  >;
  saveArrival?: Resolver<
    Maybe<ResolversTypes["Arrival"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalArgs, "data">
  >;
  saveArrivalDelivery?: Resolver<
    Maybe<ResolversTypes["ArrivalDelivery"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalDeliveryArgs, "data">
  >;
  saveArrivalDeliveryLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalDeliveryLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalDeliveryLineItemArgs, "data">
  >;
  saveArrivalLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalLineItemArgs, "data">
  >;
  saveArrivalRelease?: Resolver<
    Maybe<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalReleaseArgs, "data">
  >;
  saveArrivalReleaseLineItem?: Resolver<
    Maybe<ResolversTypes["ArrivalReleaseLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveArrivalReleaseLineItemArgs, "data">
  >;
  saveBid?: Resolver<
    Maybe<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveBidArgs, "bidRequestId" | "data" | "id">
  >;
  saveBidLineItem?: Resolver<
    Maybe<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSaveBidLineItemArgs,
      "bidId" | "bidRequestId" | "data" | "itemId"
    >
  >;
  saveBidRequest?: Resolver<
    Maybe<ResolversTypes["BidRequest"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveBidRequestArgs, "data" | "id">
  >;
  saveBidRequestLineItem?: Resolver<
    Maybe<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSaveBidRequestLineItemArgs,
      "bidRequestId" | "data" | "itemId"
    >
  >;
  saveCompany?: Resolver<
    Maybe<ResolversTypes["Company"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveCompanyArgs, "data">
  >;
  saveCompanyUser?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveCompanyUserArgs, "data">
  >;
  saveCompanyUserAdmin?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveCompanyUserAdminArgs, "data" | "userId">
  >;
  saveCustomApp?: Resolver<
    ResolversTypes["App"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveCustomAppArgs, "data">
  >;
  saveDeparture?: Resolver<
    Maybe<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveDepartureArgs, "data">
  >;
  saveDepartureLineItem?: Resolver<
    ResolversTypes["DepartureLineItem"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveDepartureLineItemArgs, "data">
  >;
  saveDeparturePickList?: Resolver<
    ResolversTypes["DeparturePickList"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveDeparturePickListArgs, "data">
  >;
  saveDeparturePickListLineItem?: Resolver<
    ResolversTypes["DeparturePickListLineItem"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveDeparturePickListLineItemArgs, "data">
  >;
  saveDevice?: Resolver<
    Maybe<ResolversTypes["Device"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveDeviceArgs, "data" | "id">
  >;
  saveDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveDynamicContainerArgs, "data">
  >;
  saveEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveEventArgs, "data">
  >;
  saveFacility?: Resolver<
    Maybe<ResolversTypes["Facility"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveFacilityArgs, "data">
  >;
  saveFacilityItem?: Resolver<
    Maybe<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveFacilityItemArgs, "data">
  >;
  saveHeadlessUser?: Resolver<
    Maybe<ResolversTypes["HeadlessUser"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveHeadlessUserArgs, "data">
  >;
  saveInstructionExecution?: Resolver<
    ResolversTypes["InstructionExecution"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveInstructionExecutionArgs, "data">
  >;
  saveInstructionSubject?: Resolver<
    ResolversTypes["InstructionSubject"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveInstructionSubjectArgs, "data">
  >;
  saveInstructionTemplate?: Resolver<
    Maybe<ResolversTypes["InstructionTemplate"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveInstructionTemplateArgs, "data">
  >;
  saveInstructionTemplateStep?: Resolver<
    ResolversTypes["InstructionTemplateStep"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveInstructionTemplateStepArgs, "data">
  >;
  saveInventoryArea?: Resolver<
    Maybe<Array<ResolversTypes["FacilityInventoryArea"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveInventoryAreaArgs, "data">
  >;
  saveInvitation?: Resolver<
    Maybe<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveInvitationArgs, "data">
  >;
  saveItem?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveItemArgs, "data">
  >;
  saveItemGroup?: Resolver<
    ResolversTypes["ItemGroup"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveItemGroupArgs, "data">
  >;
  saveItemStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveItemStorageInventoryAreaRuleArgs, "data">
  >;
  saveKanban?: Resolver<
    Maybe<ResolversTypes["Kanban"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveKanbanArgs, "data">
  >;
  saveKiosk?: Resolver<
    Maybe<ResolversTypes["Kiosk"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveKioskArgs, "data">
  >;
  saveKitTemplate?: Resolver<
    Maybe<ResolversTypes["KitTemplate"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveKitTemplateArgs, "data">
  >;
  saveKitTemplatePart?: Resolver<
    ResolversTypes["KitTemplatePart"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveKitTemplatePartArgs, "data">
  >;
  saveOperator?: Resolver<
    Maybe<ResolversTypes["SafeOperator"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveOperatorArgs, "data">
  >;
  saveProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveProductArgs, "data">
  >;
  saveQuickBooksAccounts?: Resolver<
    Maybe<ResolversTypes["QuickBooksIntegrationAccounts"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveQuickBooksAccountsArgs, "data">
  >;
  saveStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveStorageInventoryAreaLocationArgs, "data">
  >;
  saveSupplier?: Resolver<
    Maybe<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveSupplierArgs, "data">
  >;
  saveSupplierItem?: Resolver<
    Maybe<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveSupplierItemArgs, "data">
  >;
  saveTeam?: Resolver<
    Maybe<ResolversTypes["Team"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveTeamArgs, "data">
  >;
  saveUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationSaveUserArgs, "data">
  >;
  saveWorkbench?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveWorkbenchArgs, "data">
  >;
  saveWorkbenchHistoryLog?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveWorkbenchHistoryLogArgs, "data">
  >;
  setDefaultKitTemplatePartOption?: Resolver<
    ResolversTypes["KitTemplatePart"],
    ParentType,
    ContextType,
    RequireFields<MutationSetDefaultKitTemplatePartOptionArgs, "data">
  >;
  submitInstructionExecutionStep?: Resolver<
    ResolversTypes["InstructionExecutionStepSubmission"],
    ParentType,
    ContextType,
    RequireFields<MutationSubmitInstructionExecutionStepArgs, "data">
  >;
  switchDynamicContainers?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSwitchDynamicContainersArgs,
      "dynamicContainer1Id" | "dynamicContainer2Id" | "facilityId"
    >
  >;
  syncQuickBooks?: Resolver<
    Maybe<ResolversTypes["QuickBooksSyncList"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSyncQuickBooksArgs, "data">
  >;
  uninstallOfficialApp?: Resolver<
    ResolversTypes["OfficialAppInstallation"],
    ParentType,
    ContextType,
    RequireFields<MutationUninstallOfficialAppArgs, "appId">
  >;
  updateBillingCycleType?: Resolver<
    ResolversTypes["BillingCycleTypeUpdate"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBillingCycleTypeArgs, "data">
  >;
  updateItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateItemStorageInventoryAreaLocationArgs, "data">
  >;
  updateStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateStorageInventoryAreaRuleArgs, "data">
  >;
  updateSubscription?: Resolver<
    ResolversTypes["SubscriptionUpdate"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSubscriptionArgs, "data">
  >;
};

export type NoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Note"] = ResolversParentTypes["Note"]
> = {
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  note?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficialAppInstallationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OfficialAppInstallation"] = ResolversParentTypes["OfficialAppInstallation"]
> = {
  appId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Operator"] = ResolversParentTypes["Operator"]
> = {
  accessLog?: Resolver<
    Array<ResolversTypes["DeviceAccess"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deviceAccessLog?: Resolver<
    Array<ResolversTypes["DeviceAccess"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  facilityIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  failedLoginAttempts?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kioskAccessLog?: Resolver<
    Array<ResolversTypes["KioskAccess"]>,
    ParentType,
    ContextType
  >;
  language?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastLoginAttempt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mobilePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pinCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  seenTutorials?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatorAccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OperatorAccess"] = ResolversParentTypes["OperatorAccess"]
> = {
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes["LogOperator"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartialInventoryAreaLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PartialInventoryAreaLocation"] = ResolversParentTypes["PartialInventoryAreaLocation"]
> = {
  aisle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bay?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  inventoryAreaId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  shelf?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Payment"] = ResolversParentTypes["Payment"]
> = {
  billingCycleType?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  billingCycleTypeNextPeriod?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  cancelAtPeriodEnd?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  currentPeriodEnd?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  currentPeriodEndsWithGrace?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  hasFailedPayment?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isCancelled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  stripeCustomerId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  stripeSubscriptionId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userSeatNumber?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  userSeatNumberNextPeriod?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PfepAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PfepAccessControls"] = ResolversParentTypes["PfepAccessControls"]
> = {
  all?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  arrivals?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  items?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  kanbanScanner?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  kits?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  products?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  suppliers?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PresignedPostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PresignedPost"] = ResolversParentTypes["PresignedPost"]
> = {
  fields?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Prices"] = ResolversParentTypes["Prices"]
> = {
  monthlySeatPrice?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  yearlySeatPrice?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"]
> = {
  childId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  childType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProductDetails"] = ResolversParentTypes["ProductDetails"]
> = {
  externalProducts?: Resolver<
    Array<ResolversTypes["ExternalProduct"]>,
    ParentType,
    ContextType
  >;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProductQueryResponse"] = ResolversParentTypes["ProductQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductionAccessControlsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProductionAccessControls"] = ResolversParentTypes["ProductionAccessControls"]
> = {
  all?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  equipment?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  facilities?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  productionLines?: Resolver<
    ResolversTypes["AccessType"],
    ParentType,
    ContextType
  >;
  toolings?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  trainings?: Resolver<
    Maybe<ResolversTypes["AccessType"]>,
    ParentType,
    ContextType
  >;
  workbenches?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  workcells?: Resolver<ResolversTypes["AccessType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  batchGetBidRequests?: Resolver<
    Array<ResolversTypes["BidRequest"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBatchGetBidRequestsArgs, "ids">
  >;
  batchGetBids?: Resolver<
    Array<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBatchGetBidsArgs, "ids">
  >;
  getApps?: Resolver<ResolversTypes["Apps"], ParentType, ContextType>;
  getAppsForKiosk?: Resolver<ResolversTypes["Apps"], ParentType, ContextType>;
  getArrivalDetails?: Resolver<
    Maybe<ResolversTypes["ArrivalDetailsWithStatus"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetArrivalDetailsArgs, "id">
  >;
  getArrivalReleases?: Resolver<
    Maybe<ResolversTypes["ArrivalReleaseQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetArrivalReleasesArgs>
  >;
  getArrivalReleasesByItem?: Resolver<
    Array<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetArrivalReleasesByItemArgs, "itemId">
  >;
  getArrivalReleasesBySupplier?: Resolver<
    ResolversTypes["ArrivalReleaseQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetArrivalReleasesBySupplierArgs, "supplierId">
  >;
  getArrivalReleasesWithStatus?: Resolver<
    Maybe<ResolversTypes["ArrivalReleaseWithStatusQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetArrivalReleasesWithStatusArgs>
  >;
  getArrivals?: Resolver<
    Maybe<ResolversTypes["ArrivalQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetArrivalsArgs>
  >;
  getArrivalsByItem?: Resolver<
    Maybe<Array<ResolversTypes["Arrival"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetArrivalsByItemArgs, "itemId">
  >;
  getArrivalsBySupplier?: Resolver<
    ResolversTypes["ArrivalQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetArrivalsBySupplierArgs, "supplierId">
  >;
  getBid?: Resolver<
    Maybe<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidArgs, "bidRequestId" | "id">
  >;
  getBidLineItem?: Resolver<
    Maybe<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidLineItemArgs, "bidId" | "bidRequestId" | "itemId">
  >;
  getBidLineItems?: Resolver<
    ResolversTypes["BidLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidLineItemsArgs, "itemGroupId">
  >;
  getBidLineItemsByItem?: Resolver<
    ResolversTypes["BidLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidLineItemsByItemArgs, "itemId">
  >;
  getBidLineItemsByItemGroup?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidLineItemsByItemGroupArgs, "itemGroupId">
  >;
  getBidLineItemsBySupplier?: Resolver<
    ResolversTypes["BidLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidLineItemsBySupplierArgs, "supplierId">
  >;
  getBidRequest?: Resolver<
    Maybe<ResolversTypes["BidRequest"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidRequestArgs, "id">
  >;
  getBidRequestDetails?: Resolver<
    Maybe<ResolversTypes["BidRequestDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidRequestDetailsArgs, "id">
  >;
  getBidRequestLineItem?: Resolver<
    Maybe<ResolversTypes["BidRequestLineItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBidRequestLineItemArgs, "bidRequestId" | "itemId">
  >;
  getBidRequestLineItems?: Resolver<
    ResolversTypes["BidRequestLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidRequestLineItemsArgs, "bidRequestId">
  >;
  getBidRequestLineItemsByItem?: Resolver<
    ResolversTypes["BidRequestLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidRequestLineItemsByItemArgs, "itemId">
  >;
  getBidRequests?: Resolver<
    ResolversTypes["BidRequestQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetBidRequestsArgs>
  >;
  getBids?: Resolver<
    ResolversTypes["BidQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidsArgs, "bidRequestId">
  >;
  getBidsBySupplier?: Resolver<
    ResolversTypes["BidQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBidsBySupplierArgs, "supplierId">
  >;
  getCompanies?: Resolver<
    ResolversTypes["CompanyQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetCompaniesArgs>
  >;
  getCompaniesByUser?: Resolver<
    Maybe<Array<ResolversTypes["Company"]>>,
    ParentType,
    ContextType
  >;
  getCompany?: Resolver<
    Maybe<ResolversTypes["Company"]>,
    ParentType,
    ContextType
  >;
  getCompanyUser?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType
  >;
  getCompanyUserAdmin?: Resolver<
    Maybe<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCompanyUserAdminArgs, "userId">
  >;
  getCompanyUsers?: Resolver<
    Maybe<ResolversTypes["CompanyUserQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetCompanyUsersArgs>
  >;
  getCompanyUsersByTeamId?: Resolver<
    Maybe<ResolversTypes["CompanyUserQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCompanyUsersByTeamIdArgs, "teamId">
  >;
  getCustomApp?: Resolver<
    Maybe<ResolversTypes["App"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCustomAppArgs, "id">
  >;
  getDeparture?: Resolver<
    Maybe<ResolversTypes["Departure"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDepartureArgs, "id">
  >;
  getDepartureDetails?: Resolver<
    Maybe<ResolversTypes["DepartureDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDepartureDetailsArgs, "id">
  >;
  getDepartureLineItemsByItemId?: Resolver<
    Maybe<ResolversTypes["DepartureLineItemQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDepartureLineItemsByItemIdArgs, "itemId">
  >;
  getDeparturePickListLineItemsByItemId?: Resolver<
    ResolversTypes["DeparturePickListLineItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetDeparturePickListLineItemsByItemIdArgs, "itemId">
  >;
  getDeparturePickLists?: Resolver<
    ResolversTypes["DeparturePickListQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetDeparturePickListsArgs>
  >;
  getDeparturePickListsByFacilityId?: Resolver<
    ResolversTypes["DeparturePickListQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetDeparturePickListsByFacilityIdArgs, "facilityId">
  >;
  getDepartures?: Resolver<
    Maybe<ResolversTypes["DepartureQueryResponse"]>,
    ParentType,
    ContextType
  >;
  getDeparturesByExternalCustomerId?: Resolver<
    Maybe<ResolversTypes["DepartureQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetDeparturesByExternalCustomerIdArgs,
      "externalCustomerId"
    >
  >;
  getDevice?: Resolver<
    Maybe<ResolversTypes["Device"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDeviceArgs, "id">
  >;
  getDeviceAccessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  getDevices?: Resolver<
    Maybe<ResolversTypes["DeviceQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetDevicesArgs>
  >;
  getDynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDynamicContainerArgs, "facilityId" | "id">
  >;
  getDynamicContainers?: Resolver<
    ResolversTypes["DynamicContainerQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetDynamicContainersArgs, "facilityId">
  >;
  getDynamicContainersByExpiry?: Resolver<
    Maybe<ResolversTypes["DynamicContainerQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDynamicContainersByExpiryArgs, "facilityId">
  >;
  getEvent?: Resolver<
    Maybe<ResolversTypes["Event"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetEventArgs, "id">
  >;
  getEventDetails?: Resolver<
    Maybe<ResolversTypes["EventDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetEventDetailsArgs, "id">
  >;
  getEvents?: Resolver<
    ResolversTypes["EventsBetweenDates"],
    ParentType,
    ContextType,
    RequireFields<QueryGetEventsArgs, "fromDate" | "toDate">
  >;
  getEventsByAssignee?: Resolver<
    ResolversTypes["EventsBetweenDates"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetEventsByAssigneeArgs,
      "assigneeId" | "assigneeType" | "fromDate" | "toDate"
    >
  >;
  getExternalProduct?: Resolver<
    Maybe<ResolversTypes["ExternalProduct"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetExternalProductArgs,
      "externalProductId" | "productId"
    >
  >;
  getExternalProducts?: Resolver<
    ResolversTypes["ExternalProductQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetExternalProductsArgs, "externalProductId">
  >;
  getExternalProductsByProductId?: Resolver<
    ResolversTypes["ExternalProductQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetExternalProductsByProductIdArgs, "productId">
  >;
  getFacilities?: Resolver<
    Maybe<ResolversTypes["FacilityQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetFacilitiesArgs>
  >;
  getFacility?: Resolver<
    Maybe<ResolversTypes["Facility"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFacilityArgs, "id">
  >;
  getFacilityDetails?: Resolver<
    Maybe<ResolversTypes["FacilityDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFacilityDetailsArgs, "id">
  >;
  getFacilityItem?: Resolver<
    Maybe<ResolversTypes["FacilityItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFacilityItemArgs, "data">
  >;
  getFacilityItemsByFacility?: Resolver<
    ResolversTypes["FacilityItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetFacilityItemsByFacilityArgs, "facilityId">
  >;
  getFacilityItemsByItem?: Resolver<
    ResolversTypes["FacilityItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetFacilityItemsByItemArgs, "itemId">
  >;
  getFilesForKitTemplate?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFilesForKitTemplateArgs, "id">
  >;
  getHeadlessUser?: Resolver<
    Maybe<ResolversTypes["HeadlessUser"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetHeadlessUserArgs, "id">
  >;
  getHeadlessUsers?: Resolver<
    Maybe<ResolversTypes["HeadlessUserQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetHeadlessUsersArgs>
  >;
  getHubImages?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  getHubVideos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  getImagesForKitTemplate?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetImagesForKitTemplateArgs, "id">
  >;
  getInstalledOfficialApp?: Resolver<
    Maybe<ResolversTypes["InstalledApp"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInstalledOfficialAppArgs, "appId">
  >;
  getInstructionExecutionDetails?: Resolver<
    Maybe<ResolversTypes["InstructionExecutionDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInstructionExecutionDetailsArgs, "id">
  >;
  getInstructionExecutionsByEventId?: Resolver<
    ResolversTypes["InstructionExecutionQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetInstructionExecutionsByEventIdArgs, "eventId">
  >;
  getInstructionExecutionsByExecutorId?: Resolver<
    Maybe<ResolversTypes["InstructionExecutionQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInstructionExecutionsByExecutorIdArgs, "executorId">
  >;
  getInstructionExecutionsByInstructionTemplateId?: Resolver<
    ResolversTypes["InstructionExecutionQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetInstructionExecutionsByInstructionTemplateIdArgs,
      "instructionTemplateId"
    >
  >;
  getInstructionExecutionsByTrigger?: Resolver<
    ResolversTypes["InstructionExecutionQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetInstructionExecutionsByTriggerArgs,
      "triggerSource" | "triggerSourceId"
    >
  >;
  getInstructionSubjectsBySubject?: Resolver<
    ResolversTypes["InstructionSubjectQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetInstructionSubjectsBySubjectArgs,
      "subjectId" | "subjectType"
    >
  >;
  getInstructionSubjectsBySubjectWithTemplate?: Resolver<
    ResolversTypes["InstructionSubjectWithTemplateQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetInstructionSubjectsBySubjectWithTemplateArgs,
      "subjectId" | "subjectType"
    >
  >;
  getInstructionSubjectsByTemplate?: Resolver<
    ResolversTypes["InstructionSubjectQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetInstructionSubjectsByTemplateArgs,
      "instructionTemplateId"
    >
  >;
  getInstructionTemplate?: Resolver<
    Maybe<ResolversTypes["InstructionTemplate"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInstructionTemplateArgs, "id">
  >;
  getInstructionTemplateDetails?: Resolver<
    Maybe<ResolversTypes["InstructionTemplateDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInstructionTemplateDetailsArgs, "id">
  >;
  getInstructionTemplates?: Resolver<
    Maybe<ResolversTypes["InstructionTemplateQueryResponse"]>,
    ParentType,
    ContextType
  >;
  getInventoryArea?: Resolver<
    Maybe<ResolversTypes["StorageInventoryArea"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInventoryAreaArgs, "facilityId" | "inventoryAreaId">
  >;
  getInventoryLogs?: Resolver<
    ResolversTypes["InventoryLogQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetInventoryLogsArgs>
  >;
  getInvitation?: Resolver<
    Maybe<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInvitationArgs, "id">
  >;
  getInvitations?: Resolver<
    Maybe<ResolversTypes["InvitationQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetInvitationsArgs>
  >;
  getInvitationsByTeamId?: Resolver<
    Maybe<ResolversTypes["InvitationQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetInvitationsByTeamIdArgs, "teamId">
  >;
  getItem?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemArgs, "id">
  >;
  getItemDetails?: Resolver<
    Maybe<ResolversTypes["ItemDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemDetailsArgs, "id">
  >;
  getItemGroupDetails?: Resolver<
    ResolversTypes["ItemGroupDetails"],
    ParentType,
    ContextType,
    RequireFields<QueryGetItemGroupDetailsArgs, "id">
  >;
  getItemGroupsWithItems?: Resolver<
    ResolversTypes["ItemGroupsWithItems"],
    ParentType,
    ContextType
  >;
  getItemHistory?: Resolver<
    Array<ResolversTypes["InventoryHistoryRecord"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemHistoryArgs, "itemId">
  >;
  getItemStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemStorageInventoryAreaLocationArgs, "data">
  >;
  getItemStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemStorageInventoryAreaRuleArgs, "data">
  >;
  getItemStorageInventoryAreaRules?: Resolver<
    ResolversTypes["ItemStorageInventoryAreaRuleQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetItemStorageInventoryAreaRulesArgs, "itemId">
  >;
  getItems?: Resolver<
    Maybe<ResolversTypes["ItemQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetItemsArgs>
  >;
  getItemsHistory?: Resolver<
    Array<ResolversTypes["InventoryHistoryRecord"]>,
    ParentType,
    ContextType
  >;
  getItemsWithPrimarySupplier?: Resolver<
    Maybe<ResolversTypes["ItemWithPrimarySupplierQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetItemsWithPrimarySupplierArgs>
  >;
  getKanban?: Resolver<
    Maybe<ResolversTypes["Kanban"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKanbanArgs, "id">
  >;
  getKanbans?: Resolver<
    Maybe<Array<ResolversTypes["Kanban"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKanbansArgs, "status">
  >;
  getKanbansByItemId?: Resolver<
    Maybe<Array<ResolversTypes["Kanban"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKanbansByItemIdArgs, "itemId" | "status">
  >;
  getKanbansByWorkbenchId?: Resolver<
    Maybe<Array<ResolversTypes["Kanban"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKanbansByWorkbenchIdArgs, "status" | "workbenchId">
  >;
  getKiosk?: Resolver<
    Maybe<ResolversTypes["Kiosk"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKioskArgs, "id">
  >;
  getKiosks?: Resolver<
    ResolversTypes["KioskQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetKiosksArgs>
  >;
  getKitTemplateBom?: Resolver<
    Maybe<Array<ResolversTypes["KitTemplateBomEntry"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKitTemplateBomArgs, "data">
  >;
  getKitTemplateDetails?: Resolver<
    Maybe<ResolversTypes["KitTemplateDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKitTemplateDetailsArgs, "id">
  >;
  getKitTemplateTree?: Resolver<
    Maybe<ResolversTypes["KitTemplateTree"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetKitTemplateTreeArgs, "id">
  >;
  getKitTemplates?: Resolver<
    Maybe<ResolversTypes["KitTemplateQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetKitTemplatesArgs>
  >;
  getMedia?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMediaArgs, "category" | "id" | "type">
  >;
  getOfficialApp?: Resolver<
    Maybe<ResolversTypes["App"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOfficialAppArgs, "id">
  >;
  getOfficialApps?: Resolver<
    Array<ResolversTypes["App"]>,
    ParentType,
    ContextType
  >;
  getOperator?: Resolver<
    Maybe<ResolversTypes["SafeOperator"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOperatorArgs, "id">
  >;
  getOperatorPinCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOperatorPinCodeArgs, "id">
  >;
  getOperators?: Resolver<
    Maybe<ResolversTypes["SafeOperatorQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetOperatorsArgs>
  >;
  getOperatorsByDevice?: Resolver<
    Maybe<Array<ResolversTypes["SafeOperator"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOperatorsByDeviceArgs, "deviceId">
  >;
  getOperatorsByTeamId?: Resolver<
    Maybe<ResolversTypes["SafeOperatorQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOperatorsByTeamIdArgs, "teamId">
  >;
  getPayment?: Resolver<
    Maybe<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  getPresignedPost?: Resolver<
    Maybe<ResolversTypes["PresignedPost"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPresignedPostArgs, "args">
  >;
  getPresignedPostForApp?: Resolver<
    ResolversTypes["PresignedPost"],
    ParentType,
    ContextType,
    RequireFields<QueryGetPresignedPostForAppArgs, "args">
  >;
  getPrices?: Resolver<ResolversTypes["Prices"], ParentType, ContextType>;
  getProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProductArgs, "id">
  >;
  getProductDetails?: Resolver<
    Maybe<ResolversTypes["ProductDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProductDetailsArgs, "id">
  >;
  getProducts?: Resolver<
    Maybe<ResolversTypes["ProductQueryResponse"]>,
    ParentType,
    ContextType
  >;
  getQuickBooksAccounts?: Resolver<
    Maybe<ResolversTypes["QuickBooksAccounts"]>,
    ParentType,
    ContextType
  >;
  getQuickBooksAuthUrl?: Resolver<
    ResolversTypes["QuickBooksAuthUrl"],
    ParentType,
    ContextType
  >;
  getQuickBooksItemSyncList?: Resolver<
    Maybe<ResolversTypes["QuickBooksItemSyncList"]>,
    ParentType,
    ContextType
  >;
  getQuickBooksSupplierSyncList?: Resolver<
    Maybe<ResolversTypes["QuickBooksSupplierSyncList"]>,
    ParentType,
    ContextType
  >;
  getRecentApps?: Resolver<ResolversTypes["Apps"], ParentType, ContextType>;
  getRecentAppsForKiosk?: Resolver<
    ResolversTypes["Apps"],
    ParentType,
    ContextType
  >;
  getSavedQuickBooksAccounts?: Resolver<
    Maybe<ResolversTypes["QuickBooksIntegrationAccounts"]>,
    ParentType,
    ContextType
  >;
  getSeatStatus?: Resolver<
    Maybe<ResolversTypes["SeatStatus"]>,
    ParentType,
    ContextType
  >;
  getShopifyIntegrations?: Resolver<
    ResolversTypes["SafeShopifyIntegrationQueryResponse"],
    ParentType,
    ContextType,
    Partial<QueryGetShopifyIntegrationsArgs>
  >;
  getShopifyProduct?: Resolver<
    Maybe<ResolversTypes["ShopifyProduct"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetShopifyProductArgs, "externalProductId" | "shop">
  >;
  getShopifyProducts?: Resolver<
    Array<ResolversTypes["ShopifyProduct"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetShopifyProductsArgs, "shop">
  >;
  getStorageInventoryAreaLocation?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetStorageInventoryAreaLocationArgs,
      "aisle" | "bay" | "facilityId" | "inventoryAreaId" | "position" | "shelf"
    >
  >;
  getStorageInventoryAreaLocations?: Resolver<
    ResolversTypes["StorageInventoryAreaLocationQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetStorageInventoryAreaLocationsArgs, "facilityId">
  >;
  getStorageInventoryAreaLocationsPayload?: Resolver<
    Array<ResolversTypes["StorageInventoryAreaLocationPayload"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetStorageInventoryAreaLocationsPayloadArgs,
      "facilityId"
    >
  >;
  getStorageInventoryAreaRule?: Resolver<
    Maybe<ResolversTypes["StorageInventoryAreaRule"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetStorageInventoryAreaRuleArgs,
      "facilityId" | "inventoryAreaId"
    >
  >;
  getStorageInventoryAreaRules?: Resolver<
    ResolversTypes["StorageInventoryAreaRule"],
    ParentType,
    ContextType,
    RequireFields<QueryGetStorageInventoryAreaRulesArgs, "facilityId">
  >;
  getStorageInventoryByLocation?: Resolver<
    ResolversTypes["StorageInventory"],
    ParentType,
    ContextType,
    RequireFields<QueryGetStorageInventoryByLocationArgs, "facilityId">
  >;
  getStorageInventoryByPayload?: Resolver<
    ResolversTypes["StorageInventory"],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetStorageInventoryByPayloadArgs,
      "facilityId" | "itemId"
    >
  >;
  getSupplier?: Resolver<
    Maybe<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSupplierArgs, "id">
  >;
  getSupplierDetails?: Resolver<
    Maybe<ResolversTypes["SupplierDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSupplierDetailsArgs, "id">
  >;
  getSupplierItem?: Resolver<
    Maybe<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSupplierItemArgs, "id">
  >;
  getSupplierItemsByItem?: Resolver<
    ResolversTypes["SupplierItemQueryResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetSupplierItemsByItemArgs, "itemId">
  >;
  getSupplierItemsBySupplier?: Resolver<
    Maybe<ResolversTypes["SupplierItemQueryResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSupplierItemsBySupplierArgs, "supplierId">
  >;
  getSuppliers?: Resolver<
    Maybe<ResolversTypes["SupplierQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetSuppliersArgs>
  >;
  getTeam?: Resolver<
    Maybe<ResolversTypes["Team"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTeamArgs, "id">
  >;
  getTeamDetails?: Resolver<
    Maybe<ResolversTypes["TeamDetails"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTeamDetailsArgs, "teamId">
  >;
  getTeams?: Resolver<
    Maybe<ResolversTypes["TeamQueryResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryGetTeamsArgs>
  >;
  getUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  getVideosForKitTemplate?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetVideosForKitTemplateArgs, "id">
  >;
  getWorkbench?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetWorkbenchArgs, "id">
  >;
  getWorkbenches?: Resolver<
    Maybe<Array<ResolversTypes["Workbench"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetWorkbenchesArgs, "status">
  >;
};

export type QuickBooksAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksAccount"] = ResolversParentTypes["QuickBooksAccount"]
> = {
  AccountSubType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  AccountType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  Id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksAccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksAccounts"] = ResolversParentTypes["QuickBooksAccounts"]
> = {
  accounts?: Resolver<
    Array<ResolversTypes["QuickBooksAccount"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksAuthUrlResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksAuthUrl"] = ResolversParentTypes["QuickBooksAuthUrl"]
> = {
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksIntegrationAccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksIntegrationAccounts"] = ResolversParentTypes["QuickBooksIntegrationAccounts"]
> = {
  assetAccountRef?: Resolver<
    Maybe<ResolversTypes["QuickBooksRef"]>,
    ParentType,
    ContextType
  >;
  expenseAccountRef?: Resolver<
    Maybe<ResolversTypes["QuickBooksRef"]>,
    ParentType,
    ContextType
  >;
  incomeAccountRef?: Resolver<
    Maybe<ResolversTypes["QuickBooksRef"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksItem"] = ResolversParentTypes["QuickBooksItem"]
> = {
  AssetAccountRef?: Resolver<
    ResolversTypes["QuickBooksRef"],
    ParentType,
    ContextType
  >;
  Description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  ExpenseAccountRef?: Resolver<
    ResolversTypes["QuickBooksRef"],
    ParentType,
    ContextType
  >;
  Id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  InvStartDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  PrefSupplierRef?: Resolver<
    Maybe<ResolversTypes["QuickBooksRef"]>,
    ParentType,
    ContextType
  >;
  PurchaseCost?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  PurchaseDesc?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  QtyOnHand?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  Sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  SyncToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  TrackQtyOnHand?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  Type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  UnitPrice?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksItemSyncListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksItemSyncList"] = ResolversParentTypes["QuickBooksItemSyncList"]
> = {
  itemsInSync?: Resolver<
    Array<ResolversTypes["Items"]>,
    ParentType,
    ContextType
  >;
  itemsOutOfSync?: Resolver<
    Array<ResolversTypes["Items"]>,
    ParentType,
    ContextType
  >;
  jeenyItems?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  quickBooksItems?: Resolver<
    Array<ResolversTypes["QuickBooksItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksRefResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksRef"] = ResolversParentTypes["QuickBooksRef"]
> = {
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksSupplierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksSupplier"] = ResolversParentTypes["QuickBooksSupplier"]
> = {
  Active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  DisplayName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  SyncToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  WebAddr?: Resolver<
    Maybe<ResolversTypes["QuickBooksWebAddress"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksSupplierSyncListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksSupplierSyncList"] = ResolversParentTypes["QuickBooksSupplierSyncList"]
> = {
  jeenySuppliers?: Resolver<
    Array<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType
  >;
  quickBooksSuppliers?: Resolver<
    Array<ResolversTypes["QuickBooksSupplier"]>,
    ParentType,
    ContextType
  >;
  suppliersInSync?: Resolver<
    Array<ResolversTypes["Suppliers"]>,
    ParentType,
    ContextType
  >;
  suppliersOutofSync?: Resolver<
    Array<ResolversTypes["Suppliers"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksSyncResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksSync"] = ResolversParentTypes["QuickBooksSync"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quickBooksId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  syncToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksSyncListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksSyncList"] = ResolversParentTypes["QuickBooksSyncList"]
> = {
  itemSync?: Resolver<
    Array<ResolversTypes["QuickBooksSync"]>,
    ParentType,
    ContextType
  >;
  supplierSync?: Resolver<
    Array<ResolversTypes["QuickBooksSync"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksToken"] = ResolversParentTypes["QuickBooksToken"]
> = {
  access_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  expires_in?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token_type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  x_refresh_token_expires_in?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuickBooksWebAddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["QuickBooksWebAddress"] = ResolversParentTypes["QuickBooksWebAddress"]
> = {
  URI?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultListByStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ResultListByStatus"] = ResolversParentTypes["ResultListByStatus"]
> = {
  __resolveType: TypeResolveFn<
    "InvitationFulfilledPromise" | "InvitationRejectedPromise",
    ParentType,
    ContextType
  >;
};

export type RevokeQuickBooksIntegrationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RevokeQuickBooksIntegration"] = ResolversParentTypes["RevokeQuickBooksIntegration"]
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SafeOperatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SafeOperator"] = ResolversParentTypes["SafeOperator"]
> = {
  accessLog?: Resolver<
    Array<ResolversTypes["DeviceAccess"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deviceAccessLog?: Resolver<
    Array<ResolversTypes["DeviceAccess"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  facilityIds?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  failedLoginAttempts?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kioskAccessLog?: Resolver<
    Array<ResolversTypes["KioskAccess"]>,
    ParentType,
    ContextType
  >;
  language?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastLoginAttempt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mobilePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  seenTutorials?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teamName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SafeOperatorQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SafeOperatorQueryResponse"] = ResolversParentTypes["SafeOperatorQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["SafeOperator"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SafeShopifyIntegrationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SafeShopifyIntegration"] = ResolversParentTypes["SafeShopifyIntegration"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  shop?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SafeShopifyIntegrationQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SafeShopifyIntegrationQueryResponse"] = ResolversParentTypes["SafeShopifyIntegrationQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["SafeShopifyIntegration"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeatStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SeatStatus"] = ResolversParentTypes["SeatStatus"]
> = {
  availableCustomApps?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  availableDevices?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  availableFreeCompanyUserSeats?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  availableFreeOperatorSeats?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  availableKiosks?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  availableSeats?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  companyUserCount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  customAppCount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  deviceCount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  hasPayment?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasUnlimitedCustomApps?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  hasUnlimitedKiosks?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  invitationCount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  kioskCount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  operatorUserCount?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopifyProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShopifyProduct"] = ResolversParentTypes["ShopifyProduct"]
> = {
  admin_graphql_api_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  body_html?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  handle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes["ShopifyProductImage"]>,
    ParentType,
    ContextType
  >;
  images?: Resolver<
    Maybe<Array<ResolversTypes["ShopifyProductImage"]>>,
    ParentType,
    ContextType
  >;
  options?: Resolver<
    Maybe<Array<ResolversTypes["ShopifyProductOption"]>>,
    ParentType,
    ContextType
  >;
  product_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  published_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  published_scope?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  template_suffix?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  variants?: Resolver<
    Maybe<Array<ResolversTypes["ShopifyProductVariant"]>>,
    ParentType,
    ContextType
  >;
  vendor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopifyProductImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShopifyProductImage"] = ResolversParentTypes["ShopifyProductImage"]
> = {
  admin_graphql_api_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  alt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  product_id?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  src?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  variant_ids?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopifyProductOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShopifyProductOption"] = ResolversParentTypes["ShopifyProductOption"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  product_id?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  values?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopifyProductVariantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShopifyProductVariant"] = ResolversParentTypes["ShopifyProductVariant"]
> = {
  admin_graphql_api_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  barcode?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  compare_at_price?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fulfillment_service?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  grams?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  image_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  inventory_item_id?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  inventory_management?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  inventory_policy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  inventory_quantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  jeenyProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  old_inventory_quantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  option1?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  option2?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  option3?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  product_id?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  requires_shipping?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  taxable?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  weight?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  weight_unit?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventory"] = ResolversParentTypes["StorageInventory"]
> = {
  dynamicContainer?: Resolver<
    Maybe<Array<ResolversTypes["DynamicContainer"]>>,
    ParentType,
    ContextType
  >;
  item?: Resolver<
    Maybe<Array<ResolversTypes["ItemStorageInventoryAreaLocation"]>>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryAreaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryArea"] = ResolversParentTypes["StorageInventoryArea"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryArea?: Resolver<
    ResolversTypes["FacilityInventoryArea"],
    ParentType,
    ContextType
  >;
  rule?: Resolver<
    ResolversTypes["StorageInventoryAreaRule"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryAreaLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryAreaLocation"] = ResolversParentTypes["StorageInventoryAreaLocation"]
> = {
  aisle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bay?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deductInventory?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  dynamicContainerTypes?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logs?: Resolver<Array<ResolversTypes["StorageLog"]>, ParentType, ContextType>;
  pickable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  readableId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shelf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sizeCategory?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  xCoordinate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  yCoordinate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryAreaLocationPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryAreaLocationPayload"] = ResolversParentTypes["StorageInventoryAreaLocationPayload"]
> = {
  aisle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bay?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  deductInventory?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  dynamicContainer?: Resolver<
    Maybe<ResolversTypes["DynamicContainer"]>,
    ParentType,
    ContextType
  >;
  dynamicContainerTypes?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  item?: Resolver<
    Maybe<ResolversTypes["ItemStorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  logs?: Resolver<Array<ResolversTypes["StorageLog"]>, ParentType, ContextType>;
  pickable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  readableId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shelf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sizeCategory?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  xCoordinate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  yCoordinate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryAreaLocationQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryAreaLocationQueryResponse"] = ResolversParentTypes["StorageInventoryAreaLocationQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["StorageInventoryAreaLocation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryAreaRuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryAreaRule"] = ResolversParentTypes["StorageInventoryAreaRule"]
> = {
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  inventoryAreaId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  locationAssignment?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pickStrategy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageInventoryPickRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageInventoryPickRecord"] = ResolversParentTypes["StorageInventoryPickRecord"]
> = {
  __resolveType: TypeResolveFn<
    "ItemDynamicContainerPayload" | "ItemStorageInventoryAreaLocation",
    ParentType,
    ContextType
  >;
};

export type StorageLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StorageLog"] = ResolversParentTypes["StorageLog"]
> = {
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  inventoryQuantity?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionCancellationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SubscriptionCancellation"] = ResolversParentTypes["SubscriptionCancellation"]
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResumptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SubscriptionResumption"] = ResolversParentTypes["SubscriptionResumption"]
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionUpdateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SubscriptionUpdate"] = ResolversParentTypes["SubscriptionUpdate"]
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionUpdatePreviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SubscriptionUpdatePreview"] = ResolversParentTypes["SubscriptionUpdatePreview"]
> = {
  immediateTotal?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  nextInvoiceTotal?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Supplier"] = ResolversParentTypes["Supplier"]
> = {
  address?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  contacts?: Resolver<
    Maybe<Array<ResolversTypes["Contact"]>>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  customerNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  files?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  notes?: Resolver<
    Maybe<Array<ResolversTypes["Note"]>>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  primaryPaymentType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shippingAddress?: Resolver<
    Maybe<ResolversTypes["Address"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  terms?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  website?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierDetails"] = ResolversParentTypes["SupplierDetails"]
> = {
  arrivalReleases?: Resolver<
    Array<ResolversTypes["ArrivalRelease"]>,
    ParentType,
    ContextType
  >;
  arrivals?: Resolver<
    Array<ResolversTypes["Arrival"]>,
    ParentType,
    ContextType
  >;
  bidLineItems?: Resolver<
    Array<ResolversTypes["BidLineItem"]>,
    ParentType,
    ContextType
  >;
  bids?: Resolver<Array<ResolversTypes["Bid"]>, ParentType, ContextType>;
  instructionSubjects?: Resolver<
    Array<ResolversTypes["InstructionSubject"]>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<ResolversTypes["Supplier"], ParentType, ContextType>;
  supplierItems?: Resolver<
    Array<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItem"] = ResolversParentTypes["SupplierItem"]
> = {
  brand?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  brandSku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  carrierType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  damagedGoodsContactId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deliveryContainer?: Resolver<
    Maybe<ResolversTypes["SupplierItemDeliveryContainer"]>,
    ParentType,
    ContextType
  >;
  howToOrder?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes["Item"]>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastPPU?: Resolver<
    Maybe<ResolversTypes["SupplierItemPPU"]>,
    ParentType,
    ContextType,
    Partial<SupplierItemLastPpuArgs>
  >;
  leadTimeInHours?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  minimumOrderQuantity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  multiplesOf?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  performanceRating?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pointOfOrigin?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  priceTiers?: Resolver<
    Maybe<Array<ResolversTypes["SupplierItemPPUTier"]>>,
    ParentType,
    ContextType
  >;
  primaryContactId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  productUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  replacementInstructions?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  shipVia?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  supplier?: Resolver<
    Maybe<ResolversTypes["ClonedSupplier"]>,
    ParentType,
    ContextType
  >;
  supplierId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  transitTimeInHours?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  unitsOfMeasure?: Resolver<
    Maybe<ResolversTypes["SupplierItemUnitsOfMeasure"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemDeliveryContainerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemDeliveryContainer"] = ResolversParentTypes["SupplierItemDeliveryContainer"]
> = {
  cubicFeet?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  unitOfMeasure?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  weight?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemPpuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemPPU"] = ResolversParentTypes["SupplierItemPPU"]
> = {
  amount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemPpuTierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemPPUTier"] = ResolversParentTypes["SupplierItemPPUTier"]
> = {
  priceHistory?: Resolver<
    Array<ResolversTypes["SupplierItemPPU"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tierEnd?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  tierStart?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemQueryResponse"] = ResolversParentTypes["SupplierItemQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["SupplierItem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemUnitsOfMeasureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemUnitsOfMeasure"] = ResolversParentTypes["SupplierItemUnitsOfMeasure"]
> = {
  bomInParent?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  customInvToBom?: Resolver<
    Maybe<Array<ResolversTypes["SupplierItemUnitsOfMeasureCustom"]>>,
    ParentType,
    ContextType
  >;
  customPurToInv?: Resolver<
    Maybe<Array<ResolversTypes["SupplierItemUnitsOfMeasureCustom"]>>,
    ParentType,
    ContextType
  >;
  flipBomParentCountMethod?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  flipInvParentCountMethod?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  inventoryInParent?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  purchaseUnitOfMeasure?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierItemUnitsOfMeasureCustomResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierItemUnitsOfMeasureCustom"] = ResolversParentTypes["SupplierItemUnitsOfMeasureCustom"]
> = {
  amountInParent?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  descriptor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  flipSelfParentCountMethod?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  unitOfMeasure?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SupplierQueryResponse"] = ResolversParentTypes["SupplierQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Supplier"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuppliersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Suppliers"] = ResolversParentTypes["Suppliers"]
> = {
  jeenySupplier?: Resolver<
    Maybe<ResolversTypes["Supplier"]>,
    ParentType,
    ContextType
  >;
  quickBooksSupplier?: Resolver<
    Maybe<ResolversTypes["QuickBooksSupplier"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Team"] = ResolversParentTypes["Team"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TeamDetails"] = ResolversParentTypes["TeamDetails"]
> = {
  companyUsers?: Resolver<
    Array<ResolversTypes["CompanyUser"]>,
    ParentType,
    ContextType
  >;
  devices?: Resolver<Array<ResolversTypes["Device"]>, ParentType, ContextType>;
  invitations?: Resolver<
    Array<ResolversTypes["Invitation"]>,
    ParentType,
    ContextType
  >;
  operators?: Resolver<
    Array<ResolversTypes["Operator"]>,
    ParentType,
    ContextType
  >;
  team?: Resolver<ResolversTypes["Team"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamQueryResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TeamQueryResponse"] = ResolversParentTypes["TeamQueryResponse"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Team"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mobilePhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Workbench"] = ResolversParentTypes["Workbench"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  configuration?: Resolver<
    ResolversTypes["WorkbenchConfiguration"],
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  defaultImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dimensions?: Resolver<
    ResolversTypes["WorkbenchDimensions"],
    ParentType,
    ContextType
  >;
  facility?: Resolver<
    Maybe<ResolversTypes["Facility"]>,
    ParentType,
    ContextType
  >;
  facilityId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  files?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  history?: Resolver<
    Maybe<Array<ResolversTypes["WorkbenchHistoryLog"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  kitIds?: Resolver<Array<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  operatorIds?: Resolver<Array<ResolversTypes["ID"]>, ParentType, ContextType>;
  operators?: Resolver<
    Maybe<Array<ResolversTypes["Employee"]>>,
    ParentType,
    ContextType
  >;
  reportedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reportedStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videos?: Resolver<
    Maybe<Array<ResolversTypes["FileStorageRecord"]>>,
    ParentType,
    ContextType
  >;
  workbenchHardwares?: Resolver<
    Maybe<Array<ResolversTypes["WorkbenchHardware"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchAccessoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchAccessory"] = ResolversParentTypes["WorkbenchAccessory"]
> = {
  equipmentId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemHolderId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  machineId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  toolGrid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  toolId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  toolingId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchConfigurationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchConfiguration"] = ResolversParentTypes["WorkbenchConfiguration"]
> = {
  accessoryType?: Resolver<
    Maybe<ResolversTypes["WorkbenchAccessory"]>,
    ParentType,
    ContextType
  >;
  belowAccessories?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  flowrack?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  flowrackLaneType?: Resolver<
    Maybe<ResolversTypes["WorkbenchFlowrackLane"]>,
    ParentType,
    ContextType
  >;
  hangingAccessories?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  leftSideAccessories?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pegboard?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  rightSideAccessories?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tableAccessories?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchDimensionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchDimensions"] = ResolversParentTypes["WorkbenchDimensions"]
> = {
  below?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  flowrack?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  hanging?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  leftSide?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  pegboard?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  rightSide?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  table?: Resolver<
    Maybe<ResolversTypes["Dimensions"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchFlowrackLaneResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchFlowrackLane"] = ResolversParentTypes["WorkbenchFlowrackLane"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  kanban?: Resolver<ResolversTypes["Kanban"], ParentType, ContextType>;
  kanbanId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickLights?: Resolver<
    Maybe<Array<ResolversTypes["Float"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchHardwareResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchHardware"] = ResolversParentTypes["WorkbenchHardware"]
> = {
  companyId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  configuration?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  workbench?: Resolver<
    Maybe<ResolversTypes["Workbench"]>,
    ParentType,
    ContextType
  >;
  workbenchId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkbenchHistoryLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorkbenchHistoryLog"] = ResolversParentTypes["WorkbenchHistoryLog"]
> = {
  completedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  discardedOn?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  discardedReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  duration?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  employeeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kitId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  workcellId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessControls?: AccessControlsResolvers<ContextType>;
  AccessType?: AccessTypeResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  App?: AppResolvers<ContextType>;
  AppUsageLog?: AppUsageLogResolvers<ContextType>;
  Apps?: AppsResolvers<ContextType>;
  Arrival?: ArrivalResolvers<ContextType>;
  ArrivalComment?: ArrivalCommentResolvers<ContextType>;
  ArrivalDelivery?: ArrivalDeliveryResolvers<ContextType>;
  ArrivalDeliveryLineItem?: ArrivalDeliveryLineItemResolvers<ContextType>;
  ArrivalDetailsWithStatus?: ArrivalDetailsWithStatusResolvers<ContextType>;
  ArrivalLineItem?: ArrivalLineItemResolvers<ContextType>;
  ArrivalLineItemWithStatus?: ArrivalLineItemWithStatusResolvers<ContextType>;
  ArrivalQueryResponse?: ArrivalQueryResponseResolvers<ContextType>;
  ArrivalRelease?: ArrivalReleaseResolvers<ContextType>;
  ArrivalReleaseLineItem?: ArrivalReleaseLineItemResolvers<ContextType>;
  ArrivalReleaseLineItemWithStatus?: ArrivalReleaseLineItemWithStatusResolvers<ContextType>;
  ArrivalReleaseQueryResponse?: ArrivalReleaseQueryResponseResolvers<ContextType>;
  ArrivalReleaseSurcharge?: ArrivalReleaseSurchargeResolvers<ContextType>;
  ArrivalReleaseWithStatus?: ArrivalReleaseWithStatusResolvers<ContextType>;
  ArrivalReleaseWithStatusQueryResponse?: ArrivalReleaseWithStatusQueryResponseResolvers<ContextType>;
  ArrivalWithStatus?: ArrivalWithStatusResolvers<ContextType>;
  BackOfficeAccessControls?: BackOfficeAccessControlsResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  BidItem?: BidItemResolvers<ContextType>;
  BidItemGroupRecord?: BidItemGroupRecordResolvers<ContextType>;
  BidItemRecord?: BidItemRecordResolvers<ContextType>;
  BidLineItem?: BidLineItemResolvers<ContextType>;
  BidLineItemQueryResponse?: BidLineItemQueryResponseResolvers<ContextType>;
  BidQueryResponse?: BidQueryResponseResolvers<ContextType>;
  BidRequest?: BidRequestResolvers<ContextType>;
  BidRequestComment?: BidRequestCommentResolvers<ContextType>;
  BidRequestDetails?: BidRequestDetailsResolvers<ContextType>;
  BidRequestLineItem?: BidRequestLineItemResolvers<ContextType>;
  BidRequestLineItemQueryResponse?: BidRequestLineItemQueryResponseResolvers<ContextType>;
  BidRequestQueryResponse?: BidRequestQueryResponseResolvers<ContextType>;
  BillingCycleTypeUpdate?: BillingCycleTypeUpdateResolvers<ContextType>;
  BillingCycleTypeUpdatePreview?: BillingCycleTypeUpdatePreviewResolvers<ContextType>;
  CheckoutSession?: CheckoutSessionResolvers<ContextType>;
  ClonedFacilityItem?: ClonedFacilityItemResolvers<ContextType>;
  ClonedItem?: ClonedItemResolvers<ContextType>;
  ClonedItemDynamicContainerPayload?: ClonedItemDynamicContainerPayloadResolvers<ContextType>;
  ClonedItemGroup?: ClonedItemGroupResolvers<ContextType>;
  ClonedItemStorageInventoryAreaLocation?: ClonedItemStorageInventoryAreaLocationResolvers<ContextType>;
  ClonedProduct?: ClonedProductResolvers<ContextType>;
  ClonedSupplier?: ClonedSupplierResolvers<ContextType>;
  ClonedSupplierItem?: ClonedSupplierItemResolvers<ContextType>;
  ClosedParent?: ClosedParentResolvers<ContextType>;
  CommerceAccessControls?: CommerceAccessControlsResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyIntegration?: CompanyIntegrationResolvers<ContextType>;
  CompanyKanbanBin?: CompanyKanbanBinResolvers<ContextType>;
  CompanyOperatorLevel?: CompanyOperatorLevelResolvers<ContextType>;
  CompanyQueryResponse?: CompanyQueryResponseResolvers<ContextType>;
  CompanyTeam?: CompanyTeamResolvers<ContextType>;
  CompanyUser?: CompanyUserResolvers<ContextType>;
  CompanyUserQueryResponse?: CompanyUserQueryResponseResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  CreateQuickBooksIntegration?: CreateQuickBooksIntegrationResolvers<ContextType>;
  CustomerPortal?: CustomerPortalResolvers<ContextType>;
  Departure?: DepartureResolvers<ContextType>;
  DepartureComment?: DepartureCommentResolvers<ContextType>;
  DepartureDetails?: DepartureDetailsResolvers<ContextType>;
  DepartureLineItem?: DepartureLineItemResolvers<ContextType>;
  DepartureLineItemQueryResponse?: DepartureLineItemQueryResponseResolvers<ContextType>;
  DeparturePick?: DeparturePickResolvers<ContextType>;
  DeparturePickLineItem?: DeparturePickLineItemResolvers<ContextType>;
  DeparturePickList?: DeparturePickListResolvers<ContextType>;
  DeparturePickListLineItem?: DeparturePickListLineItemResolvers<ContextType>;
  DeparturePickListLineItemQueryResponse?: DeparturePickListLineItemQueryResponseResolvers<ContextType>;
  DeparturePickListQueryResponse?: DeparturePickListQueryResponseResolvers<ContextType>;
  DepartureQueryResponse?: DepartureQueryResponseResolvers<ContextType>;
  Device?: DeviceResolvers<ContextType>;
  DeviceAccess?: DeviceAccessResolvers<ContextType>;
  DeviceInfo?: DeviceInfoResolvers<ContextType>;
  DeviceQueryResponse?: DeviceQueryResponseResolvers<ContextType>;
  Dimensions?: DimensionsResolvers<ContextType>;
  DynamicContainer?: DynamicContainerResolvers<ContextType>;
  DynamicContainerLocation?: DynamicContainerLocationResolvers<ContextType>;
  DynamicContainerLocationRecord?: DynamicContainerLocationRecordResolvers<ContextType>;
  DynamicContainerPayload?: DynamicContainerPayloadResolvers<ContextType>;
  DynamicContainerPayloadRecord?: DynamicContainerPayloadRecordResolvers<ContextType>;
  DynamicContainerQueryResponse?: DynamicContainerQueryResponseResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  EmployeePermissions?: EmployeePermissionsResolvers<ContextType>;
  EmployeeTraining?: EmployeeTrainingResolvers<ContextType>;
  EmployeeTrainingStats?: EmployeeTrainingStatsResolvers<ContextType>;
  EmployeeTrainingVideoStats?: EmployeeTrainingVideoStatsResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventDetails?: EventDetailsResolvers<ContextType>;
  EventsBetweenDates?: EventsBetweenDatesResolvers<ContextType>;
  ExternalProduct?: ExternalProductResolvers<ContextType>;
  ExternalProductQueryResponse?: ExternalProductQueryResponseResolvers<ContextType>;
  Facility?: FacilityResolvers<ContextType>;
  FacilityComponentConfiguration?: FacilityComponentConfigurationResolvers<ContextType>;
  FacilityDetails?: FacilityDetailsResolvers<ContextType>;
  FacilityInventoryArea?: FacilityInventoryAreaResolvers<ContextType>;
  FacilityInventoryAreaDynamicContainerType?: FacilityInventoryAreaDynamicContainerTypeResolvers<ContextType>;
  FacilityItem?: FacilityItemResolvers<ContextType>;
  FacilityItemQueryResponse?: FacilityItemQueryResponseResolvers<ContextType>;
  FacilityQueryResponse?: FacilityQueryResponseResolvers<ContextType>;
  FileStorageRecord?: FileStorageRecordResolvers<ContextType>;
  FinancialAccessControls?: FinancialAccessControlsResolvers<ContextType>;
  HeadlessUser?: HeadlessUserResolvers<ContextType>;
  HeadlessUserQueryResponse?: HeadlessUserQueryResponseResolvers<ContextType>;
  InstalledApp?: InstalledAppResolvers<ContextType>;
  InstructionExecution?: InstructionExecutionResolvers<ContextType>;
  InstructionExecutionDetails?: InstructionExecutionDetailsResolvers<ContextType>;
  InstructionExecutionQueryResponse?: InstructionExecutionQueryResponseResolvers<ContextType>;
  InstructionExecutionStep?: InstructionExecutionStepResolvers<ContextType>;
  InstructionExecutionStepSubmission?: InstructionExecutionStepSubmissionResolvers<ContextType>;
  InstructionSubject?: InstructionSubjectResolvers<ContextType>;
  InstructionSubjectQueryResponse?: InstructionSubjectQueryResponseResolvers<ContextType>;
  InstructionSubjectTrigger?: InstructionSubjectTriggerResolvers<ContextType>;
  InstructionSubjectWithTemplate?: InstructionSubjectWithTemplateResolvers<ContextType>;
  InstructionSubjectWithTemplateQueryResponse?: InstructionSubjectWithTemplateQueryResponseResolvers<ContextType>;
  InstructionTemplate?: InstructionTemplateResolvers<ContextType>;
  InstructionTemplateDetails?: InstructionTemplateDetailsResolvers<ContextType>;
  InstructionTemplateQueryResponse?: InstructionTemplateQueryResponseResolvers<ContextType>;
  InstructionTemplateStep?: InstructionTemplateStepResolvers<ContextType>;
  InventoryAreaLocation?: InventoryAreaLocationResolvers<ContextType>;
  InventoryHistoryRecord?: InventoryHistoryRecordResolvers<ContextType>;
  InventoryLog?: InventoryLogResolvers<ContextType>;
  InventoryLogQueryResponse?: InventoryLogQueryResponseResolvers<ContextType>;
  InventoryRecord?: InventoryRecordResolvers<ContextType>;
  InventoryStrategy?: InventoryStrategyResolvers<ContextType>;
  Invitation?: InvitationResolvers<ContextType>;
  InvitationFulfilledPromise?: InvitationFulfilledPromiseResolvers<ContextType>;
  InvitationQueryResponse?: InvitationQueryResponseResolvers<ContextType>;
  InvitationRejectedPromise?: InvitationRejectedPromiseResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemArrival?: ItemArrivalResolvers<ContextType>;
  ItemDetails?: ItemDetailsResolvers<ContextType>;
  ItemDynamicContainerPayload?: ItemDynamicContainerPayloadResolvers<ContextType>;
  ItemGroup?: ItemGroupResolvers<ContextType>;
  ItemGroupDetails?: ItemGroupDetailsResolvers<ContextType>;
  ItemGroupsWithItems?: ItemGroupsWithItemsResolvers<ContextType>;
  ItemInventory?: ItemInventoryResolvers<ContextType>;
  ItemQueryResponse?: ItemQueryResponseResolvers<ContextType>;
  ItemStorageInventoryAreaLocation?: ItemStorageInventoryAreaLocationResolvers<ContextType>;
  ItemStorageInventoryAreaPpu?: ItemStorageInventoryAreaPpuResolvers<ContextType>;
  ItemStorageInventoryAreaRule?: ItemStorageInventoryAreaRuleResolvers<ContextType>;
  ItemStorageInventoryAreaRuleQueryResponse?: ItemStorageInventoryAreaRuleQueryResponseResolvers<ContextType>;
  ItemUnitsOfMeasure?: ItemUnitsOfMeasureResolvers<ContextType>;
  ItemWithPrimarySupplier?: ItemWithPrimarySupplierResolvers<ContextType>;
  ItemWithPrimarySupplierQueryResponse?: ItemWithPrimarySupplierQueryResponseResolvers<ContextType>;
  Items?: ItemsResolvers<ContextType>;
  Kanban?: KanbanResolvers<ContextType>;
  Kiosk?: KioskResolvers<ContextType>;
  KioskAccess?: KioskAccessResolvers<ContextType>;
  KioskProperty?: KioskPropertyResolvers<ContextType>;
  KioskQueryResponse?: KioskQueryResponseResolvers<ContextType>;
  KitTemplate?: KitTemplateResolvers<ContextType>;
  KitTemplateBomEntry?: KitTemplateBomEntryResolvers<ContextType>;
  KitTemplateDetails?: KitTemplateDetailsResolvers<ContextType>;
  KitTemplateDimensions?: KitTemplateDimensionsResolvers<ContextType>;
  KitTemplatePart?: KitTemplatePartResolvers<ContextType>;
  KitTemplatePartDimensionCalculation?: KitTemplatePartDimensionCalculationResolvers<ContextType>;
  KitTemplatePartDimensions?: KitTemplatePartDimensionsResolvers<ContextType>;
  KitTemplatePartOption?: KitTemplatePartOptionResolvers<ContextType>;
  KitTemplatePartOptionChildDetails?: KitTemplatePartOptionChildDetailsResolvers<ContextType>;
  KitTemplateQueryResponse?: KitTemplateQueryResponseResolvers<ContextType>;
  KitTemplateTree?: KitTemplateTreeResolvers<ContextType>;
  Ledger?: LedgerResolvers<ContextType>;
  LogOperator?: LogOperatorResolvers<ContextType>;
  MobileAccessControls?: MobileAccessControlsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  OfficialAppInstallation?: OfficialAppInstallationResolvers<ContextType>;
  Operator?: OperatorResolvers<ContextType>;
  OperatorAccess?: OperatorAccessResolvers<ContextType>;
  PartialInventoryAreaLocation?: PartialInventoryAreaLocationResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PfepAccessControls?: PfepAccessControlsResolvers<ContextType>;
  PresignedPost?: PresignedPostResolvers<ContextType>;
  Prices?: PricesResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDetails?: ProductDetailsResolvers<ContextType>;
  ProductQueryResponse?: ProductQueryResponseResolvers<ContextType>;
  ProductionAccessControls?: ProductionAccessControlsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuickBooksAccount?: QuickBooksAccountResolvers<ContextType>;
  QuickBooksAccounts?: QuickBooksAccountsResolvers<ContextType>;
  QuickBooksAuthUrl?: QuickBooksAuthUrlResolvers<ContextType>;
  QuickBooksIntegrationAccounts?: QuickBooksIntegrationAccountsResolvers<ContextType>;
  QuickBooksItem?: QuickBooksItemResolvers<ContextType>;
  QuickBooksItemSyncList?: QuickBooksItemSyncListResolvers<ContextType>;
  QuickBooksRef?: QuickBooksRefResolvers<ContextType>;
  QuickBooksSupplier?: QuickBooksSupplierResolvers<ContextType>;
  QuickBooksSupplierSyncList?: QuickBooksSupplierSyncListResolvers<ContextType>;
  QuickBooksSync?: QuickBooksSyncResolvers<ContextType>;
  QuickBooksSyncList?: QuickBooksSyncListResolvers<ContextType>;
  QuickBooksToken?: QuickBooksTokenResolvers<ContextType>;
  QuickBooksWebAddress?: QuickBooksWebAddressResolvers<ContextType>;
  ResultListByStatus?: ResultListByStatusResolvers<ContextType>;
  RevokeQuickBooksIntegration?: RevokeQuickBooksIntegrationResolvers<ContextType>;
  SafeOperator?: SafeOperatorResolvers<ContextType>;
  SafeOperatorQueryResponse?: SafeOperatorQueryResponseResolvers<ContextType>;
  SafeShopifyIntegration?: SafeShopifyIntegrationResolvers<ContextType>;
  SafeShopifyIntegrationQueryResponse?: SafeShopifyIntegrationQueryResponseResolvers<ContextType>;
  SeatStatus?: SeatStatusResolvers<ContextType>;
  ShopifyProduct?: ShopifyProductResolvers<ContextType>;
  ShopifyProductImage?: ShopifyProductImageResolvers<ContextType>;
  ShopifyProductOption?: ShopifyProductOptionResolvers<ContextType>;
  ShopifyProductVariant?: ShopifyProductVariantResolvers<ContextType>;
  StorageInventory?: StorageInventoryResolvers<ContextType>;
  StorageInventoryArea?: StorageInventoryAreaResolvers<ContextType>;
  StorageInventoryAreaLocation?: StorageInventoryAreaLocationResolvers<ContextType>;
  StorageInventoryAreaLocationPayload?: StorageInventoryAreaLocationPayloadResolvers<ContextType>;
  StorageInventoryAreaLocationQueryResponse?: StorageInventoryAreaLocationQueryResponseResolvers<ContextType>;
  StorageInventoryAreaRule?: StorageInventoryAreaRuleResolvers<ContextType>;
  StorageInventoryPickRecord?: StorageInventoryPickRecordResolvers<ContextType>;
  StorageLog?: StorageLogResolvers<ContextType>;
  SubscriptionCancellation?: SubscriptionCancellationResolvers<ContextType>;
  SubscriptionResumption?: SubscriptionResumptionResolvers<ContextType>;
  SubscriptionUpdate?: SubscriptionUpdateResolvers<ContextType>;
  SubscriptionUpdatePreview?: SubscriptionUpdatePreviewResolvers<ContextType>;
  Supplier?: SupplierResolvers<ContextType>;
  SupplierDetails?: SupplierDetailsResolvers<ContextType>;
  SupplierItem?: SupplierItemResolvers<ContextType>;
  SupplierItemDeliveryContainer?: SupplierItemDeliveryContainerResolvers<ContextType>;
  SupplierItemPPU?: SupplierItemPpuResolvers<ContextType>;
  SupplierItemPPUTier?: SupplierItemPpuTierResolvers<ContextType>;
  SupplierItemQueryResponse?: SupplierItemQueryResponseResolvers<ContextType>;
  SupplierItemUnitsOfMeasure?: SupplierItemUnitsOfMeasureResolvers<ContextType>;
  SupplierItemUnitsOfMeasureCustom?: SupplierItemUnitsOfMeasureCustomResolvers<ContextType>;
  SupplierQueryResponse?: SupplierQueryResponseResolvers<ContextType>;
  Suppliers?: SuppliersResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamDetails?: TeamDetailsResolvers<ContextType>;
  TeamQueryResponse?: TeamQueryResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Workbench?: WorkbenchResolvers<ContextType>;
  WorkbenchAccessory?: WorkbenchAccessoryResolvers<ContextType>;
  WorkbenchConfiguration?: WorkbenchConfigurationResolvers<ContextType>;
  WorkbenchDimensions?: WorkbenchDimensionsResolvers<ContextType>;
  WorkbenchFlowrackLane?: WorkbenchFlowrackLaneResolvers<ContextType>;
  WorkbenchHardware?: WorkbenchHardwareResolvers<ContextType>;
  WorkbenchHistoryLog?: WorkbenchHistoryLogResolvers<ContextType>;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    BidItem: ["BidItemGroupRecord", "BidItemRecord"],
    DynamicContainerLocationRecord: [
      "InventoryAreaLocation",
      "PartialInventoryAreaLocation",
    ],
    DynamicContainerPayloadRecord: ["ItemDynamicContainerPayload"],
    ResultListByStatus: [
      "InvitationFulfilledPromise",
      "InvitationRejectedPromise",
    ],
    StorageInventoryPickRecord: [
      "ItemDynamicContainerPayload",
      "ItemStorageInventoryAreaLocation",
    ],
  },
};
export default result;
