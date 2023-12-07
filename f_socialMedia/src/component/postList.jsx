import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostListContext } from "../store/myStore";
import NoPostMessage from "./noPostMessage";
import Loader from "./loader";
let PostList = () => {
  let selectedTab = useContext(PostListContext).selectedTab;

  let postListContext = useContext(PostListContext);
  let postList = postListContext.postList;
  let addDefaultPost = postListContext.addDefaultPost;
  let [defaultFetched, setDefaultFetched] = useState(false);

  useEffect(() => {
    setDefaultFetched(true);
    const Controller = new AbortController();
    const signal = Controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addDefaultPost(obj.posts);
        setDefaultFetched(false);
      });

    return () => {
      Controller.abort();
      console.log("Process aborted");
    };
  }, []);

  if (selectedTab === "Home") {
    if (!postList.length) {
      if (defaultFetched) {
        return <Loader></Loader>;
      } else {
        return <NoPostMessage></NoPostMessage>;
      }
    } else {
      return (
        <div className="postListContainer">
          {postList.map((post) => (
            <Post post={post} key={post.id}></Post>
          ))}
        </div>
      );
    }
  }
};
export default PostList;
