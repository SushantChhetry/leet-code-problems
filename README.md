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



