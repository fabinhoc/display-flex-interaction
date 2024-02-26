document.addEventListener('keydown', handleKeyDown);

const justifyContents = ['flex-start', 'center', 'flex-end'];
const alignItems = ['flex-start', 'center', 'flex-end'];

const element = document.getElementById('area')
element.style.justifyContent = justifyContents[1];
element.style.alignItems = alignItems[1];
document.getElementById("positionContent").innerText = justifyContents[1];
document.getElementById("positionAlign").innerHTML = alignItems[1];

function handleKeyDown(event) {
    digitPressed(event.keyCode)
}

function digitPressed(digit)
{
    const element = document.getElementById('area')
    let response = {
        alignItems: alignItems[1],
        justifyContents: justifyContents[1]
    }
    if (digit === 13 || digit === 32) {
        response = digitEnterPressed(element)
    }

    if (digit === 40) {
        response = digitArrowDownPressed(element)
    }

    if (digit === 37) {
        response = digitArrowLeftPressed(element)
    }

    if (digit === 39) {
        response = digitArrowRightPressed(element)
    }

    if (digit === 38) {
        response = digitArrowUpPressed(element)
    }

    document.getElementById("positionAlign").innerHTML = response.alignItems
    document.getElementById("positionContent").innerText = response.justifyContents
}

function digitEnterPressed(element) {
    element.style.justifyContent = justifyContents[1];
    element.style.alignItems = alignItems[1];
    
    return {
        alignItems: alignItems[1],
        justifyContents: justifyContents[1]
    }
    
}

function digitArrowDownPressed(element) {
    const justifyContent = element.style.justifyContent;
    const actualPosition = element.style.alignItems;
    const findPosition = alignItems.findIndex(item => actualPosition === item);
    const alignItem = alignItems[(findPosition + 1) % alignItems.length]
    element.style.alignItems = alignItem;

    return {
        alignItems: alignItem,
        justifyContents: justifyContent
    }
}

function digitArrowLeftPressed(element) {
    const alignItem = element.style.alignItems;
    const actualPosition = element.style.justifyContent;
    const findPosition = justifyContents.findIndex(item => actualPosition === item);
    let nextPosition = (findPosition - 1) % justifyContents.length;
    if (nextPosition < 0) {
        nextPosition = justifyContents.length - 1;
    }
    element.style.justifyContent = justifyContents[nextPosition]

    return {
        alignItems: alignItem,
        justifyContents: justifyContents[nextPosition]
    }
}

function digitArrowRightPressed(element) {
    const alignItem = element.style.alignItems;
    const actualPosition = element.style.justifyContent;
    const findPosition = justifyContents.findIndex(item => actualPosition === item);
    let nextPosition = (findPosition + 1) % justifyContents.length;
    element.style.justifyContent = justifyContents[nextPosition]

    return {
        alignItems: alignItem,
        justifyContents: justifyContents[nextPosition]
    }
}

function digitArrowUpPressed(element) {
    const justifyContent = element.style.justifyContent;
    const actualPosition = element.style.alignItems;
    let findPosition = alignItems.findIndex(item => actualPosition === item);
    let nextPosition = (findPosition - 1) % justifyContents.length;
    if (nextPosition < 0) {
        nextPosition = justifyContents.length - 1;
    }
    element.style.alignItems = alignItems[nextPosition]

    return {
        alignItems: alignItems[nextPosition],
        justifyContents: justifyContent
    }
}