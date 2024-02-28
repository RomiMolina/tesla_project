import React from 'react'
import Button from './Button'
import './Item.css'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({title, desc, descLink, backgroundImg, first, leftBtnText,leftBtnLink,rightBtnText,rightBtnLink, twoButtons }) => {
  return (
    <div className='item' style= {{
      backgroundImage:`url(${backgroundImg})`
    }}>
      <div className='items__container'>
        <div className='item__text'>
            <p>{title}</p>
            <div className='item__textDesc'>
              <p>{desc}</p>
            </div>
        </div>
          
        <div className='item__lowerThird'>
          <div className='items__buttons'></div>
          <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
          {twoButtons && (
            <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
          )}
        </div>
        {first && (
          <div className='items__expand'>
            <ExpandMoreIcon />
          </div>
        )}
      </div>
    </div>
  )
}

export default Item
