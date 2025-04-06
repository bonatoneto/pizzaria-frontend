import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import FormNewCategory from '@/components/FormNewCategory';

export default function NewCategory() {
  return (
    <main className="w-screen h-screen bg-deep-brown p-6">
      <Container>
        <div className="flex justify-center w-full h-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl pt-24">
            <Link href="/dashboard" className="cursor-pointer">
              <Image
                src="/assets/arrow-left.svg"
                alt="Ícone para voltar"
                width={40}
                height={40}
              />
            </Link>
            <h1 className="text-soft-gray text-5xl">Cadastrar Categoria</h1>
            <FormNewCategory />
          </div>
        </div>
      </Container>
    </main>
  );
}
