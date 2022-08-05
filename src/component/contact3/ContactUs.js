import axios from "axios";
import React, { useState, useRef } from "react";
// Name  , phn number , email , desciption (text-area)

// https://flowbite.com/docs/components/forms/
import toast from "react-hot-toast";

const notify = (text) =>
  toast.success(text, {
    // icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
    duration: 3000,
  });

const addToSheets = (e) => {
  e.preventDefault();
  // console.log("data and time");
  // alert(new Date().toISOString().split("T")[0]);
  const currentData = new Date().toLocaleString();
  alert(currentData);
  // console.log(currentData);
  // console.log(currentData.split("T")[0]);
  // console.log(currentData.substring(11, 19));
};

const ContactUs = () => {
  const [formData, setformData] = useState([]);
  const formRef = useRef(null);
  const scriptUrl = " ";
  const [loading, setLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   console.log(new FormData(formRef.current));
  //   fetch(scriptUrl, {
  //     method: "POST",
  //     body: new FormData(formRef.current),
  //   })
  //     .then((res) => {
  //       console.log("SUCCESSFULLY SUBMITTED");
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // };

  let handleSubmit = (e) => {
    e.preventDefault();

    // console.log("on submit");
    // console.log(formData);

    let form_data = new FormData();
    form_data.append("name", formData.name);
    form_data.append("phone_number", formData.phone_number);
    form_data.append("email", formData.email);

    form_data.append("desc", formData.desc);
    form_data.append("associated", formData.associated);
    const currentDate = new Date().toLocaleString();
    form_data.append("date_time", currentDate);

    // console.log("form_data : ");
    // console.log(form_data);
    // console.log("formData state:");
    // console.log(formData);
    axios

      .post(scriptUrl, form_data, {
        headers: {
          // "content-type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        notify(
          "Thank you for sharing your response, We will contact you shortly"
        );
        // console.log("successfull");
      })
      .catch((err) => {
        // console.log(err);
        // console.log("Failed");
        // notify("Could not share response,Please try again later");
        toast.error("Could not share response,Please try again later");
      })
      .finally(() => {
        // setRequesting(false);
        // console.log("finally reachdd");
        setformData({
          name: "",
          phone_number: "",
          email: "",
          desc: "",
          associated: undefined,
        });
      });
  };
  const changeHandler = (e) => {
    // console.log(formData);
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const radioChangeHandler = (e) => {
    // this.setState({
    //   paymentMethod: e.target.value,
    // });
    setformData({ ...formData, associated: e.target.value });
    // console.log(formData);
  };
  return (
    <form
      // ref={formRef}
      // onSubmit={handleSubmit}
      className="p-5"
      onSubmit={(e) => handleSubmit(e)}
      // onSubmit={(e) => addToSheets(e)}
    >
      <div className="mb-1">
        <label
          // htmlFor="text"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlForhtmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Name"
          required
          // onChange={(e) => {
          //   setformData({ name: e.value, ...formData });
          // }}
        />
      </div>
      <div className="mb-1">
        <label
          htmlForhtmlFor="tel"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          PHONE NUMBER
        </label>
        <input
          type="tel"
          id="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={changeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="+91XXXXXXXXX"
          required
        />
      </div>
      <div className="mb-1">
        <label
          htmlForhtmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@example.com"
          required
        />
      </div>
      <div className="mb-1 ">
        <label
          htmlForhtmlFor="ques"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I WANT TO CONTACT ABOUT?
        </label>
        {/* xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-4  */}
        <div className="grid grid-cols-2 sm:grid-cols-3  mx-10 content-center text-center ">
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="courses"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Courses
            </label>
          </div>
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="workshop"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Workshop
            </label>
          </div>
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="franchise"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Franchise
            </label>
          </div>
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="Ayurgenic"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ayurgenic
            </label>
          </div>
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="projects"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Projects
            </label>
          </div>
          <div className="flex items-center mr-4 text-center p-3">
            <input
              id="inline-radio"
              type="radio"
              value="others"
              onChange={radioChangeHandler}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Others
            </label>
          </div>
        </div>
      </div>
      <div className="mb-1 ">
        <label
          htmlForhtmlFor="ques"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          DESCRIPTION
        </label>
        <textarea
          type="text"
          id="ques"
          name="desc"
          value={formData.desc}
          onChange={changeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // placeholder=""
          required
        />
      </div>
      <div className="mx-auto my-10">
        <button type="submit" className="btn-grad w-full !h-[50px]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
