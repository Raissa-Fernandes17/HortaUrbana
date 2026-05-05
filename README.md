# 🌱 VerdeCidade — HortaUrbana (MVP)

## 📌 Sobre o Projeto

O **HortaUrbana** é um sistema web desenvolvido como MVP (Produto Mínimo Viável) para a ONG **VerdeCidade**, com o objetivo de digitalizar o gerenciamento de hortas comunitárias urbanas.

A aplicação permite que voluntários:
- Gerenciem plantios 🌿  
- Monitorem datas de colheita 📅  
- Recebam alertas de rega 🚨  
- Localizem hortas próximas 🗺️  

---

## 🎯 Problema

Atualmente, o controle das hortas é feito manualmente, causando:
- Esquecimento de rega  
- Perda de alimentos  
- Falta de organização  
- Dificuldade em localizar hortas  

---

## 💡 Solução

Uma aplicação SPA (Single Page Application) que oferece:

- Interface dinâmica  
- Cálculo automático de colheita  
- Alertas visuais  
- Persistência de dados  
- Geolocalização  

---

## 🧠 Funcionalidades

### 🌿 Painel de Controle
- Lista de canteiros em tempo real  
- Status:
  - 🔵 Normal  
  - 🟡 Precisa regar  
  - 🔴 Pronto para colheita  

### ➕ Novo Plantio
- Cadastro de cultura e data  
- Cálculo automático:
  - Alface → 45 dias  
  - Tomate → 90 dias  

### 🗺️ Mapa de Hortas
- Localização do usuário  

---

## ⚙️ Tecnologias

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- LocalStorage  
- Geolocalização  

---

## 🧱 Arquitetura

SPA (Single Page Application):
- Sem recarregamento de página  
- Manipulação de DOM  
- Controle de estado via JS  

---

## 📁 Estrutura

```
hortaurbana/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔄 Lógica do Sistema

### 📅 Cálculo de Colheita

```js
function calcularColheita(dataPlantio, tipo) {
  const dias = {
    alface: 45,
    tomate: 90
  };

  const data = new Date(dataPlantio);
  data.setDate(data.getDate() + dias[tipo]);

  return data;
}
```

---

### 🚨 Alertas

```js
if (diasSemRegar > 2) {
  elemento.classList.add("alerta-rega");
}

if (dataAtual >= dataColheita) {
  elemento.classList.add("alerta-colheita");
}
```

---

### 💾 Persistência

```js
localStorage.setItem("canteiros", JSON.stringify(lista));
```

---

## 📱 UX e Acessibilidade

- Alto contraste  
- HTML semântico  
- Interface simples  
- Foco em usuários idosos  

---

## 👥 Personas

**👴 Seu João (Voluntário)**
- Idoso  
- Usa celular no sol  
- Precisa de simplicidade  

**👩 Coordenadora**
- Organiza as hortas  
- Precisa de controle geral  

---

## 🔀 Fluxo

```
Painel → Novo Plantio → Painel
       → Mapa
```

---

## 🧪 Como Executar

```bash
git clone https://github.com/seu-usuario/hortaurbana.git
```

Abra o arquivo:

```
index.html
```

---

## 📌 Requisitos Atendidos

- [x] SPA  
- [x] Manipulação de DOM  
- [x] Uso de Date  
- [x] Interface dinâmica  
- [x] Alertas visuais  
- [x] LocalStorage  
- [x] Geolocalização  

---

## 🚀 Melhorias Futuras

- Integração com mapas  
- Sistema de login  
- Backend  
- Notificações  

---

