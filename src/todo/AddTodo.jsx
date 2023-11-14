import React, { useState } from "react";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";

// them san pham  bao gom title id loai, gioi thieu san pham
const AddTodo = () => {
  const [title, setTitle] = useState(); // tạo biến để gán với dữ liệu trong firebase
  const [cateID, setCateID] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();
  const db = firebase.firestore(); //kết nối với fire base

  const [img, setImg] = useState();
  //them dữ liệu
  const handleAdd = () => {
    const newTodo = {
      title: title,
      description: description,
      cateID: cateID,
      img: img,

      createAt: new Date().getTime(),
    };
    db.collection("todos") //kết nối vs data tên là todos
      .add(newTodo)
      .then(() => navigate("/todo")); //router
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3> New Product </h3>
        <form>
          <div>
            <label htmlFor="email">title</label>
            <input
              type="email"
              name="id"
              className="form-control"
              placeholder="enter id ..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name"> Loại</label>
            <input
              type="text"
              name="categories"
              className="form-control"
              placeholder="enter loại..."
              onChange={(e) => setCateID(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name">img</label>
            <input
              type="text"
              name="img"
              className="form-control"
              placeholder="enter img... "
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name"> description</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name">cate id </label>
            <input
              type="text"
              name="img"
              className="form-control"
              placeholder="enter img... "
              onChange={(e) => setCateID(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info" onClick={handleAdd}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
