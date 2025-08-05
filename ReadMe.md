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

6. MongoDB

- [MongoDB](https://cloud.mongodb.com/v2/68621d1b7aa4f563a2281739#/clusters/starterTemplates) 에서 클러스터를 생성한다.

- `Connect - Drivers - Add your connection string into your application code` 의 코드를 복사한다.

- `backend` 폴더 안의 `.env` 파일을 생성하고 해당 파일에 `MONGO_URI={복사한 코드}`를 추가한다.

- 복사한 코드 안의 `<db_password>`에 비밀번호를 입력한다.

- 터미널에서 `backend` 폴더로 이동 후 `npm install dotenv` 명령어를 입력한다.

- `index.js`파일 상단에 `require("dotenv").config()`를 추가한다.

- 터미널에 `npm install mongoose`를 입력하여 페키지를 설치한다.

- `index.js`에 다음 코드를 넣는다.

```json
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다:", error));

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

```

- `npm install bcrypt` 명령어로 비밀번호 암호화 패키지 설치.

- `npm install axios` 명령어로 axios 설치.

- `npm install jsonwebtoken` 명령어로 jwt 패키지 설치.

- `npm i cookie-parser` 명령어 실행.

- `npm install cors` 명령어 실행 후 `index.js`에 하단 코드 추가.

```json

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

```

- 파일 저장 특허가 되어 있는 S3 버킷 생성

1. AWS 계정 생성
2. Amazon s3 선택
3. 버킷 만들기로 버킷 생성
4. 버킷 속성 - 정책 편집 - 버킷 ARN 복사 - 정책 생성기 클릭
5. `Type of Policy : S3 Bucket Policy`, `Action : GetObject`, `Amazon Resource Name (ARN) : 복사한 ARN`
6. `Add Statement` 버튼 클릭 후 `Generate Policy` 버튼 클릭
7. `Generate Policy` 버튼 클릭 시, 화면에 표시되는 코드 복사 후 버킷 정책 편집에 붙여넣기
8. 새 탭 열고 검색창에 `IAM` 입력
9. 사용자 - 사용자 생성
10. 사용자의 권한 추가 버튼 클릭 후 `직접 정책 연결` 버튼 클릭.
11. 검색창에 `s3fu` 후 권한 추가
12. `액세스 키 만들기` 버튼 클릭 후 `Command Line Interface(CLI)` 추가
13. 액세스 키 생성 후 액세스, 시크릿 키 복사
14. AWS 범용 버킷 화면에서 `폴더 만들기` 클릭 후 `post-files`, `post-images`이름의 폴더 생성
15. `.env` 파일에 코드 추가

```
AWS_ACCESS_KEY_ID = 첫번째 복사키
AWS_SECRET_ACCESS_KEY= 두번째 복사키
AWS_BUCKET_NAME =abc-company1257
AWS_REGION=ap-northeast-2
```

- `npm install @aws-sdk/client-s3 multer uuid` 명령어로 설치

## Frontend

### React + Vite 설치

1. frontend 폴더에서 `pm create vite@latest --template react` 명령어로 `vite` 설치.

2. `npm install tailwindcss @tailwindcss/vite` 명령어로 `tailwindcss` 설치

3. `눈누`에서 폰트 코드 복사 후 `index.css`에 복사/붙여넣기

4. `Compontent -> Navbar` 폴더 생성 후 `Navbar.jsx` 생성.

5. `npm install react-router-dom`으로 라우터 설치

6. `npm install react-icons --save` 명령어 실행

7. `npm install axios` 명령어 실행

8. `npm i sweetalert2` 명령어 실행

9. `npm install --save @tinymce/tinymce-react` 설치
