
import ListNode from './ListNode';
import { getIntersectionNode } from './intersections';

describe("getIntersectionNode", () => {

    it('[null], [null] should result in null', () => {
        const result = getIntersectionNode(null, null);

        expect(result).toBeNull();
    })

    it('first head is null should result in null', () => {
        const headB = new ListNode(1, null);
        const result = getIntersectionNode(null, headB);

        expect(result).toBeNull();
    })

    it('second head is null should result in null', () => {
        const headA = new ListNode(1, null);
        const result = getIntersectionNode(headA, null);

        expect(result).toBeNull();
    })
 
    it('cross is at the end with same lists lengths', () => {
        const end = new ListNode(3, null);
        const a2 = new ListNode(2, end)
        const a1 = new ListNode(1, a2);
        
        const b2 = new ListNode(2, end)
        const b1 = new ListNode(1, b2)
        const result = getIntersectionNode(a1, b1);

        expect(result).toBe(end);
    })

    it('cross is at the end with list A longer by 1 node', () => {
        const end = new ListNode(3, null);
        const a2 = new ListNode(2, end)
        const a1 = new ListNode(1, a2);
        const a0 = new ListNode(0, a1);
        
        const b2 = new ListNode(2, end)
        const b1 = new ListNode(1, b2)
        const result = getIntersectionNode(a0, b1);

        expect(result).toBe(end);
    })

    it('cross is at the end with list B longer by 1 node', () => {
        const end = new ListNode(3, null);
        const a2 = new ListNode(2, end)
        const a1 = new ListNode(1, a2);
        
        const b2 = new ListNode(2, end)
        const b1 = new ListNode(1, b2)
        const b0 = new ListNode(1, b1)
        const result = getIntersectionNode(a1, b0);

        expect(result).toBe(end);
    })

    it('cross is in the middle with same lists length', () => {
        const common3 = new ListNode(3, null);
        const common2 = new ListNode(2, common3)

        const a1 = new ListNode(1, common2);
        const a0 = new ListNode(0, a1);
        
        const b1 = new ListNode(1, common2)
        const b0 = new ListNode(0, b1)
        const result = getIntersectionNode(a0, b0);

        expect(result).toBe(common2);
    })

    it('cross is in the middle with list A longer by 1 node', () => {
        const common3 = new ListNode(3, null);
        const common2 = new ListNode(2, common3)

        const a1 = new ListNode(1, common2);
        const a0 = new ListNode(0, a1);
        const a01 = new ListNode(-1, a0);
        
        const b1 = new ListNode(1, common2)
        const b0 = new ListNode(0, b1)
        const result = getIntersectionNode(a01, b0);

        expect(result).toBe(common2);
    })

    it('cross is in the middle with list A longer by 2 nodes', () => {
        const common3 = new ListNode(3, null);
        const common2 = new ListNode(2, common3)

        const a1 = new ListNode(1, common2);
        const a0 = new ListNode(0, a1);
        const a01 = new ListNode(-1, a0);
        const a02 = new ListNode(-2, a01);
        
        const b1 = new ListNode(1, common2)
        const b0 = new ListNode(0, b1)

        const result = getIntersectionNode(a02, b0);

        expect(result).toBe(common2);
    })

    it('cross is in the middle with list B longer by 1 node', () => {
        const common3 = new ListNode(3, null);
        const common2 = new ListNode(2, common3)

        const a1 = new ListNode(1, common2);
        const a0 = new ListNode(0, a1);
        
        const b1 = new ListNode(1, common2)
        const b0 = new ListNode(0, b1)
        const b01 = new ListNode(-1, b0)

        const result = getIntersectionNode(a0, b01);

        expect(result).toBe(common2);
    })


    it('cross is in the middle with list B longer by 2 nodes', () => {
        const common3 = new ListNode(3, null);
        const common2 = new ListNode(2, common3)

        const a1 = new ListNode(1, common2);
        const a0 = new ListNode(0, a1);
        
        const b1 = new ListNode(1, common2)
        const b0 = new ListNode(0, b1)
        const b01 = new ListNode(-1, b0)
        const b02 = new ListNode(-2, b01)

        const result = getIntersectionNode(a0, b02);

        expect(result).toBe(common2);
    })


});
