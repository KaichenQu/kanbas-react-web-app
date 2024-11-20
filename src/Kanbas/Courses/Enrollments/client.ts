import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/enrollments`
  );
  return response.data;
};

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/courses/${courseId}/enrollments`
  );
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${REMOTE_SERVER}/api/courses/${courseId}/enrollments`
  );
  return response.data;
};

export const checkEnrollmentStatus = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/enrollments/check`
  );
  return response.data;
};
