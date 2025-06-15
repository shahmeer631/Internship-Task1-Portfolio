// Project Data
const projects = {
    1: {
        title: "E-commerce Website",
        description: "A full-featured online shopping platform with user authentication and payment integration.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "User authentication and authorization",
            "Product catalog with search and filters",
            "Shopping cart functionality",
            "Secure payment processing",
            "Order tracking system"
        ],
        link: "#"
    },
    2: {
        title: "Task Management App",
        description: "A productivity application for managing tasks and projects with real-time updates.",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=60",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        features: [
            "Real-time task updates",
            "Project organization",
            "Team collaboration",
            "Progress tracking",
            "Deadline management"
        ],
        link: "#"
    }
};

// Modal Elements
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalFeatures = document.getElementById('modalFeatures');
const modalLink = document.getElementById('modalLink');
const closeModal = document.querySelector('.close-modal');

// Open Modal
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', () => {
        const projectCard = button.closest('.project-card');
        const projectId = projectCard.getAttribute('data-project');
        const project = projects[projectId];

        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        
        // Clear and populate technologies
        modalTech.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            modalTech.appendChild(li);
        });

        // Clear and populate features
        modalFeatures.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        modalLink.href = project.link;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 