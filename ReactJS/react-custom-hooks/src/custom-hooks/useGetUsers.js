import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useGetUsers = (url) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const getUsersFunc = async () => {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setUsers(response);
  };

  useEffect(() => {
    getUsersFunc();
  }, [url]);
  return { error, users };
};

export default useGetUsers;
