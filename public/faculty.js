// alumni testimonial

const facultyData = [
  {
    Id: 1,
    fImg: "assets/.webp",
    fName: "Arshad Nayampally",
    fPosition: "Group Director",
    fProgram: "Design Programs",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 2,
    fImg: "assets/idm/Nisha-Chanda.webp",
    fName: "Nisha R Chanda",
    fPosition: "Director",
    fProgram: " ITM Institute of Design and Media",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 3,
    fImg: "assets/idm/Bilques-Abdul-Rahim-Miyaji.webp",
    fName: "Bilques Abdul Rahim Miyaji",
    fPosition: "ITM Administration",
    fProgram: "Executive Admin",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 4,
    fImg: "assets/idm/Deepashree-Rathod.webp",
    fName: "Deepashree Rathod",
    fPosition: "Assistant Professor",
    fProgram: " Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 5,
    fImg: "assets/idm/Jyoti-Shirodkar.webp",
    fName: "Jyoti Shirodkar",
    fPosition: "Instructuctor",
    fProgram: " Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 6,
    fImg: "assets/idm/Mansi-Pandya.webp",
    fName: "Mansi Pandya",
    fPosition: "Assistant Professor",
    fProgram: " Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 7,
    fImg: "assets/idm/Kailash-Harishchandra-Kanojia.webp",
    fName: "Kailash Harishchandra Kanojia",
    fPosition: "Assistant Professor",
    fProgram: "AVFX",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 8,
    fImg: "assets/idm/prakash-kelkar.webp",
    fName: "Prakash M Kelkar",
    fPosition: "Professor",
    fProgram: "AVFX",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 9,
    fImg: "assets/idm/Priyanka-Srivastava.webp",
    fName: "Priyanka Shrivastava",
    fPosition: "Associate Professor",
    fProgram: "Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 10,
    fImg: "assets/idm/Kawalpreet-Singh-Saroy.webp",
    fName: "Kawalpreet Singh Saroy",
    fPosition: " Visiting Professor",
    fProgram: " Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 11,
    fImg: "assets/idm/Divakar-Vishwakarma.webp",
    fName: "Divakar Vishwakarma",
    fPosition: "Assistant professor",
    fProgram: "AVFX",
    fData1: "-",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 12,
    fImg: "assets/sunil-mestry.webp",
    fName: "Sunil Mestry",
    fPosition: "Assistant Professor",
    fProgram: "Interior Design",
    fData1: "-",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 13,
    fImg: "assets/idm/Aparna-Saini.webp",
    fName: "Aparna Saini",
    fPosition: "Assistant Professor",
    fProgram: "Fashion Design",
    fData1: "-",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 14,
    fImg: "assets/idm/Priyanka-Vaidya.webp",
    fName: "Priyanka Vaidya",
    fPosition: "Assistant Professor",
    fProgram: "Interior Design",
    fData1: "-",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 15,
    fImg: "assets/idm/Rasika-Amol-Potdar.webp",
    fName: "Rasika Amol Patdar",
    fPosition: "Assistant Professor",
    fProgram: "Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 16,
    fImg: "assets/sneha-karnik.webp",
    fName: "Sneha P Karnik",
    fPosition: "Associate Professor",
    fProgram: "BDes- Interior design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 17,
    fImg: "assets/nivedita-chaudhari.webp",
    fName: "Nivedita Shashank Chaudhari",
    fPosition: "Associate Professor",
    fProgram: " Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 18,
    fImg: "assets/idm/Prathamesh-Panchal.webp",
    fName: "Prathamesh Panchal",
    fPosition: "Assistant Professor",
    fProgram: " Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 19,
    fImg: "assets/idm/Prathamesh-Ashok-More.webp",
    fName: "Prathamesh Ashok More",
    fPosition: "Assistant Professor",
    fProgram: "Interior Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 20,
    fImg: "assets/idm/Shraddha-kaje-Bobade.webp",
    fName: "Shraddha Kaje Bodade",
    fPosition: "Associate professor",
    fProgram: "BDes Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  // {
  //   Id: 21,
  //   fImg: "assets/viswati-ganguly.webp",
  //   fName: "Vaswati Gangualy",
  //   fPosition: "Visiting Faculty",
  //   fProgram: "Interior Design",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },
  // {
  //   Id: 22,
  //   fImg: "assets/purvi-mehta.webp",
  //   fName: "Purvi Mehta",
  //   fPosition: "Visiting Faculty",
  //   fProgram: "Interior Design",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },
  {
    Id: 21,
    fImg: "assets/priyanka-sawant.webp",
    fName: "Priyanka Sawant",
    fPosition: "Instructor",
    fProgram: " Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 22,
    fImg: "assets/idm/Chetna-Dikkar.webp",
    fName: "Chetna Dikkar",
    fPosition: "Associate Dean Academics",
    fProgram: "ITM IDM",
    fData1: "-",
    fData2: "-",
    fData3: "",
  },
  {
    Id: 23,
    fImg: "assets/rugmani-venkatadri.webp",
    fName: "Rugmani Venkatadri",
    fPosition: "Visiting Faculty",
    fProgram: "Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 24,
    fImg: "assets/anamika-banerjee.webp",
    fName: "Anamika Banerjee",
    fPosition: "Assistant Professor",
    fProgram: "Fashion Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 25,
    fImg: "assets/anand-kamdar.webp",
    fName: "Anand Viresh Kamdar",
    fPosition: "Visiting Faculty",
    fProgram: "Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 26,
    fImg: "assets/idm/Pranali-Patil.webp",
    fName: "Pranali Patil",
    fPosition: "Lab Instructor",
    fProgram: "Fashion Design",
    fData1: "-",
    fData2: " -",
    fData3: "-",
  },
  {
    Id: 27,
    fImg: "assets/idm/Pankti-Kothari.webp",
    fName: "Pankti Kothari",
    fPosition: "Assistant professor",
    fProgram: "Visual Communication",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 28,
    fImg: "assets/idm/Swaransh-Swapnesh-Dixit.webp",
    fName: "Swaransh Swapnesh Dixit",
    fPosition: "-",
    fProgram: "Interior Design",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 29,
    fImg: "assets/idm/Sameer-P.webp",
    fName: "Sameer P",
    fPosition: "Visiting Faculty",
    fProgram: "Visual Communication ",
    fData1: "-",
    fData2: "-",
    fData3: "-",
  },

  // {
  //   Id: 1,
  //   fImg: "assets/anandita-roy.webp",
  //   fName: "Anandita Roy",
  //   fPosition: "Professor",
  //   fProgram: "Interior Design",
  //   fData1: "Ph.D",
  //   fData2: "Double Master's in Science and Management",
  //   fData3: "Specialiasation in Computer Aided Design Engineer",
  // },
  // {
  //   Id: 1,
  //   fImg: "assets/vanessa-rodrigues.webp",
  //   fName: "Vanessa Rodrigues",
  //   fPosition: "Assistant Professor",
  //   fProgram: "Fashion Design",
  //   fData1: "",
  //   fData2: " -",
  //   fData3: "-",
  // },
  // {
  //   Id: 1,
  //   fImg: "path/to/Jayesh-Sarmalkar.jpg",
  //   fName: "Jayesh Sarmalkar",
  //   fPosition: "Assistant Professor",
  //   fProgram: "Fashion Design / Visual Communication",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },

  // {
  //   Id: 1,
  //   fImg: "path/to/Ekta-Ghosh.jpg",
  //   fName: "Ekta Ghosh",
  //   fPosition: "Assistant Professor",
  //   fProgram: "Fashion Design",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },

  // {
  //   Id: 1,
  //   fImg: "path/to/Afiyat-Shaikh.jpg",
  //   fName: "Afiyat Shaikh",
  //   fPosition: "Consultant",
  //   fProgram: "AVFX",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },
  // {
  //   Id: 1,
  //   fImg: "path/to/Sudeep-Mehta.jpg",
  //   fName: "Sudeep Mehta",
  //   fPosition: "Associate Professor",
  //   fProgram: "Visual Communication",
  //   fData1: "-",
  //   fData2: "-",
  //   fData3: "-",
  // },
];

let output = facultyData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(facultyData) {
  let listItems = `
  <li
  class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 hover:border-brand-red cursor-pointer transition-all group hover:shadow-md group  h-auto  rounded-md items-center justify-center max-w-sm ">
  <div class="flex flex-col w-full rounded-md border border-gray-300">
      <div class="flex w-full rounded-md">
          <img src=${facultyData.fImg}
              class="flex w-full object-contain rounded-md" alt="">
      </div>
      <div class="flex flex-col px-2 py-3 w-full">
          <h4 class="flex w-full text-center items-center justify-center text-brand-red">${facultyData.fName}
          </h4>

      </div>
  </div>
  <div class="flex flex-col w-full h-full pl-5 rounded-md gap-5 items-center justify-around">
    <div class="w-full ">
      <strong class="">Designation : </strong>
      <span class="w-fit text-left items-start justify-start">${facultyData.fPosition}
      </span>
    </div>
    <div class="w-full gap-2">
      <strong>Program : </strong>
      <span class="w-fit text-left items-start justify-start ">
      ${facultyData.fProgram}
      </span>
    </div>  
      <ul class="flex flex-col w-full justify-around list-outside  gap-2">
          <li class="list-disc">${facultyData.fData1}</li>
          <li class="list-disc">${facultyData.fData2}</li>
          <li class="list-disc">${facultyData.fData3}</li>
      </ul>
  </div>
</li>
          `;
  return listItems;
}
