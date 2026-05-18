class DynamicArray {
    arr: number[]
    capacity: number
    length: number
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.length = 0
        this.arr = new Array(capacity)
    }

    /**
     * @param {number} i
     * @returns {number} 
     */
    get(i: number): number {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize()
        }
        this.arr[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.length--
        return this.arr[this.length]
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
        let newArr = new Array(this.capacity)
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i]
        }
        this.arr = newArr
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}