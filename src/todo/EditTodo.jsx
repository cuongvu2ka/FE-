import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../firebase";

const EditTodo = () => {
  const [idSp, setIdSp] = useState();
  const [title, setTitle] = useState();
  const [cateID, setCateID] = useState();
  const [description, setDescription] = useState();
  const [ctgr, setCtgr] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const db = firebase.firestore();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    db.collection("todos")
      .doc(id)
      .get()
      .then((response) => {
        setIdSp(response.data().idsp);
        setTitle(response.data().title);
        setDescription(response.data().description);
        setCateID(response.data().cateId);
        setCtgr(response.data().categories);
        setImg(response.data().img);
        setPrice(response.data().price);
        setName(response.data().name);
      });
  }, []);
  const handleUpdate = () => {
    db.collection("todos")
      .doc(id)
      .update({
        title: title,
        description: description,
        cateID: cateID,
        idsp: idSp,
        categories: ctgr,
        price: price,
        img: img,
        name: name,
      })
      .then(() => navigate("/todo"));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Product</h3>
        <form>
          <div>
            <label htmlFor="title"> title </label>
            <input
              type="text"
              name="id"
              className="form-control"
              placeholder="enter id ..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="time">img</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </div>
          <div>
            <label htmlFor="email"> description</label>
            <input
              type="email"
              name="name"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <label htmlFor="price"> cate id </label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="enter price"
              onChange={(e) => setCateID(e.target.value)}
              value={cateID}
            />
          </div>

          <div>
            <label htmlFor="img"> img</label>
            <input
              type="text"
              name="img"
              className="form-control"
              placeholder="enter link img"
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </div>

          <br />
          <button onClick={handleUpdate} className="btn btn-info">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
