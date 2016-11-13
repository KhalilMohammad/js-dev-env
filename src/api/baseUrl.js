export default function getBaseUrl() {
    const isDevelopment = window.location.host === 'localhost';
    return isDevelopment ? 'http://localhost:3001/' : '/';
}
