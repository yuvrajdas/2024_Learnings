package AlgoAssignment.Arrays;

import java.util.Scanner;

public class ClosestRefuge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        
        int arr[] = new int[size];
        
        for(int i=0; i<size; i++){
          arr[i] = sc.nextInt();
        }
        
        int sumOfNnumber = size*(size+1)/2;
        System.out.println(sumOfNnumber);
        for(int i=0; i<size; i++){
          sumOfNnumber-=arr[i];
        }
        
        System.out.print(sumOfNnumber);
     
    }
}

