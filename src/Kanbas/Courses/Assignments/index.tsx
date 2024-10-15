import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckCircle, MdOutlineDocumentScanner } from "react-icons/md";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments-container" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "50%" }}>
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input id="wd-search-assignment" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-primary me-2">
            <FaPlus /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      <div id="wd-assignments-title" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <h3 id="wd-assignments-title" className="mb-0">
              ASSIGNMENTS
            </h3>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-muted me-3 border rounded-pill border-light-subtle">40% of Total</span>
            <button className="btn btn-outline-secondary">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-3"
            style={{ borderLeft: "4px solid green" }}
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineDocumentScanner className="me-2 fs-2" />
              <div>
                <a
                  className="wd-assignment-link h5 mb-1"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <p className="text-muted mb-0">Multiple Modules | 100 pts</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <MdCheckCircle className="text-success fs-4 me-3" />
              <BsThreeDotsVertical className="fs-4" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
