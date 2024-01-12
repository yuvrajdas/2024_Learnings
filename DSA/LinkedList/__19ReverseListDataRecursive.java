package DSA.LinkedList;

public class __19ReverseListDataRecursive {
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

        public void reverseListDRHelper(Node head, int count) {
            if (head == null) {
                return;
            }

            reverseListDRHelper(head.next, count + 1);
            if (count < size / 2) {
                int temp = left.data;
                left.data = head.data;
                head.data = temp;
            }

            left = left.next;
        }

        Node left = null;
        public Node reverseListDR(Node head) {
            left = head;
            reverseListDRHelper(head, 0);

            return head;
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

        Node nHead = ll.reverseListDR(ll.head);
        ll.printList(nHead); // Output: 5->4->3->2->1
    }

}
