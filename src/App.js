import React, { Fragment, useEffect, useState } from "react";
import Searcbar from "./Searchbar/Searchbar";
import GalleryList from "./Components/GalleryList/GalleryList";

import imagesApi from './servises/imagesApi'

function App(){
   const [images, setImages] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [page,setPage] = useState(1)
   const [loading, setLoading] = useState(false);

// Добавление объуктов в массив images

useEffect(() => {
   getImages();
},[searchQuery]);


function getImages(){

   if(!searchQuery){
      return
   }

   setLoading(true)

    imagesApi(page,searchQuery)
   .then(result => {
      setImages(state => [...state,...result.hits])
      setPage(state => state + 1)
   })
   .finally(setLoading(false))
}




// Получение запроса из формы

   const handleFpormSubmit = query => {
      setSearchQuery(query);

      setPage(1);
      setImages([]);
   }





     return(
        <Fragment>
         <Searcbar onSubmit={handleFpormSubmit}/>
         {images.length > 0 && 
         <GalleryList images={images}/>}
         {images.length > 0 && <button type='button' className='Button' 
                onClick={getImages}>{loading ? '...' : 'Load more'}</button>}
        </Fragment>
        
     )
}

export default App;