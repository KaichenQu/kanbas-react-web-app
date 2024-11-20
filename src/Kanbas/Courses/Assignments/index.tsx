import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments } from "./reducer";
import * as client from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  return (
    <div id="wd-assignments" className="container mt-4">
      {currentUser.role === "FACULTY" && (
        <div>
          <AssignmentControls />
        </div>
      )}
      <ul id="wd-assignments" className="list-group rounded-0 ms-4 me-3 mt-4">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="fs-3 me-2" />
            <strong>ASSIGNMENTS</strong>
          </div>

          {currentUser.role === "FACULTY" && (
            <div className="d-flex align-items-center">
              <AssignmentsControlButtons />
            </div>
          )}
        </div>

        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-assignments list-group-item ps-1 fs-5 border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-2" />
                  <MdOutlineDocumentScanner className="fs-2" />
                  <div className="mt-2 mb-2 flex-grow-1">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="text-black text-decoration-none"
                    >
                      <ul>
                        <strong>{assignment.title}</strong>
                      </ul>
                    </Link>
                    <ul className="wd-assignment-description">
                      <span className="text-danger">Multiple Modules </span>|{" "}
                      <strong> Not Available until</strong>{" "}
                      {assignment.availableFrom} at 12:00am |{" "}
                    </ul>
                    <ul className="wd-assignment-description">
                      {" "}
                      <strong>Due </strong> {assignment.due} at 11:59pm |&nbsp;
                      {assignment.points} pts{" "}
                    </ul>
                  </div>
                  {currentUser.role === "FACULTY" && (
                    <>
                      <AssignmentControlButtons assignmentID={assignment._id} />
                    </>
                  )}
                </div>
              </li>
            </ul>
          ))}
      </ul>
    </div>
  );
}
