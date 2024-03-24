npm install express
express js를 설치한다. nodejs 라우팅 작업을 간편하게 해줌

npm install mongoose --save
몽구스를 설치한다. 몽고DB에 스키마를 적용할 수 있음

npm install dotenv --save
dotenv를 설치한다. 숨겨할 값이나 변수같은 환경설정을 저장 가능

npm install --save multer
파일 전송을 쉽게 해주는 미들웨어

npm install --save-dev nodemon
파일에 변경점이 생기면 자동으로 재시작해줌

스키마란
어떤 형식으로 값을 받고 응답해줄건지 몽구스로 몽고모델을 만듬

구조는
models

- Category.js
- Post.js
- User.js

routes

- auth.js
- categories.js
- posts.js
- users.js
