import React from "react";

const cardData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/K._J._Somaiya_College_of_Engineering_logo.png",
    emiPlan: true,
    image: "https://www.somaiya.edu/assets/kjsce/kjsce.jpg",
    rating: "A++",
    naac: "NAAC",
    creditPoints: 144,
    rank: "63rd",
    managementRank: "63rd",
    year: 2024,
    name: "K J Somaiya",
    location: "Maharashtra, India",
    duration: "2 Years",
    semesters: "3 Semesters",
    fee: "₹330,000"
  },
];

// Duplicate the array multiple times to make it loop smoothly
const infiniteData = [...cardData, ...cardData, ...cardData, ...cardData];

const Card = ({ data }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-80 bg-white flex-shrink-0 mx-2">
      <div className="flex justify-between">
        <img src={data.logo} alt="Logo" className="h-8" />
        {data.emiPlan && <span className="bg-blue-500 text-white px-2 py-1 rounded">EMI Plan</span>}
      </div>
      <img src={data.image} alt="College" className="w-full h-40 object-cover mt-2 rounded" />
      <div className="flex justify-between mt-2">
        <span className="font-bold">{data.rating}</span>
        <span>{data.naac}</span>
        <span>{data.creditPoints} Credit P.</span>
      </div>
      <div className="flex justify-between mt-1">
        <span>{data.rank} Rank</span>
        <span>{data.managementRank} Management</span>
      </div>
      <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm mt-2">{data.year}</span>
      <h2 className="font-bold text-lg mt-2">{data.name}</h2>
      <p className="text-gray-600">{data.location}</p>
      <p className="text-sm mt-1">{data.duration} • {data.semesters} • From {data.fee}</p>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="relative w-full overflow-hidden  py-10">
      <div className="flex w-max animate-scroll flex-nowrap">
        {infiniteData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
        {infiniteData.map((item, index) => (
          <Card key={`duplicate-${index}`} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
