export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" style={{ width: "500px", height: "200px" }}>
        The assignment is available online Submit a link to the landing page
        of...
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
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
            <select id="wd-display-grade-as">
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
            <select id="wd-submission-type">
              <option value="submissionOnline">Online</option>
              <option value="submissionIndividual">Individual</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <p>Online entry option</p>
            <input
              type="checkbox"
              id="wd-text-entry"
              name="wd-text-entry"
              value="textEntry"
            />
            <label htmlFor="wd-text-entry"> Text Entry</label> <br />
            <input
              type="checkbox"
              id="wd-website-url"
              name="wd-website-url"
              value="websiteUrl"
            />
            <label htmlFor="wd-website-url"> Website URL</label> <br />
            <input
              type="checkbox"
              id="wd-media-recordings"
              name="wd-media-recordings"
              value="mediaRecordings"
            />
            <label htmlFor="wd-media-recordings"> Media Recordings</label>
            <br />
            <input
              type="checkbox"
              id="wd-student-annotation"
              name="wd-student-annotation"
              value="studentAnnotation"
            />
            <label htmlFor="wd-student-annotation"> Student Annotation</label>
            <br />
            <input
              type="checkbox"
              id="wd-file-upload"
              name="wd-file-upload"
              value="fileUpload"
            />
            <label htmlFor="wd-file-upload"> File Upload</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Due <br />
            <input
              type="date"
              id="wd-due-date"
              name="wd-due-date"
              defaultValue="2024-05-13"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                Available from <br />
                <input
                  type="date"
                  id="wd-available-from"
                  name="wd-available-from"
                  defaultValue="2024-05-06"
                />
              </div>
              <div>
                Until <br />
                <input
                  type="date"
                  id="wd-available-until"
                  name="wd-available-until"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr style={{ width: "100%" }} />

      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <button style={{ marginRight: "10px" }}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
