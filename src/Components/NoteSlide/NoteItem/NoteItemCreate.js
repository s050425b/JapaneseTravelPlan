export function NoteItemCreate(
    isShow,
    handleClick
) {
    console.log(handleClick+"!@!@!");
    return (
        <div className="accordion-item" style={isShow.isShow? {display: "block"} : {display: "none"}}>
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_create" aria-expanded="true" aria-controls="collapse_create">
                    Create
                </button>
            </h2>
            <div id="collapse_create" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>hello</p>
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
        </div>
    );
}