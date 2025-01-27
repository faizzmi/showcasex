import { project01, project14 } from "@/assets/assets";

export const projectList = [
    {
        "projectId": "1",
        "projectName": "Distance Measurement",
        "projectHeader": "Redefining The Art of Spatial Awareness in Machines.",
        "headerImage": project01.headerImg,
        "projectStack": ["Python", "OpenCV", "Sobel Edge Detection"],
        "framework": [],
        "projectURL": "https://github.com/faizzmi/distance-measurement",
        "projectLevel":"Final Year Project",
        "createdAt": "2024-02-04T03:10:42Z",
        "projectType": "Computer Vision",
        "videoURL": project01.video,
        "projectFeatures": {
            title: "features",
            desc: "The core feature of this project, implementing real-time distance measurement using Sobel edge detection, lies in its ability to detect and quantify distances between objects by analyzing edge information in images. The Sobel edge detection algorithm identifies areas of rapid intensity change, which correspond to edges, allowing the system to locate object boundaries in real-time. The distance measurement is derived from the spatial relationship between these detected edges, providing an estimate of how far objects are from the camera or sensor. The system's accuracy and effectiveness are enhanced by incorporating preprocessing techniques to address challenges like illumination changes, and segmentation methods to handle multiple objects or occlusions, ensuring precise and reliable distance calculations across different environments. This combination of edge detection, real-time processing, and spatial recognition features offers a robust solution for applications like autonomous vehicles, robotic navigation, or augmented reality.",
            pics: project01.feature
        },
        "reflection": {
            title: "reflections",
            desc: "Working on this project was a tremendous learning experience in the field of computer vision. It allowed me to dive deep into the practical application of edge detection algorithms and real-time data processing. The main takeaway was understanding how to handle challenges related to variable lighting and object detection, which often lead to inaccuracies. This hands-on experience strengthened my problem-solving skills and gave me the confidence to work with OpenCV in future machine vision projects. The project was both technically demanding and rewarding as it involved translating theory into working code, providing valuable insight into spatial awareness and distance calculation.",
            pics: []
        },
        highlight: [],
        "projectDesc": "This project aimed to develop a system for real-time distance measurement using computer vision techniques. It utilized Sobel edge detection to identify and analyze object boundaries within images. The primary challenges involved ensuring accurate distance calculations under varying lighting conditions and dealing with complex edge scenarios. The project successfully demonstrated the application of computer vision principles for spatial awareness and distance measurement."
    },
    {
        "projectId": "2",
        "projectName": "Foody",
        "projectHeader": "Transforming Food Delivery Into A Seamless Revolution.",
        "headerImage": '',
        "projectStack": ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        "framework": ["Laravel"],
        "projectURL": "https://github.com/faizzmi/Foody",
        "projectLevel":"Academic",
        "createdAt": "2024-11-09T14:56:03Z",
        "projectType": "Web Development",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "",
            pics: []
        },
        highlight: [],
        "projectDesc": "Foody is a web application designed to streamline the food delivery process. It integrates online food ordering with real-time delivery tracking, providing a seamless experience for both customers and restaurants. Key features include order management, payment processing, and real-time status updates. The project emphasizes user experience and efficiency, aiming to improve the overall food delivery process."
    },
    {
        "projectId": "3",
        "projectName": "VisionSense",
        "projectHeader": "Unlocking The Future Of Personalized Lens Fitting.",
        "headerImage": '',
        "projectStack": ["Python"],
        "framework": [],
        "projectURL": "https://github.com/faizzmi/Fuzzy-Logic-Based-Contact-Lenses-Recommendation-System",
        "projectLevel":"Academic",
        "createdAt": "2024-11-09T14:56:03Z",
        "projectType": "Machine Learning",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "",
            pics: []
        },
        highlight: [],
        "projectDesc": "VisionSense is a machine learning-based system that recommends personalized contact lenses to users. It utilizes fuzzy logic to consider both objective eye measurements and subjective factors like comfort and fit. The system aims to provide tailored recommendations for optimal vision correction and user satisfaction."
    },
    {
        "projectId": "4",
        "projectName": "GadgetVerse",
        "projectHeader": "Step Into A Realm Where Technology Meets Infinite Possibilities.",
        "headerImage": '',
        "projectStack": ["JavaScript"],
        "framework": ["React.JS", "Three.JS", "Tailwind.Css"],
        "projectURL": "https://github.com/faizzmi/GadgetVerse",
        "projectLevel":"Personal",
        "createdAt": "2024-12-24T16:18:31Z",
        "projectType": "Web Development",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "",
            pics: []
        },
        highlight: [],
        "projectDesc": "GadgetVerse is a web application that showcases tech products in an interactive 3D environment. It utilizes Three.js for 3D rendering and React.js for dynamic user interface elements. The project focuses on creating a visually engaging and performant experience, allowing users to explore and interact with products in a unique way."
    },
    {
        "projectId": "5",
        "projectName": "Purrfect Paws",
        "projectHeader": "A Journey Through The Feline World, Where Curiosity Meets Discovery.",
        "headerImage": '',
        "projectStack": ["TypeScript"],
        "framework": ["Angular.JS"],
        "projectURL": "https://github.com/faizzmi/purrfect-paws",
        "projectLevel":"Personal",
        "createdAt": "2024-02-16T00:28:18Z",
        "projectType": "Web Development",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "",
            pics: []
        },
        highlight: [],
        "projectDesc": "Purrfect Paws is a web application that helps users find the perfect cat breed for them. It features a dynamic filtering system that allows users to select specific traits and preferences, such as coat color, size, and temperament. The application provides an interactive and engaging experience for users to explore the world of feline breeds."
    },
    {
        "projectId": "6",
        "projectName": "TraceTogether",
        "projectHeader": "A Digital Lifeline In The Fight For Public Health And Safety.",
        "headerImage": '',
        "projectStack": ["Java", "Android Studio"],
        "framework": [],
        "projectURL": "https://github.com/faizzmi/TraceTogether",
        "projectLevel":"Academic",
        "createdAt": "2024-11-07T00:00:00Z",
        "projectType": "Mobile App Development",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "",
            pics: []
        },
        highlight: [],
        "projectDesc": "TraceTogether is a mobile application designed to assist in contact tracing efforts to help control the spread of infectious diseases. It utilizes proximity tracking technology to identify potential exposure risks while prioritizing user privacy and data security."
    },
    {
        "projectId": "7",
        "projectName": "Tribute",
        "projectHeader": "Honoring The Legacy Of A Nation’s Founding Father In Pixels And Code.",
        "headerImage": "",
        "projectStack": ["HTML", "CSS"],
        "framework": [],
        "projectURL": "https://github.com/faizzmi/Tribute",
        "projectLevel": "Personal",
        "createdAt": "2024-11-12T00:00:00Z",
        "projectType": "Web Development",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "Tribute was a simple yet impactful project built to honor a historical figure through a well-designed tribute page. The project’s uniqueness lies in its focus on visual storytelling, where I used HTML and CSS to design a page that both conveyed information and evoked emotion. The challenge was ensuring that the design was both minimalistic and informative, without overwhelming the visitor with too much text or imagery. The project also required creating a clean, responsive layout that could work across different devices.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Tribute was an important project in my web development journey, as it allowed me to focus on design principles while still developing a functional website. I learned the importance of simplicity in design, ensuring that every element served a purpose. The project also helped me improve my HTML and CSS skills, particularly in creating responsive layouts and using styles effectively to guide the user’s focus.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "Tribute is a web page dedicated to honoring a historical figure. It utilizes HTML and CSS to create a visually appealing and informative tribute, emphasizing simplicity and clarity in design."
    },
    {
        "projectId": "8",
        "projectName": "Trip Planner",
        "projectHeader": "AI-Driven Adventure Planning, Making Every Journey More Effortless And Exciting.",
        "headerImage": "",
        "projectStack": ["JavaScript", "Gemini"],
        "framework": ["React Native"],
        "projectURL": "https://github.com/faizzmi/trip-planner",
        "projectLevel": "Personal",
        "createdAt": "2024-12-29T09:45:43Z",
        "projectType": "Mobile App Development",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "The Trip Planner app leverages AI to help users plan their trips with personalized recommendations. The most unique aspect of this app is its use of the Gemini AI engine to suggest destinations and activities based on the user’s preferences. The biggest challenge was integrating AI effectively into the app while keeping the UI intuitive and responsive. Ensuring the AI recommendations were accurate and useful required careful tuning of the algorithm, as well as user testing to gather feedback.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Developing Trip Planner taught me valuable lessons in AI integration, especially within mobile applications. It challenged me to think about how AI can enhance user experiences in a practical and engaging way. I also gained experience working with React Native, which helped me become more versatile as a mobile app developer. The project gave me confidence in creating intelligent, data-driven apps and reinforced my interest in exploring the intersection of AI and mobile development.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "Trip Planner is a mobile application that utilizes AI to assist users in planning their travel itineraries. It leverages the Gemini AI engine to provide personalized recommendations for destinations and activities based on user preferences."
    },
    {
        "projectId": "9",
        "projectName": "VendPal",
        "projectHeader": "Reimagining The Vending Experience For The Modern World.",
        "headerImage": "",
        "projectStack": ["JavaScript"],
        "framework": [],
        "projectURL": "https://github.com/faizzmi/Vending-Machine",
        "projectLevel": "Academic",
        "createdAt": "2024-11-27T15:46:38Z",
        "projectType": "Software Development",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "VendPal aimed at creating an enhanced vending machine experience by implementing a digital payment and interaction system. The major challenge was creating an intuitive interface for users to select products and make payments seamlessly. Another difficulty was ensuring the backend could handle simultaneous requests during peak usage times, and maintaining security for user transactions. The project was unique because it integrated traditional vending with modern digital technologies for a seamless user experience.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Developing VendPal was a great learning opportunity in web development and payment system integration. It taught me how to handle real-time transactions and manage scalability concerns, which are essential skills for handling applications in high-demand environments. The project also enhanced my understanding of integrating front-end interfaces with secure back-end services to ensure a smooth and safe user experience.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "VendPal is a web application that modernizes the vending machine experience. It integrates digital payment options and an intuitive user interface to enhance the product selection and purchasing process."
    },
    {
        "projectId": "10",
        "projectName": "HASIL INTERNAL AUDIT SYSTEM (HIAS)",
        "projectHeader": "An Internal Audit System for LHDN to streamline audit processes.",
        "headerImage": "",
        "projectStack": ["TypeScript", "BitBucket"],
        "framework": ["Angular", "Ionic"],
        "projectURL": "",
        "projectLevel": "Internship",
        "createdAt": "2025-01-16T15:00:00Z",
        "projectType": "Enterprise Software",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "HIAS was developed to streamline the internal audit process at LHDN, automating many manual tasks and improving the overall efficiency of the department. The system needed to be highly secure, as it handled sensitive financial data. The challenge was ensuring the security of the data while maintaining usability. Another difficulty was ensuring the system could integrate smoothly with the existing infrastructure at LHDN. The system was designed to be scalable, ensuring that it could adapt to the growing needs of the department over time.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Building HIAS was a great experience in enterprise software development. I learned a lot about security, data management, and creating scalable systems that can grow with a company’s needs. The project also gave me valuable insights into the importance of designing systems that integrate well with existing infrastructure, as well as the challenges of working with sensitive data in a corporate environment.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "HIAS is an internal audit system developed for LHDN (Lembaga Hasil Dalam Negeri) to streamline and improve the efficiency of their audit processes. The system incorporates features such as automated tasks, enhanced data security, and seamless integration with existing LHDN infrastructure."
    },
    {
        "projectId": "11",
        "projectName": "MYKKP",
        "projectHeader": "MyKKP is an online service provided by Kementerian Keselamatan dan Kesihatan Pekerja for its users.",
        "headerImage": "",
        "projectStack": ["JavaScript", "Typescript", "BitBucket"],
        "framework": ["AngularJS", "Angular", "Ionic"],
        "projectURL": "",
        "projectLevel": "Internship",
        "createdAt": "2024-03-01T00:00:00Z",
        "projectType": "Web Development",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "MYKKP is a service designed to streamline and provide easy access to government services related to workers' health and safety. The project required the creation of a user-friendly platform that could handle large amounts of data and integrate seamlessly with existing government systems. One of the main challenges was ensuring that the platform was secure and met compliance standards, especially considering the sensitive nature of the data. Angular was used for developing a responsive and interactive frontend that allowed users to access various features with ease.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Developing MYKKP was an excellent learning experience in building enterprise-level applications. It gave me a deep understanding of how to handle sensitive data while ensuring that the platform was both secure and user-friendly. The project also required me to work with government standards and compliance requirements, which added a layer of complexity but also improved my attention to detail. This experience strengthened my skills in working with Angular and integrating large-scale systems, and provided valuable insights into building secure and reliable web platforms.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "MYKKP is an online service developed by Kementerian Keselamatan dan Kesihatan Pekerja (Ministry of Occupational Safety and Health) to provide users with convenient access to government services related to worker safety and health."
    },
    {
        "projectId": "12",
        "projectName": "ShowCase-X",
        "projectHeader": "A personal portfolio with all projects and achievements.",
        "headerImage": "",
        "projectStack": ["JavaScript", "HTML", "CSS", "Node.js"],
        "framework": ["ReactJS", "React Native", "ExpressJS", "NextJS"],
        "projectURL": "",
        "projectLevel": "Personal",
        "createdAt": "2025-01-20T00:00:00Z",
        "projectType": "Web Development",
        "projectFeatures": {
            "title": "Features",
            "headerImg": "",
            "desc": "ShowCase-X is a personal portfolio website designed to showcase my projects and achievements. The project focuses on creating a modern and clean design to present my work in the best possible light. The challenge was ensuring the site was both aesthetically pleasing and easy to navigate, while also optimizing for performance. ReactJS and NextJS were used for frontend development, while NodeJS and ExpressJS powered the backend to manage server-side requests and data.",
            "pics": []
        },
        "reflection": {
            "title": "Reflections",
            "headerImg": "",
            "desc": "Building ShowCase-X was a valuable project for refining my web development skills. It provided me the opportunity to explore various technologies and frameworks like ReactJS, NextJS, and NodeJS. The project helped me better understand how to manage both front-end and back-end aspects of a site, and improve my workflow. Additionally, designing my personal portfolio allowed me to consider how to best represent myself and my work to potential employers or clients.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "ShowCase-X is a personal portfolio website designed to highlight my projects, achievements, and skills, aiming to present them in an attractive and user-friendly format."
    },
    {
        "projectId": "13",
        "projectName": "scentedDreams",
        "projectHeader": "An E-commerce Perfume Shop Developed with WordPress and PHP.",
        "headerImage": "",
        "projectStack": ["WordPress", "PHP"],
        "framework": [],
        "projectURL": "",
        "projectLevel": "Academic",
        "createdAt": "2023-06-01T00:00:00Z",
        "projectType": "E-commerce",
        "projectFeatures": {
            "title": "features",
            "headerImg": "",
            "desc": "Developed an e-commerce website for selling perfumes, featuring a user-friendly interface, product catalog, shopping cart functionality, and secure payment processing. The website was built with WordPress and PHP to provide a dynamic, customizable platform that catered to users looking for premium fragrance products. The project aimed to improve my web development skills and practical understanding of e-commerce business logic.",
            "pics": []
        },
        "reflection": {
            "title": "reflections",
            "headerImg": "",
            "desc": "This project was an excellent opportunity to apply my WordPress and PHP knowledge in a real-world scenario. I learned a great deal about creating a functional and aesthetically pleasing e-commerce website, focusing on product display, secure payment integration, and user navigation. The project also taught me how to maintain and update an e-commerce platform, handling products, orders, and customer interactions effectively. Overall, it was an invaluable hands-on experience that improved my full-stack web development capabilities.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "An e-commerce perfume shop that offers a range of premium perfumes for sale. Developed using WordPress for content management and PHP for backend functionality, this project focused on creating an intuitive online shopping experience for users, including features like product listings, shopping cart, and checkout process."
    },
    {
        "projectId": "14",
        "projectName": "PETAKOM MART MANAGEMENT SYSTEM (PMMS)",
        "projectHeader": "Streamlining Administrative Operations with Laravel",
        "headerImage": "",
        "projectStack": ["PHP", "GitLab"],
        "framework": ["Laravel"],
        "projectURL": "",
        "descImage": project14.descImg,
        "projectLevel": "Academic",
        "createdAt": "2023-07-01T00:00:00Z",
        "projectType": "Web Application",
        "projectFeatures": {
            "title": "features",
            "headerImg": "",
            "desc": "Directed the creation of a Laravel-based PHP system that improved administrative efficiency by 30%. The system was specifically designed for FK management and PETAKOM students, featuring five integrated modules for tasks such as student management, inventory tracking, orders processing, and reporting. The project also enhanced security and user access controls across administrative roles, optimizing workflow and increasing productivity.",
            "pics": []
        },
        "reflection": {
            "title": "reflections",
            "headerImg": "",
            "desc": "The development of PMMS was a challenging yet rewarding experience. Leading the creation of a system that directly impacted administrative efficiency allowed me to gain hands-on experience with Laravel and PHP. The process involved deep collaboration, problem-solving, and constant iteration to ensure that the system met both the functional and security requirements. A key takeaway was understanding the complexities of managing multiple integrated modules and ensuring smooth data flow across the system.",
            "pics": []
        },
        highlight: [],
        "projectDesc": "PMMS is a comprehensive management system designed for PETAKOM, built with Laravel and PHP. The system integrates five modules to handle key administrative tasks for FK management and PETAKOM students, aiming to improve productivity, reduce operational errors, and enhance security. The platform features an intuitive interface for admins and students, with real-time data tracking and reporting functionalities."
    },
    {
        "projectId": "15",
        "projectName": "PETAKOM Management System - PETAKOM Club Application and Maintenance",
        "projectHeader": "Enhancing Club Management and Operations with PETAKOM System",
        "headerImage": '',
        "projectStack": ["PHP", "GitHub"],
        "framework": ["Laravel"],
        "projectURL": "", 
        "projectLevel": "Academic",
        "createdAt": "2023-08-01T00:00:00Z",
        "projectType": "Web Application",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "Managed the application and ongoing maintenance of the PETAKOM Management System for Persatuan Teknologi Komputer (PTK) Club. The system was responsible for handling member registrations, event scheduling, internal communications, and record keeping. It also provided features for monitoring club activities, performance tracking, and generating reports. Maintenance tasks included regular updates, bug fixes, and ensuring data integrity for smooth club operations.",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "This project gave me practical experience in both system maintenance and management of a real-world application. Handling the PTK Club's administrative tasks allowed me to understand the importance of ensuring system stability while adding new features. I learned the significance of user feedback, debugging, and the impact of small optimizations in improving user experience. The project was an excellent opportunity to hone my skills in Laravel and PHP while working on a real-world use case.",
            pics: []
        },
        highlight: [],
        "projectDesc": "The PETAKOM Management System for the PTK Club was built with Laravel and PHP to streamline administrative tasks, event management, and club member services. The system integrates features for managing member profiles, event scheduling, and internal communication, providing the PTK Club with an efficient and organized way to handle their daily operations. Regular maintenance ensured the system remained up-to-date with features and security improvements."
    },
    {
        "projectId": "16",
        "projectName": "Profiling Information System (PINS)",
        "projectHeader": "Streamlining Information Submission for LHDNM through PINS",
        "headerImage": '',
        "projectStack": ["TypeScript", "Bitbucket"],
        "framework": ["Ionic", "Angular"],
        "projectURL": "",
        "projectLevel": "Internship",
        "createdAt": "2024-01-01T00:00:00Z",
        "projectType": "Web Application",
        "projectFeatures": {
            title: "features",
            headerImg: "",
            desc: "The Profiling Information System (PINS) was introduced by Lembaga Hasil Dalam Negeri Malaysia (LHDNM) to replace the Sistem Maklumat Unit Pengesanan (e-SMUP), which ceased operations on 31 December 2023. PINS serves as a centralized system for agencies to submit information requested by LHDNM via Surat Q applications. The system supports tax enforcement and compliance activities to ensure effective tax collection benefiting all Malaysians. A significant module in PINS is the FAQ module, designed to assist users with common queries regarding the submission process, system features, and guidelines for using PINS. The FAQ module is highly dynamic, allowing administrators to update questions and answers efficiently. It features an intuitive interface with animated accordion panels for seamless navigation, ensuring users can quickly find relevant information.",
            pics: []
        },
        "reflection": {
            title: "reflections",
            headerImg: "",
            desc: "Working on the Profiling Information System (PINS) allowed me to contribute to a critical system supporting LHDNM's tax enforcement initiatives. I gained hands-on experience in developing scalable, user-friendly components using Ionic Angular and TypeScript. The FAQ module was particularly rewarding to build, as it required a balance between aesthetics and functionality, ensuring accessibility for all users. The project also enhanced my skills in maintaining government-level security standards and utilizing Bitbucket for collaborative development. This experience emphasized the importance of delivering reliable systems that directly impact the nation's revenue and public services.",
            pics: []
        },
        highlight: [],
        "projectDesc": "The Profiling Information System (PINS) is a web application developed for LHDNM to streamline the submission of information by agencies via Surat Q applications. Built using Ionic Angular and TypeScript, the system includes various modules, with the FAQ module serving as a key feature. The FAQ module provides an interactive and user-friendly way for users to address common questions, minimizing support requests and improving user efficiency. PINS plays a vital role in supporting tax compliance and enforcement, benefiting Malaysians by ensuring effective tax revenue collection."
    }
];

export const desc = 'This portfolio highlights a curated selection of my work, demonstrating the variety and scope of projects I’ve completed. While certain pieces are excluded for reasons of client confidentiality, I’m confident that these examples reflect the wide range of skills and expertise I bring to every project.'
