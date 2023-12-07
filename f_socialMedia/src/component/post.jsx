import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/myStore";

let Post = ({ post }) => {
  let splittedTags;
  if (typeof post.tags === "string") {
    splittedTags = post.tags.split(",");
  } else if (typeof post.tags === "object") {
    splittedTags = [];
    post.tags.map((tag) => splittedTags.push(tag));
  }
  let deletePost = useContext(PostListContext).deletePost;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <p className="card-text">{post.body}</p>

        <div className="tagContainer">
          {splittedTags.map((tag) => (
            <button type="button" className="btn btn-primary tagBtn" key={tag}>
              {tag}
            </button>
          ))}
        </div>

        <button
          className="btn btn-danger deleteBtn"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdDelete />
        </button>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions > 20 ? `${post.reactions}+` : `${post.reactions}`}
        </span>
      </div>
    </div>
  );
};
export default Post;
