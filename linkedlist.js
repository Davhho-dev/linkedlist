import Node from "../linkedlist/node.js"

function LinkedList() {
    let head = null
    let count = 0
    
    const append = (value) => {
        count++
        const node = new Node (value)
        if (head === null) return (head = node)
        else {
            let pointer = head
            while (pointer.next !== null) {
                pointer = pointer.next
            }
            pointer.next = node
        }
    }

    const prepend = (value) => {
        count++
        let temp = head
        const node = new Node (value)
        if (head === null) return (head = node)
        else {
            let temp = head
            head = node
            node.next = temp
        }
    }

    const size = () => {
        return count
    }

    const headNode = () => {
        return head
    }

    const tailNode = () => {
        let tail = head
        if(head === null) return null
        while (tail.next !== null) {
            tail = tail.next
        }
        return tail
    }

    const at = (index) => {
        let pointer = head;
        if (index > (count - 1)) return null
        else {
            for(let i = 0; i < index; i++) {
                pointer = pointer.next
            }
            return pointer
        }
    }

    const pop = () => {
        if(head === null) return null
        count--
        let pointer = head
        let current = pointer
        while (pointer.next !== null) {
            current = pointer
            pointer = pointer.next
        }
        current.next = null
    }

    const contains = (value) => {
        let pointer = head;
        while (pointer !== null) {
            if (pointer.value === value) return true
            else pointer = pointer.next
        }
        return false
    }

    const find = (value) => {
        let index = 0
        let pointer = head
        while (pointer !== null) {
            if (pointer.value === value) return index
            else {
                pointer = pointer.next
                index++
            }
        }
        return null
    }

    const toString = () => {
        let str = ""
        let current = head
        if (current === null) return null
        while (current.next !== null) {
            str += `( ${current.value} ) -> `
            current = current.next
        }
        str += `( ${current.value} ) -> ( ${current.next} )`
        return str
    }

    const insertAt = (value, index) => {
        count++
        const node = new Node (value)
        if (head === null || index === 0) prepend(value)
        else if (index > (count - 1)) append(value)
        else {
            let current;
            let pointer = head
            for(let i = 0; i < index; i++) {
                current = pointer
                pointer = pointer.next
            }
            current.next = node
            current.next.next = pointer
        }
    }

    const removeAt = (index) => {
        if (head === null) return null
        count--
        if(index > (count - 1)) return pop()
        if(index === 0) return (head = head.next)
        else {
            let current = head
            let nextNode = current
            for(let i = 0; i < index; i++) {
                current = nextNode
                nextNode = nextNode.next
            }
            current.next = nextNode.next
        }
    }

    return {
        append,
        prepend,
        size,
        headNode,
        tailNode,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

export default LinkedList