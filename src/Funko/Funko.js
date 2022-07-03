import React, { useState } from "react";
import template from "./Funko.jsx";
import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button, Tooltip } from 'antd';
import { useNavigate } from "react-router";
import { Checkbox } from 'antd'


const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const { TextArea } = Input;
const Funko = () => {

  let navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/home")
  }
  return (
    <div id="main-container">
      <h1>Cadastrar Funko</h1>
      <form id="cadastroperso">
        <div class="full-box">
          <label for="nomeFunko">Nome do Funko:</label>
          <Input
            placeholder="Insira o nome do Funko"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </div>
        <div class="full-box">
          <label for="Valor"> Valor:</label>
          <Input type="number" min="0"
            placeholder="Insira o valor do Funko"
          />
        </div>
        <div class="full-box">
          <label for="Link-img"> Insira o Link da imagem:  </label>
          <Input
            placeholder="Insira o Link da imagem"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </div>
        <div class="descrition">
        <label for="Descrição"> Insira uma descrição para o Funko:  </label>
                        <TextArea rows={6}  placeholder="Descrição" maxLength={250} />
        </div>
        <div class="full-box">
          <label for="Confirma"> Funko a venda: </label>
            <Checkbox onChange={onChange}>Sim </Checkbox>;
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
  
  };


export default Funko;
