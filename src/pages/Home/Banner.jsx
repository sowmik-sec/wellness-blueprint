function Banner() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/hospital-patient_LRAS7OWEBL.jpg"
          className="w-full max-h-screen"
        />
        <div className="absolute top-1/2 left-1/3">
          <h3 className="text-3xl text-white">
            Join Us! We Are Connecting Doctors & Patients
          </h3>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/sport-bicycle_XPAJMZLRFT.jpg"
          className="w-full max-h-screen"
        />
        <div className="absolute top-1/2 left-1/3">
          <h3 className="text-3xl text-white">
            New to Cycling? Join our Beginner-Friendly Ride at{" "}
          </h3>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/flat%20lay-food_UKIR16JH2V.jpg"
          className="w-full max-h-screen"
        />
        <div className="absolute top-1/2 left-1/3">
          <h3 className="text-3xl text-white">
            Fuel Your Body, Fuel Your Life - Healthy Food Event{" "}
          </h3>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/father-son_OQMIE8LGGC.jpg"
          className="w-full max-h-screen"
        />
        <div className="absolute top-1/2 left-1/3">
          <h3 className="text-3xl text-white">
            Plant the Seeds of Wellbeing - Growing Happiness Event{" "}
          </h3>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
