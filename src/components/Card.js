
const Card = (props) =>{
    const {country} = props;

    const nbrFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <li className="card">
            <img src={country.flag} alt="flag"></img>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{nbrFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};
export default Card;