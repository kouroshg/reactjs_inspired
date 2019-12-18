import React, {useState, useRef} from 'react'
import {Modal, ModalBody,ModalHeader, Button, Row, Col} from 'reactstrap';

interface IProps {
  shuffledList: Array<string>,
  isDisabled: boolean,
}

const RandomNameModal:React.FC<IProps> = (props:IProps) => 
{

  const [randomName, setRandomName] = useState()
  const [open, setOpen] = useState(false)
  const shuffleId = useRef(0)
  const {shuffledList, isDisabled} = props
  
  const toggle = () => setOpen(!open)

  const handleRandomName = () =>{
    
    shuffleId.current += 1
    shuffleId.current = shuffleId.current >= shuffledList.length ? 0: shuffleId.current;

    setRandomName(shuffledList[shuffleId.current])
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