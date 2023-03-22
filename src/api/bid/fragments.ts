import { gql } from "@apollo/client";
import {
  CLONED_ITEM_FRAGMENT,
  CLONED_SUPPLIER_FRAGMENT,
} from "../arrival/fragments";
import { CLONED_ITEM_GROUP_FRAGMENT } from "../itemGroup/fragments";

export const BID_ITEM_RECORD_FRAGMENT = gql`
  fragment BidItemRecord on BidItemRecord {
    item {
      ...ClonedItem
    }
    type
  }
  ${CLONED_ITEM_FRAGMENT}
`;

export const BID_ITEM_GROUP_RECORD_FRAGMENT = gql`
  fragment BidItemGroupRecord on BidItemGroupRecord {
    itemGroup {
      ...ClonedItemGroup
    }
    type
  }
  ${CLONED_ITEM_GROUP_FRAGMENT}
`;

export const BID_ITEM_FRAGMENT = gql`
  fragment BidItem on BidItem {
    __typename
    ... on BidItemRecord {
      ...BidItemRecord
    }
    ... on BidItemGroupRecord {
      ...BidItemGroupRecord
    }
  }
  ${BID_ITEM_RECORD_FRAGMENT}
  ${BID_ITEM_GROUP_RECORD_FRAGMENT}
`;

export const BID_FRAGMENT = gql`
  fragment Bid on Bid {
    id
    companyId
    bidRequestId
    bidRequestNumber
    isBidRequestClosed
    isBidRejected
    supplierId
    requestSentDate
    firstQuoteReceivedDate
    finalQuoteReceivedDate
    estimatedDeliveryDate
    supplier {
      ...ClonedSupplier
    }
    internalNote
    createdBy
    createdOn
    updatedOn
  }
  ${CLONED_SUPPLIER_FRAGMENT}
`;

export const BID_LINE_ITEM_FRAGMENT = gql`
  fragment BidLineItem on BidLineItem {
    companyId
    bidId
    bidRequestId
    supplierId
    bidRequestNumber
    isBidRequestClosed
    isBidRequestLineItemClosed
    isBidLineItemRejected
    isBidRejected
    itemId
    item {
      ... on BidItemRecord {
        ...BidItemRecord
      }
      ... on BidItemGroupRecord {
        ...BidItemGroupRecord
      }
    }
    unitOfMeasure
    type
    internalNote
    quantity
    ppu
    validUntil
    bidDate
    createdBy
    createdOn
    updatedOn
  }
  ${BID_ITEM_RECORD_FRAGMENT}
  ${BID_ITEM_GROUP_RECORD_FRAGMENT}
`;

export const BID_REQUEST_LINE_ITEM_FRAGMENT = gql`
  fragment BidRequestLineItem on BidRequestLineItem {
    companyId
    bidRequestId
    bidRequestNumber
    isBidRequestLineItemClosed
    isBidRequestClosed
    itemId
    item {
      __typename
      ... on BidItemRecord {
        ...BidItemRecord
      }
      ... on BidItemGroupRecord {
        ...BidItemGroupRecord
      }
    }
    unitOfMeasure
    arrivalId
    winnerSupplierId
    type
    internalNote
    externalNote
    quantity
    targetPpu
    createdBy
    createdOn
    updatedOn
  }
  ${BID_ITEM_RECORD_FRAGMENT}
  ${BID_ITEM_GROUP_RECORD_FRAGMENT}
`;

export const BID_REQUEST_COMMENT_FRAGMENT = gql`
  fragment BidRequestComment on BidRequestComment {
    type
    comment
    bidId
    file
    date
    createdBy
    createdOn
  }
`;

export const BID_REQUEST_FRAGMENT = gql`
  fragment BidRequest on BidRequest {
    id
    companyId
    externalNote
    internalNote
    facilityId
    bidRequestNumber
    isBidRequestClosed
    comments {
      ...BidRequestComment
    }
    dueDate
    createdBy
    createdOn
    updatedOn
  }
  ${BID_REQUEST_COMMENT_FRAGMENT}
`;

export const BID_REQUEST_DETAILS_FRAGMENT = gql`
  fragment BidRequestDetails on BidRequestDetails {
    bidRequest {
      ...BidRequest
    }
    bidRequestLineItems {
      ...BidRequestLineItem
    }
    bids {
      ...Bid
    }
    bidLineItems {
      ...BidLineItem
    }
  }
  ${BID_FRAGMENT}
  ${BID_LINE_ITEM_FRAGMENT}
  ${BID_REQUEST_FRAGMENT}
  ${BID_REQUEST_LINE_ITEM_FRAGMENT}
`;
