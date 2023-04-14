const express = require('express');
const app = express();

app.use(express.static('../js'));
app.use(express.static('../css'));

app.use(express.json());

let data = {
  iceMenu: [
    {
      id: 1,
      menuName: '아이스 아메리카노',
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0273/4535/4826/products/coldbrew_69e25680-9a16-41ed-ad47-e42d7b201b6a.jpg?v=1587042356',
      price: 2500,
      active: true,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 2,
      menuName: '아이스 라떼',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL8Vhui61tOzSSvstAikcH3ATqc99oBdAOQ&usqp=CAU',
      price: 3500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 3,
      menuName: '아이스 카페모카',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgPamlyWWpAjYFh8by0lPIlEOJ6nJdq8dpA&usqp=CAU',
      price: 4500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 4,
      menuName: '아이스 초코',
      imgUrl:
        'http://img3.tmon.kr/cdn3/deals/2021/01/27/4099153010/4099153010_front_08165_10a77.jpg',
      price: 3000,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 5,
      menuName: '아이스 프라프치노',
      imgUrl:
        'https://static.megamart.com/product/image/1326/13264499/13264499_1_960.jpg',
      price: 5500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 6,
      menuName: '아이스 그린티 라떼',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZglhbW5PLFl63PzViMN9OzAxtPme2_uzdw&usqp=CAU',
      price: 4500,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    }
  ],
  hotMenu: [
    {
      id: 1,
      menuName: '아메리카노',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOCiG2M6pYP4WwObGZBo68s2GyQT0-5CZiw&usqp=CAU',
      price: 2000,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 3,
      menuName: '캐모마일 티',
      imgUrl:
        'https://images.freeimages.com/images/premium/previews/6086/60863340-cup-of-chamomile-tea-with-chamomile-flowers-and-lemon-isolated.jpg',
      price: 4000,
      active: true,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 4,
      menuName: '유자차',
      imgUrl: 'http://image.auction.co.kr/itemimage/19/a7/4d/19a74d0ae6.jpg',
      price: 5000,
      active: true,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    }
  ],
  seasonMenu: [
    {
      id: 5,
      menuName: '딸기 쿠키 프라페',
      imgUrl: 'http://coffeenie.co.kr/uploads/product/20201224413079.png',
      price: 4900,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 6,
      menuName: '흑당 버블 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1608076826/still/600?ver=1557904340',
      price: 4800,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 7,
      menuName: '흑당 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1426110665/still/600?ver=1528185734',
      price: 5000,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    }
  ],
};
app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/coffee', (req, res) => {
  res.send(data.iceMenu);
});

app.get('/drink', (req, res) => {
  res.send(data.hotMenu);
});

app.get('/desert', (req, res) => {
  res.send(data.seasonMenu);
});

app.get('/coffee/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.iceMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.get('/drink/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.hotMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.get('/desert/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.seasonMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.post('/coffee', (req, res) => {
  data.iceMenu = [...data.iceMenu, req.body];
  res.send(data.iceMenu);
});

app.post('/drink', (req, res) => {
  data.hotMenu = [...data.hotMenu, req.body];
  res.send(data.hotMenu);
});

app.post('/desert', (req, res) => {
  data.seasonMenu = [...data.seasonMenu, req.body];
  res.send(data.seasonMenu);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
