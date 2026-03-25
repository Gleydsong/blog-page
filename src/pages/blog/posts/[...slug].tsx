import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

// Tipagem para as props que o servidor vai injetar no React
interface PostProps {
  postTitle: string;
  slugArray: string[];
}

export default function Post({ postTitle, slugArray }: PostProps) {
  const router = useRouter();

  // Você ainda pode acessar o router.query no client side,
  // mas como estamos usando getServerSideProps, os dados reais já vieram prontos!

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Página de Post (Com SSR)</h1>
      <p>
        Foi buscado no Servidor o Título: <strong>{postTitle}</strong>
      </p>

      <div
        style={{
          background: "black",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <p>
          <strong>Parâmetro processado no backend (Array):</strong>{" "}
          {JSON.stringify(slugArray)}
        </p>
        <p>
          <strong>Slug transformado no backend:</strong> {slugArray.join(" / ")}
        </p>
      </div>

      <button
        onClick={() => router.back()}
        style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}
      >
        Voltar
      </button>
    </div>
  );
}

// Essa função roda EXCLUSIVAMENTE no servidor (Node.js) antes da página ser enviada pro usuário
export const getServerSideProps: GetServerSideProps = async (context) => {
  // 'slug' está dentro de context.params
  // Como é catch-all ([...slug]), ele vem como um formtato de Array.
  const slugArray = (context.params?.slug as string[]) || [];

  // Exemplo Prático de Uso Real do Slug:
  // 1. Você buscaria no seu Prisma / DB:
  // const post = await prisma.post.findUnique({ where: { slug: slugArray[0] } })
  //
  // 2. Ou buscaria numa API externa:
  // const data = await fetch(`https://api.exemplo.com/posts/${slugArray.join('/')}`)

  // Simulando que buscamos algo no banco baseado no slug:
  const tituloSimulado =
    slugArray.length > 0
      ? `Lendo Artigo: ${slugArray[0].toUpperCase()}`
      : "Artigo não especificado";

  // O que retornamos aqui vai como "props" para a função Post() lá em cima
  return {
    props: {
      postTitle: tituloSimulado,
      slugArray,
    },
  };
};
