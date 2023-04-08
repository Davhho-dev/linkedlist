import LinkedList from "../linkedlist/linkedlist.js"
import Node from "../linkedlist/node.js"

const list = new LinkedList()
list.append(2) // ( 2 ) -> ( null )
list.append(3) // ( 2 ) -> ( 3 ) -> ( null )
list.append(4) // ( 2 ) -> ( 3 ) -> ( 4 ) -> ( null )
list.prepend(1) // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( null )
list.prepend(0) // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( null )
list.toString() // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( null )
list.size() // 5
list.headNode() // { value: 0, next: { value: 1, next: { value: 2, next: [Object] } } }
list.tailNode() // { value: 4, next: null }
list.at(0) // { value: 0, next: { value: 1, next: { value: 2, next: [Object] } } }
list.at(3) // { value: 3, next: { value: 4, next: null } }
list.at(7) // null
list.pop() //( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
list.contains(0) // true
list.contains(100) // false
list.find(2) // 2
list.insertAt(100, 0) // ( 100 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
list.insertAt(200, 2) // ( 100 ) -> ( 0 ) -> ( 200 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
list.insertAt(300, 10) // ( 100 ) -> ( 0 ) -> ( 200 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 300 ) -> ( null )
list.removeAt(0) // ( 100 ) -> ( 0 ) -> ( 200 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 300 ) -> ( null )
list.removeAt(1) // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 300 ) -> ( null )
list.removeAt(10) // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( null )
