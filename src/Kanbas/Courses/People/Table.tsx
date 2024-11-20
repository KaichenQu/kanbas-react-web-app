import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as client from "../Enrollments/client";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { setEnrollments } from "../Enrollments/reducer";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  const dispatch = useDispatch();
  const { enrollments: reduxEnrollments } = useSelector(
    (state: any) => state.enrollmentReducer
  );

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const fetchedEnrollments = await client.findEnrollmentsForCourse(
          cid as string
        );
        dispatch(setEnrollments(fetchedEnrollments));
      } catch (error) {
        console.error("Failed to fetch enrollments:", error);
      }
    };
    fetchEnrollments();
  }, [cid, dispatch]);

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>

        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
