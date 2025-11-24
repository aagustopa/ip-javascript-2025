import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">404 - Not Found</h1>
      <p>The page you are looking for does not exist duuuude.</p>
      <Link className="mt-8 text-blue-500" to="/">
        Go home
      </Link>
    </>
  );
}
