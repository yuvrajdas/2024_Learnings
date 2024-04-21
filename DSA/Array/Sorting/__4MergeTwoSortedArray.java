package DSA.Array.Sorting;
import java.util.*;

public class __4MergeTwoSortedArray {

    private static int[] mergeTwoSotedArr(int arr1[], int arr2[]) {
        int sotedArr[] = new int[arr1.length + arr2.length];
        int idx1 = 0;
        int idx2 = 0;
        int i = 0;

        while (idx1 < arr1.length && idx2 < arr2.length) {
            if (arr1[idx1] <= arr2[idx2]) {
                sotedArr[i] = arr1[idx1];
                i++;
                idx1++;
            } else {
                sotedArr[i] = arr2[idx2];
                i++;
                idx2++;
            }
        }

        while (idx1 < arr1.length) {
            sotedArr[i] = arr1[idx1];
            i++;
            idx1++;
        }

        while (idx2 < arr2.length) {
            sotedArr[i] = arr2[idx2];
            i++;
            idx2++;
        }

        return sotedArr;
    }

    public static void main(String[] args) {
        int arr1[] = { 1, 3, 6, 8, 9 };
        int arr2[] = { 2, 4, 7 };

        int res[] = mergeTwoSotedArr(arr1, arr2);
        System.out.println(Arrays.toString(res));
    }
}
