package DSA.LinkedList;

public class __12MergeTwoSortedList {

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
            Node one = l1;
            Node two = l2;

            Linkedlist res = new Linkedlist();

            while (one != null && two != null) {

                if (one.data < two.data) {
                    res.addLast(one.data);
                    one = one.next;
                } else {
                    res.addLast(two.data);
                    two = two.next;
                }
            }

            while (one != null) {
                res.addLast(one.data);
                one = one.next;
            }

            while (two != null) {
                res.addLast(two.data);
                two = two.next;
            }
            printList(res.head);
            return res.head;
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
