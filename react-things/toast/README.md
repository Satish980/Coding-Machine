## Toast Component

Functional requirements:
- Notification types
    - success, info, warning, error
- Customization
    - text, duration, animation, position
- Animation
    - fade, pop, slide
- Position
    - top left/right, bottom left/right
- Close button
    - manual close
- Stacking behavior
    - notifications should stack
- Notification Queue

Non Functional requirements
- Performance
    - it should lightweight
- Accessibility
    - ARIA roles
    - Button focus
- User experience
- Compatibility
    - Different types of browsers
- Scalability
    - Code should be scalable


High Level Design
- Overview of app or component
- A UI Design or a Modal will come under HLD
    - Success will be in green color
    - Info will be in blue
    - Warning will be in yellow
    - Error will be in Red 

Low Level Design
- It is how to build
- Concern about code implementation
- Technologies used: React, Vite, Javascript
- Keep Logic at one place like creating a custom hooks for separation of concerns