"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const team = [
  { id: 1, name: "Nikhar Makkar", role: "Sr. Project Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgela9DfaHS42vESwnxd6Vw6KKuhEWY_lJ53WhO1LH1UpZ-78C_4PzUZgXOPj86L-v2bisfSE4zZiKY--5Jef7cWGyY8wBiClcWb78W4Q&s=10" },
  { id: 2, name: "Suraj Kumar", role: "Work Force Manager", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/robert-downey-jr-gty-bio-223yxhg.jpg" },
  { id: 3, name: "Harsh Raj", role: "Assistant Auditor", img: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
  { id: 4, name: "Upasana Rathore", role: "Head of Web Development", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/chadwick-boseman-1o37ujx-683x1024.jpg" },
  { id: 5, name: "Nikhar Makkar", role: "Sr. Project Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgela9DfaHS42vESwnxd6Vw6KKuhEWY_lJ53WhO1LH1UpZ-78C_4PzUZgXOPj86L-v2bisfSE4zZiKY--5Jef7cWGyY8wBiClcWb78W4Q&s=10" },
  { id: 6, name: "Suraj Kumar", role: "Work Force Manager", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/robert-downey-jr-gty-bio-223yxhg.jpg" },
  { id: 7, name: "Harsh Raj", role: "Assistant Auditor", img: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
  { id: 8, name: "Upasana Rathore", role: "Head of Web Development", img: "https://blogs.umb.edu/cinemastudies/files/2018/04/chadwick-boseman-1o37ujx-683x1024.jpg" },
  { id: 9, name: "Kabir Singh", role: "Full Stack Developer", img: "https://cdn.britannica.com/54/264854-050-1F82F2BF/indian-actor-hrithik-roshan-european-premiere-kites-odeon-west-may-18-2010-london-england.jpg" },
  { id: 10, name: "Divya Nair", role: "Brand Strategist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDc_gchdQ9m7duK6N7xYmd-OsaoCdk1WinKQ&s" },
  { id: 11, name: "Aditya Joshi", role: "Paid Ads Specialist", img: "https://randomuser.me/api/portraits/men/88.jpg" },
  { id: 12, name: "Meera Pillai", role: "Client Success Manager", img: "https://randomuser.me/api/portraits/women/37.jpg" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function MemberCard({ member }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "540px",
        borderRadius: "10px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow: hovered
          ? "0 20px 48px rgba(26,115,232,0.13), 0 4px 16px rgba(0,0,0,0.07)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "box-shadow 0.35s ease",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Image Wrapper */}
      <div style={{ position: "relative", overflow: "hidden", height: "400px", background: "#1a1a2e" }}>
        <motion.img
          src={member.img}
          alt={member.name}
          animate={{
            // Removed scale animation to prevent zooming on hover
            filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
          background: "linear-gradient(to top, rgba(10,10,20,0.6), transparent)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Info Section */}
      <div style={{
        padding: "30px 24px",
        background: hovered ? "rgba(26,115,232,0.04)" : "transparent",
        transition: "background 0.3s ease",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
        <motion.div
          animate={{ width: hovered ? "40px" : "20px" }}
          transition={{ duration: 0.3 }}
          style={{
            height: "2px",
            background: "#1A73E8",
            borderRadius: "2px",
            marginBottom: "14px",
          }}
        />

        <div style={{
          fontWeight: 700,
          fontSize: "18px",
          color: "#18181b",
          marginBottom: "8px",
          fontFamily: "'Georgia', serif",
          letterSpacing: "-0.01em",
        }}>
          {member.name}
        </div>

        <div style={{
          fontSize: "14px",
          color: "#6b7280",
          fontFamily: "monospace",
          letterSpacing: "0.03em",
        }}>
          {member.role}
        </div>
      </div>
    </motion.div>
  );
}

export default function OurTeam() {
  return (
    <div style={{
      backgroundColor: "#E8EAF6",
      minHeight: "100vh",
      width: "100%",
      padding: "80px 24px",
      fontFamily: "system-ui, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes orb-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(30px,-20px) scale(1.06); }
        }
      `}</style>

      {/* Background orbs */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,115,232,0.12) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
        animation: "orb-drift 16s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
        animation: "orb-drift 20s ease-in-out infinite reverse",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(26,115,232,0.12) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Header Container */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{
          fontSize: "clamp(36px,5vw,58px)",
          fontWeight: 800,
          color: "#18181b",
          margin: "0 0 14px",
          fontFamily: "'Georgia', serif",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}>
          Our Team
        </h2>
        <p style={{
          fontSize: "16px", color: "#52525b",
          maxWidth: "480px", margin: "0 auto",
          lineHeight: 1.7,
        }}>
          A passionate crew of strategists, creatives, and engineers — united by one goal: your growth.
        </p>
      </div>

      {/* Layout Grid container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </motion.div>
    </div>
  );
}