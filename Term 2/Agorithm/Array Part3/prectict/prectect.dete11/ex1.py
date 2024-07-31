# Ex1 - String
text = "aba is the bank in cambodia"
# #1 - add text to array
# ['aba', 'is', 'the', 'bank', 'in', 'cambodia']
# array=[]
# res=""
# for i in range(len(text)):
#     if text[i]!=" ":
#         res+=text[i]
#         if i == len(text) - 1:
#             array.append(res)
#     else:
#         array.append(res)
#         res=""
    
# print(array)


# #2 - Find first index of "B"
# isnumberB=False
# index=""
# i=0
# while i <len(text):
#     if text[i]=='b'and not isnumberB:
#         index+=i
#         isnumberB=True
# print(index)

# #3 - Convert text to capitalize
# "Aba Is The Bank In Cambodia"
# for i in range(len(text)):
    # if text[i] 
     
# #4 - Reverse text
# lastindex= len(text)-1
# res=""
# for i in range(len(text)):
#     res+=text[lastindex-i]
# print(res)

# "aba si eht knab ni aidobmac" 
# res =""
# res2 = ""
# for i in range(len(text)):
#     lastindex=len(text)-1
#     if text[i]!=" " :
#         res +=text[i]
#         # for k in range(len(text)):
#         #     if text[k]==len(text)-1:
#         #         res+=text[k]
#     else:
#         for j in range(len(res)):
#             res2 += res[len(res)-(j+1)]
#         res2 += text[i]
#         res = ""
# print(res2)


# ////////////////////////////////////////////////////////////////////////////////////////

# Ex2 - Array
# arr = [1010, 55, 993, 2]
#1 - How many degit of each number
# array=[]
# for i in range(len(arr)):
#     array.append(len(str(arr[i])))
# print(array)
# [4, 2, 3, 1]


#2 - Reverse array
# lastIndex=len(arr)-1
# array=[]
# for i in range(len(arr)):
#     array.append(arr[lastIndex-i])
# print(array)


#3 - Sum only number > 2 degit
# arr = [1010, 55, 993, 2]
# sum =0
# for i in range(len(arr)):
#     if len(str(arr[i]))>2:
#         sum+=arr[i]
# print(sum)
    
    