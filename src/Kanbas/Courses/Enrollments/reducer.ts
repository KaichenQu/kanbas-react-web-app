import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
  role: string;
}

const initialState = {
  enrollments: [] as Enrollment[],
  loading: false,
  error: null,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
      state.loading = false;
      state.error = null;
    },
    addEnrollment: (state, action) => {
      state.enrollments.push(action.payload);
    },
    removeEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setEnrollments,
  addEnrollment,
  removeEnrollment,
  setLoading,
  setError,
} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
