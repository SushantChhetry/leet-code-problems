# leet-code-problems
Solutions and notes to the leet code problems I have solved.

## 🟢 EASY

## Array

### Merge Sorted Array ✅
(06/06/2023) <br/>
To solve the Merge Sorted Array problem, you can use the <strong>two-pointer </strong> approach. 
- Initialize two pointers, p1 and p2, to the last valid elements of nums1 and nums2 respectively.
- Set p as the index of the last element of nums1 (i.e., m + n - 1).
- Compare the elements at nums1[p1] and nums2[p2].
  - If nums1[p1] is greater than nums2[p2], set nums1[p] as nums1[p1], decrement p1 by 1, and decrement p by 1.
  - Otherwise, set nums1[p] as nums2[p2], decrement p2 by 1, and decrement p by 1.
- Repeat step 2 until p1 or p2 becomes less than 0.
- If there are any remaining elements in nums2 after the above steps, copy them to the beginning of nums1.

### Remove Element ✅
(06/07/2023) <br/>
You can solve this problem by using <strong>two pointers </strong>. 
- Initialize two pointers, one at the beginning and the other at the end of the array.
- Iterate through the array with the first pointer, checking if the element at the current index is equal to the target element.
- If it is, swap the element with the element at the end of the array and decrement the end pointer.
- If it's not, increment the first pointer.
- Keep doing this until the first pointer crosses the end pointer.int

### Remove Duplicates from Sorted Array ✅ 
(07/06/2023) <br/>
You can solve this problem using <strong> Sliding Window </strong>.
 - Initialize two pointers, one at the beginning and the other next to it and a counter
- Iterate through the array with the first pointer, checking if the element at right index is equal or less than the left index.
  - If it is, increment the second pointer.
  - If it's not, replace the left + 1 index with the right index. Increment the cointer
- Keep doing this until the right pointer reaches the array length


### 169. Majority Element ✅ 
(07/11/2023) <br/>
You can solve this problem using <strong> Hashmap </strong>.
- Check if array length is less than or equal to 2, return first element
- Iterate through the array and update the hasmap and its count.
- Iterate through the hashmap and find the max occurance of the key, store the key and return it

### 169. Best Time to Buy and Sell Stock✅ 
(07/13/2023) <br/>
 ### Naive
- Initialize variables: Start by initializing two variables, minPrice and maxProfit, to track the minimum price and maximum profit encountered so far. Set minPrice to infinity and maxProfit to zero.

- Iterate through the prices: Iterate through the given array of prices, and for each price:

- Update minPrice: If the current price is smaller than minPrice, update minPrice to the current price.
- Calculate potential profit: Calculate the potential profit by subtracting minPrice from the current price.
- Update maxProfit: If the potential profit is greater than maxProfit, update maxProfit to the potential profit.
- Return the maximum profit: After iterating through all the prices, return the value of maxProfit.

### 125. Valid Palindrome✅ 
(07/17/2023) <br/>

- Use replace and tolowercase methods to setup a new string we will use <strong> two pointers on </strong>
- Initialize variables: left = 0 and right = end of this new string.
- Iterate through the char: if the char at left and right are not equal return false
   - If they are equal update the pointer values
 - Return true if the loop ends

### 392. Is Subsequence✅ 
(07/17/2023) <br/>
<strong> two pointer </stromg>
- Initialize two varibles, p1 for s and p2 for t
- loop while we check all char in t
    - if t and s have the char at p2 and p1 respectively, increment p1 and p2
    - if s char at p1 is not in t char at p2, the increment p1
- Check if p1++ is lenght of s
    - if it is not return false
    - else return true
 
### 383. Ransom Note ✅ 
(07/24/2023) <br/>

- Loop through the char of magazine
  - Use a map to store the char of magazine and it is count
- Loop through the ransomeNote
  - check if the map contains the char of ransomeNote
    - if not return false
    - if it does decrement the map value and check if the value is now less than zero
      - if it is return false
- Once loop ends return true

### 205. Isomorphic Strings ✅ ❗
(07/24/2023) <br/>

- Create a new map
- Loop through the char of S
  - Create two variables to store the char of s and t at that index
  - Check if the map has the key of char of s
    - if it does and its value is not equal to the char t return false
  - else check if we have a value in the map that is equal to char T
    - this means that we already have the char mapped to something else, so return false
    - else add the char s key to char t value
