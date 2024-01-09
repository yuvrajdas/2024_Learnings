package DSA.LinkedList;

public class __15MergeSortOfLinkedList2 {
    
     public static class Node {
        int data;
        Node next;
    }

    public static class Linkedlist {
        int size;
        Node head;
        Node tail;

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

        private Node mergeTwoSortedList(Node fsh, Node ssh){
            return null;
        }

        private Node findMid(Node head){
            Node slow = head;
            Node fast = head;

            while(fast.next!=null && fast.next.next!=null){
                slow = slow.next;
                fast = fast.next.next;
            }

            return slow;
        }

        public Node mergeSort(Node head) {
            if(head == null || head.next == null) return head;

            Node mid = findMid(head);
            Node nHead = mid.next;
            mid.next = null;

            Node fsh = mergeSort(head);
            Node ssh = mergeSort(nHead);

            return mergeTwoSortedList(fsh, ssh);
        }
    }

    public static void main(String[] args) {
        Linkedlist ll1 = new Linkedlist();
        ll1.addLast(1);
        ll1.addLast(9);
        ll1.addLast(3);
        ll1.addLast(2);
        ll1.addLast(8);
        ll1.mergeSort(ll1.head);
    }
}
