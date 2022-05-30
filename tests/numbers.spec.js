/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it(' apenas números', () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
  });

  it('numero como string', () => {
    expect(false).toEqual(numbers([1, 2, '3', 4, 5]));
  });
  
  it('string no meio', () => {
    expect(false).toEqual(numbers([1, 2, 'a', 4, 5]));
  });
  
  it('array vazios', () => {
    expect(false).toEqual(numbers([' ']));

    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    // Escreva um teste em que a função recebe [' '] e retorna false
  });
});

/* describe('22 - Implemente os casos de teste para a função `numbers`', () => {
  it('uma letra no meio', () => {
    expect(false).toEqual(numbers([1, 2, '3', 4, 5]));
  });
});

describe('23 - Implemente os casos de teste para a função `numbers`', () => {
  it('uma outra letra no meio', () => {
    expect(false).toEqual(numbers([1, 'a', 3]));
  });
});

describe('24 - Implemente os casos de teste para a função `numbers`', () => {
  it('array vazio', () => {
    expect(false).toEqual(numbers([]));
  });
}); */