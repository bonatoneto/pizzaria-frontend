'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/Button';
import Input from '@/components/Input';

import { api } from '@/services/api';
import { parseCookies } from 'nookies';

export default function FormNewCategory() {
  const [newCategory, setNewCategory] = useState('');
  const errorMessage = 'Erro ao cadastrar categoria';
  const successMessage = 'Categoria cadastrada com sucesso';
  const emptyFieldMessage = 'Nome da categoria é obrigatório';

  async function handleRegisterCategory(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!newCategory.trim()) {
      return toast.error(emptyFieldMessage, {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#333333',
          color: '#FFFFFF',
        },
      });
    }

    const data = {
      name: newCategory,
    };
    const token = parseCookies().session;

    await api
      .post('/category', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success(successMessage, {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#333333',
            color: '#FFFFFF',
          },
        });
        setNewCategory('');
      })
      .catch(() => {
        return toast.error(errorMessage, {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#333333',
            color: '#FFFFFF',
          },
        });
      });
  }

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleRegisterCategory}
    >
      <Input
        label="Nome da Categoria"
        id="new-category"
        name="new-category"
        placeholder="Digite o nome da categoria"
        type="text"
        onChange={(event) => setNewCategory(event.target.value)}
        value={newCategory}
      />
      <Button color="secondary">Cadastrar</Button>
    </form>
  );
}
