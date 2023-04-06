import { useEffect, useState } from "react";
import api from "./axios";

type UserType = {
  login: string;
  avatar_url: string;
};

function GithubUsers() {
  const [users, setUsers] = useState<UserType[]>();

  const getUsers = async () => {
    // const response = fetch("https://api.github.com/users");
    // fetch("https://akabab.github.io/superhero-api/api/all.json")
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log("Err: ", err));
    const response = await api.get("/users");

    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users?.map((user, key) => (
        <h1 key={key}>{user.login}</h1>
      ))}
    </div>
  );
}

export default GithubUsers;
