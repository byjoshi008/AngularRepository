import { IAppState } from './state.model';
import {
  FILTER_COURSES,
  REQUEST_COURSES,
  REQUEST_COURSES_SUCCESS,
  GET_COURSE
} from '../courses/course.action';

const courses = [];
export const initialState: IAppState = {
  courses,
  filteredCourses: courses,
  selectedCourse: null
};

function filterCourses(state, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(
      c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) >= 0
    )
  });
}

function storeCourses(state, action): IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses,
    selectedCourse: null
  });
}

function getCourse(state: IAppState, action): IAppState {
  let selectedCourse = null;
  if (action.id) {
    if (isNaN(action.id)) {
      selectedCourse = { name: '', topic: 'Web' };
    } else {
      selectedCourse = state.courses.find(c => c.id === action.id);
    }
  }

  return Object.assign({}, state, {
    selectedCourse
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    case REQUEST_COURSES_SUCCESS:
      return storeCourses(state, action);
    case GET_COURSE:
      return getCourse(state, action);
    default:
      return state;
  }
}
