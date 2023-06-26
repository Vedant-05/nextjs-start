import Link from "next/link";

function clients() {
  const client = [
    { id: "max", name: "maximilian" },
    { id: "manu", name: "manuel" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {client.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default clients;
