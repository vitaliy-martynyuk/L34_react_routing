import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

export const ContactsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={navigate("/")} className="navigationLink">
        Back
      </Link>
      <h1>Contacts</h1>
    </div>
  );
};
