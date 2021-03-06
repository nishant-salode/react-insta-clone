import { useEffect } from "react";
import './App.css';
import Header from "./component/Header";
import Post from './component/Post';
import Stories from "./component/Stories";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Timeout called!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      
      {/* <div className="app__headerImage">
        <div className="app__alignImage">
          <img className="" src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt="logo" />
        </div>
      </div> */}
      <Header/>
      <div className="app__spaceHolder"></div>
      {/*Stories */}
      <Stories username="jio.joe" imageUrl="https://images.unsplash.com/photo-1622209680130-7b2036d373a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"/>
      {/* Post */}
      {/* <Post username="Nishant Salode" caption="Wakey wakey early mornings." imageUrl=""/> */}
      <Post/>
      {/* Posts */}
      
    </div>
  );
}

export default App;
