export default class Wrapper {
    domBody = document.body
    domContainer

    constructor() {
        //this.body('h1', 'Wrapper Loaded')
        let c = this.append('div')
        this.domContainer = c.el()
        c.to(this.domBody)
    }

    append(tag, content) {
        let el = document.createElement(tag)
        switch (typeof content) {
            case 'undefined':
                break
            case 'string':
                el.appendChild(document.createTextNode(content))
                break
            default:
                el.appendChild(content)
        }

        return {
            el: () => { return el },
            to: (parent) => {
                parent.appendChild(el)
            }
        }
    }

    body(tag, content) {
        this.append(tag, content).to(this.domBody)
    }

    add(tag, content) {
        this.append(tag, content).to(this.domContainer)
    }

    inject(obj) {
        try {
            obj.init(this)
        } catch (e) {
            console.warn('Attempted Wrapper injection on unsupported object.')
            this.body(obj.toString())
        }
    }
}