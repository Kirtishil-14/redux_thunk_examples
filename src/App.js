import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./components/User";
import { userAction } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const { loading, users, error } = usersList;
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux Thunk</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <User users={users} />
      )}
    </div>
  );
}

export default App;
