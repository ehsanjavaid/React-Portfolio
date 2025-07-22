import Navbar from './components/Navbar';
import LeftImage from './components/Leftimage';

export default function App() {
  return (
    <div className="flex h-screen w-[100vw]  justify-around bg-[#373B40]">
      {/* <Sidebar /> */}
      <Navbar />
      <LeftImage />
    </div>
  );
}