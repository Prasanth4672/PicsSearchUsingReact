import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App(){
    const [images,setImages] = useState([]);
    const searchHandler = async (term)=>{
        const result = await searchImages(term);
        setImages(result);
    };

    return (
       <div>
         <SearchBar  onSearch={searchHandler}></SearchBar>
        <ImageList images={images}></ImageList>
       </div>

    );
}




export default App;