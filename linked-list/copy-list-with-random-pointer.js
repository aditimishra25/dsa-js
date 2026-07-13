var copyRandomList = function(head) {
    if (!head) return null;

    let map = new Map();

    let curr = head;

    while (curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    curr = head;

    while (curr) {
        let copy = map.get(curr);

        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null;

        curr = curr.next;
    }

    return map.get(head);
};