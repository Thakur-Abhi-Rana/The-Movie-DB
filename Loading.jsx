const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const Loading = () => {
  return (
    <section className="row gy-4">
      {arr.map((element) => {
        return (
          <div key={element} className="col-6 col-md-4 col-lg-3">
            <article className="card">
              <img
                src="/Solid_grey.svg.png"
                className="card-img-top"
                alt="placeholder"
              />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-8 "></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-5 "></span>
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default Loading;
