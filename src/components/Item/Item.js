import React from 'react'

const Item = ({product}) => {
    const{img, tipo, descr} = product
  return (
    <div>
        <img src={img} alt={tipo} />
        <div>
            <p> {tipo} </p>
            <p> {descr} </p>
        </div>
        <button>Ver más</button>
    </div>
  )
}

export default Item