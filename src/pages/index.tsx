import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/UseClientes'

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    exluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white 
     `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4 bg-gradient-to-r from-green-500 to-green-700"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExluido={exluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancaleado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
