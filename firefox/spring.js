const svg = document.querySelector(".js-calendar-graph-svg")
const g = svg.querySelector('g').querySelectorAll('g')


g.forEach((v) => {
    const rects = v.querySelectorAll('rect')
    rects.forEach((rect) => {
        switch (rect.getAttribute("fill")) {
            case "#c6e48b":
                rect.setAttribute("fill", "#ffdbff")
                break
            case "#7bc96f":
                rect.setAttribute("fill", "#efb5ef")
                break
            case "#239a3b":
                rect.setAttribute("fill", "#d88fd6")
                break
            case "#196127":
                rect.setAttribute("fill", "#aa0dbb")
                break
        }
    })
})

const legend = document.querySelector(".legend")
legend.querySelectorAll("li").forEach((li) => {
    switch (li.getAttribute("style")) {
        case "background-color: #c6e48b":
            li.setAttribute("style", "background-color: #ffdbff")
            break
        case "background-color: #7bc96f":
            li.setAttribute("style", "background-color: #efb5ef")
            break
        case "background-color: #239a3b":
            li.setAttribute("style", "background-color: #d88fd6")
            break
        case "background-color: #196127":
            li.setAttribute("style", "background-color: #aa0dbb")
            break
    }
})
