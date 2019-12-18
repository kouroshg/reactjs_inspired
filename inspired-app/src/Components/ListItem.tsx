import React from 'react'
import {Card, CardBody, CardText, Button, Row, Col} from 'reactstrap';

interface IProps {
  itemTitle : string,
  itemId: number,
  onClickDelete : (id:number) => void
}

const ListItem:React.FC<IProps> = (props:IProps) => {


  return (
      <Row className='shadow p-2 bg-white'>
        <Col>
          <Card className='border-0'>
            <CardBody>
              <CardText style={{fontWeight:'bold'}}>
                {props.itemTitle}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm='auto'>
          <Button onClick={() => props.onClickDelete(props.itemId)} className='w-100 h-100' style={{borderRadius:10}} color='danger'>Remove</Button>
        </Col>
      </Row>
  )
}

export default ListItem