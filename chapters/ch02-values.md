# Value

- Primitive values (`string`, `number`, `boolean`, ...)
- Custom values ( array of string, array of number, object )

---

## 2.1 String

String is a sequence of characters which is surrounded by one of `""` or `''`.  Also include the quotes.

```ts

// Example

"Mi Chan Ei Mon"
'Jin San'
`NagagyiMa San`

"Mi Chan Ei Mon's Jin San"


// mistakes

"Mi Chan Ei Mon'
'Mi Chan Ei Mon's Jin San'


```

Escaping with forward slash.

```ts

'Mi Chan Ei Mon\'s Jin San'
"\"Hello\", said by Mi Chan Ei Mon"


```

### 2.1.1 String operations 

`"hello" + "world"` concatinate the string = `"helloworld"`
`"hello " + "world"` concatinate the string = `"hello world"`
`"hello" + " world"` concatinate the string = `"hello world"`


How to store string in a variable?

```ts
let name = "Mi Chan Ei Mon";


// If you set the type explicitly
let name: string = "Mi Chan Ei Mon";
```

--- 
 
## 2.2 Number

type `number`

```ts
1
-1

1.2
-1.2

10_000;
-10_000;

Infinity
-Infinity;

NaN


```

---

## 2.3 Boolean

type `boolean` which can be `true` or `false`
