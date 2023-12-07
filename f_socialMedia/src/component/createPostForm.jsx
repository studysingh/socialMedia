import { useContext, useRef } from "react";
import { PostListContext } from "../store/myStore";

let CreatePostForm = () => {
  let selectedTab = useContext(PostListContext).selectedTab;

  let addPost = useContext(PostListContext).addPost;

  // references to collect the value
  let userId = useRef();
  let title = useRef();
  let body = useRef();
  let tags = useRef();
  let reactions = useRef();

  // return value based on selected tab
  if (selectedTab === "Create Post") {
    return (
      <form
        className="postForm"
        onSubmit={(event) => {
          event.preventDefault();
          addPost(userId, title, body, tags, reactions);
        }}
      >
        <h1 className="postHeading">Create Your Post</h1>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            ref={userId}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user ID "
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Write Your Post"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            ref={body}
            className="form-control"
            id="body"
            placeholder="Describe more about your post"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Write tags about your post separated by comma"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactions}
            type="number"
            className="form-control"
            id="reactions"
            placeholder="Tell your reactions"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    );
  }
};
export default CreatePostForm;
