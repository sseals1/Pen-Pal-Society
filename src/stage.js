



export const FinalLetter = () => {
    const letters = getLetters()

    const lettersCreateString = (eachResultOfMap) => {
        return `<li>
        --${eachResultOfMap.user}  
        -- budget:$${eachResultOfMap.recipient} 
        --${eachResultOfMap.text}
        --${eachResultOfMap.topic}
        </li>`
    }

    let html = `
        <ul>
            ${letters.map(lettersCreateString).join("")}
        </ul>
    `

    return html
}

















// import { getLetters } from "./DataAccess.js"


// export const RenderLetter = (Letter) => {
    
    
//         const letters = getLetters()
        
//         const findLetters = letters.find(
//             (letters => {
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
    
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
        */
       
    //    export const ordersFunction = () => {
    //        const orders = getOrders()
    //        let html = "<ul>"
           
    //        const listItems = orders.map(buildNewOrder)
           
    //        html += listItems.join("")
    //        html += "</ul>"
           
    //     return html
    // }
