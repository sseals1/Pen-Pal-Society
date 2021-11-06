import { fetchLetters, getLetters, sendLetters } from './DataAccess.js'



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const user = document.querySelector('select[id="authorDropdown"]').value
        const recipient = document.querySelector("select[id='recipientsDropdown']").value
        const text = document.querySelector("textarea[name='letterBox']").value
        const topic = document.querySelector("input[name='topics']").value
              
        // Make an object out of the user input
        const dataToSendToAPI = {
            user: parseInt(user),
            recipient: parseInt(recipient),
            text: text,
            topic: parseInt(topic),
        }

        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
})

export const RenderLetter = () => {
  const letters = getLetters()
 
  

  const lettersCreateString = (eachResultOfMap) => {
      return `<li> --${eachResultOfMap.user}  ${eachResultOfMap.text} -- ${eachResultOfMap.recipient} --${eachResultOfMap.topic}
      </li>`
  }

  let html = `
      <ul>
          ${letters.map(lettersCreateString).join("")}
      </ul>
  `

  return html
}




// export const RenderLetter = () => {
//         const letters = getLetters()
//         const findLetters = letters.map()
//                 return letters.id === Letter.lettersId
//             }
//         )

//             // const renderLetter = "",
//             // renderLetter += findLetters.user,
//             // renderLetter += findLetters.recipient,
//             // renderLetter += findLetters.text,
//             // renderLetter += findLetters.topic
            
//         // let totalCost = findWheels.price + findTechnologies.price + findInteriors.price + findColors.price
        
//         return `<li>
//         Order #${Letter.id} placed on ${Letter.user} costs ${Letter.text}
//         </li>`
//     }






export const SendLetterButtonHTML = () => {
  return `
    <button class="letter" id="sendLetter">Send Letter</button>
  `
}


