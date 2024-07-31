# Ex2 - Array 2D
arr2D = [
  [1, 2, 3],
  [3, 5, 9],
  [8, 4, 3]
]
#1 - Sum each array >>>>>>>>>>>>>>>>>>>sum Row<<<<<<<<<
# [6, 17, 15]
# sum =0
# newarr2d=[]
# for i in range(len(arr2D)):
#     arr=arr2D[i]
#     for j in range(len(arr)):
#         sum+=arr[j]
#     newarr2d.append(sum)
#     sum=0
# print(newarr2d)

# sum =0>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>sum colaume<<<<<<<<<
# newarr2d=[]
# for i in range(len(arr2D)):
#     for j in range(len(arr2D[i])):
#         sum+=arr2D[j][i]
#     newarr2d.append(sum)
#     sum=0
# print(newarr2d)

#2 - Select only odd number
# [1, 3, 3, 5, 9, 3]
for i in range(len(arr2D)):
    if arr2D[i]%2!=0:
      arr=arr2D[0][i]
print(arr)

#3 - Replace all even number with 168
# [
#   [168, 2, 168],
#   [168, 168, 168],
#   [8, 4, 168]
# ]