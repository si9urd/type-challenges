<!--info-header-start--><h1>Intersection <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Pineapple <a href="https://github.com/Pineapple0919" target="_blank">@Pineapple0919</a></p></blockquote><p><a href="https://tsch.js.org/5423/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Реализуйте типовую версию Lodash.intersection с небольшим отличием. `Intersection<T>` принимает массив T, содержащий несколько массивов или элементов любого типа, включая union, и возвращает новое объединение (union), содержащее все элементы пересечения.

```ts
type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // ожидается 2
type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // ожидается 2 | 3
type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // ожидается never
type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // ожидается 3
type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // ожидается 2 | 3
type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // ожидается never
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/5423/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/5423/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->