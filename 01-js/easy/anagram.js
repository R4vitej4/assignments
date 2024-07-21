/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  let n1=str1.length;
  let n2=str2.length;
  if(n1!=n2){
    return false;
  }
  let freq={};
  for (let char of str1){
    freq[char]=(freq[char]||0)+1;
  }

  for(let char of str2){
    if(!freq[char]){
      return false;
    }
    freq[char]-=1;
  }

  for(let key in freq){
    if(freq[key]!=0)return false;
  }
  return true;
}

module.exports = isAnagram;
