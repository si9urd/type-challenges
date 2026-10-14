<!--info-header-start--><h1>Unique Items <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/> <img src="https://img.shields.io/badge/-%23cif-999" alt="#cif"/></h1><blockquote><p>by Evgeniy <a href="https://github.com/bgenia" target="_blank">@bgenia</a></p></blockquote><p><a href="https://tsch.js.org/30178/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Некоторые концепции TypeScript нельзя описать типами, но можно выразить через ограничения типов. Например, нельзя определить тип положительных чисел, но можно проверить, положителен ли числовой литеральный тип. Один из шаблонов применения таких ограничений — constrained identity function (CIF). CIF принимает один параметр, выводит его тип, выполняет дополнительные проверки и возвращает параметр без изменений.

```ts
// Гарантирует, что `n` — положительное число
function positive<const N extends number>(n: `${N}` extends `-${string}` ? never : N) {
  return n
}

const a = positive(1) // Ok
const b = positive(-1) // Ошибка, -1 нельзя присвоить never
```

Напишите CIF `uniqueItems`, которая принимает кортеж литералов и гарантирует, что все они уникальны.
Можно использовать как изменяемые, так и readonly-кортежи.

Бонусная задача: понятные сообщения об ошибках вместо `not assignable to never`.
Бонусная задача: ошибкой должны считаться только повторяющиеся элементы кортежа, а не весь аргумент целиком.


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/30178/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/30178/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->