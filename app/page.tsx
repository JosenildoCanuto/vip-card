import { AppCard } from "./components/AppCard";

const apps = [
  {
    href: "https://www.clubevipcard.com.br/portal/cadastro-clubes?id_clube=444&page=personalizado_1",
    src: "/assets/vipcard.png",
    alt: "Vip Card",
    label: "Vip Card",
  },
  {
    href: "intent://br.com.servdonto.associado#Intent;scheme=android-app;end",
    src: "/assets/seuclube.png",
    alt: "Seu Clube",
    label: "Seu Clube",
  },
  {
    href: "intent://br.com.servdonto.associado#Intent;scheme=android-app;end",
    src: "/assets/servdonto.png",
    alt: "Servdonto",
    label: "Servdonto",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 gap-4 w-full max-w-3xl flex-col items-center py-24 bg-zinc-50 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-full text-xl sm:text-3xl font-semibold sm:leading-10 tracking-tight text-black dark:text-zinc-50">
            Acesse o Aplicativo que deseja e aproveite os benefícios exclusivos
            para membros do clube de vantagens Vip Card.
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium">
          {apps.map((app) => (
            <AppCard key={app.alt} {...app} />
          ))}
        </div>
      </main>
    </div>
  );
}
