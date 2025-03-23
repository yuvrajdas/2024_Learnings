package DSA.Sorting;

import java.util.Arrays;

public class InsertionSort {
    
    public static int[] insertionSort(int arr[]){

        for(int i=1; i<arr.length; i++){

            for(int j = i-1; j>=0; j-- ){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }else{
                    break;
                }
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        
        int arr[] = {5,3,7,4,9,1,0,4};
        int res[] = insertionSort(arr);
        System.out.println(Arrays.toString(res));
    }
}
