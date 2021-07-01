import React from 'react'

const Profile = (props) => {
    if (!props.profile) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <div>
            {/* <h3>{props.profile.map(item => {
                return (
                    <div key={item.id}>
                        <div>Name: {item.name.toUpperCase()}</div>
                        <div>ID: {item.id}</div>
                        <img src={`/pokemons/${item.id}.png`} className="rounded mx-auto d-block" alt="image" />
                        
                    </div>
                    
                )
            })}</h3> */}
            <div>Name: {props.profile.name}</div>
            <div>ID: {props.profile.id}</div>
            <div>Caught Status: {props.profile.isCaught}</div>
            <div>Data: </div>
            <img src={`/pokemons/${props.profile.id}.png`} className="rounded mx-auto d-block" alt="image" />

        </div>
    )
}

export default Profile;