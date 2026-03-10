// DOM Elements
const urlInput = document.getElementById('url-input');
const generateBtn = document.getElementById('generate-btn');
const loader = document.getElementById('loader');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const summaryContent = document.getElementById('summary-content');
const quizContent = document.getElementById('quiz-content');
const flashcardsContent = document.getElementById('flashcards-content');
const checkAnswersBtn = document.getElementById('check-answers-btn');
const resetQuizBtn = document.getElementById('reset-quiz-btn');
const prevCardBtn = document.getElementById('prev-card-btn');
const nextCardBtn = document.getElementById('next-card-btn');
const flipCardBtn = document.getElementById('flip-card-btn');
const cardCounter = document.getElementById('card-counter');

// Global variables
let currentUrl = '';
let currentQuizData = [];
let currentFlashcards = [];
let currentCardIndex = 0;



// Event Listeners
generateBtn.addEventListener('click', handleGenerate);

// Tab switching functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Quiz control buttons
checkAnswersBtn.addEventListener('click', checkQuizAnswers);
resetQuizBtn.addEventListener('click', resetQuiz);

// Flashcard control buttons
prevCardBtn.addEventListener('click', showPreviousCard);
nextCardBtn.addEventListener('click', showNextCard);
flipCardBtn.addEventListener('click', flipCard);

// Main function to handle URL generation
async function handleGenerate() {
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a valid URL');
        return;
    }

    if (!isValidUrl(url)) {
        alert('Please enter a valid URL format');
        return;
    }

    // Show loader and disable button
    loader.style.display = 'block';
    generateBtn.disabled = true;
    currentUrl = url;

    try {
        // Reset previous content
        resetContent();

        // Fetch and process the URL content
        const content = await fetchUrlContent(url);

        if (!content) {
            throw new Error('Failed to fetch content from URL');
        }

        // Generate all content in parallel
        const [summary, quizData, flashcardsData] = await Promise.all([
            generateSummary(content),
            generateQuiz(content),
            generateFlashcards(content)
        ]);

        // Display the generated content
        displaySummary(summary);
        displayQuiz(quizData);
        displayFlashcards(flashcardsData);

        // Enable control buttons
        enableControls();
    } catch (error) {
        console.error('Error:', error);
        alert(`An error occurred: ${error.message}`);
        resetContent();
    } finally {
        // Hide loader and enable button
        loader.style.display = 'none';
        generateBtn.disabled = false;
    }
}

// Validate URL format
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Fetch content from URL
async function fetchUrlContent(url) {
    try {
        // In a real implementation, you would use a server-side proxy to fetch the URL content
        // For demo purposes, we'll simulate this with a mock response

        // Simulated delay to mimic network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For demonstration, return a mock content based on the URL
        // In a real implementation, you would fetch the actual content from the URL
        return `This is simulated content for the URL: ${url}. In a real implementation, 
                this would be the actual content fetched from the provided URL. The content 
                would then be processed by AI to generate summaries, quizzes, and flashcards.`;
    } catch (error) {
        console.error('Error fetching URL content:', error);
        throw new Error('Failed to fetch content from the URL');
    }
}

// Generate summary using AI
async function generateSummary(content) {
    try {
        // In a real implementation, you would call an AI API like OpenAI
        // For demo purposes, we'll simulate this with a mock response

        // Simulated delay to mimic API request
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock summary response
        return {
            summary: `This is a simplified summary of the content. The original URL contains information about various topics that have been condensed into this easy-to-understand format. Key points include:

1. Main topic overview and context
2. Important details and facts
3. Relevant conclusions and insights

This summary helps you quickly understand the main points without having to read the entire content.`
        };
    } catch (error) {
        console.error('Error generating summary:', error);
        throw new Error('Failed to generate summary');
    }
}

// Generate quiz using AI
async function generateQuiz(content) {
    try {
        // In a real implementation, you would call an AI API like OpenAI
        // For demo purposes, we'll simulate this with a mock response

        // Simulated delay to mimic API request
        await new Promise(resolve => setTimeout(resolve, 1200));

        // Mock quiz response
        return [
            {
                question: 'What is the main topic of the content?',
                options: [
                    'Technology and innovation',
                    'History and culture',
                    'Science and research',
                    'Business and economics'
                ],
                correctAnswer: 0
            },
            {
                question: 'Which of the following is mentioned as a key point in the content?',
                options: [
                    'Political implications',
                    'Environmental concerns',
                    'Main topic overview and context',
                    'International relations'
                ],
                correctAnswer: 2
            },
            {
                question: 'What is the purpose of the summary provided?',
                options: [
                    'To contradict the original content',
                    'To expand on the original content',
                    'To quickly understand the main points',
                    'To provide additional research'
                ],
                correctAnswer: 2
            }
        ];
    } catch (error) {
        console.error('Error generating quiz:', error);
        throw new Error('Failed to generate quiz');
    }
}

