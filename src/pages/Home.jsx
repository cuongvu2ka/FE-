import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { getAllTodo, deleteTodo } from "../reduxtool/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function convertTimestampToDateTime(timestamp) {
  // Tạo một đối tượng Date từ timestamp (tính bằng mili giây)
  const dateObj = new Date(timestamp);

  // Lấy thông tin ngày, tháng, năm, giờ, phút, giây từ đối tượng Date
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes =  String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");

  // Trả về ngày tháng năm giờ phút giây dưới dạng một chuỗi
  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}

const Home = () => {
  const dispatch = useDispatch();
  const db = firebase.firestore();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer);
  useEffect(() => {
    db.collection("todos")
      .orderBy("createAt", "desc")
      .get()
      .then((todolist) => {
        const arr = [];
        todolist.forEach((item) => arr.push({ ...item.data(), id: item.id }));
        dispatch(getAllTodo(arr));
      });
  }, []);
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 d-flex  ">
      {todos.map((item) => (
        <div class="col">
          <div class="card">
            <img
              src={item.img}
              class="card-img-top"
              width="300px"
              height="300px"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
