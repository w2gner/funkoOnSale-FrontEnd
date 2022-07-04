import React from "react";
import './Cadastro.css'; 
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useNavigate } from "react-router";

const Cadastro = () => {
    let navigate = useNavigate();

    function back(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div id="main-container">
            <h1>Criar usuario</h1>
            <form id="cadastroperso" className="center">
                <div class="full-box">
                    <label for="nome">Nome Completo:</label>
                    <Input
                        size="large"
                        placeholder="Insira seu nome"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                <div class="full-box">
                    <label for="User"> Usuario:</label>
                    <Input
                        size="large"
                        placeholder="Insira seu usuário"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                <div class="full-box">
                    <label for="Senha"> Insira sua Senha:  </label>
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined Outlined className="site-form-item-icon" />}
                        placeholder="Insira sua senha"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div class="full-box">
                    <label for="Confirma">Confirme sua senha: </label>
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined Outlined className="site-form-item-icon" />}
                        placeholder="Confirmar"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div class="full-box">
                    <label for="Confirme sua senha">
                    </label>
                    <Button
                        htmlType='submit'
                        type="primary"

                    >
                        Cadastrar
                    </Button>
                    <Button
                        htmlType='submit'
                        type="primary"
                        onClick={back}
                    >
                        Voltar
                    </Button>
                </div>
            </form>
        </div>
    );
}
export default Cadastro;
