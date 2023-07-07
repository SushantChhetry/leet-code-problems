# leet-code-problems
Solutions and notes to the leet code problems I have solved.

## 🟢 EASY

## Array

### Merge Sorted Array ✅
Hint:

### Remove Element ✅
You can solve this problem by using <strong>two pointers </strong>. 
- Initialize two pointers, one at the beginning and the other at the end of the array.
- Iterate through the array with the first pointer, checking if the element at the current index is equal to the target element.
- If it is, swap the element with the element at the end of the array and decrement the end pointer.
- If it's not, increment the first pointer.
- Keep doing this until the first pointer crosses the end pointer.int
