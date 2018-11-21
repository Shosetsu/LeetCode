/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode();
    const answer = node;    
    let carry = 0;
    let first = true
    while(l1 || l2){
        if(!first){
            node.next = new ListNode();
            node = node.next;  
        }
        let v1 = l1?l1.val:0;
        let v2 = l2?l2.val:0;
        node.val = (v1+v2+carry)%10;
        carry = parseInt((v1+v2+carry)/10);
        
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        first= false;
    }
    if(carry) node.next = new ListNode(carry);
    
    return answer;
};