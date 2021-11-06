import { PenPalForm } from "./PenPalForm.js"
import { SendLetterButtonHTML } from "./SendLetterButton.js"
import { RenderLetter } from "./SendLetterButton.js"




export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="penPalForm">
    ${PenPalForm()}
    </section>
    <section class="letterButton">
    ${SendLetterButtonHTML()}
    </section>
    <section class="letterBottom">
    <h2>Letters</h2>
    </section>

    <section class="renderLetter">
    ${RenderLetter()}
    </section>
    
    
    
    `
    // <section class="penPalForm">
    // ${AuthorDropdown()}
    // <section class="letter">
    // ${letterBox()}
    // <section class="topics">
    // ${Topics()}
    // <section class="recipients">
    // ${RecipientsDropdown()}
    // <section class="sendLetter">
    // ${PenPalForm()}
}