import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  },[]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {Users.map((Users) => {
          return <li key={Users.id}>{Users.login}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fetch;
