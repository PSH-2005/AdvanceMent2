const mentors = [
    {
        id: 1,
        name: "Renuka Kulkarni",
        price: "₹2000/hour",
        organization: "ABC Corp",
        credentials: ["Software Engineering", "Project Management"],
        categories: ["Software", "Management"],
        description: "Expert in software engineering and project management.",
        linkedin: "https://linkedin.com/in/renuka-kulkarni",
        posts: [
            {
                title: "Breakthrough in AI Research",
                content: "Excited to share my latest paper on deep reinforcement learning, which explores new frontiers in artificial intelligence.",
                date: "2024-08-15",
                image: "path/to/research_paper_image.jpg"
            },
            {
                title: "Guest Lecture at Tech Conference",
                content: "Had the privilege to give a guest lecture on AI's impact on healthcare systems.",
                date: "2024-07-22"
            }
        ]
    },
    {
        id: 2,
        name: "Arjun Desai",
        price: "₹2500/hour",
        organization: "Tech Innovations",
        credentials: ["Data Science", "AI Research"],
        categories: ["Data Science", "AI"],
        description: "Experienced data scientist with expertise in artificial intelligence and machine learning.",
        linkedin: "https://linkedin.com/in/arjun-desai",
        posts: [
            {
                title: "AI in Finance",
                content: "Discussing the implications of AI on financial markets and its potential to revolutionize trading systems.",
                date: "2024-09-01"
            },
            {
                title: "Workshop on Deep Learning",
                content: "Conducted an in-depth workshop on advanced deep learning techniques for industry professionals.",
                date: "2024-07-30",
                link: "https://example.com/deep-learning-workshop"
            }
        ]
    },
    {
        id: 3,
        name: "Neha Singh",
        price: "₹1800/hour",
        organization: "FinTech World",
        credentials: ["Financial Analysis", "Blockchain"],
        categories: ["Finance", "Blockchain"],
        description: "Blockchain and financial technology expert with experience in transforming digital finance.",
        linkedin: "https://linkedin.com/in/neha-singh",
        posts: [
            {
                title: "Blockchain for Social Good",
                content: "Exploring how blockchain technology can be leveraged for charitable purposes and global development.",
                date: "2024-08-10",
                link: "https://example.com/blockchain-social-good"
            }
        ]
    },
    {
        id: 4,
        name: "Sara Ahmed",
        price: "₹2200/hour",
        organization: "Healthcare AI Solutions",
        credentials: ["Healthcare Technology", "AI"],
        categories: ["Healthcare", "Technology"],
        description: "Leader in the intersection of AI and healthcare, driving innovation in medical technology.",
        linkedin: "https://linkedin.com/in/sara-ahmed",
        posts: [
            {
                title: "AI in Diagnostics",
                content: "How artificial intelligence is improving diagnostic accuracy in healthcare.",
                date: "2024-07-18"
            },
            {
                title: "Healthcare AI Conference",
                content: "Presented a paper on AI-assisted surgeries at the Global Healthcare AI Conference.",
                date: "2024-06-05",
                image: "path/to/conference_image.jpg"
            }
        ]
    }
];

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { mentors });
});
app.get('/mentor/:id', (req, res) => {
    const mentor = mentors.find(m => m.id == req.params.id);
    if (mentor) {
        res.render('mentor-details', { mentor });
    } else {
        res.status(404).send('Mentor not found');
    }
});

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
});
