# Internal IT Ticket Dashboard

## Technical Assessment – LeadGeeks IT Staff

## Project Overview

This project is a responsive Internal IT Ticket Dashboard developed using **Softr**, a no-code web application platform.

The purpose of the application is to help internal teams manage IT support requests by providing an easy way to create, update, assign, monitor, and resolve support tickets through a centralized dashboard.

> **Note**
>
> This application was built using Softr. As Softr is a no-code platform, the underlying application source code is not exportable like a traditional web application. This repository therefore contains the project documentation, screenshots, and any custom assets/code used during development.

---

## Live Demo

You can access the live application using the permanent authentication link below:
https://jim1813.softr.app/magic-authentication?magic-token=de685a40de834c3689a272e5cf071480

> This is a permanent magic authentication link provided for assessment purposes, allowing reviewers to access the application directly without requiring a separate login.

---

## Assessment Requirements Coverage

| Requirement | Status |
|------------|--------|
| Add Ticket | ✅ |
| Edit Ticket | ✅ |
| Delete Ticket | ✅ |
| Update Ticket Status | ✅ |
| View Ticket List | ✅ |
| Ticket Title | ✅ |
| Issue Category | ✅ |
| Priority | ✅ |
| Status | ✅ |
| Assigned Person | ✅ |
| Created Date | ✅ |
| Dashboard Statistics | ✅ |
| Responsive Layout | ✅ |
| Clean Information Hierarchy | ✅ |

---

## Technologies Used

- Softr
- Softr Database
- Softr Blocks
- Responsive Layout

---

## Features

### Ticket Management

- Create new tickets
- Edit ticket information
- Delete tickets
- Update ticket status
- Assign tickets to team members

### Ticket Information

Each ticket contains:

- Ticket Title
- Issue Category
- Priority
- Status
- Assigned Person
- Created Date

---

## Navigation Structure

The application is organized with a simple and intuitive navigation hierarchy to help users quickly access and manage IT support requests.

```

helpdesk

│

├── Home

│   ├── App Overview


│   └── Submit New Ticket

│

└── Manage Requests

    ├── All

    ├── Unassigned

    └── Assigned to Me

```

### Menu Description

#### Home

Provides a centralized overview of internal IT Help Desk operations. Users can quickly submit support request across three issue categories:

* Tool Access – Request or manage access to internal software and systems.
* Equipment – Submit requests related to IT hardware, devices, or peripherals.
* Security Audit – Report or track security-related issues and audit requests.

#### Manage Requests

Provides a centralized workspace for tracking and managing support requests.

- **All** – Displays every ticket in the system.

- **Unassigned** – Displays tickets that have not yet been assigned to an IT staff member.

- **Assigned to Me** – Displays tickets assigned to the currently logged-in user for follow-up and resolution.

### Responsive Design

Optimized for desktop, tablet, and mobile devices.

---

## Bonus Features

Implemented (if applicable):

- Search Tickets
- Filter by Status
- Filter by Priority
- Status Color Indicators

---

## Repo Structure

```

internal-it-ticket-dashboard/

├── README.md

└── screenshots/

    ├── dashboard.png

    ├── ticket-list.png

    ├── create-ticket.png

    ├── edit-ticket.png

    ├── mobile-dashboard.png

    └── database.png

```

---

## Setup Information

This project is hosted on Softr Cloud and therefore does not require a local installation.

To recreate the project:

1. Create a Softr application.
2. Connect the database.
3. Build pages using Softr blocks.
4. Configure permissions.
5. Apply custom CSS/JavaScript if needed.
6. Publish the application.

---

## Design Considerations

The dashboard was designed with the following principles:

- Simple navigation
- Clear information hierarchy
- Minimal clicks to complete tasks
- Readable data tables
- Responsive interface
- Easy ticket status tracking

---

## Author

Ilma Akrimatunnisa