import { getUsers, fetchUsers } from "./DataAccess.js"






export const AuthorDropdown = () => {

    const authors = getUsers() // getAuthors authors function is dec
  
    return `
    <h3>Author</h3>
    <select id="authorDropdown">
      <option value="0">--Choose Author--</option>
      ${
        authors.map(
          (authorsObj) => {
           
            return `
              <option value="${authorsObj.id}">${authorsObj.name}</option>
            `
          }
        )
      }
    </select>
    `
  }