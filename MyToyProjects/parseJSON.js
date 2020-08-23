/**
 * 이 문제는 많이 어렵습니다. Bare minimum requirements에 해당하지 않으니,
 * 더욱 깊게 공부하고 싶으신 분들만 풀어도 좋습니다.
 * 
 * 1. spec/fixtures.js를 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 parse해 주어야할지 생각해 보세요.
 * 
 * 2. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  const parseJSON = JSON.parse;
 * 
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?
 * 
 * 
일단, parseJSON은 stringifyJSON의 반대 메서드와 같음
stringify 된 값을 다시 원래 값으로 바꿔주는 것, 즉, 문자열 형태의 자료를 넣으면 => 그것을 다시 본래 데이터로 바꿔줌
예를 들어, '6'을 넣으면? => 숫자형 데이터로
'true'를 넣으면 ? => 불리안 데이터로
"'string'" 을 넣으면? 'string' 으로
그러면 또, 문제가 되는 부분이 배열을 넣으면?
이런식으로 설계를 해두고, 변환한 값을 리턴해주는 함수인 것

# 수도코드 작성
1. 먼저, 간단한 것들부터 처리, 
1)'숫자'를 받으면, Number()을 써서 숫자로(O)
2)'true'를 받으면, 그 값이 'true'와 같으면 true, 다르면, false를 리턴하는 식으로(O)
3) 'null'을 받으면 null로 (O)
4) 문자열을 받으면, 각 끝에 ""를 substring(1,length-1)로해주자(O)
5) 에러처리 (undefined, 함수를 받으면 syntaxerror)(O)
6) 이제 배열과 객체..
7) 배열에서는 일단 요소를 하나하나 데이터로 풀어서(?) 새로만든 배열에 푸시해주고(그래야 순서도 맞고), 마지막에 모두 푸시했으면, 그 배열을 리턴해주는 식
-> 이 때, 요소를 하나하나 데이터를 풀 때는? 재귀호출을 이용 (만약 객체가 나오면, 객체 로직으로 가게될 것)
놓친 부분 : 만약 배열 혹은 객체를 스플릿을 이용해서 하면, [1,2,3] 이런 경우는 오케이지만, 1,2,3,[1,2,3],23,32 이경우에는 [1 이 스플릿된다..
그러면 일단 배열의 경우, 배열안에 객체(객체도 ,를 포함하므로), 배열을 걸러내야함
includes('[') ..이경우도 있음= > [1,2,3,[1,2] 즉, 안에 [] 배열이 있는 경우 + 그 배열에 오타를 낸 경우
그럼 일단.. 이안에 배열과 객체를 솎아 낸 다음에 해볼까? 그러면 나머지는 재귀호출해서 데이터 변환후 추가하면 되고
솎아낸 배열 객체도 또다시 재귀호출해서 넣으면 배열을 리턴하고, 그 배열을 다시 본래 함수로 돌아와서 추가하게하는 로직
# how to get array, object in array
 배열 [, ] 기호를 기준으로 split을하면?
2. 그러면 안에서 배열, 객체를 어떻게 솎아낼지를 생각, 그리고 말도 안되는 경우가 나왔을 때 예외처리하면 undefined를 재귀호출에서
리턴할텐데 그건 어떻게 처리할지(undefined는 배열, 객체에 추가하면 안되니까)
**/
function parseJSON(json) {
  try {
    json = json.trim();
    if (!isNaN(Number(json))) {
        return Number(json);
    } else if (json === 'true' || json === 'false') {
        return json === 'true' ? true : false;
    } else if (json === 'null') {
        return null;
    } else if (json[0] === '"' && json[json.length-1] === '"') {
        return json.substring(1, json.length-1);
    } else if (eval('Array.isArray(' + json + ')') === true) {
        if (eval(json).length === 0) {
          return [];
        }
        let resultArr = [];
        json = json.substring(1, json.length -1);
        let jsonArr = json.split(',')
        for (let el of jsonArr) {
          resultArr.push(parseJSON(el));
        }
        return resultArr;
    } else if(eval('(' + json + ')').constructor === Object) {
        json = eval('(' + json + ')');
        let resultObj = {};
        for (let el in json) {
          let val;
          if (typeof json[el] === 'string') {
            val = json[el];
          } else {
            val = parseJSON(json[el]);
          }
          resultObj[el] = val;
        }
        return resultObj;
    } else {
        try {
          throw new SyntaxError('cannot parse property of unformed data', 'parseJSON.js', 20);
        } catch(e) {
          throw new SyntaxError('cannot parse property of unformed data', 'parseJSON.js', 20);
      }
    }
  } catch(e) {
      throw new SyntaxError('cannot parse property of unformed data', 'parseJSON.js');
  }
};


