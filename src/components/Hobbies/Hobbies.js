import "./Hobbies.css"

function Hobbies() {
    return (
        <div className="hobbies-container">
            <h2>Hobbies</h2>
            <div className="hobby-item">
                <img className="hobby-img" src="https://cdn.pixabay.com/photo/2017/08/11/10/20/dolomites-2630271_960_720.jpg" alt="hiking" />
                <p className="hobby-title">Hiking</p>
                <p className="hobby-desc">I love spending time in nature and coping with the challenges of the Mother Earth.</p>
            </div>
            <div className="hobby-item">
                <img className="hobby-img" src="https://cdn.pixabay.com/photo/2015/07/02/10/13/cycling-828646_960_720.jpg" alt="cycling" />
                <p className="hobby-title">Cycling</p>
                <p className="hobby-desc">Life is like riding a bicycle. To keep your balance, you must keep moving.</p>
            </div>
            <div className="hobby-item">
                <img className="hobby-img" src="https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_960_720.jpg" alt="camping" />
                <p className="hobby-title">Camping</p>
                <p className="hobby-desc">I love spending time in nature and coping with the challenges of the Mother Earth.</p>
            </div>
        </div>
    );
}

export default Hobbies;