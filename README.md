# Linked List
Linked List project from The Odin Project

___
<br>

## Modules

* Node - create new node that has a value and reference to null
* LinkedList - create new linked list that has reference to head node and a node counter
___
<br>

### LinkedList properties
* `append(value)` - Adds a new node containing value to the end of the list
    * `count` is incremented by 1
* `prepend(value)` - Adds a new node containing value to the start of the list
    * If no node in list, then `append(value)`
    * `count` is incremented by 1
* `size()` - Returns the total number of nodes in the list - `count`
* `headNode()` - Returns the first node in the list

        { value: 4, next: { value: 5, next: null} }

* `tailNode()` - Returns the last node in the list

        {value: 5, next: null }

* `at(index)` - Returns the node at the given index

        list: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( null )
        list.at(1) //return { value: 1, next: { value: 2, next: null } }

* `pop()` - Remove the last node in the list
    * `count` is decremented by 1

            list: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( null )
            list.pop() // list should then be ( 0 ) -> ( 1 ) -> ( null )

* `contains(value)` - Returns true if list contains value given, otherwise false if not located

        list: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( null )
        list.contains(0) // return true
        list.contains(5) // return false

* `find(value)` - Returns the index of the node containing the given value, otherwise returns null if not located

        list: ( 10 ) -> ( 20 ) -> ( 30 ) -> ( null )
        list.find(20) // return 1
        list.contains(52) // return null

* `toString()` - Returns string representation of the list

        { value: 1, next: { value: 2, next: null } }
        list.toString() //return ( 1 ) -> ( 2 ) -> ( null )

* `insertAt(value, index)` - Inserts new node with the given value at the given index
    * `count` is incremented by 1
    * If index exceeds the number of nodes given, then append value

            list: ( 0 ) -> ( 1 ) -> ( null )
            list.insertAt(100, 1) // list should then be ( 0 ) -> ( 100 ) -> ( 1 ) -> ( null )

* `removeAt(index)` - Removes the node at the given index
    * `count` is decremented by 1
    * If index exceeds the number of nodes given, then append value

            list: ( 0 ) -> ( 1 ) -> ( 3 ) -> ( null )
            list.removeAt(1) // list should then be ( 0 ) -> ( 3 ) -> ( null )