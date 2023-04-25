// One way to do this is to start from the head of the list and traverse it
//  until you reach the last node. 
// Then, you can mark the last node as the new head of the reversed list.

// Next, you need to traverse the list again, but this time, you start from the second-to-last
//  node and change the direction of the links. You do this by making each node point to the 
//  previous node instead of the next node. You continue doing this until you reach the beginning of 
//  the list, which is now the last node of the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
    if(head == null){
        return null;
    }
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
};

let head = [1,2,3,4,5]

reverseList(head)

// The time complexity for reversing a singly linked list using this
//  approach would be O(n), where n is the number of nodes in the linked list. 
//  This is because we need to traverse the entire list twice, once to find the last node 
//  and once to reverse the links between the nodes.

// The space complexity for this approach would be O(1),