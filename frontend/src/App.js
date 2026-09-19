import React, { useState } from 'react';
import './App.css';

function App() {
  const [resume] = useState({
    name: "SONI ROY",
    title: "Banking Operations | Backend Executive",
    phone: "9817756984",
    email: "soni121roy@gmail.com",
    address: "Panipat, Haryana",
    linkedin: "linkedin.com/in/soni-roy-a3a8b727",
    github: "github.com/soni121roy",
    portfolio: "soni121roy.github.io/ticket-management-system",
    summary: "Banking operations professional with hands-on experience in loan documentation, verification, backend system updates, reporting and data handling. Skilled at processing high volumes of records with accuracy and confidentiality.",
    education: "B.Tech CSE - Pursuing | Diploma CSE - 73.10% | 12th Science - 92% | 10th - 72%",
    experience: "Backend Executive - Jain M & Associates (Jan 2026 - Jul 2026) | Backend Executive - Star Powerz Digital (2024-2026) - Managed loan documentation, verification and MIS reporting.",
    skills: "JavaScript, Python, C++, HTML5, CSS3, MS Excel, MIS Reporting, MySQL, MongoDB, Git, GitHub",
    strengths: "Accuracy & Attention to Detail, Confidentiality & Data Integrity, Process Discipline, Analytical Ability",
    interests: "Banking Operations, Loan Processing & Verification, Backend Operations, Web Development",
  });

  const handleDownload = () => {
    window.print();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto', background: 'white', fontFamily: 'Arial' }}>

      <button onClick={handleDownload} style={{ background: '#1a237e', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px', float: 'right' }}>
        Download PDF
      </button>

      <div style={{ clear: 'both' }}></div>

      <h1 style={{ textAlign: 'center', color: '#1a237e', marginBottom: '0' }}>{resume.name}</h1>
      <p style={{ textAlign: 'center', marginTop: '5px' }}><b>{resume.title}</b></p>
      <p style={{ textAlign: 'center', fontSize: '14px' }}>{resume.address} | {resume.phone} | {resume.email}</p>
      <p style={{ textAlign: 'center', fontSize: '14px' }}>{resume.github} | {resume.linkedin} | {resume.portfolio}</p>
      <hr />
      <h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>SUMMARY</h3><p>{resume.summary}</p>
      <h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>EXPERIENCE</h3><p><b>{resume.experience}</b></p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}><h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>STRENGTHS</h3><p><b>{resume.strengths}</b></p></div>
        <div style={{ flex: 1 }}><h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>INTERESTS</h3><p><b>{resume.interests}</b></p></div>
      </div>
      <h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>EDUCATION</h3><p>{resume.education}</p>
      <h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>SKILLS</h3><p>{resume.skills}</p>
      <h3 style={{ background: '#1a237e', color: 'white', padding: '6px 10px' }}>DECLARATION</h3>
      <p style={{ fontSize: '13px' }}>I hereby declare that the above information is true and correct to the best of my knowledge.</p>
      <p><b>Date:</b> {new Date().toLocaleDateString()} <b>Place:</b> {resume.address}</p>
      <p style={{ textAlign: 'right' }}><b>Signature: {resume.name}</b></p>
    </div>
  );
}
export default App;