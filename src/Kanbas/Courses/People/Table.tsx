import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
import PeopleDetails from "./Details";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });

  const addUser = async () => {
    if (!cid || currentUser.role !== "FACULTY") return;
    try {
      await client.addUserToCourse(cid, newUser);
      setNewUser({ firstName: "", lastName: "", email: "", role: "STUDENT" });
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const removeUser = async (enrollmentId: string) => {
    if (!cid || currentUser.role !== "FACULTY") return;
    try {
      await client.removeUserFromCourse(cid, enrollmentId);
    } catch (error) {
      console.error("Failed to remove user:", error);
    }
  };

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      {cid && currentUser.role === "FACULTY" && (
        <div className="mb-3">
          <h3>Add New User</h3>
          <input
            placeholder="First Name"
            className="form-control mb-2"
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />
          <input
            placeholder="Last Name"
            className="form-control mb-2"
            value={newUser.lastName}
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />
          <input
            placeholder="Email"
            className="form-control mb-2"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <select
            className="form-control mb-2"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="TA">Teaching Assistant</option>
          </select>
          <button className="btn btn-success" onClick={addUser}>
            Add User
          </button>
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Last Activity</th>
            {currentUser.role === "FACULTY" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kanbas/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              {currentUser.role === "FACULTY" && (
                <td className="wd-actions">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeUser(user.enrollmentId)}
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
