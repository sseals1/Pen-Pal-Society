// module is responsible for generting the html for the Topics heading and topics radio buttons
import { fetchTopics, getTopics } from "./DataAccess.js"
import { setTopics } from "./DataAccess.js"




//   export const Topics = () => {
    //      return `
    //     <h3>Topics</h3>
    //     ${
        //         topics.map(
            //             (topicsObj) => {
                //                 return `
                //               <input type="radio" id="topics" value="${topicsObj.id}" />${topicsObj.tyoe}
                //             `
                //           }
                //         )
                //       }
                //     </select>
                //     `
                //   }
                
                
                
export const Topics = () => {
    const topics = getTopics()
    let html = "<h3>Topics</h3>"
    // This is how you have been converting objects to <li> elements
    const listItems = topics.map(topicObj => {
        return `
            <input type="radio" name="topics" value="${topicObj.id}" /> ${topicObj.type}
        `
    })

    html += listItems.join("")
    html += ""
    
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topics") {
            setTopics(parseInt(event.target.value))
            
        }
    }
)