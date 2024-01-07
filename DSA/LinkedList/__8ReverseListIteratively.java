package DSA.LinkedList;

public class __8ReverseListIteratively {

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

        public Node getAtIndex(int idx){
            if(idx<0 || idx>=size){
                return null;
            }else if(idx == 0){
                return head;
            }else if(idx == size-1){
                return tail;
            }else{
                Node temp = head;   // 1 2 3 4 5
                for(int i=0; i<idx; i++){
                    temp = temp.next;
                }
                return temp;
            }
        }

        public void reverseListDI(){
            int si = 0;
            int ei = size-1;

            while (si<ei) {
                Node lNode = getAtIndex(si);
                Node rNode = getAtIndex(ei);

                int temp = lNode.data;
                lNode.data = rNode.data;
                rNode.data = temp;
                
                si++;
                ei--;
            }
        }
 
    }

    public static void main(String[] args) {
        Linkedlist ll = new Linkedlist();
        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(4);
        ll.printList();
        ll.reverseListDI();
        ll.printList();
       
    }
}
