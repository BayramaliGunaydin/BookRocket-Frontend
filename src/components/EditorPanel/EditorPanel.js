import React, { useEffect, useState } from 'react'
import FileResizer from 'react-image-file-resizer';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, resetPositiveAlert } from '../../actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { addBookError } from '../../actions/BookActions';

function EditorPanel() {
    const [bookImage,setBookImage] = useState("");
    const [bookName,setBookName] = useState("");
    const [bookAuthor,setBookAuthor] = useState("");
    const [bookTopic,setBookTopic] = useState("");
    const dispatch=useDispatch();
    const token = useSelector(state=>state.auth.token);
    const positiveAlert = useSelector(state=>state.auth.positiveAlert)
    const isEditor=useSelector(state=>state.auth.role)
    const error = useSelector(state=>state.book.error)
    const navigate = useNavigate()



    useEffect(()=>{
        if(isEditor!=="EDITOR" && isEditor!==undefined){
          navigate("/login-register")
        }
      },[isEditor,navigate])




    const resizeFile = (file) => new Promise(resolve => {
        FileResizer.imageFileResizer(file, 190, 270, 'JPEG', 100, 0,
        uri => {
          resolve(uri);
        }, "base64",190 );
    });

    const onImageUpload=async(e)=>{
        let newpic = await resizeFile (e.target.files[0]);
        setBookImage(newpic.substring(23));
    }

    const onAddBookChange = (e)=>{
        if(e.target.name==="book-name"){
            setBookName(e.target.value)
        }
        else if(e.target.name==="author"){
            setBookAuthor(e.target.value)
        }
        else if(e.target.name==="topic"){
            setBookTopic(e.target.value)
        }
    }


    const onAddBookSubmit = (e)=>{
        dispatch(addBookError(""));
        e.preventDefault();
        const newbook ={bookname:bookName,pic:bookImage,author:bookAuthor,topic:bookTopic}
        if(bookImage===""){
            dispatch(addBookError("Kitap Kapak Resmi Boş Bırakılamaz"))
        }else if(bookName===""){
            dispatch(addBookError("Kitap İsmi Boş Bırakılamaz"))
        }
        else if(bookAuthor===""){
            dispatch(addBookError("Kitap Yazarı Boş Bırakılamaz"))
        }
        else if(bookTopic===""){
            dispatch(addBookError("Kitap Türü Boş Bırakılamaz"))
        }
        else{
            dispatch(addBook(newbook,token));
            const form = document.querySelector(".addbook-form");
            form.elements[0].value=""
            form.elements[1].value=""
            form.elements[2].value=""
            setBookImage("");
            setBookName("");
            setBookAuthor("");
         }
    }

    useEffect(() => { 
     let timer;
        if(positiveAlert!==""){         
         timer = setTimeout(()=>{
          dispatch(resetPositiveAlert());       
        },3000)      
      }
        return ()=>clearTimeout(timer); 
      }, [positiveAlert,dispatch]);

      useEffect(() => { 
        let timer;
           if(error!==""){         
            timer = setTimeout(()=>{
             dispatch(addBookError(""));       
           },3000)      
         }
           return ()=>clearTimeout(timer); 
         }, [error,dispatch]);



  return (
    <main className='admin-panel'>
        <div className="container">           
            <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            {positiveAlert!=="" && positiveAlert!==undefined?<div class="alert alert-success"   role="alert">
                         {positiveAlert}
                      </div>:""}
                      {error!=="" && error!==undefined?<div class="alert alert-danger"   role="alert">
                         {error}
                      </div>:""}
                <h2 className='text-center'>Editör Kitap Ekleme Paneli</h2>
                <div class="card">                    
                    <div class="card-body">                    
                            <div className="col-sm-12">
                                <form className="addbook-form" onSubmit={onAddBookSubmit} onChange={onAddBookChange}>
                                    <label htmlFor="image" className='form-label py-3'>Kitap Kapak Resmi:</label>
                                    <input type="file"  name="image" className='form-control' onChange={onImageUpload}/>
                                    {bookImage!==""? <div className='my-3'><p>Görüntülenecek Kapak Resmi:</p> <img src={`data:image/jpg;base64,`+bookImage} alt="" /></div>:"" }
                                    <label htmlFor="book-name" className='form-label py-3'>Kitap İsmi:</label>
                                    <input type="text"  name="book-name" className='form-control' />
                                    <label htmlFor="author" className='form-label py-3'>Kitap Yazarı:</label>
                                    <input type="text"  name="author" className='form-control' />
                                    <label htmlFor="topic" className='form-label py-3'>Kitap Türü:</label>
                                    <select class="form-select"  name="topic">
                                        <option selected>Tür Seçiniz...</option>
                                        <option value="Macera">Macera</option>
                                        <option value="Fantastik">Fantastik</option>
                                        <option value="Bilim-Kurgu">Bilim-Kurgu</option>
                                        <option value="Tarih">Tarih</option>
                                        <option value="Felsefe">Felsefe</option>
                                    </select>
                                    <button className='btn btn-outline-primary my-3 w-100' type='submit'>Kitabı Ekle</button>
                                </form>
                            </div>
                     
                    </div>
                </div>
            </div>      
        </div>
    </main>
  )
}

export default EditorPanel