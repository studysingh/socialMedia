import { useContext } from "react";
import { PostListContext } from "../store/myStore";

let SideBar = () => {
  let myContext = useContext(PostListContext);
  let selectedTab = myContext.selectedTab;
  let setSelectedTab = myContext.setSelectedTab;
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">SoleBook</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a
            href="#"
            className={
              (selectedTab === "Home" ? "active " : "") + `nav-link text-white `
            }
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>

        <li onClick={() => setSelectedTab("Create Post")}>
          <a
            href="#"
            className={
              (selectedTab === "Create Post" ? "active " : "") +
              `nav-link text-white `
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default SideBar;
