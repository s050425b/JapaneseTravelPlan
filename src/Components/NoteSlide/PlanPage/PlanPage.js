import { useState, useEffect } from "react";
import { NoteItem } from "./NoteItem/NoteItem";
import { NoteItemCreate } from "./NoteItem/NoteItemCreate";

export function PlanPage({
    itemList,
    addItemFunc,
    toggleIsAgendaFunc,
    removeItemFunc
}) {
    const [showCreateItem, setShowCreateItem] = useState(false);

    function onClickPlusSign() {
        setShowCreateItem(true);
    }

    function onClickAddBtn(submitObj) {
        addItemFunc(submitObj);
        setShowCreateItem(false);
    }

    function onClickCancelBtn() {
        setShowCreateItem(false);
    }


    let noteItemArr = [];
    for (const item of itemList) {
        noteItemArr.push(<NoteItem key={item.item_id} pageName="plan" item_id={item.item_id} item_name={item.name} item_location={item.location} item_desc={item.description} item_dateTime={item.dateTime} item_isAgenda={item.isAgenda} toggleIsAgendaFunc={toggleIsAgendaFunc} removeItemFunc={removeItemFunc}/>);
    }
    return (
        <div id="planPage" className="page activePage">
            <button className="btn btn-light w-100" onClick={onClickPlusSign}>+ Create Plan</button>
            <div className="accordion" id="collapse_plan">
                <NoteItemCreate isShow={showCreateItem} handleClick={onClickAddBtn} handleCancel={onClickCancelBtn}/>
                {noteItemArr}
            </div>
        </div>
    );
}