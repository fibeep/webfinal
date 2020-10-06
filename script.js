// The headline element
const display = document.querySelector('#display')
// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// Input - Enter Text
const enterText = document.querySelector('#enter-text')
// Input Color
const inputColor = document.querySelector('#input-color')
// Input bg Color
const bgColor = document.querySelector('#input-bg-color')
// Chose Font 
const font = document.querySelector('#font-selector')
// Affect bg Color
const headDisplay = document.querySelector('#headline-display')

//show font
const showFont = document.querySelector('#show-font')
// show text color
const showColor = document.querySelector('#show-color')
// show back color
const showBgColor = document.querySelector('#show-bg-color')

// Font Weight Choser
const weight = document.querySelector('#font-weight')
// Show Weight
const showWeight = document.querySelector('#show-weight')

// Font Style Choser
const style = document.querySelector('#font-style')
// Show Style
const showStyle = document.querySelector('#show-style')

inputSize.addEventListener('input', handleInput)
showSize.addEventListener('input', handleInput)
enterText.addEventListener('input', editText)
inputColor.addEventListener('input', fontColor)
bgColor.addEventListener('input', backyColor)
font.addEventListener('input', handleInput)
weight.addEventListener('input', handleInput)
style.addEventListener('input', handleInput)


function handleInput() {
    // get the font size:
    const fontSize = inputSize.value + 'px'
    // Set the style 
    display.style.fontSize = fontSize
    // Show the size
    showSize.innerHTML = fontSize
    
        
    // Get Font Color
    const fColor = inputColor.value
    // Set Color
    display.style.color = fColor
    //Show Color --> NEEDS WIP
    showColor.innerHTML = fColor

    //Get font Family
    const fontFam = font.value
    // Set font Family - NEEDS IMPROVEMENT
    display.style.fontFamily = fontFam
    // Show Family
    showFont.innerHTML = fontFam
    
    // get weight
    const getWeight = weight.value
    // set weight
    display.style.fontWeight = getWeight
    // display weight
    showWeight.innerHTML = getWeight

    //get style
    const getStyle = style.value
    // set style
    display.style.fontStyle = getStyle
    // display style
    showSize.innerHTML = getStyle

}

function editText() {
    // Get Text 
    const getText = enterText.value
    // Set Text
    display.innerHTML = getText
}

function fontColor () {
    // Get Font Color
    const fColor = inputColor.value
    // Set Color
    display.style.color = fColor
    //Show Color
    showColor.innerHTML = fColor
}

function backyColor() {
    // Get background Color
    const backColor = bgColor.value
    // Set Bg Color
    headDisplay.style.backgroundColor = backColor

    // Show bg color - WIP
    showBgColor.innerHTML = backColor
}