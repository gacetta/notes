var reverseList = function(head) {
    if (!head) {
        return null; // Handle edge case where head is null
    }

    let currentNode = head;
    let previousNode = null;
    
    while (currentNode) {
        const nextNode = currentNode.next; // Save reference to the next node
        currentNode.next = previousNode; // Reverse the current node's pointer
        previousNode = currentNode; // Move previousNode pointer to current node
        currentNode = nextNode; // Move current node pointer to the next node
    }

    return previousNode; // Return the new head of the reversed list
};