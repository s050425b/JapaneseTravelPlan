import { useState } from "react";
import "./AgendaItem.css";
import { Loading } from "../../smallComponent/Loading";
import { AddAgendaBtn } from "../../smallComponent/AddAgendaBtn";

export function AgendaItem({
    item_id,
    item_name,
    item_location,
    item_desc,
    item_dateTime,
    item_isAgenda,
    pageName,
    toggleIsAgendaFunc
}) {
    const [isLoad, setIsLoad] = useState(false);

    async function handleAddAgenda() {
        setIsLoad(true);
        await toggleIsAgendaFunc(item_id);
        setIsLoad(false);
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + item_id + "_agenda"} aria-expanded="true" aria-controls={"collapse" + item_id + "_agenda"}>
                    {item_name}
                </button>
            </h2>
            <div id={"collapse" + item_id + "_agenda"} className="accordion-collapse collapse" data-bs-parent={"#collapse_" + pageName}>
                <div className="accordion-body">
                    <dl className="row">
                        <dt className="col-sm-3">Location:</dt>
                        <dd className="col-sm-9">{item_location}</dd>

                        <dt className="col-sm-3">Date-Time:</dt>
                        <dd className="col-sm-9">{item_dateTime}</dd>

                        <dt className="col-sm-3">Description:</dt>
                        <dd className="col-sm-9">{item_desc}</dd>

                        <div className="agenda-item-btnGroup">
                            <AddAgendaBtn handleAddAgenda={handleAddAgenda} item_isAgenda={item_isAgenda} />
                            {isLoad && <Loading />}
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}