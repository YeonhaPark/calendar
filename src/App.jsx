import Calendar from "./components/Calendar";
import "./index.css";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">2024, May</h1>
      <Calendar />
    </div>
  );
};

export default App;
