// Adding the data instead of importing
// importing is giving me errors
const tasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// DOM Elements declerations
const todoTasks = document.getElementById('todo-tasks');
const doingTasks = document.getElementById('doing-tasks');
const doneTasks = document.getElementById('done-tasks');
const modal = document.getElementById('task-modal');
const taskForm = document.getElementById('task-form');
const cancelBtn = document.getElementById('cancel-btn');

// Modal input fields that are stored and showed
const taskIdInput = document.getElementById('task-id');
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-description');
const taskStatusInput = document.getElementById('task-status');

// Current task that I want to show
let currentTask = null;

// Create task function
/**
 * Creates the list element and its respective / relevent classes in the DOM.
 * @param {Object} task - The tasks which are stored in an array and declared as tasks
 * @returns {HTMLLIElement} - The created list item elements
 */
function createTaskElement(task) {
    const taskElementCreated = document.createElement("li");
    taskElementCreated.className = 'task mt-4 py-5 px-3 mr-2 w-max-[320px] xl:w-[280px] h-[60px] bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(54,78,126,0.1)] transition-all hover:shadow-md';
    taskElementCreated.innerHTML = `<h3 class="font-bold">${task.title}</h3>`;
    taskElementCreated.setAttribute('data-id', task.id);
    return taskElementCreated;
}

// Showing the task
// Implemented function to show all tasks once the script is running on the main section
/**
 * First cleans the HTML Elements and then Shows or Renders the tasks from the given array to the respactive columns in the DOM
 * 
 */
function showSortedTasks() {
    // Clear all columns
    todoTasks.innerHTML = '';
    doingTasks.innerHTML = '';
    doneTasks.innerHTML = '';

    // Sort tasks into columns
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
    
        switch(task.status) {
            case 'todo':
                todoTasks.appendChild(taskElement);
                break;   
            case 'doing':
                doingTasks.appendChild(taskElement);
                break;
            case 'done':
                doneTasks.appendChild(taskElement);
                break;
        }
    });

    // Update task counts in column headers
    updateTaskCounts();

}

// Update the task counts in each column header
/**
 * Selects the Element container with the specified id and select the last child of the target parent and gives it the value of length of the Elements in that column
 */
function updateTaskCounts() {
  document.querySelector('#todo-column span:last-child').textContent = `(${todoTasks.children.length})`;
  document.querySelector('#doing-column span:last-child').textContent = `(${doingTasks.children.length})`;
  document.querySelector('#done-column span:last-child').textContent = `(${doneTasks.children.length})`;
}



// Function to open modal with task data
/**
 * Matches the Id of the selected task provides the information in the modal.
 * @param {number} taskId - Is the ID of the selected
 * @returns A modal that is populated with the informtion that the corresponds to the matched ID
 */
function openEditModal(taskId) {
    currentTask = tasks.find(task => task.id === taskId);
    
    if (!currentTask) return;
  
    // populate the modal with task data that was salected
    taskIdInput.value = currentTask.id;
    taskTitleInput.value = currentTask.title;
    taskDescInput.value = currentTask.description;
    taskStatusInput.value = currentTask.status;
  
    // Show the modal
    modal.classList.remove('hidden');
}

// Function to close modal
/**
 * Closes the task modal and resets the current task variable declared
 * Add the Hidden class to allow the modal to dissapear once it is closed
 */
function closeModal() {
    modal.classList.add('hidden');
    currentTask = null;
}

// Save task changes
/**
 * This allos changes to be made in modal to be savd
 * @param {Event} e - Is the submit event from the form before
 * @returns 
 */
function saveTaskChanges(e) {
    e.preventDefault();
    
    if (!currentTask) return;
  
    // Update task object
    currentTask.title = taskTitleInput.value;
    currentTask.description = taskDescInput.value;
    currentTask.status = taskStatusInput.value;
    
    // Refresh display
    showSortedTasks();
    closeModal();
}

// Event Listeners
/**
 * Sets up event listener for the selected task that is triggered by a click
 * This will also open the edit model.
 * 
 */
function setupEventListeners() {
    // Event delegation for task clicks
    [todoTasks, doingTasks, doneTasks].forEach(column => {
        column.addEventListener('click', (e) => {
            const taskElement = e.target.closest('.task');
            if (taskElement) {
                const taskId = parseInt(taskElement.dataset.id);
                openEditModal(taskId);
            }
        });
    });

    // Modal close and opening event listeners
    cancelBtn.addEventListener('click', closeModal);
    taskForm.addEventListener('submit', saveTaskChanges);

    // Close modal when clicking on the ouside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
  
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Initialize the board initially there was 8 now there will be 6
/**
 * init function is the main functon that has mor functions within the function
 */
function init() {
    showSortedTasks();
    setupEventListeners();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);