import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={navigate("/")} className="navigationLink">
        Back
      </Link>
      <h1>About</h1>
    </div>
  );
};
