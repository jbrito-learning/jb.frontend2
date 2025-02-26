import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/userSlice";
import { RootState, AppDispatch } from "@/redux/store";

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    console.log("A carregar...");
    return <p>A carregar...</p>;
  }
  if (status === "failed") {
    console.log("Erro ao carregar utilizadores.");
    return <p>Erro ao carregar utilizadores.</p>;
  }

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          {user.name} | {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
