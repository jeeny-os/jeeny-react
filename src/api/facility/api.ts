import { useLazyQuery, useMutation } from "@apollo/client";
import { FacilityApi } from "./apiInterface";
import {
  CREATE_FACILITY,
  GET_FACILITY,
  GET_FACILITY_DETAILS,
  GET_FACILITIES,
  SAVE_FACILITY,
} from "./gql";

export const useFacilityApi = (custom?: FacilityApi) => {
  const [getFacility, { data: getFacilityData, loading: getFacilityLoading }] =
    useLazyQuery(
      custom?.getFacility?.query || GET_FACILITY,
      custom?.getFacility?.options
    );

  const [
    getFacilityDetails,
    { data: getFacilityDetailsData, loading: getFacilityDetailsLoading },
  ] = useLazyQuery(
    custom?.getFacilityDetails?.query || GET_FACILITY_DETAILS,
    custom?.getFacilityDetails?.options
  );

  const [
    getFacilities,
    {
      data: getFacilitiesData,
      loading: getFacilitiesLoading,
      fetchMore: getFacilitiesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getFacilities?.query || GET_FACILITIES,
    custom?.getFacilities?.options
  );

  const [
    createFacility,
    { data: createFacilityData, loading: createFacilityLoading },
  ] = useMutation(
    custom?.createFacility?.mutation || CREATE_FACILITY,
    custom?.createFacility?.options
  );

  const [
    saveFacility,
    { data: saveFacilityData, loading: saveFacilityLoading },
  ] = useMutation(
    custom?.saveFacility?.mutation || SAVE_FACILITY,
    custom?.saveFacility?.options
  );

  return {
    getFacility: {
      query: getFacility,
      data: getFacilityData,
      loading: getFacilityLoading,
    },
    getFacilityDetails: {
      query: getFacilityDetails,
      data: getFacilityDetailsData,
      loading: getFacilityDetailsLoading,
    },
    getFacilities: {
      query: getFacilities,
      data: getFacilitiesData,
      fetchMore: getFacilitiesFetchMore,
      loading: getFacilitiesLoading,
    },
    createFacility: {
      mutation: createFacility,
      data: createFacilityData,
      loading: createFacilityLoading,
    },
    saveFacility: {
      mutation: saveFacility,
      data: saveFacilityData,
      loading: saveFacilityLoading,
    },
  };
};
