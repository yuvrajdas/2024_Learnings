package DSA.LinkedList;

public class __20IsLinkedlistPallindrom{

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

        private boolean isLinkedListPallindromHelper(Node head){
            if(head == null){
                return true;
            }

            boolean rres = isLinkedListPallindromHelper(head.next);
            if(rres == false){
                return false;
            }else if(head.data != left.data){
                return false;
            }else{
                left = left.next;
                return true;
            }
        }

        Node left;
        public boolean isLinkedListPallindrom(Node head){
            left = head;
            return isLinkedListPallindromHelper(head);
        }
    }

    public static void main(String[] args) {
        Linkedlist ll = new Linkedlist();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(2);
        ll.addLast(1);
        ll.printList();

        boolean res = ll.isLinkedListPallindrom(ll.head);
        System.out.println(res);
    }

}