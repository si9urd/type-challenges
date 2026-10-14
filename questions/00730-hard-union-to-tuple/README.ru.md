<!--info-header-start--><h1>Union to Tuple <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><blockquote><p>by Sg <a href="https://github.com/suica" target="_blank">@suica</a></p></blockquote><p><a href="https://tsch.js.org/730/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Реализуйте тип `UnionToTuple`, который преобразует объединение (union) в кортеж.

Как известно, union — неупорядоченная структура, а кортеж — упорядоченная, поэтому нельзя заранее предполагать, что между элементами одного union сохранится какой-либо порядок при создании или преобразовании union.

Поэтому в этой задаче **допустима любая перестановка элементов выходного кортежа**.

Ваш тип должен разрешаться в один из двух следующих типов, но ***НЕ*** в их объединение!
```ts
UnionToTuple<1>           // [1], и это верно
UnionToTuple<'any' | 'a'> // ['any','a'], и это верно
```
или
```ts
UnionToTuple<'any' | 'a'> // ['a','any'], и это верно
```
Это не должно быть объединением всех допустимых кортежей...
```ts
UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], что неверно
```


Кроме того, union может «схлопываться»: одни типы могут поглощать другие (или поглощаться ими), и предотвратить это поглощение нельзя. См. примеры:
```ts
Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // всегда true
Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // всегда true
Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // всегда true
Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // всегда true
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/730/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/730/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BBTuple%20to%20Union-d9901a" alt="10・Tuple to Union"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-7aad0c" alt="11・Tuple to Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-de3d37" alt="55・Union to Intersection"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-472%E3%83%BBTuple%20to%20Enum%20Object-de3d37" alt="472・Tuple to Enum Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->