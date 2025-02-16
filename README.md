![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)  
![Maintained YES](https://img.shields.io/badge/Maintained%3F-yes-green.svg)  
![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)  

# 🚀 **CORS Proxy Server**

A simple **Node.js-based proxy server** that allows you to bypass CORS restrictions and fetch data from external URLs.

---

## 📌 **Features**
- ✅ Handles **CORS (Cross-Origin Resource Sharing)** requests
- ✅ Fetches both **headers and HTML content** from the target URL
- ✅ Supports **custom domains**
- ✅ **Deployable on Render, GitHub, and other platforms**
- ✅ Improved **error handling** and **redirection support**

---

## 🛠 **Installation**

### 🔹 **Prerequisites**
- **Node.js** (v16 or higher)
- **Yarn or NPM**

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

---

## 🌐 **Usage**
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

---

## 🚀 **Deployment**

### 🔹 **Deploy on Render**
1. **Push your code to GitHub**
2. **Create a new Web Service on Render**
3. **Connect your GitHub repository**
4. Set the **build command**:
   ```sh
   yarn install
   ```
5. Set the **start command**:
   ```sh
   yarn start
   ```
6. **Deploy and get your Render URL!**

---

## 🔧 **Environment Variables (Optional)**
You can configure the following environment variables:

- `PORT` (default: `3000`)

---

## ❌ **Error Handling**
If you get the error:
```json
{
  "status": "Failed to fetch URL",
  "error": "Ensure the URL is public or correct."
}
```
### ✅ **Possible Fixes:**
- Make sure the **target URL is publicly accessible**.
- If the request is blocked due to **CORS**, try using different headers.
- Some sites have **anti-bot protections**, which may cause failures.

---

## 📜 **License**
This project is licensed under the **MIT License**.

---

## 👥 **Contributors**
- **Asif Kamboh**  
  For contributions, feel free to submit a **pull request**! 🎉
