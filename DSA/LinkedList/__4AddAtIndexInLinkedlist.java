package DSA.LinkedList;

public class __4AddAtIndexInLinkedlist {

    public static class Node {
        int data;
        Node next;
    }

    public static class Linkedlist {
        int size;
        Node head;
        Node tail;

        public void addFirst(int val) {
            if (size == 0) {
                Node newNode = new Node();
                newNode.data = val;
                head = tail = newNode;
                size++;
            } else {
                Node newNode = new Node();
                newNode.data = val;
                newNode.next = head;
                head = newNode;
                size++;
            }
        }

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

        public void addAtIdx(int idx, int val) {
            if (idx < 0 || idx > size) {
                System.out.println("Invalid index");
                return;
            } else if (idx == 0) {
                this.addFirst(val);
            } else if (idx == size) {
                this.addLast(val);
            }else{
                Node temp = head;
                for(int i=0; i<idx-1; i++){  //1 2 3 4
                    temp = temp.next;
                }
                Node newNode = new Node();
                newNode.data = val;
                newNode.next = temp.next;  
                temp.next = newNode;
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
    }

    public static void main(String[] args) {
        Linkedlist ll = new Linkedlist();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(4);
        ll.printList();
        ll.addAtIdx(4, 10);
        ll.printList();

    }
}
