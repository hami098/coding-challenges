function addTwoNumbers(l1, l2) {
  let carry = 0;
  const dummyHead = new ListNode(0);
  let tail = dummyHead;
  
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + carry;
    
    carry = sum >= 10 ? 1 : 0;
    tail.next = new ListNode(sum - carry * 10);
    
    tail = tail.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  if (carry) {
    tail.next = new ListNode(carry);
  }
  
  return dummyHead.next;
}
