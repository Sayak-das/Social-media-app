import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {};

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const addPost = () => {};
const deletePost = () => {};

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "GOOOOINGGGGGGG BROOOO GOINGGGGG",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "GOOOOINGGGGGGG BROOOO GOINGGGGG",
    reactions: 5,
    userId: "user-5",
    tags: ["vacation", "mumbai", "russian"],
  },
];

export default PostListProvider;
