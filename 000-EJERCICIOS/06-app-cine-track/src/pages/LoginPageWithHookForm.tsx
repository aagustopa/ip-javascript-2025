import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';

interface FormValues {
    username: string;
    password: string;
}


export default function LoginPageWithHookForm() {

    const { register, handleSubmit, formState } = useForm<FormValues>();

    const { errors } = formState;

    function onSubmit(data: FormValues) {
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center">
            <Logo className="text-6xl" />

            <form className="flex flex-col gap-4 mt-8 mb-2 w-sm" onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Username" {...register('username', {
                    required: 'username es obligatorio',
                    minLength: { value: 3, message: 'username es muy corto' },
                    maxLength: { value: 20, message: 'username es muy largo' },
                })} />
                {
                    errors.username && (<span className='text-red-600'>{errors.username.message}</span>)
                }
                <Input placeholder="Password" type="password" {...register('password', {
                    required: 'password es obligatoria',
                    minLength: { value: 3, message: 'la password es muy corta' },
                    maxLength: { value: 20, message: 'la password es muy larga' }
                })} />
                {
                    errors.password && (<span className='text-red-600'>{errors.password.message}</span>)
                }
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
