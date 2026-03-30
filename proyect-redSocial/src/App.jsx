import { UserContext } from "./context/UserContext";
import Feed from "./components/Feed";

function App() {
  return (
    <UserContext.Provider value={{ name: "Camilo" }}>
      <Feed />
    </UserContext.Provider>
  );
}

export default App;