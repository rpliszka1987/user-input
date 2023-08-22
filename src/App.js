import React from "react";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
