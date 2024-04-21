package DSA.Array.Sorting;

import java.util.Arrays;

public class __3InsertionSort {
    public static void main(String[] args) {
        int arr[] = {1,0,5,3,6};

        for(int i=1; i<arr.length; i++){

            for(int j = i-1; j>=0; j--){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }else{
                    break;
                }
            }
        }

        System.out.println(Arrays.toString(arr));
    }
}
