import { fetchLetters, getLetters, sendLetters } from './DataAccess.js'

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const author = document.querySelector("input[id='authorDropdown']").value
        const recipient = document.querySelector("input[id='recipientsDropdown']").value
        const text = document.querySelector("input[name='letterBox']").value
        const topic = document.querySelector("input[name='topics']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: author,
            address: recipient,
            budget: text,
            neededBy: topic,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})



export const SendLetterButtonHTML = () => {
  return `
    <button id="sendLetter">Send Letter</button>
  `
}
