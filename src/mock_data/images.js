const users = [
  {
    id: 0,
    imgPaths: ["/Images/img0.jpg", "/Images/img1.jpg", "/Images/img2.jpg"],
    info: "grazus nuostabus ahujienutitis"
  },
  {
    id: 1,
    imgPaths: ["/Images/img3.jpg", "/Images/img4.jpg", "/Images/img5.jpg"],
    info: "da geresnis"
  },
  {
    id: 2,
    imgPaths: ["/Images/img6.jpg", "/Images/img7.jpg", "/Images/img8.jpg"],
    info: "pizda nerealus"
  },
  {
    id: 3,
    imgPaths: ["/Images/img9.jpg", "/Images/img10.jpg", "/Images/img11.jpg"],
    info: "end me ffs"
  }
];
const usersRented = [
  {
    id: 0,
    name: "Juozainis0",
    surname: "Jatatatais0",
    house: "houseName0",
    address: "House adress 1"
  },
  {
    id: 1,
    name: "Juozainis1",
    surname: "Jatatatais1",
    house: "houseName1",
    address: "House adress 1"
  },
  {
    id: 2,
    name: "Juozainis2",
    surname: "Jatatatais2",
    house: "houseName2",
    address: "House adress 2"
  },
  {
    id: 3,
    name: "Juozainis3",
    surname: "Jatatatais3",
    house: "houseName3",
    address: "House adres3s"
  }
];

const myPosts = [
  {
    id: 0,
    house: "houseName0",
    address: "House adress 0",
    imgPaths: ["/Images/img0.jpg", "/Images/img1.jpg", "/Images/img2.jpg"]
  },
  {
    id: 0,
    house: "houseName1",
    address: "House adress 1",
    imgPaths: ["/Images/img3.jpg", "/Images/img4.jpg", "/Images/img5.jpg"]
  },
  {
    id: 0,
    house: "houseName2",
    address: "House adress 2",
    imgPaths: ["/Images/img6.jpg", "/Images/img7.jpg", "/Images/img8.jpg"]
  },
  {
    id: 0,
    house: "houseName3",
    address: "House adress 3",
    imgPaths: ["/Images/img9.jpg", "/Images/img10.jpg", "/Images/img11.jpg"]
  }
];

const myAuctions = [
  {
    id: 0,
    name: "Good hata",
    house: "houseName",
    sum: 500000,
    status: "YES"
  },
  {
    id: 0,
    name: "Good hata1",
    house: "houseName1",
    sum: 400000,
    status: "NO"
  },
  {
    id: 0,
    name: "Good hata2",
    house: "houseName2",
    sum: 200000,
    status: "YES"
  },
  {
    id: 0,
    name: "Good hata3",
    house: "houseName3",
    sum: 100000,
    status: "NO"
  }
];
const activeAuctions = [
  {
    id: 0,
    name: "Good hata",
    house: "houseName",
    sum: 500000,
    startDate: "2019-05-11 01:21",
    bidStarted: true
  },
  {
    id: 0,
    name: "Good hata1",
    house: "houseName1",
    sum: 400000,
    startDate: "2019-06-11 01:00",
    bidStarted: false
  },
  {
    id: 0,
    name: "Good hata2",
    house: "houseName2",
    sum: 200000,
    startDate: "2019-06-11 01:00",
    bidStarted: true
  },
  {
    id: 0,
    name: "Good hata3",
    house: "houseName3",
    sum: 100000,
    startDate: "2019-06-11 01:00",
    bidStarted: false
  }
];

const bids = [
  {
    name: "Dzinsofke",
    sum: 500,
    bidTime: "05:11"
  },
  {
    name: "Masofke",
    sum: 800,
    bidTime: "07:11"
  },
  {
    name: "Krasavka",
    sum: 900,
    bidTime: "05:41"
  },
  {
    name: "Matofke",
    sum: 1000,
    bidTime: "01:11"
  }
];
export default {
  users,
  usersRented,
  myPosts,
  myAuctions,
  activeAuctions,
  bids
};
