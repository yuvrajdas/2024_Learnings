import java.util.*;

class __9LargestRectangleHistogram{
    
    public static int largestRectangleArea(int heights[]){
        
        Stack<Integer> stk = new Stack<>();
        int lb[] = new int[heights.length]; // nse to the left

        for(int i=0; i<heights.length; i++){

            while(!stk.isEmpty() && heights[stk.peek()]>=heights[i]){
                stk.pop();
            }

            if(stk.isEmpty()){
                lb[i] = -1;
            }else{
                lb[i] = stk.peek();
            }

            stk.push(i);
        }

        stk = new Stack<>();
        int rb[] = new int[heights.length]; // nse to the right

        for(int i=heights.length-1; i>=0; i--){

            while(!stk.isEmpty() && heights[stk.peek()]>=heights[i]){
                stk.pop();
            }

            if(stk.isEmpty()){
                rb[i] = -1;
            }else{
                rb[i] = stk.peek();
            }

            stk.push(i);
        }

        int totalArea = 0;

        for(int i=0; i<heights.length; i++){
            int width = rb[i] - lb[i] - 1;
            int area = width*heights[i];

            if(totalArea<area){
                totalArea = area;
            }
        }
    
        return totalArea;
    }
    public static void main(String[] args) {
        int arr[] = {2,1,5,6,2,3};

        int res = largestRectangleArea(arr);
        System.out.println(res);
    }
}