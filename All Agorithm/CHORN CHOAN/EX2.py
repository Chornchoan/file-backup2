def containUpperCase(word):
    i=0
    result =""
    correct=False
    sum = 0
    while i < (len(word)):
        if word[i].isupper() and not correct:
            result+="VALID"
            correct=True
        else:
            result+="INVALID"
        i+=1
        return result
text=input()
print(containUpperCase(text))