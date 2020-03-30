## Javascript: convert output datetime in YYYY/mm/dd hh:m:sec format

`npm package`

https://www.npmjs.com/package/date-string-output-formatter

`install`

```bash
yarn add date-string-output-formatter

or 

npm i date-string-output-formatter
```
***

`usage`

```js
import {formatter} from "date-string-output-formatter";

const output = formatter(new Date("2019-1-1 21:45"));
console.log(output);

```

`console output`
```
2019/01/01 21:45:00
```
