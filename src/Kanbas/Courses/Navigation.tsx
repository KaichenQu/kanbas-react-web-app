import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const location = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;
        return (
          <Link
            key={link}
            id={`wd-course-${link.toLowerCase()}-link`}
            to={path}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
