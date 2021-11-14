import React from 'react';
import './Profile.css';

const Profile = (props) => {
    if (!props.profile) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <div className='profileCard'>
            <div className='profileDescription'>
                <div><strong>Name:</strong> {props.profile.name}</div>
                <div><strong>ID:</strong> {props.profile.id}</div>
                <div><strong>Caught Status:</strong> {props.profile.isCaught ? 'The Pokemon was caught!' : 'The Pokemon has not been caught yet...'}</div>
                {props.profile.isCaught ? <div><strong>Data:</strong> {props.profile.date}</div> : ''}
            </div>
            <div className='profileImg'>
                <img src={`/pokemons/${props.profile.id}.png`} className="rounded mx-auto d-block" alt="image" />
            </div>
        </div>
    )
}

export default Profile;