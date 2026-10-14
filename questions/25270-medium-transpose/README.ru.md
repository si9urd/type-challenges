<!--info-header-start--><h1>Transpose <img src="https://img.shields.io/badge/-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-d9901a" alt="средний"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/></h1><blockquote><p>by Apollo Wayne <a href="https://github.com/Shinerising" target="_blank">@Shinerising</a></p></blockquote><p><a href="https://tsch.js.org/25270/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Транспонирование матрицы — это операция, отражающая матрицу относительно главной диагонали, то есть меняющая местами индексы строк и столбцов матрицы A и порождающая другую матрицу, часто обозначаемую A<sup>T</sup>.

```ts
type Matrix = Transpose <[[1]]>; // ожидается [[1]]
type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // ожидается [[1, 3], [2, 4]]
type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // ожидается [[1, 4], [2, 5], [3, 6]]
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/25270/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/25270/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->