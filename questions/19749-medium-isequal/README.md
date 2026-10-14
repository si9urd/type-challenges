<!--info-header-start--><h1>IsEqual <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by Takahiro Kato <a href="https://github.com/doz13189" target="_blank">@doz13189</a></p></blockquote><p><a href="https://tsch.js.org/19749/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-gray" alt="Русский"/></a> </p><!--info-header-end-->

Implements the equal operator that returns a boolean for whether the two given types are equal. 

For example:

```ts
type X1 = 1
type Y1 = 1
type T1 = IsEqual<X1, Y1> // expected to be true

type X2 = 1
type Y2 = 2
type T2 = IsEqual<X2, Y2> // expected to be false
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/19749/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/19749/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->