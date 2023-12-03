# AttendX - Automated Attendance System

## Overview

AttendX is a web application designed for schools and universities to streamline the attendance process. The application utilizes machine learning to automate attendance marking through facial recognition. Teachers can use a tablet with a camera to capture students' faces, and the application compares them to stored images in the database. If a match is found, the student is marked as present, and the attendance record is updated.

## Features

1. Facial Recognition: The application uses facial recognition technology to accurately identify and mark the attendance of students.
2. Web-Based: Built on Vue.js, AttendX is a web application that provides easy access and flexibility for teachers to use on tablets.
3. Machine Learning Integration: Leveraging machine learning algorithms, AttendX continuously improves its facial recognition capabilities over time.

# Getting Started

# Prerequisites
1. Node.js
2. Vue.js
3. Database (for storing student images)

# Installation
1. Install dependencies:
   ```
   npm install
   npm run serve
   npm run build
   npm run test
   npm run lint
   ```
2. See [Configuration Reference](https://cli.vuejs.org/config/).
3. Start the application: npm run serve

# Usage

Open the AttendX web app on a tablet with a camera.
Pass the tablet to students, allowing the application to capture their faces.
The app compares captured faces to stored images and marks students as present.

# Development

AttendX is currently in the development phase, with ongoing improvements and enhancements. Contributions are welcome, and developers can follow the contribution guidelines for more details.

# Acknowledgments

The AttendX project acknowledges the contributions of the open-source community and libraries used in the development process.
For detailed information and documentation, refer to the complete project documentation in the repository.
