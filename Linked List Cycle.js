/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
   
    if (!head || !head.next) {
    // The list is empty or contains only one node, so there can't be any cycle.
    return false;
  }

  let slow = head;
  let fast = head.next;

  while(slow !== fast){
      if(!fast || !fast.next){
          return false;
      }
      slow=slow.next;
      fast = fast.next.next;
    
  }

    return true;
};
