export default class Problem1 {
    domCurrent

    static init(wrapper) {
        return new Problem1(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper

        wrapper.append('h1', 'Current Step')
        let c = wrapper.append('h3','0')
        this.domCurrent = c.el()
        c.to(wrapper.domContainer)
    }

    current(str) {
        this.domCurrent.innerHTML = str
    }

    main() {
        let msg = (str) => {
            //this.current(str)
            console.log(str)
        }

        let total = 0
        for (let i = 3; i < 1000; i+=3) {
            if (i>1500) break
            if (i%5 !== 0) {
                total += i
            }
            msg(`3 ${i}`)
        }

        for (let i = 5; i < 1000; i+=5) {
            if (i>1500) break
            total += i
            msg(`5 ${i}`)
        }

        this.wrapper.add('h3',"result : "+ total)
    }
}