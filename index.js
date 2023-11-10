class JButton {
    constructor(x,y,w,h,txt,bgc,txc,round) {

    }
}
class JScreen {
    constructor(object) {
        this.object = object
        object.style.position = "fixed"
        object.style.height = window.innerHeight + "px"
        object.style.width = window.innerWidth + "px"
        object.innerHTML = ""
        object.style.backgroundColor = "black"
        object.style.overflow = "hidden"
        this.height = object.getBoundingClientRect().height
        this.width = object.getBoundingClientRect().width
        setInterval(function () {
            object.style.height = window.innerHeight + "px"
            object.style.width = window.innerWidth + "px"
            this.height = object.getBoundingClientRect().height
            this.width = object.getBoundingClientRect().width
        },5)
    }
    drawback(color) {
        this.object.backgroundColor = color
    }
    reset() {
        returningscreen.drawingobject.innerHTML = ""
    }
    drawroundedrect(x,y,w,h,color,round) {
        var object = document.createElement("div")
        object.style.width = w + "px"
        object.style.height = h + "px"
        object.style.position = "fixed"
        object.style.left = x + "px"
        object.style.top = y + "px"
        object.style.borderRadius = round + "px"
        object.style.backgroundColor = color
        this.object.append(object)
    }
    drawrect(x,y,w,h,color) {
        var object = document.createElement("div")
        object.style.width = w + "px"
        object.style.height = h + "px"
        object.style.position = "fixed"
        object.style.left = x + "px"
        object.style.top = y + "px"
        object.style.backgroundColor = color
        this.object.append(object)
    }
    drawcustomelement(element) {
        this.object.append(element)
    }
}
class Jame {
    constructor(parentobject) {
        this.screen = new JScreen(parentobject)
        this.gamesave = {}
    }
    load() {
        if(localStorage.getItem("save")) {
            this.gamesave = JSON.parse(atob(localStorage.getItem("save")))
            return true
        } else {
            return false
        }
    }
    save() {
        var gamesave = this.gamesave
        var savingstring = JSON.stringify(gamesave)
        localStorage.setItem("save", btoa(savingstring))
    }
}