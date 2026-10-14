<!--info-header-start--><h1>Permutations of Tuple <img src="https://img.shields.io/badge/-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-d9901a" alt="средний"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23conditional%20type-999" alt="#conditional type"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>by null <a href="https://github.com/gaac510" target="_blank">@gaac510</a></p></blockquote><p><a href="https://tsch.js.org/21220/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Дан generic-кортежный тип `T extends unknown[]`. Напишите тип, который порождает все перестановки `T` в виде объединения (union).

Например:

```ts
PermutationsOfTuple<[1, number, unknown]>
// Должно вернуть:
// | [1, number, unknown]
// | [1, unknown, number]
// | [number, 1, unknown]
// | [unknown, 1, number]
// | [number, unknown, 1]
// | [unknown, number ,1]
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/21220/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/21220/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-296%E3%83%BBPermutation-d9901a" alt="296・Permutation"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-4260%E3%83%BBAllCombinations-d9901a" alt="4260・AllCombinations"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-8767%E3%83%BBCombination-d9901a" alt="8767・Combination"/></a> <!--info-footer-end-->