import { useParams } from "react-router-dom";

export const UserPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>User#{params.userId}</h1>
    </div>
  );
};
