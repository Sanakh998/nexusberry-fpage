import React from "react";
import "./App.css";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

function App() {
  let courses = [
    {
      id: "1",
      title: "Web Development",
      image: "https://www.nexusberry.com/catagories/2282188.png",
      description:
        "Unlock digital potential, craft your online legacy! Join our innovative web course to shape the internet's future.",
    },
    {
      id: "2",
      title: "Data Science and ML",
      image: "https://www.nexusberry.com/catagories/7991055.png",
      description:
        "Explore data science and machine learning. Algorithms reveal patterns, empower you with data-driven insights.",
    },
    {
      id: "3",
      title: "Mobile App Dev",
      image: "https://www.nexusberry.com/catagories/5608615.png",
      description:
        "Dive into mobile app development. Master building user-friendly applications that redefine tech interaction.",
    },
    {
      id: "4",
      title: "Design & Creative Arts",
      image: "https://www.nexusberry.com/catagories/1055668.png",
      description:
        "Unleash creativity in Design & Creative Arts. Imagination takes form, artistic expression knows no bounds.",
    },
    {
      id: "5",
      title: "Digital Marketing",
      image: "https://www.nexusberry.com/catagories/7011353.png",
      description:
        "Unlock digital success in Digital Marketing. Strategies shape online triumphs, e-commerce excellence thrives.",
    },
    {
      id: "6",
      title: "Computer Networks",
      image: "https://www.nexusberry.com/catagories/2001770.png",
      description:
        "Secure the digital realm in Computer Networks & Security. Master network infrastructures, become an online guardian.",
    },
  ];

  let products = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692618032/Mern_Stack_web_thumbnail_a889c035be.jpg",
      title: "Mastering the MERN Stack",
      price: 35000,
      duration: 4,
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692879160/Dsml_Web_Thumbnail_fca5c41b8c.jpg",
      title: "Master Data Science and",
      price: 35000,
      duration: 4,
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692358589/next_js_thumbnail_01_a4fee54e35_5a23409939.jpg",
      title: "Become a Full Stack React",
      price: 50000,
      duration: 4,
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692359426/flutter_and_dart_thumbnail_01_71783e11bc_c2559919a8.jpg",
      title: "Flutter App Development",
      price: 35000,
      duration: 3,
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692879228/React_Native_Web_Thumbnail_9ba2cfc6a2.jpg",
      title: "React Native for Android",
      price: 30000,
      duration: 3,
    },
    {
      id: "6",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692878853/Ai_and_Dl_Web_Thumbnail_d6b748ae69.jpg",
      title: "Applied AI: Practical Deep",
      price: 35000,
      duration: 3,
    },
    {
      id: "7",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692360561/data_analytics_01_e2c194f9be_aae34372ea.png",
      title: "Data Analytics and Business",
      price: 35000,
      duration: 3,
    },
    {
      id: "8",
      image:
        "https://res.cloudinary.com/nxb/image/upload/v1692703724/Django_with_React_Web_Thumbnail_a1fa096197.jpg",
      title: "Full Stack Web Development",
      price: 48000,
      duration: 6,
    },
  ];

  let cheapCourse = products.filter(x => x.price < 40000);

  let shortCourse = products.filter(x => x.duration <= 4);

  return (
    <div className=" ">
      {/* Header Section */}
      <div className="container-fluid m-0 p-0 header">
        {/* Header 1st Row */}

        <div className="px-4 d-flex justify-content-md-between justify-content-end align-items-end">
          <div className="d-none d-md-flex">
            <p className="text-light">
              Welcome to NexusBerry Training & Solutions!
            </p>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <p className="text-light mx-2 cursor-pointer">Fee Structure</p>
            <p className="text-light mx-2 cursor-pointer">Events</p>
            <p className="text-light mx-2 cursor-pointer">Our Location</p>
          </div>
        </div>

        {/* Header 2nd Row */}

        <div className="container-fluid px-4 py-1 d-flex justify-content-between">
          <img
            src="https://www.nexusberry.com/static/img/reverse-mobile-logo.png"
            alt="logo"
            className="cursor-pointer"
            style={
              window.innerWidth > "992px"
                ? { width: "210px" }
                : { width: "156px" }
            }
          />

          <form className="form-inline d-none d-md-block">
            <div className="input-group">
              <input
                type="text"
                className="form-control width-input pe-5"
                placeholder="Search course"
                aria-label="Search"
                aria-describedby="search-btn"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-search text-dark cursor-pointer"
                  type="submit"
                  id="search-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

          <a href="#" className="user-icon text-light cursor-pointer">
            {/* <FaUser className="bg-dark text-light fs-4" /> */}
            <img src="user.svg" alt="" />
          </a>
        </div>

        {/* Header 3rd Row */}

        <div className="container">

        </div>
      </div>

      {/* Header Images  */}

      <div className="container my-3">
        <div className="row g-1">
          <div className="col col-12 col-sm-8 cursor-pointer">
            <img
              src="https://res.cloudinary.com/nxb/image/upload/v1692595180/mern_stack_for_ads_15dc9a6cdc.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col col-12 col-sm-4">
            <div className="row flex-row flex-sm-column g-1">
              <div className="col cursor-pointer">
                <img
                  src="https://res.cloudinary.com/nxb/image/upload/v1692879307/fs_python_web_banner_7b735c14e1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col cursor-pointer">
                <img
                  src="https://res.cloudinary.com/nxb/image/upload/v1692595327/Dsml_for_web_banner_127ad838cc.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="overflow-hidden"/>
      {/* 1st Section of Courses */}

      <div className="container text-center mx-auto">
        <h2 className="normal-font fs-4">
          Discover Courses Across Departments
        </h2>

        {/* Cards 1st Section */}

        <div className="row row-cols-1 row-cols-md-3 g-4 center">
          {courses.map((course) => (
            <div className="col mb-3" key={course.id}>
              <div className="card card-hover-shadow cursor-pointer">
                <div className="card-body bg-light">
                  <img
                    src={course.image}
                    className="card-img-top my-3"
                    alt="..."
                    style={{ width: "60px" }}
                  />
                  <h4 className="card-title normal-font fs-6">
                    {course.title}
                  </h4>
                  <p className="card-text text-muted">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd Section */}

      <div className="container-fluid overflow-hidden">
        <div className="container-fluid course-title-div py-3 my-3 overflow-hidden">
          <h5 className="text-light normal-font">Top Trending Courses</h5>
        </div>

        {/* Section Two Cards */}

        <div className="container">
          <div className="row row-cols-2 row-cols-md-4">
            {shortCourse.map((product) => (
              <div className="col" key={product.id}>
                <div className="card border-0 card-hover-border cursor-pointer">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body p-0">
                    <h6 className="card-title m-0">
                      NEXUSBERRY TRAINING & SOLUTIONS
                    </h6>
                    <hr />
                    <p className="card-text text-muted d-inline m-1 price"> Rs. 
                      {product.price}
                    </p>
                    <button
                      type="button"
                      className="btn btn-buy btn-sm float-end m-1 mb-2"
                    >
                      {product.duration} months
                    </button>
                    <p className="mt-3">
                      <a
                        href="#"
                        className=" link-underline link-underline-opacity-0"
                      >
                        {product.title}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Images Before Footer */}

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src="https://res.cloudinary.com/nxb/image/upload/v1692617850/web_banner_gallery1_1cc60eb931.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="https://res.cloudinary.com/nxb/image/upload/v1692617850/web_banner_gallery2_292f80cc52.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mt-5">
          <div className="row">
            <div className="col col-12 col-md-6">
              <h6 className="my-4">Contact us</h6>
              <p className="text-muted">Call us 9am to 11pm</p>
              <p className="fs-6 color-dark-blue">+92 325 0362 286</p>
              <p className="text-muted">
                NexusBerry, 6 Block D، Main Boulevard, Block D Faisal Town,
                Lahore, Pakistan nexusberry.it@gmail.com
              </p>
              <ul className="d-flex m-0">
                <li className="fs-3 px-2 cursor-pointer">
                  <FaFacebook />
                </li>
                <li className="fs-3 px-2 cursor-pointer">
                  <FaYoutube />
                </li>
                <li className="fs-3 px-2 cursor-pointer">
                  <FaLinkedin />
                </li>
                <li className="fs-3 px-2 cursor-pointer">
                  <FaInstagram />
                </li>
              </ul>
            </div>
            <div className="col">
              <h6 className="my-4">About Us</h6>{" "}
              <p className="my-2 text-muted">Privacy Policy</p>
              <p className="my-2 text-muted">Blogs</p>
              <p className="my-2 text-muted">FAQs</p>
              <p className="my-2 text-muted">Rules and Regulations</p>
              <p className="my-2 text-muted">Student portal</p>
            </div>
            <div className="col">
              <h6 className="my-4 ">NexusBerry</h6>
              <p className="my-2 text-muted">Contact Us</p>
              <p className="my-2 text-muted">About Us</p>
              <p className="my-2 text-muted">Job Openings</p>
              <p className="my-2 text-muted">Gallery</p>
              <p className="my-2 text-muted">Payment Methods</p>
            </div>
          </div>
        </div>

        <hr />
        {/* Footer Note */}
        <div className="footer container text-center">
          <p className=""> &copy; 2022 Nexusberry. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
