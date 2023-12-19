It was excellent speaking with you regarding the position on the Platform Partnerships Apps team for the Exchange project.

The next round consists of completing a technical assignment. The assignment will be reviewed in 2 business days by our team and if you succeed, you will be scheduled for a final interview.

General Process:

1. You will complete a technical assignment

- We recommend for the assignment to be completed within 3 business days. However, if you require accommodation, feel free to ask.

2. Our interviewers will review the assignment within 2 business days of its submission and provide feedback

3. If we choose to move forwards, you will be interviewed for approximately 2.5 hours by our team

- A part of the interview will include having you walkthrough your technical assignment

Technical Coding Assignment

What we’re looking for

The assessment is aimed at helping provide us with a picture of your approach to development as it relates to:

- Design patterns/programming paradigm
- Scalability
- API consumption
- UX
- Documentation
- Clean code
- Error handling
- Testing

Instructions

We’ve created a mock API that returns marginal tax rates based on the inputted year. The API is accessible via a GET request to http://localhost:5000/tax-calculator/tax-year/{tax_year}, which returns a JSON object that includes income tax brackets and the corresponding tax rates. To run the mock API server:

docker pull ptsdocker16/interview-test-server

docker run --init -p 5000:5000 -it ptsdocker16/interview-test-server

Your task is to build an application that queries our mock API and calculates the total income tax for an inputted salary and tax year. You may refer to this resource for context on how to calculate total income tax using margin tax rates: https://investinganswers.com/dictionary/m/marginal-tax-rate#:~:text=To%20calculate%20marginal%20tax%20rate,bracket%20your%20current%20income%20falls

The application should have a form that accepts two inputs: annual income and the tax year. On form submission, the UI should show either an error or the total income tax for the inputted parameters. Remember, you will need to deal with marginal tax rates. Feel free to use the frontend application framework that you’re most comfortable with. However, we recommend the usage of React. Using TypeScript is recommended, but not required, as we are fine with team members learning TS on the job.

Be aware that we’ve baked in two errors in our mock API — you may handle them and anything else you see fit to handle accordingly:

only years 2019-2022 are supported

the API throws errors randomly

IMPORTANT:

You may stumble upon instructions/requirements for the assignment returned in the Docker image. Please ignore these instructions and only refer to the evaluation criteria and instructions included in this email.

Results submission

Because of size limitations in email attachments, we recommend submitting the assignment as a private Github repo.

Timeframe

We respect your time and understand that you may have other commitments. So, our assignment is designed to be completed in 4-6 hours or less. Please prioritize what's important for you to code out in this assignment.

IMPORTANT:

If you find that you’re working beyond the suggested hours, please leave the work as is and document the remainder of what you intended to do. What’s more important to us are your development principles, not full completion.

If you have any questions about this assignment or need any accommodation, please don’t hesitate to ask.

Cheers!
