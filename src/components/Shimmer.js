const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* We create an array of 8 undefined items and map over them to generate 8 dummy cards */}
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img stroke animate"></div>
          <div className="shimmer-title stroke animate"></div>
          <div className="shimmer-rating stroke animate"></div>
          <div className="shimmer-cuisines stroke animate"></div>
          <div className="shimmer-area stroke animate"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;