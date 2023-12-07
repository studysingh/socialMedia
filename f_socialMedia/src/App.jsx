import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header";
import SideBar from "./component/sideBar";
import CreatePostForm from "./component/createPostForm";
import PostList from "./component/postList";
import PostListContextProvider from "./store/myStore";
import Content from "./component/content";



function App() {

  return (
    <PostListContextProvider>
      <Header></Header>
      <Content>
          <SideBar></SideBar>
          <CreatePostForm></CreatePostForm>
          <PostList></PostList>
      </Content>
    </PostListContextProvider>
  );
}
export default App;
