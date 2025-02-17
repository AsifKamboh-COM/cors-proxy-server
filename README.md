![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)  
![Maintained YES](https://img.shields.io/badge/Maintained%3F-yes-green.svg)  
![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)  

# 📌 **CORS Proxy Server**

![CORS Proxy Server](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZGtfulXDMwBL20k10oN28JMSjXJeIFsT6D08t4oeMIeNxhBldH8B2kgudEK7GjoJFvj811gGfy4MiObMejJDSAXMMKh3XmuSj57iXSBtKwXnzsEzS_Rvn9F0kgnx8Lsd0S6-bblHiiHKCbSmNRH4xJ3VQ6lzQEqKJdnNpv09IwyZTTf6MaCqBTjVvrJUZ/s1600/cors_proxy_server.png)

**CORS Proxy Server** is a simple and efficient proxy server built with **Node.js** and **Express.js** to fetch headers and HTML content from any URL, bypassing CORS restrictions. It comes with a user-friendly front-end interface. **[Live Demo](https://cors.asifkamboh.com/)**

## ✨ **Features**
-  Handles **CORS** (Cross-Origin Resource Sharing) requests
-  Fetch **headers** and **HTML** content from any URL
-  Simple UI built with **Tailwind CSS**
-  Deployable on **Vercel**, **Render**, and other platforms
-  Improved **error handling** and **redirection support**

## 📂 **Repository Structure**
```
/cors-proxy-server
│-- public/
│   └── index.html  # Frontend UI
│-- server.js       # Node.js backend server
│-- package.json    # Dependencies and scripts
│-- vercel.json     # Vercel deployment configuration
│-- README.md       # Documentation
```

## ![Install](https://img.shields.io/badge/Install-Now-brightgreen.svg) **Installation**

### 🔹 **Prerequisites**
- Node.js (v16 or higher)
- Yarn or NPM

### 🔹 **Clone the Repository**
```sh
git clone https://github.com/AsifKamboh-COM/cors-proxy-server.git
cd cors-proxy-server
```

### 🔹 **Install Dependencies**
Using **Yarn**:
```sh
yarn install
```
Using **NPM**:
```sh
npm install
```

### 🔹 **Start the Server**
```sh
yarn start
```
or
```sh
npm start
```

## ![Easy to Use](https://img.shields.io/badge/Easy%20to%20Use-Yes-brightgreen.svg) **Usage**
Once the server is running, you can use the proxy by making a request to:

```sh
http://localhost:3000/proxy?url=<TARGET_URL>
```

Example:
```sh
http://localhost:3000/proxy?url=https://example.com
```

This will return:
- **Response status** (e.g., HTTP/2 200 OK)
- **Response headers** (all headers from the target URL)
- **Full HTML content** of the requested page

## ![Deployed](https://img.shields.io/badge/Deployed-Yes-brightgreen.svg) **Deployment**

### 🔹 **Deploy on Vercel**
To deploy this CORS Proxy Server on Vercel, follow these steps:

1. Fork or clone the repository.
2. Install Vercel CLI if not already installed:

   ```bash
   npm install -g vercel
   ```

3. Login to Vercel:

   ```bash
   vercel login
   ```

4. Navigate to the project directory and deploy:

   ```bash
   vercel
   ```

   Follow the instructions to complete the deployment.

### 🔹 **Deploy on Render**
1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set the **build command**:
   ```sh
   yarn install
   ```
5. Set the **start command**:
   ```sh
   yarn start
   ```
6. **Deploy and get your Render URL!**

## ![ENV Required](https://img.shields.io/badge/Environment%20Variables-Required-red.svg) **Environment Variables** (Optional)
You can configure the following environment variables:

- `PORT` (default: `3000`)

## ![Error Handling](https://img.shields.io/badge/Error%20Handling-Enabled-brightgreen.svg) **Error Handling**
If you get the error:
```json
{
  "status": "Failed to fetch URL",
  "error": "Invalid URL"
}
```
## ![Fixed](https://img.shields.io/badge/Fixed-Yes-brightgreen.svg) **Possible Fixes:**
- Make sure the **target URL is publicly accessible**.
- If the request is blocked due to **CORS**, try using different headers.
- Some sites have **anti-bot protections**, which may cause failures.

## ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) **License**
This project is licensed under the **MIT License**.

## ![Author](https://img.shields.io/badge/Author-Asif%20Kamboh-blue.svg) **Built & Maintained By**
**[Asif Kamboh](https://www.asifkamboh.com/)** – *Software Developer & Open-Source Contributor*
