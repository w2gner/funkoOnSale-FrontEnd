import React from "react";
import './Cadastro.css';
import template from "./Cadastro.jsx";
import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from "react-router";

const Cadastro = () => {
    let navigate = useNavigate();

    function back(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div id="main-container">
            <h1>Cadastre seu personagem</h1>
            <form id="cadastroperso">
                <div class="full-box">
                    <label for="nome">Nome Completo:</label>
                    <Input
                        placeholder="Insira seu nome"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                <div class="full-box">
                    <label for="User"> Usuario:</label>
                    <Input
                        placeholder="Insira seu usuário"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                <div class="full-box">
                    <label for="Senha"> Insira sua Senha:  </label>
                    <Input.Password
                        placeholder="insira sua senha"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div class="full-box">
                    <label for="Confirma"> Confirme sua senha: </label>
                    <Input.Password
                        placeholder="Confirmar"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div class="full-box">
                    <label for="Confirme sua senha">
                    </label>
                    <button className="Cadastrar" type="submit">Cadastrar</button>
                    <button className="Voltar" type="submit" onClick={back}>Voltar</button>
                </div>
            </form>
        </div>
    );
}
export default Cadastro;
