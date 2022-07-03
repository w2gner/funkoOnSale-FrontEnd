import React    from "react";
import template from "./Cadastro.jsx";

class Cadastro extends React.Component {
  render() {
    return (
      <div id="main-container">
            <h1>Cadastre seu personagem</h1>
            <form id="cadastroperso">
                <div class="full-box">
                    <label for="nome">Nome do Personagem:</label>
                    <input type="text" name="personagem" id="nome" placeholder="Digite o nome do Personagem">
                        </div>
                <div class="full-box">
                    <label for="cidade"> Cidade Natal:</label>
                    <input type="text" name="cidade" id="cidade" placeholder="Digite a cidade natal">
                         </div>
                <div class="full-box">
                    <label for="Classe"><abbr title="Ex: Guerreiro, Arqueiro, Mago">Classe:</abbr></label>
                    <input type="text" name="classe" id="classe" placeholder="Digite sua classe ">
                         </div>
                <div class="full-box">
                    <label for="cidade"><abbr title="Ex: Humano, Deus, Planeta">Raça:</abbr></label>
                    <input type="text" name="raça" id="raça" placeholder="Digite sua raça">
                      </div>
                <div class="full-box">
                    <label for="apetrechos"><abbr title="Ex: Martelo, Armadura, Magia">Armas/Poderes:</abbr></label>
                    <input type="text" name="apetrechos" id="apetrechos" placeholder="Digite armas ou magias usadas">
                </div>
                <div class="half-box">
                    <label for="tutorial">Realizar Tutorial:</label>
                    <label for="Sim">Sim</label>
                    <input type="checkbox" name="checkboxSim" id="checkboxSim" placeholder="Sim, eu quero">
                    <label for="Sim">Não</label>
                    <input type="checkbox" name="checkboxNao" id="checkboxNao" placeholder="Nao quero">
                </div>
               <div class="full-box">
                    <input type="submit" value="Criar personagem" id="criar" >
                </div>
                <div class="full-box">
                    <input type="submit" value="Voltar" id="Voltar"  formaction="index.html">
                </div>


            </form>
        </div>
    );
  }
  }
export default Cadastro;
