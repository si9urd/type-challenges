<!--info-header-start--><h1>Parameter Intersection <img src="https://img.shields.io/badge/-%D1%8D%D0%BA%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-b11b8d" alt="экстремальный"/> <img src="https://img.shields.io/badge/-%23parameters-999" alt="#parameters"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23variadic-999" alt="#variadic"/> <img src="https://img.shields.io/badge/-%23optional-999" alt="#optional"/> <img src="https://img.shields.io/badge/-%23rest-999" alt="#rest"/> <img src="https://img.shields.io/badge/-%23intersection-999" alt="#intersection"/></h1><blockquote><p>by David Blass <a href="https://github.com/ssalbdivad" target="_blank">@ssalbdivad</a></p></blockquote><p><a href="https://tsch.js.org/31997/play/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-3178c6?logo=typescript&logoColor=white" alt="Принять вызов"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

Даны два массива параметров; вычислите третий кортеж, представляющий тип аргументов, необходимых для удовлетворения обоих исходных кортежей.

Ваше решение должно корректно обрабатывать массивы фиксированной и нефиксированной длины, необязательные элементы и вариативные элементы. Например:

```ts
type Result = IntersectParameters<
	[{ a: 0 }, { b: 1 }?, { c: 2 }?, ...{ d: 3 }[]],
	[{ e: 4 }?, { f: 5 }?, ...{ g: 6 }[]]
>

type Expected = [
	{
		a: 0
		e: 4
	},
	{
		b: 1
		f: 5
	}?,
	{
		c: 2
		g: 6
	}?,
	...{
		d: 3
		g: 6
	}[]
]
```


<!--info-footer-start--><br><a href="../../README.ru.md" target="_blank"><img src="https://img.shields.io/badge/-%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4-grey" alt="Назад"/></a> <a href="https://tsch.js.org/31997/answer/ru" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-teal" alt="Поделиться решением"/></a> <a href="https://tsch.js.org/31997/solutions" target="_blank"><img src="https://img.shields.io/badge/-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-de5a77?logo=awesome-lists&logoColor=white" alt="Посмотреть решения"/></a> <!--info-footer-end-->