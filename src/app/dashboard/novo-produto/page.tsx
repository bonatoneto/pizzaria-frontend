import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';

export default function NewProduct() {
  return (
    <main className="w-full px-6 py-10">
      <Container>
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-4 w-full max-w-2xl pt-12">
            <h1 className="text-soft-gray text-4xl font-semibold">
              Novo Produto
            </h1>
            <input
              className="border border-soft-gray h-60 rounded-sm text-soft-gray"
              type="file"
            />
            <Input
              label="Categoria"
              id="select-category"
              name="select-category"
              placeholder="Selecione a categoria"
              type="select"
            />
            <Input
              label="Nome do Produto"
              id="product-image"
              name="product-image"
              placeholder="Nome do item"
              type="text"
            />
            <Input
              label="Preço"
              id="price"
              name="price"
              placeholder="Valor do item"
              type="text"
            />
            <Input
              label="Descrição"
              id="product-description"
              name="product-description"
              placeholder="Descrição do item"
              type="text"
            />
            <Button color="secondary">Cadastrar</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
