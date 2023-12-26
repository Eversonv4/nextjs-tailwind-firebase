import Client from "../core/Client"
import { TrashIcon, EditIcon } from "./Icons/SvgIcons"

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const showActions = props.deletedClient || props.selectedClient

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {
          showActions ? <th className="p-4">Actions</th> : ""
        }
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id} className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
          <td className="text-left p-4">{client.id.slice(0, 10)}...</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {
            showActions ? <td className="p-4">{renderActions(client)}</td> : ""
          }
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {
          props.selectedClient ?
            (
              <button onClick={() => props.selectedClient?.(client)} className={`flex justify-center align-items p-2 m-1
            text-green-600 rounded-full hover:bg-purple-50
            `}>
                {EditIcon}
              </button>
            ) : ("")
        }
        {
          props.deletedClient ?
            (
              <button onClick={() => props.deletedClient?.(client)} className={`flex justify-center align-items p-2 m-1
              text-red-500 rounded-full hover:bg-purple-50
              `}>
                {TrashIcon}
              </button>
            ) : ("")
        }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}