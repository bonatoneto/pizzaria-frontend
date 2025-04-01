import Image from 'next/image';
import Link from 'next/link';

import Container from './Container';

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
          <Link href="/">Nova categoria</Link>
          <Link href="/">Cardápio</Link>
          <Image
            src="/assets/log-out.svg"
            alt="Ícone para sair da aplicação"
            width={38}
            height={38}
          />
        </nav>
      </Container>
    </header>
  );
}
