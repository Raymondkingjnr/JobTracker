import { NavLink } from "react-router-dom";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const NavLinks = ({ toggleSidebar }) => {
  const links = [
    {
      id: 1,
      text: "stats",
      path: "/",
      icon: <BsFillBarChartFill />,
    },
    {
      id: 2,
      text: "all jobs",
      path: "all-jobs",
      icon: <MdQueryStats />,
    },
    {
      id: 3,
      text: "add job",
      path: "add-job",
      icon: <FaWpforms />,
    },
    {
      id: 4,
      text: "profile",
      path: "profile",
      icon: <ImProfile />,
    },
  ];
  return (
    <div>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              key={id}
              onClick={toggleSidebar}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
