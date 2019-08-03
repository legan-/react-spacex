import { createSelector } from 'reselect';

const getDataByKind = ({ data }) => data.byKind;

export const kindSelector = createSelector(
  [
    getDataByKind,
  ],
  dataByKind => Object.keys(dataByKind)
);
