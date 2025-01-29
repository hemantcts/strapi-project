import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










// server {
//   listen 80;
//   listen [::]:80;
//   listen 443 quic;
//   listen 443 ssl;
//   listen [::]:443 quic;
//   listen [::]:443 ssl;
//   http2 on;
//   http3 off;
//   {{ssl_certificate_key}}
//   {{ssl_certificate}}
//   server_name medzentrum.entwicklung-loewenmut.ch;
//   {{root}}

//   {{nginx_access_log}}
//   {{nginx_error_log}}

//   if ($scheme != "https") {
//     rewrite ^ https://$host$request_uri permanent;
//   }

//   location ~ /.well-known {
//     auth_basic off;
//     allow all;
//   }

//   {{settings}}

//   include /etc/nginx/global_settings;

//   index index.html;

//   location /admin {
//     proxy_pass http://127.0.0.1:{{app_port}};
//     proxy_http_version 1.1;
//     proxy_set_header X-Forwarded-Host $host;
//     proxy_set_header X-Forwarded-Server $host;
//     proxy_set_header X-Real-IP $remote_addr;
//     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//     proxy_set_header X-Forwarded-Proto $scheme;
//     proxy_set_header Host $host;
//     proxy_set_header Upgrade $http_upgrade;
//     proxy_set_header Connection "Upgrade";
//     proxy_pass_request_headers on;
//     proxy_max_temp_file_size 0;
//     proxy_connect_timeout 900;
//     proxy_send_timeout 900; 
//     proxy_read_timeout 900;
//     proxy_buffer_size 128k;
//     proxy_buffers 4 256k;
//     proxy_busy_buffers_size 256k;
//     proxy_temp_file_write_size 256k;
//   }
// }



















// server {
//   listen 80;
//   listen [::]:80;
//   listen 443 quic;
//   listen 443 ssl;
//   listen [::]:443 quic;
//   listen [::]:443 ssl;
//   http2 on;
//   http3 off;
//   {{ssl_certificate_key}}
//   {{ssl_certificate}}
//   server_name medzentrum.entwicklung-loewenmut.ch;
//   {{root}}

//   {{nginx_access_log}}
//   {{nginx_error_log}}

//   if ($scheme != "https") {
//     rewrite ^ https://$host$request_uri permanent;
//   }

//   location ~ /.well-known {
//     auth_basic off;
//     allow all;
//   }

//   {{settings}}

//   include /etc/nginx/global_settings;

//   index index.html;
  
//   location / {
//         try_files $uri /build/index.html;
//     }

//   location /admin {
//         proxy_pass http://127.0.0.1:{{app_port}};
//         proxy_set_header Host $host;
//         proxy_set_header X-Real-IP $remote_addr;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header X-Forwarded-Proto $scheme;
//     }
// }