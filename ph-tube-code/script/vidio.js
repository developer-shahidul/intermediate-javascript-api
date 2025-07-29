//

function getTimeString(time) {
  const hour = parseInt(time / 3600);
  const remainingSecond = time % 3600;
  const minite = parseInt(remainingSecond / 60);
  const second = parseInt(remainingSecond % 60);

  return `${hour} Hour ${minite} minites ${second} second ago`;
}

const removeActiveClass = () => {
  const buttons = document.querySelectorAll(".category-btn");
  console.log(buttons);
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

// sort;
const convertView = (viewStr) => {
  if (viewStr.includes("K")) {
    return parseFloat(viewStr) * 1000;
  } else if (viewStr.includes("M")) {
    return parseFloat(viewStr) * 1000000;
  } else if (viewStr.includes("B")) {
    return parseFloat(viewStr) * 1000000000;
  } else {
    return parseFloat(viewStr);
  }
};

// 🔥 videos global এ রাখো

const handleSort = () => {
  videos.sort(
    (a, b) => convertView(b.others.views) - convertView(a.others.views)
  );
  displayVideos(videos);
};

// 1.. fetch, load and show categories on html
//create loadCategories
const loadCataegories = () => {
  // fetch tha data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((resizeBy) => resizeBy.json())
    .then((data) => displayLoadCategories(data.categories))
    .catch((err) => console.log(err));
};

//create displayLoadCategories
const displayLoadCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  //   console.log("LOad categores create");
  // console.log(categories);
  categories.forEach((items) => {
    console.log(items);
    //creat button

    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button id="btn-${items.category_id}" onclick="loadCategoryVideos(${items.category_id})" class="btn category-btn">
    ${items.category}
    </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};
const loadCategoryVideos = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((resizeBy) => resizeBy.json())
    .then((data) => {
      // sobaike active class remove koro
      removeActiveClass();

      // id aer class ke active koro
      const activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add("active");

      videos = data.category; // 🔥 গ্লোবাল videos আপডেট করো
      displayVideos(videos);
    })
    .catch((err) => console.log(err));
};

/////////////
const loadDatils = async (videoid) => {
  console.log(videoid);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`
  );
  const data = await res.json();
  // console.log(res);
  displayDatils(data.video);
};
const displayDatils = (video) => {
  console.log(video);
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
//load videos
const loadVideos = (searchText = "") => {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  )
    .then((resizeBy) => resizeBy.json())
    .then((data) => {
      videos = data.videos; // 🔥 গ্লোবাল videos আপডেট করো
      displayVideos(videos);
    })
    .catch((err) => console.log(err));
};

//object uporer api theke neya hoyece
const object = {
  videos: [
    {
      category_id: "1001",
      video_id: "aaaa",
      thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
      title: "Shape of You",
      authors: [
        {
          profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
          profile_name: "Olivia Mitchell",
          verified: "",
        },
      ],
      others: {
        views: "100K",
        posted_date: "16278",
      },
      description:
        "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
    },
  ],
};

//khali gore
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";
  if (videos.length == 0) {
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

  console.log(videos);
  videos.forEach((videos) => {
    //////////////////////////////////////////////
    // console.log(videos);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `  
    <figure class="h-[200px] rounded-lg relative">
    <img class="h-full w-full object-cover"
      src=${videos.thumbnail}
      alt="Shoes" />
     ${
       videos.others.posted_date?.length == 0
         ? ""
         : `   <span class="absolute right-2 bottom-2 bg-[#17171780] text-white text-xs rounded px-2">${getTimeString(
             videos.others.posted_date
           )} </span>`
     }
   
  </figure>
  <div class="mt-5 px-0 py-2 flex gap-2">
 <div>
 <img class="size-10 rounded-full object-cover" src="${
   videos.authors[0].profile_picture
 }" alt=""/>
 </div>
  <div>
<h2 class="font-bold"> ${videos.title}</h2>

 <div class="flex gap-2 text-gray-400 items-center">
 <p>${videos.authors[0].profile_name}</p>
 ${
   videos.authors[0].verified === true
     ? `
     <img
       class="size-5 rounded-full object-cover"
       src="https://img.icons8.com/?size=100&id=QMxOVe0B9VzG&format=png&color=000000"
       Alt=""
     />
   `
     : ""
 }
 </div>
<p><button onclick="loadDatils('${
      videos.video_id
    }')" class="btn btn-sm btn-err">
datails
</button></p>
<p> ${videos.others.views}</p>

 </div>
  </div>`;
    videoContainer.appendChild(card);
  });
};
////////////

/////////////
document.getElementById("search-input").addEventListener("keyup", (e) => {
  loadVideos(e.target.value);
});

loadCataegories();
loadVideos();
