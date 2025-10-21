# **App Name**: SalvAID

## Core Features:

- Emergency Guides: Provide quick, accessible guides for various first aid scenarios, ensuring users can swiftly find critical information.
- Educational Assistant (Lia): Integrate an AI-powered assistant to provide step-by-step guidance, answer questions, and offer personalized advice on first aid procedures. This tool will leverage its reasoning ability to decide when to provide specific advice. It should function in two modes: local (offline) using a predefined FAQ or decision tree stored in Dexie.js, and remote (configurable) by connecting to an HTTP endpoint on a custom server.
- Offline Access: Enable full app functionality offline, leveraging Dexie for local storage, so users can access crucial information even without an internet connection.
- Tips and News: Deliver up-to-date tips, advice, and relevant news related to first aid and emergency preparedness.
- Multilingual Support: Offer the app in multiple languages, powered by next-intl, to ensure accessibility for a diverse user base.
- Progressive Web App (PWA): Transform the application into a PWA using Workbox to enhance user experience with features like offline access and installability.
- Bottom Navigation: Implement a permanently visible bottom navigation for easy access to main app sections, ensuring a user-friendly interface.

## Style Guidelines:

- Primary color: Deep teal (#008080) to convey trustworthiness and safety, reflecting the app's institutional design. This color echoes common associations with medical environments but in a friendlier, less sterile manner.
- Background color: Light teal (#E0F8F8), a very desaturated version of the primary color, for a clean and calm interface.
- Accent color: Soft blue (#70A1FF) to highlight interactive elements and important information, drawing the user's attention without overwhelming the senses.
- Body and headline font: 'PT Sans', a humanist sans-serif for large, accessible, and legible texts, ensuring comfortable reading across different devices.
- Utilize Lucide React icons for clear, modern, and easily understandable visual representations of first aid actions and tips.
- Design a fluid and modern touch interface, leveraging Tailwind CSS and @shadcn/ui for a responsive and adaptable layout across various screen sizes.
- Incorporate subtle Framer Motion animations to provide smooth transitions and feedback, enhancing the overall user experience.