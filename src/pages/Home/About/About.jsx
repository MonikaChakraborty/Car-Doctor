import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute border-8 border-white right-10 top-1/2 rounded-lg shadow-2xl" />

        </div>
        <div className="lg:w-1/2 p-3">
            <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-5">
            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
          </p>
          <button className="btn bg-[#FF3811] text-white hover:bg-[#c22000]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
