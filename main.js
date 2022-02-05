var isPainting = false

function paint(x, y) {
    var dot = document.createElement("div")

    x -= ($("#size-inp").value - 1) / 2
    y -= ($("#size-inp").value - 1) / 2

    dot.className = "dot new-dot"
    dot.style.top = `${y}px`
    dot.style.left = `${x}px`
    dot.style.width = `${$("#size-inp").value}px`
    dot.style.height = `${$("#size-inp").value}px`
    dot.style.background = $("#color-inp").value

    $("#main").appendChild(dot)
}

$("#main").onmousedown = function () {
    isPainting = true
}

$("#main").onmouseup = function () {
    isPainting = false
}

$("#main").onmousemove = function (e) {
    if (isPainting) {
        paint(e.clientX, e.clientY)
    }
}

$("#clear-btn").onclick = function () {
    $("#main").innerHTML = ""
}