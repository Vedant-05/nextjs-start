import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "maxi", clientprojectid: "Projecta" },
    });
  }
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Take To Project A</button>
    </div>
  );
}
export default ClientsProjectPage;
