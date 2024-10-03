export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name">
          <strong>Assignment Name</strong>
        </label>

        <input
          id="wd-name"
          className="form-control mt-2"
          defaultValue="A1 - ENV + HTML"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description">
          <strong>Description</strong>
        </label>
        <textarea
          id="wd-description"
          className="form-control mt-2"
          cols={50}
          rows={5}
        >
          The assignment is available online Submit a link to the landing page
          of...
        </textarea>
      </div>

      <table className="table">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} className="form-control" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" className="form-select">
              <option value="groupAssignment">ASSIGNMENT</option>
              <option value="groupQuizzes">QUIZZES</option>
              <option value="groupExam">EXAM</option>
              <option value="groupProject">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-select">
              <option value="displayPercent">Percentage</option>
              <option value="displayLetter">Letter</option>
              <option value="displayGPA">GPA</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" className="form-select">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
            </select>
            <div className="mt-3">
              <label>
                <strong>Online Entry Options</strong>
              </label>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Upload
                </label>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input
              id="wd-assign-to"
              value="Everyone"
              className="form-control mt-1"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Due <br />
            <input
              type="date"
              id="wd-due-date"
              className="form-control mt-1"
              name="wd-due-date"
              defaultValue="2024-05-13"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div className="d-flex">
              <div className="me-2">
                <label htmlFor="wd-available-from">
                  <strong>Available From</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control mt-1"
                  defaultValue="2024-05-06"
                />
              </div>
              <div>
                <label htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control mt-1"
                  defaultValue="2024-05-28"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr style={{ width: "100%" }} />

      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger me-2">Save</button>
      </div>
    </div>
  );
}
