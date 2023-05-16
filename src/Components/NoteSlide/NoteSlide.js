import { useEffect, useState } from "react";
import { AgendaPage } from "./AgendaPage/AgendaPage";
import "./NoteSlide.css";
import { PlanPage } from "./PlanPage/PlanPage";
import { addNoteItemByStation, deleteNoteItemById, getNoteItemByStation } from "../../Util/FetchUtil";

export function NoteSlide({
    station
}) {
    const [item, setItem] = useState([]);
    // {
    //     item_id: 0,
    //     station: "Disney",
    //     dateTime: 
    // }

    useEffect(() => {
        getNoteItemByStation(station).then(responseJson => {
            setItem(responseJson);
        });
    }, []);

    async function addItem(itemObj) {
        //fetch ADD
        try {
            const responseJson = await addNoteItemByStation(itemObj, station);
            const appendObj = {
                ...responseJson,
                station: station
            };
            setItem( prev => {
                return [
                    appendObj
                    ,...prev
                ]
            });
        } catch ( err ){
            console.log("Error catched");
            console.log(err);
        };
    }

    async function removeItem(id) {
        const responseJson = await deleteNoteItemById(id);
        setItem(oldArr => oldArr.filter(obj => obj.item_id !== id));

        //fetch DELETE
    }

    function toggleIsAgenda(id) {
        const deepCloneArr = JSON.parse(JSON.stringify(item));
        const objIndex = deepCloneArr.map(obj => obj.item_id).indexOf(id);
        deepCloneArr[objIndex].isAgenda = !deepCloneArr[objIndex].isAgenda;
        setItem(deepCloneArr);

        //fetch CHANGE
    }

    function setActivePage(e) {
        switch (e.target.innerHTML) {
            case "Plan":
                removeAllActiveClass();
                document.getElementsByClassName("pageBtn")[0].classList.add("pageBtn-active");
                document.getElementById("planPage").classList.add("activePage");
                break;
            case "Agenda":
                removeAllActiveClass();
                document.getElementsByClassName("pageBtn")[1].classList.add("pageBtn-active");
                document.getElementById("agendaPage").classList.add("activePage");
                break;
            default:
                console.log("Page Not Found");
        };
    }

    function removeAllActiveClass() {
        const pageList = document.getElementsByClassName("page");
        for (const page of pageList) {
            page.classList.remove("activePage");
        }

        const btnList = document.getElementsByClassName("pageBtn");
        for (const btn of btnList) {
            btn.classList.remove("pageBtn-active");
        }
    }

    function addShowSlide() {
        document.getElementById("NoteSlide").classList.add("showSlide");
    }

    function removeShowSlide() {
        document.getElementById("NoteSlide").classList.remove("showSlide");
    }

    return (
        <div id="NoteSlide" onMouseEnter={addShowSlide}>
            <div className="pageBtn-container">
                <button onClick={setActivePage} className="pageBtn pageBtn-active">Plan</button>
                <button onClick={setActivePage} className="pageBtn">Agenda</button>
                <button id="slideBtn" onClick={removeShowSlide} className="pageBtn">{"~>"}</button>
            </div>
            <div className="placeName">Disneyland</div>
            <div>
                <PlanPage itemList={item} addItemFunc={addItem} removeItemFunc={removeItem} toggleIsAgendaFunc={toggleIsAgenda} />
                <AgendaPage itemList={item} toggleIsAgendaFunc={toggleIsAgenda} />
            </div>
        </div>
    )
}