# Ex2 - String array

# arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]!!!!!!!!!!!!!!!!!!!!!!!!!

# #1 - How many banana in list??????????????????????????????????????????
# cond =0
# for i in range(len(arr)):
#     if arr[i]=="Banana"or arr[i]=="banana":
#         cond+=1
# print(cond)
    # use function
# def countBanana(text):
#     count = False
#     if text.lower()=="banana":
#         count=True
#     return count
# arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]
# counter =0
# for i in range(len(arr)):
#     if countBanana(arr[i]):
#         counter+=1
# print(counter)


# #2 - How many letter "o" in list??????????????????????????????????????????
# condo=0
# for i in range(len(arr)):
#     for j in range(len(arr[i])):
#         if arr[i][j]=="o":
#             condo+=1
# print(condo)
        # use function
# def countLetterO(text):
#     count = 0
#     for i in range(len(text)):
#         if text[i].lower() == 'o':
#             count += 1
#     return count

# arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]
# counter = 0
# for i in range(len(arr)):
#     counter += countLetterO(arr[i])
# print(counter)

#3 - Replace banana by Jackfruit??????????????????????????????????????????
# for i in range(len(arr)):
#     if arr[i]=="banana"or arr[i]=="Banana":
#         arr.insert(i+1,"Juckfruit")
#         arr.pop(i)
# print(arr)

#4 - Create new list with unique fruit ????????????????????????? ??????? 
# ["banana","Apple","coconut", "mango"]
# text=eval(input())
# arr=[]
# for i in range(len(text)):
#     arr=text
# print(arr)
        # use function
# def creat(array,text):
#     isuni = True
#     for i in range (len(array)):

# arr=["banana","Banana","Apple","coconut", "mango", "coconut"]
# newfruit=[]
# for i in range(len(arr)):
#     if creat (newfruit,arr[i]):
#         newfruit.append(arr[i])
# print(newfruit)

#5 - Create new list store only letter "A" and "C" from list????????????
# arr=["banana","Apple","coconut", "mango"]
# storagne=[]
# for i in range(len(arr)):
#     for j in range(len(arr)):
#         if arr[i][j].upper()=="A"and arr[i][j].upper()=="C":
#             storagne+=arr[i][j]
# print(storagne)

