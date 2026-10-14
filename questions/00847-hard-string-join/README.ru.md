<!--info-header-start--><h1>String Join <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> </h1><blockquote><p>by Matt Davis <a href="https://github.com/tl-matt-davis" target="_blank">@tl-matt-davis</a></p></blockquote><p><a href="https://tsch.js.org/847/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Создайте типобезопасную утилиту для объединения строк (join), которую можно использовать так:

```ts
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

Или так:
```ts
join('#')('a', 'b', 'c') // = 'a#b#c'
```

Если в join передан пустой разделитель (т. е. ''), строки нужно склеить как есть:
```ts
join('')('a', 'b', 'c') // = 'abc'
```

Если передан только один элемент, нужно вернуть исходный элемент (без добавления разделителя):
```ts
join('-')('a') // = 'a'
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/847/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/847/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->