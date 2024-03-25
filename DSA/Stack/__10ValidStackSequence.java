import java.util.Stack;

class __10ValidStackSequence{
    
    public static boolean validStackSequence(int pushed[], int popped[]){
        
        Stack<Integer> stk = new Stack<>();
        int j = 0;
        for(int i=0; i<pushed.length; i++){
            stk.push(pushed[i]);

            while(!stk.isEmpty() && stk.peek() == popped[j]){
                stk.pop();
                j++;
            }
        }
        
        return stk.isEmpty();
    }
    
    public static void main(String[] args) {
        int pushed[] = {1,2,3,4,5}, popped[] = {4,5,3,2,1};
        // Output: true

        boolean res = validStackSequence(pushed, popped);
        System.out.println(res);
    }
}