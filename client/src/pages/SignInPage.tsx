import { Link } from "react-router-dom";

function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <>
      <h1>Loopy SignIn page</h1>
      <Link to="/task/id">Task</Link>
    </>
  )
}

export default Home
