import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from '../../actions/filters';

test('should generate set start date action object', () => {
  expect(setStartDate(moment(0))).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  expect(setEndDate(moment(0))).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'some test value';
  expect(setTextFilter(text)).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default value', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate action object for sort by amount filter', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
