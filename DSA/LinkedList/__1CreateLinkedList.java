package DSA.LinkedList;

public class __1CreateLinkedList{
    
    public static class Node{
       Node next;
       int data;
    }

    public static class LinkedList{
        int size;
        Node head;
        Node tail;

        public void addLast(int val){
            if(size == 0){
                Node newNode = new Node();
                newNode.data = val;
                head = newNode;
                tail = newNode;
                size++;
            }else{
                Node newnNode = new Node();
                newnNode.data = val;
                tail.next = newnNode;
                tail = newnNode;
                size++;
            }
        }

        public void printList(){
            Node temp = head;
            while(temp!=null){
                System.out.print(temp.data+"->");
                temp = temp.next;
            }
            System.out.print("null");
            System.out.println();

        }

        public  void size(){
            System.out.println(size);
        }

        public void removeFirst(){
            if(size ==0){
                System.out.println("List is mepty");
                return;
            }else if(size == 1){
                head = null;
                tail = null;
                size = 0;
            }else{
                head = head.next;
                size--;
            }
        }        

    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        list.printList();
        list.size();
        list.removeFirst();
        list.removeFirst();
        list.printList();
    }
}