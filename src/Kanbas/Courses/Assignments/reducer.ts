import { createSlice } from "@reduxjs/toolkit";
import * as client from "./client";

interface Assignment {
  _id: string;
  // add other assignment properties here
}

const initialState = {
  assignments: [] as Assignment[],
  new_assignment_created: false,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
      state.new_assignment_created = true;
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== action.payload
      );
    },
    switchCreationStatus: (state) => {
      state.new_assignment_created = !state.new_assignment_created;
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment,
  switchCreationStatus,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
