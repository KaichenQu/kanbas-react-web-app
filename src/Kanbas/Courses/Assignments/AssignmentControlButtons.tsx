import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentControlButtons({
  assignmentID,
}: {
  assignmentID: string;
}) {
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);

  const deleteCurrentAssignment = () => {
    setShowDialog(true);
  };

  const confirmDelete = () => {
    dispatch(deleteAssignment(assignmentID));
    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={deleteCurrentAssignment}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      {showDialog && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>Delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
