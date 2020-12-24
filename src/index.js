import "./styles/styles.css";
import state from "./controller"
import renderCathegoryPage from "./pages/render-cathegory-page";
import renderWordsPage from "./pages/render-words-page"
import renderEndGamePage from "./pages/render-end-game-page"
import { playAudio } from "./functions/playAudio";

const mainContentBlock = document.querySelector("#root")
const header = document.querySelector(".header")
const footer = document.querySelector(".footer") 

const burgerBtn = document.querySelector(".burger")
const burgerMenu = document.querySelector(".menu")

const modeBtn = document.querySelector("#mode-btn")
const trainTextBlock = document.querySelector(".train")
const playTextBlock = document.querySelector(".play")
const startBtn = document.querySelector("#start-btn")

//  Burger menu
const menuElements = document.querySelectorAll("li")
menuElements.forEach(ref => {
    ref.addEventListener("click", () => {
        state.changeActivePage(ref.dataset.pageType, ref.dataset.pageId)
    })
})

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("menu-active")
    burgerBtn.classList.toggle("burger-active")
})

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.remove("menu-active")
    burgerBtn.classList.remove("burger-active")
})

//  Modes
modeBtn.addEventListener("click", () => {
    document.querySelector(".stat-bar").innerHTML = ""
    startBtn.classList.remove("hidden")
    if (state.getActivePage().type === "WORDS-PAGE") {
        state.changeMode()
        modeBtn.classList.toggle("mode-btn-reverse")
        setTimeout(() => {
            trainTextBlock.classList.toggle("hidden")
            playTextBlock.classList.toggle("hidden")
        }, 200)
        startBtn.classList.toggle("hidden-text")
        } else {
            document.querySelector(".stat-bar").textContent = "Сначала необходимо выбрать категорию"
            setTimeout(() => {
                document.querySelector(".stat-bar").innerHTML = ""
            }, 3000)
        }
    })

startBtn.addEventListener("click", () => {
    if (state.gameSession === null) {
        state.startGame()
        state.gameSession.nextStep()
    } else {
        playAudio(state.gameSession.currentCard.audio)
    }
    
})

function renderContentBlock(activePage) {
    switch (activePage.type) {
        case "CATHEGORY-PAGE":
            mainContentBlock.innerHTML = ""
            mainContentBlock.append(renderCathegoryPage(activePage.data))
            break
        case "WORDS-PAGE":
            mainContentBlock.innerHTML = ""
            mainContentBlock.append(renderWordsPage(activePage.data))
            break
        case "END-GAME-PAGE": 
            mainContentBlock.innerHTML = ""
            header.classList.toggle("hidden")
            footer.classList.toggle("hidden")
            mainContentBlock.append(renderEndGamePage(activePage.statistics))
            setTimeout(() => {
                document.location.reload()
                // mainContentBlock.innerHTML = ""
                // header.classList.toggle("hidden")
                // footer.classList.toggle("hidden")
                // mainContentBlock.append(renderCathegoryPage(state.returnStartPage().data))
            }, 5000)
            break
        case "STATISTICS-PAGE":
            mainContentBlock.innerHTML = "__STATISTICS__"
            // mainContentBlock.append(renderWordsPage(activePage.data))
            break
    }
}

renderContentBlock(state.getActivePage())

state.subscriber(renderContentBlock)