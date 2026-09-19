const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.post('/api/generate-resume', (req, res) => {
  const { name, email, phone, skills, experience, education } = req.body;

  const resume = `${name.toUpperCase()}
${email} | ${phone}
${'='.repeat(50)}

PROFESSIONAL SUMMARY
Highly motivated professional skilled in ${skills}.

SKILLS
${skills.split(',').map(s => `- ${s.trim()}`).join('\n')}

EXPERIENCE
${experience}

EDUCATION
${education}

PROJECTS
- AI Resume Builder (MERN Stack)

DECLARATION
I hereby declare that the above information is true to the best of my knowledge.
Date: ${new Date().toLocaleDateString()}
`;

  res.json({ resume: resume });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Ab is window ko band mat karna, minimize kar do!');
});

// Server ko zinda rakhne ke liye
setInterval(() => {}, 1000 * 60 * 60);