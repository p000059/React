import React from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Header from "./Header";
import Time from "./Time";
import '../css/App.css'
import '../css/bootstrap.min.css'

function App() {
  
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Create />
      </div>
      <div>
        <Read />
      </div>
      <div>
        <Update />
      <div>
        <Time />
      </div>      
      </div>
    </div>
  );
}

export default App;
