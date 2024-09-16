# Metaversal

This project is built for Metaversal using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com). It implements a user posts feed and user profiles, fetching data from an API and managing various states such as loading and errors. Data is cached both in HTTPS requests and local storage for efficiency.

## Features

- **User Posts Feed**: A feed of user posts fetched from an external API.
- **User Profiles**: Displays user profile information, including posts associated with each user.
- **Responsive UI**: Built using Tailwind CSS to ensure the design adapts across all screen sizes.
- **Loading States**: Gracefully handled loading states to ensure a smooth user experience.
- **Error States**: Informative error handling to display issues when data fetching fails.
- **HTTPS Request Caching**: Utilizes caching strategies to minimize unnecessary requests.
- **Local Storage Caching**: Caches data in local storage to improve performance and user experience.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yaroslavnosenko/metaversal.git
   cd metaversal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To run the project locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Caching

- **HTTPS Request Caching**: Data from the API is cached using built-in request caching to avoid repeated fetches.
- **Local Storage**: User data is cached in the browser’s local storage for offline access and performance optimization.

## Error Handling

The application provides meaningful error messages if the data fetching fails or if there are issues with connectivity.

## Optional Nice-to-Haves

- **Server-Side Rendering (SSR)**: Server-side rendering is implemented for the profile page to improve performance and SEO. This ensures that user profile data is pre-rendered on the server before being sent to the client.
- **App Deployment**: The application has been deployed on Vercel and is live at [https://metaversal-three.vercel.app/](https://metaversal-three.vercel.app/). Vercel’s platform offers seamless integration with Next.js.
