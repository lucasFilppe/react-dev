export function SearchBar(){
    return(
        <div>
            <form>
                <input type='text' placeholder='Pesquise...'/>
                <label>
                  <input type='checkbox'/>
                  {''}
                  Mostrar apenas produtos em estoque
                </label>
            </form>
        </div>
    )
}