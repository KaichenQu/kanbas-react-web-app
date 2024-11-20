import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/courses/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/assignments`
  );
  return response.data;
};

export const updateAssignment = async (aid: string, assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${aid}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${aid}`
  );
  return response.data;
};
