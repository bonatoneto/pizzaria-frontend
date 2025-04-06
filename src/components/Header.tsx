import Image from 'next/image';
import Link from 'next/link';

import Container from './Container';
import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <header className="fixed top-0 bg-deep-red w-full">
      <Container className="flex items-center justify-between w-full !py-6">
        <Image
          src="/images/logo.png"
          alt="Logo da marca"
          width={48}
          height={48}
        />
        <nav className="flex items-center gap-6 font-semibold text-soft-gray">
          <Link href="/dashboard/nova-categoria">Nova categoria</Link>
          <Link href="/dashboard/novo-produto">Cardápio</Link>
          <LogoutButton />
        </nav>
      </Container>
    </header>
  );
}
