const SingleBranding = ({ logoData }) => {
  const { image, title, description } = logoData;
  return (
    <div className="flex flex-col gap-2">
      <img src={image} alt="" className="w-[70px] h-[70px]" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm w-2/3 hidden md:block">{description}</p>
    </div>
  );
};

export default SingleBranding;
