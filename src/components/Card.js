import '../App.css'

const CharacterCard = ({ info }) => {

  const { imgURL, name, gender, specie, status, location, origin } = info;

  return (
    <div className="App">
      <div className='App--cont'>
        <img src={imgURL} alt="Character_Image" width="200px" />
        <ul className='App--cont--list'>
          <li>
            <span>Name:</span> {name}
          </li>
          <li>
            <span>Gender:</span> {gender}
          </li>
          <li>
            <span>Specie:</span> {specie}
          </li>
          <li>
            <span>Status:</span> {status}
          </li>
          <li>
            <span>Location:</span> {location}
          </li>
          <li>
            <span>Origin:</span> {origin}
          </li>
        </ul>
      </div>
    </div >
  );
}

export default CharacterCard;
