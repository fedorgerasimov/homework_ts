import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any / передаётся одно дело
    deleteAffairCallback: (_id: number) => void // need to fix any ()=> void  / передаётся функция
}       //которая повесится на кнопку чтобы это дело удалилось при нажатии на кнопку

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={s.affair}>
            {/*show some text - указать название дела и его приоритет*/}
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>
            <button onClick={deleteCallback} >x</button>
        </div>
    )
}

export default Affair