import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { Link } from 'react-router';
// import { useRef, useState } from 'react';
// import { zodResolver } from '@hookform/resolvers'
// import { registerSchema } from '../schemas/userSchemas';

export default function RegisterPage() {


  // function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    // const { name, value } = event.target;
    // const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
      // mode: 'onChange',
      // resolver:   
    // })
  }

  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form className="flex flex-col gap-4 mt-8 mb-2 w-sm" onSubmit={handleSubmit}>
        <Input placeholder="Username" ref={inputNameRef} name='username' onChange={handleFormChange} />
        {/* <Input placeholder="Username" ref={inputNameRef} value={formValues.username} onChange={handleFormChange} /> */}
        <Input placeholder="Email" type="email" ref={inputEmailRef} name='email' onChange={handleFormChange} />
        <Input placeholder="Password" type="password" ref={inputPasswordRef} name='password' onChange={handleFormChange} />
        <Input placeholder="Confirm password" type="password" ref={inputConfirmPasswordRef} name='confirmPassword' onChange={handleFormChange} />
        <Button type="submit">Register</Button>
      </form>
      <p className="text-center text-sm">
        Already have an account? ,{' '}
        <Link className="font-bold" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
