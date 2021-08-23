export default class Blank {
    static init(wrapper) {
        return new Blank(wrapper)
    }

    constructor(wrapper) {
        this.wrapper = wrapper
        wrapper.add('h1', 'Blank Dummy Script')
        wrapper.add('h3','nothing to see here')
    }

    main() {
        // code goes here
        console.log('no code to run')
    }
}