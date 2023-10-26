const ServiceCard = ({service}) => {
    const {title, img, price} = service;


  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-[190px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-[#444]">{title}</h2>
        <p className="text-xl text-[#FF3811] font-medium">Price: ${price}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
