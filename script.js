const form = document.getElementById('form')
const search = document.getElementById('search')

async function fetchWord(query){
    try {
        //form.addEventListener('submit', (e) => {
            // e.preventDefault()
            // document.getElementById('result').innerHTML = search.value
            // let query = search.value
            // console.log(query)
            // let word = `${query}`
            let word = query
            let resp = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=d98b1a5c-5859-42b0-8192-d4c9abea7390`)
            let data = await resp.json()
            //console.log(data[0].fl)
            //console.log(data[0].shortdef[0])
            console.log(data)
            displayData(data)
        //})
        

        
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    //document.getElementById('result').innerHTML = search.value
    let query = search.value
    //console.log(query)
    fetchWord(query)
})


function displayData(data){
    console.log(data)
    let container = createElement('div', 'container')
    let card = createElement('div', 'card')
    let title = createElement('h5', 'card-title')
    title.innerHTML = data[0].fl
    let body = createElement('p', 'card-body')
    body.innerHTML = data[0].shortdef[0]

    let card1 = createElement('div', 'card')
    let title1 = createElement('h5', 'card-title')
    title1.innerHTML = data[1].fl
    let body1 = createElement('p', 'card-body')
    body1.innerHTML = data[1].shortdef[0]

    let card2 = createElement('div', 'card')
    let title2 = createElement('h5', 'card-title')
    title2.innerHTML = data[2].fl
    let body2 = createElement('p', 'card-body')
    body2.innerHTML = data[2].shortdef[0]

    card.append(title,body)
    card1.append(title2,body2)
    card2.append(title2,body2)
    content.append(card, card1, card2)
    document.body.append(container)
}

function createElement(ele, eleClass){
    let element = document.createElement(ele)
    element.setAttribute('class', eleClass)
    return element
}


