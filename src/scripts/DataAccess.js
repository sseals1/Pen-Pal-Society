const API = "http://localhost:8088"
const container = document.querySelector("#container") 

const applicationState = {
    users: [],
    topics: [],
    letters: [],

    userChoices: 
    {
        topicRadioChoice: 0
    }

    }




export const fetchUsers = () => { // fetchRequest function that fetches data from API 
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (Author) => {
                // Store the external state in application state
                applicationState.users = Author
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
            container.dispatchEvent(new CustomEvent("stateChanged"))
        })
}





export const getUsers = () => {
    return applicationState.users.map(fetchUsers => ({ ...fetchUsers }))
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

export const setTopics = (id) => {
     applicationState.userChoices.topicRadioChoice = id
}
