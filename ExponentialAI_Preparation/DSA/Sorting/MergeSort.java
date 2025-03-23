package DSA.Sorting;

import java.util.Arrays;

public class MergeSort {
    
    public static int[] mergeTwoSortedArray(int fsh[], int ssh[]){
        
        int res[] = new int[fsh.length+ssh.length];
        int idx1 = 0;
        int idx2 = 0;        
        int i = 0;

        while(idx1<fsh.length && idx2<ssh.length){

            if(fsh[idx1]>ssh[idx2]){
                res[i] = ssh[idx2];
                i++;
                idx2++;
            }else{
                res[i] = fsh[idx1];
                i++;
                idx1++;
            }
        }

        while (idx1<fsh.length) {
            res[i] = fsh[idx1];
            i++;
            idx1++;
        }

        while (idx2<ssh.length) {
            res[i] = ssh[idx2];
            i++;
            idx2++;
        }

        return res;
    }

    public static int[] mergeSort(int arr[], int si, int ei){

        if(si == ei){
            int ba[] = new int[1];
            ba[0] = arr[si];
            return ba;
        }

        int mid = si+(ei - si)/2;

        int fsh[] = mergeSort(arr, si, mid);
        int ssh[] = mergeSort(arr, mid+1, ei);

        return mergeTwoSortedArray(fsh, ssh);
    }

    public static void main(String[] args) {
        int arr[] = {7,4,0,7,2,7,5};
        int res[] = mergeSort(arr, 0, arr.length-1);
        System.out.println(Arrays.toString(res));
    }
}

// NlogN => N