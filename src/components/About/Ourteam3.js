import React from 'react';
import '@/styles/Ourteam3Style.css'

const team = [
  { id: 1, name: "Sumit Sisodiya", role: "Founder", img: "/images/teams/Sumit.png" },
  { id: 2, name: "Pratyaksh Srivastava", role: "Co-Founder", img: "/images/teams/Pratyaksh.png" },
  { id: 3, name: "Garvit Sharma", role: "SEM Expert", img: "/images/teams/garvit.png" },
  { id: 4, name: "Shashwat Srivastava", role: "Performance Marketing Exec.", img: "/images/teams/shaswat.png" },
  { id: 5, name: "Navneet Raj", role: "SEO Executive", img: "/images/teams/navneet.png" },
  { id: 6, name: "Saurabh Kumar Singh", role: "MERN Developer", img: "/images/teams/sourav.png" },
];

const Ourteam3 = () => {
  return (
    <div className="landscape-team-section">
      <div className="card__container">
        {team.map((member) => (
          <article key={member.id} className="card__article">
            <img 
              src={member.img} 
              alt={member.name} 
              className="card__img" 
              loading="lazy"
            />

            <div className="card__data">
              <span className="card__description">{member.role}</span>
              <h2 className="card__title">{member.name}</h2>
              {/* <a href="#" className="card__button">
                Read More
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Ourteam3;