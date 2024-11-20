import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const findUsersInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/users`
  );
  return response.data;
};

export const addUserToCourse = async (courseId: string, user: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/courses/${courseId}/users`,
    user
  );
  return response.data;
};

export const removeUserFromCourse = async (
  courseId: string,
  enrollmentId: string
) => {
  const response = await axiosWithCredentials.delete(
    `${REMOTE_SERVER}/api/courses/${courseId}/users/${enrollmentId}`
  );
  return response.data;
};

export const updateUserInCourse = async (
  courseId: string,
  enrollmentId: string,
  updates: any
) => {
  const response = await axiosWithCredentials.put(
    `${REMOTE_SERVER}/api/courses/${courseId}/users/${enrollmentId}`,
    updates
  );
  return response.data;
};
