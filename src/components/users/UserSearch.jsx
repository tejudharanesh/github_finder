import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import alertContext from "../../context/alert/AlertContext";
import { searchUser } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(alertContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a username", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUser(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleChange}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Enter a Username"
              />
              <button
                className="absolute top-0 right-0 rounded-l-none btn btn-lg md:w-16 lg:w-36"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() =>
              dispatch({
                type: "CLEAR_USER",
              })
            }
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
