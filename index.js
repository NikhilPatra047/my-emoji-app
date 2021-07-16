let myEmojis = ["❤️", "😄", "🤎", "🔥"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const show = JSON.parse( localStorage.getItem("myEmojis") )
const deleteBtn = document.getElementById("delete-btn")

if(show) {
    for (let i = 0; i < show.length; i++) {
        myEmojis[i] = show[i]
    }
    console.log(myEmojis)
    renderEmojis(show)
} else {
    renderEmojis(myEmojis)
}

function renderEmojis(data) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = data[i]
        emojiContainer.append(emoji)
    }
}

function textToInput(need) {
    if (need === "push") {
            if (emojiInput.value) {
            myEmojis.push(emojiInput.value)
            localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
            emojiInput.value = ""
            renderEmojis(myEmojis)
        }
    } else {
            if (emojiInput.value) {
            myEmojis.unshift(emojiInput.value)
            localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
            emojiInput.value = ""
            renderEmojis(myEmojis)
        }
    }   
}

function Delete(need) {
    if (need === "pop") {
        myEmojis.pop()
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
    } else {
        myEmojis.shift()
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
    }
}

pushBtn.addEventListener("click", function(){
    textToInput("push")
})

unshiftBtn.addEventListener("click", function(){
    textToInput("unshift")
})

popBtn.addEventListener("click", function() {
    Delete("pop")
})

shiftBtn.addEventListener("click", function() {
    Delete("shift")
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myEmojis = []
    emojiContainer.innerHTML = ""
    renderEmojis(myEmojis)
})