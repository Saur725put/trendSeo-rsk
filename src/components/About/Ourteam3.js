import React from 'react';
import '@/styles/Ourteam3Style.css'

const team = [
  { id: 1, name: "Sumit Sisodiya", role: "Founder", img: "/images/teams/sumit11.jpeg" },
  { id: 5, name: "Navneet Raj", role: "SEO Executive", img: "/images/teams/navneet.png" },
  { id: 6, name: "Saurabh Kumar Singh", role: "MERN Developer", img: "/images/teams/sourav.png" },
  { id: 7, name: "Mahesh Gajai", role: "Wordpress Developer", img: "/images/teams/mahesh.jpeg" },
];

const Ourteam3 = () => {
  return (
    <div className="landscape-team-section" style={{marginTop: "-50px"}}>
      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", textAlign: "center", padding: "3rem 1rem 5rem" }}>
        <span
          style={{
            display: "block",
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "hsl(0, 0%, 45%)",
            marginBottom: "0.75rem",
          }}
        >
          Small team,
        </span>
        <h1
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 800,
            fontStyle: "italic",
            color: "hsl(45, 25%, 82%)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          big results
        </h1>
      </div>

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