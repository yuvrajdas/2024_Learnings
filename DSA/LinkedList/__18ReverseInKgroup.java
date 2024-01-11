package DSA.LinkedList;

public class __18ReverseInKgroup {

    
    public static class Node {
        Node next;
        int data;
    }

    public static class Linkedlist {
        Node head;
        Node tail;
        int size;

        public void addLast(int val) {
            if (size == 0) {
                Node newNode = new Node();
                newNode.data = val;
                head = tail = newNode;
                size++;
            } else {
                Node newNode = new Node();
                newNode.data = val;
                tail.next = newNode;
                tail = newNode;
                size++;
            }
        }

        public void printList() {
            Node temp = head;

            while (temp != null) {
                System.out.print(temp.data + "->");
                temp = temp.next;
            }
            System.out.print("null");
            System.out.println();
        }

        public void printList(Node head) {
            Node temp = head;

            while (temp != null) {
                System.out.print(temp.data + "->");
                temp = temp.next;
            }
            System.out.print("null");
            System.out.println();
        }

        public Node reverseListInKgroup(Node head, int k){
            if(size<k){
                return head;
            }
            return reverseListInKgroupHelper(head, k, size);
        }

        public Node reverseListInKgroupHelper(Node head, int k, int size){
            if(size<k) return head;

            Node curr = head;
            Node prev = null;
            Node Next = null;
            int count = 0;

            while(curr!=null && count<k){
                Next = curr.next;

                curr.next = prev;
                prev = curr;
                curr = Next;
                count++;
            }

            if(Next!=null){
                head.next = reverseListInKgroupHelper(Next, k, size-k);
            }

            return prev;
        }
   }

    public static void main(String[] args) {
        Linkedlist ll = new Linkedlist();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(4);  
        ll.addLast(5);
        ll.printList();

        Node nHead = ll.reverseListInKgroup(ll.head, 2);
        ll.printList(nHead); //Output: 2->1->4->3->5
    }
    
}