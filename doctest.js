extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractLanguage(a) {
  return a.slice(0,2);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

function extractRegion(a) {
  return a.slice(3, 5);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

function localGreet(locale){
  switch(extractLanguage(locale)) {
    case 'fr':
      return 'Salut!'
    case 'en':
      switch(extractRegion(locale)) {
        case 'US':
          return 'Hey!';
        case 'GB':
          return 'Hello!';
        case 'AU':
          return 'Howdy!';
      }
  }
}