export function NoteItem({
    item_id,
    item_name,
    item_location,
    item_desc,
    item_date,
    item_time
}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+item_id} aria-expanded="true" aria-controls={"collapse"+item_id}>
                    {item_name}
                </button>
            </h2>
            <div id={"collapse"+item_id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>Location: {item_location}</p>
                    <p>Date: {item_date}</p>
                    <p>Time: {item_time}</p>
                    <p>Description: {item_desc}</p>
                </div>
            </div>
        </div>
    );
}