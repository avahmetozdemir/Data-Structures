function mySet(){
    //the collection  will hold the set
    let collection = [] 

    //this method will check for the presence of an element and return true or false
    this.has =function(element){
        return(collection.indexOf(element)!== -1)
    }

    //this method will return all the values in the set
    this.values= function() {
        return collection
    }

    //this method will add an elemen to the set
    this.add= function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    //this method will remove an element from a set
    this.remove= function(element){
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
    }

    //this method will return the size of the collection
    this.size=function(){
        return collection.size
    }

    //this method will return the union of two sets
    this.union= function(otherSet) {
        let unionSet= new mySet()
        let firstSet = this.values()
        let secondSet  =otherSet.values() 
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet
    }

    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        let intersectionSet= new mySet()
        let firstSet =this.values()
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet
    }

    //this method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        let differenceSet = new Set()
        let firstSet= this.values()
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet
    }

    //this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        let firstSet = this.values()
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }
}

let setA = new mySet()
let setB = new mySet()

setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')

console.log(setA.subset(setB));

let setC = new Set()
let setD = new Set()

setC.add('a')
setD.add('b')
setD.add('c')
setD.add('a')
setD.add('d')

setD.delete('a')
console.log(setD.has('a'));