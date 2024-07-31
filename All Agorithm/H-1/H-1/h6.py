
# def multiplyWithinRange(start, end):
#     product = 1
#     for i in range(start, end + 1):
#         product *= i
#     return product

# start = int(input("Enter the start number: "))
# end = int(input("Enter the end number: "))

# result = multiplyWithinRange(start, end)
# print("Product:", result)


# def multiplyWithinRange(start, end):
#     product = 1
#     for i in range(start, end + 1):
#         product *= i
#     return product

# start = int(input("Enter the start number: "))
# end = int(input("Enter the end number: "))

# print(multiplyWithinRange(start,end))

def multiplyWithinRange(startNumber, endNumber):
    numberMultiple = 1
    for i in range(startNumber, endNumber + 1):
        numberMultiple *= i
    return numberMultiple
        
startNumber = int(input("Enter Start Number:"))
endNumber = int(input("Enter end Number:"))

print(multiplyWithinRange(startNumber, endNumber))