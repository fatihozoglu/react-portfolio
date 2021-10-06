import "./Hobbies.css"

function Hobbies(props) {

    let hobbies = props.hobbyInfo.map((item, index) => {
        return(
            <div key={index} className="hobby-item">
                <img className="hobby-img" src={item.photoUrl} alt={item.hobbyName} />
                <p className="hobby-title">{item.hobbyName}</p>
                <p className="hobby-desc">{item.hobbyDesc}</p>
            </div>
        );
    });

    return (
        <div className="hobbies-container">
            <h2>Hobbies</h2>
            { hobbies }
        </div>
    );
}

export default Hobbies;