# Ex3 - Array 2D
arr = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 8],
  [10, 3, 8]
]
#1 - How many number 2 in list
# cont=0
# for i in range(len(arr)):
#   for j in range(len(arr[i])):
#     if arr[i][j]==2:
#       cont+=1
# print(cont)

#2 - Sum only number > 5
# sum =0
# for i in range(len(arr)):
#     for j in range(len(arr[i])):
#         if arr[i][j]>5:
#             sum+=arr[i][j]
# print(sum)

#3 - How many number < 5
sum =0
for i in range(len(arr)):
    for j in range(len(arr[i])):
        if arr[i][j]<5:
            sum+=arr[i][j]
print(sum)
#4 - Sum number in row

#5 - Sum number in column
# res=[]
# sum=0
# for i in range(len(arr[2])):
#     for j in range(len(arr)):
#         sum += arr[j][i]
#     res.append(sum)
#     sum = 0
# print(res)

#6 - Replace number 8 with *