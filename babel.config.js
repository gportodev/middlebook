module.exports = {
  presets: [
    "@babel/preset-env", // alterar funcionalidade do js que o navegador não entende ex: import/export, arrow function, etc.
    "@babel/preset-react", // transformar coisas do react que o navegador não entende ex: JSX
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};