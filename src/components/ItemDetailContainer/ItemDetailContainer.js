import React,  {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import Buzo from "../../assets/Buzo.jpg"


const products = {id: '01', descr: "Un buzo para vos", precio: '$4500', stock: 10, img: {Buzo}}

export const ItemDetailContainer = () => {

  const [data, setData] = useState([]);

  useEffect (() =>{
    const getItem = new Promise (resolve =>{
      setTimeout (() =>{
        resolve (products)
      }, 2000);
    })
      
      getItem.then (res => setData (res));
  },[])


  return (
    <ItemDetail data = {data} />
  )
}

export default ItemDetailContainer
