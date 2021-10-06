import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="App">
        <button onClick={onClickUser}>users</button>
        <button onClick={onClickUser1}> id=1のユーザ </button>
      </div>
    </div>
  );
}
