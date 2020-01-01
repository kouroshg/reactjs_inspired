import React, {useState} from 'react'
import {InputGroup, Button, Input, Row, Col} from 'reactstrap';


interface IProps {
  onClickAdd: (name:string)=>void,
}

const InputBar: React.FC<IProps> = (props:IProps) => {

  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    setInputValue('')
    props.onClickAdd(inputValue)
  }

  return(

      <Row className='shadow' >
        <Col className='p-0' style={{height:'9vh'}} >
          <InputGroup className='h-100 bg-white'>
            <Input placeholder='Enter a name' value={inputValue} onChange={(e)=>setInputValue(e.target.value) } className='p-3 h-100 border-0' style={{fontWeight:'bold', fontSize:'3vh'}} />
          </InputGroup>
        </Col>
        <Col sm='2' className='p-0'>
        <Button onClick={()=>handleAdd()} style={{fontSize:'3vh', minWidth:100, borderRadius:0}}  color='info' className='p-3 w-100 h-100'>
          Add
        </Button>
        </Col>
      </Row>

  );
}

export default InputBar;