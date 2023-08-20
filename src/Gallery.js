import React from 'react';
import './gallery.css';

import Img1 from './image/photo1.png';
import Img2 from './image/photo2.jpeg';
import Img3 from './image/photo3.png';
import Img4 from './image/photo4.jpeg';
import Img5 from './image/photo5.jpg';
import Img6 from './image/photo6.png';
import Img7 from './image/photo7.jpeg';
import Img8 from './image/photo8.png';


const Gallery = () => {
    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
    ]




  return (
    <>
    <div className='gallery'>
        {data.map((item,index)=>{
            return(
                <div className='pics' key={ index }>
                   <img src={item.imgSrc} style={{ width:'100%',border: '4px solid black', padding: '7px'}}/>

                </div>
            )
        })

        }
    </div>
    </>
  )
}

export default Gallery
