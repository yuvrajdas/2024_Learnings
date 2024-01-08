package DSA.LinkedList;

public class __13MergeTwoSortedList2 {

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

        public Node mergeTwoSortedList(Node l1, Node l2) {
            if (l1 == null || l2 == null)
                return l1 != null ? l1 : l2;

            Node dummy = new Node();
            Node prev = dummy;
            Node list1 = l1;
            Node list2 = l2;

            while (list1 != null && list2 != null) {
                if (list1.data < list2.data) {
                    prev.next = list1;
                    list1 = list1.next;
                } else {
                    prev.next = list2;
                    list2 = list2.next;
                }
                prev = prev.next;
            }

            prev.next = list1 != null ? list1 : list2;

            printList(dummy.next);
            return dummy.next;
        }
    }

    public static void main(String[] args) {
        Linkedlist ll1 = new Linkedlist();
        Linkedlist ll2 = new Linkedlist();
        ll1.addLast(1);
        ll1.addLast(3);
        ll1.addLast(5);
        ll1.addLast(7);
        ll1.addLast(9);
        ll1.printList();

        ll2.addLast(1);
        ll2.addLast(2);
        ll2.addLast(4);
        ll2.addLast(5);
        ll2.addLast(8);
        ll2.printList();

        ll1.mergeTwoSortedList(ll1.head, ll2.head);
    }
}
