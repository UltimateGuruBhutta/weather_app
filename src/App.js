import TopButton from "./components/TopButton";
import InputField from "./components/InputField";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";


function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
        <TopButton />
        <InputField/>
        <TimeAndLocation/>
        <TempAndDetails/>
      </div>
    </>
  );
}

export default App;
