import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

const App = () => {
  return (
    <div className=" relative h-screen w-full  bg-zinc-800 ">
      <Background />
      <Foreground />
    </div>
  );
};
export default App;
