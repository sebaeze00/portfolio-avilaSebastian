import { useState } from "react";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";
import { PracticeSearch } from "../../transations/GlobalTexts";
import Divisor from "../ui/Divisor";

const data = [
  { id: 1, name: "Sebastian" },
  { id: 2, name: "Iara" },
  { id: 3, name: "valentin" },
  { id: 4, name: "jesica" },
  { id: 5, name: "Andres" },
];

const SearchUsers = () => {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");

  const OnChange: any = (e: any) => {
    setSearch(e.target.value);
  };

  const filterDataName = data.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Divisor title={PracticeSearch[language].title} />

      <div className="flex flex-col m-auto w-50 gap-5 ">
        <input
          onChange={OnChange}
          className="input-search"
          placeholder={PracticeSearch[language].inputText}
          type="text"
          value={search}
        />

        {filterDataName.length === 0 ? (
          <p className="text-center">No se encontraron usuarios</p>
        ) : (
          filterDataName?.map((userName) => {
            return (
              <p className="search-name" key={userName.id}>
                {userName.name}
              </p>
            );
          })
        )}

        {filterDataName.length !== 0 && search && (
          <p className="text-center">
            Se encontraron {filterDataName.length} usuario
          </p>
        )}

        <Button onClick={() => setSearch("")} className="button-delete">
          {PracticeSearch[language].buttonClean}
        </Button>
      </div>
    </>
  );
};

export default SearchUsers;
