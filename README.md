# AI URL Quiz Generator

A full-stack web application that leverages the OpenAI API to dynamically parse web content and generate interactive study materials. Built to transform any URL into stateful quizzes, flashcards, and simplified summaries instantly, while maintaining strict API key security through a backend proxy.

### 🛠️ Tech Stack
* **Frontend:** JavaScript (ES6+), HTML5, CSS3
* **Backend:** Node.js, Express.js
* **Security & Configuration:** Dotenv, CORS
* **API Integration:** OpenAI API (gpt-3.5-turbo), REST APIs

### ⚙️ Core Architecture & Features
* **Secure Backend Proxy:** Engineered an Express.js server to act as a secure intermediary for OpenAI API requests, ensuring sensitive API keys remain completely isolated from the client-side environment.
* **LLM Integration via REST:** Built asynchronous communication between the frontend client and Node backend to transmit extracted URL content and return structured JSON data for educational assessments.
* **Stateful DOM Manipulation:** Parses complex JSON responses to dynamically render interactive UI components (flippable flashcards, real-time quiz validation) with zero-latency updates and no page reloads.

### 🚀 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Shailzapandey/ai-url-quiz-generator.git](https://github.com/Shailzapandey/ai-url-quiz-generator.git)
   cd ai-url-quiz-generator

