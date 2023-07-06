//MERGE SORTED ARRAYS
//link: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1, p2 =n-1 ,p = m+n-1; //pointers 001

    while(p1 >=0 && p2>= 0){
        if(nums1[p1] >= nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        }
        else{
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    //copy remaining elements
    while(p2 >=0){
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    return;
};


// PSUEDOCODE
// To solve the Merge Sorted Array problem, you can use the two-pointer approach. Here's a step-by-step guide:

// 1. Initialize two pointers, p1 and p2, to the last valid elements of nums1 and nums2 respectively. Set p as the index of the last element of nums1 (i.e., m + n - 1).
// 2. Compare the elements at nums1[p1] and nums2[p2].
//    - If nums1[p1] is greater than nums2[p2], set nums1[p] as nums1[p1], decrement p1 by 1, and decrement p by 1.
//    - Otherwise, set nums1[p] as nums2[p2], decrement p2 by 1, and decrement p by 1.
// 3.Repeat step 2 until p1 or p2 becomes less than 0.
// 4.If there are any remaining elements in nums2 after the above steps, copy them to the beginning of nums1.
//
//By following this approach, you can merge the two sorted arrays in-place and obtain a sorted nums1 array without using any additional space.
