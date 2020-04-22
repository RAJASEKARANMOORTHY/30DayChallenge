/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let length = preorder.length;

    if (length == 0) {
        return null;
    }

    let root = new TreeNode(preorder[0]);

    let dequeue = [];
    dequeue.push(root);

    for (let index = 1; index < length; index++) {
        let node = dequeue[dequeue.length - 1];

        let child = new TreeNode(preorder[index]);

        while (dequeue.length > 0 && dequeue[dequeue.length - 1].val < child.val)
            node = dequeue.pop();

        if (node.val < child.val)
            node.right = child;
        else
            node.left = child;

        dequeue.push(child);
    }

    return root;
};