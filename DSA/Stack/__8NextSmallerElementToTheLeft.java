import java.util.*;
public class __8NextSmallerElementToTheLeft {

    public static void nseToTheLeft(int[] arr){
        int nse[] = new int[arr.length];
        
        Stack<Integer> stk = new Stack<>();

        for(int i=0; i<arr.length; i++){
            while(!stk.isEmpty() && stk.peek()>=arr[i]){
                stk.pop();
            }

            if(stk.isEmpty()){
                nse[i] = -1;
            }else{
                nse[i] = stk.peek();
            }
            stk.push(arr[i]);
        }

        System.out.println(Arrays.toString(nse));
    }

    public static void main(String[] args) {
        // Input: [1, 6, 4, 10, 2, 5]
        // Output: [-1, 1, 1, 4, 1, 2]
        int arr[] = {1, 6, 4, 10, 2, 5};
        nseToTheLeft(arr); 
    }
}
