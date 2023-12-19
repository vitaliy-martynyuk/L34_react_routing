import { Link } from "react-router-dom";

import "./styles.css";

export const HomePage = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        <li>
          <Link to="/about" className="navigationLink">
            About
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="navigationLink">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/users" className="navigationLink">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};
