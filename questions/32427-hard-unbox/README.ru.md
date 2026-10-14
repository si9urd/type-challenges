<!--info-header-start--><h1>Unbox <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23promise-999" alt="#promise"/> <img src="https://img.shields.io/badge/-%23function-999" alt="#function"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Julian Coy <a href="https://github.com/eXamadeus" target="_blank">@eXamadeus</a></p></blockquote><p><a href="https://tsch.js.org/32427/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Как построить тип, который «распаковывает» массивы, функции, промисы и кортежи?

Пример:

```typescript
Unbox<string> // string
Unbox<()=>number> // number
Unbox<boolean[]> // boolean
Unbox<Promise<boolean>> // boolean
```

Бонус: можно ли сделать его рекурсивным?

```typescript
Unbox<() => () => () => () => number> // number
```

Двойной бонус: можно ли управлять рекурсией?

```typescript
Unbox<() => () => () => () => number, 3> // () => number
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/32427/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/32427/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->