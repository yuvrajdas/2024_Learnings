package DSA.Sorting;

import java.util.Arrays;

public class BubbleSort {
    
    public static int[] bubbleSort(int arr[]){

        for(int i=0; i<arr.length-1; i++){

            for(int j = 0; j<arr.length-1-i; j++){
                
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                } 
            } 
        }

       return arr;
    }

    public static void main(String[] args) {
        int arr[] = {3,4,2,2,9,6,0,6,1};
        int res[] = bubbleSort(arr);
        System.out.println(Arrays.toString(res));
    }
}
