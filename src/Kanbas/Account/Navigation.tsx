import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div
      id="wd-account-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 bg-white"
    >
      <NavLink
        to="/Kanbas/Account/Signin"
        id="wd-signin-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-black border-start border-3 border-dark"
            : "list-group-item text-center border-0 bg-white text-danger"
        }
      >
        Signin
      </NavLink>

      <NavLink
        to="/Kanbas/Account/Signup"
        id="wd-signup-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-black border-start border-3 border-dark"
            : "list-group-item text-center border-0 bg-white text-danger"
        }
      >
        Signup
      </NavLink>

      <NavLink
        to="/Kanbas/Account/Profile"
        id="wd-profile-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-black border-start border-3 border-dark"
            : "list-group-item text-center border-0 bg-white text-danger"
        }
      >
        Profile
      </NavLink>
    </div>
  );
}
