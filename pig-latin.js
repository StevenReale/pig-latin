function findFirstVowel (str) {
  for (var i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {break;}
  }
  return i;
}

function translatePigLatin(str) {
  const firstVowel = findFirstVowel(str);
  console.log(firstVowel);
  if (firstVowel === 0) {
    return str + "way";
  } else {
    return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
  }
}

console.log(translatePigLatin("consonant"));
