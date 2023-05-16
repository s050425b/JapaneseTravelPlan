import { useState } from "react";
import "./NoteItem.css";

export function NoteItem({
    item_id,
    item_name,
    item_location,
    item_desc,
    item_dateTime,
    item_isAgenda,
    pageName,
    toggleIsAgendaFunc,
    removeItemFunc
}) {
    const [isLoad, setIsLoad] = useState(false);

    function handleAddAgenda() {
        toggleIsAgendaFunc(item_id);
    }

    async function handleDeleteItem() {
        setIsLoad(true);
        await removeItemFunc(item_id);
        setIsLoad(false);
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + item_id} aria-expanded="true" aria-controls={"collapse" + item_id}>
                    {item_name}
                </button>
            </h2>
            <div id={"collapse" + item_id} className="accordion-collapse collapse" data-bs-parent={"#collapse_" + pageName}>
                <div className="accordion-body">
                    <dl className="row">
                        <dt className="col-sm-3">Location:</dt>
                        <dd className="col-sm-9">{item_location}</dd>

                        <dt className="col-sm-3">Date-Time:</dt>
                        <dd className="col-sm-9">{item_dateTime}</dd>

                        <dt className="col-sm-3">Description:</dt>
                        <dd className="col-sm-9">{item_desc}</dd>

                        <button className="addAgendaBtn btn btn-outline-primary" onClick={handleAddAgenda}>{item_isAgenda ? "Remove from Agenda" : "Add to Agenda"}</button>
                        <button className="deleteItemBtn btn btn-outline-danger" onClick={handleDeleteItem}>Delete Item</button>
                        { isLoad && <div className="spinner-grow" role="status"></div> }
                    </dl>
                </div>
            </div>
        </div>
    );
}