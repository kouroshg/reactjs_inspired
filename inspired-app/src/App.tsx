import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap'

import InputBar from './Components/InputBar'
import List from './Components/List'
import RandomNameModal from './Components/RandomNameModal'

const App: React.FC = () => {

  const [nameList, setNameList] = useState(Array<string>());
  
  const handleClickAdd = (name:string) =>{
    if(name !== "")
    {
      let updateArr:Array<string> = [...nameList];
      updateArr.push(name)
      setNameList(updateArr)
    }
  }
  
  const handleClickDelete = (id:number) =>{
    let updateArr:Array<string> = [...nameList]
    updateArr.splice(id,1)
    setNameList(updateArr)
  }

  const shuffle = () =>{

    let shuffled = [...nameList]

    for (let i = 0; i < nameList.length; i++) {
      const j = Math.floor(Math.random() * i)
      const temp = nameList[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = temp
    }

    return shuffled
  }

  return (

    <div>
      <Container className='p-4'>
        <Row className="d-flex justify-content-center p-2" >
          <Col xs='12' sm='8'>
            <InputBar onClickAdd={(name)=>handleClickAdd(name)}/>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center p-2">
          <Col xs='12' sm='8' >
            <List nameListArray={nameList} onClickDelete={id => handleClickDelete(id)}/>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center p-0">
          <Col xs='12' sm='8'>
            <RandomNameModal shuffledList={shuffle()} isDisabled={nameList.length > 0 ? false : true}></RandomNameModal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
