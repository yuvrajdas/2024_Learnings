import java.util.*;

public class __7NextSmallerElementToTheRight {

    public static void nseToTheRight(int arr[]){
        int res[] = new int[arr.length];

        Stack<Integer> stk = new Stack<>();

        for(int i=arr.length-1; i>=0; i--){
            while(!stk.isEmpty() && stk.peek() >= arr[i]){
                stk.pop();
            }
            
            if(stk.isEmpty()){
                res[i] = -1;
            }else{
                res[i] = stk.peek();
            }

            stk.push(arr[i]);
        }
        System.out.println(Arrays.toString(res));
    }
    public static void main(String[] args) {
        // Input: [4, 8, 5, 2, 25]
        // Output: [2, 5, 2, -1, -1]

        int arr[] = {4, 8, 5, 2, 25};
        nseToTheRight(arr);
    }
}
