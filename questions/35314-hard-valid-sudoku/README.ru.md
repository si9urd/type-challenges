<!--info-header-start--><h1>Valid Sudoku <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/> <img src="https://img.shields.io/badge/-%23game-999" alt="#game"/></h1><blockquote><p>by Apollo Wayne <a href="https://github.com/Shinerising" target="_blank">@Shinerising</a></p></blockquote><p><a href="https://tsch.js.org/35314/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Судоку — известная игра с бумагой и карандашом. Цель судоку — заполнить сетку 9x9 числами так, чтобы каждая строка, каждый столбец и каждый квадрат 3x3 содержали все цифры от 1 до 9. Вам дана заполненная сетка 9x9, нужно определить, является ли она корректным решением судоку. Верните true, если да, и false, если нет.

```ts
type Matrix = [
  [9, 5, 7, 8, 4, 6, 1, 3, 2],
  [2, 3, 4, 5, 9, 1, 6, 7, 8],
  [1, 8, 6, 7, 3, 2, 5, 4, 9],
  [8, 9, 1, 6, 2, 3, 4, 5, 7],
  [3, 4, 5, 9, 7, 8, 2, 6, 1],
  [6, 7, 2, 1, 5, 4, 8, 9, 3],
  [4, 6, 8, 3, 1, 9, 7, 2, 5],
  [5, 2, 3, 4, 8, 7, 9, 1, 6],
  [7, 1, 9, 2, 6, 5, 3, 8, 4]
]
type result = ValidSudoku <Matrix>; // ожидается true
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/35314/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/35314/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->