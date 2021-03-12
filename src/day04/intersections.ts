import ListNode from './ListNode';

function getLength(head: ListNode | null) {
    let length = 0;
    
    while (head) {
        length++;
        head = head.next;
    }

    return length;
}

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    let diff = lengthA - lengthB;
    let nodeToAdvance: ListNode | null = diff > 0 ? headA : headB;

    for (let i = 0; i < Math.abs(diff); i++) {
        nodeToAdvance = nodeToAdvance.next;
    } 

    diff > 0 ? headA = nodeToAdvance :  headB = nodeToAdvance;
    
    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }

        headA = headA.next;
        headB = headB.next;
    }

    return null;
};