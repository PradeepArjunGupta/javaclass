// Node structure for the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree implementation
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Create or Insert: Insert in level order
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            if (!current.left) {
                current.left = newNode;
                break;
            } else {
                queue.push(current.left);
            }
            if (!current.right) {
                current.right = newNode;
                break;
            } else {
                queue.push(current.right);
            }
        }
    }

    // Read or Search: Level order/breadth-first search OR search for a value
    search(value) {
        if (!this.root) return false;
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            if (current.value === value) return true;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return false;
    }

    // Update: Find a node and update its value
    update(oldValue, newValue) {
        if (!this.root) return false;
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            if (current.value === oldValue) {
                current.value = newValue;
                return true;
            }
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return false; // Not found
    }

    // Delete: Remove the first node found with the given value (using level order)
    delete(value) {
        if (!this.root) return false;
        let nodeToDelete = null;
        let lastNode = null;
        let parentOfLast = null;
        const queue = [{node: this.root, parent: null, isLeft: false}];
        while (queue.length) {
            const {node, parent, isLeft} = queue.shift();
            if (node.value === value) nodeToDelete = node;
            if (node.left) queue.push({node: node.left, parent: node, isLeft: true});
            if (node.right) queue.push({node: node.right, parent: node, isLeft: false});
            lastNode = node;
            parentOfLast = parent;
        }
        if (!nodeToDelete) return false;
        nodeToDelete.value = lastNode.value;
        // Remove last node
        if (parentOfLast) {
            if (parentOfLast.left === lastNode) parentOfLast.left = null;
            else if (parentOfLast.right === lastNode) parentOfLast.right = null;
        } else {
            this.root = null; // If tree has only one node
        }
        return true;
    }

    // Utility: Inorder traversal (for displaying the tree)
    inorder(node = this.root, result = []) {
        if (!node) return result;
        this.inorder(node.left, result);
        result.push(node.value);
        this.inorder(node.right, result);
        return result;
    }
}

const tree = new BinaryTree();

// Create (Insert)
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

// Read (Search)
console.log(tree.search(20)); // true
console.log(tree.search(99)); // false

// Update
tree.update(30, 35);
console.log(tree.inorder()); // [40, 20, 50, 10, 35]

// Delete
tree.delete(20);
console.log(tree.inorder()); // Will show in-order traversal without 20
