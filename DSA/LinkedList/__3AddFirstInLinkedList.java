package DSA.LinkedList;

public class __3AddFirstInLinkedList {
    
    public static class Node{
        int data;
        Node next;
    }

    public static class LinkedList{
        int size;
        Node head;
        Node tail;

        public void addFirst(int val){

            if(size == 0){
                Node newNode = new Node();
                newNode.data = val;
                head = tail = newNode;
                size++;
            }else{
                Node newNode = new Node();
                newNode.data = val;
                newNode.next = head;
                head = newNode;
                size++;
            }
        }

        public void printList(){
            Node temp = head;

            while(temp != null){
                System.out.print(temp.data+"->");
                temp = temp.next;
            }
            System.out.println("null");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addFirst(3);
       list.addFirst(2);
       list.addFirst(1);
       list.addFirst(5);
        list.printList();
    }
}
