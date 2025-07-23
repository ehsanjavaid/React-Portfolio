import Navbar from './components/Navbar';
import LeftImage from './components/Leftimage';
import Sidebar from './components/Sidebar'
import Righticons from './components/Righticons'

export default function App() {
  return (
    <div className="relative  overflow-hiddenflex h-screen w-[100vw]  justify-around bg-[#373B40]">
      {/* <Sidebar /> */}
      <LeftImage />
      <Navbar />
      <Sidebar />
      <Righticons />
    </div>
  );
}