import React, { useContext } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const {postsState, postsDispatch} = postsContext;
  console.log(postsState)

  return (
    <div>
      <h1>POSTS</h1>
    </div>
  );
};
