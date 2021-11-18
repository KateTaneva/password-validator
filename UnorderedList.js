import './UnorderedList.css';

const UnorderedList = () => {

    return (
        <ul className="unorderedList">
            <li id="length"  >8-72 Characters</li>
            <li id="letter"  >1 Lowercase Character</li>
            <li id="number"  >1 Number</li>
            <li id="capital"  >1 Uppercase Character</li>
            <li id="matched"  >Should Not Match Your Email Address</li>
        </ul>
    )
}


export default UnorderedList;
