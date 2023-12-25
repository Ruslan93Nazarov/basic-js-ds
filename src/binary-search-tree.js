const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.core = null;
  }

  root() {
   if(!this.core){
     return null;
   }
   return this.core;
  }

  add( data ) {
    let addNode = new Node(data);

    if(!this.core) {
      this.core = addNode;
      return this
    } else {
      let currentNode = this.core

      while (true) {
        if(data === currentNode.data){
          return this;
        } else if (data < currentNode.data){
          if(!currentNode.left) {
            currentNode.left = addNode;
            return this
          }
          currentNode = currentNode.left
        } else {
          if(!currentNode.right) {
            currentNode.right = addNode;
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  has( data ) {
    let currentNode = this.core;

    while(true) {
      if(!currentNode) {
        return false;
      } else if (currentNode.data === data) {
        return true
      }

      if(data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
  }


  find( data ) {
    let currentNode = this.core;

    while (true) {
      if(!currentNode) {
        return null
      } else if (currentNode.data === data) {
        return currentNode;
      }

      if(data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right
      }
    }
  }

  remove( data ) {
   let currentNode = this.core;
   let parentNode = null;

   if(!currentNode) {
     return null;
   }

    while (currentNode !== null) {
      if (currentNode.data === data) {
        break;
      } else {
        parentNode = currentNode;

        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
   if(!currentNode.right) {
     if(!parentNode) {
       this.core = currentNode.left;
       return this
     } else {
       currentNode === parentNode.left ? parentNode.left = currentNode.left : parentNode.right = currentNode.left;
      return this;
     }
   } else {
     let lowRight = currentNode.right;
     let parentNode = null;

     while (lowRight.left !== null) {
       parentNode = lowRight;
       lowRight = lowRight.left
     }
     if (parentNode !== null) {
       parentNode.left = lowRight.right;
     } else {
       currentNode.right = lowRight.right;
     }
     currentNode.data = lowRight.data;
   }
   return this
  }

  min() {
    let currentNode = this.core;

    if(!currentNode) {
      return null;
    }

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
   let currentNode = this.core;

   if(!currentNode) {
     return null;
   }
   while(currentNode.right) {
     currentNode = currentNode.right;
   }
   return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};