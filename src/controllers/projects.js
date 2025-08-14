exports.getProjects = (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Qawah Cafe',
            caption: 'E-Commerce Website',
            description: '', 
            tech: ["Node.js", "Express", "Mongodb"]
        },
        {
            id: 2,
            title: 'Undead Academia',
            caption: 'Survival Horror Game',
            description: '', 
            tech: ["Unity", "C#"]
        },
        {
            id: 3,
            title: 'An Equal Share',
            caption: 'GMTK Game Jam 2024',
            description: '', 
            tech: ["Unity", "C#"]
        },
        {
            id: 4,
            title: 'Handwritten Digit Recognition',
            caption: 'Machine Learning Case study',
            description: '', 
            tech: ["Python", "PyTorch"]
        },
        {
            id: 5,
            title: 'Water Allocation Strategy Model',
            caption: 'Model using Genetic Algorithm',
            description: '', 
            tech: ["Python", "DEAP"]
        }
    ];
    res.json(projects);
};