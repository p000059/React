import React from "react";
import PostList from "./PostList";
import styles from '../css/MyStyle.module.css';
import bootstrap from '../css/bootstrap.css';

function App() {
  return (
    <div className={styles.bigblue}>
      <PostList></PostList>
    </div>
  );
}

export default App;
