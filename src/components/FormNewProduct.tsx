'use client';

import Button from './Button';
import Input from './Input';

export default function FormNewProduct() {
  function handleUploadImage(image: File) {
    console.log('imagem', image);
    if (!image) return;
  }

  return (
    <form className="flex flex-col gap-4 w-full">
      <Input
        className="border border-soft-gray h-60 rounded-sm text-soft-gray"
        type="file"
        accept=".png .jpeg"
        onChange={() => handleUploadImage}
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
    </form>
  );
}
