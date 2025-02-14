```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to home page with query parameter
    router.push({ pathname: '/', query: { name: 'John Doe' } }); // Removed shallow: true
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```