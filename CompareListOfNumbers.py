def explainProgram():
    return print("\nGiven a list of integers, this program will return True if the first and last number of the list are the same")


def createListOfNumbers():
    return []


def askForListOfNumbers(listOfNumbers):
    userChoice = 0
    while userChoice == 0:
        listOfNumbers.append(input("\nAdd an integer to the list: "))
        userChoice = int(input("\nType 0 to add another number, type 1 to add no more numbers: "))
    return listOfNumbers


def compareFirstToLast(listOfNumbers):
    return True if listOfNumbers[0] == listOfNumbers[-1] else False


explainProgram()
print(compareFirstToLast(askForListOfNumbers(createListOfNumbers())))
