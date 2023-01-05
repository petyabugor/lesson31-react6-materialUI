import React from 'react'
import  './Order.css'
import {FaTrash} from 'react-icons/fa'

const Order = (props) => {
    return (
      <div className='order' >
          <div className="order-item">
            <div className="order-img" >
                <img src={props.item.image} alt="картинка" />
            </div>
            <div className="order-content">
                  <h4 className="order-text" >{props.item.title}</h4>
                  <a className="order-link"  href="">{'Ціна: '+ props.item.price+ '$'} </a>
            </div>  
              <FaTrash className='delete-icon' onClick={()=> props.onDelete(props.item.title)} ></FaTrash>
          </div>
      </div>
    )
}

export default Order