//for testing
// const stringifyJSON = JSON.stringify;
// function parseFAKE(json) {
//   try {
//     json = json.trim();
//     if (!isNaN(Number(json))) {
//       return Number(json);
//     } else if (json === 'true' || json === 'false') {
//       return json === 'true' ? true : false;
//     } else if (json === 'null') {
//       return null;
//     } else if (json[0] === '"' && json[json.length-1] === '"') {
//       return json.substring(1, json.length-1);
//     } else if (eval('Array.isArray(' + json + ')') === true) {
//       if (eval(json).length === 0) {
//           return [];
//       }
//       let resultArr = [];
//       json = json.substring(1, json.length -1);
//       let jsonArr = json.split(',')
//       for (let el of jsonArr) {
//         resultArr.push(parseJSON(el));
//       }
//       return resultArr;
//     } else if(eval('(' + json + ')').constructor === Object) {
//       json = eval('(' + json + ')');
//       let resultObj = {};
//       for (let el in json) {
//         let val;
//         if (typeof json[el] === 'string') {
//           val = json[el];
//         } else {
//           val = parseJSON(json[el]);
//         }
//         resultObj[el] = val;
//       }
//       return resultObj;
//     } else {
//         try {
//           throw new SyntaxError('cannot parse property of unformed data');
//         } catch(e) {
//           throw new SyntaxError('cannot parse property of unformed data');
//       }
//     }
//   } catch(e) {
//       throw new SyntaxError('cannot parse property of unformed data');
//   }
// };

// const parseJSON = JSON.parse;
// function isSameArr(arr1, arr2) {
//   if (arr1.toString() === arr2.toString()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // except for (array or object)
// function check(value) {
//   console.log(parseFAKE(value));
//   console.log(parseJSON(value));
//   if (parseFAKE(value) === parseJSON(value)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // for array 
// function checkArr(value) {
//   console.log(parseFAKE(value));
//   console.log(parseJSON(value));
//   if(isSameArr(parseFAKE(value), parseJSON(value))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkObj(value) {
//   console.log(parseFAKE(value));
//   console.log(parseJSON(value));
//   let obj1k = Object.keys(parseFAKE(value)).toString();
//   let obj2k = Object.keys(parseJSON(value)).toString();
//   let obj1v = Object.values(parseFAKE(value)).toString();
//   let obj2v = Object.values(parseJSON(value)).toString();

//   if (obj1k === obj2k && obj1v === obj2v) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var parseableStrings = [
//   // basic stuff
//   '[]',
//   '{"foo": ""}',
//   '{}',
//   '{"foo": "bar"}',
//   '["one", "two"]',
//   '{"a": "b", "c": "d"}',
//   '[null,false,true]',
//   '{"foo": true, "bar": false, "baz": null}',
//   '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
//   '{"boolean, true": true, "boolean, false": false, "null": null }',

//   // basic nesting
//   '{"a":{"b":"c"}}',
//   '{"a":["b", "c"]}',
//   '[{"a":"b"}, {"c":"d"}]',
//   '{"a":[],"c": {}, "b": true}',
//   '[[[["foo"]]]]',

//   // escaping
//   '["\\\\\\"\\"a\\""]',
//   '["and you can\'t escape thi\s"]',

