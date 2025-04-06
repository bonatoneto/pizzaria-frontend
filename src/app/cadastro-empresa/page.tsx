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
  companyName: string;
  email: string;
  password: string;
};

export default function RegisterCompany() {
  const router = useRouter();
  const formSchema = z.object({
    companyName: z.string().min(1, 'Digite o nome da empresa'),
    email: z.string().min(1, 'Digite seu E-mail').email('E-mail inválido'),
    password: z
      .string()
      .min(1, 'Digite sua senha')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmitCompany(data: FormData) {
    try {
      const response = await api.post('/users', {
        name: data.companyName,
        email: data.email,
        password: data.password,
      });

      if (response.statusText === 'OK' || response.status === 200) {
        return router.push('/');
      }
    } catch (error) {
      toast.error('Erro ao cadastrar empresa', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#333333',
          color: '#fff',
        },
      });
      console.error('Erro ao cadastrar empresa:', error);
    }
  }

  return (
    <main className="w-full h-screen">
      <Container>
        <div className="w-full flex justify-end">
          <Link className="text-soft-gray font-semibold" href="/">
            Login
          </Link>
        </div>
        <div className="flex justify-center items-center w-full h-full pt-20">
          <div className="flex flex-col items-center gap-8 w-md">
            <Image
              src="/images/logo.png"
              alt="Logo da pizzaria"
              width={240}
              height={240}
            />
            <form
              className="flex flex-col w-full gap-2"
              onSubmit={handleSubmit(onSubmitCompany)}
            >
              <div>
                <Input
                  label="Nome da Empresa"
                  placeholder="Digite o nome da sua empresa"
                  type="text"
                  id="company-name"
                  {...register('companyName')}
                />
                {errors.companyName && (
                  <span className="text-sm text-red-500">
                    {errors.companyName.message}
                  </span>
                )}
              </div>
              <div>
                <Input
                  label="E-mail"
                  placeholder="Digite seu E-mail"
                  type="e-mail"
                  id="email"
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
              <Button color="primary">Cadastrar</Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
