import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
  showAllCourses: false,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      if (
        !state.enrollments.some(
          (enrollment) =>
            enrollment.user === userId && enrollment.course === courseId
        )
      ) {
        state.enrollments = [...state.enrollments, newEnrollment];
      }
    },
    unenroll: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    toggleAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { enroll, unenroll, toggleAllCourses } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
