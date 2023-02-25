import React from "react"
import ButtonCounter from "./Components/ButtonCounter"
import Table from "./Components/Table"
import CustomImage from "./Components/CustomImage"
import code_img1 from "./Images/code.jpeg"
import ConditionalButton from "./Components/ConditionalButton"
import List from "./Components/List"

class App extends React.Component{
  render () {
    return (
      <div>
        <ButtonCounter/>
        <Table/>
        <CustomImage src={code_img1} title="Hello Image" altText="shift image" href="https://www.pexels.com/search/code/"/>
        <ConditionalButton/>
        <List/>
      </div>
    )
  }
}

export default App