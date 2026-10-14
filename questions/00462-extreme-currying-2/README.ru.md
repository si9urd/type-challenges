<!--info-header-start--><h1>Currying 2 <img src="https://img.shields.io/badge/-%D1%8D%D0%BA%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-b11b8d" alt="экстремальный"/> </h1><blockquote><p>by Kim <a href="https://github.com/hubvue" target="_blank">@hubvue</a></p></blockquote><p><a href="https://tsch.js.org/462/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

[Каррирование](https://ru.wikipedia.org/wiki/Каррирование) — это приём преобразования функции, принимающей несколько аргументов, в последовательность функций, каждая из которых принимает один аргумент.

Но в повседневной жизни часто применяется и каррирование с динамическим числом аргументов, например API `Function.bind(this, [...params])`.

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

Поэтому, опираясь на `Currying 1`, нам нужна версия с динамическими аргументами:

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1)

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const nine = curriedAdd(2)(3)(4)
```

В этой задаче `DynamicParamsCurrying` может принимать функцию с числом аргументов от нуля и более — нужно правильно её типизировать. Возвращаемая функция должна принимать как минимум один аргумент. Когда все аргументы переданы, она должна корректно вернуть тип результата исходной функции.


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/462/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/462/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-de3d37" alt="17・Currying 1"/></a> <!--info-footer-end-->