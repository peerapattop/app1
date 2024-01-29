import React from "react";
import { userContext } from "./context";
import Content2 from "./context-content";
import Header2 from "./context-header2"


export default function App() {
  let [user,setUser] = React.useState('')
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}
