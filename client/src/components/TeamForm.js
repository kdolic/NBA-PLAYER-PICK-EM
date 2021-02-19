import React, {useState} from 'react'

const initialState = {
    cityName: '',
    teamName: '',
    teamLogo: ''
}

const TeamForm = () => {
    const [team, setTeam] = useState(initialState);

    const handleChange = event => {
        setTeam({...team, [event.target.name]: event.target.value});
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form>
            <label>City Name: </label><br></br>
                <input
                type='text'
                name='cityName'
                placeholder='Enter Your City...'
                value={team.cityName}
                onChange={handleChange}
                />
                 <input
                type='text'
                name='teamName'
                placeholder='Enter Your Team Name...'
                value={team.teamName}
                onChange={handleChange}
                />
                 <input
                type='text'
                name='cityName'
                placeholder='En...'
                value={team.cityName}
                onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default TeamForm