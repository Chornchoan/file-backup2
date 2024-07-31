# # Ex1 - Array
# # String to array
# Input: Hello
# Output: ['H','e','l','l','o']

# text=input("Enter hrer:")
# array=[]
# for i in range(len(text)):
#     array.append(text[i])
# print(array)
# ********IF WE INPUT HAS SPACE***********??//
# text=input("Enter hrer:")
# array=[]
# for i in range(len(text)):
#     if text[i]!=" ":
#         array.append(text[i])
# print(array)
# ------------------
# Ex2 - Array
# # String to array seperate by space
# Input: aba bank in Cambodia
# output: ['aba', 'bank','in','Cambodia']

# text =input("Enter here:")
# arr=[]
# res=""
# for i in range(len(text)):
#     if text[i]==" " or i==len(text)-1:
#         if i ==len(text)-1:
#             res+=text[i]
#         arr.append(res)
#         res=""
#     else:    
#         res+=text[i]
# print(arr)
  
# ------------------
# Ex3 - Array
# # Get only text contains letter A
# Input: ['banana','coconut','mango']
# output: ['banana','mango']
 
# def findA(word):
#     isfound=False
#     i=0
#     while i < len(word) and not isfound:
#         if word[i].lower()=='a':
#             isfound=True
#         i+=1
#     return isfound
# arr= ['banana','coconut','mango','bopha','soya']
# newarr=[]
# for value in arr:
#     if findA(value):
#         newarr.append(value)
# print(newarr)
# ------------------------------------------
# Ex4 - Array
# # Reverse array and reverse text in array
# Input: ['banana','coconut']
# output: 
# ['coconut','banana']
# ['ananab','tunococ']
# def reverArr(arr):
#     lasIndex=len(arr)-1
#     newarr=[]
#     for i in range(len(arr)):
#         newarr.append(arr[lasIndex-i])
#     return newarr
# def reverstrin(word):
#     lastIndex=len(word)-1
#     res=""
#     for i in range(len(word)):
#         res+=word[lastIndex-i]
#     return res
# arr=['banana','coconut']
# print(reverArr(arr))
# for i in range(len(arr)):
#     arr[i]=reverstrin(arr[i])
# print(arr)
# # -----------------------------------------------
# Ex5 - Array
# #Count number
# Input1: [2, 2, 3, 5, 2, 3, 2, 5, 8]
# Input2: [2, 3]
# Output: [ { 2: 4} , {3: 2} ]
# def countNumber(value,arr):
#     count=0
#     for i in range (len(arr)):
#         if arr[i]==value:
#             count+=1
#     return count
# arra=eval(input())
# array=eval(input())
# result ={}
# for i in range (len(array)):
#     result[array[i]] = countNumber(array[i],arra)
# print(result)

        
# -----------------------------------
# Ex6 - Array
# # Array to object
# input: ['banana','coconut', 'mango', 'orange']
# output: 
# [
#   {0: 'banana',1: 'coconut',2: 'mango',3: 'orange'}
# ]
# arr=['banana','coconut', 'mango', 'orange']
# arr[1]="banana"
# print(arr)
# -----------------------------------------------------
# Ex7 - Array
# # Array to object - counting character
# input: ['banana','coconut', 'mango', 'orange']
# output: 
# [
#   {'banana':6,'coconut':7,'mango': 5,'orange': 6}
# ]

# ------------

# Ex8 - Dictionary or object
# fruit_stock = [
#   {'id': 1, 'name': 'Coconut', 'quatity': 3, 'price': 4000},
#   {'id': 2, 'name': 'Banana', 'quatity': 0, 'price': 2500},
#   {'id': 3, 'name': 'Mango', 'quatity': 23, 'price': 2000},
#   {'id': 4, 'name': 'Orange', 'quatity': 0, 'price': 5000},
#   {'id': 5, 'name': 'Apple', 'quatity': 5, 'price': 3000},
#   {'id': 6, 'name': 'Jackfruit', 'quatity': 13, 'price': 6000},
# ]
# #1 - How many fruit have price > 3000
# {
#   'numberOfruit': 3,
#   'names': ['Coconut','Orange', 'Jackfruit']
# }
# --------------------
# #2 - How many fruit have price < 5000
# [
#   {'name': 'Coconut'},
#   {'name': 'Banana'},
#   {'name': 'Mango'},
#   {'name': 'Apple'}
# ]
# -------------------
# #3 - Which fruit doens't have in stock
# [
#   {'name': 'Banana', 'quatity': 0},
#   {'name': 'Orange', 'quatity': 0}
# ]

# rady y, [9/11/2023 1:49 PM]
# Ex2 - Array
# arr = [1010, 55, 993, 2]
# #1 - How many degit of each number
# [4, 2, 3, 1]
# #2 - Reverse array
# #3 - Sum only number > 2 degit

# rady y, [9/11/2023 1:55 PM]
# Ex3 - Dictionary or object
# studentList = [
#   {'id': 1, 'name': 'dara', 'salary': 250, 'province':'Phnom Penh'},
#   {'id': 2, 'name': 'kaka', 'salary': 540, 'province': 'Ratanakiri'},
#   {'id': 3, 'name': 'bopha', 'salary': 562, 'province': 'Siem Riep'},
#   {'id': 4, 'name': 'chompa', 'salary': 330, 'province': 'Battambang'},
#   {'id': 5, 'name': 'chompey', 'salary': 455, 'province': 'Siem Riep'},
#   {'id': 6, 'name': 'romdul', 'salary': 550, 'province': 'Kratie'},
# ]
# #1 - How many student from "Siem Riep"
# #2 - Find average of student salary
# #3 - Who has higher salary in list
# #4 - Increase salary of Kaka to 670
# #5 - Rename "romdul" to "សុរិយាច័ន្ទ្រាមហាកញ្ញាបទុមកេសរនារីរ៍ត្ន"
# #5 -​ Delete student has id number 5

# rady y, [9/11/2023 2:02 PM]
# Ex4 - Array 2D
# arr2D = [
#   ['*','0','0'],
#   ['*','0','0'],
#   ['*','0','0'],
# ]
# #1 - ouput: Win
# arr2D = [
#   ['*','*','*'],
#   ['0','0','0'],
#   ['0','0','0'],
# ]
# #2 - ouput: Win
# arr2D = [
#   ['*','0','0'],
#   ['0','*','0'],
#   ['0','0','*'],
# ]
# #3 - ouput: Win
# arr2D = [
#   ['*','*','0'],
#   ['0','0','0'],
#   ['0','0','*'],
# ]
#4 - ouput: Lose

