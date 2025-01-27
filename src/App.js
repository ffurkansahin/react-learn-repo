import React from "react";
import ButtonTest  from "./ButtonTest.js";
import Tab from "./Tab.js";
import { useState } from "react";


function App() {
  const[activeTab,setActiveTab] = useState(0)

  return (
    <>
    <div style ={{padding:20}}>
      <button onClick={() => setActiveTab(0)}>go to tab 1</button>
      <button onClick={() => setActiveTab(1)}>go to tab 2</button>
      <button onClick={() => setActiveTab(2)}>go to tab 3</button>
      <Tab activeTab = {activeTab}>
        <Tab.Panel title = "Profile">1.panel</Tab.Panel>
        <Tab.Panel title = "About Us">2.panel</Tab.Panel>
        <Tab.Panel title = "Contact">3.panel</Tab.Panel>
      </Tab>
    </div>
    
    <ButtonTest text="This is a button"/>
    </>
  );
}

export default App;
