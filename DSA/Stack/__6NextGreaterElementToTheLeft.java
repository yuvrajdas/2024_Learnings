import java.util.*;

public class __6NextGreaterElementToTheLeft {

    public static void ngeToTheLeft(int arr[]) {
        int res[] = new int[arr.length];
        Stack<Integer> stk = new Stack<>();

        for (int i = 0; i < arr.length; i++) {
            while (!stk.isEmpty() && arr[stk.peek()] < arr[i]) {
                stk.pop();
            }

            if (stk.isEmpty()) {
                // no smaller element than the curr element
                res[i] = -1;
            } else {
                res[i] = arr[stk.peek()];
            }
            stk.push(i);
        }

        System.out.println(Arrays.toString(res));
    }

    public static void main(String[] args) {
        int arr[] = { 1, 6, 4, 10, 2, 5 };
        // Output: [-1, -1, 6, -1, 10, 10]
        ngeToTheLeft(arr);
    }
}
