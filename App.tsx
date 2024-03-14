import {Slide1} from "./src/screns/Slide1"
import {Slide2} from "./src/screns/Slide2"
import {Dispatch, SetStateAction, useState} from 'react';

export interface IPagina{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  if (page == 1){
    return <Slide1 setPageI={setPage} />
  }else if (page == 2){
    return <Slide2 setPageI={setPage} />
  }else{
    return <Slide1 setPageI={setPage} />
  }
  


 

 

}


