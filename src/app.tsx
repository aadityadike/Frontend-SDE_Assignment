import { useState } from "react";
import List from "./List";

function App() {
    const [searchValue, setSearchValue] = useState("");

    const captureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 relative top-32">
            {/* Search Box */}
            <div className="flex justify-center items-center w-5/12 h-18">
                <input
                    className="border border-black rounded w-full h-10 px-2"
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={captureInput}
                />
            </div>
            <div className="container border border-black rounded w-5/12 h-auto">
                <List />
            </div>
        </div>
    );
}

export default App;
