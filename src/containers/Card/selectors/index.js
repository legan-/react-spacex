import { createSelector } from 'reselect';

const getDataByKind = ({ data }) => data.byKind;
const getCurrentKind = ({ currentKind }) => currentKind;
const getCurrentId = ({ currentId }) => currentId;

export const currentIdDataSelector = createSelector(
  [
    getDataByKind,
    getCurrentKind,
    getCurrentId,
  ],
  (dataByKind, currentKind, currentId) => {
    const currentKindData = dataByKind[currentKind];
    const currentIdData = currentKindData === undefined ? null : currentKindData[currentId];
    return currentIdData || {};
  }
);
