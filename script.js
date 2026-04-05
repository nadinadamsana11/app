// Define your tools here based on your GitHub repo folders
// folder: the name of the folder containing the tool
// name: the display name
// icon: FontAwesome icon class
// color: Color theme for the icon (default, blue, pink, green, orange)
// desc: A short description
const tools = [
    {
        folder: "MemeCraft",
        name: "MemeCraft",
        icon: "fa-solid fa-face-smile",
        color: "blue",
        desc: "Create and customize memes easily."
    },
    {
        folder: "jobs-portal",
        name: "Jobs Portal",
        icon: "fa-solid fa-briefcase",
        color: "green",
        desc: "Find and post job opportunities."
    },
    {
        folder: "pos-app",
        name: "POS System",
        icon: "fa-solid fa-cash-register",
        color: "orange",
        desc: "Offline point of sale system with inventory."
    },
    {
        folder: "booking-system",
        name: "Booking System",
        icon: "fa-solid fa-calendar-check",
        color: "pink",
        desc: "Online appointment booking for shops."
    },
    {
        folder: "portfolio",
        name: "Personal Portfolio",
        icon: "fa-solid fa-user-tie",
        color: "",
        desc: "My personal resume and portfolio website."
    },
    {
        folder: "tools-collection",
        name: "Other Utilities",
        icon: "fa-solid fa-screwdriver-wrench",
        color: "blue",
        desc: "A collection of random utility scripts."
    }
];

// Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');

// Render Function
function renderTools(toolsToRender) {
    toolsGrid.innerHTML = ''; // Clear current
    
    if (toolsToRender.length === 0) {
        toolsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h2>No tools found...</h2>
                <p>Try adjusting your search query.</p>
            </div>
        `;
        return;
    }

    toolsToRender.forEach(tool => {
        // Create anchor tag
        const card = document.createElement('a');
        card.className = 'app-card';
        // When clicking, it goes into the folder. So we assume each folder has an index.html auto-served
        card.href = `./${tool.folder}/`; 
        
        // Icon wrapper
        const iconWrapper = document.createElement('div');
        iconWrapper.className = `icon-wrapper ${tool.color}`;
        
        const icon = document.createElement('i');
        icon.className = tool.icon;
        
        iconWrapper.appendChild(icon);
        
        // Content
        const title = document.createElement('h3');
        title.textContent = tool.name;
        
        const desc = document.createElement('p');
        desc.textContent = tool.desc;
        
        // Arrow Icon
        const arrow = document.createElement('i');
        arrow.className = 'fa-solid fa-arrow-right arrow-icon';

        // Append everything
        card.appendChild(iconWrapper);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(arrow);
        
        toolsGrid.appendChild(card);
    });
}

// Initial render
renderTools(tools);

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.desc.toLowerCase().includes(query) ||
        tool.folder.toLowerCase().includes(query)
    );
    
    renderTools(filteredTools);
});
