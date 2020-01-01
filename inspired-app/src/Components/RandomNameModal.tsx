import React, {useState, useRef} from 'react'
import {Modal, ModalBody,ModalHeader, Button, Row, Col} from 'reactstrap';

interface IProps {
  nameList:Array<string>,
  isDisabled: boolean,
}

const RandomNameModal:React.FC<IProps> = (props:IProps) => 
{

  const [randomName, setRandomName] = useState()
  const [open, setOpen] = useState(false)
  const {nameList, isDisabled} = props
  
  const id = useRef(0)
  const shuffledIdList = useRef(Array<number>())
  
  const toggle = () => setOpen(!open)

  const getShuffleIdList = () =>{

    const idList = Array.from(Array<string>(nameList.length).keys())
    let shuffledIdList = [...idList]
  
    for (let i = 0; i < idList.length; i++) {
      const j = Math.floor(Math.random() * i)
      const temp = i
      shuffledIdList[i] = shuffledIdList[j]
      shuffledIdList[j] = temp
    }

    return shuffledIdList
  }

  const handleRandomName = () =>{
    
    // initialize shuffledIdList for the first time
    if(shuffledIdList.current.length === 0)
    {
      shuffledIdList.current = getShuffleIdList()
    }

    // check if we reached the end of the list
    if(id.current >= shuffledIdList.current.length)
    {
      let tempList = getShuffleIdList()
      
      // check if last item of shuffledIdList is equal the new shuffled ids
      // and if so, shuffle again until last item and fist item are not same
      while(shuffledIdList.current[id.current] === tempList[0])
      {
        tempList = getShuffleIdList()
      }
      
      shuffledIdList.current = tempList
      id.current = 0
    }
    
    const shuffledId = shuffledIdList.current[id.current]
    
    id.current++

    setRandomName(nameList[shuffledId])
    setOpen(true)

  }

  return (
    <>
    <Modal isOpen = {open} >
        <ModalHeader toggle={toggle}>Your Random Name</ModalHeader>
      <ModalBody>
        <Row className='p-5' style={{textAlign:'center', fontSize:'6vw'}}>
          <Col >
            {randomName}
          </Col>
        </Row>
      </ModalBody>
    </Modal>
    <Button onClick={handleRandomName} disabled={isDisabled} color='primary' className='shadow w-100 p-2' style={{fontSize:'3vh', borderRadius:0}}>Pick a Name</Button>
    </>
  )
}

export default RandomNameModal