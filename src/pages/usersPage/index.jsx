import "./styles.css";
import { Link } from "react-router-dom";

export * from "./userPage";

const getUsersResponse = {
  users: [
    {
      id: "123456",
      name: "Vitaliy",
      age: 23,
    },
    {
      id: "234567",
      name: "Dmytro",
      age: 45,
    },
    {
      id: "345678",
      name: "Elizabeth",
      age: 13,
    },
  ],
  count: 3,
};

export const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {getUsersResponse.users.map((user) => (
          <li key={user.id}>
            {user.name}#
            <Link to={`/users/${user.id}`} className="navigationLink">
              {user.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
