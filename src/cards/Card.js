import "../styles/Card.css"

class Card {
    constructor(cardParameters) {
        this.text = cardParameters.text
        this.img = cardParameters.img
        this.id = cardParameters.id
    }

    createCard() {
        const card = document.createElement("div")
        card.setAttribute("id", this.id)
        card.classList.add("card")

        const cardFrontSide = document.createElement("div")
        cardFrontSide.classList.add("card-front")

        cardFrontSide.style.backgroundImage = `url(${this.img})`

        const infBlock = document.createElement("div")
        infBlock.classList.add("card__inf-block")
        
        const nameCard = document.createElement("div")
        nameCard.textContent = this.text
        infBlock.append(nameCard)

        card.append(cardFrontSide)
        cardFrontSide.append(infBlock)
        return card
    }
}

export default Card