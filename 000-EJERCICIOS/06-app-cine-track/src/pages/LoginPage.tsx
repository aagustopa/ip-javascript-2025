import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { Link } from 'react-router';
import { useRef, useState } from 'react';


export default function LoginPage() {

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameValue = inputNameRef.current?.value;
    const passwordValue = inputPasswordRef.current?.value;

    console.log(`username ${nameValue}`);
    console.log(`password ${passwordValue}`);
  }

  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue(event.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form className="flex flex-col gap-4 mt-8 mb-2 w-sm" onSubmit={handleSubmit}>
        <Input placeholder="Username" ref={inputNameRef} value={nameValue} onChange={handleNameChange} />
        <Input placeholder="Password" type="password" ref={inputPasswordRef} value={passwordValue} onChange={handlePasswordChange}/>
        <Button type="submit">Login</Button>
      </form>
      <p className="text-center text-sm">
        You don't have an account? ,{' '}
        <Link className="font-bold" to="/register">
          SignUp
        </Link>
      </p>
    </div>
  );
}
