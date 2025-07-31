/// loadCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => showcategoriesBtn(data.categories))
    .catch((err) => console.log("Error fetching categories:", err));
};
loadCategories();

// showbtn function
const showcategoriesBtn = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((items) => {
    const button = document.createElement("div");
    button.innerHTML = `
    <button id="btn-${items.category_id}" class="btn category-btn" onclick="loadCategoriesVideos('${items.category_id}')">${items.category}</button>

    `;
    categoriesContainer.append(button);
  });
};

//remove active class

const removeActiveClass = () => {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
};

// / id dore call kora // id te joto gulu vidio theke oi vidio button a click korle show hobe
const loadCategoriesVideos = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();

      // id aer class ke active koro
      const activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add("active");

      showVideos(data.category);
    })
    .catch((err) => ("Error fetching categories:", err));
};
loadCategoriesVideos();

// Get vidieos // All videos aer jonno
const loadVideos = () => {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideos(data.videos))
    .catch((err) => ("Error fetching categories:", err));
};
loadVideos();

//photos timer aer jonno
function getTimeString(time) {
  const hour = parseInt(time / 3600);
  const remainingSecond = time % 3600;
  const min = parseInt(remainingSecond / 60);
  const second = parseInt(remainingSecond % 60);
  return `${hour} hours ${min} minites ${second} seconds ago`;
}
///////////////////////////
// search api
const searchInput = (search = "") => {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`
  )
    .then((res) => res.json())
    .then((data) => showVideos(data.videos))
    .catch((err) => console.log(err));
};
// sears videos
document.getElementById("search-input").addEventListener("keyup", (e) => {
  searchInput(e.target.value);
});
//////////////////////////////
// display videos
//
const showVideos = (video) => {
  videos = video; // <== এটা খুব জরুরি, গ্লোবাল videos কে আপডেট করবে // sort aer jonno

  // videos container
  const videoContainer = document.getElementById("videos");

  // je button a clik hobe oi caregory vidio dewa hobe r baki sob clean kora hobe
  videoContainer.innerHTML = "";

  //judi kono vidio na thake oi catagorir taile button a click korle ja dekhabe
  if (!video || video.length === 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center 
    ">
    <img src="./logo/icon.png" Alt=""/>
    <h2 class="text-center text-3xl font-bold">Oops!!Sorry,There is no <br/> content here</h2>
    </div>
    `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }

  video.forEach((video) => {
    const card = document.createElement("div");
    card.classlist = "card card-compact ";
    card.innerHTML = `
  
  <figure class="h-[200px] w-full relative ">
      <img class="h-full w-full object-cover rounded-lg" src="${
        video.thumbnail
      }" alt=""/>
    ${
      video.others.posted_date?.length === 0
        ? ""
        : `<span class="absolute right-2 bottom-2 bg-[#17171780] text-white text-xs rounded px-2">${getTimeString(
            video.others.posted_date
          )} </span>`
    }
  </figure>

  <div class="my-5 flex gap-3">
  <div><img class="size-10 rounded-full object-cover" src="${
    video.authors[0].profile_picture
  }" alt=""/></div>
  <div>
    <h2 class="text-base font-bold text-black ">${video.title}</h2>
    
    <div class="flex gap-2">
    <p class="text-xs text-gray-500">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified === true
        ? `<img
          class="size-5 rounded-full object-cover"
          src="https://img.icons8.com/?size=100&id=QMxOVe0B9VzG&format=png&color=000000"
          Alt=""
        />`
        : ""
    }
 
    </div>
    <p class="text-gray-500 text-xs">${video.others.views} views</p>

   <p><button onclick="loadDatils('${
     video.video_id
   }')" class="btn btn-sm btn-err">
datails
</button></p>

  </div>
  </div>`;

    videoContainer.append(card);
  });
};
``;

//
//

//

//
// const object = [
//   {
//     category_id: "1001",
//     video_id: "aaaa",
//     thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
//     title: "Shape of You",
//     authors: [
//       {
//         profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
//         profile_name: "Olivia Mitchell",
//         verified: "",
//       },
//     ],
//     others: {
//       views: "100K",
//       posted_date: "16278",
//     },
//     description:
//       "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
//   },
// ];

//sort
let videos = [];
const convertView = (viewStr) => {
  if (viewStr.includes("K")) {
    return parseFloat(viewStr) * 1000;
  } else if (viewStr.includes("M")) {
    return parseFloat(viewStr) * 1000000;
  } else {
    return parseFloat(viewStr);
  }
};

const handleSort = () => {
  videos.sort(
    (a, b) => convertView(b.others.views) - convertView(a.others.views)
  );
  showVideos(videos); // সোর্ট করার পর আবার দেখাও
};

// details function
const loadDatils = async (videoid) => {
  // console.log(videoid);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`
  );
  const data = await res.json();
  // console.log(data);

  showDatils(data.video);
};

const showDatils = (video) => {
  // console.log(video.description);
  const dailsContainer = document.getElementById("modal-content");
  dailsContainer.innerHTML = `
  <img class="w-full" src="${video.thumbnail}" Alt=""/>
  <p>${video.description}<p>
  
  `;
  //way 1

  // document.getElementById("showModalData").click();

  // way 2

  document.getElementById("custonModal").showModal();
};
