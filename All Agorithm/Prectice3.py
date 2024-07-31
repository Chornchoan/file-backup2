

# EX1
# def isEqual(arr1,arr2):
#     i =0
#     isEqual = True
#     while i < len(arr1) and isEqual:
#         if arr1[i] !=arr2[i]:
#             isEqual =False
#         i +=1
#     return isEqual
# arr1 = [1,2,3,]
# arr2 = [2,1,3]
# if len(arr1)==len(arr2):
#     correctly =isEqual(arr1,arr2)
#     if not correctly :
#         print("NOT equal")
#     else:
#         print("Equal")
# else:
#     print ("NO Eqa")

# # EX2
# def numberOfCompare (arr):
#     i =0
#     res=0
#     isSum = True
#     while i < len(arr)-1:
#         if arr[i]< arr[i+1]:
#             res+=1
#             isSum = True
#         else:
#             res +=i
#         i +=1
#     return res
# arr1 = eval(input())
# print(numberOfCompare(arr1))


# EX3
# def sum (start,end):
#     return start +end
# def  sumFromTo(arr): 
#     tottal=0
#     if  len(arr)==2:
#         for i in range(arr[0],arr[1] +1):
#             tottal=sum(tottal,i)
#         return tottal
#     else:
#         return"you got err0r"
# arr = eval(input())
# print(sumFromTo(arr))

# Ex4
# arr =[2,3,4,5,2]
# isfound = False
# sum=0
# coundter = 0
# for i in range(len(arr)):
#     if arr[i]==2:
#         isfound =True
#         coundter +=1
#     elif isfound:
#         if coundter%2==0:
#             sum+=arr[i]
#         else:
#             coundter =0
#             isfound=False
#     return sum
# print(sum)
 
arr = eval(input())
isFound = False
sum = 0
counter = 0
for i in range(len(arr)):
    if arr[i] == 2:
        isFound = True
        counter += 1
    elif isFound:
        if counter %2== 1:
            sum += arr[i]
        else:
            counter = 0
            isFound = 0
print(sum)


