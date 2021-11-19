import './UnorderedList.css';

const UnorderedList = () => {

    return (
        <ul className="unorderedList">
            <li id="length" className="invalid"  >8-72 Characters</li>
            <li id="letter" className="invalid" >1 Lowercase Character</li>
            <li id="number" className="invalid" >1 Number</li>
            <li id="capital" className="invalid" >1 Uppercase Character</li>
            <li id="matched" className="invalid" >Should Not Match Your Email Address</li>
        </ul>
    )
}


export default UnorderedList;
