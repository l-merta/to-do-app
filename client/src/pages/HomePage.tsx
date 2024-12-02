import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Loopy home page</h1>
      <Link to="/task/id">Task</Link>
    </>
  )
}

export default Home
