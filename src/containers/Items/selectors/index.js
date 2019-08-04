import { createSelector } from 'reselect';

const getDataByKind = ({ data }) => data.byKind;
const getCurrentKind = ({ currentKind }) => currentKind;

export const currentKindDataSelector = createSelector(
  [
    getDataByKind,
    getCurrentKind,
  ],
  (dataByKind, currentKind) => {
    const currentKindData = dataByKind[currentKind];
    return currentKindData !== undefined ? Object.values(currentKindData) : [];
  }
);
