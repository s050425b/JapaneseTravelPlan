import { useState, useEffect } from "react";
import { NoteItem } from "./NoteItem/NoteItem";
import { NoteItemCreate } from "./NoteItem/NoteItemCreate";
import "./NoteSlide.css";

export function NoteSlide() {
    const [agendaItem, setAgendaItem] = useState([]);
    const [showCreateItem, setShowCreateItem] = useState(false);

    useEffect(() => {
        setAgendaItem([
            {
                item_id: 1,
                name: "Agenda item - 1",
                location: "Disneyland",
                date: "17-08-2022",
                time: "18:00",
                description: "Hello World!"
            },
            {
                item_id: 2,
                name: "Agenda item - 2",
                location: "Disneyland",
                date: "17-08-2022",
                time: "18:00",
                description: "Hello World!"
            },
            {
                item_id: 3,
                name: "Agenda item - 3",
                location: "Disneyland",
                date: "17-08-2022",
                time: "18:00",
                description: "Hello World!"
            },
            {
                item_id: 4,
                name: "Agenda item - 4",
                location: "Disneyland",
                date: "17-08-2022",
                time: "18:00",
                description: "Hello World!"
            },
        ]);
    }, []);

    function onClickPlusSign() {
        setShowCreateItem(true);
    }

    function onClickAddBtn() {
        setShowCreateItem(false);
    }


    let noteItemArr = [];
    for (const item of agendaItem) {
        noteItemArr.push(<NoteItem key={item.item_id} item_id={item.item_id} item_name={item.name} item_location={item.location} item_desc={item.description} item_date={item.date} item_time={item.time} />);
    }
    return (
        <div id="NoteSlide">
            <button onClick={onClickPlusSign}>+</button>
            <div className="accordion" id="accordionExample">
                {noteItemArr}
                <NoteItemCreate isShow={showCreateItem} handleClick={onClickAddBtn}/>
            </div>
        </div>
    );
}