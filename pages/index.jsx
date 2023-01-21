import Head from "next/head";
import { useState } from "react";

export default function HomePage({ ...props }) {
    const [loading, toggleLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async (params) => {
        toggleLoading(true);
        try {
            const request = await fetch("/api/users");
            const response = await request.json();

            setUsers(response.users);
        } catch (error) {
            console.log(error.message);
            console.log(error);
        } finally {
            toggleLoading(false);
        }
    };

    return <main className="bg-light">
        <Head>
            <title>POC?</title>
        </Head>

        <header className="navbar navbar-light fixed-top bg-white shadow-sm">
            <div className="container-fluid container-lg">
                <h1 className="navbar-brand mb-0">Teste de conceito</h1>
            </div>
        </header>

        <section className="bg-primary py-5 mt-5">
            <div className="py-5"></div>
        </section>

        <section className="container-fluid container-lg p-3">
            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card bg-white rounded p-3">
                        <button className="btn btn-primary" onClick={getUsers} disabled={loading}>Carregar Usuários</button>
                        <div className="py-5"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-white rounded">
                        <h5 className="p-3 m-0">Usuários</h5>
                        <ul className="list-group list-group-flush">
                            {(loading)
                                ? <li className="list-group-item p-3">Carregando...</li>
                                : <>
                                    {(users.length === 0) && <li className="list-group-item p-3">Nenhum usuário</li>}
                                    {(users.length > 0) && users.map((user, index) => {
                                        return <li key={index} className="list-group-item p-3">
                                            {user.username && <small className="d-block text-muted">@{user.username}</small>}
                                            {user.name}
                                            {user.role && <small className="d-block">{user.role}</small>}
                                        </li>
                                    })}
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
}