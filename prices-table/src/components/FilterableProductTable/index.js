import { SearchBar } from "../SearchBar";

export default function FilterableProductTable({products}){
    return(
        <div>
            <SearchBar/>
            <p>{products}</p>
        </div>
    )
}