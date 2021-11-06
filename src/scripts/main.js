import { fetchUsers , fetchTopics, fetchLetters } from "./DataAccess.js" // import the fetchAuthors function from data access that will fetch data from the API
import { PenPal } from "./PenPal.js"



const mainContainer = document.querySelector("#container") // declare the variable mainContainer and set its value = to the id of #"container"

const render = () => {
    fetchUsers()
    .then( () => fetchTopics())
    .then( () => fetchLetters())
    .then( () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
        console.log("The Button is re-rendering the page")
    }
)