//   // everything all at once
//   '{"CoreletAPIVersion":2,"CoreletType":"standalone",' +
//     '"documentation":"A corelet that provides the capability to upload' +
//     ' a folderâ€™s contents into a userâ€™s locker.","functions":[' +
//     '{"documentation":"Displays a dialog box that allows user to ' +
//     'select a folder on the local system.","name":' +
//     '"ShowBrowseDialog","parameters":[{"documentation":"The ' +
//     'callback function for results.","name":"callback","required":' +
//     'true,"type":"callback"}]},{"documentation":"Uploads all mp3 files' +
//     ' in the folder provided.","name":"UploadFolder","parameters":' +
//     '[{"documentation":"The path to upload mp3 files from."' +
//     ',"name":"path","required":true,"type":"string"},{"documentation":' +
//     ' "The callback function for progress.","name":"callback",' +
//     '"required":true,"type":"callback"}]},{"documentation":"Returns' +
//     ' the server name to the current locker service.",' +
//     '"name":"GetLockerService","parameters":[]},{"documentation":' +
//     '"Changes the name of the locker service.","name":"SetLockerSer' +
//     'vice","parameters":[{"documentation":"The value of the locker' +
//     ' service to set active.","name":"LockerService","required":true' +
//     ',"type":"string"}]},{"documentation":"Downloads locker files to' +
//     ' the suggested folder.","name":"DownloadFile","parameters":[{"' +
//     'documentation":"The origin path of the locker file.",' +
//     '"name":"path","required":true,"type":"string"},{"documentation"' +
//     ':"The Window destination path of the locker file.",' +
//     '"name":"destination","required":true,"type":"integer"},{"docum' +
//     'entation":"The callback function for progress.","name":' +
//     '"callback","required":true,"type":"callback"}]}],' +
//     '"name":"LockerUploader","version":{"major":0,' +
//     '"micro":1,"minor":0},"versionString":"0.0.1"}',
//   '{ "firstName": "John", "lastName" : "Smith", "age" : ' +
//     '25, "address" : { "streetAddress": "21 2nd Street", ' +
//     '"city" : "New York", "state" : "NY", "postalCode" : ' +
//     ' "10021" }, "phoneNumber": [ { "type" : "home", ' +
//     '"number": "212 555-1234" }, { "type" : "fax", ' +
//     '"number": "646 555-4567" } ] }',
//   '{\r\n' +
//     '          "glossary": {\n' +
//     '              "title": "example glossary",\n\r' +
//     '      \t\t"GlossDiv": {\r\n' +
//     '                  "title": "S",\r\n' +
//     '      \t\t\t"GlossList": {\r\n' +
//     '                      "GlossEntry": {\r\n' +
//     '                          "ID": "SGML",\r\n' +
//     '      \t\t\t\t\t"SortAs": "SGML",\r\n' +
//     '      \t\t\t\t\t"GlossTerm": "Standard Generalized ' +
//     'Markup Language",\r\n' +
//     '      \t\t\t\t\t"Acronym": "SGML",\r\n' +
//     '      \t\t\t\t\t"Abbrev": "ISO 8879:1986",\r\n' +
//     '      \t\t\t\t\t"GlossDef": {\r\n' +
//     '                              "para": "A meta-markup language,' +
//     ' used to create markup languages such as DocBook.",\r\n' +
//     '      \t\t\t\t\t\t"GlossSeeAlso": ["GML", "XML"]\r\n' +
//     '                          },\r\n' +
//     '      \t\t\t\t\t"GlossSee": "markup"\r\n' +
//     '                      }\r\n' +
//     '                  }\r\n' +
//     '              }\r\n' +
//     '          }\r\n' +
//     '      }\r\n'
// ];

// for(let el of parseableStrings) {
//   try {
//     if(Array.isArray(eval(el))) {
//       console.log(checkArr(el));
//     } else {
//       console.log(check(el));
//     }
//   } catch(e) {
//     console.log(checkObj(el));
//   }
// }




