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

5. `.gitignore` 파일 생성 후 다음 코드를 입력 후 저장

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/
jspm_packages/

# Environment files
.env

# Build outputs
dist/
build/

# System files
.DS_Store
Thumbs.db
```

## Frontend

### React + Vite 설치

1. frontend 폴더에서 `pm create vite@latest --template react` 명령어로 `vite` 설치.

2. `npm install tailwindcss @tailwindcss/vite` 명령어로 `tailwindcss` 설치

3. `눈누`에서 폰트 코드 복사 후 `index.css`에 복사/붙여넣기

4. `Compontent -> Navbar` 폴더 생성 후 `Navbar.jsx` 생성.

5. `npm install react-router-dom`으로 라우터 설치

6. `npm install react-icons --save` 명령어 실행
