import { useNavigate } from "@reach/router"

function NavigateTo (url, value) {
    const navigate = useNavigate()


    const NextURL = `${url}${value}`
    navigate(NextURL)
}

export default NavigateTo