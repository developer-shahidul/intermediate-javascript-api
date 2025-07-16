//data access
const data = [{ id: 1, name: "abdul", address: "kochu khet" }];
// console.log(data.address); //undefind
// console.log(data[0]);
console.log(data[0].address); //kochu khet

const products = {
  conunt: 5000,
  data: [
    {
      id: 3,
      laptop: "lenovo",
      price: 65000,
    },
    {
      id: 4,
      laptop: "magbook",
      price: 165000,
    },
  ],
};

// second product price
console.log(products.data[1].price);

const user = {
  id: 582,
  name: "soriful raj",
  address: {
    stret: {
      first: "54/1 uttara site",
      second: "poribager goli",
      third: "no drai",
    },
  },
  city: "dhaka",
};
console.log(user.address.stret.second);

const user2 = {
  id: 456,
  name: "pori bibir majar",
  address: {
    city: "chittogonj",
    conunt: "Bangladesh",
  },
};
console.log(user.address.stret?.second);
console.log(user2.address.stret?.second); //'?' judi samne man paw taw taile agaw naile thamo
