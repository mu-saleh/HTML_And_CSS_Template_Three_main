import React from 'react';
import teamImage1 from '../assents/imgs/team-01.jpg';
import teamImage2 from '../assents/imgs/team-02.jpg';
import teamImage3 from '../assents/imgs/team-03.jpg';
import teamImage4 from '../assents/imgs/team-04.jpg';
//import teamImage5 from '../assents/imgs/team-05.jpg';
import teamImage6 from '../assents/imgs/team-06.png';
//import teamImage7 from '../assents/imgs/team-07.png';
//import teamImage8 from '../assents/imgs/team-08.png';

const Team = () => {
    const teamMembers = [
        { id: 1, image: teamImage1, name: 'Name 1', description: 'Simple Short Description 1', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 2, image: teamImage2, name: 'Name 2', description: 'Simple Short Description 2', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 3, image: teamImage3, name: 'Name 3', description: 'Simple Short Description 3', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 4, image: teamImage4, name: 'Name 4', description: 'Simple Short Description 4', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 5, image: teamImage4, name: 'Name 5', description: 'Simple Short Description 5', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 6, image: teamImage6, name: 'Name 6', description: 'Simple Short Description 6', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 7, image: teamImage6, name: 'Name 7', description: 'Simple Short Description 7', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        { id: 8, image: teamImage6, name: 'Name 8', description: 'Simple Short Description 8', facebook: '#', twitter: '#', linkedin: '#', youtube: '#' },
        // Add other team members as needed
    ];

    return (
        <div className="team" id="team">
            <h2 className="main-title">Team Members</h2>
            <div className="container">
                {teamMembers.map((member) => (
                    <div className="box" key={member.id}>
                        <div className="data">
                            <img src={member.image} alt={member.description} />
                            <div className="social">
                                <a href={member.facebook}><i className="fab fa-facebook-f"></i></a>
                                <a href={member.twitter}><i className="fab fa-twitter"></i></a>
                                <a href={member.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                <a href={member.youtube}><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
