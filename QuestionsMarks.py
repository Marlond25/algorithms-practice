def QuestionsMarks(str):
    result = False
    auxList = []
    counter = 0

    for i in str:

        if i.isnumeric() and (len(auxList) < 2):
            auxList.append(i)

        if (i == "?") and (len(auxList) > 0):
            counter += 1

        if i.isnumeric() and (len(auxList) == 2):

            if (counter == 3) and (int(auxList[0]) + int(auxList[1]) == 10):
                result = True
            elif (counter != 3) and (int(auxList[0]) + int(auxList[1]) == 10):
                return False

            auxList.clear()
            counter = 0
            auxList.append(i)
    return result

print(QuestionsMarks("arrb???6???lp4x??xbl?6??eee5sDFG?sgfdsg?sG?5sgf????sgfdsddfg4fhd???GHd6???dgh5?dhd???1dhg??ds?ssS9??S5?02??s8"))
