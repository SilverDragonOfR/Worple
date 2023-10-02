# This is only for the use of site admin.
# It can be used to give a verify, spell check, etc for the words in future.txt
# I have only implemented few features (open to any and all ideas)
# currently using pyspellchecker

# install dependency (in terminal) : pip install pyspellchecker

# to run (in terminal) : "python site-admin.py" or "python <address of python file>"

import time
import os
import sys
from spellchecker import SpellChecker

SYSTEM_ADMIN_NAME = "Pratik"
OUTPUT_SIZE = 70
DISTANCE = 2
PATH_TO_DATASET = os.path.join(os.path.dirname(__file__), "dataset/future.txt")

spell = SpellChecker(distance=DISTANCE)

def print_help():
    print("Type 'all'             ->   to get words in future.txt")
    print("Type 'known'           ->   to get known words in future.txt")
    print("Type 'unknown'         ->   to get unknown words in future.txt")
    print("Type 'check <word>'    ->   to check for valid word")
    print("Type 'best <word>'     ->   to get the best spell check")
    print("Type 'help'            ->   to get help list")
    print("Type '<anything else>' ->   to quit")

print()
print()
print(f"-------- Welcome {SYSTEM_ADMIN_NAME} --------".center(OUTPUT_SIZE))
print()
print()
time.sleep(1)
print_help()
print()
print()

while True:

    i = input("### : ").lower()
    print()

    if i=="all":
        with open(PATH_TO_DATASET, "r") as f:
            word_list = f.read().split("\n")
            print("Words are", word_list)
        print()

    elif i=="known":
        with open(PATH_TO_DATASET, "r") as f:
            word_list = f.read().split("\n")
            known_word_list = spell.known(word_list)
            print("Known words are", known_word_list)
        print()
    elif i=="unknown":
        with open(PATH_TO_DATASET, "r") as f:
            word_list = f.read().split("\n")
            unknown_word_list = spell.unknown(word_list)
            print("Unknown words are", unknown_word_list)
        print()
    elif i[:6]=="check ":
        word_to_check = i[6:]
        if word_to_check in spell:
            print(word_to_check, "IS a word")
        else:
            print(word_to_check, "IS NOT a word")
        print()
    elif i[:5]=="best ":
        word_to_spell = i[5:]
        best_spelling = spell.correction(word_to_spell)
        if best_spelling:
            print(best_spelling, "is closest")
        else:
            print(word_to_spell, "has no correction")
        print()
    elif i=="help":
        print_help()
        print()
    else:
        print(f"-------- Thanks {SYSTEM_ADMIN_NAME} --------".center(OUTPUT_SIZE))
        print()
        break