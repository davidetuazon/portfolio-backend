exports.getProjects = (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Qawah Cafe - E-Commerce Website',
            tech: ["Node.js", "Express", "Mongodb"]
        },
        {
            id: 2,
            title: 'Undead Academia - Survival Horror Game',
            tech: ["Unity", "C#"]
        },
        {
            id: 3,
            title: 'An Equal Share - GMTK Game Jam 2024',
            tech: ["Unity", "C#"]
        },
        {
            id: 4,
            title: 'Handwritten Digit Recognition - Machine Learning Case study',
            tech: ["Python", "PyTorch"]
        },
        {
            id: 5,
            title: 'Water Allocation Strategy Model using Genetic Algorithm',
            tech: ["Python", "DEAP"]
        }
    ];
    res.json(projects);
};