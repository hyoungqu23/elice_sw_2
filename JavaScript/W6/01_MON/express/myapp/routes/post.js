const express = require('express');
const BookSchema = require('../models/book'); // 불러오기
const router = express.Router();

// 만든 화면 보여주기
router.get('/', (req, res, next) => {
  res.render('post');
});

router.get('/del', (req, res) => {
  res.render('delete');
})

// 검색하기
router.get('/books/:id', (req, res, next) => {
  const authorName = req.params.id;

  BookSchema.find({author: authorName}).then(result => {
    res.json(result);
  }).catch (err => {
    console.log(err);
  })

  // BookSchema.findOne({ author: authorName }, (err, result) => {
  //   if (result) {
  //     return res.json(result);
  //   } else {
  //     return res.send('등록된 작가가 없습니다.');
  //   }
  // });
})

router.delete('/del:id', (req, res) => {
  const bookname = req.params.id;

  BookSchema.findOneAndDelete({bookname: bookname})
    .then(result => {
      res.json({ redirect: '/expost' });
    }).catch(err => {
      console.log(err);
    })
})



// router.delete("/del", (req, res) => {
//   res.render("delete");
// });

// 여기서는 이미 기본 페이지가 /expost이기 때문에 경로가 /로 설정된다.
router.post('/', (req, res, next) => {
  // 요청
  // destructing || const {name, phoneNumber, bDay} = req.body; 가능!
  const {name, phoneNumber, bDay} = req.body;
  // const name = req.body.name; // req.body: form의 name input의 값을 전달 받음
  // const phoneNumber = req.body.phoneNumber; // req.body: form의 phoneNumber input의 값을 전달 받음
  // const bDay = req.body.bDay; // req.body: form의 bDay input의 값을 전달 받음
  
  // 응답
  // 
  // JSON 형식으로 응답 받기
  res.json({
    name: name,
    phoneNumber: phoneNumber,
    bDay: bDay,
  })

  // 다음 미들웨어로 넘겨주기
  next();
});

// 다음 미들웨어
// router.post('/', (req, res, next) => {
//   // redirect: 호출한 경로로 재접근
//   // 이는 이전 미들웨어에서 이미 응답을 했기 때문에, 응답을 다시 할 수 없다.
//   res.redirect('/expost');
// })

// book.js 관련
router.post('/addbook', (req, res, next) => {
  const {name, author, price, publish} = req.body;
  // const price = req.body.price || 5000;

  // 데이터 할당하기
  let bookData = BookSchema({
    bookname: name,
    author: author,
    price: price,
    publish: publish
  });

  // 데이터 저장하기
  bookData.save();

  // 다시 폼으로 가기
  res.redirect('/expost');
});

module.exports = router;