package DSA.LinkedList;

public class __2GetValueAtLinkedList {

    public static class Node {
        Node next;
        int data;
    }

    public static class Linkedlist {
        int size;
        Node head;
        Node tail;

        public void addLast(int val) {
            if (size == 0) {
                Node newNode = new Node();
                newNode.data = val;
                head = newNode;
                tail = newNode;
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

        public void getFirst(){
            if(head!=null){
                System.out.println(head.data);
            }else{
                System.out.println("List is empty");
            }
        }

        public void getLast(){
            if(tail!=null){
                System.out.println(tail.data);
            }else{
                System.out.println("List is empty");
            }
        }

        public void getAtIndex(int idx){
            if(idx<0 || idx>=size){
                System.out.println("Invalid Index");
                return;
            }
            Node temp = head;
            for(int i=0; i<idx; i++){
                temp = temp.next;
            }   
            System.out.println(temp.data);
        }
        public static void main(String[] args) {
            Linkedlist list = new Linkedlist();
            // list.addLast(1);
            // list.addLast(2);
            // list.addLast(3);
            // list.addLast(4);
            // list.addLast(5);
            // list.addLast(6);
            // list.printList();
            list.getAtIndex(0);
            list.getFirst();
            list.getLast();
        }
    }
}
