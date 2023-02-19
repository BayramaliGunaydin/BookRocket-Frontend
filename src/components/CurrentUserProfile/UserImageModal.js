import React, { useEffect, useState } from 'react'
import Resizer from 'react-image-file-resizer';
import { useDispatch, useSelector } from 'react-redux';
import { Modal,Button } from 'semantic-ui-react'
import { setUserImage } from '../../actions/UserActions';

function UserImageModal(props) {
     const [scaledImg,setScaledImg]=useState("");
     const dispatch = useDispatch();
     const token = useSelector(state=>state.auth.token);
    

    const resizeFile = (file) => new Promise(resolve => {
        Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
        uri => {
          resolve(uri);
        }, "base64" );
    });



    const onImageUpload=async(e)=>{
        const newpic = await resizeFile (e.target.files[0]);
        setScaledImg(newpic);
        props.setSelectedImage(newpic);
    }

    const setImage = () =>{
        dispatch(setUserImage(scaledImg.substring(23),token));
        props.modalToggle(false)
    }

    useEffect(()=>{
    },[scaledImg])
  return (
    <Modal
      onClose={() => props.modalToggle(false)}
      onOpen={() => props.modalToggle(true)}
      open={props.open}
    >
      <Modal.Header>Profil Resmi Degistir</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
        <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={onImageUpload}/>
        </div>
        {props.selectedImage!=="" && scaledImg!==""?(<div className='selected-img'>
            <div className='selected-img-normal'>
                <p>Yüklenen Resim</p>
                <img src={props.selectedImage} alt="" height="200px" />
            </div>      
            <p className='arrow'>→</p>
            <div className='selected-img-scaled'>
                <p>Görüntülenecek Resim</p>
                <img src={scaledImg} alt="" height="200px" />
            </div>
        </div>):""}
        
        
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.modalToggle(false)}>İptal Et</Button>
        <Button onClick={setImage} positive>
          Kaydet
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UserImageModal