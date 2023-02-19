import React from 'react'
import { Button, Modal } from 'semantic-ui-react';
import LikeModalContent from './LikeModalContent';

function LikeModal(props) {

 
    return (
        <Modal
        size='tiny'
      onClose={() => props.modalToggle(false)}
      onOpen={() => props.modalToggle(true)}
      open={props.open}
      trigger={<Button className='like-count'>{props.booklikes?.length} begeni</Button>}
    >
      <Modal.Header>Bu kitabı begenenler</Modal.Header>
      {props.booklikes.map((like,index)=><LikeModalContent user={like.user} key={index}/>)}
      <Modal.Actions>
        <Button color='black' onClick={() => props.modalToggle(false)}>
          Kapat
        </Button>
      </Modal.Actions>
    </Modal>
      )
}

export default LikeModal