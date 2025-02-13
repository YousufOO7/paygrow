import { Route, Routes } from "react-router"
import Root from "./Root/Root"
import Home from "./Components/Home/Home"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
