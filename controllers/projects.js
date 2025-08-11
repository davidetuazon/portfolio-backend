exports.getProjects = (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Qawah Cafe',
            tech: ["Node.js", "Express", "Mongodb"]
        },
        {
            id: 2,
            title: 'Undead Academia',
            tech: ["Unity", "C#"]
        },
        {
            id: 3,
            title: 'An Equal Share',
            tech: ["Unity", "C#"]
        },
        {
            id: 4,
            title: 'Handwritten Digit Recognition',
            tech: ["Python", "PyTorch"]
        },
        {
            id: 5,
            title: 'Water Allocation Strategy using Genetic Algorithm',
            tech: ["Python", "DEAP"]
        }
    ];
    res.json(projects);
};