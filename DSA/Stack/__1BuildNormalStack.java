public class __1BuildNormalStack {
    
    int tos;
    int data[];

    public __1BuildNormalStack(){
        this.tos = -1;
        this.data = new int[5];
    }

    public void push(int val){
        tos++;
        data[tos] = val;
    }

    public void pop(){
        tos--;
    }

    public void peek(){
        if(tos == -1){
            System.out.println("Stack is underflow");
            return;
        }

        System.out.println(data[tos]);
    }

    public static void main(String[] args) {
        __1BuildNormalStack stk = new __1BuildNormalStack();
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stk.push(6);
        stk.peek();
    }
}
