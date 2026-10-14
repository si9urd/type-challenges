<!--info-header-start--><h1>Defined Partial Record <img src="https://img.shields.io/badge/-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-d9901a" alt="средний"/> </h1><blockquote><p>by Aleksandr Trutanov <a href="https://github.com/alex-altay" target="_blank">@alex-altay</a></p></blockquote><p><a href="https://tsch.js.org/34857/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

### Defined Partial Record


`Record` с union-типами в качестве ключей не позволяет создать объект только с некоторыми из них:

```ts
const record: Record<'a' | 'b' | 'c', number> = { a: 42, b: 10 }
// ошибка: Property 'c' is missing in type '{ a: number; b: number; }'
// but required in type 'Record<"a" | "b" | "c", number>'
```

`Partial Record` с union-типами в качестве ключей позволяет создать объект без всех членов union, но делает все ключи и значения необязательными, потенциально оставляя их undefined:

```ts
const partial: Partial<Record<'a' | 'b' | 'c', number>> = { a: 42 }
const partialType = typeof partial // { a?: number | undefined, b? : number | undefined, c? : number | undefined }
const operation = 0 + partial.a // ошибка: 'partial.a' is possibly 'undefined'
const access = partial.c // возможно, тип не знает, что такого ключа нет
```

Нужно сделать тип, который берёт лучшее из обоих миров и создаёт все комбинации всех типов в union: использование ключа, существующего в объекте, даёт определённый тип, а использование ключа, который есть в union, но отсутствует в объекте, приводит к ошибке:
```ts
const best: DefinedPartial<Record<'a' | 'b' | 'c', number>> = { a: 42 }
const sum = 0 + best.a // 42
const error = best.b // ошибка: property 'b' does not exist on type '{ a: number; }'
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/34857/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/34857/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->