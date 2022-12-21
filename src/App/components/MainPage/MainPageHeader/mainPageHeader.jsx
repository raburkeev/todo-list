import React from 'react'
import style from './mainPageHeader.module.scss'
import img from '../../../assets/img/header_button.svg'

const MainPageHeader = () => {
    return (
        <div className={style.header}>
            <h1 className={style.header_title}>To do list</h1>
            <img className={style.header_button} src={img} alt="add_todo_button"/>
        </div>
    )
}

export default MainPageHeader
