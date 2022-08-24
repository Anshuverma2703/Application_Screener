console.log("Cv Screener");
// arrays of object which contain a information about the candidates

const data = [
  {
    name: "Pinki",
    age: 18,
    city: "Kolkata",
    language: "Python",
    frameWork: "Django",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "chinki",
    age: 20,
    city: "Delhi",
    language: "MongoDB",
    frameWork: "Django",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    name: "priya",
    age: 28,
    city: "Banglore",
    language: "angular",
    frameWork: "Django",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Minki",
    age: 24,
    city: "Jharkhand",
    language: "react",
    frameWork: "Go framework",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "ishita",
    age: 26,
    city: "Uttarpradesh",
    language: "react",
    frameWork: "Go framework",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Pallavi",
    age: 25,
    city: "Agra",
    language: "react",
    frameWork: "Go framework",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    name: "Saummya",
    age: 22,
    city: "Noida",
    language: "Python",
    frameWork: "Go framework",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    name: "Mohini",
    age: 28,
    city: "Rohtak",
    language: "react",
    frameWork: "Go framework",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
  },
  {
    name: "Rohan Das",
    age: 21,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

// cv iterator

function cvIterator(profile) {
  // console.log("cv")
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profile.length
        ? { value: profile[nextIndex++], done: false, currindx: nextIndex }
        : { done: true };
    },
    previous: function () {
      return nextIndex < profile.length
        ? { value: profile[(nextIndex -= 2)], done: false, currindx: nextIndex }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);
// console.log(candidates.name)
let SaveData;
let prev = candidates;

NextCv();

//Button iterator
const button = document.getElementById("Btn");
button.addEventListener("click", NextCv);

function NextCv() {
  console.log("next");

  //   const currentCandidates = candidates.next().value;
  //   SaveData = currentCandidates;
  SaveData = candidates.next();
  const currentCandidates = SaveData.value;
  console.log(currentCandidates);

  let image = document.getElementById("img");
  let profile = document.getElementById("profile");

  if (currentCandidates != undefined) {
    image.innerHTML = `<img src = "${currentCandidates.image}">`;

    profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name :${currentCandidates.name}</li>
        <li class="list-group-item">Age :${currentCandidates.age}</li>
        <li class="list-group-item">City :${currentCandidates.city}</li>
        <li class="list-group-item">language :${currentCandidates.language}</li>
        <li class="list-group-item">Framework :${currentCandidates.frameWork}</li>
        </ul>`;
  } else {
    alert("End of application");
    window.location.reload();
  }
}
let Save = document.getElementById("BtnSave");
Save.addEventListener("click", SaveProfile);

let IndexArray = [];
function SaveProfile() {
  console.log(SaveData);
  console.log(IndexArray);
  if (!IndexArray.includes(SaveData.currindx)) {
    IndexArray.push(SaveData.currindx);
    console.log(IndexArray);
    // JASON.stringify is used to convert a object to string
    let Save = JSON.stringify(SaveData);
    console.log(Save);
    let textArea = document.getElementById("area");
    textArea.innerHTML += Save;
  } else {
    console.log("Data Saved ");
  }
}

let PrevButton = document.getElementById("BtnPrevious");
PrevButton.addEventListener("click", Previousfunc);

function Previousfunc() {
  console.log("previous");
  console.log(SaveData.currindx);
  prev.previous();
  NextCv();
}
