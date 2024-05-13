import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //for testing purpose
  // async function FetchUsers() {
  //   SetLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // }

  // async function searchUser(text) {
  //   SetLoading();
  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // }

  //to get single user
  // async function getUser(login) {
  //   SetLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   if (response.status === 4000) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();
  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // }

  // async function getUserRepos(login) {
  //   SetLoading();

  //   const params = new URLSearchParams({
  //     per_page: 10,
  //     sort: "created",
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // }

  //clear users from state
  // function ClearUsers() {
  //   dispatch({ type: "CLEAR_USER" });
  // }

  // function SetLoading() {
  //   dispatch({ type: "SET_LOADING" });
  // }
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
