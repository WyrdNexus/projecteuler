export default class Problem {
    domCurrent

    static init(wrapper) {
        return new Problem(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper

        wrapper.add('h1', 'Largest palindrome product')
        wrapper.link('Problem 4', 'https://projecteuler.net/problem=4')
        wrapper.add('p','A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.')
        wrapper.add('p','Find the largest palindrome made from the product of two 3-digit numbers.')
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

        let isPalindrome = (n) => {
            let x = String(n)
            let half = Math.floor(x.length / 2)
            let left = x.slice(0, half)
            let right = x.slice(half * -1).split('').reverse().join('');
            return (left === right)
        }

        let current = 0
        for (let a = 999; a > 900; a--) {
            for (let b = a; b > 900; b--) {
                let c = a * b
                console.log(`a: ${a} -- b: ${b} -- c: ${c}`)

                if (isPalindrome(c) && c > current) {
                    current = c
                    this.wrapper.add('p',`a: ${a} -- b: ${b} -- c: ${c}`)
                    this.current('result: '+c)
                }
            }
        }
    }
}