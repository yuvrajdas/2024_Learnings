public class __2DynamicStackUsingArray {
    
    int tos;
    int data[];

    public __2DynamicStackUsingArray(int len){
        this.tos = -1;
        this.data = new int[len];
    }

    public void push(int val){
        if(tos == data.length-1){
            int nData[] = new int[data.length+1];
            for(int i=0; i<data.length; i++){
                nData[i] = data[i];
            }
            data = nData;
        }
        tos++;
        data[tos] = val;
    }

    public void peek(){
        if(tos == -1){
            System.out.println("Stack underflow");
        }else{
            System.out.println(data[tos]);
        }
    }

    public void pop(){
        if(tos == -1){
            System.out.println("Stack underflow");
        } else {
            int topVal = data[tos];
            tos--;
            System.out.println(topVal);
        }
    }

    public void size(){
        System.out.println(tos+1);
    }

    public static void main(String[] args) {
        __2DynamicStackUsingArray  dstk = new __2DynamicStackUsingArray(5);
        dstk.push(1);
        dstk.push(1);
        dstk.push(1);
        dstk.push(1);
        dstk.push(10);
        dstk.peek();

    }
}
