# Ex2 - Basic array

# array = [1, 4, 5, 2, 9, 1, 6, 3, 2]

    #1 - Find average of value in array
# sum = 0
# for i in range(len(array)):
#     sum += array[i]
# sum = int(sum/len(array))
# print(sum)

    #2 - Find max / min value in array
# min=array[0]
# max=array[0]
# for i in range(len(array)):
#     if array[i]<min:
#         min =array[i]
#     if array[i]>max:
#         max =array[i]
# print("min="+str(min)+"\n"+"max="+str(max))

    #3 - If odd value add 1 and if even value minus 1

# for i in range(len(array)):
#     if array[i]%2==0:
#         array[i]+=+1
#     elif array[i]%2!=0:
#         array[i]+=-1
# print(array)
    #4 - How many number < 5 in array
# cont=0
# for i in range(len(array)):
#     if array[i]<5:
#         cont+=1
# print(cont)

#5 - Square value of array
# square=0
# for i in range(len(array)):
#     array[i]*=array[i]
# print(array)