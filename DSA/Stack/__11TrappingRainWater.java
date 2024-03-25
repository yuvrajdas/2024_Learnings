public class __11TrappingRainWater {
    
    public static int trap(int heights[]){
        
        int ans = 0;
        int lmax = Integer.MIN_VALUE;
        int rmax = Integer.MIN_VALUE;
        int l = 0;
        int r = heights.length-1;
        while (l<r) {
            lmax = Math.max(lmax, heights[l]);
            rmax = Math.max(rmax, heights[r]);

            if(lmax<rmax){
                ans+=lmax - heights[l];
                l++;
            }else{
                ans+=rmax - heights[r];
                r--;
            }
        }
        
        
        return ans;
    }
    public static void main(String[] args) {
        int height[] = {1,0,1};
        // Output: 6

        int res = trap(height);
        System.out.println(res);
    }
}

// https://youtu.be/PwEdhxQkFZs?si=8tfFjKfA0S61iyGU
