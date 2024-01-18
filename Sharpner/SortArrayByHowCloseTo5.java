
Write a program to sort the array based on how close it is to number 5.



If the difference is the same then the element whose value is lesser will be before.

Note both the array and size is already given.





Example 1:



Input:-

[1,3,5,7,9]



Output:-

[5,3,7,1,9]



Explanation:-

Element 5 is the closest , element 3 and element 7 is 2 values away from number 5 but since 3 <7. 3 will occur before 7.

element 1 and element 9 is 4 values away from number 5 but since 1 <9. 1 will occur before 9.





Input:-

[7, 8 ,10 ,1, 4, 9]



Output:-

[4,7,8,1,9,10]



Explanation:-

4 the difference is 1,

7 the difference is 2,

8 the difference is 3,

element 1 and element 9 is 4 values away from number 5 but since 1 <9. 1 will occur before 9.

10 the difference is 5.






The Super hill

You have given a array of heights of hills , the Super hill is the hill which is taller than its neighbors hills .

You have to find the Super hill and return its index if more then one Super hills are there return any one of index .



Example 1:

Input: hills = [1,2,3,1]

Output: 2

Explanation: 3 is a Super hill and your function should return the index number 2.



Example 2:

Input: nums = [1,2,1,3,5,6,4]

Output: 5

Explanation: Your function can return either index number 1 where the Super hill is 2, or index number 5 where the Super hill is 6.



Constraints:

1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.
See solution
3

Puzzle game

You are playing a puzzle game , where you have to create a Number by appending 2 parts of that number array.

You have given a array of integers and a number X .

you have to create X by appending 2 integers in the array next to each other .

You have to return how many ways is possible to make X by the array elements



Example 1:

Input:

N = 4

numbers[] = {1, 212, 12, 12}

X = 1212

Output: 3

Explanation: We can obtain X=1212 by concatenating:

numbers[0] = 1 with numbers[1] = 212

numbers[2] = 12 with numbers[3] = 12

numbers[3] = 12 with numbers[2] = 12



Example 2:

Input:

N = 3

numbers[] = {11, 11, 110}

X = 11011

Output: 2

Explanation: We can obtain X=11011 by concatenating:

numbers[2] = 110 with numbers[0] = 11

numbers[2] = 110 with numbers[1] = 11

