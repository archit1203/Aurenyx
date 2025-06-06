document.addEventListener('DOMContentLoaded', () => {
  const loadBtn = document.getElementById('loadProjectsBtn');
  const projectList = document.getElementById('projectsList');

  loadBtn.addEventListener('click', () => {
    projectList.innerHTML = `
      <ul>
        <li>🔐 Password Manager using File I/O</li>
        <li>🧠 DSA Visualizer (Stacks, Queues, Trees)</li>
        <li>💻 Student Result Management System (with SQL)</li>
        <li>🌐 Portfolio Website with HTML/CSS/JS</li>
        <li>🤖 Mini Chatbot using Python basics</li>
      </ul>
    `;
    loadBtn.disabled = true;
    loadBtn.textContent = 'Projects Loaded';
  });
});

