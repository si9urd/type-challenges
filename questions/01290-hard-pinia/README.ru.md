<!--info-header-start--><h1>Pinia <img src="https://img.shields.io/badge/-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-de3d37" alt="сложный"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/1290/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Создайте функцию на уровне типов, типы которой похожи на библиотеку [Pinia](https://github.com/posva/pinia). Саму функцию реализовывать не нужно — только добавить типы.

### Обзор

Функция принимает единственный параметр — объект. Объект содержит 4 свойства:

- `id` — просто строка (обязательно)
- `state` — функция, возвращающая объект с состоянием хранилища (обязательно)
- `getters` — объект с методами, похожий на вычисляемые значения Vue или геттеры Vuex; подробности ниже (необязательно)
- `actions` — объект с методами, которые могут производить побочные эффекты и изменять состояние; подробности ниже (необязательно)

### Getters

Когда вы определяете хранилище так:

```typescript
const store = defineStore({
  // ...другие обязательные поля
  getters: {
    getSomething() {
      return 'xxx'
    }
  }
})
```

Использовать его нужно так:

```typescript
store.getSomething
```

а не так:

```typescript
store.getSomething()  // ошибка
```

Кроме того, геттеры могут обращаться через `this` к состоянию и/или другим геттерам, но состояние доступно только для чтения.

### Actions

Когда вы определяете хранилище так:

```typescript
const store = defineStore({
  // ...другие обязательные поля
  actions: {
    doSideEffect() {
      this.xxx = 'xxx'
      return 'ok'
    }
  }
})
```

Использовать его — значит просто вызвать:

```typescript
const returnValue = store.doSideEffect()
```

Actions могут возвращать любое значение или ничего не возвращать, а также принимать любое количество параметров разных типов.
Типы параметров и возвращаемый тип не должны теряться, то есть в месте вызова должна быть доступна проверка типов.

Через `this` можно читать и изменять состояние. К геттерам можно обращаться через `this`, но они доступны только для чтения.


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/1290/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/1290/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->