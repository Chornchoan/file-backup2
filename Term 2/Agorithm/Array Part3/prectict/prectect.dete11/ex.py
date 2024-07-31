# # Ex1 - String
# numberInString = "10 30 4 12"
# # #1 - How many number in string
# number=""
# sum=0
# count=0
# for i in range(len(numberInString)):
#     if numberInString[i]==" " or i==len(numberInString)-1:
#         count+=1
#         if i==len(numberInString)-1:
#             number+=numberInString[i]
#         sum+= int(number)
#         number=" "
#     else:
#         number+=numberInString[i]
# print(count)


#2 - Sum all value seperated by space 
# number=""
# sum=0
# for i in range(len(numberInString)):
#     if numberInString[i]==" " or i==len(numberInString)-1:
#         if i==len(numberInString)-1:
#             number+=numberInString[i]
#         sum+= int(number)
#         number=" "
#     else:
#         number+=numberInString[i]
# print(sum)

# ////////////////////////////////////////////////////////
#3 - Find average of number
# number=""
# sum=0
# divice = 0
# for i in range(len(numberInString)):
#     if numberInString[i]==" " or i==len(numberInString)-1:
#         if i==len(numberInString)-1:
#             number+=numberInString[i]
#         sum+= int(number)
#         divice += 1
#         number=" "
#     else:
#         number+=numberInString[i]
# sum /= divice
# print(sum)
# ////////////////////////////////////////////////
# # # Ex2 - String
# text = "Welcome to Phnom Penh"
# # #1 - how amny letter in string
# letter=""
# sum=0
# count=0
# for i in range(len(text)):
#     if text[i]==" " or i==len(text)-1:
#         if i==len(text)-1:
#             letter+=text[i]
#         sum+= str(letter)
#         letter=" "
#     else:
#         letter+=text[i]
#         count+=1
# print(count)

#2 - Reverse string
# lastindex=len(text)-1
# res=""
# for i in range(len(text)):
#     res+=text(lastindex-i)
# print(res)
#3 - add string to arr : ['welcome', 'to', 'phnom', 'penh']