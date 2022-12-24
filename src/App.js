import React, {useState} from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#102a42').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10); 
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <main className="bg-[#f1f5f8] min-h-screen">
      <header className="flex h-24 items-center pl-8">
        <h3 className="text-3xl	mr-8 text-[#102a42] font-bold">Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="color" id="color" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#102a42" className={`py-2 px-4 rounded text-xl	${error ? 'border-2 border-red-600' : null} `}/>
          <button type="submit" className="bg-[#49a6e9] text-white rounded py-2 px-4 text-xl	">Submit</button>
        </form>
      </header>
      <div className="color-container flex flex-wrap">
        {list.map((color, index)=> {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </div>
    </main>
  );
}

export default App;
