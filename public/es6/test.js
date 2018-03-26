'use  strict';
//  средство  еsб:  блок  "левых"  объявлений
const  sentences  =  [
  {subject:  'JS', verb:  'is', object :  'awesome'},
  {subject:  'Long', verb:  'live', object :  'the King'},
];
// средство  еsб:  деструктуризация  объекта
function  say ({subject,verb,object}) {
  // средство  еsб:  строки  ша блона
  console.log('${subject}  ${verb}  ${object}');
};
// средство  еsб:  for ..o f
for (let  s  of  sentences) {
  say(s);
};