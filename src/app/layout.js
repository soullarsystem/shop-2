// layout.js
import './globals.css';

function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;

