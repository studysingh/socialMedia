import { useContext } from "react";
import { PostListContext } from "../store/myStore";

let NoPostMessage = () => {
  let appContext = useContext(PostListContext);
  let setSelectedTab = appContext.setSelectedTab;

  return (
    <section className="noPostMessageContainer">
      <div className="noPostMessageHeading">Post Here</div>
      <button
        className="btn btn-primary noPostMessageBtn"
        onClick={() => setSelectedTab("Create Post")}
      >
        Post Here
      </button>
      <br />
    </section>
  );
};
export default NoPostMessage;
