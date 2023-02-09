import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal,Button,Header,Image } from 'semantic-ui-react'

function UnauthorizedModal(props) {
  const navigate = useNavigate()
  const redirectLogin=()=>{
    navigate("/login-register")
  }
  return (
    <Modal
      onClose={() => props.setAuthorizeModalOpen(false)}
      onOpen={() => props.setAuthorizeModalOpen(true)}
      open={props.authorizeModalOpen}
    >
      <Modal.Header>Sadece Üyelere Özel İçerik</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
        <p>Görüntülemek için giriş yapınız...</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => props.setAuthorizeModalOpen(false)}>
          Kapat
        </Button>
        <Button color='green' onClick={() =>redirectLogin()}>
          Giriş Ekranına Git
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UnauthorizedModal