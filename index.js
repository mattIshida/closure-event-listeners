// Globals
const colors = ['lightpink', 'lightblue', 'lightgreen']
let currentSelection

// DOM selectors
const colorList = document.querySelector('#color-list')
const votes = document.querySelector('#votes')
const voteButton = document.querySelector('#vote-btn')

// Render functions
function addColorToDOM(color){
    const choiceButton = document.createElement('button')
    choiceButton.textContent = color
    colorList.append(choiceButton)

    let voteCount = 0

    choiceButton.addEventListener('click', () => {
        currentSelection = color
        document.body.style.backgroundColor = color
        votes.textContent = `Current votes for ${color}: ${voteCount}`
    })

    voteButton.addEventListener('click', ()=>{
        if(currentSelection === color) {
            voteCount++;
            votes.textContent = `Current votes for ${color}: ${voteCount}`
        }
    })
}

// Initializers
colors.forEach(addColorToDOM)