- return true

### 242. Valid Anagram ✅ 
(07/24/2023) <br/>
- Check if the two string's lengths are equal, if not return false
- Create a new map
- Loop through s and create a key value pair in the map of each occurance of the char
- Loop through t and check if there is a key in the map for t char
  - if there is decreament it, check if the new value is less than 0, if yes return false
  - if not return false
- reurn true

### 1. Two Sum  ✅ 
(07/26/2023) <br/>
- Create a new map
- loop through the array
  - if map does not have the element as key, add the target - element as the key and its index as the value
  - check if there is an element in the map which has a different index value
  - if it does then return the array of the index and the map's key value
 
  ### 290. Word Pattern  ✅ 
(07/27/2023) <br/>
- Create a new maps
- Split the string into an array of words
- loop through the words
  - Populate map1 with char as key and word as value if key not present in map1
  - Populate map2 with word as key and char as value if key not present in map2
  - If value is present return false accordingly
- return true

 ### 202. Happy Number Recursion✅ 
(07/31/2023) <br/>
- Base cases to check if the parameter is less than 4
  -  If it is, check if it is 1, return boolean
-  Loop while the mod by 10 of number is not 0
  - Use mod by 10 to get the last digit
  - Sum the square of the digit
  - Remove the last digit by dividing it by 10 and flooring it
- Recursive call


### 202. Happy Number Set✅ 
(07/31/2023) <br/>
- Create a new set to detect numbers we have seen and check for infinite looping conditions
- loop while number is not 1 and number is not in the set
  - add the number to the set
  - loop while the mod by 10 of the number is not 0
    - use mode by 10 to get the last digit
    - sum the square of the digit
    - remove the last digit by dividing it by 10 and flooring it
  - assign the number the sum we created
- return to check if number is equal to 1


## 🔵 MEDIUM

### Remove Duplicates from Sorted Array II ☑
(07/10/2023) <br/>
You can solve this problem using <strong> two pointers </strong>.
 - Initialize two pointers, both starting at the second element i.e. index 1
   - first pointer keep tracks of non-duplicate elements
   - second pointer keep tracks of duplicate elements 
- Iterate through the array with starting from the second element to the array's last element.
  - Check if the previous elements is equal the the current index's element
    - If it is then move the duplicate check pointer
    - If it is not then move the duplicate pointer element to 1 to indicate that this is a non duplicate element
  - Check if duplicate element pointer is less than or equal to 2
    - If it is then swap the current pointer element with the iterated element
- Return the pointer that is keeping track of the duplicate elements


### 189. Rotate Array ☑
(07/12/2023) <br/>
You can solve this problem using <strong> two pointers </strong>.
- Determine the number of rotations: Decide how many times you want to rotate the array and store it in a variable, let's say "k".

- Handle special cases: Check if "k" is greater than the length of the array or if "k" is a negative number. In such cases, you can adjust the value of "k" to bring it within the valid range. For example, if "k" is greater than the array length, you can take the modulus of "k" with the array length to get the effective number of rotations.

- Reverse the entire array: Start by reversing the entire array. You can swap the elements from the start and end of the array, gradually moving towards the middle until you reach the middle element. This step ensures that the elements that need to be at the front after rotation will end up at the back, and vice versa.

- Reverse the first "k" elements: Reverse the first "k" elements of the array. This can be done by swapping the elements from the start and end, moving towards the middle until you reach the "k/2" element. This step brings the desired "k" elements to the front of the array.

- Reverse the remaining elements: Reverse the remaining elements of the array, excluding the first "k" elements. This can be done by swapping the elements from the start and end, gradually moving towards the middle until you reach the middle of the remaining elements. This step ensures that the remaining elements are brought back to their original order.

- Print or return the rotated array: Finally, you can print the rotated array or return it from the function, depending on your requirements.

### 189. Best Time to Buy and Sell Stocks II ☑
(07/19/2023) <br/>
Instead of trying to find the exact buying and selling points, <strong> focus on identifying the increasing sequences of prices </strong>. The maximum profit can be obtained by simply buying at the beginning of each increasing sequence and selling at the end of it

- initialize the maxProfit variable
- loop through the array
   - if the price is increasing compared to previous day
     - then update the maxProfit by adding the difference between the present day and previous day
 - return the final profit