// Generate flashcards using AI
async function generateFlashcards(content) {
    try {
        // In a real implementation, you would call an AI API like OpenAI
        // For demo purposes, we'll simulate this with a mock response

        // Simulated delay to mimic API request
        await new Promise(resolve => setTimeout(resolve, 1100));

        // Mock flashcards response
        return [
            {
                front: 'Main Topic',
                back: 'The content primarily discusses technology and innovation, focusing on recent developments and future trends.'
            },
            {
                front: 'Key Point #1',
                back: 'Overview and context of the main topic, providing background information necessary for understanding the subject matter.'
            },
            {
                front: 'Key Point #2',
                back: 'Important details and facts that support the main arguments presented in the content.'
            },
            {
                front: 'Key Point #3',
                back: 'Relevant conclusions and insights drawn from the information presented in the content.'
            },
            {
                front: 'Purpose of Summary',
                back: 'To help readers quickly understand the main points without having to read the entire content.'
            }
        ];
    } catch (error) {
        console.error('Error generating flashcards:', error);
        throw new Error('Failed to generate flashcards');
    }
}

// Display summary
function displaySummary(summaryData) {
    summaryContent.innerHTML = `<p>${summaryData.summary}</p>`;
}

// Display quiz
function displayQuiz(quizData) {
    currentQuizData = quizData;

    let quizHtml = '';

    quizData.forEach((question, questionIndex) => {
        quizHtml += `
            <div class="quiz-question" data-question="${questionIndex}">
                <p class="question-text">${questionIndex + 1}. ${question.question}</p>
                <ul class="quiz-options">
        `;

        question.options.forEach((option, optionIndex) => {
            quizHtml += `
                <li class="quiz-option" data-option="${optionIndex}">${option}</li>
            `;
        });

        quizHtml += `
                </ul>
            </div>
        `;
    });

    quizContent.innerHTML = quizHtml;

    // Add click event to options
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Get all options in this question
            const questionElement = this.closest('.quiz-question');
            const options = questionElement.querySelectorAll('.quiz-option');

            // Remove selected class from all options
            options.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });
}

// Display flashcards
function displayFlashcards(flashcardsData) {
    currentFlashcards = flashcardsData;
    currentCardIndex = 0;

    if (flashcardsData.length > 0) {
        updateFlashcardDisplay();
    } else {
        flashcardsContent.innerHTML = '<p class="placeholder-text">No flashcards generated.</p>';
    }
}

// Update flashcard display
function updateFlashcardDisplay() {
    const card = currentFlashcards[currentCardIndex];

    const flashcardHtml = `
        <div class="flashcard">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${card.front}</p>
                </div>
                <div class="flashcard-back">
                    <p>${card.back}</p>
                </div>
            </div>
        </div>
    `;

    flashcardsContent.innerHTML = flashcardHtml;
    cardCounter.textContent = `${currentCardIndex + 1}/${currentFlashcards.length}`;
}

// Show previous flashcard
function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcardDisplay();
    }
}

// Show next flashcard
function showNextCard() {
    if (currentCardIndex < currentFlashcards.length - 1) {
        currentCardIndex++;
        updateFlashcardDisplay();
    }
}

// Flip flashcard
function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');
}

// Check quiz answers
function checkQuizAnswers() {
    const quizQuestions = document.querySelectorAll('.quiz-question');

    quizQuestions.forEach((questionElement, questionIndex) => {
        const selectedOption = questionElement.querySelector('.quiz-option.selected');
        const correctAnswerIndex = currentQuizData[questionIndex].correctAnswer;
        const options = questionElement.querySelectorAll('.quiz-option');

        // Mark correct and incorrect answers
        options.forEach((option, optionIndex) => {
            if (optionIndex === correctAnswerIndex) {
                option.classList.add('correct');
            } else if (option === selectedOption) {
                option.classList.add('incorrect');
            }
        });
    });

    // Disable options after checking
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Disable check answers button
    checkAnswersBtn.disabled = true;
}

// Reset quiz
function resetQuiz() {
    displayQuiz(currentQuizData);
    checkAnswersBtn.disabled = false;
}

// Reset all content
function resetContent() {
    summaryContent.innerHTML = '<p class="placeholder-text">Your simplified summary will appear here after URL processing.</p>';
    quizContent.innerHTML = '<p class="placeholder-text">Your customized quiz will appear here after URL processing.</p>';
    flashcardsContent.innerHTML = '<p class="placeholder-text">Your flashcards will appear here after URL processing.</p>';

    // Disable control buttons
    disableControls();

    // Reset global variables
    currentQuizData = [];
    currentFlashcards = [];
    currentCardIndex = 0;
    cardCounter.textContent = '0/0';
}

// Enable control buttons
function enableControls() {
    checkAnswersBtn.disabled = false;
    resetQuizBtn.disabled = false;
    prevCardBtn.disabled = currentFlashcards.length <= 1;
    nextCardBtn.disabled = currentFlashcards.length <= 1;
    flipCardBtn.disabled = currentFlashcards.length === 0;
}

// Disable control buttons
function disableControls() {
    checkAnswersBtn.disabled = true;
    resetQuizBtn.disabled = true;
    prevCardBtn.disabled = true;
    nextCardBtn.disabled = true;
    flipCardBtn.disabled = true;
}

// Secure call to your local Node.js backend
async function callSecureBackend(prompt) {
    try {
        const response = await fetch('http://localhost:3000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        return data.result;
    } catch (error) {
        console.error('Error calling backend API:', error);
        throw new Error('Failed to connect to secure server');
    }
}