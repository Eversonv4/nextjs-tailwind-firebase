import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Client from "../core/Client";

interface FormProps {
  customer: Client
  closeForm?: () => void
  saveClient?: (client: Client) => void
}

export default function Form(props: FormProps) {
  const clientId = props.customer?.id;
  const customer = { id: clientId ?? "", name: props.customer?.name ?? "", age: props.customer?.age ?? 0 };
  const [user, setUser] = useState(customer);

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    setUser(prev => ({
      ...prev,
      // @ts-ignore
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div>
      {
        clientId ? (<Input label="Código" type="text" value={clientId} readOnly={true} />) : ""
      }
      <Input label="Nome" type="text" value={user.name} onChangeValue={handleChange} name="name" />
      <Input label="Idade" type="number" value={user.age} onChangeValue={handleChange} name="age" />

      <div className="flex justify-end">
        <Button bgColor="blue" className="mr-2" handleClick={() => props.saveClient(new Client(user.name, user.age, clientId))}>
          {user.id ? "Alterar" : "Salvar"}
        </Button>
        <Button handleClick={props.closeForm}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}