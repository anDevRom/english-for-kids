import "../styles/end-game-page.css"
import success from "../img/ish/img/success.jpg"
import failure from "../img/ish/img/failure.jpg"

function renderEndGame(statistics) {
    const page = document.createElement("div")
    page.classList.add("end-game-page");

    page.innerHTML = `
        <div class="smile" style="
            width: 200px;
            height: 200px;
            background-repeat: no-repeat;
            background-size: contain; 
        "></div>
        <h1>Your score</h1>
        <div>Correct answers: ${statistics.correct}</div>
        <div>Mistakes: ${statistics.mistake}</div>
    `
    const smileBlock = page.querySelector(".smile")

    console.log(smileBlock + "smileBlock")
    console.log(success + "success")

    if (statistics.mistake > 0) {
        smileBlock.style.backgroundImage = `url(${failure})`
    } else {
        smileBlock.style.backgroundImage = `url(${success})`
    }

    return page
}

export default renderEndGame