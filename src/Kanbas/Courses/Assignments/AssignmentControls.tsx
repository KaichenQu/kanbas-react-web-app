import { FaSearch, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, switchCreationStatus } from "./reducer";
import { useNavigate } from "react-router-dom";

export default function AssignmentControls() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewAssignment = () => {
    const newAssignment = {
      _id: new Date().getTime().toString(),
      title: "New Assignment",
      course: cid,
      description: "New Description",
      points: 100,
      due: "2099-12-31",
      availableFrom: "2000-01-01",
      until: "2099-12-31",
    };

    navigate(`/Kanbas/Courses/${cid}/Assignments/${newAssignment._id}`);
    dispatch(addAssignment(newAssignment));
  };

  return (
    <div id="wd-assignments-controls" className="text-nowrap me-2">
      <button
        id="wd-add-module-btn"
        onClick={addNewAssignment}
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-secondary me-2 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <div
        className="input-group pt-2 d-flex align-items-center"
        style={{ width: "300px" }}
      >
        <span className="input-group-text">
          <FaSearch className="fs-4" />
        </span>
        <input
          id="wd-search-assignment"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
