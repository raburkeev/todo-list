import React from 'react'
import searchImg from '../../../assets/img/search_img.svg'
import style from './mainPageContent.module.scss'

const MainPageContent = () => {
    return (
        <div className={style.main_content}>
            <div className={style.main_content_header}>
                <div className={style.main_content_header_search}>
                    <img className={style.main_content_header_search_img} src={searchImg} alt="search_img"/>
                    <input className={style.main_content_header_search_input} placeholder="Поиск Имени, статуса или даты" type="text"/>
                </div>
                <div>
                    SortBy
                </div>
            </div>
            <table className={style.main_content_table}>
                <thead className={style.main_content_table_head}>
                    <tr className={style.main_content_table_head_row}>
                        <th className={style.main_content_table_check}>{' '}</th>
                        <th className={style.main_content_table_description}>Описание</th>
                        <th className={style.main_content_table_status}>Статус</th>
                        <th className={style.main_content_table_date}>Дата</th>
                    </tr>

                </thead>
            </table>

        </div>
    )
}

export default MainPageContent
