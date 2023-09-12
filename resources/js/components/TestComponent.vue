<template>
    <div class="test-component">
      <h1>Componente Vue.js de Teste</h1>
      <p>Este é um componente Vue.js de teste com CSS diretamente no Laravel</p>
    </div>
  </template>

  <script>
  export default {
    name: 'TestComponent'
  };
  </script>

  <style scoped>
  .test-component {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  h1 {
    color: #333;
  }

  p {
    color: #666;
  }
  </style>
