import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Stack;

public class __5NextGreaterElementToTheRight{
    
    public static int[] nextGreaterEleToRight(int arr[]){
        int res[] = new int[arr.length];
        Stack<Integer> stk = new Stack<>();
        stk.push(arr[arr.length-1]);

        for(int i=arr.length-2; i>=0; i--){
            if(stk.peek()>arr[i]){
                res[i] = stk.peek();
            }else{
                while(!stk.isEmpty() && (stk.peek()<=arr[i])){
                    stk.pop();
                }
                if(stk.isEmpty()){
                    res[i] = -1;
                }else{
                    res[i] = stk.peek();
                }
            }
            stk.push(arr[i]);
        }        
        return res;
    }
    public static void main(String[] args) {
        int arr[] = {2,5,9,3,1,12,6,8,7};
        int res[] = nextGreaterEleToRight(arr);
        System.out.println(Arrays.toString(res));
    }
}