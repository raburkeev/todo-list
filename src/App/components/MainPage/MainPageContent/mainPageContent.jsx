/*eslint-disable*/
import React from 'react'
import searchImg from '../../../assets/img/search_img.svg'
import style from './mainPageContent.module.scss'

const MainPageContent = () => {
    const todos = [
        {
            id: 0, check: '+', description: 'hello', status: 'complete', date: '19.12.2022'
        },
        {
            id: 1, check: '-', description: 'world', status: 'not', date: '19.12.2022'
        },
        {
            id: 2, check: '+', description: 'todo-list', status: 'complete', date: '19.12.2022'
        }
    ]

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
                        <td className={style.main_content_table_head_row_check}>{' '}</td>
                        <td className={style.main_content_table_head_row_description}>description</td>
                        <td className={style.main_content_table_head_row_status}>status</td>
                        <td className={style.main_content_table_head_row_date}>date</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <tr className={style.main_content_table_body_row} key={item.id}>
                            <td className={style.main_content_table_body_row_check}>{item.check}</td>
                            <td className={style.main_content_table_body_row_description}>{item.description}</td>
                            <td className={style.main_content_table_body_row_status}>{item.status}</td>
                            <td className={style.main_content_table_body_row_date}>{item.date}</td>
                        </tr>
                    ))}
                </tbody>

            </table>













            {/*<table className={style.main_content_table}>*/}
            {/*    <thead className={style.main_content_table_head}>*/}
            {/*        <tr className={style.main_content_table_head_row}>*/}
            {/*            <th className={style.main_content_table_head_check}>{' '}</th>*/}
            {/*            <th className={style.main_content_table_head_description}>Описание</th>*/}
            {/*            <th className={style.main_content_table_head_status}>Статус</th>*/}
            {/*            <th className={style.main_content_table_head_date}>Дата</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody className={style.main_content_table_body}>*/}
            {/*        <tr>*/}
            {/*            <td className={style.main_content_table_body_check}>check</td>*/}
            {/*            <td>desc</td>*/}
            {/*            <td>status</td>*/}
            {/*            <td>date</td>*/}
            {/*        </tr>*/}
            {/*        /!*{todos.map((item) => (*!/*/}
            {/*        /!*    <tr className={style.main_content_table_body_row} key={item.id}>*!/*/}
            {/*        /!*        <td className={style.main_content_table_body_check}>{item.check}</td>*!/*/}
            {/*        /!*        <td className={style.main_content_table_body_description}>{item.description}</td>*!/*/}
            {/*        /!*        <td className={style.main_content_table_body_status}>{item.status}</td>*!/*/}
            {/*        /!*        <td className={style.main_content_table_body_date}>{item.date}</td>*!/*/}
            {/*        /!*    </tr>*!/*/}
            {/*        /!*))}*!/*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th>1</th>*/}
            {/*            <th>2</th>*/}
            {/*            <th>3</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        <tr>*/}
            {/*            <td>hi</td>*/}
            {/*            <td>kak</td>*/}
            {/*            <td>dela</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td>hi</td>*/}
            {/*            <td>kak</td>*/}
            {/*            <td>dela</td>*/}
            {/*        </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}

        </div>
    )
}

export default MainPageContent
