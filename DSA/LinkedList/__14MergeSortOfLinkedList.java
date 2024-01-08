package DSA.LinkedList;

public class __14MergeSortOfLinkedList {

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

        public Linkedlist mergeTwoSortedList(Linkedlist l1, Linkedlist l2) {

            Linkedlist res = new Linkedlist();

            Node list1 = l1.head;
            Node list2 = l2.head;

            while (list1 != null && list2 != null) {
                if (list1.data < list2.data) {
                    res.addLast(list1.data);
                    list1 = list1.next;
                } else {
                    res.addLast(list2.data);
                    list2 = list2.next;
                }
            }

            while (list1 != null) {
                res.addLast(list1.data);
                list1 = list1.next;
            }

            while (list2 != null) {
                res.addLast(list2.data);
                list2 = list2.next;
            }
            return res;
        }

        private Node middleOfList(Node head, Node tail) {

            Node slow = head;
            Node fast = head;

            while (fast != tail && fast.next != tail) {
                fast = fast.next;
                slow = slow.next;
            }

            return slow;
        }

        private Linkedlist mergeSortHelper(Node head, Node tail) {

            if (head == tail) {
                Linkedlist bn = new Linkedlist();
                bn.addLast(head.data);
                return bn;
            }
            Node mid = middleOfList(head, tail);

            Linkedlist fsh = mergeSortHelper(head, mid);
            Linkedlist ssh = mergeSortHelper(mid.next, tail);

            Linkedlist cl = mergeTwoSortedList(fsh, ssh);

            return cl;
        }

        public void mergeSort() {
            Linkedlist cl = mergeSortHelper(head, tail);
            printList(cl.head);
        }
    }

    public static void main(String[] args) {
        Linkedlist ll1 = new Linkedlist();
        ll1.addLast(1);
        ll1.addLast(9);
        ll1.addLast(3);
        ll1.addLast(2);
        ll1.addLast(8);
        ll1.mergeSort();
    }
}
