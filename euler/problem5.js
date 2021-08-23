export default class Problem {
    domCurrent

    static init(wrapper) {
        return new Problem(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper

        wrapper.add('h1', 'Smallest multiple')
        wrapper.link('Problem 5', 'https://projecteuler.net/problem=5')
        wrapper.add('p','2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.')
        wrapper.add('p','What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?')
        let c = wrapper.append('h3','0')
        this.domCurrent = c.el()
        c.to(wrapper.domContainer)
    }

    current(str) {
        this.domCurrent.innerHTML = str
    }

    main() {
        let checkfactors = (x) => {
            for (let a = 20; a > 1; a--) {
                if (x%a !== 0) return false
            }
            return true
        }

        for (let a = 2520; a < 1000000000; a+=20) {
            if (checkfactors(a)) {
                this.current('result: '+a)
                return
            }
        }
    }
}