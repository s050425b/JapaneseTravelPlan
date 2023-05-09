import "./NoteItem.css";

export function NoteItem({
    item_id,
    item_name,
    item_location,
    item_desc,
    item_dateTime,
    item_isAgenda
}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + item_id} aria-expanded="true" aria-controls={"collapse" + item_id}>
                    {item_name}
                </button>
            </h2>
            <div id={"collapse" + item_id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <dl class="row">
                        <dt class="col-sm-3">Location:</dt>
                        <dd class="col-sm-9">{item_location}</dd>

                        <dt class="col-sm-3">Date-Time:</dt>
                        <dd class="col-sm-9">{item_dateTime}</dd>

                        <dt class="col-sm-3">Description:</dt>
                        <dd class="col-sm-9">{item_desc}</dd>

                        <button className={"addAgendaBtn btn " + (item_isAgenda ? "btn-outline-danger" : "btn-outline-success")} >{item_isAgenda ? "Remove from Agenda" : "Add to Agenda"}</button>
                    </dl>
                </div>
            </div>
        </div>
    );
}