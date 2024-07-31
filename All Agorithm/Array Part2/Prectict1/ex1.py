# Ex1 - Basic array

# array = [1, 4, 5, 2, 9, 1, 6, 3, 2]//////////////////////////////////////////////

    #1 - How many value in array  
# print(len(array))
    #2 - Sum all value in array
# sum =0
# for i in range(len(array)):
#     sum +=array[i]
# print(sum)

    #3 - Count even / odd number in array
# cont = 0
# cont1 =0
# for i in range(len(array)):
#     if array[i]%2==0:
#         cont +=1
#     elif array[i]%2!=0:
#         cont1+=1
# print("is even="+str(cont )+"\n" +"is odd="+str(cont1))

    #4 - Find first index of 2
# result =0
# i=0
# find =True
# while i<(len(array))and find:
#     if array[i] ==2:
#         result+=1
#         find = False
#     else:
#         result+=i
#     i+=1
# print(result)

    #5 - Replace number 1 by 88 and 2 by 99
# for i in range(len(array)):
#     if array[i]==1:
#         array[i]= 88
#     if array[i]==2:
#         array[i]=99
# print(array)


    #6 - If value is 1 add 3 more and if value greater than 2 minus 1
# for i in range(len(array)):
#     if array[i]==1:
#         array[i]=array[i]+3
#     if array[i] >2:
#         array[i]=array[i]-1
# print(array)