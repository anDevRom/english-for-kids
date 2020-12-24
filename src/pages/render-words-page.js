import "../styles/words-page.css"
import WordCard from "../cards/WordCard"

function renderWordPage(cathegoryWords) {
    const page = document.createElement("div")
    page.classList.add("words-page");

    (Object.values(cathegoryWords)).forEach(card => {
        page.append((new WordCard(card)).createCard())
    })

    return page
}

export default renderWordPage