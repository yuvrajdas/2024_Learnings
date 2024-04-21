package Math;

public class __1RemoveLeadingZeros {
    public static void main(String[] args) {
        int res = 0;
        int x = 1534236469;
        while(x!=0){
            int rem = x%10;
            res = res*10+rem;
            x = x/10;
        }

        if(x<0){
           System.out.println(-res);
        }else{
            System.out.println(res);
        }
    }
}
