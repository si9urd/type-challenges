<!--info-header-start--><h1>Multiply <img src="https://img.shields.io/badge/-%D1%8D%D0%BA%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-b11b8d" alt="экстремальный"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/517/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

**Эта задача продолжает [476 - Sum](https://tsch.js.org/476): рекомендуется сначала выполнить её и затем доработать свой код для этой задачи.**

Реализуйте тип `Multiply<A, B>`, который перемножает два неотрицательных целых числа и возвращает произведение в виде строки. Числа могут быть заданы как строка, number или bigint.

Например:

```ts
type T0 = Multiply<2, 3> // '6'
type T1 = Multiply<3, '5'> // '15'
type T2 = Multiply<'4', 10> // '40'
type T3 = Multiply<0, 16> // '0'
type T4 = Multiply<'13', '21'> // '273'
type T5 = Multiply<'43423', 321543n> // '13962361689'
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/517/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/517/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00476-extreme-sum/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-476%E3%83%BBSum-b11b8d" alt="476・Sum"/></a> <!--info-footer-end-->