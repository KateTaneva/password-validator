import ValidatorFunction from './Validator/Validator'

const url = 'https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813';

async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    if (response) {
        var data = await response.json();
        console.log(data);
        if (response) {
            ValidatorFunction()
            
        }else{
            throw('Username not found!')

        }
    }

}















    // export const getOne = ({user: name, email}) => {
    //     // var customerName = category? `category=${category}` : "";

    //     return fetch(url)
    //     .then((results)=> results.json())
    //     .then((data)=>{
    //         var customerName = data[0]

    //     })
    //       .catch((error) => console.log(error))
    // }

