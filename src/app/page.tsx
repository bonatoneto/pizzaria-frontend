'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';

import { api } from '@/services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().min(1, 'Digite seu E-mail').email('E-mail inválido'),
    password: z
      .string()
      .min(1, 'Digite sua senha')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmitLogin = async (data: FormData) => {
    try {
      const response = await api.post('/session', {
        email: data.email,
        password: data.password,
      });

      if (!response.data.token) {
        reset();
        toast.error('E-mail ou senha inválidos', {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#333333',
            color: '#FFFFFF',
          },
        });
        return;
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      reset();
      toast.error('E-mail ou senha inválidos', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#333333',
          color: '#FFFFFF',
        },
      });
    }

    router.push('/pedidos');
  };

  return (
    <main className="w-full h-screen bg-deep-brown">
      <Container>
        <Link className="text-soft-gray font-semibold" href="/cadastro-empresa">
          Cadastrar sua empresa
        </Link>
        <div className="flex justify-center w-full h-full pt-20">
          <div className="flex flex-col items-center gap-8 w-md">
            <Image
              src="/images/logo.png"
              alt="Logo da pizzaria"
              width={240}
              height={240}
            />
            <form
              className="flex flex-col w-full gap-4"
              onSubmit={handleSubmit(onSubmitLogin)}
            >
              <div>
                <Input
                  label="E-mail"
                  placeholder="Digite seu E-mail"
                  type="e-mail"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <Input
                  label="Senha"
                  placeholder="Digite seu senha"
                  type="password"
                  id="password"
                  {...register('password')}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button color="primary">Acessar</Button>
              <div className="flex w-full justify-end">
                <Link className="text-soft-gray" href="/cadastro-empresa">
                  Esqueceu sua senha?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
