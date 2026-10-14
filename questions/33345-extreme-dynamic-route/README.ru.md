<!--info-header-start--><h1>Dynamic Route <img src="https://img.shields.io/badge/-%D1%8D%D0%BA%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-b11b8d" alt="экстремальный"/> </h1><blockquote><p>by 0753 <a href="https://github.com/0753Ljuc" target="_blank">@0753Ljuc</a></p></blockquote><p><a href="https://tsch.js.org/33345/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Для приведённых ниже маршрутов выведите их динамические параметры.
| Маршрут                        | Определение типа параметров                                                                                |
|--------------------------------|------------------------------------------------------------------------------------------------------------|
| `/blog/[slug]/page.js`         | `{ slug: string }`                                                                                         |
| `/shop/[...slug]/page.js`      | `{ slug: string[] }`                                                                                       |
| `/shop/[[...slug]]/page.js`    | `{ slug?: string[] }`                                                                                      |
| `/[categoryId]/[itemId]/page.js` | `{ categoryId: string, itemId: string }`                                                                 |
| `/app/[...foo]/[...bar]`       | `never` — неоднозначно: нельзя решить, относится ли `b` в `/app/a/b/c` к `foo` или к `bar`.                |
| `/[[...foo]]/[slug]/[...bar]`  | `never`                                                                                                    |
| `/[first]/[[...foo]]/stub/[...bar]/[last]` | `{ first: string, foo?: string[], bar: string[], last: string }`                               |


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/33345/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/33345/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->