import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 gap-4 w-full max-w-3xl flex-col items-center py-24 bg-zinc-50 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-full text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Acesse o Aplicativo que deseja e aproveite os benefícios exclusivos
            para membros do clube de vantagens Vip Card.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 text-base font-medium">
          <div className="flex flex-col gap-2 items-center">
            <a
              className="relative flex h-56 w-56 items-center justify-center rounded-2xl gap-2 bg-zinc-900 px-5 transition-colors hover:opacity-70 dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fill
                src="/assets/vipcard.png"
                alt="Vip Card"
                className="object-cover rounded-2xl"
              />
            </a>
            <p className="text-foreground">Vip Card</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a
              className="relative flex h-56 w-56 items-center justify-center rounded-2xl gap-2 bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fill
                src="/assets/seuclube.png"
                alt="Seu Clube"
                className="object-cover rounded-2xl transition-colors hover:opacity-50"
              />
            </a>
            <p className="text-foreground">Seu Clube</p>
          </div>
        </div>
      </main>
    </div>
  );
}
