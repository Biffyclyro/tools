valor = float(input('Entre com o valor: '))
num_vezes = int(input('Número de parcelas: '))
rendimento = 0
val_parecela = round((valor/num_vezes), 2)

CDI = 11.65

mensal = (CDI / 12) / 100
print(mensal)

for parcela in range(num_vezes):
    rendimento += valor * mensal    
    valor -= val_parecela

print(round(rendimento))