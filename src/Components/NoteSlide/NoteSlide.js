import { AgendaPage } from "./AgendaPage/AgendaPage";
import "./NoteSlide.css";
import { PlanPage } from "./PlanPage/PlanPage";

export function NoteSlide() {
    function setActivePage(e) {
        switch (e.target.innerHTML) {
            case "Plan":
                removeAllActiveClass();
                document.getElementById("planPage").classList.add("activePage");
                break;
            case "Agenda":
                removeAllActiveClass();
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
    }

    return (
        <div id="NoteSlide">
            <div className="pageBtn-container">
                <button onClick={setActivePage} className="pageBtn">Plan</button>
                <button onClick={setActivePage} className="pageBtn">Agenda</button>
            </div>
            <div>
                <PlanPage />
                <AgendaPage />
            </div>
        </div>
    )
}