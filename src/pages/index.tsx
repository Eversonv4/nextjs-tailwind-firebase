import { useEffect } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { Layout } from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    contentVisible,
    setContentVisible,
    client,
    setClient,
    emptyClient,
    listClients,
    saveClient,
    selectedClient,
    deletedClient,
    getAll
  } = useClients();

  useEffect(getAll, []);

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button
            className="mb-4"
            bgColor="green"
            handleClick={() => {
              if (contentVisible === "table") {
                setContentVisible("form")
              } else {
                setContentVisible("table")
                setClient(emptyClient);
              }
            }}
          >
            {contentVisible === "table" ? "Novo Cliente" : "Mostrar Tabela"}
          </Button>
        </div>
        {
          contentVisible === "table" ?
            (<Table
              clients={listClients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />) :
            (<Form customer={client} closeForm={() => {
              setContentVisible("table");
              setClient(emptyClient);
            }} saveClient={saveClient} />)
        }
      </Layout>
    </div>
  )
}

