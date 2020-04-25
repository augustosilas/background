export default {
  key: "UserReport",
  option: {
    delay: 5000, // delay para executar
    attemps: 3, // caso o job falhe ele fará no máximo 3 tentativas de execução
  },
  async handle({ data }) {
    const { user } = data;

    console.log(user);
  },
};
