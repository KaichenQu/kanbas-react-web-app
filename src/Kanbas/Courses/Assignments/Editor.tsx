import { SlCalender } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  updateAssignment,
  switchCreationStatus,
  deleteAssignment,
} from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments, new_assignment_created } = useSelector(
    (state: any) => state.assignmentsReducer
  );
  const assignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(assignment && assignment.title);
  const [description, setDescription] = useState(
    assignment && assignment.description
  );
  const [points, setPoints] = useState(assignment && assignment.points);
  const [due, setDue] = useState(assignment && assignment.due);
  const [availableFrom, setAvailableFrom] = useState(
    assignment && assignment.availableFrom
  );
  const [until, setUntil] = useState(assignment && assignment.until);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const cancelByStatus = () => {
    if (new_assignment_created === true) {
      dispatch(deleteAssignment(aid));
      dispatch(switchCreationStatus());
    }
  };

  const saveByStatus = () => {
    const currentAssignment = {
      _id: aid,
      title: title,
      course: cid,
      description: description,
      points: points,
      due: due,
      availableFrom: availableFrom,
      until: until,
    };

    if (new_assignment_created === true) {
      dispatch(switchCreationStatus());
    }
    dispatch(updateAssignment(currentAssignment));
  };

  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="form-group row ms-5 mb-4">
          {currentUser.role === "FACULTY" ? (
            <>
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Assignment Name </strong>
              </label>
              <input
                id="wd-name"
                className="form-control ms-2 mt-3 w-75"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </>
          ) : (
            <div>
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Assignment Name</strong>
              </label>
              <p>{title}</p>
              <hr />
            </div>
          )}
        </div>

        <div className="form-group row ms-5 mb-4">
          {currentUser.role === "FACULTY" ? (
            <>
              <textarea
                id="wd-description"
                className="form-control ms-2 w-75"
                aria-label="With textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </>
          ) : (
            <div>
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Description</strong>
              </label>
              <p>{description}</p>
              <hr />
            </div>
          )}
        </div>

        <div className="form-group row ms-5 mb-4">
          {currentUser.role === "FACULTY" ? (
            <>
              <label htmlFor="wd-points" className="col-sm-2 col-form-label">
                Points
              </label>
              <div className="col-sm-10">
                <input
                  id="wd-points"
                  className="form-control w-75"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                />
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Points</strong>
                <span className="ms-4">{points}</span>{" "}
              </label>
              <hr />
            </div>
          )}
        </div>

        <div className="form-group row ms-5 mb-4">
          {currentUser.role === "FACULTY" ? (
            <>
              <label className="col-sm-2 col-form-label">Assign</label>
              <div className="col-sm-10 form-control ms-2 p-3 w-75">
                <div className="form-group ms-1">
                  <label htmlFor="wd-due-date" className="col-form-label">
                    <strong>Due</strong>
                  </label>
                  <div className="input-group mt-1">
                    <input
                      type="input"
                      id="wd-due-date"
                      className="form-control"
                      value={due}
                      onChange={(e) => setDue(e.target.value)}
                    />

                    <span className="input-group-text">
                      <SlCalender className="fs-4" />
                    </span>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label
                        htmlFor="wd-available-from"
                        className="col-form-label mt-3"
                      >
                        <strong>Available from</strong>
                      </label>
                      <div className="input-group mt-1">
                        <input
                          type="input"
                          id="wd-available-from"
                          className="form-control"
                          value={availableFrom}
                          onChange={(e) => setAvailableFrom(e.target.value)}
                        />
                        <span className="input-group-text">
                          <SlCalender className="fs-4" />
                        </span>
                      </div>
                    </div>

                    <div className="col-6">
                      <label
                        htmlFor="wd-available-until"
                        className="col-form-label mt-3"
                      >
                        <strong>Until</strong>
                      </label>
                      <div className="input-group mt-1">
                        <input
                          type="input"
                          id="wd-available-until"
                          className="form-control"
                          value={until}
                          onChange={(e) => setUntil(e.target.value)}
                        />
                        <span className="input-group-text">
                          <SlCalender className="fs-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr />
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Available From</strong>
                <span className="ms-4">{availableFrom}</span>{" "}
              </label>
              <br />
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Due</strong>
                <span className="ms-4">{due}</span>{" "}
              </label>
              <br />
              <label htmlFor="wd-name" className="col-form-label">
                <strong>Until</strong>
                <span className="ms-4">{until}</span>{" "}
              </label>
              <hr />
            </div>
          )}
        </div>
      </form>

      <div className="float-end">
        {currentUser.role === "FACULTY" ? (
          <div>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-light border me-2"
              onClick={cancelByStatus}
            >
              Cancel
            </Link>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-danger border"
              onClick={saveByStatus}
            >
              Save
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-light border me-2"
            >
              Go Back
            </Link>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-danger border"
            >
              Attempt
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
