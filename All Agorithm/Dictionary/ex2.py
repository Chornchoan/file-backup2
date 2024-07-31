# Ex1 - Dictionary or object
studentList=[
  {'id': 1, 'name': 'dara', 'age': 20},
  {'id': 2, 'name': 'kaka', 'age': 20},
  {'id': 3, 'name': 'bopha', 'age': 12},
  {'id': 4, 'name': 'chompa', 'age': 40},
  {'id': 5, 'name': 'chompey', 'age': 30},
  {'id': 6, 'name': 'romdul', 'age': 60},
]
#1 - who is younger in list
# younger=studentList[0]['age']
# youngerName=""
# for student in studentList:
#     if student["age"]<younger:
#         younger=student['age']
#         youngerName=student["name"]
# print(youngerName,younger)

#2 - who  is older in list
# older = studentList[0]["age"]
# olderName=""
# for student in studentList:
#     if student['age']> older:
#         older =student['age']
#         olderName=student["name"]
# print( olderName,older)

#3 - how many student has the same age
sameage=studentList[0]['age']
thesame=""
for student in studentList:
    if student['age']==sameage:
        sameage=student['age']
print(sameage)
#4 - how many student older than "kaka"
#5 - remove student name "romdul" from the list
# index=None
# for i in range(len(studentList)):
#     if studentList[i]['name']=="romdul":
#       index=i
# studentList.pop(index)
# print(studentList)