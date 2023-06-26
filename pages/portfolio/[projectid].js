import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <h1>This is Portfolio Project page</h1>;
}

export default PortfolioProjectPage;
