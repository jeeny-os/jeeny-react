import { useLazyQuery, useMutation } from "@apollo/client";
import { OperatorApi } from "./apiInterface";
import {
  GET_OPERATOR,
  GET_OPERATORS,
  GET_OPERATORS_BY_TEAM_ID,
  CREATE_OPERATOR,
  SAVE_OPERATOR,
  GET_OPERATORS_BY_DEVICE,
} from "./gql";

export const useOperatorApi = (custom?: OperatorApi) => {
  const [getOperator, { data: getOperatorData, loading: getOperatorLoading }] =
    useLazyQuery(
      custom?.getOperator?.query || GET_OPERATOR,
      custom?.getOperator?.options
    );

  const [
    getOperators,
    { data: getOperatorsData, loading: getOperatorsLoading },
  ] = useLazyQuery(
    custom?.getOperators?.query || GET_OPERATORS,
    custom?.getOperators?.options
  );

  const [
    getOperatorsByTeamId,
    { data: getOperatorsByTeamIdData, loading: getOperatorsByTeamIdLoading },
  ] = useLazyQuery(
    custom?.getOperatorsByTeamId?.query || GET_OPERATORS_BY_TEAM_ID,
    custom?.getOperatorsByTeamId?.options
  );

  const [
    getOperatorsByDevice,
    { data: getOperatorsByDeviceData, loading: getOperatorsByDeviceLoading },
  ] = useLazyQuery(
    custom?.getOperatorsByDevice?.query || GET_OPERATORS_BY_DEVICE,
    custom?.getOperatorsByDevice?.options
  );

  const [
    createOperator,
    { data: createOperatorData, loading: createOperatorLoading },
  ] = useMutation(
    custom?.createOperator?.mutation || CREATE_OPERATOR,
    custom?.createOperator?.options
  );

  const [
    saveOperator,
    { data: saveOperatorData, loading: saveOperatorLoading },
  ] = useMutation(
    custom?.saveOperator?.mutation || SAVE_OPERATOR,
    custom?.saveOperator?.options
  );

  return {
    getOperator: {
      query: getOperator,
      data: getOperatorData,
      loading: getOperatorLoading,
    },
    getOperators: {
      query: getOperators,
      data: getOperatorsData,
      loading: getOperatorsLoading,
    },
    getOperatorsByDevice: {
      query: getOperatorsByDevice,
      data: getOperatorsByDeviceData,
      loading: getOperatorsByDeviceLoading,
    },
    getOperatorsByTeamId: {
      query: getOperatorsByTeamId,
      data: getOperatorsByTeamIdData,
      loading: getOperatorsByTeamIdLoading,
    },
    create: {
      mutation: createOperator,
      data: createOperatorData,
      loading: createOperatorLoading,
    },
    save: {
      mutation: saveOperator,
      data: saveOperatorData,
      loading: saveOperatorLoading,
    },
  };
};
