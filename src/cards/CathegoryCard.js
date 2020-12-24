import state from "../controller"
import Card from "./Card"

class CathegoryCard extends Card {
    createCard() {
        const card = super.createCard()

        card.classList.add("card-cathegory")

        card.addEventListener("click", () => {
            state.changeActivePage("WORDS-PAGE", card.id)
        })
        return card
    }
}

export default CathegoryCard