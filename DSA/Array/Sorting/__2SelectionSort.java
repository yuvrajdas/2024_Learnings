package DSA.Array.Sorting;
import java.util.*;

class __2SelectionSort {

    public static void main(String[] args) {
        
        int arr[] = {2,4,1,9,0,6};

        for(int i=0; i<arr.length; i++){

            for(int j=0; j<arr.length; j++){
                if(arr[i]>=arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        System.out.println(Arrays.toString(arr));
    }
    
}