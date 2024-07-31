
# letter = str(input("Enter Here:"))
letter = "AXAXX"
sum = 0

for i in range(len(letter)):
    if letter[i] == "x" or letter[i] == "X":
        sum += i

print(sum)