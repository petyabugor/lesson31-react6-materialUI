import React from 'react'
import  './Categories.css'
import { useDispatch } from 'react-redux';
import { ascOrder, descOrder } from '../../../redux/slices/productSlice'

const Categories = (props) => {
  const dispatch= useDispatch()

    return (
      <div className='categories' >
        <div className='categories-text'> Сортувати</div>
            <div className="select-css"> 
                <div className='categories-button' onClick={() => dispatch(ascOrder())}>від А-Я</div>
                <div className='categories-button' onClick={() => dispatch(descOrder())}>від Я-А</div>
            </div>
      </div>
    )
  
}

export default Categories