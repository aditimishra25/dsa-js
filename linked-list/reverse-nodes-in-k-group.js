var reverseKGroup = function(head, k) {

    // Start from the beginning of the list
    let curr = head;
    let count = 0;

    // Check if we have at least k nodes available
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }

    // If fewer than k nodes remain,
    // don't reverse them
    if (count < k) {
        return head;
    }

    // Reset variables for reversal
    curr = head;
    let prev = null;
    count = 0;

    // Reverse exactly k nodes
    while (count < k) {

        // Save next node
        let nextNode = curr.next;

        // Reverse pointer
        curr.next = prev;

        // Move prev forward
        prev = curr;

        // Move curr forward
        curr = nextNode;

        count++;
    }

    // After reversal:
    //
    // prev = new head of reversed group
    // head = tail of reversed group
    // curr = start of next group
    //
    // Recursively process remaining nodes
    head.next = reverseKGroup(curr, k);

    return prev;
};