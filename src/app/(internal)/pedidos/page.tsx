import Container from '@/components/Container';

export default function NewProduct() {
  return (
    <main className="w-screen h-screen bg-deep-brown px-6">
      <Container>
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl pt-24">
            <h1 className="text-soft-gray text-4xl font-semibold">Pedidos</h1>
          </div>
        </div>
      </Container>
    </main>
  );
}
