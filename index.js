const calc = require("./calc");

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.sub(10,2));


//npm package 사용
//터미널 -> npm init
// version : 내 패키지 버전(초기 버전이기 떄문에 1.0.0로 나옴)
//description : 몰라
// entry point : 패키지를 최초로 사용할 js파일명
//git repository: 깃에 올릴거냐
//keywords :
// author : 내 이름 쓰든가 말든가
//licence : 
//scripts에 저장해놓은 단축어?"start": "node index.js" 실행하기 -> 터미널에 npm start 하면 node에서 실행한 나의 Js파일을 터미널에서 읽을 수 있음

const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1,color2,color3);