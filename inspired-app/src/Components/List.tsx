import React from 'react'
import {Row, Col} from 'reactstrap';
import ListItem from '../Components/ListItem'

interface IProps {
  onClickDelete: (name:number)=>void,
  nameListArray: Array<string>
}

const List: React.FC<IProps> = (props:IProps) =>{

  return(
    <>
    
      <Row>
        <Col>
          {
            props.nameListArray.map((item, index) =>{
              return(
                <ListItem onClickDelete={props.onClickDelete} itemId={index} itemTitle={item} key={index}/>
              )
            })
          }
        </Col>
      </Row>
    
    </>
  )
}

export default List;