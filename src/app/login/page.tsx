import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';

export default function Login() {
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
            <div className="flex flex-col w-full gap-2">
              <Input
                name="email"
                placeholder="Digite seu E-mail"
                type="e-mail"
                id="email"
              />
              <Input
                name="password"
                placeholder="Digite seu senha"
                type="password"
                id="password"
              />
              <Button color="primary">Acessar</Button>
              <div className="flex w-full justify-end">
                <Link className="text-soft-gray" href="/cadastro-empresa">
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
