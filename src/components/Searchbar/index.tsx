import { FC, memo } from "react"
import { SearchbarWrapper } from "./style"

const Searchbar: FC<any> = ({ placeholder, handleClick}) => {
  
  return (
    <SearchbarWrapper>
      <button onClick={handleClick} className="search-btn" />
      <input
        className="search-field" 
        type="text"
        placeholder={placeholder}
      />
    </SearchbarWrapper>
  );
};

export default memo(Searchbar);
