const valores = [7.7, 8.8, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores)
console.log('Quantidade de itens: '+valores.length)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(valores.pop())
console.log(valores)
console.log(valores.pop())
console.log(valores)
console.log(valores.pop())
console.log(valores)