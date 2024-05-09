# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # RECURSIVE DFS SOLUTION
        if not root:
            return 0
        
        return 1 + max (self.maxDepth(root.left), self.maxDepth(root.right))

        # # BFS SOLUTION
        # if not root:
        #     return 0

        # queue = deque([root])
        # level = 0

        # while queue:

        #     for i in range(len(queue)):
        #         node = queue.popleft()
        #         if node.left:
        #             queue.append(node.left)
        #         if node.right:
        #             queue.append(node.right)
        #     level += 1

        # return level

        # # ITERATIVE BFS SOLUTION
        # if not root:
        #     return 0

        # stack = [[root, 1]]
        # maxDepth = 0

        # while stack:
        #     node, depth = stack.pop()
        #     maxDepth = max(maxDepth, depth)
        #     if node.left:
        #         stack.append([node.left, depth + 1])
        #     if node.right:
        #         stack.append([node.right, depth + 1])
        
        # return maxDepth
            