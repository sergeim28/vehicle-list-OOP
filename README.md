* This app purely focuses on OOP design pattern rather than its styling and view, so its look is bad. We can make this app looks better by giving more styles, and also using CSS module or CSS-in-JSS library.

# How to run
- `npm install`
- `npm run start`

# How this app works
This is the SPA that uses `React`, `TypeScript` and is based on `OOP`.




### Data layer : `src/data`
- `src/data/base.ts`: Data repository abstract base class
- `src/data/data.ts`: Single tone data layer class instance, this will be used as a the only interface that services will interact for data
- business specific data repositories
  -   `src/data/car/car-repository.ts`: Car repository class
  -   `src/data/car/model.ts`: Car class
  -   `src/data/extra/extra-repository.ts`: Extra repository class

### Service layer: `src/services`
- `src/services/car-service.ts`, `src/services/extra-service.ts`: Business logic specific services that interact with both "data layer" and "UI layer"
- `src/services/context`: A react-specific context that glues services and UI layer seamlessly

### UI layer: `src/components`
A group of UI components

### Helpers: `src/helpers`
A group of utility functions


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
