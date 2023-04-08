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
            return node
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
            return head
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

    return {
        append,
        prepend,
        size,
        headNode,
        tailNode
    }
}

export default LinkedList