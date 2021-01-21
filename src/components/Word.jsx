import { navigate } from "@reach/router";


const Word = props => {
    const Styles = {
        color: props.tColor,
        backgroundColor: props.bColor
    }
    return(
        <>
        <h1 style={Styles}>The Word is: {props.word}</h1>
        </>
    )
}
export default Word;