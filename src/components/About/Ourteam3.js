import React from 'react';
import '@/styles/Ourteam3Style.css'

const team = [
  { id: 1, name: "Akshay Kumar", role: "Sr. Project Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgela9DfaHS42vESwnxd6Vw6KKuhEWY_lJ53WhO1LH1UpZ-78C_4PzUZgXOPj86L-v2bisfSE4zZiKY--5Jef7cWGyY8wBiClcWb78W4Q&s=10" },
  { id: 2, name: "Saurabh Kumar", role: "React Developer", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/robert-downey-jr-gty-bio-223yxhg.jpg" },
  { id: 3, name: "Harsh Raj", role: "Assistant Auditor", img: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
  { id: 4, name: "Upasana Rathore", role: "Head of Web Development", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/chadwick-boseman-1o37ujx-683x1024.jpg" },
  { id: 5, name: "Nikhar Makkar", role: "Sr. Project Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgela9DfaHS42vESwnxd6Vw6KKuhEWY_lJ53WhO1LH1UpZ-78C_4PzUZgXOPj86L-v2bisfSE4zZiKY--5Jef7cWGyY8wBiClcWb78W4Q&s=10" },
  { id: 6, name: "Suraj Kumar", role: "Work Force Manager", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/robert-downey-jr-gty-bio-223yxhg.jpg" },
  { id: 7, name: "Harsh Raj", role: "Assistant Auditor", img: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
  { id: 8, name: "Upasana Rathore", role: "Head of Web Development", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/chadwick-boseman-1o37ujx-683x1024.jpg" },
  { id: 9, name: "Kabir Singh", role: "Full Stack Developer", img: "https://cdn.britannica.com/54/264854-050-1F82F2BF/indian-actor-hrithik-roshan-european-premiere-kites-odeon-west-may-18-2010-london-england.jpg" },
  { id: 10, name: "Divya Nair", role: "Brand Strategist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDc_gchdQ9m7duK6N7xYmd-OsaoCdk1WinKQ&s" },
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