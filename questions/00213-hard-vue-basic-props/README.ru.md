<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

**Эта задача продолжает [6 - Simple Vue](//tsch.js.org/6): сначала выполните её и затем доработайте свой код для этой задачи**.

В дополнение к Simple Vue в опциях появилось новое поле `props`. Это упрощённая версия опции `props` из Vue. Вот некоторые правила.

`props` — объект, каждое поле которого является ключом реальных props, внедряемых в `this`. Внедрённые props доступны во всех контекстах, включая `data`, `computed` и `methods`.

Prop определяется либо конструктором, либо объектом с полем `type`, содержащим конструктор(ы).

Например:

```js
props: {
  foo: Boolean
}
// или
props: {
  foo: { type: Boolean }
}
```

должно выводиться как `type Props = { foo: boolean }`.

При передаче нескольких конструкторов тип должен выводиться как объединение (union).

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

Если передан пустой объект, ключ должен выводиться как `any`.

Более подробные случаи смотрите в разделе тестовых случаев.

> `required`, `default` и props-массивы из Vue в этой задаче не рассматриваются.


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/213/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <hr><h3>Связанные задачи</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-de3d37" alt="6・Simple Vue"/></a> <!--info-footer-end-->