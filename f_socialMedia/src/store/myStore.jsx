import { createContext, useEffect, useReducer } from "react";
import { useState } from "react";

// this is the store which supplies value
export const PostListContext = createContext({
  selectedTab: "",
  setSelectedTab: () => {},

  postList: [],
  setPostList: () => {},
  addPost: () => {},
  deletePost: () => {},
  addDefaultPost: () => {},
});

// this is the pure function for reducer
let reducer = (currValue, action) => {
  let newValue = currValue;

  if (action.type === "ADD_POST") {
    /* add post*/
    // creating id
    let id = "";
    for (let i = 0; i < 8; i++) {
      let idx = Math.floor(Math.random() * alphanumericArray.length);
      id += alphanumericArray[idx];
    }

    // making new post
    let newPost = {
      id,
      title: action.paylod.title,
      body: action.paylod.body,
      userId: action.paylod.userId,
      tags: action.paylod.tags,
      reactions: action.paylod.reactions,
    };

    // addding the post
    newValue = [newPost, ...currValue];
    action.setSelectedTab("Home");
  } else if (action.type === "DELETE_POST") {
    /* delete post */
    newValue = currValue.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_DEFAULT_POST") {
    newValue = action.payload.posts;
  }
  return newValue;
};

const PostListContextProvider = ({ children }) => {
  let [selectedTab, setSelectedTab] = useState("Home");
  let [postList, dispatchNewPostList] = useReducer(reducer, []);

  let addPost = (userId, title, body, tags, reactions) => {
    let addPostAction = {
      type: "ADD_POST",
      paylod: {
        title: title.current.value,
        body: body.current.value,
        userId: userId.current.value,
        tags: tags.current.value,
        reactions: reactions.current.value,
      },
      setSelectedTab,
    };
    dispatchNewPostList(addPostAction);
    // setting value again empty
    title.current.value = "";
    body.current.value = "";
    userId.current.value = "";
    tags.current.value = "";
    reactions.current.value = "";
  };

  let deletePost = (postId) => {
    let deletePostAction = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchNewPostList(deletePostAction);
  };

  // data fetched from api
  let addDefaultPost = (defaultPostList) => {
    let defaultPostAction = {
      type: "ADD_DEFAULT_POST",
      payload: {
        posts: defaultPostList,
      },
    };
    dispatchNewPostList(defaultPostAction);
  };
  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        postList,
        addPost,
        deletePost,
        addDefaultPost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;

const alphanumericArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
