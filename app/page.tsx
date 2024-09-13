import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./components/sidebar/sidebar";
import SideBarLink from "./components/sidebar/sidebarlink";
import SideBarHeader from "./components/sidebar/sidebarheader";
import MapboxMap from "./components/mapboxmap";

export default function Page() {
  return (
    <>
        <body>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} id="btn" />
            <FontAwesomeIcon icon={faTimes} id="cancel" />
          </label>
          <SideBar>
            <SideBarHeader>Menu</SideBarHeader>
            <SideBarLink link="#">Dashboard</SideBarLink>
            <SideBarLink link="#">Shortcuts</SideBarLink>
            <SideBarLink link="#">Overview</SideBarLink>
            <SideBarLink link="#">Events</SideBarLink>
            <SideBarLink link="#">About</SideBarLink>
            <SideBarLink link="#">Services</SideBarLink>
            <SideBarLink link="#">Contact</SideBarLink>
          </SideBar>

          <MapboxMap />
          
      </body>

    </>
  );
};