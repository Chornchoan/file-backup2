# Ex2 - Array
# arr = [10, 12, 3, 8, 9, 12, 12, 10, 10]

#1 - Sum all number (function)
# def sumAll(arr, arr1):
#     return arr+arr1
# arr2=[10, 12, 3, 8, 9, 12, 12, 10, 10]
# res=0
# for i in range(len(arr2)):
#     res =sumAll(res,arr2[i])
# print(res)  

#2 - Reverse array (function)
# def reverseArry(arr):
#     arr2=[]
#     lastindex=len(arr)-1
#     for i in range(len(arr)):
#         arr2.append(arr[lastindex-i])
#     return arr2
# text=[10, 12, 3, 8, 9, 12, 12, 10, 10]
# print(reverseArry(text))


# #3 - Find index of 3 (function)
# def findIndex(array):
#     index=None
#     for i in range(len(array)):
#         if array[i] == 3:
#             index = i
#     return index
# text=[10, 12, 3, 8, 9, 12, 12, 10, 10]
# print(findIndex(text))

#4 - Romove 8 number from list (function)
# def findIndex(array,number):
#     index=None
#     for i in range(len(array)):
#         if array[i]==number:
#             index=i
#     return index
# text=[10, 12, 3, 8, 9, 12, 12, 10, 10]
# text.pop(findIndex(text,8))
# text.pop(findIndex(text,3))
# print(text)

#5 - Remove duplicate value (function)
# def removeDuplicat(arr,valur):
#     isExist=False
#     for n  in arr:
#         if n ==valur:
#             isExist=True
#     return isExist
# text=[10, 12, 3, 8, 9, 12, 12, 10, 10]
# newlist=[]
# for i in text:
#     if not removeDuplicat(newlist,i):
#         newlist.append(i)
# print(newlist)
#6 - Replace 10 by 99