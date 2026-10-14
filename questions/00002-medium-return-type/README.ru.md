<!--info-header-start--><h1>Get Return Type <img src="https://img.shields.io/badge/-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-d9901a" alt="средний"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/2/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

Реализуйте встроенный generic `ReturnType<T>`, не используя его.

Например:

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // должно быть "1 | 2"
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/2/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/2/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->