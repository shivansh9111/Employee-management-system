const employees = [ 
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "12345",
    "taskNumber": { active: 1, newTask: 1, completed: 1, failed: 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare report",
        "description": "Create the monthly sales report.",
        "date": "2025-05-01",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client meeting",
        "description": "Attend the Zoom call with client.",
        "date": "2025-04-28",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Submit invoice",
        "description": "Send invoice for March.",
        "date": "2025-04-25",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "12345",
    "taskNumber": { active: 2, newTask: 1, completed: 1, failed: 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update website",
        "description": "Refresh homepage content.",
        "date": "2025-05-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Bug fix",
        "description": "Resolve ticket #1234.",
        "date": "2025-04-29",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Database backup",
        "description": "Run full backup on server.",
        "date": "2025-04-26",
        "category": "Maintenance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Test new feature",
        "description": "QA for new dashboard.",
        "date": "2025-05-03",
        "category": "QA"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohit",
    "email": "employee3@example.com",
    "password": "12345",
    "taskNumber": { active: 2, newTask: 1, completed: 1, failed: 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design logo",
        "description": "Draft concepts for new product.",
        "date": "2025-05-01",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Marketing email",
        "description": "Write and schedule promo email.",
        "date": "2025-04-30",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Social media plan",
        "description": "Plan posts for next week.",
        "date": "2025-05-04",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "12345",
    "taskNumber": { active: 2, newTask: 1, completed: 1, failed: 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Inventory check",
        "description": "Count warehouse stock.",
        "date": "2025-05-01",
        "category": "Logistics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Supplier call",
        "description": "Confirm delivery dates.",
        "date": "2025-04-29",
        "category": "Supply Chain"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Order processing",
        "description": "Finalize pending orders.",
        "date": "2025-04-28",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Shipment scheduling",
        "description": "Plan outgoing shipments.",
        "date": "2025-05-02",
        "category": "Logistics"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "12345",
    "taskNumber": { active: 3, newTask: 2, completed: 1, failed: 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Customer follow-up",
        "description": "Call top clients for feedback.",
        "date": "2025-05-01",
        "category": "Customer Service"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Support ticket",
        "description": "Resolve issue #5678.",
        "date": "2025-04-30",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "CRM update",
        "description": "Update customer records.",
        "date": "2025-04-27",
        "category": "CRM"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare presentation",
        "description": "Slides for client meeting.",
        "date": "2025-05-03",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Lead generation",
        "description": "Research new prospects.",
        "date": "2025-05-04",
        "category": "Sales"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "12345"
  }
];




export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) ;
  const admin = JSON.parse(localStorage.getItem('admin')) ;
  return { admin, employees };
};
