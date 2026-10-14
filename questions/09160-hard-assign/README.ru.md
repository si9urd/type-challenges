<!--info-header-start--><h1>Assign <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by zhangxiaofan <a href="https://github.com/workkk98" target="_blank">@workkk98</a></p></blockquote><p><a href="https://tsch.js.org/9160/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Есть целевой объект и исходный массив объектов. Нужно скопировать свойства из источников в цель; если у цели есть такое же свойство, как у источника, всегда сохраняйте свойство источника, а свойство цели отбрасывайте. (Вдохновлено API `Object.assign`)

### Пример

```ts
type Target = {
  a: 'a'
}

type Origin1 = {
  b: 'b'
}

// type Result = Assign<Target, [Origin1]>
type Result = {
  a: 'a'
  b: 'b'
}
```


```ts
type Target = {
  a: 'a'
  d: {
    hi: 'hi'
  }
}

type Origin1 = {
  a: 'a1',
  b: 'b'
}


type Origin2 = {
  b: 'b2',
  c: 'c'
}

type Answer = {
   a: 'a1',
   b: 'b2',
   c: 'c'
   d: {
      hi: 'hi'
  }
}
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/9160/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/9160/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->