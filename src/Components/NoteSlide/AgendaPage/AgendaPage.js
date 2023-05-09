import { useEffect, useState } from "react";
import { NoteItem } from "../PlanPage/NoteItem/NoteItem";

export function AgendaPage() {
    const [agendaItem, setAgendaItem] = useState([]);

    useEffect(() => {
        setAgendaItem([
            {
                item_id: 2,
                name: "Plan item - 2",
                location: "Disneyland",
                dateTime: "17-08-2022 18:00",
                description: "Hello World!",
                isAgenda: true
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

    return (
        <div id="agendaPage" className="page">
            Agenda
            <NoteItem />
        </div>
    );
}