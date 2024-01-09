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

        private Node mergeTwoSortedList(Node fsh, Node ssh) {

            if (fsh == null || ssh == null)
                return fsh != null ? fsh : ssh;

            Node dummy = new Node();
            Node prev = dummy;
            Node l1 = fsh;
            Node l2 = ssh;

            while (l1 != null && l2 != null) {
                if (l1.data < l2.data) {
                    prev.next = l1;
                    l1 = l1.next;
                } else {
                    prev.next = l2;
                    l2 = l2.next;
                }
                prev = prev.next;
            }
            prev.next = l1 != null ? l1 : l2;
            return dummy.next;
        }

        private Node findMid(Node head) {
            Node slow = head;
            Node fast = head;

            while (fast.next != null && fast.next.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }

            return slow;
        }

        public Node mergeSort(Node head) {
            if (head == null || head.next == null)
                return head;

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
        Node head = ll1.mergeSort(ll1.head);
        ll1.printList(head);
    }
}
