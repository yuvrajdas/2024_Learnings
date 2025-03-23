package DSA.StackAndQueues;

class CustomStack {
    
    int data[];
    int tos;

    public CustomStack(int cap){
        data = new int[cap];
        tos = -1;
    }

    public void push(int val){
        if(tos == data.length-1){
            System.out.println("Stack overflow");
            return;
        }
        tos++;
        data[tos] = val;
    }

    public int pop(){
        if(tos == -1){
            System.out.println("Stack underflow");
            return -1;
        }

        int poppedVal = data[tos];
        tos--;
        return poppedVal;
    }

    public void peek(){
        if(tos == -1){
            System.out.println("Stack underflow");
            return;
        }
        System.out.println(data[tos]);
    }

    public static void main(String[] args) {
        CustomStack cstk = new  CustomStack(5);
        cstk.peek();
        cstk.pop();
        cstk.push(10);
        cstk.peek();
        
    }
}
