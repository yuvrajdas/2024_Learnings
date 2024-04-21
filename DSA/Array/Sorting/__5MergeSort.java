package DSA.Array.Sorting;
import java.util.*;

public class __5MergeSort {

    private static int[] mergeTwoSortedArr(int arr1[], int arr2[]) {
        int res[] = new int[arr1.length + arr2.length];
        int idx1 = 0;
        int idx2 = 0;
        int i = 0;

        while (idx1 < arr1.length && idx2 < arr2.length) {
            if (arr1[idx1] < arr2[idx2]) {
                res[i] = arr1[idx1];
                i++;
                idx1++;
            } else {
                res[i] = arr2[idx2];
                i++;
                idx2++;
            }
        }

        while (idx1 < arr1.length) {
            res[i] = arr1[idx1];
            i++;
            idx1++;
        }

        while (idx2 < arr2.length) {
            res[i] = arr2[idx2];
            i++;
            idx2++;
        }

        return res;
    }

    private static int[] mergeSortArr(int arr[], int si, int ei) {
        if (si == ei) {
            int res[] = new int[1];
            res[0] = arr[si];
            return res;
        }

        int mid = si + (ei - si) / 2;
        int fsh[] = mergeSortArr(arr, si, mid);
        int ssh[] = mergeSortArr(arr, mid+1, ei);

        return mergeTwoSortedArr(fsh, ssh);
    }

    public static void main(String[] args) {
        int arr[] = { 4, 3, 6, 1, 8, 0 };

        int[] sortedArr = mergeSortArr(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(sortedArr));
    }
}
