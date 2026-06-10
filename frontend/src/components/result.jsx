import '../App.css'

function Result({ user, level }) {

    if (!user || !user.player) return null;
    const player = user.player;

    return (
        <div className="result_box">
            <div className="profile_picture">
                <img src={player.avatarfull} alt="Profile" className="profile_picture" />
            </div>
            <div className="result_info">
                <h2>{player.personaname}</h2>
                <h5 style={{ color: 'grey' }}>{player.personastate === 0 ? "Offline ⚫" : "Online 🟢"}</h5>
                <p>Steam ID: {player.steamid}</p>
                <p>Steam Level: {player.lobilelevel}</p>
                <p>Real Name: {player.realname || "N/A"}</p>
                <p>Country: {player.loccountrycode || "N/A"}</p>
                <p>Visibility: {player.communityvisibilitystate === 3 ? "Private 🔒" : "Public 🔓"}</p>
                <p>Profile URL: <a href={player.profileurl} target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'none'}}>Profile redirect ↗</a></p> 
            </div>
        </div>
    );
}

export default Result;