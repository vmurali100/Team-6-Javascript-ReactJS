import { useState } from "react";
export default function Search() {
  const [search, setsSearch] = useState("");
  const [list, setList] = useState([]);
const onChangeTerm = (e) => {
    setsSearch(e.target.value);
  };
  return (
    <>
      <form>
        <input id="search" type="text" onChange={onChangeTerm} />
        <button
          type="button"
          onClick={() => {
            setList(list.filter((l) => l.value == search));
          }}
        >
          Search
        </button>
      </form>
    </>
  );
}
