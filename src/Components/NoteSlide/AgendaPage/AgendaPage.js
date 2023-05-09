import { useEffect, useState } from "react";
import { AgendaItem } from "./AgendaItem/AgendaItem";

export function AgendaPage({
    itemList,
    toggleIsAgendaFunc
}) {

    let noteItemArr = [];
    for (const item of itemList.filter(obj => obj.isAgenda)) {
        noteItemArr.push(<AgendaItem key={item.item_id + "_agenda"} pageName="agenda" item_id={item.item_id} item_name={item.name} item_location={item.location} item_desc={item.description} item_dateTime={item.dateTime} item_isAgenda={item.isAgenda} toggleIsAgendaFunc={toggleIsAgendaFunc}/>);
    }

    return (
        <div id="agendaPage" className="page">
            <div className="accordion" id="collapse_agenda">
                {noteItemArr}
            </div>
            
        </div>
    );
}