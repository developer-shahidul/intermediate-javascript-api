// task : 1.. console log the secondary school lucation of sophia

let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [
          { shool_name: "abc primary school" },
          { lucation: "paters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "abe secondary school" },
          { lucation: "st lorence" },
        ],
      },
    ],
  },
};
const secondaryLuction = data.sophia.study[1].secondary[1].lucation;
console.log("secondary school lucation of sophia : ", secondaryLuction);

// task 2 ..... cosole.log output:peterburg, herry
let students = {
  2222: {
    name: "jack",
    section: "c",
    class: "ix",
    address: { "building  no": 12 },
    street: "st. jonson",
    city: "peterburg",
    country: "uk",
  },
  3333: {
    name: "herry",
    section: "D",
    class: "x",
    address: { "building  no": 85 },
    street: "Dc road",
    city: "kochukhet",
    country: "Bangladesh",
  },
};
console.log("output herry:", students[3333].name);
console.log("output:peterburg :", students[2222].city);

//task 3...: access and then show habluder adda
// show output Beginer
let data2 = {
  data: [
    {
      bookId: 1,
      bookDatails: {
        name: "habluder adda",
        category: "xyz",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDatails: {
        name: "gabluder adda",
        category: "abc",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};
console.log("show habluder adda :", data2.data[0].bookDatails.name);
console.log("show output Beginer :", data2.data[1].bookCategory);
