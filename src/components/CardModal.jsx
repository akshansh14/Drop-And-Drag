import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CardModal = ({ id,closeModal,openModal,isModalOpen }) => {
    console.log(id)
  const { cardData, setCardData } =useContext(AppContext);

  const [data, setData] = useState({ title: "", description: "" });

  const isOpen = isModalOpen;
  const onClose = closeModal;

//   const submithandler = (e) => {
//     e.preventDefault();
//     let resData = cardData;
//     resData[id].title = data.title;
//     resData[id].description = data.description;
//     console.log("finalll", resData);
//     setCardData(resData);
//     console.log(cardData);
//     closeModal();
//   };

const submithandler = (e) => {
    e.preventDefault();

    // Create a copy of the cardData array
    let resData = [...cardData];

    // Update the specific card with the id
    resData[id] = {
        ...resData[id],
        title: data.title,
        description: data.description,
    };

    // Update the state with the new array
    setCardData(resData);
    closeModal();
};

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40  flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Create New Item</h2>
        </div>
        <form onSubmit={submithandler} className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={cardData.title}
              name="title"
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={cardData.description}
              name="description"
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardModal;
