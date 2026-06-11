class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {

    this.capacity = capacity;

    // key -> node
    this.map = new Map();

    // Dummy head and tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    // Empty list:
    // head <-> tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * Remove a node from the doubly linked list
 *
 * Before:
 * prev <-> node <-> next
 *
 * After:
 * prev <-> next
 */
LRUCache.prototype.remove = function(node) {

    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
};

/**
 * Insert node right after head
 *
 * Before:
 * head <-> first
 *
 * After:
 * head <-> node <-> first
 *
 * Most recently used nodes stay near head
 */
LRUCache.prototype.insert = function(node) {

    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
};

/**
 * Get value by key
 */
LRUCache.prototype.get = function(key) {

    // Key doesn't exist
    if (!this.map.has(key)) {
        return -1;
    }

    let node = this.map.get(key);

    // Move node to front because it was just used
    this.remove(node);
    this.insert(node);

    return node.value;
};

/**
 * Add/update key
 */
LRUCache.prototype.put = function(key, value) {

    // If key already exists
    if (this.map.has(key)) {

        let existingNode = this.map.get(key);

        // Remove old node from list
        this.remove(existingNode);

        // Remove from map
        this.map.delete(key);
    }

    // Create new node
    let newNode = new Node(key, value);

    // Add to map
    this.map.set(key, newNode);

    // Add to front (most recently used)
    this.insert(newNode);

    // Capacity exceeded?
    if (this.map.size > this.capacity) {

        // LRU node is always before tail
        let lru = this.tail.prev;

        // Remove from linked list
        this.remove(lru);

        // Remove from hashmap
        this.map.delete(lru.key);
    }
};