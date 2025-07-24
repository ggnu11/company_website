## Backend Setting

### Node.js + Express 패키지 설치

1. backend 폴더에서 `npm init` 후 모든 설정은 `Enter`.

2. `npm install express` 명령어로 `express` 설치.

3. `npm install nodemon` 명령어로 `nodemon` 설치.

4. `backend` 폴더에 `index.js`를 만든 후 다음 코드를 넣는다.

```
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
```
