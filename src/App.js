import React from "react";

import "./styles.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const OnChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Some error when u try to get users");
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="App">
      <Users
        OnChangeSearchValue={OnChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;
