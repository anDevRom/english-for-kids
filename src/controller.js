import store from "./model"
import { shuffle } from "./functions/shuffle"
import { playAudio } from "./functions/playAudio"
import correct from "./audio/game/correct.mp3"
import error from "./audio/game/error.mp3"
import failure from "./audio/game/failure.mp3"
import success from "./audio/game/success.mp3"
import starWin from "./img/ish/img/star-win.svg"
import starLose from "./img/ish/img/star.svg"

const state = {
    _activePage: {
        type: "CATHEGORY-PAGE",
        data: store.cathegoryCards
    },
    _activeCathegory: null,
    burgerMenu: false,
    playMode: false,
    gameSession: null,
    rerender: null,

    returnStartPage() {
        return {
            type: "CATHEGORY-PAGE",
            data: store.cathegoryCards
        }
    },

    changeMode() {
        if (this.gameSession !== null) {
            this.gameSession = null
        }
        this.playMode = !this.playMode
        this.rerender(this._activePage)
    },

    startGame() {
        const repeatButton = document.querySelector("#start-btn")
        repeatButton.textContent = "REPEAT"

        const statBar = document.querySelector(".stat-bar")

        const cards = Object.values(this._activePage.data)
        shuffle(cards)
        this.gameSession = {
            cards: cards,
            currentCard: null,
            correct: 0,
            mistake: 0,

            nextStep() {
                if (this.cards.length === 0) {
                    if (state.gameSession.mistake > 0) {
                        playAudio(failure)
                    } else {
                        playAudio(success)
                    }
                    statBar.innerHTML = ""
                    state.rerender({
                        type: "END-GAME-PAGE",
                        statistics: {
                            correct: state.gameSession.correct,
                            mistake: state.gameSession.mistake
                        }
                    })
                    this.gameSession = null
                } else {
                    this.currentCard = this.cards[this.cards.length - 1]
                    setTimeout(() => {
                        playAudio(this.currentCard.audio)
                    }, 500)
                }
            },

            checkClick(text) {
                if (this.currentCard.text === text) {
                    if (statBar.childNodes.length > 8) {
                        statBar.innerHTML = ""
                    }
                    this.correct++
                    playAudio(correct)
                    const starBlock = document.createElement("div")
                    starBlock.innerHTML = `
                        <div style="
                            width: 20px;
                            height: 20px;
                            background-size: contain;
                            background-image: url('${starWin}')
                        "></div>
                    `
                    statBar.append(starBlock)
                    return true
                } else {
                    if (statBar.childNodes.length > 8) {
                        statBar.innerHTML = ""
                    }
                    this.mistake++
                    playAudio(error)
                    const starBlock = document.createElement("div")
                    starBlock.innerHTML = `
                        <div style="
                            width: 20px;
                            height: 20px;
                            background-size: contain;
                            background-image: url('${starLose}')
                        "></div>
                    `
                    statBar.append(starBlock)
                    return false
                }
            },

            correctClickHandler() {
                this.cards.pop()
                this.nextStep()
            },
        }
    },

    subscriber(observer) {
        this.rerender = observer
    },

    changeActivePage(pageType, cardId) {
        switch (pageType) {
            case "CATHEGORY-PAGE":
                this._activePage.type = pageType
                this._activePage.data = store.cathegoryCards
                this.rerender(this._activePage)
                break
            case "WORDS-PAGE":
                this._activePage.type = pageType
                this._activePage.data = store.wordCards[cardId]
                this.rerender(this._activePage)
                break
        }
    },

    getActivePage() {
        return this._activePage
    }
}

export default state