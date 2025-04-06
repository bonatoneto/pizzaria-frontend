import Image from 'next/image';

import Container from './Container';
import Order from './Order';

export default function Orders() {
  return (
    <section className="w-screen h-screen bg-deep-brown">
      <Container>
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl pt-24">
            <div className="flex items-center gap-4">
              <h1 className="text-soft-gray text-4xl font-semibold">Pedidos</h1>
              <Image
                className="cursor-pointer"
                src="/assets/refresh.svg"
                alt="Ícone para atualizar lista de pedidos"
                width={24}
                height={24}
              />
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <Order table="Mesa 8" />
              </li>
              <li>
                <Order table="Mesa 10" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
