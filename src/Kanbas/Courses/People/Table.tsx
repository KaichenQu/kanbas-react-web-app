import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { useSelector } from "react-redux";

export default function PeopleTable() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });

  const fetchUsers = async () => {
    try {
      const users = await client.findUsersInCourse(cid as string);
      setUsers(users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const addUser = async () => {
    if (currentUser.role !== "FACULTY") return;
    try {
      await client.addUserToCourse(cid as string, newUser);
      fetchUsers();
      setNewUser({ firstName: "", lastName: "", email: "", role: "STUDENT" });
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const removeUser = async (enrollmentId: string) => {
    if (currentUser.role !== "FACULTY") return;
    try {
      await client.removeUserFromCourse(cid as string, enrollmentId);
      fetchUsers();
    } catch (error) {
      console.error("Failed to remove user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people-table">
      {currentUser.role === "FACULTY" && (
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
          {users.map((user: any) => (
            <tr key={user.enrollmentId}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
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
