import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </>
  );
}

export default App;
