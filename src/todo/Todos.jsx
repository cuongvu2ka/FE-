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
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");

  // Trả về ngày tháng năm giờ phút giây dưới dạng một chuỗi
  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}

const Todos = () => {
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

  const handleDelete = (id) => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(deleteTodo(id));
      });
  };

  const handleEdit = (id) => {
    navigate("/edittodo/" + id);
  };

  return (
    <div>
      <h1>Danh sách sản phẩm </h1>
      <Link className="btn btn-info" to="/addtodo">
        Create New
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th width="200px">title</th>
            <th width="200px">time </th>
            <th width="200px">img</th>
            <th width="200px">description </th>
            <th width="200px">cate id </th>
            <th width="30px">Sửa</th>
            <th width="30px">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{convertTimestampToDateTime(item.createAt)}</td>
              <td>
                <img width="50px" height="50px" src={item.img} alt="" />
              </td>
              <td>{item.description}</td>
              <td>{item.cateID} </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(item.id)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
