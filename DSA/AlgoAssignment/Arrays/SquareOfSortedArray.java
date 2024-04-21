package AlgoAssignment.Arrays;
import java.util.*;
public class SquareOfSortedArray {
    
    private static int[] sortArr(int arr[]){
      int i = 0;
      int j = arr.length-1;
      int res[] = new int[arr.length];
      int k = arr.length-1;
      while(i<=j){
        if(arr[i]<=arr[j]){
          res[k] = arr[j];
          k--;
          j--;
        }else{
          res[k] = arr[i];
          k--;
          i++;
        }
      }
      return res;
    }
    
    private static int[] makeSquare(int arr[]){
      for(int i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i];
      }
      return arr;
    }
    
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int size = sc.nextInt(); // taking size from the user
      int arr[] = new int[size]; // creating array size of given by the user
      
      for(int i=0; i<size; i++){  
        arr[i] = sc.nextInt(); // filling the array with user's input value
      }
      
      // making square of each input value
      int sqrArr[] = makeSquare(arr);
      for(int i=0; i<sqrArr.length; i++){
        System.out.print(sqrArr[i]+" ");
      }
      System.out.println();
      // re-arranging the squared array in non-decreasing order
      int sortedArr[] = sortArr(sqrArr);
      for(int i=0; i<sortedArr.length; i++){
        System.out.print(sortedArr[i]+" ");
      }
    }
  }