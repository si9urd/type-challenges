<!--info-header-start--><h1>First of Array <img src="https://img.shields.io/badge/-%D0%BB%D1%91%D0%B3%D0%BA%D0%B8%D0%B9-7aad0c" alt="лёгкий"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/14/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

Реализуйте generic `First<T>`, который принимает массив `T` и возвращает тип его первого элемента.

Например:

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // ожидается 'a'
type head2 = First<arr2> // ожидается 3
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/14/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/14/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BBLast%20of%20Array-d9901a" alt="15・Last of Array"/></a> <!--info-footer-end-->