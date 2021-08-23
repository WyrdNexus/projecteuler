export default class Problem1 {
    domCurrent

    static init(wrapper) {
        return new Problem1(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper

        wrapper.add('h1', 'Multiples of 3 or 5')
        wrapper.link('Problem 1', 'https://projecteuler.net/problem=1')
        wrapper.add('p','If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.')
        wrapper.add('p','Find the sum of all the multiples of 3 or 5 below 1000.')
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

        this.current("result : "+ total)
    }
}