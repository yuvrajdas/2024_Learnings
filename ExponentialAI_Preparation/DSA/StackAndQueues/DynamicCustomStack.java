package DSA.StackAndQueues;

public class DynamicCustomStack {
    
    int data[];
    int tos;

    public DynamicCustomStack(int cap){
        data = new int[cap];
        tos = -1;
    }

    public void push(int val){
        if(tos == data.length-1){
            int newData[] = new int[data.length*2];
            for(int i=0; i<data.length; i++){
                newData[i] = data[i];
            }
            data = newData;
        } 
        tos++;
        data[tos] = val;
    }

    public void display(){
        for(int i=0; i<=tos; i++){
            System.out.print(data[i]+" ");
        }
    }

    public static void main(String[] args) {
        DynamicCustomStack dstk = new DynamicCustomStack(2);
        dstk.push(1);
        dstk.push(2);
        dstk.push(3);
        System.out.println("\n");
        dstk.display();
    }
}
