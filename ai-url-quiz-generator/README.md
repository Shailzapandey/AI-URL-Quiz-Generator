# AI URL Quiz Generator

## Overview
AI URL Quiz Generator is a web application that allows users to paste any URL and generate customized quizzes, flashcards, and simplified summaries using AI integration. This tool helps users better understand and retain information from web content.

## Features

- **URL Processing**: Paste any URL to analyze its content
- **Simplified Summaries**: Get concise, easy-to-understand summaries of web content
- **Customized Quizzes**: Generate interactive quizzes based on the content
- **Flashcards**: Create study flashcards with key concepts and explanations
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenAI API (for AI content generation)

## Setup Instructions

1. Clone the repository
2. Open `index.html` in your web browser
3. To enable AI functionality:
   - Sign up for an OpenAI API key at [OpenAI](https://openai.com)
   - Add your API key to the `OPENAI_API_KEY` variable in `script.js`

## How to Use

1. Enter a URL in the input field
2. Click the "Generate" button
3. Wait for the content to be processed
4. Navigate between tabs to view the generated summary, quiz, and flashcards
5. For quizzes: Select answers and click "Check Answers" to see results
6. For flashcards: Use the navigation buttons to move between cards and flip them

## Implementation Notes

- The current implementation uses mock data for demonstration purposes
- To fully implement the AI functionality, you need to:
  - Add your OpenAI API key
  - Uncomment and use the `callOpenAI` function in `script.js`
  - Implement a server-side proxy to fetch URL content (to avoid CORS issues)

## Future Enhancements

- Save generated content for later review
- Export quizzes and flashcards to PDF
- Customize quiz difficulty levels
- Add more learning tools like mind maps and concept diagrams
- Implement user accounts to track learning progress

## License

MIT License