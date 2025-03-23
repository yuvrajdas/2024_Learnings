package DSA.Sorting;

import java.util.Arrays;

public class SelectionSort {
    
    public static int[] selectonSort(int arr[]){

        for(int i=0; i<arr.length; i++){

            for(int j=i+1; j<arr.length; j++){
                if(arr[i]>arr[j]){
                    int temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }

        return arr;
    }
    public static void main(String[] args) {
        
        int arr[] = {7,4,0,7,2,7,5};
        int res[] = selectonSort(arr);
        System.out.println(Arrays.toString(res));
    }
}
