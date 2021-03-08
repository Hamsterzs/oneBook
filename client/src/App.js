import Home from "./Home"
import Login from "./Login"
import "./App.css"
import { GlobalContext } from "./Context"
import { useContext, useEffect } from "react"
import { getUser } from "./Api"


const App = () => {
  const { user, setUser } = useContext(GlobalContext)

  useEffect(async () => {
    const response = await getUser()
    if (!response.user) return
    setUser(response.user)
    return
  }, [])

  console.log(user);

  return (
    <>
      <Home />
      <Login />
    </>
  );
}

export default App;
