'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { destroyCookie } from 'nookies';

export default function LogoutButton() {
  const router = useRouter();

  return (
    <Image
      className="cursor-pointer hover:scale-110 transition-transform duration-200"
      src="/assets/log-out.svg"
      alt="Ícone para sair da aplicação"
      width={38}
      height={38}
      onClick={() => {
        destroyCookie(null, 'session', { path: '/' });
        router.push('/');
      }}
    />
  );
}
