import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Web Development",
    description:
      "Learn the basics of web development including HTML, CSS, and JavaScript",
    course: "CS5610",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Assignment Properties</h4>
      <input
        className="form-control w-75 mb-2"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <input
        type="number"
        className="form-control w-75 mb-2"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <div className="mb-2">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label>Completed</label>
      </div>
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed Status
      </a>
      <hr />

      <h4>Module Properties</h4>
      <input
        className="form-control w-75 mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-primary me-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>

      <textarea
        className="form-control w-75 mb-2"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        className="btn btn-primary me-2"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr />
    </div>
  );
}
