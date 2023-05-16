export function NoteItemCreate({
    isShow,
    handleClick,
    handleCancel,
    isLoad
}) {
    function handleSubmit() {
        const nameInput = document.getElementById("nameInput").value;
        const locationInput = document.getElementById("locationInput").value;
        const dateTimeInput = document.getElementById("date-timeInput").value;
        const descInput = document.getElementById("descInput").value;
        const isAgenda = false;

        if (!(nameInput && locationInput && dateTimeInput && descInput)) {
            alert("All field should be filled.");
            return;
        }

        handleClick({
            name: nameInput,
            location: locationInput,
            dateTime: dateTimeInput,
            description: descInput,
            isAgenda: isAgenda
        });
    }

    return (
        <div className="accordion-item" style={isShow ? { display: "block" } : { display: "none" }}>
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_create" aria-expanded="true" aria-controls="collapse_create">
                    Create
                </button>
            </h2>
            <div id="collapse_create" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control form-control-sm" id="nameInput" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="locationInput" className="form-label">Location</label>
                            <input type="text" className="form-control form-control-sm" id="locationInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date-timeInput" className="form-label">Date-Time</label>
                            <input type="datetime-local" className="form-control form-control-sm" id="date-timeInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descInput" className="form-label">Description</label>
                            <input type="text" className="form-control form-control-sm" id="descInput" />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        <button onClick={handleCancel} className="btn btn-primary">Cancel</button>
                        {
                            isLoad && <div className="spinner-grow" role="status"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}