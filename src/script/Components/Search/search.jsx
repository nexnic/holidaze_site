import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import RequesteAPI from "../API/RequestAPI"
import { useNavigate } from 'react-router-dom'

function SearchBox () {
    const {data, isLoading, isError} = RequesteAPI()
    const navigate = useNavigate()

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // Select Send to page
        navigate(`/venue/${item.id}`)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left',  zIndex: 101 }}>name: {item.name}</span>
          </>
        )
      }

    if(isLoading) null
    if(isError) null
    else {


        return (
            <div style={{ zIndex: 999}}>
                    <ReactSearchAutocomplete
                        items={data}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
            </div>
        )
    }

}

export default SearchBox