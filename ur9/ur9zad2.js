//2.Найти во введённом тексте все американские номера телефонов (+1). В номере цифры могут разделяться внутри дефисами.
const number = /[+]1-?\d{3}-?\d{3}-?\d{4}/mg;
const str = `sckmdlvkmdflkvmf
vkdfsmvlkdmvlkm +1-102-555-0114 vkdm;vgkdfm;bfdmg
 +1-202-555-0114 kgm;lkdsmrlgkmdrlkgm
flksmlfkvm +1-302-555-0114 lgrmds;kmg;dlkmbg
fvskmvlkm +14025550114 gr;vksdmg;lksdfmlkmdf`;
console.log(str.match(number));