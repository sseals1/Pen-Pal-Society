

import { AuthorDropdown } from "./Author.js"
import { Topics } from "./Topics.js"
import { RecipientsDropdown } from "./Recipients.js"
import { letterBox } from "./LetterBox.js"




 export const PenPalForm = () => {

    let html = `
        <div class="field">
            ${AuthorDropdown()}
        </div>
        <div class="letterbox">
            ${letterBox()}
        </div>
        <div class="field">
            ${Topics()}
        </div>
        <div class="field">
            ${RecipientsDropdown()}
        </div>
        

        `
        // <button class="button" id="submitRequest">Submit Request</button>

    return html
}
