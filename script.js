const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'wow. that’s so funny i almost choked on my Hershey’s bar that uses fresh milk delivered directly from local farms. The process was developed by Milton Hershey and produced the first mass produced chocolate in the United States. As a result, the Hershey flavor is widely recognized in the United States, but less so internationally, especially in areas where European chocolates are more widely available.'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)