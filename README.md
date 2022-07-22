# Data-Structures

## Stack

Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). 

This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first. 

Some of its main operations are: push(), pop(), top(), isEmpty(), size(), etc.  

In order to make manipulations in a stack, there are certain operations provided to us. When we want to insert an element into the stack the operation is known as the push operation whereas when we want to remove an element from the stack the operation is known as the pop operation. If we try to pop from an empty stack then it is known as underflow and if we try to push an element in a stack that is already full, then it is known as overflow.

### Reference
- [GeeksforGeeks](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

## Sets

Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

### Reference
- [MDNWebDocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## Queue

Similar to Stack, Queue is a linear data structure that follows a particular order in which the operations are performed for storing data. The order is First In First Out (FIFO).  One can imagine a queue as a line of people waiting to receive something in sequential order which starts from the beginning of the line. It is an ordered list in which insertions are done at one end which is known as the rear and deletions are done from the other end known as the front. A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. 
The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

### Reference
- [GeeksforGeeks](https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/)

# Binary Search Tree

In computer science, **binary search trees** (BST), sometimes called 
ordered or sorted binary trees, are a particular type of container: 
data structures that store "items" (such as numbers, names etc.) 
in memory. They allow fast lookup, addition and removal of 
items, and can be used to implement either dynamic sets of 
items, or lookup tables that allow finding an item by its key 
(e.g., finding the phone number of a person by name).

Binary search trees keep their keys in sorted order, so that lookup 
and other operations can use the principle of binary search: 
when looking for a key in a tree (or a place to insert a new key), 
they traverse the tree from root to leaf, making comparisons to 
keys stored in the nodes of the tree and deciding, on the basis 
of the comparison, to continue searching in the left or right 
subtrees. On average, this means that each comparison allows 
the operations to skip about half of the tree, so that each 
lookup, insertion or deletion takes time proportional to the 
logarithm of the number of items stored in the tree. This is 
much better than the linear time required to find items by key 
in an (unsorted) array, but slower than the corresponding 
operations on hash tables.

A binary search tree of size 9 and depth 3, with 8 at the root.
The leaves are not drawn.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## Complexities

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### Space Complexity

O(n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
