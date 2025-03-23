package DSA.Array;

public class __1PrintAllSubArray {
    
    public static void printAllSubArray(int arr[]){
        int n = arr.length; 
   
        for(int i=0; i<n; i++){
            for(int j = i; j<n; j++){
                for(int k = i; k<=j; k++){
                    System.out.print(arr[k]+" ");
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3};
        printAllSubArray(arr);
    }
}

// 1 2 3 4 5

/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4 
 * 1 2 3 4 5
 * 2 
 * 2 3
 * 2 3 4
 * 2 3 4 5
 * 3 
 * 3 4
 * 3 4 5
 * 4
 * 4 5
 * 5
 * 
 * 
 * 
*/