package DSA.StackAndQueues;

public class CustomQueue {

    int data[];
    int size;
    int front;

    public CustomQueue(int cap){
        data = new int[cap];
        size = 0;
        front = 0;
    }

    public void add(int val){
        if (size == data.length){
            System.out.println("Stack overflow");
        }else{
            int rear = (front+size)%data.length;
            data[rear] = val;
            size++;
        }
    }

    public void size(){
        System.out.println(size);
    }
    
    public void remove(){
        if(size == 0){
            System.out.println("Queue Underflow");
            
        }else{
            
            System.out.println(data[front]);
            front = (front+1)%data.length;
            size--;
        }
    }

    public void peek(){
        if(size == 0){
            System.out.println("Queue Underflow");
        }else{
            System.out.println(data[front]);
        }
    }

    public void display(){
        for(int i=0; i<size; i++){
            int idx = (front+i)%data.length;
            System.out.print(data[idx]+" ");
        }
    }
    public static void main(String[] args) {
        CustomQueue cq = new CustomQueue(3);
        cq.add(1);
    }
}
