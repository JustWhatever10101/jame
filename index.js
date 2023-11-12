var hitboxes = []
document.querySelector("*").addEventListener("mousedown",(e) => {
    hitboxes.forEach(hitbox => {
        if(e.x > hitbox.x && e.y > hitbox.y && e.x < hitbox.x + hitbox.w && e.y < hitbox.y + hitbox.h) {
            setTimeout(hitbox.onclick,0)
        }
    })
})
class Jame {
    constructor(parentobject) {
        this.screen = new JScreen(parentobject)
        this.eventhandler = new JEventHandler()
    }
    load() {
        if(localStorage.getItem("save")) {
            return JSON.parse(atob(localStorage.getItem("save")))
        } else {
            return undefined
        }
    }
    save(gamesave) {
        var savingstring = JSON.stringify(gamesave)
        localStorage.setItem("save", btoa(savingstring))
    }
}
class JKeyboardEvent {
    constructor(keypressed) {
        this.keypressed = keypressed
    }
}
class JEventHandler {
    constructor() {

    }
    onkey(method) {
        var keys = {};
        window.addEventListener("keydown", function(e){
            keys[e.key] = true;
        }, false);
        window.addEventListener('keyup', function(e){
            keys[e.key] = false;
        }, false);
        setInterval(() => {
            Object.entries(keys).forEach(entry => {
                const [key, value] = entry;
                if(value) {
                    method(new JKeyboardEvent(key))
                }
            })
        },5)
    }
    onevent(eventtype,method) {

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
        this.state = 0
        setInterval(function () {
            object.style.height = window.innerHeight + "px"
            object.style.width = window.innerWidth + "px"
            this.height = object.getBoundingClientRect().height
            this.width = object.getBoundingClientRect().width
        },5)
    }
    reset() {
        this.object.innerHTML = ""
    }
    draw(element) {
        this.object.append(element.obj)
    }
}
class HitBox {
    constructor(x,y,w,h,onclick) {
        this.onclick = onclick
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        hitboxes.push(this)
    }
}
class Rect {
    constructor(x,y,w,h,bgc,round) {
        var object = document.createElement("div")
        object.style.width = w + "px"
        object.style.height = h + "px"
        object.style.position = "fixed"
        object.style.left = x + "px"
        object.style.top = y + "px"
        object.style.padding = "0"
        object.style.position = "fixed"
        object.style.borderRadius = round + "px"
        object.style.backgroundColor = bgc
        this.round=round
        this.w = w
        this.h = h
        this.obj = object
    }
    attachimage(url) {
        var theimgage = document.createElement("img")
        theimgage.src = url
        theimgage.height = this.h
        theimgage.width = this.w
        theimgage.style.height = this.h
        theimgage.style.width = this.w
        theimgage.style.borderRadius = this.round + "px"
        this.obj.append(theimgage)
    }
}
class Button {
    constructor(x,y,w,h,txt,bgc,txc,round) {
        var object = document.createElement("button")
        object.style.width = w + "px"
        object.style.height = h + "px"
        object.style.position = "fixed"
        object.style.left = x + "px"
        object.style.top = y + "px"
        object.style.padding = "0"
        object.style.border = "0px solid black"
        object.style.borderRadius = round + "px"
        object.style.backgroundColor = bgc
        object.style.color = txc
        object.innerText = txt
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.obj = object
    }
    createHitBox(onclick) {
        new HitBox(this.x,this.y,this.w,this.h,onclick)
    }
    attachimage(url) {
        var theimgage = document.createElement("img")
        theimgage.src = url
        theimgage.height = this.h
        theimgage.width = this.w
        theimgage.style.height = this.h
        theimgage.style.width = this.w
        this.obj.append(theimgage)
    }
}
class CustomElement {
    constructor(element) {
        this.obj = element
    }
}

class TextElement {
    constructor(x,y,txt,font,fontsize, color) {
        var object = document.createElement("div")
        object.style.position = "fixed"
        object.style.left = x + "px"
        object.style.top = y + "px"
        object.style.padding = "0"
        object.style.color = color
        object.style.position = "fixed"
        object.style.fontFamily = font
        object.style.fontSize = fontsize + "px"
        object.innerText = txt
        this.obj = object
    }
}
