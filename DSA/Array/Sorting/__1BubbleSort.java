package DSA.Array.Sorting;
import java.util.*;

public class __1BubbleSort {
    public static void main(String[] args) {
        int arr[] = { 1, 5, 3, 8, 0 };

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 1; j < arr.length - i; j++) {
                if (arr[j] <= arr[j - 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
