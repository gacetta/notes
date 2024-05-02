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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    dfs(root)
    return maxDiameter

    function dfs(root) {
        // returns height
        if (!root) {
            return -1
        }

        const left = dfs(root.left)
        const right = dfs(root.right)
        maxDiameter = Math.max(maxDiameter, (left + right + 2))
        return 1+ Math.max(left, right)
    }  
};