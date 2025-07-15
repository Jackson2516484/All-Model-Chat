// --- 网络请求拦截代码开始 ---
const GOOGLE_API_HOSTNAME = 'generativelanguage.googleapis.com';
const PROXY_PATH = '/api';

const originalFetch = window.fetch;
window.fetch = (input, init) => {
  let urlString = '';
  if (typeof input === 'string') {
    urlString = input;
  } else if (input instanceof URL) {
    urlString = input.href;
  } else {
    urlString = input.url;
  }

  if (urlString.includes(GOOGLE_API_HOSTNAME)) {
    const originalUrl = new URL(urlString);
    // 将请求重定向到我们自己的代理路径
    const newUrl = `${PROXY_PATH}${originalUrl.pathname}${originalUrl.search}`;
    console.log(`Intercepting and redirecting request to: ${newUrl}`);
    return originalFetch(newUrl, init);
  }
  
  return originalFetch(input, init);
};
// --- 网络请求拦截代码结束 ---

// --- 您原来的代码开始 ---
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// --- 您原来的代码结束 ---