import React, { useState } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import LikeModalContent from './LikeModalContent';

function LikeModal(props) {
    const [open,setOpen] = useState(false);
    return (
        <Modal
      onClose={() => props.modalToggle(false)}
      onOpen={() => props.modalToggle(true)}
      open={props.open}
      trigger={<Button className='like-count'>{props.booklikes.length} beğeni</Button>}
    >
      <Modal.Header>Bu kitabı beğenenler</Modal.Header>
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