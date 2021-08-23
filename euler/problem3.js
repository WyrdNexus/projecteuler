export default class Problem {
    domCurrent

    static init(wrapper) {
        return new Problem(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper

        wrapper.add('h1', 'Largest prime factor')
        wrapper.link('Problem 3', 'https://projecteuler.net/problem=3')
        wrapper.add('p','The prime factors of 13195 are 5, 7, 13 and 29.')
        wrapper.add('p','What is the largest prime factor of the number 600851475143 ?')
        let c = wrapper.append('h3','0')
        this.domCurrent = c.el()
        c.to(wrapper.domContainer)
    }

    current(str) {
        this.domCurrent.innerHTML = str
    }

    main() {
        let msg = (str) => {
            console.log(str)
        }

        this.current("Skipping.")
        this.wrapper.add('p','This kind of problem requires time. Either lazy code, and lots of processing time, or a mathematics doctoral thesis, or somewhere in-between.')
        this.wrapper.add('p','Figuring out the sweet-spot in-between is a rabbithole of doctorial proportions.')
    }
}