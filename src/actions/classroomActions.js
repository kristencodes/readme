import types from './actionTypes';
import { getCourseById } from '../services/courseService';

export function updateClassroom(classroom) {
    return {
        type: types.UPDATE_CLASSROOM,
        classroom,
    };
}

export function getCourse(id) {
    return (dispatch) => {
        return getCourseById(id)
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateClassroom(course));
            })
            .catch((error) => {
                throw (error);
            });
    };
}
