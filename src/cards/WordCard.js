import state from "../controller"
import Card from "./Card"
import "../styles/WordCard.css"
import { playAudio } from "../functions/playAudio"

class WordCard extends Card {
    constructor(cardParameters) {
        super(cardParameters)
        this.translation = cardParameters.translation
        this.audio = cardParameters.audio
    }
    createCard() {
        const card = super.createCard()

        if (!state.playMode) {
            card.classList.add("word-card")
            const cardFront = card.querySelector(".card-front")
            cardFront.addEventListener("click", () => {
                playAudio(this.audio)
            })
            const translatonBtn = document.createElement("div")
            translatonBtn.textContent = "=>"
            translatonBtn.classList.add("rotate-btn")
            
            const infBlockFront = cardFront.querySelector(".card__inf-block")
            infBlockFront.append(translatonBtn)

            translatonBtn.addEventListener("click", () => {
                card.classList.toggle("rotated")
                setTimeout(() => {
                    cardFront.classList.toggle("hidden")
                }, 150)
                setTimeout(() => {
                    backCardSide.classList.toggle("hidden")
                }, 250)
            })

            const backCardSide = document.createElement("div")
            backCardSide.classList.add("back-side-card", "hidden")
            backCardSide.textContent = this.translation
            card.append(backCardSide)
            backCardSide.addEventListener("mouseleave", () => {
                card.classList.toggle("rotated")
                setTimeout(() => {
                    cardFront.classList.toggle("hidden")
                }, 250)
                setTimeout(() => {
                    backCardSide.classList.toggle("hidden")
                }, 150)
            })

        } else {
            const infBlock = card.querySelector(".card__inf-block")
            infBlock.style.display = "none"
            const wall = document.createElement("div")
            wall.classList.add("wall", "hidden")
            card.classList.add("word-card")
            card.append(wall)
            card.addEventListener("click", () => {
                if (state.gameSession !== null) {
                    if (state.gameSession.checkClick(this.text)) {
                        card.style.transform = "scale(0)"
                        // card.style.visibility = "hidden"
                        state.gameSession.correctClickHandler()
                    }
                }
            })
        }
        
        return card
    }
}

export default WordCard