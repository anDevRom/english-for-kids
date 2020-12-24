import "../styles/cathegory-page.css"
import CathegoryCard from "../cards/CathegoryCard"

function renderCathegoryPage(cathegoryCards) {
    const page = document.createElement("div")
    page.classList.add("cathegory-page")

    cathegoryCards.forEach(card => {
        page.append((new CathegoryCard(card)).createCard())
    })
    return page
}

export default renderCathegoryPage