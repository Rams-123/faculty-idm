// alumni testimonial

const facultyData = [
  {
    Id: 1,
    fImg: "assets/priyanka-srivastava.webp",
    fName: "Priyanka Shrivastava",
    fPosition: "Associate Professor -  Fashion Design",
    fData1: "MBA In Innovation Management from ICFIA University",
    fData2: "Fashion Design & IT from NIFT Kolkata",
    fData3: "PGDM from ICFAI University",
  },
  {
    Id: 1,
    fImg: "assets/kawalpreet-saroy.webp",
    fName: "Kawalpreet Saroy",
    fPosition: " Professor - Visual Communication",
    fData1: "Masters from IDC School of Design",
    fData2: "Bachelor from NIFT",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/ishteyaq-quadri.webp",
    fName: "Ishteyaq Quadri",
    fPosition: "Mentor(Animation) - VFX & Animation",
    fData1: "B.Sc Visual Communication",
    fData2: "NID - Studied Annotations Film Design(2yrs) ",
    fData3: "Diploma In Appiled Arts",
  },
  {
    Id: 1,
    fImg: "assets/reyaz-ahmad.webp",
    fName: "Md Reyaz Ahmad",
    fPosition: "Assistant Professor - Fashion Design",
    fData1: "B.Des in Fashion Design from NIFT Mumbai",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/sunil-mestry.webp",
    fName: "Sunil Mestry",
    fPosition: "Professor - Interior Design",
    fData1:
      "GDIDD - Govt. Diploma in Interior Design & Decoration - BTE, Mumbai",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/priyanka-vaidya.webp",
    fName: "Priyanka Vaidya",
    fPosition: "Assistant Professor - Interior Design",
    fData1: "M.Arch (Project Management)",
    fData2: "- ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/anand-kamdar.webp",
    fName: "Anand Kamdar",
    fPosition: "Visiting Faculty - Visual Communication",
    fData1: "MFA in Appied Arts",
    fData2: "Sir J. J. Institute of Applied Arts, Mumbai ",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/sneha-karnik.webp",
    fName: "Sheha P. Karnik",
    fPosition: "Assistant Professor - Interior Design",
    fData1: "BHSc(FRM) SNDT University",
    fData2: "Interior Design from Sir J. J. Institute, Mumbai ",
    fData3: "GDIDD MSBTE",
  },
  {
    Id: 1,
    fImg: "assets/nivedita-chaudhari.webp",
    fName: "Nivedita Shashank Chaudhari",
    fPosition: "Associate Professor - Visual Communication",
    fData1: "Ph.D (Pursuing)",
    fData2: "MFA",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/ruchi-buradkar.webp",
    fName: "Ruchi Buradkar",
    fPosition: "Professor - Interior Design",
    fData1: "Graduated from Nagpur University in 2014 in Architect",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/viswati-ganguly.webp",
    fName: "Vaswati Gangualy",
    fPosition: "Visiting Faculty - Interior Design",
    fData1: "Architecture From Sir J. J. College Of  Architecture",
    fData2: "-",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/purvi-mehta.webp",
    fName: "Purvi Mehta",
    fPosition: "Visiting Faculty - Interior Design",
    fData1: "M.Sc (Interior Design)",
    fData2: "B.com",
    fData3: "LLB, DIploma in Graphic Design",
  },
  {
    Id: 1,
    fImg: "assets/priyanka-sawant.webp",
    fName: "Priyanka Sawant",
    fPosition: "Instructor- Interior Design",
    fData1: "Master in Fashion & Apparel Design",
    fData2: "BA English Honours",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/chetna-dikkar.webp",
    fName: "Chetana Dikkar",
    fPosition: "Associate Professor - Interior Design",
    fData1: "Master in Fashion form MGM University",
    fData2: "A.Sc in Fashion Design",
    fData3: "NIFD",
  },
  {
    Id: 1,
    fImg: "assets/rugmani-venkatadri.webp",
    fName: "Rugmani Venkatadri",
    fPosition: "Visiting Faculty - Vissual Communication",
    fData1: "Ph.D",
    fData2: "Masters(Ancient Culture & History)",
    fData3: "Apparel manufacturing & Designing",
  },
  {
    Id: 1,
    fImg: "assets/anandita-roy.webp",
    fName: "Anandita Roy",
    fPosition: "Professor - Interior Design",
    fData1: "Ph.D",
    fData2: "Double Master's in Science and Management",
    fData3: "Specialiasation in Computer Aided Design Engineer",
  },
  {
    Id: 1,
    fImg: "assets/anamika-banerjee.webp",
    fName: "Anamika Banerjee",
    fPosition: "Assistant Professor - Fashion Design",
    fData1: "B.Sc",
    fData2: "Diploma in Fashion Designing",
    fData3: "Bridal Course of Manish Malhotra",
  },
  {
    Id: 1,
    fImg: "assets/vanessa-rodrigues.webp",
    fName: "Vanessa Rodrigues",
    fPosition: "Assistant Professor - Fashion Design",
    fData1: "Diploma in Fashion from NIFT Mumbai",
    fData2: " -",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/zain-khan.webp",
    fName: "Zain Eqbal Khan",
    fPosition: "HOD(3D Generalist) - VFX & Animation",
    fData1: "B.com",
    fData2: " Advanced Diploma in 3D at MAAC",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/narendra-kadam.webp",
    fName: "Narendra Mohan Kadam",
    fPosition: "Sr. Pre-Production Faculty - VFX & Animation",
    fData1: "B.com",
    fData2: " Advanced Diploma in 3D at MAAC",
    fData3: "-",
  },
  {
    Id: 1,
    fImg: "assets/rajendra-khairnar.webp",
    fName: "Rajendra Vasant Khairnar",
    fPosition: "Sr. 3D Generalist - VFX & Animation",
    fData1: "M.Sc Animation",
    fData2: " Diploma in 2D & 3D Animation",
    fData3: "Art Teacher Diploma(ATD)",
  },
  {
    Id: 1,
    fImg: "assets/sunil-thorat.webp",
    fName: "Sunil Thorat",
    fPosition: "Sr. Pre-Production Faculty - VFX & Animation",
    fData1: "Applied Art",
    fData2: " -",
    fData3: "-",
  },
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
      <div class="flex w-full ">
          <span class="flex w-full text-left items-start justify-start">${facultyData.fPosition}
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
