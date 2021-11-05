import { getUsers } from"./DataAccess.js"




export const RecipientsDropdown = () => {

    const recipients = getUsers()
  
    return `    
    <h3>Recipient</h3>
    <select id="recipientsDropdown">
      <option value="0">--Choose Recipient--</option>
      ${
        recipients.map(
          (recipientObj) => {
            return `
              <option value="${recipientObj.id}">${recipientObj.name}</option>
            `
          }
        )
      }
    </select>
    `
  }