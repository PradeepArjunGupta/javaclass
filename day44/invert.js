/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/*
var invert=(node)=>{
    if(node==null){
        return ;
    }
    let temp=node.left;
    node.left=node.right;
    node.right=temp;
    invert(node.left);
    invert(node.right);
}
var invertTree = function(root) {
    invert(root);
    return root;
};

*/
// DSA PROBLEMS 
/*
function printConsecutiveNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Example usage:
printConsecutiveNumbers(10); // prints numbers 1 to 10
*/
//
function findMaxElement(arr) {
  let maxElement = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

// Example usage
const numbers = [2, 7, 11, 15, 12, 10];
console.log("Maximum element is:", findMaxElement(numbers)); // Outputs: 15
