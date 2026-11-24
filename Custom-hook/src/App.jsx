import { CounterExample } from "./components/CounterExample"
import DebounceExample from "./components/DebounceExample"
import FetchApiExample from "./components/FetchApiExample"
import LocalStorageExample from "./components/LocalStorageExample"
import OutSideClickExample from "./components/OutSideClickExample"
import PaginationExample from "./components/PaginationExample"
import ToggleExample from "./components/ToggleExample"
import WindowSizeExample from "./components/WindowSizeExample"


function App() {

  

  return (
    <>
       <ToggleExample />
       <hr />

       <CounterExample />
       <hr />

       <LocalStorageExample/>
       <hr />

       <FetchApiExample />
       <hr />

      <PaginationExample />
      <hr />

      <DebounceExample />
      <hr />

      <OutSideClickExample />
      <hr />

      <WindowSizeExample />
      <hr />
    </>
  )
}

export default App
