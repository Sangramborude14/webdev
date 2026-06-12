import React from "react";
import ComponentA from "./ComponentA";
import Students from "./Students";
import { UserContext } from "./UserContext";
import SideBar from "./SideBar";

function App() {
        const user = {
                name: "sangi",
        }
return(<>
      <UserContext.Provider value={user}>
         <Practice/>
      </UserContext.Provider>
        </>)
}

export default App
//module    