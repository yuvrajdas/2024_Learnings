package DSA.LinkedList;

public class __17OddEvenLinkedList {
    
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

        private Node oddEvenLinkedlist(Node head){
            if(head == null || head.next == null) return head;

            Node dummyOdd = new Node();
            Node dummyEven = new Node();

            Node evenTail = dummyEven, oddTail = dummyOdd, curr = head;
            int count =  1;
            while (curr!=null) {
                if(count%2 == 1){
                    oddTail.next = curr;
                    oddTail = oddTail.next;
                }else{
                    evenTail.next = curr;
                    evenTail = evenTail.next;
                }
                count++;
                curr = curr.next;
            }
            
            oddTail.next = dummyEven.next;
            evenTail.next = null;

            return dummyOdd.next;
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

        Node nHead = ll.oddEvenLinkedlist(ll.head);
        ll.printList(nHead); //Output: 1->3->5->2->4
    }
}
