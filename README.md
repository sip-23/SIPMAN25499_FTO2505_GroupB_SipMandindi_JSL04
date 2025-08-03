# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview

In this project, you will dynamically display tasks from the **given initial data** on the DOM using JavaScript. Tasks should be placed into the correct **Kanban board columns** based on their status, and clicking a task should open a **modal** where users can view and modify task details. The project emphasizes **DOM manipulation, event handling, modular JavaScript structure, and responsive UI implementation.**

## Figma Design Link

Check the updated Figma Design: [Figma Link](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=Ki0CZk0RAjrk9Fhs-0)

## Key Objectives

### Dynamic Task Display & Interaction

- Dynamically generate **task elements** from the given initial data and insert them into the DOM.
- Ensure tasks are placed in the **correct columns** ("To Do", "In Progress", "Done") based on their status.
- Clicking a task should **open a modal** displaying its details.
- The modal should include:
  - **Editable input fields** for the task title and description.
  - **A select dropdown** showing the current status with other status options available.
  - **A close button** that allows users to exit the modal easily.

### Design & Responsiveness

- We had to ensure the **modal matches the Figma design**, including a **backdrop effect** for focus.
- We also Implemented a **fully responsive modal** that works on both desktop and mobile devices.

### Code Structure & Maintainability

- Structure JavaScript using **modular, single-responsibility functions**.
- Use **descriptive and meaningful variable and function names** for clarity.
- Add **JSDoc comments** to major functions, describing their purpose, parameters, and return values for better documentation.

## List of technologies

- HTML
- Tailwind CSS
- Javascript

## Set up

1. Install node.js
2. Install tailwind css
3. install Live extensition

## Expected Outcome

A fully functional **dynamic task board** where tasks appear under the correct columns, and users can **open a modal to view/edit** task details. The project will follow **clean, well-documented, and maintainable code practices**, ensuring a professional and scalable implementation.

### Desktop view
![Added Tasks](./assets/6%20Objects%20added.png)

![Modal view](./assets/Modal%20view%20with%20dropdown%20-%20Desktop.png)

### Mobile view

![Added Task](./assets/6%20Objects%20added%20-%20Mobile.png)

![Modal view](./assets/Model%20view%20-%20Mobile.png)
