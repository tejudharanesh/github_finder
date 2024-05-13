import React from "react";
import UserSearch from "../components/users/UserSearch";
import UserReslt from "../components/users/UserReslt";

function Home() {
  return (
    <div>
      <UserSearch />
      <UserReslt/>
    </div>
  );
}

export default Home;
