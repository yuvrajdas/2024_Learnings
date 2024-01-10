package DSA.LinkedList;

public class __16RemoveDuplicatesFromSortedList {

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

        public Node removeDuplicates(Node head) {
            if (head == null)
                return head;

            Node temp = head;

            while (temp != null && temp.next != null) {
                if (temp.data == temp.next.data) {
                    temp.next = temp.next.next;
                } else {
                    temp = temp.next;
                }
            }

            return head;
        }
    }

    public static void main(String[] args) {
        Linkedlist ll = new Linkedlist();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(3);
        ll.addLast(4);
        ll.addLast(5);
        ll.printList();

        Node nHead = ll.removeDuplicates(ll.head);
        ll.printList(nHead);
    }
}
