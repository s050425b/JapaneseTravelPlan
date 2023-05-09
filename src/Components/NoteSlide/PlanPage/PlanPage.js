import { useState, useEffect } from "react";
import { NoteItem } from "./NoteItem/NoteItem";
import { NoteItemCreate } from "./NoteItem/NoteItemCreate";

export function PlanPage() {
    const [planItem, setPlanItem] = useState([]);
    const [showCreateItem, setShowCreateItem] = useState(false);

    useEffect(() => {
        setPlanItem([
            {
                item_id: 1,
                name: "Plan item - 1",
                location: "Disneyland",
                dateTime: "17-08-2022 18:00",
                description: "Hello World!",
                isAgenda: false
            },
            {
                item_id: 2,
                name: "Plan item - 2",
                location: "Disneyland",
                dateTime: "17-08-2022 18:00",
                description: "Hello World!",
                isAgenda: true
            },
            {
                item_id: 3,
                name: "Plan item - 3",
                location: "Disneyland",
                dateTime: "17-08-2022 18:00",
                description: "Hello World!",
                isAgenda: false
            },
            {
                item_id: 4,
                name: "Plan item - 4",
                location: "Disneyland",
                dateTime: "17-08-2022 18:00",
                description: "Hello World!",
                isAgenda: true
            },
        ]);
    }, []);

    function onClickPlusSign() {
        setShowCreateItem(true);
    }

    function onClickAddBtn(submitObj) {
        const appendObj = {
            item_id: planItem.length + 1,
            ...submitObj
        }
        setPlanItem(oldArr => [appendObj, ...oldArr]);
        setShowCreateItem(false);
    }

    function onClickCancelBtn() {
        setShowCreateItem(false);
    }


    let noteItemArr = [];
    for (const item of planItem) {
        noteItemArr.push(<NoteItem key={item.item_id} item_id={item.item_id} item_name={item.name} item_location={item.location} item_desc={item.description} item_dateTime={item.dateTime} item_isAgenda={item.isAgenda} />);
    }
    return (
        <div id="planPage" className="page activePage">
            <button className="btn" onClick={onClickPlusSign}>+</button>
            <div className="accordion" id="accordionExample">
                <NoteItemCreate isShow={showCreateItem} handleClick={onClickAddBtn} handleCancel={onClickCancelBtn}/>
                {noteItemArr}
            </div>
        </div>
    );
}