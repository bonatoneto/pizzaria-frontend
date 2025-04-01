import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';

export default function NewCategory() {
  return (
    <main className="w-screen h-screen bg-deep-brown p-6">
      <Container>
        <div className="flex justify-center w-full h-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl pt-24">
            <h1 className="text-soft-gray text-5xl">Cadastrar Categoria</h1>
            <Input
              id="new-category"
              name="new-category"
              placeholder="Digite o nome da categoria"
              type="text"
            />
            <Button color="secondary">Cadastrar</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
