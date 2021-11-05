import { PenPalForm } from "./PenPalForm.js"
import { AuthorDropdown } from "./Author.js"
import { letterBox } from "./LetterBox.js"
import { Topics } from "./Topics.js"
import { RecipientsDropdown } from "./Recipients.js"
import { SendLetterButtonHTML } from "./SendLetterButton.js"




export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="penPalForm">
    ${PenPalForm()}
    </section>
    <h2>Letters</h2>
    
    
    
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
    // ${SendLetterButtonHTML()}
    // ${PenPalForm()}
}