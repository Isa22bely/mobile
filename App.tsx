import {Slide1} from "./src/screns/Slide1"
import {Dispatch, SetStateAction, useState} from 'react';

export interface IPagina{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  return (
    <Slide1 setPageI={setPage}/>

  );

}


