// index.ts
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

// typescript 型別推論（Type Inference）
// ex: myName age hasPet 會被推論為上一個設定的型別
// ex: nothing nothingLiterally 就會被推論為 any type 

//作者提到 any型別 容易容易造成混亂～

//遲滯性指派 Delayed Initialization
// ex
let hello;

hello = "hello";
hello = 123;

//typescript 就不會鳥你啦

//declare let name
// 如何在typescript中解决 error TS2451: Cannot redeclare block-scoped variable 'name'
// https://www.jianshu.com/p/78268bd9af0a 


// index.ts

let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
  };

  let someone = {
    knows: undefined,
    identity: null
  };

let info2 = {
    info, person : "people"
};



//Hypothesis：狹義物件的完整性
// 泛指狹義物件在被 TypeScript 推論的狀態下，屬性不能被任意新增或更改成其他型別，我們能夠做的事情只有：

// 全面覆寫，狹義物件的屬性對照型別格式也要完全對位
// 更改狹義物件本身就擁有屬性對應的值，其中：要帶入的值的型態必須對應到該屬性的型態
// 我們稱這樣的行為為「保持狹義物件的完整性」。
//廣義物件