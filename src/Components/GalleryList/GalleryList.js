import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function GalleryList({images}){

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [largeImg,setLargeImg] = useState('')

    function closeModal(){
        setIsOpenModal(false)
    }

    function openModal(e){
        setLargeImg(e.target.dataset.largeurl)
        setIsOpenModal(true)
    }

    return(
        <ul className="ImageGallery">
             {images.map(({id,webformatURL,largeImageURL}) => (
                  <li className="ImageItem" key={id}>
                  <img className="ImageItem-image" src={webformatURL} 
                  data-largeurl={largeImageURL} 
                  alt="" onClick={openModal}
                  />
              </li>
             ))}

             {isOpenModal && <Modal onClose={closeModal}>
                <img src={largeImg} alt="" className=""/>
              </Modal>}
        </ul>
    )
}