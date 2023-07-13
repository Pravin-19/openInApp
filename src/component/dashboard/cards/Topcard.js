import React from 'react'
import style from "./Topcards.module.css"
function Topcard({item}) {
  return (
    <div className={style.topcardDiv} style={{background:`${item.bg}`}}>
            <div className={style.iconDiv}>
                  <div>{item?.svg}</div>
            </div>
            <div className={style.cardsecDiv}>
              <span>{item.title}</span>
              <b>{item.amount}</b>
            </div>
    </div>
  )
}

export default Topcard