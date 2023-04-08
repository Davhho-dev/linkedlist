import Node from "../linkedlist/node.js"

function LinkedList() {
    let head = null;
    let count = 0;
    
    const append = (value) => {
        count++;
        const node = new Node (value);
        if (head === null) return (head = node)
        else {
            let pointer = head
            while (pointer.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = node
            return head
        }
    }
    return {
        append
    }
}

export default LinkedList