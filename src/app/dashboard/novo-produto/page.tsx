import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import FormNewProduct from '@/components/FormNewProduct';

export default function NewProduct() {
  return (
    <main className="w-full px-6 pt-10">
      <Container>
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <Link href="/dashboard" className="cursor-pointer">
              <Image
                src="/assets/arrow-left.svg"
                alt="Ícone para voltar"
                width={40}
                height={40}
              />
            </Link>
            <h1 className="text-soft-gray text-4xl font-semibold">
              Novo Produto
            </h1>
            <FormNewProduct />
          </div>
        </div>
      </Container>
    </main>
  );
}
