import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import ClientRepository from "../core/ClientRepository";
import Client from "../core/Client";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();
  
  const [contentVisible, setContentVisible] = useState<"form" | "table">("table");
  const [listClients, setListClients] = useState([]);
  const emptyClient = Client.empty();
  const [client, setClient] = useState(emptyClient);
  
  function selectedClient(client: Client) {
    setClient(prev => prev = client)
    setContentVisible("form");
  }
  
  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }
  
  async function saveClient(client: Client) {
    await repo.save(client);
    setContentVisible("table");
    getAll();
  }
  
  function getAll() {
    repo.getAll().then(clients => {
      setListClients(clients);
    });
  }
  
  
  return {
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
  }
}