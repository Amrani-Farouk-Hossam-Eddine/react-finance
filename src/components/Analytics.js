import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold mx-auto md:mx-0">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto md:mx-0">
            Manage Data Analytiics Centerally
          </h1>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            adipisci ipsam laboriosam placeat, assumenda harum nemo
            reprehenderit eius. Iste ex obcaecati nam magni ipsum autem pariatur
            enim nihil aut cumque!
          </p>
          <button className="bg-black w-[200px]  rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
