# Ex1 - Array string
#1 - Remove duplicate name from list
# def duplicat(word,array):
#     isduplicat= False
#     for i in range(len(array)):
#         if array[i].lower()== word.lower():
#             isduplicat =True
#     return isduplicat   
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newaray=[]
# for i in range(len(arr)):
#     if not duplicat(arr[i],newaray):
#         newaray.append(arr[i])
# print(newaray)

    

# #2 - Reverse only "mengheang" name in list
# def reversenam(word):
#     newword=""
#     lasstindex=len(word)-1
#     for i in range(len(word)):
#         newword+=word[lasstindex-i]
#     return newword
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# for i in range(len(arr)):
#     if arr[i].lower()=="mengheang":
#         arr[i]=reversenam(arr[i])
# print(arr)
        


# #3 - Add "Ronan" to first index
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# arr.insert(0,"Ronan")
# print(arr)



# #4 - Create new list with number of character in list
# # [4, 3, 9, 4, 3]
# def countcharacter(word):
#     return len(word)
# arr = ["Rady","yon","mengheang", "rady", "Yon"]   
# array=[]
# for i in range(len(arr)):
#     array.append(countcharacter(arr[i]))
# print(array)


#5 - Create new list with letter "a", "e", "i", "o", "u"
# ['a','o', 'e', 'e', 'a', 'a', 'o']
# def countvoval(text,text2):
#     for i in range(len(text)):
#         if text[i].lower()=="a"or text[i].lower()=="e" or text[i].lower()=="i" or text[i].lower()=="o" or text[i].lower()=="u":
#             text2.append(text[i])
#     return text2
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newlist =[]
# for i in range(len(arr)):
#     newlist=countvoval(arr[i],newlist)
# print(newlist)


#6 - Count number of 'A' in list
# [1, 0, 1, 1, 0]
# def countA(text,text2):
#     for i in range(len(text)):
#         if text[i].lower()=="a":
#             text2.append(text[i])
#     return text2
# arr = ["Rady","yon","mengheang", "rady", "Yon"]
# newlist =[]
# res=0
# for i in range(len(arr)):
#     newlist=countA(arr[i],newlist)
#     res+=1
# print(res)



#7 - Keep name who start from letter "R" only

arr = ["Rady","yon","mengheang", "rady", "Yon"]
#8 - Remove "Mengheag" from list
for i in range(len(arr)):
    arr.pop(arr[2])
print(arr)



#9 - Create nested array (Array 2D) from list
# [ ['R','a','d','y'], ['y','o','n'], ...]
# def createarray(word):
#     newarray =[]
#     for i in range(len(word)):
#         newarray.append(word[i])
#     return newarray
# arr = ["Rady","yon","mengheang", "rady", "Yon"]  
# array2D =[]
# for i in range(len(arr)):
#     array2D.append(createarray(arr[i]))
# print(array2D)