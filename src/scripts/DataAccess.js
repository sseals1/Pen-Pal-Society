const API = "http://localhost:8088"


const applicationState = {
    authors: [],
    topics: [],
    recipients: [],
    letters: []
}



export const fetchUsers = () => { // fetchRequest function that fetches data from API 
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (Author) => {
                // Store the external state in application state
                applicationState.authors = Author
            }
        )
}

export const fetchTopics = () => { // fetch Topics array from API 
    return fetch(`${API}/topics`)
    .then(response => response.json())  
    .then(
        (Topic) => {
            applicationState.topics = Topic
        }

    )
}


export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (Letters) => {
            applicationState.letters = Letters
        }
    )
}
export const sendLetters = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {

        })
}





export const getUsers = () => {
    return applicationState.authors.map(fetchAuthors => ({ ...fetchAuthors }))
}


export const getTopics = () => {
    return applicationState.topics.map(fetchTopics => ({ ...fetchTopics }))
}

export const getRecipients = () => {
    return applicationState.recipients.map(fetchRecipients => ({ ...fetchRecipients }))
}

export const getLetters = () => {
    return applicationState.letters.map(fetchLetters => ({ ...fetchLetters }))
}

