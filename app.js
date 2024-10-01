// // 1. Array ichidagi o’rtadagi sonni topish

// function middleNumber(arr) {
//     const len = arr.length;
//     if (len % 2 === 1) {
//       return arr[Math.floor(len / 2)];
//     }
//     return (arr[len / 2 - 1] + arr[len / 2]) / 2;
//   }
//   console.log(middleNumber([1, 2, 3, 4, 5]));
//   console.log(middleNumber([1, 2, 3, 4]));


  
//   // 2. Id si 4 bo'lgan productni o'chirish

//   function removeProductById(products) {
//     return products.filter(product => product.id !== 4);
//   }
//   const products = [
//     { id: 6, name: "Smartphone", price: 12000 },
//     { id: 2, name: "Acer", price: 12000 },
//     { id: 1, name: "Mac book", price: 17000 },
//     { id: 4, name: "HP", price: 21000 }
//   ];
//   console.log(removeProductById(products));



  
//   // 3. Stringda faqat harflar borligini tekshirish

//   function isAlphabetic(str) {
//     for (let i = 0; i < str.length; i++) {
//       const charCode = str.charCodeAt(i);
//       if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isAlphabetic("HelloWorld")); 
//   console.log(isAlphabetic("Hello123"));   
  

  
//   // 4. Bir xil so'zlarni hisoblash

//   function countWords(arr) {
//     return arr.reduce((acc, word) => {
//       acc[word] = (acc[word] || 0) + 1;
//       return acc;
//     }, {});
//   }
//   console.log(countWords(['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken']));
  



//   // 5. So'zlarning uzunligini qaytarish

//   function wordLengths(str) {
//     return str.split(' ').map(word => word.length);
//   }
//   console.log(wordLengths("Hello world"));



  
//   // 6. Bo'sh joy bor yoki yo'qligini tekshirish

//   function hasSpaces(str) {
//     return str.includes(' ');
//   }
//   console.log(hasSpaces("salom dunyo"));
//   console.log(hasSpaces("salom"));



  
//   // 7. Kalit-qiymatlarni birlashtirish

//   function keyValueConcat(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
//   }
//   console.log(keyValueConcat({ a: 2, b: 5, c: 7 }));



  
//   // 8. Imtihondan o'tgan va o'tmaganlarni hisoblash

//   function examResults(pupils) {
//     return pupils.reduce((result, pupil) => {
//       if (pupil.protcent >= 80) {
//         result.passed++;
//       } else {
//         result.failed++;
//       }
//       return result;
//     }, { passed: 0, failed: 0 });
//   }
//   const pupils = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 }
//   ];
//   console.log(examResults(pupils));



  
//   // 9. Birlashtirib, o’rtadagi sonni topish

//   function findMedianSortedArrays(nums1, nums2) {
//     const combined = [...nums1, ...nums2].sort((a, b) => a - b);
//     const len = combined.length;
//     if (len % 2 === 1) {
//       return combined[Math.floor(len / 2)];
//     }
//     return (combined[len / 2 - 1] + combined[len / 2]) / 2;
//   }
//   console.log(findMedianSortedArrays([1, 2], [3, 4]));



  
//   // 10. Matrix ichidagi qiymatni qidirish

//   function searchMatrix(matrix, target) {
//     return matrix.some(row => row.includes(target));
//   }
//   const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   console.log(searchMatrix(matrix, 3));
//   console.log(searchMatrix(matrix, 13));
  